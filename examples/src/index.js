import "./index.css"
import { BeeSwarm, TreeMap, BarChartStacked, Gantt } from "../../src/index"
// import { BeeSwarm } from "gobierto-vizzs"
import DOM from "./dom"
import { mockJSON } from "./random";
// import CSV from "url:./data.csv"

async function main() {
  // To test real data, fetch it from CSV and pass it to the options object
  // const raw = await fetch(CSV).then(r => r.text());
  // const data = toJSON(raw);

  [
    // [title, Chart, options]
    /*["BeeSwarm", BeeSwarm, { relation: "relation", id: "title" }],
    ["TreeMap", TreeMap, { group: ["group", "relation"], id: "title" }],
    ["Gantt", Gantt, { id: "title", y: "relation", barHeight: 15 }],*/
    ["BarChartStacked", BarChartStacked, { id: "title", data: mockJSON(10), x: "date", filterColumns: ["title", "relation", "group", "id", "phase", "from", "to"], orientationLegend: 'left', showLegend: true }]
  ].map(DOM);
}

// clear site on startup
(document.body.replaceChildren() || true) && main()
