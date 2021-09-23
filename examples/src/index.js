import "./index.css"
import * as Charts from "../../src/*.js"
import { mock } from "./random";

Object.entries(Charts).forEach(([key, ChartModule]) => {
  const head = document.createElement("div")
  const block = document.createElement("div")
  const h1 = document.createElement("h1")
  const btn = document.createElement("button")
  const chart = document.createElement("div")

  block.className = "md:container mx-auto px-4"
  head.className = "flex justify-between items-center py-3"
  h1.className = "text-3xl font-bold"
  btn.className = "bg-blue-500 text-white font-bold py-2 px-4 rounded"
  chart.className = "font-sans"

  h1.textContent = key
  btn.textContent = "Change data"

  head.appendChild(h1)
  head.appendChild(btn)

  block.appendChild(head)
  block.appendChild(chart)

  document.body.appendChild(block)

  const module = new ChartModule.default(chart, mock(), { relation: "relation" })

  btn.addEventListener("click", () => module.setData(mock()))
});
