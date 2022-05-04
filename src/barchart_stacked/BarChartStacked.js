import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { extent } from "d3-array";
import { timeMonth, timeYear } from "d3-time";
import { timeFormat } from "d3-time-format";
import { scaleLinear, scaleOrdinal, scaleBand } from 'd3-scale';
import { stack } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import "d3-transition";
import "./BarChartStacked.css"

export default class BarChartStacked extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    this.tooltip = options.tooltip || this.defaultTooltip
    this.margin = { top: 12, bottom: 24, left: 320, right: 48, ...options.margin };
    this.onClick = options.onClick || (() => {})

    // main properties to display
    this.xAxisProp = options.x || "date";
    this.yAxisProp = options.y || "group";
    this.valueProp = options.value || "value";
    this.idProp = options.id || "id";
    this.filterColumns = [...options.filterColumns || "", this.xAxisProp]
    this.columns = Object.keys(data[0]).filter(column => !this.filterColumns.includes(column))
    this.xAxisExtra = options.axisEstra || []

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
    this.g.append("g").attr("class", "axis axis-y");
    this.tooltipContainer = select(this.container).append("div").attr("class", "gv-tooltip gv-tooltip-bar-stacked")
  }

  build() {
    this.setScales();

    this.g
      .select(".axis-x")
      .attr("transform", `translate(0 ${this.height})`)
      .call(this.xAxis.bind(this));

    this.g
      .select(".axis-y")
      .call(this.yAxis.bind(this));

    this.g
      .selectAll(".bar-stacked")
      .data(stack().keys(this.columns)(this.data))
      .join("g")
        .attr("class", "bar-stacked")
        .attr("fill", d => this.scaleColor(d.key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("x", d => this.scaleX(d.data[this.xAxisProp]))
        .attr("y", ([y1, y2]) => Math.min(this.scaleY(y1), this.scaleY(y2)))
        .attr("width", this.scaleX.bandwidth())
        .attr('height', ([y1, y2]) => Math.abs(this.scaleY(y1) - this.scaleY(y2)))
        .on("touchmove", e => e.preventDefault())
        .on("pointermove", this.onPointerMove.bind(this))
        .on("pointerout", this.onPointerOut.bind(this))
        .attr("cursor", "pointer")
        .on("click", (...e) => this.onClick(...e));

    this.buildLegends()
    /*this.setAxisExtra()*/
  }

  buildLegends() {
    this.svg
      .selectAll(".bar-stack-label")
      .data(stack().keys(this.columns)(this.data))
      .join(
        enter => {
          const g = enter
            .append("g")
            .attr("class", "bar-stack-label")
            .attr("fill", d => this.scaleColor(d.key))
            .attr("transform", (d, i) => `translate(10, ${i * 24})`);
          g.append("rect")
            .attr("x", 0)
            .attr("y", (d, i) => `${this.margin.top + (i * 3)}`)
            .attr("width", 16)
            .attr("height", 16)
          g.append("text")
            .attr("class", "bar-stacked-legend-text")
            .attr("x", 24)
            .attr("y", (d, i) => `${this.margin.top + (i * 3) + 14}`)
            .text(d => d.key);
          return g;
        },
        update => update,
        exit => exit.remove()
      );
  }

  xAxis(g) {
    const months = timeMonth.count(...this.scaleX.domain())
    const hasMultipleYears = months > 24;
    const onlyOneYear = months < 12;

    g.call(
      axisBottom(this.scaleX)
        .tickFormat(hasMultipleYears ? timeFormat("%Y") : onlyOneYear ? timeFormat("%b") : timeFormat("%b-%Y"))
    );

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);

    // change line style defaults
    g.selectAll("line").remove();
  }

  yAxis(g) {
    g.call(axisLeft(this.scaleY).tickSize(-this.width));

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);

    // change line style defaults
    g.selectAll("line").attr("stroke-dasharray", 1).attr("stroke", "var(--gv-grey)");

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
      .domain(Array.from(new Set(this.data.map((d) => d[this.yAxisProp]))))
      .range(this.PALETTE)
  }

  setScales() {

    const stacked = stack().keys(this.columns)(this.data);

    this.height = 400
    this.svg
      .attr("width", `${this.width + this.margin.left + this.margin.right}`)
      .attr("height", `${this.height + this.margin.top + this.margin.bottom}`);

    this.scaleY = scaleLinear()
      .domain([0, max(stacked[stacked.length - 1], d => d[1])])
      .range([this.height, 0]);

    this.scaleX = scaleBand()
      .domain(this.data.map((d) => d[this.xAxisProp]))
      .paddingInner(0.5)
      .rangeRound([0, this.width]);
  }

  onPointerMove(event, d) {

    const tooltip = this.tooltipContainer.html(this.tooltip(d))
    const [x, y] = this.tooltipPosition(event, this.tooltipContainer.node(), 10);

    tooltip
      .style("top", `${y}px`)
      .style("left", `${x}px`)
      .style("pointer-events", "auto")
      .transition()
      .duration(400)
      .style("opacity", 1);
  }

  onPointerOut() {
    this.tooltipContainer.style("pointer-events", "none").transition().delay(1000).duration(400).style("opacity", 1);
    selectAll(".bar-stacked").transition().duration(400).style("opacity", 1);
  }

  parse(data) {
    // 1. remove those elements with no X axis data
    // 2. enforces the datatypes:
    //    - X axis is Date
    //    - Z axis is Number
    return data.reduce((acc, d) => {
      return [
        ...acc,
        // https://2ality.com/2017/04/conditional-literal-entries.html
        ...(!!d[this.xAxisProp]
          ? [
              {
                ...d,
                [this.xAxisProp]: new Date(d[this.xAxisProp])
              },
            ]
          : []),
      ];
    }, []);
  }

  defaultTooltip(d) {
    let tooltipContent = [];
    const filteredDataByKey = Object.fromEntries(Object.entries(d.data).filter(([key, value]) => !this.filterColumns.includes(key)));
    for (const key in filteredDataByKey) {
      const valueContent = `<div class="tooltip-barchart-stacked-grid"><span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span><span class="tooltip-barchart-stacked-grid-key">${key}:</span><span class="tooltip-barchart-stacked-grid-value">${filteredDataByKey[key]}</span></div>`
      tooltipContent.push(valueContent);
    }
    return `
      <span class="tooltip-barchart-stacked-title">${d.data[this.xAxisProp].toLocaleDateString()}</span>
      ${tooltipContent.join("")}
      `;
  }

  setX(value) {
    this.xAxisProp = value
    this.setData(this.rawData)
  }

  setY(value) {
    this.yAxisProp = value
    this.setData(this.rawData)
  }

  setValue(value) {
    this.valueProp = value
    this.setData(this.rawData)
  }

  setId(value) {
    this.idProp = value
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
