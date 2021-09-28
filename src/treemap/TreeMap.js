import Base from "../base";
import { select, selectAll, mouse } from "d3-selection";
import { treemap, stratify, hierarchy, treemapBinary } from "d3-hierarchy";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { easeLinear } from "d3-ease";
import { interpolate } from "d3-interpolate";
import { mean, median, rollup } from "d3-array";
// import { nest } from "d3-collection";

export default class TreeMap extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options);

    this.margin = { top: 0, bottom: 0, left: 0, right: 0, ...options.margin };

    // chart size
    this.getDimensions();
    // static elements (do not redraw)
    this.setupElements();

    if (data.length) {
      this.setData(data);
    }
  }

  getDimensions() {
    const { width } = this.container.getBoundingClientRect();
    this.width = width - this.margin.left - this.margin.right;
    this.height = width / (16 / 9) - this.margin.top - this.margin.bottom;
  }

  setupElements() {
    this.svg = select(this.container)
      .classed("treemap-container", true)
      .append("svg")
      .attr("class", "treemap-plot")
      .attr(
        "viewBox",
        `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`
      );
  }

  build() {
    // let transitioning;
    // let dataTreeMapSumFinalAmount = this.data
    // let firstDepthForTreeMap = this.firstDepthForTreeMap;
    // let secondDepthForTreeMap = this.secondDepthForTreeMap;
    // let thirdDepthForTreeMap = this.thirdDepthForTreeMap;
    // let amountKey = this.amount
    // let scaleColor = this.scaleColor
    // let labelTotalContracts = this.labelTotalPlural
    // let labelTotalUnique = this.labelTotalUnique
    // let keyForThirdDepth = this.keyForThirdDepth
    // let depthEntity = this.depthEntity
    // let deepLevel
    // const selected_size = this.selected_size;
    // const treemapId = this.treemapId;

    const x = scaleLinear().domain([0, this.width]).range([0, this.width]);

    const y = scaleLinear().domain([0, this.height]).range([0, this.height]);

    function tile(node, x0, y0, x1, y1) {
      treemapBinary(node, 0, 0, width, height);
      for (const child of node.children) {
        child.x0 = x0 + child.x0 / width * (x1 - x0);
        child.x1 = x0 + child.x1 / width * (x1 - x0);
        child.y0 = y0 + child.y0 / height * (y1 - y0);
        child.y1 = y0 + child.y1 / height * (y1 - y0);
      }
    }

    const treemap = (data) =>
      treemap().tile(tile)(
        hierarchy(data)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value)
      );

      const name = d => d.ancestors().reverse().map(d => d.data.name).join("/")

      function render(group, root) {
        const node = group
          .selectAll("g")
          .data(root.children.concat(root))
          .join("g");

        node.filter(d => d === root ? d.parent : d.children)
            .attr("cursor", "pointer")
            // .on("click", (event, d) => d === root ? zoomout(root) : zoomin(d));

        node.append("title")
            .text(d => `${name(d)}\n${format(d.value)}`);

        node.append("rect")
            .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
            .attr("fill", d => d === root ? "#fff" : d.children ? "#ccc" : "#ddd")
            .attr("stroke", "#fff");

        node.append("clipPath")
            .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
          .append("use")
            .attr("xlink:href", d => d.leafUid.href);

        node.append("text")
            .attr("clip-path", d => d.clipUid)
            .attr("font-weight", d => d === root ? "bold" : null)
          .selectAll("tspan")
          .data(d => (d === root ? name(d) : d.data.name).split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)))
          .join("tspan")
            .attr("x", 3)
            .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
            .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
            .attr("font-weight", (d, i, nodes) => i === nodes.length - 1 ? "normal" : null)
            .text(d => d);

        group.call(position, root);
      }


  function position(group, root) {
    group.selectAll("g")
        .attr("transform", d => d === root ? `translate(0,-30)` : `translate(${x(d.x0)},${y(d.y0)})`)
      .select("rect")
        .attr("width", d => d === root ? width : x(d.x1) - x(d.x0))
        .attr("height", d => d === root ? 30 : y(d.y1) - y(d.y0));
  }

  // https://medium.com/nightingale/making-hierarchy-layouts-with-d3-hierarchy-fdb36d0a9c56
  // function makeHierarchy(config) {
  //   const defaultConfig = {
  //     childrenAccessorFn: ([key, value]) => value.size && Array.from(value),
  //     sumFn: ([key, value]) => value,
  //     sortFn: (a, b) => b.value - a.value,
  //   };
  //   const { data, reduceFn, groupByFns, childrenAccessorFn, sumFn, sortFn } = { ...defaultConfig, ...config };
  //   const rollupData = rollup(data, reduceFn, ...groupByFns);
  //   console.log(data, rollupData);
  //   const hierarchyData = hierarchy([null, rollupData], childrenAccessorFn).sum(sumFn).sort(sortFn);
  //   return hierarchyData;
  // }
  const createDataTree = (dataset, { id = "id", parent = "parent" } = {}) => {
    const hashTable = Object.create(null);
    dataset.forEach(aData => hashTable[aData[id]] = {...aData, children: []});
    const dataTree = [];
    dataset.forEach(aData => {
      if(aData[parent]) hashTable[aData[parent]].children.push(hashTable[aData[id]])
      else dataTree.push(hashTable[aData[id]])
    });
    return dataTree;
  };

console.log(hierarchy(createDataTree(this.data)));

    // this.svg.append("g").call(render, treemap(this.data));
  }

  async setData(data) {
    this.data = this.parse(data);

    // only set the color scale, as of the first time you get the data
    if (!this.scaleColor) {
      this.setColorScale();
    }

    // wait for the locales resolution before draw anything
    await this.setLocale();
    this.build();
  }

  setColorScale() {
    this.scaleColor = scaleOrdinal()
      .domain(Array.from(new Set(this.data.map((d) => d[this.yAxisProp]))))
      .range([
        "var(--bs-color-1)",
        "var(--bs-color-2)",
        "var(--bs-color-3)",
        "var(--bs-color-4)",
        "var(--bs-color-5)",
        "var(--bs-color-6)",
        "var(--bs-color-7)",
        "var(--bs-color-8)",
        "var(--bs-color-9)",
        "var(--bs-color-10)",
        "var(--bs-color-11)",
        "var(--bs-color-12)",
      ]);
  }

  parse(data) {
    return data;
  }
}
