import * as Charts from "../../src/*.js"
import { mock } from "./random";

Object.entries(Charts).forEach(([key, ChartModule]) => {
  const block = document.createElement("div")
  const h1 = document.createElement("h1")
  const btn = document.createElement("button")
  const chart = document.createElement("div")

  h1.textContent = key
  btn.textContent = "Change data"

  block.appendChild(h1)
  block.appendChild(btn)
  block.appendChild(chart)

  document.body.appendChild(block)

  const module = new ChartModule.default(chart, mock(), { relation: "relation" })

  btn.addEventListener("click", () => module.setData(mock()))
});
