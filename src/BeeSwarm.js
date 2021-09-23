import { select, selectAll } from "d3-selection";
import "d3-transition";
import { scaleBand, scaleTime, scalePow, scaleOrdinal } from "d3-scale";
import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
import { axisBottom, axisLeft } from "d3-axis";
import { extent } from "d3-array";
import { timeFormat, timeFormatDefaultLocale } from "d3-time-format";
import { max } from "d3-array";
import { easeLinear } from "d3-ease";
import { timeMonth } from "d3-time";
import "./BeeSwarm.css"

const LOCALES = {
  "en-US": () => import("d3-time-format/locale/en-US.json"),
  "es-ES": () => import("d3-time-format/locale/es-ES.json"),
}

export default class BeeSwarm {
  constructor(container, data, options = {}) {
    this.container = container;
    this.tooltip = options.tooltip || this.defaultTooltip
    this.margin = { top: 50, bottom: 50, left: 120, right: 0, ...options.margin };
    this.locale = options.locale || window.navigator.language

    // main properties to display
    this.xAxisProp = options.x || "date";
    this.yAxisProp = options.y || "group";
    this.rAxisProp = options.r || "radius";
    this.idProp = options.id || "id";
    this.relationProp = options.relation;

    // band item height
    this.MIN_BLOCK_SIZE = options.minBlockSize || 100;

    // chart size
    this.getDimensions();
    // static elements (do not redraw)
    this.setupElements();

    if (data.length) {
      this.setData(data)
    }

    window.addEventListener("resize", this.resizeListener.bind(this));
  }

  getDimensions() {
    const { width } = this.container.getBoundingClientRect();
    this.width = width - this.margin.left - this.margin.right;
  }

  setupElements() {
    this.svg = select(this.container).classed("beeswarm-container", true).append("svg").attr("class", "beeswarm-plot");
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
    this.g.append("g").attr("class", "axis axis-x");
    this.g.append("g").attr("class", "axis axis-y");
    this.tooltipContainer = select(this.container).append("div").attr("class", "beeswarm-tooltip")
  }

  build() {
    this.setScales();

    this.g
      .select(".axis-x")
      .attr("transform", `translate(0 ${this.height})`)
      .call(this.xAxis.bind(this));

    this.g
      .select(".axis-y")
      .attr("transform", `translate(${-this.margin.left} ${-this.scaleY.bandwidth() / 2})`)
      .call(this.yAxis.bind(this));

    forceSimulation(this.data)
      .force(
        "x",
        forceX((d) => this.scaleX(d[this.xAxisProp]))
      )
      .force(
        "y",
        forceY((d) => this.scaleY(d[this.yAxisProp]))
      )
      .force(
        "collide",
        forceCollide().radius((d) => this.scaleRadius(d[this.rAxisProp]) + 1)
      )
      .on("tick", () =>
        this.g
          .selectAll("circle.beeswarm-circle")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
      );

    this.g
      .selectAll("circle.beeswarm-circle")
      .data(this.data, d => d[this.idProp])
      .join((enter) =>
        enter
          .append("circle")
          .attr("class", d => this.relationProp ? `beeswarm-circle beeswarm-circle-${d[this.relationProp]}` : "beeswarm-circle")
          .attr("r", (d) => this.scaleRadius(d[this.rAxisProp]))
          .attr("fill", (d) => this.scaleColor(d[this.yAxisProp]))
      )
      .on("mouseover", this.onMouseOver.bind(this))
      .on("mouseout", this.onMouseOut.bind(this));
  }

  xAxis(g) {
    const hasMultipleYears = Array.from(new Set(this.data.map((d) => d[this.xAxisProp].getFullYear()))).length > 2;

    g.call(
      axisBottom(this.scaleX)
        .tickFormat(hasMultipleYears ? timeFormat("%Y") : timeFormat("%b-%Y"))
        .tickSize(-this.height)
        .ticks(hasMultipleYears ? 5 : timeMonth.every(3))
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
    g.attr("font-family", null).attr("font-size", null).attr("text-anchor", "start");

    // change line style defaults
    g.selectAll("line").attr("transform", `translate(${this.margin.left} 0)`).attr("stroke-dasharray", 1).attr("stroke", "var(--grey-line)");

    // change line style defaults
    g.selectAll("text")
      .call(this.wrap, this.margin.left)
      .attr("dy", (_, i, nodes) => {
        const currentNode = nodes[i]
        // substract the amount of lines (the children) minus 1 to the default dy (0.32em)
        // then, divide by 2 to center vertically
        const dy = (0.32 - (currentNode.children.length - 1)) / 2
        return `${dy}em`
      });
  }

  async setLocale() {
    if (!Object.keys(LOCALES).includes(this.locale)) {
      // request the locale when it does not exists by default
      const i18n = await fetch(`https://unpkg.com/d3-time-format/locale/${this.locale}.json`).then(r => r.json())
      timeFormatDefaultLocale(i18n)
    } else {
      const i18n = await LOCALES[this.locale]()
      timeFormatDefaultLocale(i18n)
    }
  }

  async setData(data) {
    this.data = this.parse(data)

    // only set the color scale, as of the first time you get the data
    if (!this.scaleColor) {
      this.setColorScale();
    }

    // wait for the locales resolution before draw anything
    await this.setLocale()
    this.build();
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.yAxisProp]))))
      .range([
        "var(--color-1)",
        "var(--color-2)",
        "var(--color-3)",
        "var(--color-4)",
        "var(--color-5)",
        "var(--color-6)",
        "var(--color-7)",
        "var(--color-8)",
        "var(--color-9)",
        "var(--color-10)",
      ]);
  }

  setScales() {
    const groups = Array.from(new Set(this.data.map((d) => d[this.yAxisProp])));

    // the chart reflows based on the amount of groups (categories) it has
    this.height = groups.length * this.MIN_BLOCK_SIZE - this.margin.top - this.margin.bottom;
    this.svg.attr(
      "viewBox",
      `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`
    );

    this.scaleY = scaleBand().domain(groups).range([this.height, 0]);

    this.scaleX = scaleTime()
      .domain(extent(this.data, (d) => d[this.xAxisProp]))
      .rangeRound([20, this.width - 20]);

    this.scaleRadius = scalePow()
      .exponent(0.25)
      .range([2, 15])
      .domain([0, max(this.data, (d) => d[this.rAxisProp])]);
  }

  onMouseOver(event, d) {
    if (this.relationProp) {
      selectAll("circle.beeswarm-circle")
        .transition()
        .duration(200)
        .style("opacity", 0.1)
        .filter((e) => e[this.relationProp] === d[this.relationProp])
        .transition()
        .duration(200)
        .ease(easeLinear)
        .style("opacity", 1);
    }

    const tooltip = this.tooltipContainer.html(this.tooltip(d))

    const { x, y } = this.relativeCoords(event);
    tooltip
      .style("top", `${y}px`)
      .style("left", `${x}px`)
      .transition()
      .duration(400)
      .style("opacity", 1);
  }

  onMouseOut() {
    this.tooltipContainer.style("opacity", 1).transition().duration(400).style("opacity", 0);
    selectAll("circle.beeswarm-circle").transition().duration(450).style("opacity", 1);
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
                [this.xAxisProp]: new Date(d[this.xAxisProp]),
                [this.rAxisProp]: +d[this.rAxisProp],
              },
            ]
          : []),
      ];
    }, []);
  }

  defaultTooltip(d) {
    return `
      <div class="beeswarm-tooltip-id">${d[this.idProp]}</div>
      <div class="beeswarm-tooltip-values">
        <span class="beeswarm-tooltip-date">${d[this.xAxisProp].toLocaleDateString()}</span>
        &nbsp;
        <span class="beeswarm-tooltip-radius">${d[this.rAxisProp].toLocaleString()}</span>
      </div>
      `;
  }

  resizeListener() {
    this.getDimensions();
    this.build(this.data);
  }

  remove() {
    window.removeEventListener("resize", this.resizeListener.bind(this));
  }

  wrap(text, width) {
    text.each(function () {
      var text = select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineHeight = 1,
        y = text.attr("y"),
        dy = 0,
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", 0)
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

  relativeCoords({ clientX, clientY }) {
    const { left, top } = this.container.getBoundingClientRect();
    const { width } = this.tooltipContainer.node().getBoundingClientRect()
    const offset = 100 + width / 2
    const x = (clientX - left < this.width / 2) ? clientX - left + offset : clientX - left - offset
    return { x, y: clientY - top };
  }
}
