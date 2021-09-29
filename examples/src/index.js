import "./index.css"
import * as Charts from "../../index.js"
import { mock } from "./random";

Object.entries(Charts).forEach(([key, ChartModule]) => {
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

  // const module = new ChartModule(chart, mock(), { relation: "relation" })
  const module = new ChartModule(chart, mock(), { relation: "relation", group: ["group", "relation"] })

  btn.addEventListener("click", () => module.setData(mock()))
});
