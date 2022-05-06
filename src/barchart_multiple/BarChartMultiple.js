import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { nest } from 'd3-collection';
import { timeMonth, timeYear } from "d3-time";
import { timeFormat } from "d3-time-format";
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import "d3-transition";
import "./BarChartMultiple.css"

export default class BarChartMultiple extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    // main properties to display
    this.xAxisProp = options.x;
    this.yAxisProp = options.y;
    this.countProp = options.count;
    this.height = options.height || 600

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
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
    this.g.append("g").attr("class", "axis axis-y");
  }

  build() {
    this.setScales();

    const dataNest = nest()
      .key((d) => d[this.xAxisProp])
      .entries(this.data)
      .map((d) => {
        return {
          [this.xAxisProp]: d.key,
          values: d.values
      };
    });

    this.g
      .select(".axis-y")
      .call(this.yAxis.bind(this));

    const gColumn = this.g
      .join('g')
      .attr('class', 'columns-group')
      .selectAll('.column')
      .data(dataNest)
      .join('g')
      .attr('class', 'column')
      .attr('transform', (d) => `translate(${this.scaleColumn(d[this.xAxisProp])},0)`);

    gColumn.append('text')
      .attr('class', 'title')
      .text(d => d[this.xAxisProp]);

    const bars = gColumn
      .join('g')
      .attr('class', 'bars-group');

    bars.selectAll('.bar-chart-small-underlying')
      .data(d => d.values)
      .join('rect')
      .attr('class', 'bar-chart-small-underlying')
      .attr('x', 0)
      .attr('y', (d) => this.scaleY(d[this.yAxisProp]))
      .attr('width', (this.scaleX.range()[1]))
      .attr('height', this.scaleY.bandwidth())
      .attr('opacity', '.2')
      .attr('fill', 'var(--gv-grey)');

    bars.selectAll('.bar-chart-small-overlying')
      .data(d => d.values)
      .join('rect')
      .attr('class', 'bar-chart-small-overlying')
      .attr('x', 0)
      .attr('y', d => this.scaleY(d[this.yAxisProp]))
      .attr('width', d => (this.scaleX(d[this.countProp] / 25)))
      .attr('height', this.scaleY.bandwidth())
      .attr("fill", d => this.scaleColor(d[this.xAxisProp]))

    const self = this
    gColumn.append('g')
      .attr('class', 'labels')
      .selectAll('.label')
      .data(d => d.values)
      .join('text')
      .attr('class', 'label')
      .text(d => d[this.countProp])
      .each(function(d) {
        const xValue = self.scaleX(d[self.countProp] / 25);
        const xMax = self.scaleX.range()[1];
        if (xValue < (0.1 * xMax)) {
          select(this)
            .attr('x', xValue)
        } else {
          select(this)
            .attr("fill","#fff")
            .attr('x', 0)
        }
        select(this)
          .attr('y', self.scaleY(d[self.yAxisProp]) + self.scaleY.bandwidth() / 2)
          .attr('dy', '0.33em')
          .attr('dx', 4);
      });
  }

  yAxis(g) {
    g.call(axisLeft(this.scaleY));

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);

    // change line style defaults
  }

  async setData(data) {
    this.rawData = data
    this.data = this.parse(data)

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
      .domain(this.data.map(d => d[this.yAxisProp]).reverse())
      .range([this.height, 0]).padding(0.4);

    this.scaleColumn = scaleBand()
      .domain(this.data.map(d => d[this.xAxisProp]))
      .range([0, this.width]).paddingInner(0.1);

    this.scaleX = scaleLinear()
      .range([0, this.scaleColumn.bandwidth()]);
  }

  parse(data) {
    // 1. remove those elements with no X axis data
    // 2. enforces the datatypes:
    //    - X axis is Date
    //    - Z axis is Number
    return [...data.reduce((r, o) => {
        const key = o[this.xAxisProp] + '-' + o[this.yAxisProp];

        const item = r.get(key) || Object.assign({}, o, {
          count: 0
        });

        item.count += +(o[this.countProp]);

        return r.set(key, item);
      }, new Map).values()];
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.xAxisProp]))))
      .range(this.PALETTE)
  }

  setX(value) {
    this.xAxisProp = value
    this.setData(this.rawData)
  }

  setY(value) {
    this.yAxisProp = value
    this.setData(this.rawData)
  }

  setMargin(value) {
    this.margin = { ...this.margin, ...value }

    this.container.replaceChildren()
    this.getDimensions()
    this.setupElements()
    this.build()
  }
}
