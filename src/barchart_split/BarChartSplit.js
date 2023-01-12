import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { min, max, group } from 'd3-array';
import { timeMonth, timeYear } from "d3-time";
import { timeFormat } from "d3-time-format";
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import "d3-transition";
import "./BarChartSplit.css"

export default class BarChartSplit extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)

    // main properties to display
    this.xAxisProp = options.x;
    this.yAxisProp = options.y;
    this.countProp = options.count;
    this.height = options.height || 600
    this.moveLabels = options.moveLabels
    this.valueIsMoney = options.valueIsMoney
    this.showValueOnHover = options.showValueOnHover
    this.scales = [];
    this.groupAxisProps = [];

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

    const dataGroup = group(this.data, (d) => d[this.xAxisProp]);
    const that = this;

    this.g
      .select(".axis-y")
      .call(this.yAxis.bind(this));

    const gColumn = this.g
      .selectAll(".column")
      .data(dataGroup, ([key]) => key)
      .join("g")
      .attr("class", "column")
      .attr("id", (d,i) => `column-${d[0].replace(/ /g, '').replace(/[\u00f1-\u036f]/g, '').replace(/</g, '').replace(/>/g, '').replace(/=/g, '')}`)
      .attr("transform", ([key]) => `translate(${this.scaleColumn(key)},0)`);

    gColumn.append("text")
      .attr("class", "title")
      .text(([ key ]) => key)
      .call(this.wrap, this.width / [...new Set(this.data.map(d => d[this.xAxisProp]))].length);

    gColumn.selectAll(".bar-chart-small-underlying")
      .data(([, values]) => values)
      .join("rect")
      .attr("class", "bar-chart-small-underlying")
      .attr("id", (d,i) => i)
      .attr("x", 0)
      .attr("y", (d) => this.scaleY(d[this.yAxisProp]))
      .attr("width", this.scaleColumn.bandwidth())
      .attr("height", this.scaleY.bandwidth())
      .attr("opacity", ".2")
      .attr("fill", "var(--gv-grey)")
      .style("cursor", () => this.showValueOnHover ? "pointer" : "normal")
      .on('mouseover', (event, d) => this.showValueMouseOver(event, d))
      .on('mouseout', (event, d) => this.showValueMouseOut(event, d));

    gColumn.selectAll(".bar-chart-small-overlying")
      .data(([, values]) => values)
      .join("rect")
      .attr("class", "bar-chart-small-overlying")
      .attr("id", (d,i) => i)
      .attr("x", 0)
      .attr("y", d => this.scaleY(d[this.yAxisProp]))
      .attr("width", d => this.scales[this.groupAxisProps.findIndex(element => element === d[this.xAxisProp])](d[this.countProp]))
      .attr("height", this.scaleY.bandwidth())
      .attr("fill", d => this.scaleColor(d[this.xAxisProp]))
      .style("cursor", () => this.showValueOnHover ? "pointer" : "normal")
      .on('mouseover', (event, d) => this.showValueMouseOver(event, d))
      .on('mouseout', (event, d) => this.showValueMouseOut(event, d));


    gColumn
      .selectAll(".label")
      .data(([, values]) => values)
      .join("text")
      .attr("class", "label")
      .attr("id", (d,i) => `label-${i}`)
      .style("opacity", () => this.showValueOnHover ? 0 : 1)
      .style("pointer-events","none")
      .text(d => this.valueIsMoney ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(d[this.countProp]) : new Intl.NumberFormat('es-ES').format(d[this.countProp]))
      .each((d, i, element) => {
        const xValue = this.scales[this.groupAxisProps.findIndex(element => element === d[this.xAxisProp])](d[this.countProp])
        const xMax = element[i].getBBox().width + 10;
       if (xValue < xMax && this.moveLabels) {
          select(element[i])
            .attr("x", xValue + 5)
            .attr("fill", "var(--gv-black)")
        } else {
          select(element[i])
            .attr("fill", this.moveLabels ? "var(--gv-white)" : "var(--gv-black)")
            .attr("x", 0)
            .attr("dx", 4);
        }
        select(element[i])
          .attr("y", this.scaleY(d[this.yAxisProp]) + this.scaleY.bandwidth() / 2)
          .attr("dy", "0.33em")
      })
  }

  yAxis(g) {
    g.call(axisLeft(this.scaleY).tickPadding([5]));

    // remove baseline
    g.select(".domain").remove();

    // remove default formats
    g.attr("font-family", null).attr("font-size", null);
  }

  async setData(data) {
    this.rawData = data
    this.data = this.parse(data)
    this.groupAxisProps = [...new Set(this.data.map(d => d[this.xAxisProp]))];

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
      .range([this.height, 0])
      .padding(0.4)

    this.scaleColumn = scaleBand()
      .domain([...new Set(this.data.map(d => d[this.xAxisProp]))])
      .range([0, this.width]).paddingInner(0.4);

    //Create an array of scales, one scale for each of the columns.
    this.scales = this.groupAxisProps.map((scale) => {
      return scaleLinear()
        .range([0, this.scaleColumn.bandwidth()])
        .domain([0, max(this.data.filter(element => scale.includes(element[this.xAxisProp])), (d) => d[this.countProp])]).nice();
    })
  }

  parse(data) {
    // Your data can contains multiple elements
    // with the same xAxisProp and yAxisProp
    // we need to group them and sum their value of countProp
    return [...data.reduce((r, o) => {
        const key = o[this.xAxisProp] + '-' + o[this.yAxisProp];

        const item = r.get(key) || {...o, count: 0};

        item.count += +(o[this.countProp]);

        return r.set(key, item);
      }, new Map).values()];
  }

  showValueMouseOver(event, d) {
    const { currentTarget: { id } } = event
    const columnElement = d[this.xAxisProp].replace(/ /g, '').replace(/[\u00f1-\u036f]/g, '').replace(/</g, '').replace(/>/g, '').replace(/=/g, '');
    if(this.showValueOnHover) {
      select(`#column-${columnElement} #label-${id}`).transition().duration(200).style('opacity', 1)
    }
  }

  showValueMouseOut(event, d) {
    const { currentTarget: { id } } = event
    const columnElement = d[this.xAxisProp].replace(/ /g, '').replace(/[\u00f1-\u036f]/g, '').replace(/</g, '').replace(/>/g, '').replace(/=/g, '');
    if(this.showValueOnHover) {
      select(`#column-${columnElement} #label-${id}`).transition().duration(200).style('opacity', 0)
    }
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.xAxisProp]))))
      .range(this.moveLabels ? this.PALETTE : this.PALETTE.filter(element => element !== 'var(--gv-color-6)'))
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
