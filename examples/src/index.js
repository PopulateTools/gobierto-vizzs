import "./index.css";
import { BeeSwarm, TreeMap, BarChartStacked, Gantt, BarChartSplit } from "../../src/index";
// import { BeeSwarm } from "gobierto-vizzs"
import DOM from "./dom";
// import CSV from "url:./data.csv"

async function main() {
  // To test real data, fetch it from CSV and pass it to the options object
  // const raw = await fetch(CSV).then(r => r.text());
  // const data = toJSON(raw);

  [
    // [title, Chart, options]
    ["TreeMap", TreeMap, { group: ["group", "relation"], id: "title" }],
    ["BeeSwarm", BeeSwarm, { relation: "relation", id: "title" }],
    ["Gantt", Gantt, { id: "title", y: "relation", barHeight: 15 }],
    [
      "BarChartStacked",
      BarChartStacked,
      {
        id: "title",
        x: "date",
        excludeColumns: ["relation", "title", "group", "id", "phase", "from", "to"],
        orientationLegend: "left",
        showLegend: true,
        length: 15,
      },
    ],
    ["BarChartSplit", BarChartSplit, { id: "title", y: "relation", x: "group", count: "value4" }],
  ].map(DOM);
}

// clear site on startup
(document.body.replaceChildren() || true) && main();
