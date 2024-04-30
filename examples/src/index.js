import "./index.css";
import { BeeSwarm, TreeMap, BarChartStacked, Gantt, BarChartSplit } from "../../src/index";
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
        x: "phase",
        y: "group",
        count: "value",
        showLegend: true,
        ratio: "percentage"
      },
    ],
    ["BarChartSplit", BarChartSplit, { id: "title", y: "relation", x: "group", count: "value" }],
  ].map(DOM);
}

// clear site on startup
(document.body.replaceChildren() || true) && main();
