import Base from "../base";
import { select, selectAll, mouse } from "d3-selection";
import { treemap, stratify, hierarchy, treemapBinary } from "d3-hierarchy";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { easeLinear } from "d3-ease";
import { interpolate } from "d3-interpolate";
import { flatRollup, mean, median, rollups,rollup, sum } from "d3-array";
// import { nest } from "d3-collection";
import "./TreeMap.css"

export default class TreeMap extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options);

    this.margin = { top: 0, bottom: 0, left: 0, right: 0, ...options.margin };

    // main properties to display
    this.groupProp = options.group || "group";
    this.valueProp = options.value || "value";

    // chart size
    this.getDimensions();
    // static elements (do not redraw)
    this.setupElements();

    if (data.length) {
      // TODO: probar cuando cambian los datos
      this.setColorScale();
      this.setData(data);
    }
  }

  getDimensions() {
    const { width } = this.container.getBoundingClientRect();
    this.width = width - this.margin.left - this.margin.right;
    this.height = width / (16 / 9) - this.margin.top - this.margin.bottom;
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
  }

  build() {
    const render = (group, root) => {
      // TODO: incluir el root cuando esté controlado para el breadcrumb
      const node = group.selectAll("g").data(root.children).join("g");
      // const node = group.selectAll("g").data(root.children.concat(root)).join("g");

      node
        // .filter((d) => (d === root ? d.parent : d.children))
        .attr("cursor", "pointer")
        .on("click", (event, d) => (d === root ? zoomout(root) : zoomin(d)));

      // node.append("title").text((d) => `${this.name(d)}\n${d.value}`);

      node
        .append("rect")
        .attr("id", (d, i) => (d.leafUid = `tm-leaf-${i}`))
        .attr("fill", (d) => { while (d.depth > 1) d = d.parent; return this.scaleColor(d.data.name) })
        .attr("stroke", "#fff");

      node.append("clipPath")
          .attr("id", (d, i) => (d.clipUid = `tm-clip-${i}`))
          .append("use")
          .attr("xlink:href", d => new URL(`#${d.leafUid}`, location));

      node
        .append("text")
        .attr("clip-path", (d) => d.clipUid)
        .attr("font-weight", (d) => (d === root ? "bold" : null))
        .selectAll("tspan")
        .data((d) => (d === root ? name(d) : d.data.name).split(/(?=[A-Z][^A-Z])/g).concat(d[this.valueProp]))
        .join("tspan")
        .attr("x", 3)
        .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr("fill-opacity", (d, i, nodes) => (i === nodes.length - 1 ? 0.7 : null))
        .attr("font-weight", (d, i, nodes) => (i === nodes.length - 1 ? "normal" : null))
        .text((d) => d);

      group.call(position, root);
    };

    const position = (group, root) => {
      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(0, 0)` : `translate(${this.scaleX(d.x0)},${this.scaleY(d.y0)})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? this.width : this.scaleX(d.x1) - this.scaleX(d.x0)))
        .attr("height", (d) => (d === root ? 30 : this.scaleY(d.y1) - this.scaleY(d.y0)));
    };

    const name = (d) => {
      return d
        .ancestors()
        .reverse()
        .map((d) => d.data.name)
        .join("/");
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

    // const tile = (node, x0, y0, x1, y1) => {
    //   treemapBinary(node, 0, 0, this.width, this.height);
    //   for (const child of node.children) {
    //     child.x0 = x0 + child.x0 / this.width * (x1 - x0);
    //     child.x1 = x0 + child.x1 / this.width * (x1 - x0);
    //     child.y0 = y0 + child.y0 / this.height * (y1 - y0);
    //     child.y1 = y0 + child.y1 / this.height * (y1 - y0);
    //   }
    // }

    const root = treemap()(
      hierarchy(this.data)
        .sum((d) => d[this.valueProp])
        .sort((a, b) => b[this.valueProp] - a[this.valueProp])
    );

    this.setScales();

    let group = this.svg.append("g").call(render, root);
  }

  async setData(data) {
    this.data = this.parse(data);

    // wait for the locales resolution before draw anything
    await this.setLocale();
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

  parse(data) {
    const reduce = (v) => sum(v, (d) => d[this.valueProp]);
    const groupBys = Array.isArray(this.groupProp)
      ? this.groupProp.map((prop) => (d) => d[prop])
      : [(d) => d[this.groupProp]];
    // Always must return an object
    return { name: "root", children: this.nest(rollup(data, reduce, ...groupBys)) };
  }

  nest(data) {
    // https://observablehq.com/@bayre/unrolling-a-d3-rollup
    return Array.from(data, ([key, value]) =>
      value instanceof Map ? { name: key, children: this.nest(value) } : { name: key, value: value }
    );
  }
}
