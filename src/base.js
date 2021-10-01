import { select } from "d3-selection";
import { timeFormatDefaultLocale } from "d3-time-format";

const LOCALES = {
  "en-US": () => import("d3-time-format/locale/en-US.json"),
  "es-ES": () => import("d3-time-format/locale/es-ES.json"),
}

export default class Base {
  constructor(container, data, options) {
    this.container = container;
    this.locale = options.locale || window.navigator.language

    window.addEventListener("resize", this.resizeListener.bind(this));
  }

  async setLocale() {
    if (!Object.keys(LOCALES).includes(this.locale)) {
      // request the locale when it does not exists by default
      const i18n = await fetch(`https://unpkg.com/d3-time-format/locale/${this.locale}.json`).then(r => r.json())
      timeFormatDefaultLocale(i18n)
    } else {
      const i18n = await LOCALES[this.locale]()
      timeFormatDefaultLocale(i18n)
    }
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

  wrap(text, width) {
    text.each(function () {
      var text = select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineHeight = 1,
        y = text.attr("y"),
        dy = 0,
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", 0)
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", lineHeight + dy + "em")
            .text(word);
        }
      }
    });
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
}
