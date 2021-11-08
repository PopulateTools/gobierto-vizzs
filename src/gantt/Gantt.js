import Base from "../base";
import { select } from "d3-selection";
import { scaleOrdinal, scaleBand, scaleTime } from "d3-scale";
import { axisTop } from "d3-axis";
import { max, min } from "d3-array";
import { timeFormat } from "d3-time-format";
import { timeMonth } from "d3-time";
import "./Gantt.css"

export default class Gantt extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    // this.tooltip = options.tooltip || this.defaultTooltip
    this.margin = { top: 30, bottom: 0, left: 0, right: 0, ...options.margin };
    this.onClick = options.onClick || (() => {})

    // main properties to display
    this.fromProp = options.from || "from";
    this.toProp = options.to || "to";
    this.yAxisProp = options.y || "group";
    // this.valueProp = options.value || "value";
    // this.idProp = options.id || "id";
    // this.relationProp = options.relation;

    // band item height
    this.BAR_HEIGHT = options.barHeight || 20;

    // the use of the unique seed is about appending no-conflicting properties in the dataset
    this.uniqueSeed = this.seed()

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
    this.svg = select(this.container).classed("gantt-container", true).append("svg").attr("class", "gantt-plot");
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
    this.g.append("g").attr("class", "axis axis-x");
    this.tooltipContainer = select(this.container).append("div").attr("class", "gantt-tooltip")
    this.legendContainer = select(this.container).append("div").attr("class", "gantt-legend")
  }

  build() {
    this.setScales();

    this.g
      .select(".axis-x")
      .call(this.xAxis.bind(this));

    this.g
      .selectAll("rect.gantt-item")
      .data(this.data, d => d[this.yAxisProp])
      .join((enter) =>
        enter
          .append("rect")
          .attr("class", "gantt-item")
          .attr("x", (d) => this.scaleX(d[this.fromProp]))
          .attr("y", (d) => this.scaleY(d[this.yAxisProp]))
          .attr("width", (d) => this.scaleX(d[this.toProp]) - this.scaleX(d[this.fromProp]))
          .attr("height", this.scaleY.bandwidth())
          .attr("fill", (d) => this.scaleColor(d[`group-ix-${this.uniqueSeed}`]))
      )

    this.legendContainer.html(this.legend(this.data, `group-ix-${this.uniqueSeed}`))
  }

  xAxis(g) {
    const months = timeMonth.count(...this.scaleX.domain())
    const hasMultipleYears = months > 24;
    const onlyOneYear = months < 12;

    g.call(
      axisTop(this.scaleX)
        .tickFormat(hasMultipleYears ? timeFormat("%Y") : onlyOneYear ? timeFormat("%b") : timeFormat("%b-%Y"))
        .tickSize(-this.height)
        .ticks(hasMultipleYears ? 5 : timeMonth.every(3))
        .tickPadding(5)
    );

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
      .range(Array.from({ length: 12 }, (_, i) => `var(--gv-color-${i + 1})`));
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
    const groups = this.groupBy(data, this.yAxisProp)

    // 1. remove those elements with no FROM/TO axis data
    // 2. enforces the datatypes: FROM/TO as Dates
    // 3. add the position in the group (useful for colorize)
    // 4. sort the array by FROM
    return data.reduce((acc, d) => {
      const itemGroup = groups[d[this.yAxisProp]].sort(this.sortBy(this.fromProp))
      const itemPosition = itemGroup.findIndex(x => x[this.fromProp] === d[this.fromProp])
      return [
        ...acc,
        // https://2ality.com/2017/04/conditional-literal-entries.html
        ...((!!d[this.fromProp] || !!d[this.toProp])
          ? [
              {
                ...d,
                [this.fromProp]: new Date(d[this.fromProp]),
                [this.toProp]: new Date(d[this.toProp]),
                [`group-ix-${this.uniqueSeed}`]: itemPosition
              },
            ]
          : []),
      ];
    }, []).sort(this.sortBy(this.fromProp));
  }

  legend(data, key) {
    const items = [...new Set(data.map(x => x[key]))]
    return items.map(x => `
      <div style="display: flex">
        <i style="width: 10px; height: 10px; background-color: ${this.scaleColor(x)}"></i>
        <span>${x}</span>
      </div>`).join("")
  }
}
