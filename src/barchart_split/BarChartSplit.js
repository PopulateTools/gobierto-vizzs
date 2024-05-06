import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { max, group, groupSort } from 'd3-array';
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import "d3-transition";
import "./BarChartSplit.css"

export default class BarChartSplit extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    this.tooltip = options.tooltip || this.defaultTooltip

    // main properties to display
    this.xAxisProp = options.x;
    this.yAxisProp = options.y;
    this.countProp = options.count;
    this.ratio = options.ratio || "absolute";
    this.height = options.height || 600
    this.moveLabels = options.moveLabels
    this.yTickFormat = options.yTickFormat || (d => d);
    this.yTickValues = options.yTickValues;
    this.categories = options.categories

    this.margin = {
      top: 36,
      bottom: 24,
      left: 120,
      right: 48,
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
    this.tooltipContainer = select(this.container).append("div").attr("class", "gv-tooltip gv-tooltip-bar-chart-small")
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
    this.g.append("g").attr("class", "axis axis-y");
  }

  build() {
    this.setScales();

    const dataGroup = group(this.data, (d) => d[this.xAxisProp]);

    this.g
      .select(".axis-y")
      .call(this.yAxis.bind(this));

    this.g
      .selectAll(".title")
      .remove()
      .selectAll(".wrap-text")
      .remove();

    const gColumn = this.g
      .selectAll(".column")
      .data(dataGroup, ([key]) => key)
      .join("g")
      .attr("class", "column")
      .attr("transform", ([key]) => `translate(${this.scaleColumn(key) + 5},0)`);

    const maxWidthColumn = this.width / [...new Set(this.data.map(d => d[this.xAxisProp]))].length
    gColumn.append("text")
      .attr("class", "title")
      .text(([ key ]) => key)
      .attr("y", -21)
      .call(this.wrap, maxWidthColumn);

    gColumn.selectAll(".bar-chart-small-underlying")
      .data(this.scaleY.domain())
      .join("rect")
        .attr("x", 0)
        .attr("y", (d) => this.scaleY(d))
        .attr("width", this.scales.range()[1])
        .attr("height", this.scaleY.bandwidth())
        .attr("opacity", ".2")
        .attr("fill", "var(--gv-grey)")
        .attr("class", "bar-chart-small-underlying")

    gColumn.selectAll(".bar-chart-small-overlying")
      .data(([, values]) => values)
      .join("rect")
        .attr("x", 0)
        .attr("y", (d) => isNaN(this.scaleY(d[this.yAxisProp])) ? 0 : this.scaleY(d[this.yAxisProp]))
        .attr("width", d => this.scales(d[this.countProp]))
        .attr("height", this.scaleY.bandwidth())
        .attr("fill", d => this.scaleColor(d[this.xAxisProp]))
        .attr("class", "bar-chart-small-overlying")
        .attr("cursor", "pointer")
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))
  }

  yAxis(g) {
    g.call(
     axisLeft(this.scaleY)
     .tickValues(this.yTickValues)
     .tickFormat(d => this.yTickFormat(d))
     .tickPadding(6)
     .tickSize(10)
    );

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);
  }

  async setData(data) {
    this.rawData = data
    this.data = this.parse(data)
    this.groupAxisProps = [...new Set(this.data.map(d => d[this.xAxisProp]).filter(item => item))];

    // only set the color scale, as of the first time you get the data
    if (!this.scaleColor) {
      this.setColorScale();
    }

    this.build();
  }

  setScales() {
    this.svg
      .attr("width", `${this.width + this.margin.left + this.margin.right}`)
      .attr("height", `${this.height + this.margin.top + this.margin.bottom}`);

    this.scaleY = scaleBand()
      .domain(this.categories || [...new Set(this.data.map(d => d[this.yAxisProp]))].reverse())
      .range([this.height, 0])
      .padding(0.4)

    // https://d3js.org/d3-array/group#groupSort
    const dataGroupSorted = groupSort(this.data, (D) => -1 * D.reduce((acc, { [this.countProp]: count = 0 }) => acc + count, 0), (d) => d[this.xAxisProp]);

    this.scaleColumn = scaleBand()
      .domain(dataGroupSorted)
      .range([0, this.width]).paddingInner(0.4);

    this.scaleXMax = this.groupAxisProps.map((scale) => {
      return max(this.data.filter(element => scale.includes(element[this.xAxisProp])), (d) => d[this.countProp])
    })

    this.scales = scaleLinear()
      .range([0, this.scaleColumn.bandwidth()])
      .domain([0, max(this.scaleXMax)]).nice();
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
    selectAll(".bar-chart-small").transition().duration(200).style("opacity", 1);
  }

  parse(data) {
    // Your data can contains multiple elements
    // with the same xAxisProp and yAxisProp
    // we need to group them and sum their value of countProp
    return [...data.reduce((acc, item) => {
      // enforce data object to define X-axis and Y-axis properties
      if (Object.hasOwnProperty(item, this.xAxisProp) || Object.hasOwnProperty(item, this.yAxisProp) || Object.hasOwnProperty(item, this.countProp)) return acc

      const key = `${item[this.xAxisProp]}-${item[this.yAxisProp]}`;
      const value = acc.get(key)

      if (value) {
        item[this.countProp] = value[this.countProp] + item[this.countProp] || 0;
        item.count = value.count + 1;

        return acc.set(key, item)
      }

      item[this.countProp] = item[this.countProp] || 0;

      return acc.set(key, { ...item, count: 1 });
    }, new Map()).values()].sort(this.sortBy(this.yAxisProp));;
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.xAxisProp]))))
      .range(this.moveLabels ? this.PALETTE : this.PALETTE.filter(element => element !== 'var(--gv-color-6)'))
  }

  defaultTooltip(d) {
    return `
      <div class="bar-chart-small-tooltip">
        <h2 class="bar-chart-small-tooltip-title">${d[this.yAxisProp]}</h2>
        <span class="bar-chart-small-tooltip-value">${d[this.countProp]}</span>
      </div>
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

  setYTickValues(value) {
    this.yTickValues = value
  }

  setCategories(value) {
    this.categories = value
  }

  setTooltip(value) {
    this.tooltip = value
  }

  setMargin(value) {
    this.margin = { ...this.margin, ...value }

    this.container.replaceChildren()
    this.getDimensions()
    this.setupElements()
    this.build()
  }
}
