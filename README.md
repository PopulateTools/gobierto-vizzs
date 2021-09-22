# gobierto-vizzs
Reusable visualizations used in Gobierto

## Examples

You can try the demos, running the examples:

```sh
cd examples
npm install
npm start
```

# API

## BeeSwarm

```js
import { BeeSwarm } from "gobierto-vizzs"

const bee = new BeeSwarm(chart, data, options)

// ...update data
bee.setData(newData)
```

**chart** _(HTMLElement)_: DOM node where put the visualization

**data** _(Array)_: Elements to display

**options** _(Object)_: To custom the defaults presets. Optional.

 - **x** _(String)_: Property name of the X-axis. It must contain a date-like value (_default_: "date")
 - **y** _(String)_: Property name of the Y-axis. Categories to be grouped by. (_default_: "group")
 - **r** _(String)_: Property name of the radius. Quantitative value. (_default_: "radius")
 - **id** _(String)_: Property name of the id or title. Better if unique. (_default_: "id")
 - **relation** _(String)_: Property name of the relationship. In order to display some internal relationships between circles of different categories. Only make sense on mouse over.
 - **margin** _(Object)_: Set the margin around the chart. You can change all or just what you want.
 (_default_: `{ top: 50, bottom: 50, left: 120, right: 30 }`)
 - **locale** _(String)_: 4-letters specification of the locale. (_default_: `window.navigator.language`)
 - **minBlockSize** _(Number)_: Height of each category. If there are many elements, it's strongly recommended it to increase this value (_default_: 100)
 - **tooltip** _(Function)_: Custom HTML content to render in the tooltip on mouseenter

 _default_:
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
