// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e7FEp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "307a16d6524955d1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ckR2R":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('4a2zm') + "BeeSwarm.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"dypvJ":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName('link');
        if ([].concat(existingLinks).some(function isCurrentBundle(link) {
            return link.href === bundle && link.rel.indexOf('stylesheet') > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(link);
    });
});

},{"../cacheLoader":"eM8tw"}],"eM8tw":[function(require,module,exports) {
"use strict";
var cachedBundles = {
};
var cachedPreloads = {
};
var cachedPrefetches = {
};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"fa9F8":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lhX1Z":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('4a2zm') + "../gantt/Gantt.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"fxsMd":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('4a2zm') + "../treemap/TreeMap.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"cz8Xp":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('4a2zm') + "../../examples/src/index.98542f67.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"efvdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base = require("../commons/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _d3Selection = require("d3-selection");
var _d3Scale = require("d3-scale");
var _d3Force = require("d3-force");
var _d3Axis = require("d3-axis");
var _d3Array = require("d3-array");
var _d3TimeFormat = require("d3-time-format");
var _d3Ease = require("d3-ease");
var _d3Time = require("d3-time");
var _d3Transition = require("d3-transition");
var _beeSwarmCss = require("./BeeSwarm.css");
class BeeSwarm extends _baseDefault.default {
    constructor(container, data, options = {
    }){
        super(container, data, options);
        this.tooltip = options.tooltip || this.defaultTooltip;
        this.margin = {
            top: 50,
            bottom: 50,
            left: 120,
            right: 30,
            ...options.margin
        };
        this.onClick = options.onClick || (()=>{
        });
        // main properties to display
        this.xAxisProp = options.x || "date";
        this.yAxisProp = options.y || "group";
        this.valueProp = options.value || "value";
        this.idProp = options.id || "id";
        this.relationProp = options.relation;
        // band item height
        this.MIN_BLOCK_SIZE = options.minBlockSize || 100;
        this.CIRCLE_SIZE = options.circleSize || [
            2,
            20
        ];
        // chart size
        this.getDimensions();
        // static elements (do not redraw)
        this.setupElements();
        if (data.length) this.setData(data);
    }
    getDimensions() {
        const { width  } = this.container.getBoundingClientRect();
        this.width = width - this.margin.left - this.margin.right;
    }
    setupElements() {
        this.svg = _d3Selection.select(this.container).classed("gv-container", true).append("svg").attr("class", "gv-plot");
        this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left} ${this.margin.top})`);
        this.g.append("g").attr("class", "axis axis-x");
        this.g.append("g").attr("class", "axis axis-y");
        this.tooltipContainer = _d3Selection.select(this.container).append("div").attr("class", "gv-tooltip");
    }
    build() {
        this.setScales();
        this.g.select(".axis-x").attr("transform", `translate(0 ${this.height})`).call(this.xAxis.bind(this));
        this.g.select(".axis-y").attr("transform", `translate(${-this.margin.left} ${-this.scaleY.bandwidth() / 2})`).call(this.yAxis.bind(this));
        _d3Force.forceSimulation(this.data).force("x", _d3Force.forceX((d)=>this.scaleX(d[this.xAxisProp])
        )).force("y", _d3Force.forceY((d)=>this.scaleY(d[this.yAxisProp])
        )).force("collide", _d3Force.forceCollide().radius((d)=>this.scaleRadius(d[this.valueProp]) + 1
        )).on("tick", ()=>this.g.selectAll("circle.beeswarm-circle").attr("cx", (d)=>d.x
            ).attr("cy", (d)=>d.y
            )
        );
        this.g.selectAll("circle.beeswarm-circle").data(this.data, (d)=>d[this.idProp]
        ).join((enter)=>enter.append("circle").attr("class", (d)=>this.relationProp ? `beeswarm-circle beeswarm-circle-${d[this.relationProp]}` : "beeswarm-circle"
            ).attr("r", (d)=>this.scaleRadius(d[this.valueProp])
            ).attr("fill", (d)=>this.scaleColor(d[this.yAxisProp])
            )
        ).on("mouseover", this.onMouseOver.bind(this)).on("mouseout", this.onMouseOut.bind(this)).attr("cursor", "pointer").on("click", (...e)=>this.onClick(...e)
        );
    }
    xAxis(g) {
        const months = _d3Time.timeMonth.count(...this.scaleX.domain());
        const hasMultipleYears = months > 24;
        const onlyOneYear = months < 12;
        g.call(_d3Axis.axisBottom(this.scaleX).tickFormat(hasMultipleYears ? _d3TimeFormat.timeFormat("%Y") : onlyOneYear ? _d3TimeFormat.timeFormat("%b") : _d3TimeFormat.timeFormat("%b-%Y")).tickSize(-this.height).ticks(hasMultipleYears ? 5 : _d3Time.timeMonth.every(3)));
        // remove baseline
        g.select(".domain").remove();
        // remove default formats
        g.attr("font-family", null).attr("font-size", null);
        // change line style defaults
        g.selectAll("line").remove();
    }
    yAxis(g) {
        g.call(_d3Axis.axisLeft(this.scaleY).tickSize(-this.width));
        // remove baseline
        g.select(".domain").remove();
        // remove default formats
        g.attr("font-family", null).attr("font-size", null).attr("text-anchor", "start");
        // change line style defaults
        g.selectAll("line").attr("transform", `translate(${this.margin.left} 0)`).attr("stroke-dasharray", 1).attr("stroke", "var(--gv-grey)");
        // change line style defaults
        g.selectAll("text").call(this.wrap, this.margin.left).attr("dy", (_, i, nodes)=>{
            const currentNode = nodes[i];
            // substract the amount of lines (the children) minus 1 to the default dy (0.32em)
            // then, divide by 2 to center vertically
            const dy = (0.32 - (currentNode.children.length - 1)) / 2;
            return `${dy}em`;
        });
    }
    async setData(data) {
        this.rawData = data;
        this.data = this.parse(data);
        // only set the color scale, as of the first time you get the data
        if (!this.scaleColor) this.setColorScale();
        // wait for the locales resolution before draw anything
        await this.getLocale();
        this.build();
    }
    setColorScale() {
        this.scaleColor = _d3Scale.scaleOrdinal().domain(Array.from(new Set(this.data.map((d)=>d[this.yAxisProp]
        )))).range(this.PALETTE);
    }
    setScales() {
        // group by a prop, sort them by occurrences and get the keys
        const groups = Object.entries(this.groupBy(this.data, this.yAxisProp)).sort(([, a], [, b])=>a.length > b.length
        ).map(([key])=>key
        );
        // the chart reflows based on the amount of groups (categories) it has
        this.height = groups.length * this.MIN_BLOCK_SIZE - this.MIN_BLOCK_SIZE / 2;
        this.svg.attr("viewBox", `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`);
        this.scaleY = _d3Scale.scaleBand().domain(groups).range([
            this.height,
            0
        ]);
        this.scaleX = _d3Scale.scaleTime().domain(_d3Array.extent(this.data, (d)=>d[this.xAxisProp]
        )).rangeRound([
            20,
            this.width - 20
        ]);
        this.scaleRadius = _d3Scale.scalePow().exponent(0.5).range(this.CIRCLE_SIZE).domain([
            0,
            _d3Array.max(this.data, (d)=>d[this.valueProp]
            )
        ]);
    }
    onMouseOver(event, d) {
        if (this.relationProp) _d3Selection.selectAll("circle.beeswarm-circle").transition().duration(400).style("opacity", 0.1).filter((e)=>e[this.relationProp] === d[this.relationProp]
        ).transition().duration(400).ease(_d3Ease.easeLinear).style("opacity", 1);
        const tooltip = this.tooltipContainer.html(this.tooltip(d));
        const { x , y  } = this.relativeCoords(event);
        tooltip.style("top", `${y}px`).style("left", `${x}px`).transition().duration(400).style("opacity", 1);
    }
    onMouseOut() {
        this.tooltipContainer.style("opacity", 1).transition().duration(400).style("opacity", 0);
        _d3Selection.selectAll("circle.beeswarm-circle").transition().duration(400).style("opacity", 1);
    }
    parse(data) {
        // 1. remove those elements with no X axis data
        // 2. enforces the datatypes:
        //    - X axis is Date
        //    - Z axis is Number
        return data.reduce((acc, d)=>{
            return [
                ...acc,
                // https://2ality.com/2017/04/conditional-literal-entries.html
                ...!!d[this.xAxisProp] ? [
                    {
                        ...d,
                        [this.xAxisProp]: new Date(d[this.xAxisProp]),
                        [this.valueProp]: +d[this.valueProp]
                    }, 
                ] : [], 
            ];
        }, []);
    }
    defaultTooltip(d) {
        return `
      <div class="beeswarm-tooltip-id">${d[this.idProp]}</div>
      <div class="beeswarm-tooltip-values">
        <span class="beeswarm-tooltip-date">${d[this.xAxisProp].toLocaleDateString()}</span>
        &nbsp;
        <span class="beeswarm-tooltip-radius">${d[this.valueProp].toLocaleString()}</span>
      </div>
      `;
    }
    relativeCoords({ clientX , clientY  }) {
        const { left , top  } = this.container.getBoundingClientRect();
        const { width  } = this.tooltipContainer.node().getBoundingClientRect();
        const offset = 100 + width / 2;
        const x = clientX - left < this.width / 2 ? clientX - left + offset : clientX - left - offset;
        return {
            x,
            y: clientY - top
        };
    }
    setX(value) {
        this.xAxisProp = value;
        this.setData(this.rawData);
    }
    setY(value) {
        this.yAxisProp = value;
        this.setData(this.rawData);
    }
    setValue(value) {
        this.valueProp = value;
        this.setData(this.rawData);
    }
    setId(value) {
        this.idProp = value;
        this.build();
    }
    setRelation(value) {
        this.relationProp = value;
        this.build();
    }
    setMinBlockSize(value) {
        this.MIN_BLOCK_SIZE = value;
        this.build();
    }
    setCircleSize(value) {
        this.CIRCLE_SIZE = value;
        this.build();
    }
    setTooltip(value) {
        this.tooltip = value;
        this.build();
    }
    setOnClick(value) {
        this.onClick = value;
        this.build();
    }
    setMargin(value) {
        this.margin = {
            ...this.margin,
            ...value
        };
        this.container.replaceChildren();
        this.getDimensions();
        this.setupElements();
        this.build();
    }
}
exports.default = BeeSwarm;

},{"../commons/base":"9RF9X","d3-selection":"hgWtk","d3-scale":"hrwOn","d3-force":"5HM4e","d3-axis":"3HH3d","d3-array":"dclxS","d3-time-format":"ioDBG","d3-time":"lTNsW","./BeeSwarm.css":"loWSC","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r","d3-ease":"elZFc","d3-transition":"cRYyR"}],"9RF9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _d3TimeFormat = require("d3-time-format");
const LOCALES = {
    "es-ES": async ()=>await require("9d720a8a2d0757ff")
};
class Base {
    constructor(container, data, options){
        this.container = container;
        this.locale = options.locale || window.navigator.language;
        this.PALETTE = Array.from({
            length: 12
        }, (_, i)=>`var(--gv-color-${i + 1})`
        );
        window.addEventListener("resize", this.resizeListener.bind(this));
    }
    async getLocale() {
        if (!Object.keys(LOCALES).includes(this.locale)) // unpkg does not keep non-regional locales (2-letters code), so it's worthless make the request
        {
            if (this.locale.length > 2) {
                // request the locale when it does not exists by default
                const i18n = await fetch(`https://unpkg.com/d3-time-format/locale/${this.locale}.json`).then((r)=>r.json()
                ).catch(()=>{
                });
                if (i18n) _d3TimeFormat.timeFormatDefaultLocale(i18n);
            }
        } else {
            const i18n = await LOCALES[this.locale]();
            _d3TimeFormat.timeFormatDefaultLocale(i18n);
        }
    }
    async setLocale(value) {
        this.locale = value;
        await this.getLocale();
        this.build();
    }
    // defined in the inherited classes
    getDimensions() {
    }
    // defined in the inherited classes
    build() {
    }
    resizeListener() {
        this.getDimensions();
        this.build();
    }
    remove() {
        window.removeEventListener("resize", this.resizeListener.bind(this));
    }
    wrap(text, width) {
        text.each(function() {
            var text = _d3Selection.select(this), words = text.text().split(/\s+/).reverse(), word, line = [], lineHeight = 1, y = text.attr("y"), dy = 0, tspan = text.text(null).append("tspan").attr("x", 0);
            while(word = words.pop()){
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [
                        word
                    ];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + dy + "em").text(word);
                }
            }
        });
    }
    seed(len = 24) {
        return [
            ...Array(len)
        ].map(()=>Math.random().toString(36)[2]
        ).join('');
    }
    debounce(func, timeout) {
        let timer = undefined;
        return (...args)=>{
            const next = ()=>func(...args)
            ;
            if (timer) clearTimeout(timer);
            timer = setTimeout(next, timeout > 0 ? timeout : 300);
        };
    }
    groupBy(arr, key) {
        return arr.reduce((acc, item)=>(acc[item[key]] = [
                ...acc[item[key]] || [],
                item
            ], acc)
        , {
        });
    }
    sortBy(prop) {
        return (a, b)=>a[prop] > b[prop] ? 1 : -1
        ;
    }
}
exports.default = Base;

},{"d3-selection":"hgWtk","d3-time-format":"ioDBG","9d720a8a2d0757ff":"3FwWM","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hgWtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>_createJsDefault.default
);
parcelHelpers.export(exports, "creator", ()=>_creatorJsDefault.default
);
parcelHelpers.export(exports, "local", ()=>_localJsDefault.default
);
parcelHelpers.export(exports, "matcher", ()=>_matcherJsDefault.default
);
parcelHelpers.export(exports, "namespace", ()=>_namespaceJsDefault.default
);
parcelHelpers.export(exports, "namespaces", ()=>_namespacesJsDefault.default
);
parcelHelpers.export(exports, "pointer", ()=>_pointerJsDefault.default
);
parcelHelpers.export(exports, "pointers", ()=>_pointersJsDefault.default
);
parcelHelpers.export(exports, "select", ()=>_selectJsDefault.default
);
parcelHelpers.export(exports, "selectAll", ()=>_selectAllJsDefault.default
);
parcelHelpers.export(exports, "selection", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "selector", ()=>_selectorJsDefault.default
);
parcelHelpers.export(exports, "selectorAll", ()=>_selectorAllJsDefault.default
);
parcelHelpers.export(exports, "style", ()=>_styleJs.styleValue
);
parcelHelpers.export(exports, "window", ()=>_windowJsDefault.default
);
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _localJs = require("./local.js");
var _localJsDefault = parcelHelpers.interopDefault(_localJs);
var _matcherJs = require("./matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _pointersJs = require("./pointers.js");
var _pointersJsDefault = parcelHelpers.interopDefault(_pointersJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _indexJs = require("./selection/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _selectorJs = require("./selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
var _selectorAllJs = require("./selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
var _styleJs = require("./selection/style.js");
var _windowJs = require("./window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);

},{"./create.js":"luWz7","./creator.js":"hzFln","./local.js":"85ofP","./matcher.js":"5hMoc","./namespace.js":"k6t5I","./namespaces.js":"jlwhh","./pointer.js":"lRJOw","./pointers.js":"4HqJY","./select.js":"g0UZK","./selectAll.js":"lhfgm","./selection/index.js":"f38xv","./selector.js":"e9mWc","./selectorAll.js":"6FR5I","./selection/style.js":"lVr8f","./window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"luWz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
exports.default = function(name) {
    return _selectJsDefault.default(_creatorJsDefault.default(name).call(document.documentElement));
};

},{"./creator.js":"hzFln","./select.js":"g0UZK","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hzFln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === _namespacesJs.xhtml && document.documentElement.namespaceURI === _namespacesJs.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
exports.default = function(name) {
    var fullname = _namespaceJsDefault.default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

},{"./namespace.js":"k6t5I","./namespaces.js":"jlwhh","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"k6t5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
exports.default = function(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return _namespacesJsDefault.default.hasOwnProperty(prefix) ? {
        space: _namespacesJsDefault.default[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
};

},{"./namespaces.js":"jlwhh","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jlwhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml
);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4Rs9r":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g0UZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new _indexJs.Selection([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new _indexJs.Selection([
        [
            selector
        ]
    ], _indexJs.root);
};

},{"./selection/index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"f38xv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root
);
parcelHelpers.export(exports, "Selection", ()=>Selection
);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectChildJs = require("./selectChild.js");
var _selectChildJsDefault = parcelHelpers.interopDefault(_selectChildJs);
var _selectChildrenJs = require("./selectChildren.js");
var _selectChildrenJsDefault = parcelHelpers.interopDefault(_selectChildrenJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _enterJs = require("./enter.js");
var _enterJsDefault = parcelHelpers.interopDefault(_enterJs);
var _exitJs = require("./exit.js");
var _exitJsDefault = parcelHelpers.interopDefault(_exitJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _orderJs = require("./order.js");
var _orderJsDefault = parcelHelpers.interopDefault(_orderJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _nodesJs = require("./nodes.js");
var _nodesJsDefault = parcelHelpers.interopDefault(_nodesJs);
var _nodeJs = require("./node.js");
var _nodeJsDefault = parcelHelpers.interopDefault(_nodeJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _classedJs = require("./classed.js");
var _classedJsDefault = parcelHelpers.interopDefault(_classedJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _htmlJs = require("./html.js");
var _htmlJsDefault = parcelHelpers.interopDefault(_htmlJs);
var _raiseJs = require("./raise.js");
var _raiseJsDefault = parcelHelpers.interopDefault(_raiseJs);
var _lowerJs = require("./lower.js");
var _lowerJsDefault = parcelHelpers.interopDefault(_lowerJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _datumJs = require("./datum.js");
var _datumJsDefault = parcelHelpers.interopDefault(_datumJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: _selectJsDefault.default,
    selectAll: _selectAllJsDefault.default,
    selectChild: _selectChildJsDefault.default,
    selectChildren: _selectChildrenJsDefault.default,
    filter: _filterJsDefault.default,
    data: _dataJsDefault.default,
    enter: _enterJsDefault.default,
    exit: _exitJsDefault.default,
    join: _joinJsDefault.default,
    merge: _mergeJsDefault.default,
    selection: selection_selection,
    order: _orderJsDefault.default,
    sort: _sortJsDefault.default,
    call: _callJsDefault.default,
    nodes: _nodesJsDefault.default,
    node: _nodeJsDefault.default,
    size: _sizeJsDefault.default,
    empty: _emptyJsDefault.default,
    each: _eachJsDefault.default,
    attr: _attrJsDefault.default,
    style: _styleJsDefault.default,
    property: _propertyJsDefault.default,
    classed: _classedJsDefault.default,
    text: _textJsDefault.default,
    html: _htmlJsDefault.default,
    raise: _raiseJsDefault.default,
    lower: _lowerJsDefault.default,
    append: _appendJsDefault.default,
    insert: _insertJsDefault.default,
    remove: _removeJsDefault.default,
    clone: _cloneJsDefault.default,
    datum: _datumJsDefault.default,
    on: _onJsDefault.default,
    dispatch: _dispatchJsDefault.default,
    [Symbol.iterator]: _iteratorJsDefault.default
};
exports.default = selection;

},{"./select.js":"1jbDi","./selectAll.js":"cGFzy","./selectChild.js":"8DwO9","./selectChildren.js":"dHwnc","./filter.js":"79RzA","./data.js":"4ZVP3","./enter.js":"iCNmI","./exit.js":"8hgeS","./join.js":"4nZM4","./merge.js":"2Dn1o","./order.js":"g79rT","./sort.js":"6sxcI","./call.js":"jtSbo","./nodes.js":"56G5R","./node.js":"kRhWy","./size.js":"26GBx","./empty.js":"2pmiA","./each.js":"50lbW","./attr.js":"aUlJ3","./style.js":"lVr8f","./property.js":"49sSE","./classed.js":"6VMaw","./text.js":"ch5qt","./html.js":"jyrYS","./raise.js":"aWlYS","./lower.js":"43Imn","./append.js":"62Ily","./insert.js":"4D2zc","./remove.js":"ezirt","./clone.js":"ERvNe","./datum.js":"cElUS","./on.js":"6sHag","./dispatch.js":"eo73B","./iterator.js":"6AbO6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1jbDi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
exports.default = function(select) {
    if (typeof select !== "function") select = _selectorJsDefault.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new _indexJs.Selection(subgroups, this._parents);
};

},{"./index.js":"f38xv","../selector.js":"e9mWc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e9mWc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function none() {
}
exports.default = function(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cGFzy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return _arrayJsDefault.default(select.apply(this, arguments));
    };
}
exports.default = function(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = _selectorAllJsDefault.default(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new _indexJs.Selection(subgroups, parents);
};

},{"./index.js":"f38xv","../array.js":"cirh5","../selectorAll.js":"6FR5I","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cirh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
exports.default = array;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6FR5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function empty() {
    return [];
}
exports.default = function(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8DwO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
exports.default = function(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : _matcherJs.childMatcher(match)));
};

},{"../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5hMoc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher
);
exports.default = function(selector) {
    return function() {
        return this.matches(selector);
    };
};
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dHwnc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
exports.default = function(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : _matcherJs.childMatcher(match)));
};

},{"../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"79RzA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
exports.default = function(match) {
    if (typeof match !== "function") match = _matcherJsDefault.default(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new _indexJs.Selection(subgroups, this._parents);
};

},{"./index.js":"f38xv","../matcher.js":"5hMoc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4ZVP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _enterJs = require("./enter.js");
var _constantJs = require("../constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new _enterJs.EnterNode(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new _enterJs.EnterNode(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
exports.default = function(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = _constantJsDefault.default(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new _indexJs.Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
};
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

},{"./index.js":"f38xv","./enter.js":"iCNmI","../constant.js":"2yBTe","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iCNmI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode
);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new _indexJs.Selection(this._enter || this._groups.map(_sparseJsDefault.default), this._parents);
};
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse.js":"bkLEG","./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bkLEG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(update) {
    return new Array(update.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2yBTe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8hgeS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new _indexJs.Selection(this._exit || this._groups.map(_sparseJsDefault.default), this._parents);
};

},{"./sparse.js":"bkLEG","./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4nZM4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2Dn1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new _indexJs.Selection(merges, this._parents);
};

},{"./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"g79rT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6sxcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new _indexJs.Selection(sortgroups, this._parents).order();
};
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jtSbo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"56G5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kRhWy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"26GBx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2pmiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return !this.node();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"50lbW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aUlJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("../namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
exports.default = function(name, value) {
    var fullname = _namespaceJsDefault.default(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

},{"../namespace.js":"k6t5I","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lVr8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleValue", ()=>styleValue
);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
exports.default = function(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || _windowJsDefault.default(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"c51LV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"49sSE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
exports.default = function(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6VMaw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
exports.default = function(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ch5qt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jyrYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aWlYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
exports.default = function() {
    return this.each(raise);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"43Imn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
exports.default = function() {
    return this.each(lower);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"62Ily":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
exports.default = function(name) {
    var create = typeof name === "function" ? name : _creatorJsDefault.default(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
};

},{"../creator.js":"hzFln","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4D2zc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}
exports.default = function(name, before) {
    var create = typeof name === "function" ? name : _creatorJsDefault.default(name), select = before == null ? constantNull : typeof before === "function" ? before : _selectorJsDefault.default(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
};

},{"../creator.js":"hzFln","../selector.js":"e9mWc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ezirt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
exports.default = function() {
    return this.each(remove);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ERvNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
exports.default = function(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cElUS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6sHag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
exports.default = function(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eo73B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = _windowJsDefault.default(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
exports.default = function(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

},{"../window.js":"c51LV","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6AbO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"85ofP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nextId = 0;
function local() {
    return new Local;
}
exports.default = local;
function Local() {
    this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lRJOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);
exports.default = function(event, node) {
    event = _sourceEventJsDefault.default(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
};

},{"./sourceEvent.js":"3beDu","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3beDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4HqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _sourceEventJs = require("./sourceEvent.js");
var _sourceEventJsDefault = parcelHelpers.interopDefault(_sourceEventJs);
exports.default = function(events, node) {
    if (events.target) {
        events = _sourceEventJsDefault.default(events);
        if (node === undefined) node = events.currentTarget;
        events = events.touches || [
            events
        ];
    }
    return Array.from(events, (event)=>_pointerJsDefault.default(event, node)
    );
};

},{"./pointer.js":"lRJOw","./sourceEvent.js":"3beDu","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lhfgm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new _indexJs.Selection([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new _indexJs.Selection([
        _arrayJsDefault.default(selector)
    ], _indexJs.root);
};

},{"./array.js":"cirh5","./selection/index.js":"f38xv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ioDBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormatDefaultLocale", ()=>_defaultLocaleJsDefault.default
);
parcelHelpers.export(exports, "timeFormat", ()=>_defaultLocaleJs.timeFormat
);
parcelHelpers.export(exports, "timeParse", ()=>_defaultLocaleJs.timeParse
);
parcelHelpers.export(exports, "utcFormat", ()=>_defaultLocaleJs.utcFormat
);
parcelHelpers.export(exports, "utcParse", ()=>_defaultLocaleJs.utcParse
);
parcelHelpers.export(exports, "timeFormatLocale", ()=>_localeJsDefault.default
);
parcelHelpers.export(exports, "isoFormat", ()=>_isoFormatJsDefault.default
);
parcelHelpers.export(exports, "isoParse", ()=>_isoParseJsDefault.default
);
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _isoFormatJs = require("./isoFormat.js");
var _isoFormatJsDefault = parcelHelpers.interopDefault(_isoFormatJs);
var _isoParseJs = require("./isoParse.js");
var _isoParseJsDefault = parcelHelpers.interopDefault(_isoParseJs);

},{"./defaultLocale.js":"jvGVG","./locale.js":"iO59a","./isoFormat.js":"eUcDj","./isoParse.js":"9agvx","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jvGVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormat", ()=>timeFormat
);
parcelHelpers.export(exports, "timeParse", ()=>timeParse
);
parcelHelpers.export(exports, "utcFormat", ()=>utcFormat
);
parcelHelpers.export(exports, "utcParse", ()=>utcParse
);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function defaultLocale(definition) {
    locale = _localeJsDefault.default(definition);
    timeFormat = locale.format;
    timeParse = locale.parse;
    utcFormat = locale.utcFormat;
    utcParse = locale.utcParse;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"iO59a","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iO59a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Time = require("d3-time");
function localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function formatLocale(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? _d3Time.utcMonday.ceil(week) : _d3Time.utcMonday(week);
                    week = _d3Time.utcDay.offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? _d3Time.timeMonday.ceil(week) : _d3Time.timeMonday(week);
                    week = _d3Time.timeDay.offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
exports.default = formatLocale;
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
    return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
    return new Map(names.map((name, i)=>[
            name.toLowerCase(),
            i
        ]
    ));
}
function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
    return pad(1 + _d3Time.timeDay.count(_d3Time.timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
    return pad(_d3Time.timeSunday.count(_d3Time.timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? _d3Time.timeThursday(d) : _d3Time.timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad(_d3Time.timeThursday.count(_d3Time.timeYear(d), d) + (_d3Time.timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function formatWeekNumberMonday(d, p) {
    return pad(_d3Time.timeMonday.count(_d3Time.timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
    d = dISO(d);
    return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? _d3Time.timeThursday(d) : _d3Time.timeThursday.ceil(d);
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
    return pad(1 + _d3Time.utcDay.count(_d3Time.utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
    return pad(_d3Time.utcSunday.count(_d3Time.utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? _d3Time.utcThursday(d) : _d3Time.utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad(_d3Time.utcThursday.count(_d3Time.utcYear(d), d) + (_d3Time.utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
    return pad(_d3Time.utcMonday.count(_d3Time.utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? _d3Time.utcThursday(d) : _d3Time.utcThursday.ceil(d);
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
    return "+0000";
}
function formatLiteralPercent() {
    return "%";
}
function formatUnixTimestamp(d) {
    return +d;
}
function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}

},{"d3-time":"lTNsW","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lTNsW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>_intervalJsDefault.default
);
parcelHelpers.export(exports, "timeMillisecond", ()=>_millisecondJsDefault.default
);
parcelHelpers.export(exports, "timeMilliseconds", ()=>_millisecondJs.milliseconds
);
parcelHelpers.export(exports, "utcMillisecond", ()=>_millisecondJsDefault.default
);
parcelHelpers.export(exports, "utcMilliseconds", ()=>_millisecondJs.milliseconds
);
parcelHelpers.export(exports, "timeSecond", ()=>_secondJsDefault.default
);
parcelHelpers.export(exports, "timeSeconds", ()=>_secondJs.seconds
);
parcelHelpers.export(exports, "utcSecond", ()=>_secondJsDefault.default
);
parcelHelpers.export(exports, "utcSeconds", ()=>_secondJs.seconds
);
parcelHelpers.export(exports, "timeMinute", ()=>_minuteJsDefault.default
);
parcelHelpers.export(exports, "timeMinutes", ()=>_minuteJs.minutes
);
parcelHelpers.export(exports, "timeHour", ()=>_hourJsDefault.default
);
parcelHelpers.export(exports, "timeHours", ()=>_hourJs.hours
);
parcelHelpers.export(exports, "timeDay", ()=>_dayJsDefault.default
);
parcelHelpers.export(exports, "timeDays", ()=>_dayJs.days
);
parcelHelpers.export(exports, "timeWeek", ()=>_weekJs.sunday
);
parcelHelpers.export(exports, "timeWeeks", ()=>_weekJs.sundays
);
parcelHelpers.export(exports, "timeSunday", ()=>_weekJs.sunday
);
parcelHelpers.export(exports, "timeSundays", ()=>_weekJs.sundays
);
parcelHelpers.export(exports, "timeMonday", ()=>_weekJs.monday
);
parcelHelpers.export(exports, "timeMondays", ()=>_weekJs.mondays
);
parcelHelpers.export(exports, "timeTuesday", ()=>_weekJs.tuesday
);
parcelHelpers.export(exports, "timeTuesdays", ()=>_weekJs.tuesdays
);
parcelHelpers.export(exports, "timeWednesday", ()=>_weekJs.wednesday
);
parcelHelpers.export(exports, "timeWednesdays", ()=>_weekJs.wednesdays
);
parcelHelpers.export(exports, "timeThursday", ()=>_weekJs.thursday
);
parcelHelpers.export(exports, "timeThursdays", ()=>_weekJs.thursdays
);
parcelHelpers.export(exports, "timeFriday", ()=>_weekJs.friday
);
parcelHelpers.export(exports, "timeFridays", ()=>_weekJs.fridays
);
parcelHelpers.export(exports, "timeSaturday", ()=>_weekJs.saturday
);
parcelHelpers.export(exports, "timeSaturdays", ()=>_weekJs.saturdays
);
parcelHelpers.export(exports, "timeMonth", ()=>_monthJsDefault.default
);
parcelHelpers.export(exports, "timeMonths", ()=>_monthJs.months
);
parcelHelpers.export(exports, "timeYear", ()=>_yearJsDefault.default
);
parcelHelpers.export(exports, "timeYears", ()=>_yearJs.years
);
parcelHelpers.export(exports, "utcMinute", ()=>_utcMinuteJsDefault.default
);
parcelHelpers.export(exports, "utcMinutes", ()=>_utcMinuteJs.utcMinutes
);
parcelHelpers.export(exports, "utcHour", ()=>_utcHourJsDefault.default
);
parcelHelpers.export(exports, "utcHours", ()=>_utcHourJs.utcHours
);
parcelHelpers.export(exports, "utcDay", ()=>_utcDayJsDefault.default
);
parcelHelpers.export(exports, "utcDays", ()=>_utcDayJs.utcDays
);
parcelHelpers.export(exports, "utcWeek", ()=>_utcWeekJs.utcSunday
);
parcelHelpers.export(exports, "utcWeeks", ()=>_utcWeekJs.utcSundays
);
parcelHelpers.export(exports, "utcSunday", ()=>_utcWeekJs.utcSunday
);
parcelHelpers.export(exports, "utcSundays", ()=>_utcWeekJs.utcSundays
);
parcelHelpers.export(exports, "utcMonday", ()=>_utcWeekJs.utcMonday
);
parcelHelpers.export(exports, "utcMondays", ()=>_utcWeekJs.utcMondays
);
parcelHelpers.export(exports, "utcTuesday", ()=>_utcWeekJs.utcTuesday
);
parcelHelpers.export(exports, "utcTuesdays", ()=>_utcWeekJs.utcTuesdays
);
parcelHelpers.export(exports, "utcWednesday", ()=>_utcWeekJs.utcWednesday
);
parcelHelpers.export(exports, "utcWednesdays", ()=>_utcWeekJs.utcWednesdays
);
parcelHelpers.export(exports, "utcThursday", ()=>_utcWeekJs.utcThursday
);
parcelHelpers.export(exports, "utcThursdays", ()=>_utcWeekJs.utcThursdays
);
parcelHelpers.export(exports, "utcFriday", ()=>_utcWeekJs.utcFriday
);
parcelHelpers.export(exports, "utcFridays", ()=>_utcWeekJs.utcFridays
);
parcelHelpers.export(exports, "utcSaturday", ()=>_utcWeekJs.utcSaturday
);
parcelHelpers.export(exports, "utcSaturdays", ()=>_utcWeekJs.utcSaturdays
);
parcelHelpers.export(exports, "utcMonth", ()=>_utcMonthJsDefault.default
);
parcelHelpers.export(exports, "utcMonths", ()=>_utcMonthJs.utcMonths
);
parcelHelpers.export(exports, "utcYear", ()=>_utcYearJsDefault.default
);
parcelHelpers.export(exports, "utcYears", ()=>_utcYearJs.utcYears
);
parcelHelpers.export(exports, "utcTicks", ()=>_ticksJs.utcTicks
);
parcelHelpers.export(exports, "utcTickInterval", ()=>_ticksJs.utcTickInterval
);
parcelHelpers.export(exports, "timeTicks", ()=>_ticksJs.timeTicks
);
parcelHelpers.export(exports, "timeTickInterval", ()=>_ticksJs.timeTickInterval
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _millisecondJs = require("./millisecond.js");
var _millisecondJsDefault = parcelHelpers.interopDefault(_millisecondJs);
var _secondJs = require("./second.js");
var _secondJsDefault = parcelHelpers.interopDefault(_secondJs);
var _minuteJs = require("./minute.js");
var _minuteJsDefault = parcelHelpers.interopDefault(_minuteJs);
var _hourJs = require("./hour.js");
var _hourJsDefault = parcelHelpers.interopDefault(_hourJs);
var _dayJs = require("./day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _weekJs = require("./week.js");
var _monthJs = require("./month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var _yearJs = require("./year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _utcMinuteJs = require("./utcMinute.js");
var _utcMinuteJsDefault = parcelHelpers.interopDefault(_utcMinuteJs);
var _utcHourJs = require("./utcHour.js");
var _utcHourJsDefault = parcelHelpers.interopDefault(_utcHourJs);
var _utcDayJs = require("./utcDay.js");
var _utcDayJsDefault = parcelHelpers.interopDefault(_utcDayJs);
var _utcWeekJs = require("./utcWeek.js");
var _utcMonthJs = require("./utcMonth.js");
var _utcMonthJsDefault = parcelHelpers.interopDefault(_utcMonthJs);
var _utcYearJs = require("./utcYear.js");
var _utcYearJsDefault = parcelHelpers.interopDefault(_utcYearJs);
var _ticksJs = require("./ticks.js");

},{"./interval.js":"1URbY","./millisecond.js":"66wfU","./second.js":"5eoNm","./minute.js":"aOzRP","./hour.js":"9ciXB","./day.js":"4ezR6","./week.js":"3sfLK","./month.js":"JdgMj","./year.js":"46skd","./utcMinute.js":"bCnA8","./utcHour.js":"aBqtx","./utcDay.js":"aeQbv","./utcWeek.js":"995oO","./utcMonth.js":"8QbLN","./utcYear.js":"92RpU","./ticks.js":"fdOaC","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1URbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var t0 = new Date, t1 = new Date;
function newInterval(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function(date) {
        var d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop)
        return range;
    };
    interval.filter = function(test) {
        return newInterval(function(date) {
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, function(date, step) {
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = function(start, end) {
            t0.setTime(+start), t1.setTime(+end);
            floori(t0), floori(t1);
            return Math.floor(count(t0, t1));
        };
        interval.every = function(step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
                return field(d) % step === 0;
            } : function(d) {
                return interval.count(0, d) % step === 0;
            });
        };
    }
    return interval;
}
exports.default = newInterval;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"66wfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "milliseconds", ()=>milliseconds
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var millisecond = _intervalJsDefault.default(function() {
// noop
}, function(date, step) {
    date.setTime(+date + step);
}, function(start, end) {
    return end - start;
});
// An optimized implementation for this simple case.
millisecond.every = function(k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return _intervalJsDefault.default(function(date) {
        date.setTime(Math.floor(date / k) * k);
    }, function(date, step) {
        date.setTime(+date + step * k);
    }, function(start, end) {
        return (end - start) / k;
    });
};
exports.default = millisecond;
var milliseconds = millisecond.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5eoNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "seconds", ()=>seconds
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var second = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds());
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationSecond);
}, function(start, end) {
    return (end - start) / _durationJs.durationSecond;
}, function(date) {
    return date.getUTCSeconds();
});
exports.default = second;
var seconds = second.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"66j9W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "durationSecond", ()=>durationSecond
);
parcelHelpers.export(exports, "durationMinute", ()=>durationMinute
);
parcelHelpers.export(exports, "durationHour", ()=>durationHour
);
parcelHelpers.export(exports, "durationDay", ()=>durationDay
);
parcelHelpers.export(exports, "durationWeek", ()=>durationWeek
);
parcelHelpers.export(exports, "durationMonth", ()=>durationMonth
);
parcelHelpers.export(exports, "durationYear", ()=>durationYear
);
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aOzRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minutes", ()=>minutes
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var minute = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _durationJs.durationSecond);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationMinute);
}, function(start, end) {
    return (end - start) / _durationJs.durationMinute;
}, function(date) {
    return date.getMinutes();
});
exports.default = minute;
var minutes = minute.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9ciXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hours", ()=>hours
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var hour = _intervalJsDefault.default(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _durationJs.durationSecond - date.getMinutes() * _durationJs.durationMinute);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationHour);
}, function(start, end) {
    return (end - start) / _durationJs.durationHour;
}, function(date) {
    return date.getHours();
});
exports.default = hour;
var hours = hour.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4ezR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "days", ()=>days
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var day = _intervalJsDefault.default((date)=>date.setHours(0, 0, 0, 0)
, (date, step)=>date.setDate(date.getDate() + step)
, (start, end)=>(end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _durationJs.durationMinute) / _durationJs.durationDay
, (date)=>date.getDate() - 1
);
exports.default = day;
var days = day.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3sfLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sunday", ()=>sunday
);
parcelHelpers.export(exports, "monday", ()=>monday
);
parcelHelpers.export(exports, "tuesday", ()=>tuesday
);
parcelHelpers.export(exports, "wednesday", ()=>wednesday
);
parcelHelpers.export(exports, "thursday", ()=>thursday
);
parcelHelpers.export(exports, "friday", ()=>friday
);
parcelHelpers.export(exports, "saturday", ()=>saturday
);
parcelHelpers.export(exports, "sundays", ()=>sundays
);
parcelHelpers.export(exports, "mondays", ()=>mondays
);
parcelHelpers.export(exports, "tuesdays", ()=>tuesdays
);
parcelHelpers.export(exports, "wednesdays", ()=>wednesdays
);
parcelHelpers.export(exports, "thursdays", ()=>thursdays
);
parcelHelpers.export(exports, "fridays", ()=>fridays
);
parcelHelpers.export(exports, "saturdays", ()=>saturdays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function weekday(i) {
    return _intervalJsDefault.default(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _durationJs.durationMinute) / _durationJs.durationWeek;
    });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"JdgMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "months", ()=>months
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var month = _intervalJsDefault.default(function(date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setMonth(date.getMonth() + step);
}, function(start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
    return date.getMonth();
});
exports.default = month;
var months = month.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"46skd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "years", ()=>years
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var year = _intervalJsDefault.default(function(date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
    return end.getFullYear() - start.getFullYear();
}, function(date) {
    return date.getFullYear();
});
// An optimized implementation for this simple case.
year.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : _intervalJsDefault.default(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
    });
};
exports.default = year;
var years = year.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bCnA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMinutes", ()=>utcMinutes
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcMinute = _intervalJsDefault.default(function(date) {
    date.setUTCSeconds(0, 0);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationMinute);
}, function(start, end) {
    return (end - start) / _durationJs.durationMinute;
}, function(date) {
    return date.getUTCMinutes();
});
exports.default = utcMinute;
var utcMinutes = utcMinute.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aBqtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcHours", ()=>utcHours
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcHour = _intervalJsDefault.default(function(date) {
    date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
    date.setTime(+date + step * _durationJs.durationHour);
}, function(start, end) {
    return (end - start) / _durationJs.durationHour;
}, function(date) {
    return date.getUTCHours();
});
exports.default = utcHour;
var utcHours = utcHour.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aeQbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcDays", ()=>utcDays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcDay = _intervalJsDefault.default(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / _durationJs.durationDay;
}, function(date) {
    return date.getUTCDate() - 1;
});
exports.default = utcDay;
var utcDays = utcDay.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"995oO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcSunday", ()=>utcSunday
);
parcelHelpers.export(exports, "utcMonday", ()=>utcMonday
);
parcelHelpers.export(exports, "utcTuesday", ()=>utcTuesday
);
parcelHelpers.export(exports, "utcWednesday", ()=>utcWednesday
);
parcelHelpers.export(exports, "utcThursday", ()=>utcThursday
);
parcelHelpers.export(exports, "utcFriday", ()=>utcFriday
);
parcelHelpers.export(exports, "utcSaturday", ()=>utcSaturday
);
parcelHelpers.export(exports, "utcSundays", ()=>utcSundays
);
parcelHelpers.export(exports, "utcMondays", ()=>utcMondays
);
parcelHelpers.export(exports, "utcTuesdays", ()=>utcTuesdays
);
parcelHelpers.export(exports, "utcWednesdays", ()=>utcWednesdays
);
parcelHelpers.export(exports, "utcThursdays", ()=>utcThursdays
);
parcelHelpers.export(exports, "utcFridays", ()=>utcFridays
);
parcelHelpers.export(exports, "utcSaturdays", ()=>utcSaturdays
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function utcWeekday(i) {
    return _intervalJsDefault.default(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
        return (end - start) / _durationJs.durationWeek;
    });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

},{"./interval.js":"1URbY","./duration.js":"66j9W","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8QbLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMonths", ()=>utcMonths
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcMonth = _intervalJsDefault.default(function(date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
    return date.getUTCMonth();
});
exports.default = utcMonth;
var utcMonths = utcMonth.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"92RpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcYears", ()=>utcYears
);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcYear = _intervalJsDefault.default(function(date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
utcYear.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : _intervalJsDefault.default(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
exports.default = utcYear;
var utcYears = utcYear.range;

},{"./interval.js":"1URbY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fdOaC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcTicks", ()=>utcTicks
);
parcelHelpers.export(exports, "utcTickInterval", ()=>utcTickInterval
);
parcelHelpers.export(exports, "timeTicks", ()=>timeTicks
);
parcelHelpers.export(exports, "timeTickInterval", ()=>timeTickInterval
);
var _d3Array = require("d3-array");
var _durationJs = require("./duration.js");
var _millisecondJs = require("./millisecond.js");
var _millisecondJsDefault = parcelHelpers.interopDefault(_millisecondJs);
var _secondJs = require("./second.js");
var _secondJsDefault = parcelHelpers.interopDefault(_secondJs);
var _minuteJs = require("./minute.js");
var _minuteJsDefault = parcelHelpers.interopDefault(_minuteJs);
var _hourJs = require("./hour.js");
var _hourJsDefault = parcelHelpers.interopDefault(_hourJs);
var _dayJs = require("./day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _weekJs = require("./week.js");
var _monthJs = require("./month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var _yearJs = require("./year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _utcMinuteJs = require("./utcMinute.js");
var _utcMinuteJsDefault = parcelHelpers.interopDefault(_utcMinuteJs);
var _utcHourJs = require("./utcHour.js");
var _utcHourJsDefault = parcelHelpers.interopDefault(_utcHourJs);
var _utcDayJs = require("./utcDay.js");
var _utcDayJsDefault = parcelHelpers.interopDefault(_utcDayJs);
var _utcWeekJs = require("./utcWeek.js");
var _utcMonthJs = require("./utcMonth.js");
var _utcMonthJsDefault = parcelHelpers.interopDefault(_utcMonthJs);
var _utcYearJs = require("./utcYear.js");
var _utcYearJsDefault = parcelHelpers.interopDefault(_utcYearJs);
function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
        [_secondJsDefault.default, 1, _durationJs.durationSecond],
        [_secondJsDefault.default, 5,
            5 * _durationJs.durationSecond
        ],
        [_secondJsDefault.default, 15,
            15 * _durationJs.durationSecond
        ],
        [_secondJsDefault.default, 30,
            30 * _durationJs.durationSecond
        ],
        [
            minute,
            1, _durationJs.durationMinute],
        [
            minute,
            5,
            5 * _durationJs.durationMinute
        ],
        [
            minute,
            15,
            15 * _durationJs.durationMinute
        ],
        [
            minute,
            30,
            30 * _durationJs.durationMinute
        ],
        [
            hour,
            1, _durationJs.durationHour],
        [
            hour,
            3,
            3 * _durationJs.durationHour
        ],
        [
            hour,
            6,
            6 * _durationJs.durationHour
        ],
        [
            hour,
            12,
            12 * _durationJs.durationHour
        ],
        [
            day,
            1, _durationJs.durationDay],
        [
            day,
            2,
            2 * _durationJs.durationDay
        ],
        [
            week,
            1, _durationJs.durationWeek],
        [
            month,
            1, _durationJs.durationMonth],
        [
            month,
            3,
            3 * _durationJs.durationMonth
        ],
        [
            year,
            1, _durationJs.durationYear]
    ];
    function ticks(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [
            stop,
            start
        ];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = _d3Array.bisector(([, , step])=>step
        ).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every(_d3Array.tickStep(start / _durationJs.durationYear, stop / _durationJs.durationYear, count));
        if (i === 0) return _millisecondJsDefault.default.every(Math.max(_d3Array.tickStep(start, stop, count), 1));
        const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step);
    }
    return [
        ticks,
        tickInterval
    ];
}
const [utcTicks, utcTickInterval] = ticker(_utcYearJsDefault.default, _utcMonthJsDefault.default, _utcWeekJs.utcSunday, _utcDayJsDefault.default, _utcHourJsDefault.default, _utcMinuteJsDefault.default);
const [timeTicks, timeTickInterval] = ticker(_yearJsDefault.default, _monthJsDefault.default, _weekJs.sunday, _dayJsDefault.default, _hourJsDefault.default, _minuteJsDefault.default);

},{"d3-array":"dclxS","./duration.js":"66j9W","./millisecond.js":"66wfU","./second.js":"5eoNm","./minute.js":"aOzRP","./hour.js":"9ciXB","./day.js":"4ezR6","./week.js":"3sfLK","./month.js":"JdgMj","./year.js":"46skd","./utcMinute.js":"bCnA8","./utcHour.js":"aBqtx","./utcDay.js":"aeQbv","./utcWeek.js":"995oO","./utcMonth.js":"8QbLN","./utcYear.js":"92RpU","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dclxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>_bisectJsDefault.default
);
parcelHelpers.export(exports, "bisectRight", ()=>_bisectJs.bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>_bisectJs.bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>_bisectJs.bisectCenter
);
parcelHelpers.export(exports, "ascending", ()=>_ascendingJsDefault.default
);
parcelHelpers.export(exports, "bisector", ()=>_bisectorJsDefault.default
);
parcelHelpers.export(exports, "count", ()=>_countJsDefault.default
);
parcelHelpers.export(exports, "cross", ()=>_crossJsDefault.default
);
parcelHelpers.export(exports, "cumsum", ()=>_cumsumJsDefault.default
);
parcelHelpers.export(exports, "descending", ()=>_descendingJsDefault.default
);
parcelHelpers.export(exports, "deviation", ()=>_deviationJsDefault.default
);
parcelHelpers.export(exports, "extent", ()=>_extentJsDefault.default
);
parcelHelpers.export(exports, "Adder", ()=>_fsumJs.Adder
);
parcelHelpers.export(exports, "fsum", ()=>_fsumJs.fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>_fsumJs.fcumsum
);
parcelHelpers.export(exports, "group", ()=>_groupJsDefault.default
);
parcelHelpers.export(exports, "flatGroup", ()=>_groupJs.flatGroup
);
parcelHelpers.export(exports, "flatRollup", ()=>_groupJs.flatRollup
);
parcelHelpers.export(exports, "groups", ()=>_groupJs.groups
);
parcelHelpers.export(exports, "index", ()=>_groupJs.index
);
parcelHelpers.export(exports, "indexes", ()=>_groupJs.indexes
);
parcelHelpers.export(exports, "rollup", ()=>_groupJs.rollup
);
parcelHelpers.export(exports, "rollups", ()=>_groupJs.rollups
);
parcelHelpers.export(exports, "groupSort", ()=>_groupSortJsDefault.default
);
parcelHelpers.export(exports, "bin", ()=>_binJsDefault.default
) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>_binJsDefault.default
);
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>_freedmanDiaconisJsDefault.default
);
parcelHelpers.export(exports, "thresholdScott", ()=>_scottJsDefault.default
);
parcelHelpers.export(exports, "thresholdSturges", ()=>_sturgesJsDefault.default
);
parcelHelpers.export(exports, "max", ()=>_maxJsDefault.default
);
parcelHelpers.export(exports, "maxIndex", ()=>_maxIndexJsDefault.default
);
parcelHelpers.export(exports, "mean", ()=>_meanJsDefault.default
);
parcelHelpers.export(exports, "median", ()=>_medianJsDefault.default
);
parcelHelpers.export(exports, "merge", ()=>_mergeJsDefault.default
);
parcelHelpers.export(exports, "min", ()=>_minJsDefault.default
);
parcelHelpers.export(exports, "minIndex", ()=>_minIndexJsDefault.default
);
parcelHelpers.export(exports, "mode", ()=>_modeJsDefault.default
);
parcelHelpers.export(exports, "nice", ()=>_niceJsDefault.default
);
parcelHelpers.export(exports, "pairs", ()=>_pairsJsDefault.default
);
parcelHelpers.export(exports, "permute", ()=>_permuteJsDefault.default
);
parcelHelpers.export(exports, "quantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "quantileSorted", ()=>_quantileJs.quantileSorted
);
parcelHelpers.export(exports, "quickselect", ()=>_quickselectJsDefault.default
);
parcelHelpers.export(exports, "range", ()=>_rangeJsDefault.default
);
parcelHelpers.export(exports, "rank", ()=>_rankJsDefault.default
);
parcelHelpers.export(exports, "least", ()=>_leastJsDefault.default
);
parcelHelpers.export(exports, "leastIndex", ()=>_leastIndexJsDefault.default
);
parcelHelpers.export(exports, "greatest", ()=>_greatestJsDefault.default
);
parcelHelpers.export(exports, "greatestIndex", ()=>_greatestIndexJsDefault.default
);
parcelHelpers.export(exports, "scan", ()=>_scanJsDefault.default
) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>_shuffleJsDefault.default
);
parcelHelpers.export(exports, "shuffler", ()=>_shuffleJs.shuffler
);
parcelHelpers.export(exports, "sum", ()=>_sumJsDefault.default
);
parcelHelpers.export(exports, "ticks", ()=>_ticksJsDefault.default
);
parcelHelpers.export(exports, "tickIncrement", ()=>_ticksJs.tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>_ticksJs.tickStep
);
parcelHelpers.export(exports, "transpose", ()=>_transposeJsDefault.default
);
parcelHelpers.export(exports, "variance", ()=>_varianceJsDefault.default
);
parcelHelpers.export(exports, "zip", ()=>_zipJsDefault.default
);
parcelHelpers.export(exports, "every", ()=>_everyJsDefault.default
);
parcelHelpers.export(exports, "some", ()=>_someJsDefault.default
);
parcelHelpers.export(exports, "filter", ()=>_filterJsDefault.default
);
parcelHelpers.export(exports, "map", ()=>_mapJsDefault.default
);
parcelHelpers.export(exports, "reduce", ()=>_reduceJsDefault.default
);
parcelHelpers.export(exports, "reverse", ()=>_reverseJsDefault.default
);
parcelHelpers.export(exports, "sort", ()=>_sortJsDefault.default
);
parcelHelpers.export(exports, "difference", ()=>_differenceJsDefault.default
);
parcelHelpers.export(exports, "disjoint", ()=>_disjointJsDefault.default
);
parcelHelpers.export(exports, "intersection", ()=>_intersectionJsDefault.default
);
parcelHelpers.export(exports, "subset", ()=>_subsetJsDefault.default
);
parcelHelpers.export(exports, "superset", ()=>_supersetJsDefault.default
);
parcelHelpers.export(exports, "union", ()=>_unionJsDefault.default
);
parcelHelpers.export(exports, "InternMap", ()=>_internmap.InternMap
);
parcelHelpers.export(exports, "InternSet", ()=>_internmap.InternSet
);
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":"aBOzL","./ascending.js":"is3Cq","./bisector.js":"d0uRQ","./count.js":"3W7W6","./cross.js":"9wmuf","./cumsum.js":"gTBYA","./descending.js":"3aHVG","./deviation.js":"gC5d9","./extent.js":"i65AD","./fsum.js":"kNcPo","./group.js":"9hlDG","./groupSort.js":"9bi08","./bin.js":"e29mp","./threshold/freedmanDiaconis.js":"YcDJP","./threshold/scott.js":"h9Xie","./threshold/sturges.js":"iBhHB","./max.js":"aKI7F","./maxIndex.js":"cI4hF","./mean.js":"522BH","./median.js":"25KY1","./merge.js":"lLqaS","./min.js":"ah5VG","./minIndex.js":"cjolc","./mode.js":"atCGw","./nice.js":"8MlNU","./pairs.js":"f10CX","./permute.js":"lBJIA","./quantile.js":"g22bz","./quickselect.js":"fusOg","./range.js":"aFuRJ","./rank.js":"98L3a","./least.js":"ewg2M","./leastIndex.js":"hCcEV","./greatest.js":"jX3nM","./greatestIndex.js":"5lFsk","./scan.js":"ek53c","./shuffle.js":"hrDvf","./sum.js":"5x489","./ticks.js":"eP3r2","./transpose.js":"eTl2h","./variance.js":"fFwh7","./zip.js":"g6Swo","./every.js":"j8w8G","./some.js":"258kt","./filter.js":"kmzCm","./map.js":"g8C0v","./reduce.js":"kJqMu","./reverse.js":"c5OzD","./sort.js":"iPqde","./difference.js":"4yCN3","./disjoint.js":"i51B2","./intersection.js":"xQI0g","./subset.js":"bSPhW","./superset.js":"30CTh","./union.js":"byxPk","internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aBOzL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight
);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft
);
parcelHelpers.export(exports, "bisectCenter", ()=>bisectCenter
);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
const ascendingBisect = _bisectorJsDefault.default(_ascendingJsDefault.default);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = _bisectorJsDefault.default(_numberJsDefault.default).center;
exports.default = bisectRight;

},{"./ascending.js":"is3Cq","./bisector.js":"d0uRQ","./number.js":"bMc02","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"is3Cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
exports.default = ascending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"d0uRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function bisector(f) {
    let delta = f;
    let compare1 = f;
    let compare2 = f;
    if (f.length !== 2) {
        delta = (d, x)=>f(d) - x
        ;
        compare1 = _ascendingJsDefault.default;
        compare2 = (d, x)=>_ascendingJsDefault.default(f(d), x)
        ;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi)
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi)
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
}
exports.default = bisector;

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bMc02":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numbers", ()=>numbers
);
function number(x) {
    return x === null ? NaN : +x;
}
exports.default = number;
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3W7W6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function count(values, valueof) {
    let count = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count;
    }
    return count;
}
exports.default = count;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9wmuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function length(array) {
    return array.length | 0;
}
function empty(length) {
    return !(length > 0);
}
function arrayify(values) {
    return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce) {
    return (values)=>reduce(...values)
    ;
}
function cross(...values) {
    const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
    values = values.map(arrayify);
    const lengths = values.map(length);
    const j = values.length - 1;
    const index = new Array(j + 1).fill(0);
    const product = [];
    if (j < 0 || lengths.some(empty)) return product;
    while(true){
        product.push(index.map((j, i)=>values[i][j]
        ));
        let i = j;
        while(++index[i] === lengths[i]){
            if (i === 0) return reduce ? product.map(reduce) : product;
            index[i--] = 0;
        }
    }
}
exports.default = cross;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gTBYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function cumsum(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? (v)=>sum += +v || 0
     : (v)=>sum += +valueof(v, index++, values) || 0
    );
}
exports.default = cumsum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3aHVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
exports.default = descending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gC5d9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
function deviation(values, valueof) {
    const v = _varianceJsDefault.default(values, valueof);
    return v ? Math.sqrt(v) : v;
}
exports.default = deviation;

},{"./variance.js":"fFwh7","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fFwh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function variance(values, valueof) {
    let count = 0;
    let delta;
    let mean = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    }
    if (count > 1) return sum / (count - 1);
}
exports.default = variance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"i65AD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    }
    return [
        min,
        max
    ];
}
exports.default = extent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kNcPo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
parcelHelpers.export(exports, "Adder", ()=>Adder
);
parcelHelpers.export(exports, "fsum", ()=>fsum
);
parcelHelpers.export(exports, "fcumsum", ()=>fcumsum
);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0)
     : (v)=>adder.add(+valueof(v, ++index, values) || 0)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9hlDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groups", ()=>groups
);
parcelHelpers.export(exports, "flatGroup", ()=>flatGroup
);
parcelHelpers.export(exports, "flatRollup", ()=>flatRollup
);
parcelHelpers.export(exports, "rollup", ()=>rollup
);
parcelHelpers.export(exports, "rollups", ()=>rollups
);
parcelHelpers.export(exports, "index", ()=>index
);
parcelHelpers.export(exports, "indexes", ()=>indexes
);
var _internmap = require("internmap");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
function group(values, ...keys) {
    return nest(values, _identityJsDefault.default, _identityJsDefault.default, keys);
}
exports.default = group;
function groups(values, ...keys) {
    return nest(values, Array.from, _identityJsDefault.default, keys);
}
function flatten(groups, keys) {
    for(let i = 1, n = keys.length; i < n; ++i)groups = groups.flatMap((g)=>g.pop().map(([key, value])=>[
                ...g,
                key,
                value
            ]
        )
    );
    return groups;
}
function flatGroup(values, ...keys) {
    return flatten(groups(values, ...keys), keys);
}
function flatRollup(values, reduce, ...keys) {
    return flatten(rollups(values, reduce, ...keys), keys);
}
function rollup(values, reduce, ...keys) {
    return nest(values, _identityJsDefault.default, reduce, keys);
}
function rollups(values, reduce, ...keys) {
    return nest(values, Array.from, reduce, keys);
}
function index(values, ...keys) {
    return nest(values, _identityJsDefault.default, unique, keys);
}
function indexes(values, ...keys) {
    return nest(values, Array.from, unique, keys);
}
function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
}
function nest(values, map, reduce, keys) {
    return (function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        const groups = new _internmap.InternMap();
        const keyof = keys[i++];
        let index = -1;
        for (const value of values){
            const key = keyof(value, ++index, values);
            const group = groups.get(key);
            if (group) group.push(value);
            else groups.set(key, [
                value
            ]);
        }
        for (const [key, values1] of groups)groups.set(key, regroup(values1, i));
        return map(groups);
    })(values, 0);
}

},{"internmap":"jYc4q","./identity.js":"4zs3O","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jYc4q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternMap", ()=>InternMap
);
parcelHelpers.export(exports, "InternSet", ()=>InternSet
);
class InternMap extends Map {
    constructor(entries, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key1, value] of entries)this.set(key1, value);
    }
    get(key) {
        return super.get(intern_get(this, key));
    }
    has(key) {
        return super.has(intern_get(this, key));
    }
    set(key, value) {
        return super.set(intern_set(this, key), value);
    }
    delete(key) {
        return super.delete(intern_delete(this, key));
    }
}
class InternSet extends Set {
    constructor(values, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has(intern_get(this, value));
    }
    add(value) {
        return super.add(intern_set(this, value));
    }
    delete(value) {
        return super.delete(intern_delete(this, value));
    }
}
function intern_get({ _intern , _key  }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern , _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern , _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4zs3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function identity(x) {
    return x;
}
exports.default = identity;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9bi08":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
function groupSort(values, reduce, key) {
    return (reduce.length !== 2 ? _sortJsDefault.default(_groupJs.rollup(values, reduce, key), ([ak, av], [bk, bv])=>_ascendingJsDefault.default(av, bv) || _ascendingJsDefault.default(ak, bk)
    ) : _sortJsDefault.default(_groupJsDefault.default(values, key), ([ak, av], [bk, bv])=>reduce(av, bv) || _ascendingJsDefault.default(ak, bk)
    )).map(([key])=>key
    );
}
exports.default = groupSort;

},{"./ascending.js":"is3Cq","./group.js":"9hlDG","./sort.js":"iPqde","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iPqde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareDefined", ()=>compareDefined
);
parcelHelpers.export(exports, "ascendingDefined", ()=>ascendingDefined
);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
function sort(values, ...F) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f] = F;
    if (f && f.length !== 2 || F.length > 1) {
        const index = Uint32Array.from(values, (d, i)=>i
        );
        if (F.length > 1) {
            F = F.map((f)=>values.map(f)
            );
            index.sort((i, j)=>{
                for (const f of F){
                    const c = ascendingDefined(f[i], f[j]);
                    if (c) return c;
                }
            });
        } else {
            f = values.map(f);
            index.sort((i, j)=>ascendingDefined(f[i], f[j])
            );
        }
        return _permuteJsDefault.default(values, index);
    }
    return values.sort(compareDefined(f));
}
exports.default = sort;
function compareDefined(compare = _ascendingJsDefault.default) {
    if (compare === _ascendingJsDefault.default) return ascendingDefined;
    if (typeof compare !== "function") throw new TypeError("compare is not a function");
    return (a, b)=>{
        const x = compare(a, b);
        if (x || x === 0) return x;
        return (compare(b, b) === 0) - (compare(a, a) === 0);
    };
}
function ascendingDefined(a, b) {
    return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}

},{"./ascending.js":"is3Cq","./permute.js":"lBJIA","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lBJIA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function permute(source, keys) {
    return Array.from(keys, (key)=>source[key]
    );
}
exports.default = permute;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e29mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
function bin() {
    var value = _identityJsDefault.default, domain = _extentJsDefault.default, threshold = _sturgesJsDefault.default;
    function histogram(data) {
        if (!Array.isArray(data)) data = Array.from(data);
        var i, n = data.length, x, values = new Array(n);
        for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds, and nice the
        // default domain accordingly.
        if (!Array.isArray(tz)) {
            const max = x1, tn = +tz;
            if (domain === _extentJsDefault.default) [x0, x1] = _niceJsDefault.default(x0, x1, tn);
            tz = _ticksJsDefault.default(x0, x1, tn);
            // If the last threshold is coincident with the domain’s upper bound, the
            // last bin will be zero-width. If the default domain is used, and this
            // last threshold is coincident with the maximum input value, we can
            // extend the niced upper bound by one tick to ensure uniform bin widths;
            // otherwise, we simply remove the last threshold. Note that we don’t
            // coerce values or the domain to numbers, and thus must be careful to
            // compare order (>=) rather than strict equality (===)!
            if (tz[tz.length - 1] >= x1) {
                if (max >= x1 && domain === _extentJsDefault.default) {
                    const step = _ticksJs.tickIncrement(x0, x1, tn);
                    if (isFinite(step)) {
                        if (step > 0) x1 = (Math.floor(x1 / step) + 1) * step;
                        else if (step < 0) x1 = (Math.ceil(x1 * -step) + 1) / -step;
                    }
                } else tz.pop();
            }
        }
        // Remove any thresholds outside the domain.
        var m = tz.length;
        while(tz[0] <= x0)tz.shift(), --m;
        while(tz[m - 1] > x1)tz.pop(), --m;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        for(i = 0; i < n; ++i){
            x = values[i];
            if (x != null && x0 <= x && x <= x1) bins[_bisectJsDefault.default(tz, x, 0, m)].push(data[i]);
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : _constantJsDefault.default(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : _constantJsDefault.default([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? _constantJsDefault.default(_arrayJs.slice.call(_)) : _constantJsDefault.default(_), histogram) : threshold;
    };
    return histogram;
}
exports.default = bin;

},{"./array.js":"iz59S","./bisect.js":"aBOzL","./constant.js":"gS2I2","./extent.js":"i65AD","./identity.js":"4zs3O","./nice.js":"8MlNU","./ticks.js":"eP3r2","./threshold/sturges.js":"iBhHB","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iz59S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slice", ()=>slice
);
parcelHelpers.export(exports, "map", ()=>map
);
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gS2I2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constant(x) {
    return ()=>x
    ;
}
exports.default = constant;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8MlNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ticksJs = require("./ticks.js");
function nice(start, stop, count) {
    let prestep;
    while(true){
        const step = _ticksJs.tickIncrement(start, stop, count);
        if (step === prestep || step === 0 || !isFinite(step)) return [
            start,
            stop
        ];
        else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
        }
        prestep = step;
    }
}
exports.default = nice;

},{"./ticks.js":"eP3r2","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eP3r2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>tickStep
);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        let r0 = Math.round(start / step), r1 = Math.round(stop / step);
        if (r0 * step < start) ++r0;
        if (r1 * step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) * step;
    } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks[i] = (r0 + i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
}
exports.default = ticks;
function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iBhHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
function thresholdSturges(values) {
    return Math.ceil(Math.log(_countJsDefault.default(values)) / Math.LN2) + 1;
}
exports.default = thresholdSturges;

},{"../count.js":"3W7W6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"YcDJP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _quantileJs = require("../quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
function thresholdFreedmanDiaconis(values, min, max) {
    return Math.ceil((max - min) / (2 * (_quantileJsDefault.default(values, 0.75) - _quantileJsDefault.default(values, 0.25)) * Math.pow(_countJsDefault.default(values), -1 / 3)));
}
exports.default = thresholdFreedmanDiaconis;

},{"../count.js":"3W7W6","../quantile.js":"g22bz","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"g22bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quantileSorted", ()=>quantileSorted
);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function quantile(values, p, valueof) {
    values = Float64Array.from(_numberJs.numbers(values, valueof));
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return _minJsDefault.default(values);
    if (p >= 1) return _maxJsDefault.default(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = _maxJsDefault.default(_quickselectJsDefault.default(values, i0).subarray(0, i0 + 1)), value1 = _minJsDefault.default(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
exports.default = quantile;
function quantileSorted(values, p, valueof = _numberJsDefault.default) {
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}

},{"./max.js":"aKI7F","./min.js":"ah5VG","./quickselect.js":"fusOg","./number.js":"bMc02","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aKI7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}
exports.default = max;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ah5VG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function min(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}
exports.default = min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fusOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sortJs = require("./sort.js");
function quickselect(array, k, left = 0, right = array.length - 1, compare) {
    compare = compare === undefined ? _sortJs.ascendingDefined : _sortJs.compareDefined(compare);
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselect(array, k, newLeft, newRight, compare);
        }
        const t = array[k];
        let i = left;
        let j = right;
        swap(array, left, k);
        if (compare(array[right], t) > 0) swap(array, left, right);
        while(i < j){
            swap(array, i, j), ++i, --j;
            while(compare(array[i], t) < 0)++i;
            while(compare(array[j], t) > 0)--j;
        }
        if (compare(array[left], t) === 0) swap(array, left, j);
        else ++j, swap(array, j, right);
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
    return array;
}
exports.default = quickselect;
function swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}

},{"./sort.js":"iPqde","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"h9Xie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _countJs = require("../count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _deviationJs = require("../deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
function thresholdScott(values, min, max) {
    return Math.ceil((max - min) / (3.5 * _deviationJsDefault.default(values) * Math.pow(_countJsDefault.default(values), -1 / 3)));
}
exports.default = thresholdScott;

},{"../count.js":"3W7W6","../deviation.js":"gC5d9","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cI4hF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxIndex(values, valueof) {
    let max;
    let maxIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    return maxIndex;
}
exports.default = maxIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"522BH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mean(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count, sum += value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count, sum += value;
    }
    if (count) return sum / count;
}
exports.default = mean;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"25KY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
function median(values, valueof) {
    return _quantileJsDefault.default(values, 0.5, valueof);
}
exports.default = median;

},{"./quantile.js":"g22bz","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lLqaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function* flatten(arrays) {
    for (const array of arrays)yield* array;
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cjolc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minIndex(values, valueof) {
    let min;
    let minIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    return minIndex;
}
exports.default = minIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"atCGw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function mode(values, valueof) {
    const counts = new _internmap.InternMap();
    if (valueof === undefined) {
        for (let value of values)if (value != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    }
    let modeValue;
    let modeCount = 0;
    for (const [value, count] of counts)if (count > modeCount) {
        modeCount = count;
        modeValue = value;
    }
    return modeValue;
}
exports.default = mode;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"f10CX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pair", ()=>pair
);
function pairs(values, pairof = pair) {
    const pairs = [];
    let previous;
    let first = false;
    for (const value of values){
        if (first) pairs.push(pairof(previous, value));
        previous = value;
        first = true;
    }
    return pairs;
}
exports.default = pairs;
function pair(a, b) {
    return [
        a,
        b
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aFuRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}
exports.default = range;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"98L3a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _sortJs = require("./sort.js");
function rank(values, valueof = _ascendingJsDefault.default) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    let V = Array.from(values);
    const R = new Float64Array(V.length);
    if (valueof.length !== 2) V = V.map(valueof), valueof = _ascendingJsDefault.default;
    const compareIndex = (i, j)=>valueof(V[i], V[j])
    ;
    let k, r;
    Uint32Array.from(V, (_, i)=>i
    ).sort(valueof === _ascendingJsDefault.default ? (i, j)=>_sortJs.ascendingDefined(V[i], V[j])
     : _sortJs.compareDefined(compareIndex)).forEach((j, i)=>{
        const c = compareIndex(j, k === undefined ? j : k);
        if (c >= 0) {
            if (k === undefined || c > 0) k = j, r = i;
            R[j] = r;
        } else R[j] = NaN;
    });
    return R;
}
exports.default = rank;

},{"./ascending.js":"is3Cq","./sort.js":"iPqde","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ewg2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function least(values, compare = _ascendingJsDefault.default) {
    let min;
    let defined = false;
    if (compare.length === 1) {
        let minValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, minValue) < 0 : _ascendingJsDefault.default(value, value) === 0) {
                min = element;
                minValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
            min = value;
            defined = true;
        }
    }
    return min;
}
exports.default = least;

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hCcEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
function leastIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _minIndexJsDefault.default(values, compare);
    let minValue;
    let min = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
            minValue = value;
            min = index;
        }
    }
    return min;
}
exports.default = leastIndex;

},{"./ascending.js":"is3Cq","./minIndex.js":"cjolc","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jX3nM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
function greatest(values, compare = _ascendingJsDefault.default) {
    let max;
    let defined = false;
    if (compare.length === 1) {
        let maxValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? _ascendingJsDefault.default(value, maxValue) > 0 : _ascendingJsDefault.default(value, value) === 0) {
                max = element;
                maxValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
            max = value;
            defined = true;
        }
    }
    return max;
}
exports.default = greatest;

},{"./ascending.js":"is3Cq","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5lFsk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
function greatestIndex(values, compare = _ascendingJsDefault.default) {
    if (compare.length === 1) return _maxIndexJsDefault.default(values, compare);
    let maxValue;
    let max = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
            maxValue = value;
            max = index;
        }
    }
    return max;
}
exports.default = greatestIndex;

},{"./ascending.js":"is3Cq","./maxIndex.js":"cI4hF","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ek53c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
function scan(values, compare) {
    const index = _leastIndexJsDefault.default(values, compare);
    return index < 0 ? undefined : index;
}
exports.default = scan;

},{"./leastIndex.js":"hCcEV","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hrDvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shuffler", ()=>shuffler
);
exports.default = shuffler(Math.random);
function shuffler(random) {
    return function shuffle(array, i0 = 0, i1 = array.length) {
        let m = i1 - (i0 = +i0);
        while(m){
            const i = random() * m-- | 0, t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5x489":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sum(values, valueof) {
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum += value;
    }
    return sum;
}
exports.default = sum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eTl2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
function transpose(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = _minJsDefault.default(matrix, length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
    return transpose;
}
exports.default = transpose;
function length(d) {
    return d.length;
}

},{"./min.js":"ah5VG","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"g6Swo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
function zip() {
    return _transposeJsDefault.default(arguments);
}
exports.default = zip;

},{"./transpose.js":"eTl2h","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"j8w8G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function every(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (!test(value, ++index, values)) return false;
    }
    return true;
}
exports.default = every;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"258kt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function some(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (test(value, ++index, values)) return true;
    }
    return false;
}
exports.default = some;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kmzCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function filter(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array = [];
    let index = -1;
    for (const value of values)if (test(value, ++index, values)) array.push(value);
    return array;
}
exports.default = filter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"g8C0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function map(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index)=>mapper(value, index, values)
    );
}
exports.default = map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kJqMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reduce(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index = -1;
    if (arguments.length < 3) {
        ({ done , value  } = iterator.next());
        if (done) return;
        ++index;
    }
    while({ done , value: next  } = iterator.next(), !done)value = reducer(value, next, ++index, values);
    return value;
}
exports.default = reduce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"c5OzD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
}
exports.default = reverse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4yCN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function difference(values, ...others) {
    values = new _internmap.InternSet(values);
    for (const other of others)for (const value of other)values.delete(value);
    return values;
}
exports.default = difference;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"i51B2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function disjoint(values, other) {
    const iterator = other[Symbol.iterator](), set = new _internmap.InternSet();
    for (const v of values){
        if (set.has(v)) return false;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) break;
            if (Object.is(v, value)) return false;
            set.add(value);
        }
    }
    return true;
}
exports.default = disjoint;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"xQI0g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function intersection(values, ...others) {
    values = new _internmap.InternSet(values);
    others = others.map(set);
    out: for (const value of values){
        for (const other of others)if (!other.has(value)) {
            values.delete(value);
            continue out;
        }
    }
    return values;
}
exports.default = intersection;
function set(values) {
    return values instanceof _internmap.InternSet ? values : new _internmap.InternSet(values);
}

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bSPhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
function subset(values, other) {
    return _supersetJsDefault.default(other, values);
}
exports.default = subset;

},{"./superset.js":"30CTh","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"30CTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function superset(values, other) {
    const iterator = values[Symbol.iterator](), set = new Set();
    for (const o of other){
        const io = intern(o);
        if (set.has(io)) continue;
        let value, done;
        while({ value , done  } = iterator.next()){
            if (done) return false;
            const ivalue = intern(value);
            set.add(ivalue);
            if (Object.is(io, ivalue)) break;
        }
    }
    return true;
}
exports.default = superset;
function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"byxPk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _internmap = require("internmap");
function union(...others) {
    const set = new _internmap.InternSet();
    for (const other of others)for (const o of other)set.add(o);
    return set;
}
exports.default = union;

},{"internmap":"jYc4q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eUcDj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isoSpecifier", ()=>isoSpecifier
);
var _defaultLocaleJs = require("./defaultLocale.js");
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
    return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : _defaultLocaleJs.utcFormat(isoSpecifier);
exports.default = formatIso;

},{"./defaultLocale.js":"jvGVG","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9agvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isoFormatJs = require("./isoFormat.js");
var _defaultLocaleJs = require("./defaultLocale.js");
function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : _defaultLocaleJs.utcParse(_isoFormatJs.isoSpecifier);
exports.default = parseIso;

},{"./isoFormat.js":"eUcDj","./defaultLocale.js":"jvGVG","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3FwWM":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('4a2zm') + "../../es-ES.2a26362b.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('466L8')
);

},{"./helpers/browser/js-loader":"fVUNi","./helpers/bundle-url":"fa9F8"}],"fVUNi":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = bundle;
        script.onerror = function(e) {
            script.onerror = script.onload = null;
            script.remove();
            reject(e);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"../cacheLoader":"eM8tw"}],"hrwOn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>_bandJsDefault.default
);
parcelHelpers.export(exports, "scalePoint", ()=>_bandJs.point
);
parcelHelpers.export(exports, "scaleIdentity", ()=>_identityJsDefault.default
);
parcelHelpers.export(exports, "scaleLinear", ()=>_linearJsDefault.default
);
parcelHelpers.export(exports, "scaleLog", ()=>_logJsDefault.default
);
parcelHelpers.export(exports, "scaleSymlog", ()=>_symlogJsDefault.default
);
parcelHelpers.export(exports, "scaleOrdinal", ()=>_ordinalJsDefault.default
);
parcelHelpers.export(exports, "scaleImplicit", ()=>_ordinalJs.implicit
);
parcelHelpers.export(exports, "scalePow", ()=>_powJsDefault.default
);
parcelHelpers.export(exports, "scaleSqrt", ()=>_powJs.sqrt
);
parcelHelpers.export(exports, "scaleRadial", ()=>_radialJsDefault.default
);
parcelHelpers.export(exports, "scaleQuantile", ()=>_quantileJsDefault.default
);
parcelHelpers.export(exports, "scaleQuantize", ()=>_quantizeJsDefault.default
);
parcelHelpers.export(exports, "scaleThreshold", ()=>_thresholdJsDefault.default
);
parcelHelpers.export(exports, "scaleTime", ()=>_timeJsDefault.default
);
parcelHelpers.export(exports, "scaleUtc", ()=>_utcTimeJsDefault.default
);
parcelHelpers.export(exports, "scaleSequential", ()=>_sequentialJsDefault.default
);
parcelHelpers.export(exports, "scaleSequentialLog", ()=>_sequentialJs.sequentialLog
);
parcelHelpers.export(exports, "scaleSequentialPow", ()=>_sequentialJs.sequentialPow
);
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>_sequentialJs.sequentialSqrt
);
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>_sequentialJs.sequentialSymlog
);
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>_sequentialQuantileJsDefault.default
);
parcelHelpers.export(exports, "scaleDiverging", ()=>_divergingJsDefault.default
);
parcelHelpers.export(exports, "scaleDivergingLog", ()=>_divergingJs.divergingLog
);
parcelHelpers.export(exports, "scaleDivergingPow", ()=>_divergingJs.divergingPow
);
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>_divergingJs.divergingSqrt
);
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>_divergingJs.divergingSymlog
);
parcelHelpers.export(exports, "tickFormat", ()=>_tickFormatJsDefault.default
);
var _bandJs = require("./band.js");
var _bandJsDefault = parcelHelpers.interopDefault(_bandJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _linearJs = require("./linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _logJs = require("./log.js");
var _logJsDefault = parcelHelpers.interopDefault(_logJs);
var _symlogJs = require("./symlog.js");
var _symlogJsDefault = parcelHelpers.interopDefault(_symlogJs);
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
var _powJs = require("./pow.js");
var _powJsDefault = parcelHelpers.interopDefault(_powJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _thresholdJs = require("./threshold.js");
var _thresholdJsDefault = parcelHelpers.interopDefault(_thresholdJs);
var _timeJs = require("./time.js");
var _timeJsDefault = parcelHelpers.interopDefault(_timeJs);
var _utcTimeJs = require("./utcTime.js");
var _utcTimeJsDefault = parcelHelpers.interopDefault(_utcTimeJs);
var _sequentialJs = require("./sequential.js");
var _sequentialJsDefault = parcelHelpers.interopDefault(_sequentialJs);
var _sequentialQuantileJs = require("./sequentialQuantile.js");
var _sequentialQuantileJsDefault = parcelHelpers.interopDefault(_sequentialQuantileJs);
var _divergingJs = require("./diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);

},{"./band.js":"jrhJj","./identity.js":"7A0m5","./linear.js":"iCJmQ","./log.js":"8gycm","./symlog.js":"etHgK","./ordinal.js":"16SNv","./pow.js":"kopvN","./radial.js":"hOBjs","./quantile.js":"iT8CK","./quantize.js":"ec2AM","./threshold.js":"8jaMK","./time.js":"7jFE4","./utcTime.js":"jZmye","./sequential.js":"76Oio","./sequentialQuantile.js":"dMZ3i","./diverging.js":"3lkJJ","./tickFormat.js":"1dqFI","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jrhJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "point", ()=>point
);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
function band() {
    var scale = _ordinalJsDefault.default().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = _d3Array.range(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [
            r0,
            r1
        ];
    };
    scale.rangeRound = function(_) {
        return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return band(domain(), [
            r0,
            r1
        ]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return _initJs.initRange.apply(rescale(), arguments);
}
exports.default = band;
function pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return pointish(copy());
    };
    return scale;
}
function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
}

},{"d3-array":"dclxS","./init.js":"76hF6","./ordinal.js":"16SNv","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"76hF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange
);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator
);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"16SNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit
);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
const implicit = Symbol("implicit");
function ordinal() {
    var index = new _d3Array.InternMap(), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new _d3Array.InternMap();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = ordinal;

},{"d3-array":"dclxS","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"7A0m5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linearJs = require("./linear.js");
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function identity(domain) {
    var unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = Array.from(_, _numberJsDefault.default), scale) : domain.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return identity(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, _numberJsDefault.default) : [
        0,
        1
    ];
    return _linearJs.linearish(scale);
}
exports.default = identity;

},{"./linear.js":"iCJmQ","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iCJmQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearish", ()=>linearish
);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return _d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return _tickFormatJsDefault.default(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = _d3Array.tickIncrement(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = _continuousJsDefault.default();
    scale.copy = function() {
        return _continuousJs.copy(scale, linear());
    };
    _initJs.initRange.apply(scale, arguments);
    return linearish(scale);
}
exports.default = linear;

},{"d3-array":"dclxS","./continuous.js":"btLMJ","./init.js":"76hF6","./tickFormat.js":"1dqFI","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"btLMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity
);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "transformer", ()=>transformer
);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : _constantJsDefault.default(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = _d3Array.bisect(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = _d3Interpolate.interpolate, transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), _d3Interpolate.interpolateNumber)))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, _numberJsDefault.default), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = _d3Interpolate.interpolateRound, rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
exports.default = continuous;

},{"d3-array":"dclxS","d3-interpolate":"e7XwA","./constant.js":"a5Wmk","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e7XwA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>_valueJsDefault.default
);
parcelHelpers.export(exports, "interpolateArray", ()=>_arrayJsDefault.default
);
parcelHelpers.export(exports, "interpolateBasis", ()=>_basisJsDefault.default
);
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>_basisClosedJsDefault.default
);
parcelHelpers.export(exports, "interpolateDate", ()=>_dateJsDefault.default
);
parcelHelpers.export(exports, "interpolateDiscrete", ()=>_discreteJsDefault.default
);
parcelHelpers.export(exports, "interpolateHue", ()=>_hueJsDefault.default
);
parcelHelpers.export(exports, "interpolateNumber", ()=>_numberJsDefault.default
);
parcelHelpers.export(exports, "interpolateNumberArray", ()=>_numberArrayJsDefault.default
);
parcelHelpers.export(exports, "interpolateObject", ()=>_objectJsDefault.default
);
parcelHelpers.export(exports, "interpolateRound", ()=>_roundJsDefault.default
);
parcelHelpers.export(exports, "interpolateString", ()=>_stringJsDefault.default
);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>_indexJs.interpolateTransformCss
);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>_indexJs.interpolateTransformSvg
);
parcelHelpers.export(exports, "interpolateZoom", ()=>_zoomJsDefault.default
);
parcelHelpers.export(exports, "interpolateRgb", ()=>_rgbJsDefault.default
);
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>_rgbJs.rgbBasis
);
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>_rgbJs.rgbBasisClosed
);
parcelHelpers.export(exports, "interpolateHsl", ()=>_hslJsDefault.default
);
parcelHelpers.export(exports, "interpolateHslLong", ()=>_hslJs.hslLong
);
parcelHelpers.export(exports, "interpolateLab", ()=>_labJsDefault.default
);
parcelHelpers.export(exports, "interpolateHcl", ()=>_hclJsDefault.default
);
parcelHelpers.export(exports, "interpolateHclLong", ()=>_hclJs.hclLong
);
parcelHelpers.export(exports, "interpolateCubehelix", ()=>_cubehelixJsDefault.default
);
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>_cubehelixJs.cubehelixLong
);
parcelHelpers.export(exports, "piecewise", ()=>_piecewiseJsDefault.default
);
parcelHelpers.export(exports, "quantize", ()=>_quantizeJsDefault.default
);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":"jfpB7","./array.js":"6pPWc","./basis.js":"1DJ3x","./basisClosed.js":"d28oA","./date.js":"9vQgC","./discrete.js":"kbqZc","./hue.js":"5ldU4","./number.js":"igEfY","./numberArray.js":"lBrzO","./object.js":"cDojd","./round.js":"c4KDA","./string.js":"hmd3K","./transform/index.js":"etDRQ","./zoom.js":"HiDI0","./rgb.js":"9bAoa","./hsl.js":"8lFt4","./lab.js":"h1Bcf","./hcl.js":"1qHkm","./cubehelix.js":"9aK10","./piecewise.js":"bex0T","./quantize.js":"fWEIz","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jfpB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? _constantJsDefault.default(b) : (t === "number" ? _numberJsDefault.default : t === "string" ? (c = _d3Color.color(b)) ? (b = c, _rgbJsDefault.default) : _stringJsDefault.default : b instanceof _d3Color.color ? _rgbJsDefault.default : b instanceof Date ? _dateJsDefault.default : _numberArrayJs.isNumberArray(b) ? _numberArrayJsDefault.default : Array.isArray(b) ? _arrayJs.genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _objectJsDefault.default : _numberJsDefault.default)(a, b);
};

},{"d3-color":"ap3Jg","./rgb.js":"9bAoa","./array.js":"6pPWc","./date.js":"9vQgC","./number.js":"igEfY","./object.js":"cDojd","./string.js":"hmd3K","./constant.js":"hWtul","./numberArray.js":"lBrzO","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ap3Jg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>_colorJsDefault.default
);
parcelHelpers.export(exports, "rgb", ()=>_colorJs.rgb
);
parcelHelpers.export(exports, "hsl", ()=>_colorJs.hsl
);
parcelHelpers.export(exports, "lab", ()=>_labJsDefault.default
);
parcelHelpers.export(exports, "hcl", ()=>_labJs.hcl
);
parcelHelpers.export(exports, "lch", ()=>_labJs.lch
);
parcelHelpers.export(exports, "gray", ()=>_labJs.gray
);
parcelHelpers.export(exports, "cubehelix", ()=>_cubehelixJsDefault.default
);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"hAUDV","./lab.js":"50Bjg","./cubehelix.js":"68X6M","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hAUDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color
);
parcelHelpers.export(exports, "darker", ()=>darker
);
parcelHelpers.export(exports, "brighter", ()=>brighter
);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert
);
parcelHelpers.export(exports, "rgb", ()=>rgb
);
parcelHelpers.export(exports, "Rgb", ()=>Rgb
);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert
);
parcelHelpers.export(exports, "hsl", ()=>hsl
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
_defineJsDefault.default(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
exports.default = color;
function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
_defineJsDefault.default(Rgb, rgb, _defineJs.extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
_defineJsDefault.default(Hsl, hsl, _defineJs.extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"5yZbK","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5yZbK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
exports.default = function(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
};
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"50Bjg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gray", ()=>gray
);
parcelHelpers.export(exports, "Lab", ()=>Lab
);
parcelHelpers.export(exports, "lch", ()=>lch
);
parcelHelpers.export(exports, "hcl", ()=>hcl
);
parcelHelpers.export(exports, "Hcl", ()=>Hcl
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18, Xn = 0.96422, Yn = 1, Zn = 0.82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof _colorJs.Rgb)) o = _colorJs.rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
        z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function gray(l, opacity) {
    return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
exports.default = lab;
function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
_defineJsDefault.default(Lab, lab, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
        return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = Xn * lab2xyz(x);
        y = Yn * lab2xyz(y);
        z = Zn * lab2xyz(z);
        return new _colorJs.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.033454 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * _mathJs.degrees;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c, h, opacity) {
    return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _mathJs.radians;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
_defineJsDefault.default(Hcl, hcl, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
        return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
        return hcl2lab(this).rgb();
    }
}));

},{"./define.js":"5yZbK","./color.js":"hAUDV","./math.js":"djUwo","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"djUwo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "radians", ()=>radians
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"68X6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cubehelix", ()=>Cubehelix
);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
var A = -0.14861, B = 1.78277, C = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof _colorJs.Rgb)) o = _colorJs.rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * _mathJs.degrees - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
exports.default = cubehelix;
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
_defineJsDefault.default(Cubehelix, cubehelix, _defineJs.extend(_colorJs.Color, {
    brighter: function(k) {
        k = k == null ? _colorJs.brighter : Math.pow(_colorJs.brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? _colorJs.darker : Math.pow(_colorJs.darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * _mathJs.radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new _colorJs.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));

},{"./define.js":"5yZbK","./color.js":"hAUDV","./math.js":"djUwo","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9bAoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis
);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed
);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = (function rgbGamma(y) {
    var color = _colorJs.gamma(y);
    function rgb(start, end) {
        var r = color((start = _d3Color.rgb(start)).r, (end = _d3Color.rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = _colorJsDefault.default(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
})(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = _d3Color.rgb(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(_basisJsDefault.default);
var rgbBasisClosed = rgbSpline(_basisClosedJsDefault.default);

},{"d3-color":"ap3Jg","./basis.js":"1DJ3x","./basisClosed.js":"d28oA","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1DJ3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis
);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
exports.default = function(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"d28oA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basisJs = require("./basis.js");
exports.default = function(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return _basisJs.basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"./basis.js":"1DJ3x","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8Wcc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue
);
parcelHelpers.export(exports, "gamma", ()=>gamma
);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : _constantJsDefault.default(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : _constantJsDefault.default(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : _constantJsDefault.default(isNaN(a) ? b : a);
}
exports.default = nogamma;

},{"./constant.js":"hWtul","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hWtul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6pPWc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genericArray", ()=>genericArray
);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    return (_numberArrayJs.isNumberArray(b) ? _numberArrayJsDefault.default : genericArray)(a, b);
};
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = _valueJsDefault.default(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"jfpB7","./numberArray.js":"lBrzO","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lBrzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray
);
exports.default = function(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
};
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9vQgC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"igEfY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cDojd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
exports.default = function(a, b) {
    var i = {
    }, c = {
    }, k;
    if (a === null || typeof a !== "object") a = {
    };
    if (b === null || typeof b !== "object") b = {
    };
    for(k in b)if (k in a) i[k] = _valueJsDefault.default(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
};

},{"./value.js":"jfpB7","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hmd3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
exports.default = function(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: _numberJsDefault.default(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
};

},{"./number.js":"igEfY","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kbqZc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5ldU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("./color.js");
exports.default = function(a, b) {
    var i = _colorJs.hue(+a, +b);
    return function(t) {
        var x = i(t);
        return x - 360 * Math.floor(x / 360);
    };
};

},{"./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"c4KDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"etDRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss
);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg
);
var _numberJs = require("../number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _parseJs = require("./parse.js");
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: _numberJsDefault.default(xa, xb)
            }, {
                i: i - 2,
                x: _numberJsDefault.default(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: _numberJsDefault.default(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: _numberJsDefault.default(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: _numberJsDefault.default(xa, xb)
            }, {
                i: i - 2,
                x: _numberJsDefault.default(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(_parseJs.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parseJs.parseSvg, ", ", ")", ")");

},{"../number.js":"igEfY","./parse.js":"TQc0q","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"TQc0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss
);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg
);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? _decomposeJs.identity : _decomposeJsDefault.default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return _decomposeJs.identity;
    value = value.matrix;
    return _decomposeJsDefault.default(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"CTixW","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"CTixW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity
);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
exports.default = function(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"HiDI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var epsilon2 = 0.000000000001;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
exports.default = (function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(0.001, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
})(Math.SQRT2, 2, 4);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8lFt4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslLong", ()=>hslLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function hsl(hue) {
    return function(start, end) {
        var h = hue((start = _d3Color.hsl(start)).h, (end = _d3Color.hsl(end)).h), s = _colorJsDefault.default(start.s, end.s), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
exports.default = hsl(_colorJs.hue);
var hslLong = hsl(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"h1Bcf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function lab(start, end) {
    var l = _colorJsDefault.default((start = _d3Color.lab(start)).l, (end = _d3Color.lab(end)).l), a = _colorJsDefault.default(start.a, end.a), b = _colorJsDefault.default(start.b, end.b), opacity = _colorJsDefault.default(start.opacity, end.opacity);
    return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}
exports.default = lab;

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1qHkm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hclLong", ()=>hclLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function hcl(hue) {
    return function(start, end) {
        var h = hue((start = _d3Color.hcl(start)).h, (end = _d3Color.hcl(end)).h), c = _colorJsDefault.default(start.c, end.c), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
exports.default = hcl(_colorJs.hue);
var hclLong = hcl(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9aK10":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubehelixLong", ()=>cubehelixLong
);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function cubehelix(hue) {
    return (function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = _d3Color.cubehelix(start)).h, (end = _d3Color.cubehelix(end)).h), s = _colorJsDefault.default(start.s, end.s), l = _colorJsDefault.default(start.l, end.l), opacity = _colorJsDefault.default(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    })(1);
}
exports.default = cubehelix(_colorJs.hue);
var cubehelixLong = cubehelix(_colorJsDefault.default);

},{"d3-color":"ap3Jg","./color.js":"8Wcc3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bex0T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
function piecewise(interpolate, values) {
    if (values === undefined) values = interpolate, interpolate = _valueJsDefault.default;
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while(i < n)I[i] = interpolate(v, v = values[++i]);
    return function(t) {
        var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
        return I[i](t - i);
    };
}
exports.default = piecewise;

},{"./value.js":"jfpB7","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fWEIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(interpolator, n) {
    var samples = new Array(n);
    for(var i = 0; i < n; ++i)samples[i] = interpolator(i / (n - 1));
    return samples;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"a5Wmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constants(x) {
    return function() {
        return x;
    };
}
exports.default = constants;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1cJLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function number(x) {
    return +x;
}
exports.default = number;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1dqFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
function tickFormat(start, stop, count, specifier) {
    var step = _d3Array.tickStep(start, stop, count), precision;
    specifier = _d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionPrefix(step, value))) specifier.precision = precision;
            return _d3Format.formatPrefix(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = _d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return _d3Format.format(specifier);
}
exports.default = tickFormat;

},{"d3-array":"dclxS","d3-format":"hzInr","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hzInr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDefaultLocale", ()=>_defaultLocaleJsDefault.default
);
parcelHelpers.export(exports, "format", ()=>_defaultLocaleJs.format
);
parcelHelpers.export(exports, "formatPrefix", ()=>_defaultLocaleJs.formatPrefix
);
parcelHelpers.export(exports, "formatLocale", ()=>_localeJsDefault.default
);
parcelHelpers.export(exports, "formatSpecifier", ()=>_formatSpecifierJsDefault.default
);
parcelHelpers.export(exports, "FormatSpecifier", ()=>_formatSpecifierJs.FormatSpecifier
);
parcelHelpers.export(exports, "precisionFixed", ()=>_precisionFixedJsDefault.default
);
parcelHelpers.export(exports, "precisionPrefix", ()=>_precisionPrefixJsDefault.default
);
parcelHelpers.export(exports, "precisionRound", ()=>_precisionRoundJsDefault.default
);
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _precisionFixedJs = require("./precisionFixed.js");
var _precisionFixedJsDefault = parcelHelpers.interopDefault(_precisionFixedJs);
var _precisionPrefixJs = require("./precisionPrefix.js");
var _precisionPrefixJsDefault = parcelHelpers.interopDefault(_precisionPrefixJs);
var _precisionRoundJs = require("./precisionRound.js");
var _precisionRoundJsDefault = parcelHelpers.interopDefault(_precisionRoundJs);

},{"./defaultLocale.js":"2xO5L","./locale.js":"j5r27","./formatSpecifier.js":"55yO4","./precisionFixed.js":"e3JIq","./precisionPrefix.js":"7GxX5","./precisionRound.js":"1ZF1R","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2xO5L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format
);
parcelHelpers.export(exports, "formatPrefix", ()=>formatPrefix
);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = _localeJsDefault.default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"j5r27","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"j5r27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
var _formatGroupJs = require("./formatGroup.js");
var _formatGroupJsDefault = parcelHelpers.interopDefault(_formatGroupJs);
var _formatNumeralsJs = require("./formatNumerals.js");
var _formatNumeralsJsDefault = parcelHelpers.interopDefault(_formatNumeralsJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _formatTrimJs = require("./formatTrim.js");
var _formatTrimJsDefault = parcelHelpers.interopDefault(_formatTrimJs);
var _formatTypesJs = require("./formatTypes.js");
var _formatTypesJsDefault = parcelHelpers.interopDefault(_formatTypesJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
exports.default = function(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? _identityJsDefault.default : _formatGroupJsDefault.default(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? _identityJsDefault.default : _formatNumeralsJsDefault.default(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = _formatSpecifierJsDefault.default(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!_formatTypesJsDefault.default[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = _formatTypesJsDefault.default[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = _formatTrimJsDefault.default(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAutoJs.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = _formatSpecifierJsDefault.default(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(_exponentJsDefault.default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
};

},{"./exponent.js":"6DGHE","./formatGroup.js":"cmI8S","./formatNumerals.js":"eiMiB","./formatSpecifier.js":"55yO4","./formatTrim.js":"4KDv5","./formatTypes.js":"8CE7u","./formatPrefixAuto.js":"4a8Al","./identity.js":"dcSc8","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6DGHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x) {
    return x = _formatDecimalJs.formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eFLdP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
parcelHelpers.export(exports, "formatDecimalParts", ()=>formatDecimalParts
);
exports.default = function(x) {
    return Math.abs(x = Math.round(x)) >= 1000000000000000000000 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
};
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cmI8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eiMiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"55yO4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormatSpecifier", ()=>FormatSpecifier
);
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
exports.default = formatSpecifier;
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4KDv5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8CE7u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
var _formatDecimalJsDefault = parcelHelpers.interopDefault(_formatDecimalJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _formatPrefixAutoJsDefault = parcelHelpers.interopDefault(_formatPrefixAutoJs);
var _formatRoundedJs = require("./formatRounded.js");
var _formatRoundedJsDefault = parcelHelpers.interopDefault(_formatRoundedJs);
exports.default = {
    "%": (x, p)=>(x * 100).toFixed(p)
    ,
    "b": (x)=>Math.round(x).toString(2)
    ,
    "c": (x)=>x + ""
    ,
    "d": _formatDecimalJsDefault.default,
    "e": (x, p)=>x.toExponential(p)
    ,
    "f": (x, p)=>x.toFixed(p)
    ,
    "g": (x, p)=>x.toPrecision(p)
    ,
    "o": (x)=>Math.round(x).toString(8)
    ,
    "p": (x, p)=>_formatRoundedJsDefault.default(x * 100, p)
    ,
    "r": _formatRoundedJsDefault.default,
    "s": _formatPrefixAutoJsDefault.default,
    "X": (x)=>Math.round(x).toString(16).toUpperCase()
    ,
    "x": (x)=>Math.round(x).toString(16)
};

},{"./formatDecimal.js":"eFLdP","./formatPrefixAuto.js":"4a8Al","./formatRounded.js":"lzDqS","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4a8Al":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefixExponent", ()=>prefixExponent
);
var _formatDecimalJs = require("./formatDecimal.js");
var prefixExponent;
exports.default = function(x, p) {
    var d = _formatDecimalJs.formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + _formatDecimalJs.formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lzDqS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x, p) {
    var d = _formatDecimalJs.formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

},{"./formatDecimal.js":"eFLdP","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dcSc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e3JIq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step) {
    return Math.max(0, -_exponentJsDefault.default(Math.abs(step)));
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"7GxX5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_exponentJsDefault.default(value) / 3))) * 3 - _exponentJsDefault.default(Math.abs(step)));
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1ZF1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, _exponentJsDefault.default(max) - _exponentJsDefault.default(step)) + 1;
};

},{"./exponent.js":"6DGHE","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8gycm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loggish", ()=>loggish
);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x)
    ;
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base
    );
}
function reflect(f) {
    return (x, k)=>-f(-x, k)
    ;
}
function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else transform(transformLog, transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i)for(k = 1; k < base; ++k){
                t = i < 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i <= j; ++i)for(k = base - 1; k >= 1; --k){
                t = i > 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            if (z.length * 2 < n) z = _d3Array.ticks(u, v, n);
        } else z = _d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = _d3Format.formatSpecifier(specifier)).precision == null) specifier.trim = true;
            specifier = _d3Format.format(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain(_niceJsDefault.default(domain(), {
            floor: (x)=>pows(Math.floor(logs(x)))
            ,
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function log() {
    const scale = loggish(_continuousJs.transformer()).domain([
        1,
        10
    ]);
    scale.copy = ()=>_continuousJs.copy(scale, log()).base(scale.base())
    ;
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = log;

},{"d3-array":"dclxS","d3-format":"hzInr","./nice.js":"jIY6Z","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jIY6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
exports.default = nice;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"etHgK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "symlogish", ()=>symlogish
);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return _linearJs.linearish(scale);
}
function symlog() {
    var scale = symlogish(_continuousJs.transformer());
    scale.copy = function() {
        return _continuousJs.copy(scale, symlog()).constant(scale.constant());
    };
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = symlog;

},{"./linear.js":"iCJmQ","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kopvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "powish", ()=>powish
);
parcelHelpers.export(exports, "sqrt", ()=>sqrt
);
var _linearJs = require("./linear.js");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function powish(transform) {
    var scale = transform(_continuousJs.identity, _continuousJs.identity), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform(_continuousJs.identity, _continuousJs.identity) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return _linearJs.linearish(scale);
}
function pow() {
    var scale = powish(_continuousJs.transformer());
    scale.copy = function() {
        return _continuousJs.copy(scale, pow()).exponent(scale.exponent());
    };
    _initJs.initRange.apply(scale, arguments);
    return scale;
}
exports.default = pow;
function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
}

},{"./linear.js":"iCJmQ","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hOBjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function square(x) {
    return Math.sign(x) * x * x;
}
function unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function radial() {
    var squared = _continuousJsDefault.default(), range = [
        0,
        1
    ], round = false, unknown;
    function scale(x) {
        var y = unsquare(squared(x));
        return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function(y) {
        return squared.invert(square(y));
    };
    scale.domain = function(_) {
        return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
        return arguments.length ? (squared.range((range = Array.from(_, _numberJsDefault.default)).map(square)), scale) : range.slice();
    };
    scale.rangeRound = function(_) {
        return scale.range(_).round(true);
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function(_) {
        return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    _initJs.initRange.apply(scale, arguments);
    return _linearJs.linearish(scale);
}
exports.default = radial;

},{"./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./number.js":"1cJLd","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iT8CK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
function quantile() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = _d3Array.quantileSorted(domain, i / n);
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : range[_d3Array.bisect(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort(_d3Array.ascending);
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return quantile().domain(domain).range(range).unknown(unknown);
    };
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = quantile;

},{"d3-array":"dclxS","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ec2AM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _linearJs = require("./linear.js");
var _initJs = require("./init.js");
function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown;
    function scale(x) {
        return x != null && x <= x ? range[_d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
        return domain.slice();
    };
    scale.copy = function() {
        return quantize().domain([
            x0,
            x1
        ]).range(range).unknown(unknown);
    };
    return _initJs.initRange.apply(_linearJs.linearish(scale), arguments);
}
exports.default = quantize;

},{"d3-array":"dclxS","./linear.js":"iCJmQ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8jaMK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
function threshold() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x != null && x <= x ? range[_d3Array.bisect(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return threshold().domain(domain).range(range).unknown(unknown);
    };
    return _initJs.initRange.apply(scale, arguments);
}
exports.default = threshold;

},{"d3-array":"dclxS","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"7jFE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calendar", ()=>calendar
);
var _d3Time = require("d3-time");
var _d3TimeFormat = require("d3-time-format");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
function date(t) {
    return new Date(t);
}
function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = _continuousJsDefault.default(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain(_niceJsDefault.default(d, interval)) : scale;
    };
    scale.copy = function() {
        return _continuousJs.copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function time() {
    return _initJs.initRange.apply(calendar(_d3Time.timeTicks, _d3Time.timeTickInterval, _d3Time.timeYear, _d3Time.timeMonth, _d3Time.timeWeek, _d3Time.timeDay, _d3Time.timeHour, _d3Time.timeMinute, _d3Time.timeSecond, _d3TimeFormat.timeFormat).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}
exports.default = time;

},{"d3-time":"lTNsW","d3-time-format":"ioDBG","./continuous.js":"btLMJ","./init.js":"76hF6","./nice.js":"jIY6Z","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jZmye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Time = require("d3-time");
var _d3TimeFormat = require("d3-time-format");
var _timeJs = require("./time.js");
var _initJs = require("./init.js");
function utcTime() {
    return _initJs.initRange.apply(_timeJs.calendar(_d3Time.utcTicks, _d3Time.utcTickInterval, _d3Time.utcYear, _d3Time.utcMonth, _d3Time.utcWeek, _d3Time.utcDay, _d3Time.utcHour, _d3Time.utcMinute, _d3Time.utcSecond, _d3TimeFormat.utcFormat).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}
exports.default = utcTime;

},{"d3-time":"lTNsW","d3-time-format":"ioDBG","./time.js":"7jFE4","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"76Oio":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copy", ()=>copy
);
parcelHelpers.export(exports, "sequentialLog", ()=>sequentialLog
);
parcelHelpers.export(exports, "sequentialSymlog", ()=>sequentialSymlog
);
parcelHelpers.export(exports, "sequentialPow", ()=>sequentialPow
);
parcelHelpers.export(exports, "sequentialSqrt", ()=>sequentialSqrt
);
var _d3Interpolate = require("d3-interpolate");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _logJs = require("./log.js");
var _symlogJs = require("./symlog.js");
var _powJs = require("./pow.js");
function transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = _continuousJs.identity, clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range(_d3Interpolate.interpolate);
    scale.rangeRound = range(_d3Interpolate.interpolateRound);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
    var scale = _linearJs.linearish(transformer()(_continuousJs.identity));
    scale.copy = function() {
        return copy(scale, sequential());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = sequential;
function sequentialLog() {
    var scale = _logJs.loggish(transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return copy(scale, sequentialLog()).base(scale.base());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
    var scale = _symlogJs.symlogish(transformer());
    scale.copy = function() {
        return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
    var scale = _powJs.powish(transformer());
    scale.copy = function() {
        return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
}

},{"d3-interpolate":"e7XwA","./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./log.js":"8gycm","./symlog.js":"etHgK","./pow.js":"kopvN","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dMZ3i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
function sequentialQuantile() {
    var domain = [], interpolator = _continuousJs.identity;
    function scale(x) {
        if (x != null && !isNaN(x = +x)) return interpolator((_d3Array.bisect(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort(_d3Array.ascending);
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
        return domain.map((d, i)=>interpolator(i / (domain.length - 1))
        );
    };
    scale.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (_, i)=>_d3Array.quantile(domain, i / n)
        );
    };
    scale.copy = function() {
        return sequentialQuantile(interpolator).domain(domain);
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = sequentialQuantile;

},{"d3-array":"dclxS","./continuous.js":"btLMJ","./init.js":"76hF6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3lkJJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "divergingLog", ()=>divergingLog
);
parcelHelpers.export(exports, "divergingSymlog", ()=>divergingSymlog
);
parcelHelpers.export(exports, "divergingPow", ()=>divergingPow
);
parcelHelpers.export(exports, "divergingSqrt", ()=>divergingSqrt
);
var _d3Interpolate = require("d3-interpolate");
var _continuousJs = require("./continuous.js");
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _logJs = require("./log.js");
var _sequentialJs = require("./sequential.js");
var _symlogJs = require("./symlog.js");
var _powJs = require("./pow.js");
function transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t0, t1, t2, k10, k21, interpolator = _continuousJs.identity, transform, clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [
            x0,
            x1,
            x2
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1, r2;
            return arguments.length ? ([r0, r1, r2] = _, interpolator = _d3Interpolate.piecewise(interpolate, [
                r0,
                r1,
                r2
            ]), scale) : [
                interpolator(0),
                interpolator(0.5),
                interpolator(1)
            ];
        };
    }
    scale.range = range(_d3Interpolate.interpolate);
    scale.rangeRound = range(_d3Interpolate.interpolateRound);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
        return scale;
    };
}
function diverging() {
    var scale = _linearJs.linearish(transformer()(_continuousJs.identity));
    scale.copy = function() {
        return _sequentialJs.copy(scale, diverging());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
exports.default = diverging;
function divergingLog() {
    var scale = _logJs.loggish(transformer()).domain([
        0.1,
        1,
        10
    ]);
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingLog()).base(scale.base());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
    var scale = _symlogJs.symlogish(transformer());
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingSymlog()).constant(scale.constant());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingPow() {
    var scale = _powJs.powish(transformer());
    scale.copy = function() {
        return _sequentialJs.copy(scale, divergingPow()).exponent(scale.exponent());
    };
    return _initJs.initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
}

},{"d3-interpolate":"e7XwA","./continuous.js":"btLMJ","./init.js":"76hF6","./linear.js":"iCJmQ","./log.js":"8gycm","./sequential.js":"76Oio","./symlog.js":"etHgK","./pow.js":"kopvN","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5HM4e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forceCenter", ()=>_centerJsDefault.default
);
parcelHelpers.export(exports, "forceCollide", ()=>_collideJsDefault.default
);
parcelHelpers.export(exports, "forceLink", ()=>_linkJsDefault.default
);
parcelHelpers.export(exports, "forceManyBody", ()=>_manyBodyJsDefault.default
);
parcelHelpers.export(exports, "forceRadial", ()=>_radialJsDefault.default
);
parcelHelpers.export(exports, "forceSimulation", ()=>_simulationJsDefault.default
);
parcelHelpers.export(exports, "forceX", ()=>_xJsDefault.default
);
parcelHelpers.export(exports, "forceY", ()=>_yJsDefault.default
);
var _centerJs = require("./center.js");
var _centerJsDefault = parcelHelpers.interopDefault(_centerJs);
var _collideJs = require("./collide.js");
var _collideJsDefault = parcelHelpers.interopDefault(_collideJs);
var _linkJs = require("./link.js");
var _linkJsDefault = parcelHelpers.interopDefault(_linkJs);
var _manyBodyJs = require("./manyBody.js");
var _manyBodyJsDefault = parcelHelpers.interopDefault(_manyBodyJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _simulationJs = require("./simulation.js");
var _simulationJsDefault = parcelHelpers.interopDefault(_simulationJs);
var _xJs = require("./x.js");
var _xJsDefault = parcelHelpers.interopDefault(_xJs);
var _yJs = require("./y.js");
var _yJsDefault = parcelHelpers.interopDefault(_yJs);

},{"./center.js":"8COnD","./collide.js":"8SXlV","./link.js":"fubRB","./manyBody.js":"kQ23N","./radial.js":"f9FCw","./simulation.js":"eTFSL","./x.js":"cvqxl","./y.js":"cmEL4","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8COnD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x, y) {
    var nodes, strength = 1;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
        var i, n = nodes.length, node, sx = 0, sy = 0;
        for(i = 0; i < n; ++i)node = nodes[i], sx += node.x, sy += node.y;
        for(sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i)node = nodes[i], node.x -= sx, node.y -= sy;
    }
    force.initialize = function(_) {
        nodes = _;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    return force;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8SXlV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Quadtree = require("d3-quadtree");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
function x(d) {
    return d.x + d.vx;
}
function y(d) {
    return d.y + d.vy;
}
exports.default = function(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = _constantJsDefault.default(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = _d3Quadtree.quadtree(nodes, x, y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                    if (l < r * r) {
                        if (x === 0) x = _jiggleJsDefault.default(random), l += x * x;
                        if (y === 0) y = _jiggleJsDefault.default(random), l += y * y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (y *= l) * r;
                        data.vx -= x * (r = 1 - r);
                        data.vy -= y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i)if (quad[i] && quad[i].r > quad.r) quad.r = quad[i].r;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : radius;
    };
    return force;
};

},{"d3-quadtree":"1oyVd","./constant.js":"fKGMF","./jiggle.js":"iluGX","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1oyVd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quadtree", ()=>_quadtreeJsDefault.default
);
var _quadtreeJs = require("./quadtree.js");
var _quadtreeJsDefault = parcelHelpers.interopDefault(_quadtreeJs);

},{"./quadtree.js":"aqMV5","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aqMV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _coverJs = require("./cover.js");
var _coverJsDefault = parcelHelpers.interopDefault(_coverJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _rootJs = require("./root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _visitJs = require("./visit.js");
var _visitJsDefault = parcelHelpers.interopDefault(_visitJs);
var _visitAfterJs = require("./visitAfter.js");
var _visitAfterJsDefault = parcelHelpers.interopDefault(_visitAfterJs);
var _xJs = require("./x.js");
var _xJsDefault = parcelHelpers.interopDefault(_xJs);
var _yJs = require("./y.js");
var _yJsDefault = parcelHelpers.interopDefault(_yJs);
function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? _xJs.defaultX : x, y == null ? _yJs.defaultY : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
exports.default = quadtree;
function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
}
function leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(4)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 4; ++i)if (child = node.source[i]) {
            if (child.length) nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
            });
            else node.target[i] = leaf_copy(child);
        }
    }
    return copy;
};
treeProto.add = _addJsDefault.default;
treeProto.addAll = _addJs.addAll;
treeProto.cover = _coverJsDefault.default;
treeProto.data = _dataJsDefault.default;
treeProto.extent = _extentJsDefault.default;
treeProto.find = _findJsDefault.default;
treeProto.remove = _removeJsDefault.default;
treeProto.removeAll = _removeJs.removeAll;
treeProto.root = _rootJsDefault.default;
treeProto.size = _sizeJsDefault.default;
treeProto.visit = _visitJsDefault.default;
treeProto.visitAfter = _visitAfterJsDefault.default;
treeProto.x = _xJsDefault.default;
treeProto.y = _yJsDefault.default;

},{"./add.js":"63uWd","./cover.js":"e4eHZ","./data.js":"eZHi2","./extent.js":"6QWx2","./find.js":"8oAlt","./remove.js":"20jcn","./root.js":"gXhtT","./size.js":"5miFk","./visit.js":"feDAT","./visitAfter.js":"6BIou","./x.js":"02xGA","./y.js":"cLUJb","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"63uWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAll", ()=>addAll
);
exports.default = function(d) {
    const x = +this._x.call(null, d), y = +this._y.call(null, d);
    return add(this.cover(x, y), x, y, d);
};
function add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
    }while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm))
    return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for(i = 0; i < n; ++i){
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for(i = 0; i < n; ++i)add(this, xz[i], yz[i], data[i]);
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e4eHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
    } else {
        var z = x1 - x0 || 1, node = this._root, parent, i;
        while(x0 > x || x >= x1 || y0 > y || y >= y1){
            i = (y < y0) << 1 | x < x0;
            parent = new Array(4), parent[i] = node, node = parent, z *= 2;
            switch(i){
                case 0:
                    x1 = x0 + z, y1 = y0 + z;
                    break;
                case 1:
                    x0 = x1 - z, y1 = y0 + z;
                    break;
                case 2:
                    x1 = x0 + z, y0 = y1 - z;
                    break;
                case 3:
                    x0 = x1 - z, y0 = y1 - z;
                    break;
            }
        }
        if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eZHi2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var data = [];
    this.visit(function(node) {
        if (!node.length) do data.push(node.data);
        while (node = node.next)
    });
    return data;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6QWx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [
        [
            this._x0,
            this._y0
        ],
        [
            this._x1,
            this._y1
        ]
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8oAlt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new _quadJsDefault.default(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
    }
    while(q = quads.pop()){
        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
        // Bisect the current quadrant.
        if (node.length) {
            var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
            quads.push(new _quadJsDefault.default(node[3], xm, ym, x2, y2), new _quadJsDefault.default(node[2], x1, ym, xm, y2), new _quadJsDefault.default(node[1], xm, y1, x2, ym), new _quadJsDefault.default(node[0], x1, y1, xm, ym));
            // Visit the closest quadrant first.
            if (i = (y >= ym) << 1 | x >= xm) {
                q = quads[quads.length - 1];
                quads[quads.length - 1] = quads[quads.length - 1 - i];
                quads[quads.length - 1 - i] = q;
            }
        } else {
            var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
            if (d2 < radius) {
                var d = Math.sqrt(radius = d2);
                x0 = x - d, y0 = y - d;
                x3 = x + d, y3 = y + d;
                data = node.data;
            }
        }
    }
    return data;
};

},{"./quad.js":"F8aMC","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"F8aMC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"20jcn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeAll", ()=>removeAll
);
exports.default = function(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while(true){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
    }
    // Find the point to remove.
    while(node.data !== d)if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return next ? previous.next = next : delete previous.next, this;
    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
    }
    return this;
};
function removeAll(data) {
    for(var i = 0, n = data.length; i < n; ++i)this.remove(data[i]);
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gXhtT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return this._root;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5miFk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var size = 0;
    this.visit(function(node) {
        if (!node.length) do ++size;
        while (node = node.next)
    });
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"feDAT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new _quadJsDefault.default(node, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop())if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new _quadJsDefault.default(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new _quadJsDefault.default(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new _quadJsDefault.default(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new _quadJsDefault.default(child, x0, y0, xm, ym));
    }
    return this;
};

},{"./quad.js":"F8aMC","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6BIou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new _quadJsDefault.default(this._root, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        var node = q.node;
        if (node.length) {
            var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new _quadJsDefault.default(child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new _quadJsDefault.default(child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new _quadJsDefault.default(child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new _quadJsDefault.default(child, xm, ym, x1, y1));
        }
        next.push(q);
    }
    while(q = next.pop())callback(q.node, q.x0, q.y0, q.x1, q.y1);
    return this;
};

},{"./quad.js":"F8aMC","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"02xGA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultX", ()=>defaultX
);
function defaultX(d) {
    return d[0];
}
exports.default = function(_) {
    return arguments.length ? (this._x = _, this) : this._x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cLUJb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultY", ()=>defaultY
);
function defaultY(d) {
    return d[1];
}
exports.default = function(_) {
    return arguments.length ? (this._y = _, this) : this._y;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fKGMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iluGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(random) {
    return (random() - 0.5) * 0.000001;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fubRB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
function index(d) {
    return d.index;
}
function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
}
exports.default = function(links) {
    var id = index, strength = defaultStrength, strengths, distance = _constantJsDefault.default(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k)for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || _jiggleJsDefault.default(random);
            y = target.y + target.vy - source.y - source.vy || _jiggleJsDefault.default(random);
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i)=>[
                id(d, i, nodes),
                d
            ]
        )), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i)link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)strengths[i] = +strength(links[i], i, links);
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)distances[i] = +distance(links[i], i, links);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initializeDistance(), force) : distance;
    };
    return force;
};

},{"./constant.js":"fKGMF","./jiggle.js":"iluGX","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"kQ23N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Quadtree = require("d3-quadtree");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
var _simulationJs = require("./simulation.js");
exports.default = function() {
    var nodes, node, random, alpha, strength = _constantJsDefault.default(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
        var i, n = nodes.length, tree = _d3Quadtree.quadtree(nodes, _simulationJs.x, _simulationJs.y).visitAfter(accumulate);
        for(alpha = _, i = 0; i < n; ++i)node = nodes[i], tree.visit(apply);
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
    function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;
        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
            for(x = y = i = 0; i < 4; ++i)if ((q = quad[i]) && (c = Math.abs(q.value))) strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            quad.x = x / weight;
            quad.y = y / weight;
        } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index];
            while (q = q.next)
        }
        quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
        if (!quad.value) return true;
        var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
            if (l < distanceMax2) {
                if (x === 0) x = _jiggleJsDefault.default(random), l += x * x;
                if (y === 0) y = _jiggleJsDefault.default(random), l += y * y;
                if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
                node.vx += x * quad.value * alpha / l;
                node.vy += y * quad.value * alpha / l;
            }
            return true;
        } else if (quad.length || l >= distanceMax2) return;
        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
            if (x === 0) x = _jiggleJsDefault.default(random), l += x * x;
            if (y === 0) y = _jiggleJsDefault.default(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }
        do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x * w;
            node.vy += y * w;
        }
        while (quad = quad.next)
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
};

},{"d3-quadtree":"1oyVd","./constant.js":"fKGMF","./jiggle.js":"iluGX","./simulation.js":"eTFSL","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eTFSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "x", ()=>x
);
parcelHelpers.export(exports, "y", ()=>y
);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var _lcgJs = require("./lcg.js");
var _lcgJsDefault = parcelHelpers.interopDefault(_lcgJs);
function x(d) {
    return d.x;
}
function y(d) {
    return d.y;
}
var initialRadius = 10, initialAngle = Math.PI * (3 - Math.sqrt(5));
exports.default = function(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = _d3Timer.timer(step), event = _d3Dispatch.dispatch("tick", "end"), random = _lcgJsDefault.default();
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.forEach(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (node.fy == null) node.y += node.vy *= velocityDecay;
                else node.y = node.fy, node.vy = 0;
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (isNaN(node.x) || isNaN(node.y)) {
                var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
                node.x = radius * Math.cos(angle);
                node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) node.vx = node.vy = 0;
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function() {
            return stepper.restart(step), simulation;
        },
        stop: function() {
            return stepper.stop(), simulation;
        },
        nodes: function(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        randomSource: function(_) {
            return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },
        force: function(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function(x, y, radius) {
            var i = 0, n = nodes.length, dx, dy, d2, node, closest;
            if (radius == null) radius = Infinity;
            else radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - node.y;
                d2 = dx * dx + dy * dy;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
};

},{"d3-dispatch":"9d2te","d3-timer":"82ygz","./lcg.js":"hkB49","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"9d2te":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>_dispatchJsDefault.default
);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"fEgH3","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fEgH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{
    }
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {
    }, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {
        }, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"82ygz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>_timerJs.now
);
parcelHelpers.export(exports, "timer", ()=>_timerJs.timer
);
parcelHelpers.export(exports, "timerFlush", ()=>_timerJs.timerFlush
);
parcelHelpers.export(exports, "timeout", ()=>_timeoutJsDefault.default
);
parcelHelpers.export(exports, "interval", ()=>_intervalJsDefault.default
);
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"e5Yqg","./timeout.js":"iPlus","./interval.js":"fIl4w","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e5Yqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "Timer", ()=>Timer
);
parcelHelpers.export(exports, "timer", ()=>timer
);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush
);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"iPlus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback, delay, time) {
    var t = new _timerJs.Timer;
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
};

},{"./timer.js":"e5Yqg","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fIl4w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback, delay, time) {
    var t = new _timerJs.Timer, total = delay;
    if (delay == null) return t.restart(callback, delay, time), t;
    t._restart = t.restart;
    t.restart = function(callback, delay, time) {
        delay = +delay, time = time == null ? _timerJs.now() : +time;
        t._restart(function tick(elapsed) {
            elapsed += total;
            t._restart(tick, total += delay, time);
            callback(elapsed);
        }, delay, time);
    };
    t.restart(callback, delay, time);
    return t;
};

},{"./timer.js":"e5Yqg","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hkB49":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32
exports.default = function() {
    let s = 1;
    return ()=>(s = (a * s + c) % m) / m
    ;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"f9FCw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
exports.default = function(radius, x, y) {
    var nodes, strength = _constantJsDefault.default(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = _constantJsDefault.default(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force(alpha) {
        for(var i = 0, n = nodes.length; i < n; ++i){
            var node = nodes[i], dx = node.x - x || 0.000001, dy = node.y - y || 0.000001, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
            node.vx += dx * k;
            node.vy += dy * k;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        radiuses = new Array(n);
        for(i = 0; i < n; ++i){
            radiuses[i] = +radius(nodes[i], i, nodes);
            strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _, initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : radius;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    return force;
};

},{"./constant.js":"fKGMF","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cvqxl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
exports.default = function(x) {
    var strength = _constantJsDefault.default(0.1), nodes, strengths, xz;
    if (typeof x !== "function") x = _constantJsDefault.default(x == null ? 0 : +x);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : strength;
    };
    force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : x;
    };
    return force;
};

},{"./constant.js":"fKGMF","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cmEL4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
exports.default = function(y) {
    var strength = _constantJsDefault.default(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = _constantJsDefault.default(y == null ? 0 : +y);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : _constantJsDefault.default(+_), initialize(), force) : y;
    };
    return force;
};

},{"./constant.js":"fKGMF","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"3HH3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "axisTop", ()=>_axisJs.axisTop
);
parcelHelpers.export(exports, "axisRight", ()=>_axisJs.axisRight
);
parcelHelpers.export(exports, "axisBottom", ()=>_axisJs.axisBottom
);
parcelHelpers.export(exports, "axisLeft", ()=>_axisJs.axisLeft
);
var _axisJs = require("./axis.js");

},{"./axis.js":"5vLMo","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"5vLMo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "axisTop", ()=>axisTop
);
parcelHelpers.export(exports, "axisRight", ()=>axisRight
);
parcelHelpers.export(exports, "axisBottom", ()=>axisBottom
);
parcelHelpers.export(exports, "axisLeft", ()=>axisLeft
);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 0.000001;
function translateX(x) {
    return "translate(" + x + ",0)";
}
function translateY(y) {
    return "translate(0," + y + ")";
}
function number(scale) {
    return (d)=>+scale(d)
    ;
}
function center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return (d)=>+scale(d) + offset
    ;
}
function entering() {
    return !this.__axis;
}
function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
    function axis(context) {
        var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identityJsDefault.default : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([
            null
        ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
                return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
            });
            tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
            });
        }
        tickExit.remove();
        path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
        tick.attr("opacity", 1).attr("transform", function(d) {
            return transform(position(d) + offset);
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
        selection.each(function() {
            this.__axis = position;
        });
    }
    axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function() {
        return tickArguments = Array.from(arguments), axis;
    };
    axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function(_) {
        return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
}
function axisTop(scale) {
    return axis(top, scale);
}
function axisRight(scale) {
    return axis(right, scale);
}
function axisBottom(scale) {
    return axis(bottom, scale);
}
function axisLeft(scale) {
    return axis(left, scale);
}

},{"./identity.js":"eB8bj","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eB8bj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"loWSC":[function() {},{}],"elZFc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>_linearJs.linear
);
parcelHelpers.export(exports, "easeQuad", ()=>_quadJs.quadInOut
);
parcelHelpers.export(exports, "easeQuadIn", ()=>_quadJs.quadIn
);
parcelHelpers.export(exports, "easeQuadOut", ()=>_quadJs.quadOut
);
parcelHelpers.export(exports, "easeQuadInOut", ()=>_quadJs.quadInOut
);
parcelHelpers.export(exports, "easeCubic", ()=>_cubicJs.cubicInOut
);
parcelHelpers.export(exports, "easeCubicIn", ()=>_cubicJs.cubicIn
);
parcelHelpers.export(exports, "easeCubicOut", ()=>_cubicJs.cubicOut
);
parcelHelpers.export(exports, "easeCubicInOut", ()=>_cubicJs.cubicInOut
);
parcelHelpers.export(exports, "easePoly", ()=>_polyJs.polyInOut
);
parcelHelpers.export(exports, "easePolyIn", ()=>_polyJs.polyIn
);
parcelHelpers.export(exports, "easePolyOut", ()=>_polyJs.polyOut
);
parcelHelpers.export(exports, "easePolyInOut", ()=>_polyJs.polyInOut
);
parcelHelpers.export(exports, "easeSin", ()=>_sinJs.sinInOut
);
parcelHelpers.export(exports, "easeSinIn", ()=>_sinJs.sinIn
);
parcelHelpers.export(exports, "easeSinOut", ()=>_sinJs.sinOut
);
parcelHelpers.export(exports, "easeSinInOut", ()=>_sinJs.sinInOut
);
parcelHelpers.export(exports, "easeExp", ()=>_expJs.expInOut
);
parcelHelpers.export(exports, "easeExpIn", ()=>_expJs.expIn
);
parcelHelpers.export(exports, "easeExpOut", ()=>_expJs.expOut
);
parcelHelpers.export(exports, "easeExpInOut", ()=>_expJs.expInOut
);
parcelHelpers.export(exports, "easeCircle", ()=>_circleJs.circleInOut
);
parcelHelpers.export(exports, "easeCircleIn", ()=>_circleJs.circleIn
);
parcelHelpers.export(exports, "easeCircleOut", ()=>_circleJs.circleOut
);
parcelHelpers.export(exports, "easeCircleInOut", ()=>_circleJs.circleInOut
);
parcelHelpers.export(exports, "easeBounce", ()=>_bounceJs.bounceOut
);
parcelHelpers.export(exports, "easeBounceIn", ()=>_bounceJs.bounceIn
);
parcelHelpers.export(exports, "easeBounceOut", ()=>_bounceJs.bounceOut
);
parcelHelpers.export(exports, "easeBounceInOut", ()=>_bounceJs.bounceInOut
);
parcelHelpers.export(exports, "easeBack", ()=>_backJs.backInOut
);
parcelHelpers.export(exports, "easeBackIn", ()=>_backJs.backIn
);
parcelHelpers.export(exports, "easeBackOut", ()=>_backJs.backOut
);
parcelHelpers.export(exports, "easeBackInOut", ()=>_backJs.backInOut
);
parcelHelpers.export(exports, "easeElastic", ()=>_elasticJs.elasticOut
);
parcelHelpers.export(exports, "easeElasticIn", ()=>_elasticJs.elasticIn
);
parcelHelpers.export(exports, "easeElasticOut", ()=>_elasticJs.elasticOut
);
parcelHelpers.export(exports, "easeElasticInOut", ()=>_elasticJs.elasticInOut
);
var _linearJs = require("./linear.js");
var _quadJs = require("./quad.js");
var _cubicJs = require("./cubic.js");
var _polyJs = require("./poly.js");
var _sinJs = require("./sin.js");
var _expJs = require("./exp.js");
var _circleJs = require("./circle.js");
var _bounceJs = require("./bounce.js");
var _backJs = require("./back.js");
var _elasticJs = require("./elastic.js");

},{"./linear.js":"gHm7e","./quad.js":"hYhoX","./cubic.js":"aZIHk","./poly.js":"hNV3X","./sin.js":"zeJJc","./exp.js":"2ovMf","./circle.js":"acQDc","./bounce.js":"21QKc","./back.js":"enxiL","./elastic.js":"eIiW6","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gHm7e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linear", ()=>linear
);
const linear = (t)=>+t
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hYhoX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quadIn", ()=>quadIn
);
parcelHelpers.export(exports, "quadOut", ()=>quadOut
);
parcelHelpers.export(exports, "quadInOut", ()=>quadInOut
);
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return t * (2 - t);
}
function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"aZIHk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn
);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut
);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut
);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hNV3X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyIn", ()=>polyIn
);
parcelHelpers.export(exports, "polyOut", ()=>polyOut
);
parcelHelpers.export(exports, "polyInOut", ()=>polyInOut
);
var exponent = 3;
var polyIn = function custom(e) {
    e = +e;
    function polyIn(t) {
        return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
}(exponent);
var polyOut = function custom(e) {
    e = +e;
    function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
}(exponent);
var polyInOut = function custom(e) {
    e = +e;
    function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
}(exponent);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"zeJJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sinIn", ()=>sinIn
);
parcelHelpers.export(exports, "sinOut", ()=>sinOut
);
parcelHelpers.export(exports, "sinInOut", ()=>sinInOut
);
var pi = Math.PI, halfPi = pi / 2;
function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
    return Math.sin(t * halfPi);
}
function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2ovMf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expIn", ()=>expIn
);
parcelHelpers.export(exports, "expOut", ()=>expOut
);
parcelHelpers.export(exports, "expInOut", ()=>expInOut
);
var _mathJs = require("./math.js");
function expIn(t) {
    return _mathJs.tpmt(1 - +t);
}
function expOut(t) {
    return 1 - _mathJs.tpmt(t);
}
function expInOut(t) {
    return ((t *= 2) <= 1 ? _mathJs.tpmt(1 - t) : 2 - _mathJs.tpmt(t - 1)) / 2;
}

},{"./math.js":"7Y1a5","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"7Y1a5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// tpmt is two power minus ten times t scaled to [0,1]
parcelHelpers.export(exports, "tpmt", ()=>tpmt
);
function tpmt(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"acQDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circleIn", ()=>circleIn
);
parcelHelpers.export(exports, "circleOut", ()=>circleOut
);
parcelHelpers.export(exports, "circleInOut", ()=>circleInOut
);
function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
    return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"21QKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounceIn", ()=>bounceIn
);
parcelHelpers.export(exports, "bounceOut", ()=>bounceOut
);
parcelHelpers.export(exports, "bounceInOut", ()=>bounceInOut
);
var b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = 0.75, b5 = 9 / 11, b6 = 10 / 11, b7 = 0.9375, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1;
function bounceIn(t) {
    return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}
function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"enxiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn
);
parcelHelpers.export(exports, "backOut", ()=>backOut
);
parcelHelpers.export(exports, "backInOut", ()=>backInOut
);
var overshoot = 1.70158;
var backIn = function custom(s) {
    s = +s;
    function backIn(t) {
        return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
}(overshoot);
var backOut = function custom(s) {
    s = +s;
    function backOut(t) {
        return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
}(overshoot);
var backInOut = function custom(s) {
    s = +s;
    function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
}(overshoot);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eIiW6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elasticIn", ()=>elasticIn
);
parcelHelpers.export(exports, "elasticOut", ()=>elasticOut
);
parcelHelpers.export(exports, "elasticInOut", ()=>elasticInOut
);
var _mathJs = require("./math.js");
var tau = 2 * Math.PI, amplitude = 1, period = 0.3;
var elasticIn = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticIn(t) {
        return a * _mathJs.tpmt(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticIn.period = function(p) {
        return custom(a, p);
    };
    return elasticIn;
}(amplitude, period);
var elasticOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticOut(t) {
        return 1 - a * _mathJs.tpmt(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticOut.period = function(p) {
        return custom(a, p);
    };
    return elasticOut;
}(amplitude, period);
var elasticInOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * _mathJs.tpmt(-t) * Math.sin((s - t) / p) : 2 - a * _mathJs.tpmt(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticInOut.period = function(p) {
        return custom(a, p);
    };
    return elasticInOut;
}(amplitude, period);

},{"./math.js":"7Y1a5","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"cRYyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "active", ()=>_activeJsDefault.default
);
parcelHelpers.export(exports, "interrupt", ()=>_interruptJsDefault.default
);
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"gNdN5","./transition/index.js":"18i1e","./active.js":"e5Mev","./interrupt.js":"d4VjA","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"gNdN5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
_d3Selection.selection.prototype.interrupt = _interruptJsDefault.default;
_d3Selection.selection.prototype.transition = _transitionJsDefault.default;

},{"d3-selection":"hgWtk","./interrupt.js":"hoP2s","./transition.js":"7r67v","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hoP2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
exports.default = function(name) {
    return this.each(function() {
        _interruptJsDefault.default(this, name);
    });
};

},{"../interrupt.js":"d4VjA","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"d4VjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./transition/schedule.js");
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > _scheduleJs.STARTING && schedule.state < _scheduleJs.ENDING;
        schedule.state = _scheduleJs.ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
};

},{"./transition/schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dTpjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED
);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED
);
parcelHelpers.export(exports, "STARTING", ()=>STARTING
);
parcelHelpers.export(exports, "STARTED", ()=>STARTED
);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING
);
parcelHelpers.export(exports, "ENDING", ()=>ENDING
);
parcelHelpers.export(exports, "ENDED", ()=>ENDED
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "get", ()=>get
);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = _d3Dispatch.dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
exports.default = function(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {
    };
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
};
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = _d3Timer.timer(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return _d3Timer.timeout(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        _d3Timer.timeout(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

},{"d3-dispatch":"9d2te","d3-timer":"82ygz","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"7r67v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: _d3Ease.easeCubicInOut
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
exports.default = function(name) {
    var id, timing;
    if (name instanceof _indexJs.Transition) id = name._id, name = name._name;
    else id = _indexJs.newId(), (timing = defaultTiming).time = _d3Timer.now(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) _scheduleJsDefault.default(node, name, id, i, group, timing || inherit(node, id));
    }
    return new _indexJs.Transition(groups, this._parents, name, id);
};

},{"../transition/index.js":"18i1e","../transition/schedule.js":"dTpjR","d3-ease":"elZFc","d3-timer":"82ygz","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"18i1e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition
);
parcelHelpers.export(exports, "newId", ()=>newId
);
var _d3Selection = require("d3-selection");
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _attrTweenJs = require("./attrTween.js");
var _attrTweenJsDefault = parcelHelpers.interopDefault(_attrTweenJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _easeJs = require("./ease.js");
var _easeJsDefault = parcelHelpers.interopDefault(_easeJs);
var _easeVaryingJs = require("./easeVarying.js");
var _easeVaryingJsDefault = parcelHelpers.interopDefault(_easeVaryingJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _styleTweenJs = require("./styleTween.js");
var _styleTweenJsDefault = parcelHelpers.interopDefault(_styleTweenJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _textTweenJs = require("./textTween.js");
var _textTweenJsDefault = parcelHelpers.interopDefault(_textTweenJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
var _tweenJs = require("./tween.js");
var _tweenJsDefault = parcelHelpers.interopDefault(_tweenJs);
var _endJs = require("./end.js");
var _endJsDefault = parcelHelpers.interopDefault(_endJs);
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return _d3Selection.selection().transition(name);
}
exports.default = transition;
function newId() {
    return ++id;
}
var selection_prototype = _d3Selection.selection.prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: _selectJsDefault.default,
    selectAll: _selectAllJsDefault.default,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: _filterJsDefault.default,
    merge: _mergeJsDefault.default,
    selection: _selectionJsDefault.default,
    transition: _transitionJsDefault.default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: _onJsDefault.default,
    attr: _attrJsDefault.default,
    attrTween: _attrTweenJsDefault.default,
    style: _styleJsDefault.default,
    styleTween: _styleTweenJsDefault.default,
    text: _textJsDefault.default,
    textTween: _textTweenJsDefault.default,
    remove: _removeJsDefault.default,
    tween: _tweenJsDefault.default,
    delay: _delayJsDefault.default,
    duration: _durationJsDefault.default,
    ease: _easeJsDefault.default,
    easeVarying: _easeVaryingJsDefault.default,
    end: _endJsDefault.default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"hgWtk","./attr.js":"a88nM","./attrTween.js":"4rwV3","./delay.js":"zwknt","./duration.js":"fXFoC","./ease.js":"d7SOb","./easeVarying.js":"6ms9d","./filter.js":"koiOg","./merge.js":"66rfJ","./on.js":"2whzO","./remove.js":"jdITm","./select.js":"fZfF3","./selectAll.js":"lJAHb","./selection.js":"a9rwa","./style.js":"8dHzR","./styleTween.js":"8Kz8d","./text.js":"hhhZ2","./textTween.js":"ezXKs","./transition.js":"eIPZ1","./tween.js":"8L0br","./end.js":"bGIdi","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"a88nM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
exports.default = function(name, value) {
    var fullname = _d3Selection.namespace(name), i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolateJsDefault.default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, _tweenJs.tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

},{"d3-interpolate":"e7XwA","d3-selection":"hgWtk","./tween.js":"8L0br","./interpolate.js":"1aR0B","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8L0br":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue
);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = _scheduleJs.set(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = _scheduleJs.set(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
exports.default = function(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = _scheduleJs.get(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = _scheduleJs.set(this, id);
        (schedule.value || (schedule.value = {
        }))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return _scheduleJs.get(node, id).value[name];
    };
}

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"1aR0B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = function(a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = _d3Color.color(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

},{"d3-color":"ap3Jg","d3-interpolate":"e7XwA","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"4rwV3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = _d3Selection.namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

},{"d3-selection":"hgWtk","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"zwknt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        _scheduleJs.init(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        _scheduleJs.init(this, id).delay = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : _scheduleJs.get(this.node(), id).delay;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fXFoC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        _scheduleJs.set(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        _scheduleJs.set(this, id).duration = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : _scheduleJs.get(this.node(), id).duration;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"d7SOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        _scheduleJs.set(this, id).ease = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : _scheduleJs.get(this.node(), id).ease;
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"6ms9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        _scheduleJs.set(this, id).ease = v;
    };
}
exports.default = function(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"koiOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
exports.default = function(match) {
    if (typeof match !== "function") match = _d3Selection.matcher(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new _indexJs.Transition(subgroups, this._parents, this._name, this._id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"66rfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new _indexJs.Transition(merges, this._parents, this._name, this._id);
};

},{"./index.js":"18i1e","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"2whzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? _scheduleJs.init : _scheduleJs.set;
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
exports.default = function(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? _scheduleJs.get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"jdITm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
exports.default = function() {
    return this.on("end.remove", removeFunction(this._id));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"fZfF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = _d3Selection.selector(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            _scheduleJsDefault.default(subgroup[i], name, id, i, subgroup, _scheduleJs.get(node, id));
        }
    }
    return new _indexJs.Transition(subgroups, this._parents, name, id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"lJAHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = _d3Selection.selectorAll(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = _scheduleJs.get(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) _scheduleJsDefault.default(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new _indexJs.Transition(subgroups, parents, name, id);
};

},{"d3-selection":"hgWtk","./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"a9rwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var Selection = _d3Selection.selection.prototype.constructor;
exports.default = function() {
    return new Selection(this._groups, this._parents);
};

},{"d3-selection":"hgWtk","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8dHzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = _d3Selection.style(this, name), string1 = (this.style.removeProperty(name), _d3Selection.style(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = _d3Selection.style(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = _d3Selection.style(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), _d3Selection.style(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = _scheduleJs.set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
exports.default = function(name, value, priority) {
    var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolateJsDefault.default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, _tweenJs.tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

},{"d3-interpolate":"e7XwA","d3-selection":"hgWtk","./schedule.js":"dTpjR","./tween.js":"8L0br","./interpolate.js":"1aR0B","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"8Kz8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"hhhZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweenJs = require("./tween.js");
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
exports.default = function(value) {
    return this.tween("text", typeof value === "function" ? textFunction(_tweenJs.tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

},{"./tween.js":"8L0br","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"ezXKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"eIPZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function() {
    var name = this._name, id0 = this._id, id1 = _indexJs.newId();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = _scheduleJs.get(node, id0);
            _scheduleJsDefault.default(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new _indexJs.Transition(groups, this._parents, name, id1);
};

},{"./index.js":"18i1e","./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"bGIdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
exports.default = function() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = _scheduleJs.set(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
};

},{"./schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"e5Mev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./transition/index.js");
var _scheduleJs = require("./transition/schedule.js");
var root = [
    null
];
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > _scheduleJs.SCHEDULED && schedule.name === name) return new _indexJs.Transition([
                [
                    node
                ]
            ], root, name, +i);
        }
    }
    return null;
};

},{"./transition/index.js":"18i1e","./transition/schedule.js":"dTpjR","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}]},["e7FEp","ckR2R","lhX1Z","fxsMd","cz8Xp","efvdt"], "efvdt", "parcelRequire3004")

//# sourceMappingURL=BeeSwarm.js.map
