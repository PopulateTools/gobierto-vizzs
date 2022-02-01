import Base from "../commons/base";
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
      this.setData(data);
    }
  }

  getDimensions() {
    const { width, height } = this.container.getBoundingClientRect();
    const minHeight = height > 0 ? height : width / (2 / 1);

    this.width = width - this.margin.left - this.margin.right;
    this.height = minHeight - this.margin.top - this.margin.bottom;
  }

  setupElements() {
    this.svg = select(this.container)
      .classed("gv-container", true)
      .append("svg")
      .attr("class", "gv-plot")
      .on("pointerleave", this.onPointerLeave.bind(this))
    this.tooltipContainer = select(this.container).append("div").attr("class", "gv-tooltip");
  }

  build() {
    const TRANSITION_DURATION = 350

    this.svg.attr(
      "viewBox",
      `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`
    );

    const render = (group, root) => {
      const node = group.selectAll("g").data(root.children.concat(root)).join("g");

      node
        .on("pointerenter", (e, d) => d === root && this.onPointerLeave(e, d))
        .on("pointermove", this.onPointerMove.bind(this))
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

      group.transition().duration(TRANSITION_DURATION).call(position, root);
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
        .attr("height", (d) => (d === root ? this.margin.top : this.scaleY(d.y1) - this.scaleY(d.y0)))
        .selectChild()
        .call((e) =>
          e
            .style("opacity", 0)
            .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", 1)
        )
        .on("end", (d, ix, nodes) => {
          if (d === root) return null

          const node = nodes[ix]
          if (node && node.parentNode) {
            let { width: w, height: h } = node.getBoundingClientRect()
            const { width: pW, height: pH } = node.parentNode.getBoundingClientRect()

            // if the template does not fit in the parent
            if ((w > pW) || (h > pH)) {
              while ((w > pW) || (h > pH)) {
                if (node.lastChild) {
                  // remove children one by one, until the template fits
                  node.lastChild.remove();
                  ({ width: w, height: h } = node.getBoundingClientRect())
                } else break
              }
            }
          }
        })
    };

    const zoomin = (d) => {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = this.svg.append("g").call(render, d));

      this.scaleX.domain([d.x0, d.x1]);
      this.scaleY.domain([d.y0, d.y1]);

      this.svg
        .transition()
        .duration(TRANSITION_DURATION)
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
        .duration(TRANSITION_DURATION)
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
    this.svg.selectAll("*").remove()
    let group = this.svg.append("g").call(render, root);
  }

  async setData(data) {
    this.rawData = data
    this.data = this.parse(data);

    if (!this.scaleColor) {
      this.setColorScale();
    }

    // wait for the locales resolution before draw anything
    await this.getLocale();
    this.build();
  }

  setScales() {
    this.scaleX = scaleLinear().rangeRound([0, this.width]);
    this.scaleY = scaleLinear().rangeRound([0, this.height]);
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal().range(this.PALETTE);
  }

  onPointerMove(event, d) {
    // the breadcrumb group is always the last item, so, if there's no next sibling, it's breadcrumb
    const isBreadcrumb = !event.target.closest("g").nextSibling;
    if (!this.cursorInsideTooltip && !isBreadcrumb && d.parent) {
      const tooltip = this.tooltipContainer.html(this.tooltip(d));
      const [x, y] = this.tooltipPosition(event, this.tooltipContainer.node(), 10);

      tooltip
        .style("top", `${y}px`)
        .style("left", `${x}px`)
        .style("pointer-events", "auto")
        .call((t) => t.transition().duration(400).style("opacity", 1))
        .on("pointerover", () => (this.cursorInsideTooltip = true))
        .on("pointerleave", () => (this.cursorInsideTooltip = false));
    }
  }

  onPointerLeave() {
    if (!this.cursorInsideTooltip) {
      this.tooltipContainer.style("pointer-events", "none").transition().delay(1000).duration(400).style("opacity", 0);
    }
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

  nest(rollup, group) {
    // https://observablehq.com/@bayre/unrolling-a-d3-rollup
    return Array.from(rollup, ([key, value]) =>
      value instanceof Map
        ? { [this.idProp]: key, children: this.nest(value, group.get(key)) }
        : { [this.idProp]: key, children: group.get(key) }
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
    return d.children && d.data.children.map(x => `
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
    this.setData(this.rawData)
  }

  setValue(value) {
    this.valueProp = value
    this.setData(this.rawData)
  }

  setId(value) {
    this.idProp = value
    this.setData(this.rawData)
  }

  setRootTitle(value) {
    this.rootTitle = value
    this.setData(this.rawData)
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
