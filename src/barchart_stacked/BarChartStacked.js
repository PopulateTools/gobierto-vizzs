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
    this.onClick = options.onClick || (() => {})

    // main properties to display
    this.xAxisProp = options.x || "date";
    this.yAxisProp = options.y || "group";
    this.filterColumns = [...options.filterColumns || "", this.xAxisProp];
    this.columns = Object.keys(data[0]).filter(column => !this.filterColumns.includes(column));
    this.extraLegends = options.extraLegends || [];
    this.showLegend = options.showLegend;
    this.orientationLegend = options.orientationLegend || 'left';

    this.margin = {
      top: 12,
      bottom: 160,
      left: this.orientationLegend === 'left' ? 192 : 84,
      right: this.orientationLegend === 'left' ? 48 : 192,
      ...options.margin
    };

    this.margin.left = !this.showLegend ? 84 : this.margin.left;
    this.margin.right = !this.showLegend ? 48 : this.margin.left;

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
      .append('text')
      .attr("class", "axis-x-legend")
      .attr("x", (-this.margin.left/3))
      .attr("y", this.height + 9)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text(this.xAxisProp);

    this.g
      .selectAll(".bar-stacked-group")
      .data(stack().keys(this.columns)(this.data))
      .join("g")
        .attr("class", "bar-stacked-group")
        .attr("id", ({ key }) => key)
        .attr("fill", ({ key }) => this.scaleColor(key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("class", "bar-stacked-rect")
        .attr("x", d => this.scaleX(d.data[this.xAxisProp]))
        .attr("y", ([y1, y2]) => Math.min(this.scaleY(y1), this.scaleY(y2)))
        .attr("width", this.scaleX.bandwidth())
        .attr('height', ([y1, y2]) => Math.abs(this.scaleY(y1) - this.scaleY(y2)))
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))
      .attr("cursor", "pointer")
      .on("click", (...e) => this.onClick(...e));

    if(this.showLegend) {
      this.buildLegends()
    }

    if(this.extraLegends.length) {
      this.buildExtraAxis()
    }
  }

  buildLegends() {
    const positionLengedGroupX = this.orientationLegend === 'left' ? 0 : (this.width + this.margin.left);
    const positionLengedLabelX = this.orientationLegend === 'left' ? 24 : (positionLengedGroupX + 24);
    this.svg
      .selectAll(".bar-stack-label")
      .data(stack().keys(this.columns)(this.data))
      .join(
        enter => {
          const g = enter
            .append("g")
            .attr("class", "bar-stack-label")
            .attr("fill", ({ key }) => this.scaleColor(key))
            .attr("transform", (d, i) => `translate(10, ${i * 24})`)
          g.append("rect")
            .attr("x", positionLengedGroupX)
            .attr("y", (d, i) => `${this.margin.top + (i * 3)}`)
            .attr("class", "bar-stack-label-rect")
            .attr("width", 16)
            .attr("height", 16)
          g.append("text")
            .attr("class", "bar-stacked-legend-text")
            .attr("x", positionLengedLabelX)
            .attr("y", (d, i) => `${this.margin.top + (i * 3) + 14}`)
            .text(({ key }) => key);

          return g;
        },
        update => update,
        exit => exit.remove()
      )
      .on("pointermove", function(i, d, _) {
          const { key } = d

          selectAll('.bar-stacked-rect')
            .style("opacity", .2)

          selectAll(`#${key} .bar-stacked-rect`)
            .style("opacity", 1)
        })
      .on("pointerout", function(d, i, _) {
        selectAll('.bar-stacked-rect')
          .style("opacity", 1)
      })
  }

  buildExtraAxis() {

    const extra = this.g
      .selectAll(".extra-legend")
      .data(stack().keys(this.extraLegends)(this.data))
      .enter()
      .append("g")
      .attr("class", "extra-legend")
      .attr('transform', (d, i) => `translate(0,${this.height + ((i + 1) * 28)})`)

    extra
      .append("text")
      .attr("class", "extra-legend-text")
      .attr("text-anchor", "end")
      .attr("x", (-this.margin.left / 3))
      .attr("y", (d, i) => `${this.margin.top + (i * 2) + 14}`)
      .text(({ key }) => key);

    extra
      .selectAll('.extra-legend-value')
      .data(d => d)
      .enter()
      .append("text")
      .attr("class", "extra-legend-value")
      .attr("x", d => this.scaleX(d.data[this.xAxisProp]))
      .attr("y", `${this.margin.top + 14}`)
      .text(([y1, y2]) => (y2 - y1).toFixed(2))
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

    console.log("this.data.map((d) => d[this.xAxisProp])", this.data.map((d) => d[this.xAxisProp]));
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
    this.tooltipContainer.style("pointer-events", "none").transition().delay(300).duration(200).style("opacity", 0);
    selectAll(".bar-stacked-rect").transition().duration(200).style("opacity", 1);
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
    const titleIsDate = d.data[this.xAxisProp] && Object.prototype.toString.call(d.data[this.xAxisProp]) === "[object Date]" && !isNaN(d.data[this.xAxisProp])
    const titleTooltip = titleIsDate ? d.data[this.xAxisProp].getFullYear() : d.data[this.xAxisProp]
    const filteredDataByKey = Object.fromEntries(Object.entries(d.data).filter(([key, value]) => !this.filterColumns.includes(key)));
    for (const key in filteredDataByKey) {
      const valueContent = `
        <div class="tooltip-barchart-stacked-grid">
          <span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span>
          <span class="tooltip-barchart-stacked-grid-key">${key}:</span>
          <span class="tooltip-barchart-stacked-grid-value">${filteredDataByKey[key]}</span>
        </div>`
      tooltipContent.push(valueContent);
    }
    //TODO: parse data
    return `
      <span class="tooltip-barchart-stacked-title">${titleTooltip}</span>
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
