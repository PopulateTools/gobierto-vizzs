import Base from "../commons/base";
import { select, pointer } from "d3-selection";
import { scaleOrdinal, scaleBand, scaleTime } from "d3-scale";
import { axisTop } from "d3-axis";
import { max, min } from "d3-array";
import { timeFormat } from "d3-time-format";
import { timeMonth, timeYear } from "d3-time";
import "d3-transition";
import "./Gantt.css"

export default class Gantt extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    // this.tooltip = options.tooltip || this.defaultTooltip
    this.margin = { top: 30, bottom: 0, left: 0, right: 0, ...options.margin };
    this.onClick = options.onClick || (() => {})
    this.tooltip = options.tooltip || this.defaultTooltip;

    // main properties to display
    this.fromProp = options.from || "from";
    this.toProp = options.to || "to";
    this.xAxisProp = options.x || "phase";
    this.yAxisProp = options.y || "group";
    this.idProp = options.id || "id";

    // band item height
    this.BAR_HEIGHT = options.barHeight || 10;

    // chart size
    this.getDimensions();
    // static elements (do not redraw)
    this.setupElements();

    if (data.length) {
      this.setData(data)
    }
  }

  getDimensions() {
    const { width } = this.container.getBoundingClientRect();
    this.width = width - this.margin.left - this.margin.right;
  }

  setupElements() {
    this.svg = select(this.container).classed("gv-container", true).append("svg").attr("class", "gv-plot");
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
    this.g.append("g").attr("class", "axis axis-x");
    this.tooltipContainer = select(this.container).append("div").attr("class", "gv-tooltip")
    this.legendContainer = select(this.container).append("div").attr("class", "gv-legend")
  }

  build() {
    this.setScales();

    this.g
      .select(".axis-x")
      .call(this.xAxis.bind(this));

    this.g
      .selectAll("rect.gantt-item")
      .data(this.data, d => d[this.idProp])
      .join((enter) =>
        enter
          .append("rect")
          .attr("class", "gantt-item")
          .attr("x", (d) => this.scaleX(d[this.fromProp]))
          .attr("y", (d) => this.scaleY(d[this.yAxisProp]))
          .attr("width", (d) => this.scaleX(d[this.toProp]) - this.scaleX(d[this.fromProp]))
          .attr("height", this.scaleY.bandwidth())
          .attr("fill", (d) => this.scaleColor(d[this.xAxisProp]))
      )
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))
      .attr("cursor", "pointer")
      .on("click", (...e) => this.onClick(...e));

    this.legendContainer.html(this.legend(this.data, this.xAxisProp))
  }

  xAxis(g) {
    const months = timeMonth.count(...this.scaleX.domain())
    const hasMultipleYears = months > 48;
    const onlyOneYear = months < 12;

    g.call(
      axisTop(this.scaleX)
        .tickFormat(hasMultipleYears ? timeFormat("%Y") : onlyOneYear ? timeFormat("%b") : timeFormat("%b-%Y"))
        .tickSize(-this.height)
        .ticks(hasMultipleYears ? timeYear : timeMonth)
        .tickPadding(10)
    );

    // since the chart shows y-axis lines for each month...
    if (g.selectAll(".tick").size() > 8) {
      // ...the labels must be removed to fit inside
      g.selectAll(".tick:not(:nth-child(3n + 1)) text").remove()
    }

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);
  }

  async setData(data) {
    this.rawData = data
    this.data = this.parse(data)

    // only set the color scale, as of the first time you get the data
    if (!this.scaleColor) {
      this.setColorScale();
    }

    // wait for the locales resolution before draw anything
    await this.getLocale()
    this.build();
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.xAxisProp]))))
      .range(this.PALETTE)
  }

  setScales() {
    const groups = Array.from(new Set(this.data.map(x => x[this.yAxisProp])))

    const paddingInner = 0.1
    // the chart reflows based on the amount of groups (categories) it has
    this.height = groups.length * this.BAR_HEIGHT * (1 + paddingInner)
    this.svg.attr(
      "viewBox",
      `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`
    );

    this.scaleY = scaleBand()
      .domain(groups)
      .range([0, this.height])
      .paddingInner(paddingInner)
      .round(true)

    this.scaleX = scaleTime()
      .domain([min(this.data, (d) => d[this.fromProp]), max(this.data, (d) => d[this.toProp])])
      .rangeRound([0, this.width]);
  }

  parse(data) {
    // 1. remove those elements with no FROM/TO axis data
    // 2. enforces the datatypes: FROM/TO as Dates
    // 3. sort the array by FROM
    return data.reduce((acc, d) => {
      return [
        ...acc,
        // https://2ality.com/2017/04/conditional-literal-entries.html
        ...((!!d[this.fromProp] || !!d[this.toProp])
          ? [
              {
                ...d,
                [this.fromProp]: new Date(d[this.fromProp]),
                [this.toProp]: new Date(d[this.toProp]),
              },
            ]
          : []),
      ];
    }, []).sort(this.sortBy(this.fromProp));
  }

  legend(data, key) {
    const items = [...new Set(data.map(x => x[key]))]
    return items.map(x => `
      <div class="gantt-legend-item">
        <i style="background-color: ${this.scaleColor(x)}"></i>
        <span>${x}</span>
      </div>`).join("")
  }

  onPointerMove(event, d) {
    const tooltip = this.tooltipContainer.html(this.tooltip(d))

    const rects = this.g.selectAll("rect.gantt-item")
    rects
      .filter((x) => x[this.yAxisProp] !== d[this.yAxisProp])
      .transition()
      .duration(400)
      .style("fill-opacity", 0.25);

    const [x, y] = this.tooltipPosition(event, this.tooltipContainer.node(), 10);
    tooltip
      .style("top", `${y}px`)
      .style("left", `${x}px`)
      .style("pointer-events", "auto")
      .transition()
      .duration(400)
      .style("opacity", 1);
  }

  onPointerOut(_, d) {
    this.g
      .selectAll("rect.gantt-item")
      .filter((x) => x[this.yAxisProp] !== d[this.yAxisProp])
      .transition()
      .duration(400)
      .style("fill-opacity", null);
    this.tooltipContainer.style("pointer-events", "none").transition().delay(1000).duration(400).style("opacity", 0);
  }

  defaultTooltip(d) {
    const group = this.data.filter(x => x[this.yAxisProp] === d[this.yAxisProp])
    return [
      `<div class="gantt-tooltip-id">${d[this.yAxisProp]}</div>`,
      ...group.map(g => `
        <div class="gantt-tooltip-values">
          <span>${g[this.xAxisProp]}:</span>
          <span>${g[this.fromProp].toLocaleDateString()} - ${g[this.toProp].toLocaleDateString()}</span>
        </div>
      `)
    ].join("")
  }

  setX(value) {
    this.xAxisProp = value
    this.setData(this.rawData)
  }

  setY(value) {
    this.yAxisProp = value
    this.setData(this.rawData)
  }

  setFrom(value) {
    this.fromProp = value
    this.setData(this.rawData)
  }

  setTo(value) {
    this.toProp = value
    this.setData(this.rawData)
  }

  setBarHeight(value) {
    this.BAR_HEIGHT = value
    this.build()
  }

  setTooltip(value) {
    this.tooltip = value
    this.build()
  }

  setOnClick(value) {
    this.onClick = value
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
