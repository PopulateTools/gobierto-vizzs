import "./index.css"
import { BeeSwarm, TreeMap, BarChartStacked } from "../../src/index"
// import { BeeSwarm } from "gobierto-vizzs"
import DOM from "./dom"
import DATA_STACKED from "./data_bar_chart_stacked.json"
// import CSV from "url:./data.csv"

async function main() {
  // To test real data, fetch it from CSV and pass it to the options object
  // const raw = await fetch(CSV).then(r => r.text());
  // const data = toJSON(raw);

  [
    // [title, Chart, options]
    ["BeeSwarm", BeeSwarm, { relation: "relation", id: "title" }],
    ["TreeMap", TreeMap, { group: ["group", "relation"], id: "title" }],
    ["BarChartStacked", BarChartStacked, { id: "title", data: DATA_STACKED, x: "year", filterColumns: ["total", "decada"], extraLegends: ["total","decada"] }]
  ].map(DOM);
}

// clear site on startup
(document.body.replaceChildren() || true) && main()
