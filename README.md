# gobierto-vizzs
Reusable visualizations used in Gobierto. Check out [the demo](https://populatetools.github.io/gobierto-vizzs/)!

# API

* [BeeSwarm](#beeswarm)
  + [BeeSwarm examples](#beeswarm-examples)
* [TreeMap](#treemap)
  + [TreeMap examples](#treemap-examples)
* [Gantt](#gantt)
  + [Gantt examples](#gantt-examples)
* [BarChartStacked](#barchartstacked)
  + [BarChartStacked examples](#barchartstacked-examples)
* [BarChartSplit](#barchartsplit)
    + [BarChartSplit examples](#barchartsplit-examples)
* [Helpers](#helpers)
  + [toJSON](#tojson)
* [Styling](#styling)
* [Development](#development)

## BeeSwarm

```js
import { BeeSwarm } from "gobierto-vizzs"

const bee = new BeeSwarm(chart, data, options)

// ...update data
bee.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional. All properties come with setters, that is, once you have the object you can change any property using `setPROP(VALUE)`, i.e. `setX("prop")`, `setMargin({ left: 30 })`, `setOnClick(() => {})` etc...


| name | type | default | description |
|---|---|---|---|
| **x** | _String_ | "date" | Property name of the X-axis. It must contain a date-like value. |
| **y** | _String_ | "group" | Property name of the Y-axis. Categories to be grouped by. |
| **value** | _String_ | "value" | Property name of the radius. Quantitative value. |
| **id** | _String_ | "id" | Property name of the id or title. Better if unique. |
| **relation** | _String_ | - | Property name of the relationship. In order to display some internal relationships between circles of different categories. Only make sense on mouse over. |
| **margin** | _Object_ | `{ top: 50, bottom: 50, left: 120, right: 30 }` | Set the margin around the chart. You can pass the properties you want. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |
| **minBlockSize** | _Number_ | 100 | Height of each category. If there are many elements, it's strongly recommended it to increase this value. |
| **circleSize** | _Array_ | `[2, 20]` | Minimum and maximum circle radius size, respectively. |
| **onClick** | _Function_ | - | Circle click callback handler. It receives the `event` and the `datum`. |
| **tooltip** | _Function_ | [<sup>1</sup>](#1) | Custom HTML content to render in the tooltip on mouseenter. |

<span id="1"></span>
```js
defaultTooltip(d) {
  return `
    <div class="beeswarm-tooltip-id">${d[this.idProp]}</div>
    <div class="beeswarm-tooltip-values">
      <span class="beeswarm-tooltip-date">${d[this.xAxisProp].toLocaleDateString()}</span>
      &nbsp;
      <span class="beeswarm-tooltip-radius">${d[this.rAxisProp].toLocaleString()}</span>
    </div>
    `;
}
```

### BeeSwarm examples

If your data array have the expected keys, you can simply do:
```js
import { BeeSwarm } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "date": "2020-10-26T13:04:51.746Z",
    "value": 8600,
    "group": "Mayotte",
    "relation": "Ford",
    "id": 0
  },
  {
    "date": "2021-04-03",
    "value": 169,
    "group": "Rwanda",
    "relation": "Polestar",
    "id": 1
  },
  ...
]
const bee = new BeeSwarm(chart, data)
```

But if not, you can easily parse them using the options setup:
```js
import { BeeSwarm } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "imported_date": "2020-10-26T13:04:51.746Z",
    "amount": 8600,
    "category": "Mayotte",
    "event": "Ford",
    "title": 0
  },
  {
    "imported_date": "2021-04-03",
    "amount": 169,
    "category": "Rwanda",
    "event": "Polestar",
    "title": 1
  },
  ...
]
const bee = new BeeSwarm(chart, data, {
  x: "imported_date",
  y: "category",
  value: "amount",
  relation: "event",
  id: "title"
})
```

Tooltip can be configured with a custom function. The return will be parsed as HTML. Function argument is the current element data.
```js
const tooltip = (data) => `<strong>${data.title}</strong>`
const bee = new BeeSwarm(chart, data, { tooltip })
```

Set a custom callback when clicking into the circles
```js
const bee = new BeeSwarm(chart, data, { onClick: (event, datum) => /* custom function */ })
```

If your dataset is quite large and the groups are too close each other, try to increase the minBlockSize property. Similarly, you can change the maximum/minimum size of the circles.
```js
const bee = new BeeSwarm(chart, data, { minBlockSize: 200, circleSize: [3, 30] })
```

In order to render the chart locale-sensitive stuff, enforce the graph language (List of available [locales](https://unpkg.com/browse/d3-time-format/locale/))
```js
const bee = new BeeSwarm(chart, data, { locale: "it-IT" })
```

## TreeMap

```js
import { TreeMap } from "gobierto-vizzs"

const tree = new TreeMap(chart, data, options)

// ...update data
tree.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional. All properties come with setters, that is, once you have the object you can change any property using `setPROP(VALUE)`, i.e. `setGroup("another_group")`, `setMargin({ bottom: 0 })`, `setTooltip(() => {})`, etc...

| name | type | default | description |
|---|---|---|---|
| **group** | _String_, _Array<_String_>_ | "group" | Property/ies name/s of the different levels of the tree. |
| **value** | _String_ | - | Property name of the aggregator. The tree will be adding such value for each item in each category. If none is passed, the treemap will group by number of children. |
| **id** | _String_ | "id" | Property name to build the tree object. It works as a title for the different groups. |
| **rootTitle** | _String_ | "root" | Display name of the first level of the tree. |
| **margin** | _Object_ | `{ top: 30, bottom: 0, left: 0, right: 0 }` | Set the margin around the chart. You can pass the properties you want. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |
| **onLeafClick** | _Function_ | - | Leaf (no children node) click callback handler. It receives the `event` and the `datum`. |
| **tooltip** | _Function_ | [<sup>1</sup>](#1) | Custom HTML content to render in the tooltip on mouseenter. |
| **breadcrumb** | _Function_ | [<sup>2</sup>](#2) | Custom HTML content to render in the breadcrumb. It's clickable to change groups. |
| **itemTemplate** | _Function_ | [<sup>3</sup>](#3) | Custom HTML content to render in the item. |

<span id="1"></span>
```js
defaultTooltip(d) {
  return d.children && d.data.children.map(x => `
    <div class="treemap-tooltip-block">
      ${[
        `<div class="treemap-tooltip-id">${x[this.idProp]}</div>`,
        x[this.valueProp] && `<div class="treemap-tooltip-values">${x[this.valueProp].toLocaleString()}</div>`
      ].join("")}
    </div>
  `).join("");
}
```

<span id="2"></span>
```js
defaultBreadcrumb(d) {
  return d.map((pathName) => `<span>${pathName}</span>`).join("&nbsp;/&nbsp;");
}
```

<span id="3"></span>
```js
defaultItemTemplate(d) {
  return [
    `<div><strong>${d.data[this.idProp]}</strong></div>`,
    `<div>${d.value.toLocaleString()}</div>`,
    d.children && `<div>${d.children?.length}</div>`,
  ].join("");
}
```

### TreeMap examples

If your data array have the expected keys, you can simply do to display a one level depth treemap, arranged by `group` property
```js
import { TreeMap } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "id": "id nobis possimus incidunt dolorum",
    "group": "Lebanon",
  },
  {
    "id": "adipisci fugiat quidem alias molestiae",
    "group": "Ireland",
  },
  ...
]
const tree = new TreeMap(chart, data)
```

Instead of the children, if you want to sum the values of a different property, you can set the `value` prop accordingly
```js
import { TreeMap } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "id": "id nobis possimus incidunt dolorum",
    "group": "Lebanon",
    "population": 6e6
  },
  {
    "id": "adipisci fugiat quidem alias molestiae",
    "group": "Ireland",
    "population": 5e6
  },
  ...
]
const tree = new TreeMap(chart, data, { value: "population" })
```

But if you want more depth levels, and use different keys, try this instead
```js
import { TreeMap } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "amount": 8600,
    "category": "Mayotte",
    "category1": "Madagascar",
    "category2": "Mozambique",
    "category3": "Ford",
    "title": 0
  },
  {
    "amount": 169,
    "category": "Rwanda",
    "category1": "Madagascar",
    "category2": "Mozambique",
    "category3": "Polestar",
    "title": 1
  },
  ...
]
const tree = new TreeMap(chart, data, {
  group: ["category", "category1", "category2", "category3"],
  value: "amount",
  id: "title"
})
```

Tooltip, breadcrumb and item template can be configured with a custom functions. The return will be parsed as HTML.
- In the tooltip, the argument is the current tree data.
- In the breadcrumb, the argument is the array of `id` selected (path names).
- In the item template, the argument is the current tree data.
```js
const tooltip = (data) => `<strong>${data.title}</strong>`
const breadcrumb = (data) => data.map(d => `<em>${d.id}</em>`).join(">")
const itemTemplate = (data) => `<div>${d.value.toLocaleString()}</div>`
const tree = new TreeMap(chart, data, { tooltip, breadcrumb, itemTemplate })
```

Set a custom callback when clicking into a leaf (a node with no children)
```js
const tree = new TreeMap(chart, data, { onClick: (event, datum) => /* custom function */ })
```

Instead of display _root_ as the first item, you may edit the text
```js
const tree = new TreeMap(chart, data, { rootTitle: "Entities" })
```

In order to render the chart locale-sensitive stuff, enforce the graph language (List of available [locales](https://unpkg.com/browse/d3-time-format/locale/))
```js
const tree = new TreeMap(chart, data, { locale: "it-IT" })
```

## Gantt

```js
import { Gantt } from "gobierto-vizzs"

const gantt = new Gantt(chart, data, options)

// ...update data
gantt.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional. All properties come with setters, that is, once you have the object you can change any property using `setPROP(VALUE)`, i.e. `setX("prop")`, `setMargin({ left: 30 })`, `setOnClick(() => {})` etc...


| name | type | default | description |
|---|---|---|---|
| **x** | _String_ | "phase" | Property name of the categories along the X-axis. Legend will be depicted by these values |
| **y** | _String_ | "group" | Property name of the Y-axis. Categories to be grouped by. |
| **from** | _String_ | "from" | Property name of the initial range. Date-like value. |
| **to** | _String_ | "to" | Property name of the end range. Date-like value. |
| **id** | _String_ | "id" | Property name of the id or title. Better if unique. |
| **margin** | _Object_ | `{ top: 30, bottom: 0, left: 0, right: 0 }` | Set the margin around the chart. You can pass the properties you want. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |
| **barHeight** | _Number_ | 10 | Height of each category. |
| **onClick** | _Function_ | - | Circle click callback handler. It receives the `event` and the `datum`. |
| **tooltip** | _Function_ | [<sup>1</sup>](#1) | Custom HTML content to render in the tooltip on mouseenter. |

<span id="1"></span>
```js
defaultTooltip(d) {
  return `
    <div class="gantt-tooltip-id">${d[this.yAxisProp]}</div>
    <div class="gantt-tooltip-values">
      <span>${d[this.xAxisProp]}:</span>
      <span>${d[this.fromProp].toLocaleDateString()} - ${d[this.toProp].toLocaleDateString()}</span>
    </div>
    `;
}
```

### Gantt examples

If your data array have the expected keys, you can simply do:
```js
import { Gantt } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "id": "id nobis possimus incidunt dolorum",
    "group": "Lebanon",
    "phase": "Step 1",
    "from": "2020-01-01",
    "to": "2020-03-01",
  },
  {
    "id": "adipisci fugiat quidem alias molestiae",
    "phase": "Step 2",
    "group": "Lebanon",
    "from": "2020-03-01",
    "to": "2020-06-01",
  },
  ...
]
const gantt = new Gantt(chart, data)
```

But if not, you can easily parse them using the options setup:
```js
import { BeeSwarm } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "start_date": "2020-10-26T13:04:51.746Z",
    "end_date": "2020-12-26T13:04:51.746Z",
    "amount": 8600,
    "category": "Mayotte",
    "event": "#1",
    "title": 0
  },
  {
    "start_date": "2021-04-03",
    "end_date": "2021-04-03",
    "amount": 169,
    "category": "Mayotte",
    "event": "#2",
    "title": 1
  },
  ...
]
const gantt = new Gantt(chart, data, {
  from: "start_date",
  to: "end_date",
  x: "event",
  y: "category",
  id: "title"
})
```

Set a custom callback when clicking into a leaf (a node with no children)
```js
const gantt = new Gantt(chart, data, { onClick: (event, datum) => /* custom function */ })
```

In order to render the chart locale-sensitive stuff, enforce the graph language (List of available [locales](https://unpkg.com/browse/d3-time-format/locale/))
```js
const gantt = new Gantt(chart, data, { locale: "it-IT" })
```

## BarChartStacked

```js
import { BarChartStacked } from "gobierto-vizzs"

const bar_chart_stacked = new BarChartStacked(chart, data, options)

// ...update data
bar_chart_stacked.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional. All properties come with setters, that is, once you have the object you can change any property using `setPROP(VALUE)`, i.e. `setX("prop")`, `setMargin({ left: 30 })`, `setOnClick(() => {})` etc...


| name | type | default | description |
|---|---|---|---|
| **x** | _String_ | "phase" | Property name of the categories along the X-axis. Legend will be depicted by these values |
| **margin** | _Object_ | `{ top: 30, bottom: 0, left: 0, right: 0 }` | Set the margin around the chart. You can pass the properties you want. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |
| **excludeColumns** | _Array_ | [x] | The values that we do not want to show in the chart, for example, the year |
| **extraLegends** | _Array_ | [] | More x-axis can be added, passing an array with selected values. |
| **showLegend** | _Boolean_ | false | Show the legends. |
| **orientationLegend** | _Stringn_ | "left" | Positioning of legends, supports left and right. |
| **showTickValues** | _Array_ | [] | Array with the indices of the ticks shown on the x-axis. |
| **xTimeFormat** | _Function_ | - | Function to format ticks from axis-x. |
| **onClick** | _Function_ | - | Rect click callback handler. It receives the `event` and the `datum`. |
| **tooltip** | _Function_ | [<sup>1</sup>](#1) | Custom HTML content to render in the tooltip on mouseenter. |

<span id="1"></span>
```js
defaultTooltip(d) {
  let tooltipContent = [];
  const filteredDataByKey = Object.fromEntries(Object.entries(d.data).filter(([key, value]) => !this.filterColumns.includes(key)));
  for (const key in filteredDataByKey) {
    const valueContent = `
      <div class="tooltip-barchart-stacked-grid">
        <span style="background-color: ${this.scaleColor(key)}" class="tooltip-barchart-stacked-grid-key-color"></span>
        <span class="tooltip-barchart-stacked-grid-key">${key}:</span>
        <span class="tooltip-barchart-stacked-grid-value">${filteredDataByKey[key]}</span>
      </div>`
    tooltipContent.push(valueContent);
  }
  return `
    <span class="tooltip-barchart-stacked-title">${d.data[this.xAxisProp].getFullYear()}</span>
    ${tooltipContent.join("")}
  `;
}
```

### BarChartStacked examples

```js
import { BarChartStacked } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "year": "2010",
    "enero":"44.6132",
    "febrero":"41.9763",
    "marzo":"64.2093",
    "abril":"12.1696",
    "mayo":"42.8975",
    "junio":"33.4536",
    "julio":"2.59543",
    "agosto":"86.3578",
    "septiembre":"88.4577",
    "total":"221.65",
    "decada":"232.73"
  },
  {
    "year": "2011",
    "enero":"86.4595",
    "febrero":"7.2782",
    "marzo":"41.1251",
    "abril":"2.89737",
    "mayo":"89.8856",
    "junio":"60.3666",
    "julio":"43.4598",
    "agosto":"92.3711",
    "septiembre":"24.8777",
    "total":"284.13",
    "decada":"289.52"
  },
  ...
]
const bar_chart_stacked = new BarChartStacked(chart, data, {
  x: "year",
  filterColumns: ["total", "decada"],
  extraLegends: ["total","decada"]
})
```

Set a custom callback when clicking into a leaf (a node with no children)
```js
const bar_chart_stacked = new BarChartStacked(chart, data, { onClick: (event, datum) => /* custom function */ })
```

In order to render the chart locale-sensitive stuff, enforce the graph language (List of available [locales](https://unpkg.com/browse/d3-time-format/locale/))
```js
const bar_chart_stacked = new BarChartStacked(chart, data, { locale: "it-IT" })
```

## BarChartSplit

```js
import { BarChartSplit } from "gobierto-vizzs"

const bar_chart_split = new BarChartSplit(chart, data, options)

// ...update data
bar_chart_split.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional. All properties come with setters, that is, once you have the object you can change any property using `setPROP(VALUE)`, i.e. `setX("prop")`, `setMargin({ left: 30 })`, `setOnClick(() => {})` etc...


| name | type | default | description |
|---|---|---|---|
| **x** | _String_ | "phase" | Property name of the categories along the X-axis. Legend will be depicted by these values |
| **y** | _String_ | Property name of the categories along the Y-axis. |
| **count** | _String_ | Property name of the width of the bars. Quantitative value. |
| **margin** | _Object_ | `{ top: 30, bottom: 0, left: 0, right: 0 }` | Set the margin around the chart. You can pass the properties you want. |
| **moveLabels** | _Boolean_ | false | Shows the values of the bars on the left. |
| **sortAxisY** | _Array_ | Array with the values of the ticks of the y-axis. |
| **yTimeFormat** | _Function_ | - | Function to format ticks from axis-y. |
| **showTickValues** | _Array_ | [] | Array with the indices of the ticks shown on the y-axis. |
| **valueIsMoney** | _Boolean_ | false | If countProp is money it formats to show the value correctly. |
| **showValueOnTooltip** | _Boolean_ | false | Only show the values on tooltip. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |

### BarChartStacked examples

```js
import { BarChartSplit } from "gobierto-vizzs"

const chart = document.body
const data = [
  {
    "amount": 67,
    "category": "Spain",
    "group": "Toyota"
  },
  {
    "amount": 45,
    "category": "Spain",
    "group": "Seat"
  },
  {
    "amount": 56,
    "category": "Spain",
    "group": "Renault"
  },
  {
    "amount": 13,
    "category": "France",
    "group": "Toyota"
  },
  {
    "amount": 68,
    "category": "France",
    "group": "Seat"
  },
  {
    "amount": 35,
    "category": "France",
    "group": "Renault"
  },
  {
    "amount": 87,
    "category": "Germany",
    "group": "Toyota"
  },
  {
    "amount": 90,
    "category": "Germany",
    "group": "Seat"
  },
  {
    "amount": 39,
    "category": "Germany",
    "group": "Renault"
  },
  ...
]
const bar_chart_split = new BarChartSplit(chart, data, {
  x: "category",
  y: "group",
  count: "amount"
})
```

## Helpers

### toJSON

Convenience method to transform a CSV text into a JSON structure, assuming the CSV separator is a comma `,`
```js
import { toJSON } from "gobierto-vizzs"

const data = toJSON(CSV_STRING)
```

You can use a different separator as well
```js
import { toJSON } from "gobierto-vizzs"

const data = toJSON(CSV_STRING, ";")
```

## Styling

All charts uses CSS custom variables to define the palette, you may overwrite them:
```css
:root {
  --gv-color-1: #008e9c;
  --gv-color-2: #12365b;
  --gv-color-3: #ff776d;
  --gv-color-4: #f8b205;
  --gv-color-5: #a6cee3;
  --gv-color-6: #1f78b4;
  --gv-color-7: #b2df8a;
  --gv-color-8: #33a02c;
  --gv-color-9: #fb9a99;
  --gv-color-10: #e31a1c;
  --gv-color-11: #fdbf6f;
  --gv-color-12: #ff7f00;
}
```

## Development

You can try the demos, running the examples:

```sh
cd examples
npm install
npm start
```
