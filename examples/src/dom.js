import { mockJSON } from "./random";

export default function DOM([key, ChartModule, opts]) {
  const head = document.createElement("div")
  const block = document.createElement("div")
  const a = document.createElement("a")
  const btn = document.createElement("button")
  const chart = document.createElement("div")

  block.className = "md:container mx-auto px-1 md:px-0 py-4"
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

  const { data = mockJSON(), ...config } = opts
  const module = new ChartModule(chart, data, config)

  btn.addEventListener("click", () => module.setData(mockJSON()))
}
