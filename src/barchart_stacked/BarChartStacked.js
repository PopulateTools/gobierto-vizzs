import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { timeFormat } from "d3-time-format";
import { scaleLinear, scaleOrdinal, scaleBand } from 'd3-scale';
import { stack, stackOrderAscending } from 'd3-shape';
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
    this.columns = options.columns || [];
    this.extraLegends = options.extraLegends || [];
    this.showLegend = options.showLegend;
    this.xTimeFormat = options.xTimeFormat || ((d) => (this.isDate(d) ? timeFormat('%b-%Y') : (d => d))(d));
    this.orientationLegend = options.orientationLegend || "left";
    this.showTickValues = options.showTickValues || "";
    this.height = options.height || 400;
    this.sortAxisX = options.sortAxisX;

    this.margin = {
      top: 12,
      bottom: Array.isArray(this.extraLegends) && this.extraLegends.length ? 160 : 36,
      left: this.orientationLegend === 'left' ? 240 : 84,
      right: this.orientationLegend === 'left' ? 48 : 240,
      ...options.margin
    };

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
    this.legendContainer = select(this.container).append("div").attr("class", "gv-legend-bar-stacked")
    this.g.append('text').attr("class", "axis-x-legend").attr("x", -60).attr("y", this.height + 9).attr("dy", "0.71em").attr("text-anchor", "end").text(this.xAxisProp);
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
      .selectAll(".bar-stacked-group")
      .data(stack().keys(this.columns).order(stackOrderAscending)(this.data))
      .join("g")
        .attr("class", "bar-stacked-group")
        .attr("id", ({ key }) => key)
        .attr("fill", ({ key }) => this.scaleColor(key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("class", "bar-stacked-rect")
        .attr("x", d => this.scaleX(d.data[this.xAxisProp]))
        .attr("width", this.scaleX.bandwidth())
        .transition()
        .duration(400)
        .attr("y", ([y1, y2]) => Math.min(this.scaleY(y1), this.scaleY(isNaN(y2) ? 1 : y2)))
        .attr("height", ([y1, y2]) => Math.abs(this.scaleY(y1) - this.scaleY(isNaN(y2) ? y1 : y2)))
        .attr("cursor", "pointer")
      .selection()
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))

    if (this.showLegend) {
      this.buildLegends();
    }

    if (this.extraLegends.length) {
      this.buildExtraAxis();
    }
  }

  buildLegends() {
    this.legendContainer
      .selectAll(".bar-stack-label")
      .remove()

    const sortedColumnKeys = this.columns
      // to sort the legend we need to calculate the sum of the values for every column
      .map((key) => [key, this.data.reduce((acc, { [key]: prop = 0 }) => acc + prop, 0)])
      .sort(([, a], [, b]) => b - a)
      .map(([key]) => key);

    this.legendContainer
      .selectAll(".bar-stack-label")
      .data(stack().keys(sortedColumnKeys)(this.data))
      .join(
        enter => {
          const g = enter
            .append("div")
            .attr("class", "bar-stack-label")

          g.append("span")
            .attr("class", "bar-stack-label-rect")
            .attr("style", ({ key }) => `background-color: ${this.scaleColor(key)}`)

          g.append("span")
            .attr("class", "bar-stacked-legend-text")
            .attr("title", ({ key }) => key)
            .text(({ key }) => key)

          return g;
        },
        update => update,
        exit => exit.remove()
      )
      .on("pointermove", function(_, d) {
          const { key } = d
          const groups = selectAll('.bar-stacked-group')

          groups.filter(({ key: k }) => k !== key)
            .style("opacity", .1)
          groups.filter(({ key: k }) => k === key)
            .style("opacity", 1)
      })
      .on("pointerout", () => {
        selectAll('.bar-stacked-group')
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
      .attr("x", -60)
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
      .text(([y1, y2]) => ((y2 - y1).toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2})))
  }

  xAxis(g) {
    const tickValues = this.showTickValues ? this.scaleX.domain().filter((d,i) => this.showTickValues.includes(i)) : this.scaleX.domain()
    g.call(
      axisBottom(this.scaleX)
        .tickFormat(d => this.xTimeFormat(d))
        .tickPadding(6)
        .tickSize(10)
        .tickValues(tickValues)
    );

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);

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

    this.setColumns(this.columns)

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

    this.svg
      .attr("width", `${this.width + this.margin.left + this.margin.right}`)
      .attr("height", `${this.height + this.margin.top + this.margin.bottom}`);

    this.scaleY = scaleLinear()
      .domain([0, max(stacked, d => max(d, (d) => d[1]))])
      .nice()
      .range([this.height, 0]);

    this.scaleX = scaleBand()
      .domain(this.sortAxisX || [...new Set(this.data.map((d) => d[this.xAxisProp]))])
      .paddingInner(0.5)
      .rangeRound([(this.width / this.data.map((d) => d[this.xAxisProp]).length) / 2, this.width - (this.width / this.data.map((d) => d[this.xAxisProp]).length) / 2]);
  }

  onPointerMove(event, d) {
    const tooltip = this.tooltipContainer.html(this.tooltip(d))
    const [x, y] = this.tooltipPosition(event, this.tooltipContainer.node(), 10);

    tooltip
      .style("top", `${y}px`)
      .style("left", `${x}px`)
      .style("pointer-events", "auto")
      .transition()
      .duration(200)
      .style("opacity", 1);
  }

  onPointerOut() {
    this.tooltipContainer.style("pointer-events", "none").transition().duration(200).style("opacity", 0);
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
                [this.xAxisProp]: this.isDate(d[this.xAxisProp]) ? new Date(d[this.xAxisProp]) : d[this.xAxisProp]
              },
            ]
          : []),
      ];
    }, []).sort(this.sortBy(this.xAxisProp));
  }

  defaultTooltip(d) {
    const tooltipContent = this.columns.map(key => {
      return `
      <div class="tooltip-barchart-stacked-grid">
        <span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span>
        <span class="tooltip-barchart-stacked-grid-key">${key}:</span>
        <span class="tooltip-barchart-stacked-grid-value">${d.data[key]}</span>
      </div>`
    });

    return `
      <span class="tooltip-barchart-stacked-title">${this.xTimeFormat(d.data[this.xAxisProp])}</span>
      ${tooltipContent.join("")}
    `;
  }

  setX(value) {
    this.xAxisProp = value
  }

  setY(value) {
    this.yAxisProp = value
    this.setData(this.rawData)
  }

  setTickValues(value) {
    this.showTickValues = value
  }

  setColumns(value) {
    this.columns = value
  }

  setTooltip(value) {
    this.tooltip = value
    this.build()
  }

  setOnClick(value) {
    this.onClick = value
    this.build()
  }

  setPercentage(value) {
    this.percentage = !!value
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
