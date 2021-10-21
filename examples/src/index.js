import "./index.css"
import { BeeSwarm, TreeMap } from "../../index.js"
import { mockJSON } from "./random";

function DOM([key, ChartModule, ...opts]) {
  const head = document.createElement("div")
  const block = document.createElement("div")
  const a = document.createElement("a")
  const btn = document.createElement("button")
  const chart = document.createElement("div")

  block.className = "md:container mx-auto px-4"
  head.className = "flex justify-between items-center py-3"
  a.className = "text-3xl font-bold"
  btn.className = "bg-blue-500 text-white font-bold py-2 px-4 rounded"

  a.textContent = key
  btn.textContent = "Change data"

  a.href = `#${key}`

  a.id = key

  head.appendChild(a)
  head.appendChild(btn)

  block.appendChild(head)
  block.appendChild(chart)

  document.body.appendChild(block)

  const module = new ChartModule(chart, mockJSON(), ...opts)

  btn.addEventListener("click", () => module.setData(mockJSON()))
}

[
  // [title, Chart, options]
  ["BeeSwarm", BeeSwarm, { relation: "relation", id: "title" }],
  ["TreeMap", TreeMap, { group: ["group", "relation"], id: "title" }],
].map(DOM);
