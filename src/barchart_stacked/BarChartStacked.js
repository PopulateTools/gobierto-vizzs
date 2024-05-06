import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { max, sum, union, group } from 'd3-array';
import { scaleLinear, scaleOrdinal, scaleBand } from 'd3-scale';
import { stack, stackOrderAscending, stackOffsetExpand } from 'd3-shape';
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
    this.countProp = options.count;
    this.extraLegends = options.extraLegends || [];
    this.showLegend = options.showLegend;
    this.ratio = options.ratio || "absolute";
    this.xTickFormat = options.xTickFormat || (d => d);
    this.yTickFormat = options.yTickFormat || (d => d.toLocaleString());
    this.orientationLegend = options.orientationLegend || "left";
    this.height = options.height || 400;
    this.categories = options.categories;
    this.xTickValues = options.xTickValues;
    this.yTickValues = options.yTickValues;

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
    this.tooltipContainer = select(this.container).append("div").attr("class", "gv-tooltip gv-tooltip-bar-stacked");
    this.legendContainer = select(this.container)
      .append("div")
      .attr("class", "gv-legend-bar-stacked")
      .classed("gv-legend-bar-stacked-right", this.orientationLegend === "right");
    this.g
      .append("text")
      .attr("class", "axis-x-legend")
      .attr("x", this.orientationLegend === "right" ? this.width + 10 : -60)
      .attr("y", this.height + 9)
      .attr("dy", "0.71em")
      .attr("text-anchor", this.orientationLegend === "right" ? "start" : "end")
      .text(this.xAxisProp);
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
      .data(this.series)
      .join("g")
        .attr("class", "bar-stacked-group")
        .attr("id", ({ key }) => key)
        .attr("fill", ({ key }) => this.scaleColor(key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("class", "bar-stacked-rect")
        .attr("x", d => this.scaleX(d.data[0]))
        .attr("width", this.scaleX.bandwidth())
        .transition()
        .duration(400)
        .attr("y", d => this.scaleY(d[1]))
        .attr("height", d => this.scaleY(d[0]) - this.scaleY(d[1]))
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

    this.legendContainer
      .selectAll(".bar-stack-label")
      .data(this.series.sort((a, b) => sum(b, d => d[1] - d[0]) - sum(a, d => d[1] - d[0])))
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
      .text(([y1, y2]) => ((y2 - y1).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })))
  }

  xAxis(g) {
    g.call(
      axisBottom(this.scaleX)
        .tickValues(this.xTickValues)
        .tickFormat(d => this.xTickFormat(d))
        .tickPadding(6)
        .tickSize(10)
    );

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);
  }

  yAxis(g) {
    g.call(
      axisLeft(this.scaleY)
        .tickValues(this.yTickValues || this.scaleY.ticks().filter(x => !(this.ratio !== "percentage" && !Number.isInteger(x))))
        .tickSize(-this.width)
        .tickFormat((d) => this.ratio === "percentage" ? d.toLocaleString(undefined, { style: "percent" }) : this.yTickFormat(d))
    );

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

    const grouped = group(this.data, d => d[this.xAxisProp], d => d[this.yAxisProp])
    // https://d3js.org/d3-shape/stack#_stack
    this.series = stack()
      .keys(union(this.data.map((d) => d[this.yAxisProp])))
      .value(([, group], key) => {
        const item = group.get(key)
        if (!item) return 0

        return !!this.countProp
        // in case countProp is defined, we group using that property
        // otherwise, we count the amount of items
          ? item.reduce((acc, d) => acc + d[this.countProp], 0)
          : item.length;
      })
      .order(stackOrderAscending)
      .offset(this.ratio === "percentage" ? stackOffsetExpand : d => d)(grouped);

    await this.getLocale()

    this.build();
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.yAxisProp]))))
      .range(this.PALETTE)
  }

  setScales() {
    this.svg
      .attr("width", `${this.width + this.margin.left + this.margin.right}`)
      .attr("height", `${this.height + this.margin.top + this.margin.bottom}`);

    this.scaleY = scaleLinear()
      .domain([0, this.ratio === "percentage" ? 1 : max(this.series, d => max(d, (d) => d[1]))])
      .nice()
      .range([this.height, 0]);

    this.scaleX = scaleBand()
      .domain(this.categories || [...new Set(this.data.map((d) => d[this.xAxisProp]))])
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
    // 1. remove those elements with no X axis nor Y axis data
    // 2. enforce numeric type for countProp
    return data.reduce((acc, item) => {
      // enforce data object to define X-axis and Y-axis properties
      if (Object.hasOwnProperty(item, this.xAxisProp) || Object.hasOwnProperty(item, this.yAxisProp)) return acc

      if (this.countProp) {
        // whenever this property is defined, ensure to be numeric
        item[this.countProp] = +item[this.countProp] || 0
      }

      acc.push(item)

      return acc
    }, []).sort(this.sortBy(this.xAxisProp));
  }

  defaultTooltip(d) {
    const tooltipContent = Array.from(d.data[1]).map(([key, values]) => {
      const value = this.countProp ? values.reduce((acc, item) => acc + item[this.countProp], 0) : values.length;
      return `
      <div class="tooltip-barchart-stacked-grid">
        <span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span>
        <span class="tooltip-barchart-stacked-grid-key">${key}:</span>
        <span class="tooltip-barchart-stacked-grid-value">${value}</span>
      </div>`
    });

    return `
      <span class="tooltip-barchart-stacked-title">${this.xTickFormat(d.data[0])}</span>
      ${tooltipContent.join("")}
    `;
  }

  setX(value) {
    this.xAxisProp = value
  }

  setY(value) {
    this.yAxisProp = value
  }

  setCount(value) {
    this.countProp = value
  }

  setXTickValues(value) {
    this.xTickValues = value
  }

  setYTickValues(value) {
    this.yTickValues = value
  }

  setTooltip(value) {
    this.tooltip = value
  }

  setOnClick(value) {
    this.onClick = value
  }

  setRatio(value) {
    this.ratio = value
  }

  setCategories(value) {
    this.categories = value
  }

  setMargin(value) {
    this.margin = { ...this.margin, ...value }

    this.container.replaceChildren()
    this.getDimensions()
    this.setupElements()
    this.build()
  }
}
