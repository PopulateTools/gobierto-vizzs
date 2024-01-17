import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { max, group } from 'd3-array';
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
    this.height = options.height || 600
    this.moveLabels = options.moveLabels
    this.valueIsMoney = options.valueIsMoney
    this.showValueOnTooltip = options.showValueOnTooltip
    this.yTimeFormat = options.yTimeFormat || "";
    this.showTickValues = options.showTickValues || "";
    this.sortAxisY = options.sortAxisY

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

    gColumn.append("text")
      .attr("class", "title")
      .text(([ key ]) => key)
      .attr("y", -21)
      .call(this.wrap, this.width / [...new Set(this.data.map(d => d[this.xAxisProp]))].length);

    gColumn.selectAll(".bar-chart-small-groups")
      .data(([, values]) => values)
      .join(
        enter => {
          const g = enter
            .append("g")
            .attr("class", "bar-chart-small-groups")
          g.append("rect")
            .attr("x", 0)
            .attr("y", (d) => isNaN(this.scaleY(d[this.yAxisProp])) ? 0 : this.scaleY(d[this.yAxisProp]))
            .attr("width", this.scales.range()[1])
            .attr("height", this.scaleY.bandwidth())
            .attr("opacity", ".2")
            .attr("fill", "var(--gv-grey)")
            .attr("class", "bar-chart-small-underlying")
            .attr("display", d => this.scaleY(d[this.yAxisProp]) ? "" : "none")
          g.append("rect")
            .attr("x", 0)
            .attr("y", (d) => isNaN(this.scaleY(d[this.yAxisProp])) ? 0 : this.scaleY(d[this.yAxisProp]))
            .attr("width", d => this.scales(d[this.countProp]))
            .attr("height", this.scaleY.bandwidth())
            .attr("fill", d => this.scaleColor(d[this.xAxisProp]))
            .attr("class", "bar-chart-small-overlying")
            .attr("display", d => this.scaleY(d[this.yAxisProp]) ? "" : "none")
          g.append("text")
            .attr("class", "label")
            .style("opacity", () => this.showValueOnTooltip ? 0 : 1)
            .style("pointer-events","none")
            .text(d => this.valueIsMoney ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(d[this.countProp]) : new Intl.NumberFormat('es-ES').format(d[this.countProp]))
            .each((d, i, element) => {
              const xValue = this.scales(d[this.countProp])
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
                .attr("y", isNaN(this.scaleY(d[this.yAxisProp])) ? 0 : this.scaleY(d[this.yAxisProp]) + this.scaleY.bandwidth() / 2)
                .attr("dy", "0.33em")
            })
            .attr("display", d => this.scaleY(d[this.yAxisProp]) ? "" : "none")

          return g;
        },
        update => update,
        exit => exit.remove()
      )
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))
      .attr("cursor", this.showValueOnTooltip ? "pointer" : "normal")

  }

  yAxis(g) {
    const tickValues = this.showTickValues ? this.scaleY.domain().filter((d,i) => this.showTickValues.includes(i)) : this.scaleY.domain()
    g.call(
     axisLeft(this.scaleY)
     .tickFormat(d => this.yTimeFormat ? this.yTimeFormat(new Date(d)) : d)
     .tickPadding(6)
     .tickSize(10)
     .tickValues(tickValues)
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
      .domain(this.sortAxisY || [...new Set(this.data.map(d => d[this.yAxisProp]))].reverse())
      .range([this.height, 0])
      .padding(0.4)

    this.scaleColumn = scaleBand()
      .domain([...new Set(this.data.map(d => d[this.xAxisProp]))])
      .range([0, this.width]).paddingInner(0.4);

    this.scaleXMax = this.groupAxisProps.map((scale) => {
      return max(this.data.filter(element => scale.includes(element[this.xAxisProp])), (d) => d[this.countProp])
    })

    this.scales = scaleLinear()
      .range([0, this.scaleColumn.bandwidth()])
      .domain([0, max(this.scaleXMax)]).nice();
  }

  onPointerMove(event, d) {
    if(!this.showValueOnTooltip) {
      return;
    }
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
    if(!this.showValueOnTooltip) {
      return;
    }
    this.tooltipContainer.style("pointer-events", "none").transition().delay(300).duration(200).style("opacity", 0);
    selectAll(".bar-chart-small").transition().duration(200).style("opacity", 1);
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

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.xAxisProp]))))
      .range(this.moveLabels ? this.PALETTE : this.PALETTE.filter(element => element !== 'var(--gv-color-6)'))
  }

  defaultTooltip(d) {
    return `
      <div class="bar-chart-small-tooltip">
        <h2 class="bar-chart-small-tooltip-title">${d[this.yAxisProp]}</h2>
        <span class="bar-chart-small-tooltip-value">${this.valueIsMoney ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(d[this.countProp]) : new Intl.NumberFormat('es-ES').format(d[this.countProp])}</span>
        &nbsp;
      </div>
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

  setMargin(value) {
    this.margin = { ...this.margin, ...value }

    this.container.replaceChildren()
    this.getDimensions()
    this.setupElements()
    this.build()
  }
}
