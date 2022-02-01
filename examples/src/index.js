import "./index.css"
import { BeeSwarm, TreeMap, Gantt, toJSON } from "../../src/index"
// import { BeeSwarm, TreeMap, Gantt } from "gobierto-vizzs"
import { DOM } from "./dom"
// import CSV from "url:./data.csv"

async function main() {
  // To test real data, fetch it from CSV and pass it to the options object
  // const raw = await fetch(CSV).then(r => r.text());
  // const data = toJSON(raw);

  [
    // [title, Chart, options]
    ["BeeSwarm", BeeSwarm, { relation: "relation", id: "title" }],
    ["TreeMap", TreeMap, { group: ["group", "relation"], id: "title" }],
    ["Gantt", Gantt, { id: "title", y: "relation", barHeight: 20 }],
  ].map(DOM);
}

// clear site on startup
(document.body.replaceChildren() || true) && main()
