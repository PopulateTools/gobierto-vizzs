import Base from "../base";
import { select } from "d3-selection";
import { treemap, hierarchy, treemapBinary } from "d3-hierarchy";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { interpolate } from "d3-interpolate";
import { group, rollup, sum } from "d3-array";
import "d3-transition";

import "./TreeMap.css"

export default class TreeMap extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options);

    this.breadcrumb = options.breadcrumb || this.defaultBreadcrumb;
    this.itemTemplate = options.itemTemplate || this.defaultItemTemplate;
    this.tooltip = options.tooltip || this.defaultTooltip;
    this.margin = { top: 30, bottom: 0, left: 0, right: 0, ...options.margin };
    this.onLeafClick = options.onLeafClick || (() => {})

    // main properties to display
    this.groupProp = options.group || "group";
    this.valueProp = options.value; // if no value, use length to compute size
    this.idProp = options.id || "id";
    this.rootTitle = options.rootTitle || "root";

    // chart size
    this.getDimensions();
    // static elements (do not redraw)
    this.setupElements();

    if (data.length) {
      this.rawData = data
      this.setColorScale();
      this.setData(data);
    }
  }

  getDimensions() {
    const { width, height } = this.container.getBoundingClientRect();
    const minHeight = height > 0 ? height : width / (16 / 9);

    this.width = width - this.margin.left - this.margin.right;
    this.height = minHeight - this.margin.top - this.margin.bottom;
  }

  setupElements() {
    this.svg = select(this.container)
      .classed("treemap-container", true)
      .append("svg")
      .attr("class", "treemap-plot")
      .attr(
        "viewBox",
        `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`
      );
    this.g = this.svg.append("g")
    this.tooltipContainer = select(this.container).append("div").attr("class", "treemap-tooltip");
  }

  build() {
    const render = (group, root) => {
      const node = group.selectAll("g").data(root.children.concat(root)).join("g");

      node
        .on("mousemove", this.onMouseMove.bind(this))
        .on("mouseleave", this.debounce(this.onMouseLeave.bind(this), 250))
        // .filter((d) => (d === root ? d.parent : d.children))
        .attr("cursor", "pointer")
        .on("click", (e, d) => (d === root ? zoomout(root) : d.height === 0 ? this.onLeafClick(e, d) : zoomin(d)));

      node
        .append("rect")
        .attr("id", (d) => (d.leafUid = `tm-leaf-${this.seed()}`))
        .attr("fill", (d) => {
          if (d === root) return "transparent";
          while (d.depth > 1) d = d.parent;
          return this.scaleColor(d.data[this.idProp]);
        })
        .attr("stroke", "#fff");

      node
        .append("clipPath")
        .attr("id", (d) => (d.clipUid = `tm-clip-${this.seed()}`))
        .append("use")
        .attr("xlink:href", (d) => new URL(`#${d.leafUid}`, location));

      node
        .append("foreignObject")
        .attr("clip-path", (d) => d.clipUid)
        .append("xhtml:div")
        .attr("class", (d) => (d === root ? "treemap-breadcrumb" : "treemap-item"))
        .html((d) => (d === root ? this.breadcrumb(this.nodePath(d)) : this.itemTemplate(d)))

      group.call(position, root);
    };

    const position = (group, root) => {
      const g = group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(0, 0)` : `translate(${this.scaleX(d.x0)} ${this.scaleY(d.y0) + this.margin.top})`
        );

      g.select("rect")
        .attr("width", (d) => (d === root ? this.width : this.scaleX(d.x1) - this.scaleX(d.x0)))
        .attr("height", (d) => (d === root ? this.margin.top : this.scaleY(d.y1) - this.scaleY(d.y0)));

      g.select("foreignObject")
        .attr("width", (d) => (d === root ? this.width : this.scaleX(d.x1) - this.scaleX(d.x0)))
        .attr("height", (d) => (d === root ? this.margin.top : this.scaleY(d.y1) - this.scaleY(d.y0)));
    };

    const zoomin = (d) => {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = this.svg.append("g").call(render, d));

      this.scaleX.domain([d.x0, d.x1]);
      this.scaleY.domain([d.y0, d.y1]);

      this.svg
        .transition()
        .duration(750)
        .call((t) => group0.transition(t).remove().call(position, d.parent))
        .call((t) =>
          group1
            .transition(t)
            .attrTween("opacity", () => interpolate(0, 1))
            .call(position, d)
        );
    };

    // When zooming out, draw the old nodes on top, and fade them out.
    const zoomout = (d) => {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = this.svg.insert("g", "*").call(render, d.parent));

      this.scaleX.domain([d.parent.x0, d.parent.x1]);
      this.scaleY.domain([d.parent.y0, d.parent.y1]);

      this.svg
        .transition()
        .duration(750)
        .call((t) =>
          group0
            .transition(t)
            .remove()
            .attrTween("opacity", () => interpolate(1, 0))
            .call(position, d)
        )
        .call((t) => group1.transition(t).call(position, d.parent));
    };

    // if there's no value to sum, just count the node
    const valueFn = this.valueProp
      ? hierarchy(this.data)
          .sum((d) => d[this.valueProp])
          .sort((a, b) => b.value - a.value)
      : hierarchy(this.data)
          .count()
          .sort((a, b) => b.value - a.value);

    // tile function required to place the "groupData" (see parse func.)
    const root = treemap().tile(this.tile.bind(this))(valueFn);

    this.setScales();

    // clean the elements before render
    this.g.selectAll("*").remove()
    let group = this.g.call(render, root);
  }

  async setData(data = this.rawData) {
    this.data = this.parse(data);

    // wait for the locales resolution before draw anything
    await this.getLocale();
    this.build();
  }

  setScales() {
    this.scaleX = scaleLinear().rangeRound([0, this.width]);
    this.scaleY = scaleLinear().rangeRound([0, this.height]);
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal().range([
      "var(--tm-color-1)",
      "var(--tm-color-2)",
      "var(--tm-color-3)",
      "var(--tm-color-4)",
      "var(--tm-color-5)",
      "var(--tm-color-6)",
      "var(--tm-color-7)",
      "var(--tm-color-8)",
      "var(--tm-color-9)",
      "var(--tm-color-10)",
      "var(--tm-color-11)",
      "var(--tm-color-12)",
    ]);
  }

  onMouseMove({ clientX, clientY, target }, d) {
    // the breadcrumb group is always the last item, so, if there's no next sibling, it's breadcrumb
    const isBreadcrumb = !target.closest("g").nextSibling;
    if (!this.cursorInsideTooltip && !isBreadcrumb && d.parent && d.data.children) {
      const tooltip = this.tooltipContainer.style("pointer-events", "auto").html(this.tooltip(d));
      const { width: containerWidth, height: containerHeight, left, top } = this.container.getBoundingClientRect();
      const { width: tooltipWidth, height: tooltipHeight } = tooltip.node().getBoundingClientRect();

      const isHorizontalInverted = clientX - left + tooltipWidth > containerWidth;
      const isVerticalInverted = clientY - top + tooltipHeight > containerHeight;

      const offset = 0.02;
      tooltip
        .style(
          "top",
          isVerticalInverted
            ? `${(clientY - top - tooltipHeight) * (1 - offset)}px`
            : `${(clientY - top) * (1 + offset)}px`
        )
        .style(
          "left",
          isHorizontalInverted
            ? `${(clientX - left - tooltipWidth) * (1 - offset)}px`
            : `${(clientX - left) * (1 + offset)}px`
        )
        .call((t) => t.transition().duration(400).style("opacity", 1))
        .on("mouseover", () => (this.cursorInsideTooltip = true))
        .on("mouseleave", () => (this.cursorInsideTooltip = false));
    }
  }

  onMouseLeave() {
    if (!this.cursorInsideTooltip) {
      this.tooltipContainer
        .style("pointer-events", "none")
        .style("opacity", 1)
        .transition()
        .duration(400)
        .style("opacity", 0);
    }
  }

  parse(data) {
    const reduce = this.valueProp ? (v) => sum(v, (d) => d[this.valueProp]) : () => {};
    const groupBys = Array.isArray(this.groupProp)
      ? this.groupProp.map((prop) => (d) => d[prop])
      : [(d) => d[this.groupProp]];

    // since rollup "reduces" the data, it only works for creating the categories
    const rollupData = rollup(data, reduce, ...groupBys);
    // still needing which items belongs to what category, so appends also the group function
    const groupData = group(data, ...groupBys);
    // hierarchies always require an object
    return { [this.idProp]: this.rootTitle, children: this.nest(rollupData, groupData) };
  }

  tile(node, x0, y0, x1, y1) {
    treemapBinary(node, 0, 0, this.width, this.height);
    for (const child of node.children) {
      child.x0 = x0 + (child.x0 / this.width) * (x1 - x0);
      child.x1 = x0 + (child.x1 / this.width) * (x1 - x0);
      child.y0 = y0 + (child.y0 / this.height) * (y1 - y0);
      child.y1 = y0 + (child.y1 / this.height) * (y1 - y0);
    }
  }

  nest(rollup, group) {
    // https://observablehq.com/@bayre/unrolling-a-d3-rollup
    return Array.from(rollup, ([key, value]) =>
      value instanceof Map
        ? { [this.idProp]: key, children: this.nest(value, group.get(key)) }
        : { [this.idProp]: key, [this.valueProp]: value, children: group.get(key) }
    );
  }

  nodePath(d) {
    return d
      .ancestors()
      .reverse()
      .map((d) => d.data[this.idProp]);
  }

  defaultBreadcrumb(d) {
    return d.map((pathName) => `<span>${pathName}</span>`).join("&nbsp;/&nbsp;");
  }

  defaultItemTemplate(d) {
    return [
      `<div><strong>${d.data[this.idProp]}</strong></div>`,
      `<div>${d.value.toLocaleString()}</div>`,
      d.children && `<div>${d.children.length}</div>`,
    ].join("");
  }

  defaultTooltip(d) {
    return d.data.children.map(x => `
      <div class="treemap-tooltip-block">
        ${[
          `<div class="treemap-tooltip-id">${x[this.idProp]}</div>`,
          x[this.valueProp] && `<div class="treemap-tooltip-values">${x[this.valueProp].toLocaleString()}</div>`
        ].join("")}
      </div>
    `).join("");
  }

  setGroup(value) {
    this.groupProp = value
    this.setData()
  }

  setValue(value) {
    this.valueProp = value
    this.setData()
  }

  setId(value) {
    this.idProp = value
    this.setData()
  }

  setRootTitle(value) {
    this.rootTitle = value
    this.setData()
  }

  setItemTemplate(value) {
    this.itemTemplate = value
    this.build()
  }

  setBreadcrumb(value) {
    this.breadcrumb = value
    this.build()
  }

  setTooltip(value) {
    this.tooltip = value
    this.build()
  }

  setOnLeafClick(value) {
    this.onLeafClick = value
    this.build()
  }

  setMargin(value) {
    this.margin = { ...this.margin, ...value }

    this.container.replaceChildren()
    this.getDimensions()
    this.setupElements()
    this.build()
  }
}
