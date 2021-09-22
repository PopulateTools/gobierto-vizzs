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

_chart_ (HTMLElement): DOM node where put the visualization
_data_ (Array): Elements to display
_options_ (Object): Object to custom the defaults presets. Optional.
 - x (String): Property name of the X-axis. It must contain a date-like value. _Default_ date
 - y (String): Property name of the Y-axis. Categories to be grouped by. _Default_ group
 - r (String): Property name of the radius. Quantitative value. _Default_ radius
 - margin: Set the margin around the chart. You can change all or just what you want. _Default_ `{ top: 50, bottom: 50, left: 120, right: 30 }`
 - locale (String): 4-letters specification of the locale. _Default_ `window.navigator.language`
 - minBlockSize (Number): Height of each category. If there are many elements, it's strongly recommended it to increase this value. _Default_ 100
 - tooltip (Function): Custom HTML content to render in the tooltip on mouseenter
 ```js
  defaultTooltip(d) {
    return `
      <div class="beeswarm-tooltip-id">${d.id}</div>
      <div class="beeswarm-tooltip-values">
        <span class="beeswarm-tooltip-date">${d[this.xAxisProp].toLocaleDateString()}</span>
        &nbsp;
        <span class="beeswarm-tooltip-radius">${d[this.rAxisProp].toLocaleString()}</span>
      </div>
      `;
  }
 ```
