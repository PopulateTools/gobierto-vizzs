import Base from "../base";
import { select, selectAll, mouse } from "d3-selection"
import { treemap, stratify, hierarchy, treemapBinary } from "d3-hierarchy"
import { scaleLinear, scaleOrdinal } from "d3-scale"
import { easeLinear } from "d3-ease"
import { interpolate } from "d3-interpolate";
import { mean, median } from "d3-array";
// import { nest } from "d3-collection";

export default class TreeMap extends Base {
  constructor(container, data, options = {}) {
    super(container, data, options)
  }
}
