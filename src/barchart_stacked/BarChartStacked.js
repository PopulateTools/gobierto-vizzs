import Base from "../commons/base";
import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { timeFormat } from "d3-time-format";
import { scaleLinear, scaleOrdinal, scaleBand } from 'd3-scale';
import { stack, stackOrderReverse } from 'd3-shape';
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
    this.excludeColumns = [...options.excludeColumns || "", this.xAxisProp];
    this.extraLegends = options.extraLegends || [];
    this.showLegend = options.showLegend;
    this.xTimeFormat = options.xTimeFormat || ((d) => (this.isDate(d) ? timeFormat('%b-%Y') : (d => d))(d));
    this.orientationLegend = options.orientationLegend || "left";
    this.showTickValues = options.showTickValues || "";
    this.height = options.height || 400;
    this.wrapLegends = options.wrapLegends;
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
      //Gets the columns that give value to each of the parts of the stacked bar chart.
      this.columns = options.columns || [...new Set(data.flatMap(Object.keys))].filter(column => !this.excludeColumns.includes(column));
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
      .data(stack().keys(this.columns).order(stackOrderReverse)(this.data))
      .join("g")
        .attr("class", "bar-stacked-group")
        .attr("id", ({ key }) => key)
        .attr("fill", ({ key }) => this.scaleColor(key))
      .selectAll("rect")
      .data(d => d)
      .join("rect")
        .attr("class", "bar-stacked-rect")
        .attr("x", d => this.scaleX(d.data[this.xAxisProp]))
        .transition()
        .duration(400)
        .attr("width", this.scaleX.bandwidth())
        .attr("y", ([y1, y2]) => Math.min(this.scaleY(y1), this.scaleY(isNaN(y2) ? 1 : y2)))
        .attr('height', ([y1, y2]) => Math.abs(this.scaleY(y1) - this.scaleY(isNaN(y2) ? y1 : y2)))
      .attr("cursor", "pointer")
      .selection()
      .on("touchmove", e => e.preventDefault())
      .on("pointermove", this.onPointerMove.bind(this))
      .on("pointerout", this.onPointerOut.bind(this))

    if(this.showLegend) {
      this.buildLegends()
    }

    if(this.extraLegends.length) {
      this.buildExtraAxis()
    }
  }

  buildLegends() {
    const positionLegendGroupX = this.orientationLegend === 'left' ? 0 : (this.width + this.margin.left);
    const positionLegendLabelX = this.orientationLegend === 'left' ? 24 : (positionLegendGroupX + 24);
    this.svg
      .selectAll(".bar-stack-label")
      .remove()
    this.svg
      .selectAll(".bar-stack-label")
      .data(stack().keys(this.columns)(this.data))
      .join(
        enter => {
          const g = enter
            .append("g")
            .attr("class", "bar-stack-label")
            .attr("fill", ({ key }) => this.scaleColor(key))
            .attr("transform", (d, i) => `translate(10, ${i * 14})`)
          g.append("rect")
            .attr("x", positionLegendGroupX)
            .attr("y", (d, i) => `${this.margin.top + (i * (this.wrapLegends ? 24 : 18))}`)
            .attr("rx", 4)
            .attr("class", "bar-stack-label-rect")
            .attr("width", 16)
            .attr("height", 16)
          g.append("text")
            .attr("class", "bar-stacked-legend-text")
            .attr("x", positionLegendLabelX)
            .attr("y", (d, i) => `${this.margin.top + (i * (this.wrapLegends ? 24 : 18)) + 14}`)
            .text(({ key }) => key)
            .call(this.wrap, 120, 20);

          return g;
        },
        update => update,
        exit => exit.remove()
      )
      .on("pointermove", function(_, d) {
          const { key } = d
          const groups = selectAll('.bar-stacked-group')

          groups.filter(({ key: k }) => k !== key)
            .style("opacity", .2)
          groups.filter(({ key: k }) => k === key)
            .style("opacity", 1)
      })
      .on("pointerout", () => {
        selectAll('.bar-stacked-group')
          .style("opacity", 1)
      })

      if(this.wrapLegends) {
        this.svg
          .selectAll(".bar-stack-label")
          .attr("transform", function(d,i) {
            const element = select(this)._groups[0][0].getBBox()
            const elementText = select(this)._groups[0][0].lastChild
             if(element.height > 30 && i > 0) {
              elementText.y.baseVal[0].value = elementText.y.baseVal[0].value - 8
            }
            return `translate(10, ${i * 14})`
          })
      }

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
    const tooltipContent = [];
    const filteredDataByKey = Object.fromEntries(Object.entries(d.data).filter(([key]) => !this.excludeColumns.includes(key)));

    for (const key in filteredDataByKey) {
      const valueContent = `
        <div class="tooltip-barchart-stacked-grid">
          <span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span>
          <span class="tooltip-barchart-stacked-grid-key">${key}:</span>
          <span class="tooltip-barchart-stacked-grid-value">${filteredDataByKey[key]}</span>
        </div>`
      tooltipContent.push(valueContent);
    }

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

  setColumns(value, data) {
    this.columns = value || [...new Set(data.flatMap(Object.keys))].filter(column => !this.excludeColumns.includes(column))
  }

  setExcludeColumns(value) {
    this.excludeColumns = value
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
