import { select, pointer } from "d3-selection";
import { timeFormatDefaultLocale } from "d3-time-format";
import { version } from "../../package.json"

import "./palette.css"
import "./tooltip.css"

export default class Base {
  constructor(container, _, options) {
    this.container = container
    this.version = version
    this.locale = options.locale || window.navigator.language
    this.PALETTE = Array.from({ length: 12 }, (_, i) => `var(--gv-color-${i + 1})`)

    window.addEventListener("resize", this.resizeListener.bind(this));
  }

  async getLocale() {
    // unpkg does not keep non-regional locales (2-letters code), so it's worthless make the request
    if (this.locale.length > 2) {
      // request the locale when it does not exists by default
      const i18n = await fetch(`https://unpkg.com/d3-time-format/locale/${this.locale}.json`).then(r => r.json()).catch(() => {})

      if (i18n) {
        timeFormatDefaultLocale(i18n)
      }
    }
  }

  async setLocale(value) {
    this.locale = value
    await this.getLocale()
    this.build()
  }

  // defined in the inherited classes
  getDimensions() {}

  // defined in the inherited classes
  build() {}

  resizeListener() {
    this.getDimensions();
    this.build();
  }

  remove() {
    window.removeEventListener("resize", this.resizeListener.bind(this));
  }

  isSmallDevice() {
    return screen.width < 768
  }

  wrap(text, width, marginLeft = 0) {
    text.each(function () {
      var text = select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1,
        y = text.attr("y"),
        dy = 0,
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", marginLeft)
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          text.attr("class", "wrap-text")
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", marginLeft)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

  tooltipPosition(event, element, offset = 0) {
    const [x,y] = pointer(event, this.container)
    const { width: pW, height: pH } = this.container.getBoundingClientRect();
    const { width, height } = element.getBoundingClientRect();
    const isLeft = x < pW * 0.5;
    const isTop = y < pH * 0.5;

    return isLeft && isTop
      ? [x + offset, y + offset]
      : isLeft && !isTop
      ? [x + offset, (y - height) - offset]
      : !isLeft && isTop
      ? [x - width - offset, y + offset]
      : [x - width - offset, y - height - offset];
  }

  seed(len = 24) {
    return [...Array(len)].map(() => Math.random().toString(36)[2]).join('')
  }

  debounce(func, timeout) {
    let timer = undefined;
    return (...args) => {
      const next = () => func(...args);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout > 0 ? timeout : 300);
    };
  }

  groupBy(arr, key) {
    return arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {})
  }

  sortBy(prop) {
    return (a, b) => a[prop] > b[prop] ? 1 : -1
  }
}
