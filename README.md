# gobierto-vizzs
Reusable visualizations used in Gobierto. Check out [the demo](https://populatetools.github.io/gobierto-vizzs/)!

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

| name | type | default | description |
|---|---|---|---|
| **x** | _String_ | "date" | Property name of the X-axis. It must contain a date-like value. |
| **y** | _String_ | "group" | Property name of the Y-axis. Categories to be grouped by. |
| **r** | _String_ | "radius" | Property name of the radius. Quantitative value. |
| **id** | _String_ | "id" | Property name of the id or title. Better if unique. |
| **relation** | _String_ | - | Property name of the relationship. In order to display some internal relationships between circles of different categories. Only make sense on mouse over. |
| **margin** | _Object_ | `{ top: 50, bottom: 50, left: 120, right: 30 }` | Set the margin around the chart. You can change all or just what you want. |
| **locale** | _String_ | `window.navigator.language` | 4-letters specification of the locale. |
| **minBlockSize** | _Number_ | 100 | Height of each category. If there are many elements, it's strongly recommended it to increase this value. |
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
### Styling

The chart uses CSS custom variables to define the palette, you may overwrite them:
```css
:root {
  --bs-color-1: #008e9c;
  --bs-color-2: #12365b;
  --bs-color-3: #ff776d;
  --bs-color-4: #f8b205;
  --bs-color-5: #a6cee3;
  --bs-color-6: #1f78b4;
  --bs-color-7: #b2df8a;
  --bs-color-8: #33a02c;
  --bs-color-9: #fb9a99;
  --bs-color-10: #e31a1c;
  --bs-color-11: #fdbf6f;
  --bs-color-12: #ff7f00;
}
```
