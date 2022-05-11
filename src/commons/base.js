// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fDOxV":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2228cbf2eed76cd0";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
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
            it = it.call(o);
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
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
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

},{}],"4iftY":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../barchart_split/BarChartSplit.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"5SiL5":[function(require,module,exports) {
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
        var link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = bundle;
        link1.onerror = function(e) {
            link1.onerror = link1.onload = null;
            link1.remove();
            reject(e);
        };
        link1.onload = function() {
            link1.onerror = link1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(link1);
    });
});

},{"../cacheLoader":"dDPjW"}],"dDPjW":[function(require,module,exports) {
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

},{}],"ftuBb":[function(require,module,exports) {
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

},{}],"fF9OB":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../barchart_stacked/BarChartStacked.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"b5Lip":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../beeswarm/BeeSwarm.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"5esNI":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "palette.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"S2Vtr":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "tooltip.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"2hNE9":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../gantt/Gantt.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"ipTRe":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../treemap/TreeMap.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"jYm5H":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('2VPqw') + "../../examples/src/index.b8531977.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"5SiL5","./helpers/bundle-url":"ftuBb"}],"i3PMv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _d3TimeFormat = require("d3-time-format");
var _packageJson = require("../../package.json");
var _paletteCss = require("./palette.css");
var _tooltipCss = require("./tooltip.css");
class Base {
    constructor(container, _, options){
        this.container = container;
        this.version = _packageJson.version;
        this.locale = options.locale || window.navigator.language;
        this.PALETTE = Array.from({
            length: 12
        }, (_, i)=>`var(--gv-color-${i + 1})`
        );
        window.addEventListener("resize", this.resizeListener.bind(this));
    }
    async getLocale() {
        // unpkg does not keep non-regional locales (2-letters code), so it's worthless make the request
        if (this.locale.length > 2) {
            // request the locale when it does not exists by default
            const i18n = await fetch(`https://unpkg.com/d3-time-format/locale/${this.locale}.json`).then((r)=>r.json()
            ).catch(()=>{
            });
            if (i18n) _d3TimeFormat.timeFormatDefaultLocale(i18n);
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
    isSmallDevice() {
        return screen.width < 768;
    }
    wrap(text1, width) {
        text1.each(function() {
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
    tooltipPosition(event, element, offset = 0) {
        const [x, y] = _d3Selection.pointer(event, this.container);
        const { width: pW , height: pH  } = this.container.getBoundingClientRect();
        const { width , height  } = element.getBoundingClientRect();
        const isLeft = x < pW * 0.5;
        const isTop = y < pH * 0.5;
        return isLeft && isTop ? [
            x + offset,
            y + offset
        ] : isLeft && !isTop ? [
            x + offset,
            y - height - offset
        ] : !isLeft && isTop ? [
            x - width - offset,
            y + offset
        ] : [
            x - width - offset,
            y - height - offset
        ];
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

},{"d3-selection":"gn9gd","d3-time-format":"4FtNS","../../package.json":"dIKiH","./palette.css":"izHCq","./tooltip.css":"3Cfo6","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"gn9gd":[function(require,module,exports) {
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

},{"./create.js":false,"./creator.js":"a6062","./local.js":false,"./matcher.js":"hovSo","./namespace.js":"a23xG","./namespaces.js":"dDfgS","./pointer.js":"bs1Eh","./pointers.js":false,"./select.js":"4pqgd","./selectAll.js":"eAYBy","./selection/index.js":"fK3Dl","./selector.js":"7VF9r","./selectorAll.js":"2SKTE","./selection/style.js":"GUHZ1","./window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"a6062":[function(require,module,exports) {
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

},{"./namespace.js":"a23xG","./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"a23xG":[function(require,module,exports) {
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

},{"./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"dDfgS":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"3H7f3":[function(require,module,exports) {
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

},{}],"hovSo":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"bs1Eh":[function(require,module,exports) {
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

},{"./sourceEvent.js":"cDi5d","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"cDi5d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"4pqgd":[function(require,module,exports) {
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

},{"./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"fK3Dl":[function(require,module,exports) {
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

},{"./select.js":"aK9lB","./selectAll.js":"8U28K","./selectChild.js":"hBGg0","./selectChildren.js":"hnJ1V","./filter.js":"i1GfU","./data.js":"jIP7J","./enter.js":"27tIy","./exit.js":"6ubri","./join.js":"g7QcH","./merge.js":"fXm9Z","./order.js":"cmxvd","./sort.js":"4UUI2","./call.js":"bsAaT","./nodes.js":"jjFrN","./node.js":"gPGkg","./size.js":"coOTw","./empty.js":"8ybxO","./each.js":"9Y1px","./attr.js":"k8cb1","./style.js":"GUHZ1","./property.js":"f4q4V","./classed.js":"jd3ig","./text.js":"dVAdB","./html.js":"egFAg","./raise.js":"4Xi1m","./lower.js":"l1I8n","./append.js":"1GNgv","./insert.js":"3Xphl","./remove.js":"iNsSa","./clone.js":"jfNc9","./datum.js":"lMowl","./on.js":"ktlxw","./dispatch.js":"eZMTj","./iterator.js":"32Fgr","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"aK9lB":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"7VF9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function none() {
}
exports.default = function(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"8U28K":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","../array.js":"9WejU","../selectorAll.js":"2SKTE","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"9WejU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
exports.default = array;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"2SKTE":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"hBGg0":[function(require,module,exports) {
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

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"hnJ1V":[function(require,module,exports) {
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

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"i1GfU":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jIP7J":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","./enter.js":"27tIy","../constant.js":"1wZol","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"27tIy":[function(require,module,exports) {
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

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"juhNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(update) {
    return new Array(update.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1wZol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"6ubri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new _indexJs.Selection(this._exit || this._groups.map(_sparseJsDefault.default), this._parents);
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"g7QcH":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"fXm9Z":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"cmxvd":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"4UUI2":[function(require,module,exports) {
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

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"bsAaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jjFrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"gPGkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"coOTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"8ybxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return !this.node();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"9Y1px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"k8cb1":[function(require,module,exports) {
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

},{"../namespace.js":"a23xG","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"GUHZ1":[function(require,module,exports) {
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

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"6di7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"f4q4V":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jd3ig":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"dVAdB":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"egFAg":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"4Xi1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
exports.default = function() {
    return this.each(raise);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"l1I8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
exports.default = function() {
    return this.each(lower);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1GNgv":[function(require,module,exports) {
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

},{"../creator.js":"a6062","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"3Xphl":[function(require,module,exports) {
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

},{"../creator.js":"a6062","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"iNsSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
exports.default = function() {
    return this.each(remove);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jfNc9":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"lMowl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"ktlxw":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"eZMTj":[function(require,module,exports) {
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

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"32Fgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"eAYBy":[function(require,module,exports) {
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

},{"./array.js":"9WejU","./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"4FtNS":[function(require,module,exports) {
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

},{"./defaultLocale.js":"6OjO5","./locale.js":"4m5qt","./isoFormat.js":false,"./isoParse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"6OjO5":[function(require,module,exports) {
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

},{"./locale.js":"4m5qt","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"4m5qt":[function(require,module,exports) {
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
    var formats1 = {
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
    formats1.x = newFormat(locale_date, formats1);
    formats1.X = newFormat(locale_time, formats1);
    formats1.c = newFormat(locale_dateTime, formats1);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad1, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad1 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad1 = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad1);
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
            var f = newFormat(specifier += "", formats1);
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

},{"d3-time":"1UOEe","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1UOEe":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./millisecond.js":"aa2qY","./second.js":"iJtQu","./minute.js":"2Elkb","./hour.js":"jJqLM","./day.js":"1U9Pq","./week.js":"lmrQt","./month.js":"fSASr","./year.js":"d9SS9","./utcMinute.js":"6WR76","./utcHour.js":"jki3b","./utcDay.js":"liE20","./utcWeek.js":"gAbkz","./utcMonth.js":"ltWaa","./utcYear.js":"9p6NU","./ticks.js":"bl0Km","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jfgl3":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"aa2qY":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"iJtQu":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"iEiGQ":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"2Elkb":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jJqLM":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1U9Pq":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"lmrQt":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"fSASr":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"d9SS9":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"6WR76":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"jki3b":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"liE20":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"gAbkz":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","./duration.js":"iEiGQ","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"ltWaa":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"9p6NU":[function(require,module,exports) {
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

},{"./interval.js":"jfgl3","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"bl0Km":[function(require,module,exports) {
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
        [
            _secondJsDefault.default,
            1,
            _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            5,
            5 * _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            15,
            15 * _durationJs.durationSecond
        ],
        [
            _secondJsDefault.default,
            30,
            30 * _durationJs.durationSecond
        ],
        [
            minute,
            1,
            _durationJs.durationMinute
        ],
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
            1,
            _durationJs.durationHour
        ],
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
            1,
            _durationJs.durationDay
        ],
        [
            day,
            2,
            2 * _durationJs.durationDay
        ],
        [
            week,
            1,
            _durationJs.durationWeek
        ],
        [
            month,
            1,
            _durationJs.durationMonth
        ],
        [
            month,
            3,
            3 * _durationJs.durationMonth
        ],
        [
            year,
            1,
            _durationJs.durationYear
        ]
    ];
    function ticks1(start, stop, count) {
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
        const [t, step1] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step1);
    }
    return [
        ticks1,
        tickInterval
    ];
}
const [utcTicks, utcTickInterval] = ticker(_utcYearJsDefault.default, _utcMonthJsDefault.default, _utcWeekJs.utcSunday, _utcDayJsDefault.default, _utcHourJsDefault.default, _utcMinuteJsDefault.default);
const [timeTicks, timeTickInterval] = ticker(_yearJsDefault.default, _monthJsDefault.default, _weekJs.sunday, _dayJsDefault.default, _hourJsDefault.default, _minuteJsDefault.default);

},{"d3-array":"1yX2W","./duration.js":"iEiGQ","./millisecond.js":"aa2qY","./second.js":"iJtQu","./minute.js":"2Elkb","./hour.js":"jJqLM","./day.js":"1U9Pq","./week.js":"lmrQt","./month.js":"fSASr","./year.js":"d9SS9","./utcMinute.js":"6WR76","./utcHour.js":"jki3b","./utcDay.js":"liE20","./utcWeek.js":"gAbkz","./utcMonth.js":"ltWaa","./utcYear.js":"9p6NU","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1yX2W":[function(require,module,exports) {
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

},{"./bisect.js":"2jqf4","./ascending.js":"2iZSL","./bisector.js":"1BY0F","./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":false,"./deviation.js":false,"./extent.js":"bpNTV","./fsum.js":false,"./group.js":"dY8VH","./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":"6b1uv","./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":false,"./min.js":"1KKa7","./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":"kH8Ba","./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":"47K1s","./ticks.js":"iDfKX","./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":"a6b0X","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"2jqf4":[function(require,module,exports) {
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

},{"./ascending.js":"2iZSL","./bisector.js":"1BY0F","./number.js":"imr9T","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"2iZSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
exports.default = ascending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1BY0F":[function(require,module,exports) {
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

},{"./ascending.js":"2iZSL","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"imr9T":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"bpNTV":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"dY8VH":[function(require,module,exports) {
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
function flatten(groups1, keys) {
    for(let i = 1, n = keys.length; i < n; ++i)groups1 = groups1.flatMap((g)=>g.pop().map(([key, value])=>[
                ...g,
                key,
                value
            ]
        )
    );
    return groups1;
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
function nest(values2, map, reduce, keys) {
    return (function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        const groups2 = new _internmap.InternMap();
        const keyof = keys[i++];
        let index1 = -1;
        for (const value of values){
            const key = keyof(value, ++index1, values);
            const group1 = groups2.get(key);
            if (group1) group1.push(value);
            else groups2.set(key, [
                value
            ]);
        }
        for (const [key, values1] of groups2)groups2.set(key, regroup(values1, i));
        return map(groups2);
    })(values2, 0);
}

},{"internmap":"a6b0X","./identity.js":"gZYoG","@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"a6b0X":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"gZYoG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function identity(x) {
    return x;
}
exports.default = identity;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"6b1uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max(values, valueof) {
    let max1;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max1 < value || max1 === undefined && value >= value)) max1 = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max1 < value || max1 === undefined && value >= value)) max1 = value;
    }
    return max1;
}
exports.default = max;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"1KKa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function min(values, valueof) {
    let min1;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min1 > value || min1 === undefined && value >= value)) min1 = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min1 > value || min1 === undefined && value >= value)) min1 = value;
    }
    return min1;
}
exports.default = min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"kH8Ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range1 = new Array(n);
    while(++i < n)range1[i] = start + i * step;
    return range1;
}
exports.default = range;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"47K1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function sum(values, valueof) {
    let sum1 = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum1 += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum1 += value;
    }
    return sum1;
}
exports.default = sum;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"iDfKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement
);
parcelHelpers.export(exports, "tickStep", ()=>tickStep
);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start, stop, count) {
    var reverse, i = -1, n, ticks1, step;
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
        ticks1 = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks1[i] = (r0 + i) * step;
    } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks1 = new Array(n = r1 - r0 + 1);
        while(++i < n)ticks1[i] = (r0 + i) / step;
    }
    if (reverse) ticks1.reverse();
    return ticks1;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3H7f3"}],"dIKiH":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"gobierto-vizzs\",\"version\":\"1.0.5\",\"description\":\"Shared data visualizations for Gobierto projects\",\"keywords\":[\"gobierto\",\"visualizations\",\"beeswarm\",\"treemap\",\"gantt\"],\"source\":\"src/index.js\",\"main\":\"dist/index.js\",\"module\":\"dist/module.js\",\"style\":\"dist/index.css\",\"files\":[\"dist\",\"src\"],\"sideEffects\":[\"*.css\"],\"scripts\":{\"watch\":\"parcel watch\",\"prebuild\":\"rm -rf ./dist/* ./.parcel-cache\",\"build\":\"parcel build\",\"postversion\":\"npm run build && git push --follow-tags\"},\"author\":\"populate\",\"license\":\"ISC\",\"dependencies\":{\"d3-array\":\"^3.1.1\",\"d3-axis\":\"^3.0.0\",\"d3-collection\":\"^1.0.7\",\"d3-dsv\":\"^3.0.1\",\"d3-ease\":\"^3.0.1\",\"d3-force\":\"^3.0.0\",\"d3-hierarchy\":\"^3.0.1\",\"d3-interpolate\":\"^3.0.1\",\"d3-scale\":\"^4.0.2\",\"d3-selection\":\"^3.0.0\",\"d3-shape\":\"^3.1.0\",\"d3-time\":\"^3.0.0\",\"d3-time-format\":\"^4.0.0\",\"d3-transition\":\"^3.0.1\"},\"devDependencies\":{\"parcel\":\"^2.0.0\"}}");

},{}],"izHCq":[function() {},{}],"3Cfo6":[function() {},{}]},["fDOxV","4iftY","fF9OB","b5Lip","5esNI","S2Vtr","2hNE9","ipTRe","jYm5H","i3PMv"], "i3PMv", "parcelRequire3004")

//# sourceMappingURL=base.js.map
