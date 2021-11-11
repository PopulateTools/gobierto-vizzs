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
})({"8h2Kx":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "25d9ec5530d478c3";
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

},{}],"kmYzM":[function(require,module,exports) {
require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/beeswarm/BeeSwarm.js" + "?" + Date.now());

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

},{}],"19Ijc":[function(require,module,exports) {
require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/commons/csv.js" + "?" + Date.now());

},{"./helpers/browser/js-loader":"fVUNi","./helpers/bundle-url":"fa9F8"}],"3Yy36":[function(require,module,exports) {
require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/gantt/Gantt.js" + "?" + Date.now());

},{"./helpers/browser/js-loader":"fVUNi","./helpers/bundle-url":"fa9F8"}],"axYM6":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/beeswarm/BeeSwarm.css" + "?" + Date.now());

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

},{"../cacheLoader":"eM8tw"}],"euwhi":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/gantt/Gantt.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"68wJx":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/treemap/TreeMap.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"31w0r":[function(require,module,exports) {
require("./helpers/browser/css-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "index.98542f67.css" + "?" + Date.now());

},{"./helpers/browser/css-loader":"dypvJ","./helpers/bundle-url":"fa9F8"}],"5uiTB":[function(require,module,exports) {
require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('3ftQq') + "../../src/treemap/TreeMap.js" + "?" + Date.now());

},{"./helpers/browser/js-loader":"fVUNi","./helpers/bundle-url":"fa9F8"}],"lkS6V":[function(require,module,exports) {
var _indexCss = require("./index.css");
var _index = require("../../src/index");
// import { BeeSwarm, TreeMap, Gantt } from "gobierto-vizzs"
var _random = require("./random");
function DOM([key, ChartModule, ...opts]) {
    const head = document.createElement("div");
    const block = document.createElement("div");
    const a = document.createElement("a");
    const btn = document.createElement("button");
    const chart = document.createElement("div");
    block.className = "md:container mx-auto py-4";
    head.className = "flex justify-between items-center py-3";
    a.className = "text-3xl font-bold";
    btn.className = "bg-blue-500 text-white font-bold py-2 px-4 rounded";
    a.textContent = key;
    btn.textContent = "Change data";
    a.href = `#${key}`;
    a.id = key;
    head.appendChild(a);
    head.appendChild(btn);
    block.appendChild(head);
    block.appendChild(chart);
    document.body.appendChild(block);
    const module = new ChartModule(chart, _random.mockJSON(), ...opts);
    btn.addEventListener("click", ()=>module.setData(_random.mockJSON())
    );
}
[
    // [title, Chart, options]
    [
        "BeeSwarm", _index.BeeSwarm, {
            relation: "relation",
            id: "title"
        }
    ],
    [
        "TreeMap", _index.TreeMap, {
            group: [
                "group",
                "relation"
            ],
            id: "title"
        }
    ],
    [
        "Gantt", _index.Gantt, {
            id: "title",
            y: "relation"
        }
    ], 
].map(DOM);

},{"./index.css":"kEVM9","../../src/index":"hD4hw","./random":"pHfQu"}],"kEVM9":[function() {},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BeeSwarm", ()=>_beeSwarmDefault.default
);
parcelHelpers.export(exports, "TreeMap", ()=>_treeMapDefault.default
);
parcelHelpers.export(exports, "Gantt", ()=>_ganttDefault.default
);
parcelHelpers.export(exports, "toJSON", ()=>_csvDefault.default
);
var _beeSwarm = require("./beeswarm/BeeSwarm");
var _beeSwarmDefault = parcelHelpers.interopDefault(_beeSwarm);
var _treeMap = require("./treemap/TreeMap");
var _treeMapDefault = parcelHelpers.interopDefault(_treeMap);
var _gantt = require("./gantt/Gantt");
var _ganttDefault = parcelHelpers.interopDefault(_gantt);
var _csv = require("./commons/csv");
var _csvDefault = parcelHelpers.interopDefault(_csv);

},{"./treemap/TreeMap":"jphrP","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r","./beeswarm/BeeSwarm":"efvdt","./gantt/Gantt":"evGx1","./commons/csv":"cNR0a"}],"pHfQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mockJSON", ()=>mockJSON
);
parcelHelpers.export(exports, "mockCSV", ()=>mockCSV
);
var _en = require("faker/locale/en");
function mockJSON() {
    const groups = Array.from({
        length: _en.datatype.number({
            min: 3,
            max: 9
        })
    }, ()=>_en.address.country()
    );
    const relations = Array.from({
        length: _en.datatype.number({
            min: 1500,
            max: 5000
        })
    }, ()=>_en.vehicle.manufacturer()
    );
    const phases = Array.from({
        length: 20
    }, ()=>_en.commerce.department()
    );
    const addDays = (d, n)=>new Date(new Date(d).setDate(d.getDate() + n))
    ;
    return Array.from({
        length: 100
    }, (_, i)=>({
            date: Math.random() > 0.98 ? null : _en.date.past(),
            value: Math.random() > 0.9 ? _en.datatype.number(100000) : _en.datatype.number(10000),
            title: _en.lorem.words(5),
            relation: _en.random.arrayElement(relations),
            group: _en.random.arrayElement(groups),
            id: i
        })
    ).reduce((acc, x)=>{
        const prev = acc.filter((d)=>d.relation === x.relation
        );
        const from = prev.length === 0 ? _en.date.soon(30) : addDays(prev[prev.length - 1].to, 0);
        const to = addDays(from, _en.datatype.number(100));
        return [
            ...acc,
            {
                ...x,
                phase: phases[prev.length],
                from,
                to
            }
        ];
    }, []);
}
function mockCSV(data) {
    // https://stackoverflow.com/a/31536517/5020256
    const items = data || mockJSON();
    const replacer = (key, value)=>value === null ? "" : value
    ; // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    return [
        header.join(","),
        ...items.map((row)=>header.map((fieldName)=>JSON.stringify(row[fieldName], replacer)
            ).join(",")
        ), 
    ].join("\n");
}

},{"faker/locale/en":"dcGtf","@parcel/transformer-js/src/esmodule-helpers.js":"4Rs9r"}],"dcGtf":[function(require,module,exports) {
var Faker = require('../lib');
var faker = new Faker({
    locale: 'en',
    localeFallback: 'en'
});
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;

},{"../lib":"8l6QV","../lib/locales/en":"4zaRc"}],"8l6QV":[function(require,module,exports) {
/*

   this index.js file is used for including the faker library as a CommonJS module, instead of a bundle

   you can include the faker library into your existing node.js application by requiring the entire /faker directory

    var faker = require(./faker);
    var randomName = faker.name.findName();

   you can also simply include the "faker.js" file which is the auto-generated bundled version of the faker library

    var faker = require(./customAppPath/faker);
    var randomName = faker.name.findName();


  if you plan on modifying the faker library you should be performing your changes in the /lib/ directory

*/ /**
 *
 * @namespace faker
 */ function Faker(opts) {
    var self = this;
    opts = opts || {
    };
    // assign options
    var locales = self.locales || opts.locales || {
    };
    var locale = self.locale || opts.locale || "en";
    var localeFallback = self.localeFallback || opts.localeFallback || "en";
    self.locales = locales;
    self.locale = locale;
    self.localeFallback = localeFallback;
    self.definitions = {
    };
    var _definitions = {
        "name": [
            "first_name",
            "last_name",
            "prefix",
            "suffix",
            "binary_gender",
            "gender",
            "title",
            "male_prefix",
            "female_prefix",
            "male_first_name",
            "female_first_name",
            "male_middle_name",
            "female_middle_name",
            "male_last_name",
            "female_last_name"
        ],
        "address": [
            "city_name",
            "city_prefix",
            "city_suffix",
            "street_suffix",
            "county",
            "country",
            "country_code",
            "country_code_alpha_3",
            "state",
            "state_abbr",
            "street_prefix",
            "postcode",
            "postcode_by_state",
            "direction",
            "direction_abbr",
            "time_zone"
        ],
        "animal": [
            "dog",
            "cat",
            "snake",
            "bear",
            "lion",
            "cetacean",
            "insect",
            "crocodilia",
            "cow",
            "bird",
            "fish",
            "rabbit",
            "horse",
            "type"
        ],
        "company": [
            "adjective",
            "noun",
            "descriptor",
            "bs_adjective",
            "bs_noun",
            "bs_verb",
            "suffix"
        ],
        "lorem": [
            "words"
        ],
        "hacker": [
            "abbreviation",
            "adjective",
            "noun",
            "verb",
            "ingverb",
            "phrase"
        ],
        "phone_number": [
            "formats"
        ],
        "finance": [
            "account_type",
            "transaction_type",
            "currency",
            "iban",
            "credit_card"
        ],
        "internet": [
            "avatar_uri",
            "domain_suffix",
            "free_email",
            "example_email",
            "password"
        ],
        "commerce": [
            "color",
            "department",
            "product_name",
            "price",
            "categories",
            "product_description"
        ],
        "database": [
            "collation",
            "column",
            "engine",
            "type"
        ],
        "system": [
            "mimeTypes",
            "directoryPaths"
        ],
        "date": [
            "month",
            "weekday"
        ],
        "vehicle": [
            "vehicle",
            "manufacturer",
            "model",
            "type",
            "fuel",
            "vin",
            "color"
        ],
        "music": [
            "genre"
        ],
        "title": "",
        "separator": ""
    };
    // Create a Getter for all definitions.foo.bar properties
    Object.keys(_definitions).forEach(function(d) {
        if (typeof self.definitions[d] === "undefined") self.definitions[d] = {
        };
        if (typeof _definitions[d] === "string") {
            self.definitions[d] = _definitions[d];
            return;
        }
        _definitions[d].forEach(function(p) {
            Object.defineProperty(self.definitions[d], p, {
                get: function() {
                    if (typeof self.locales[self.locale][d] === "undefined" || typeof self.locales[self.locale][d][p] === "undefined") // certain localization sets contain less data then others.
                    // in the case of a missing definition, use the default localeFallback to substitute the missing set data
                    // throw new Error('unknown property ' + d + p)
                    return self.locales[localeFallback][d][p];
                    else // return localized data
                    return self.locales[self.locale][d][p];
                }
            });
        });
    });
    var Fake = require('./fake');
    self.fake = new Fake(self).fake;
    var Unique = require('./unique');
    self.unique = new Unique(self).unique;
    var Mersenne = require('./mersenne');
    self.mersenne = new Mersenne();
    var Random = require('./random');
    self.random = new Random(self);
    var Helpers = require('./helpers');
    self.helpers = new Helpers(self);
    var Name = require('./name');
    self.name = new Name(self);
    var Address = require('./address');
    self.address = new Address(self);
    var Animal = require('./animal');
    self.animal = new Animal(self);
    var Company = require('./company');
    self.company = new Company(self);
    var Finance = require('./finance');
    self.finance = new Finance(self);
    var Image = require('./image');
    self.image = new Image(self);
    var Lorem = require('./lorem');
    self.lorem = new Lorem(self);
    var Hacker = require('./hacker');
    self.hacker = new Hacker(self);
    var Internet = require('./internet');
    self.internet = new Internet(self);
    var Database = require('./database');
    self.database = new Database(self);
    var Phone = require('./phone_number');
    self.phone = new Phone(self);
    var _Date = require('./date');
    self.date = new _Date(self);
    var _Time = require('./time');
    self.time = new _Time(self);
    var Commerce = require('./commerce');
    self.commerce = new Commerce(self);
    var System = require('./system');
    self.system = new System(self);
    var Git = require('./git');
    self.git = new Git(self);
    var Vehicle = require('./vehicle');
    self.vehicle = new Vehicle(self);
    var Music = require('./music');
    self.music = new Music(self);
    var Datatype = require('./datatype');
    self.datatype = new Datatype(self);
}
Faker.prototype.setLocale = function(locale) {
    this.locale = locale;
};
Faker.prototype.seed = function(value) {
    var Random = require('./random');
    var Datatype = require('./datatype');
    this.seedValue = value;
    this.random = new Random(this, this.seedValue);
    this.datatype = new Datatype(this, this.seedValue);
};
module['exports'] = Faker;

},{"./fake":"6OpGP","./unique":"eV7RT","./mersenne":"gl8xT","./random":"7l9ga","./helpers":"WMGCq","./name":"g3ERX","./address":"dyNkQ","./animal":"3MxpH","./company":"d3FeR","./finance":"iGcTZ","./image":"9YwOh","./lorem":"9tWvg","./hacker":"2jMFP","./internet":"9EOSC","./database":"7vg8w","./phone_number":"7mtlo","./date":"7KIw8","./time":"ameQh","./commerce":"8GyHf","./system":"7gdMd","./git":"h5Oey","./vehicle":"3hapj","./music":"hVke1","./datatype":"gh8Hr"}],"6OpGP":[function(require,module,exports) {
/*
  fake.js - generator method for combining faker methods based on string input

*/ function Fake(faker) {
    /**
   * Generator method for combining faker methods based on string input
   *
   * __Example:__
   *
   * ```
   * console.log(faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'));
   * //outputs: "Marks, Dean Sr."
   * ```
   *
   * This will interpolate the format string with the value of methods
   * [name.lastName]{@link faker.name.lastName}, [name.firstName]{@link faker.name.firstName},
   * and [name.suffix]{@link faker.name.suffix}
   *
   * @method faker.fake
   * @param {string} str
   */ this.fake = function fake(str) {
        // setup default response as empty string
        var res = '';
        // if incoming str parameter is not provided, return error message
        if (typeof str !== 'string' || str.length === 0) throw new Error('string parameter is required!');
        // find first matching {{ and }}
        var start = str.search('{{');
        var end = str.search('}}');
        // if no {{ and }} is found, we are done
        if (start === -1 && end === -1) return str;
        // console.log('attempting to parse', str);
        // extract method name from between the {{ }} that we found
        // for example: {{name.firstName}}
        var token = str.substr(start + 2, end - start - 2);
        var method = token.replace('}}', '').replace('{{', '');
        // console.log('method', method)
        // extract method parameters
        var regExp = /\(([^)]+)\)/;
        var matches = regExp.exec(method);
        var parameters = '';
        if (matches) {
            method = method.replace(regExp, '');
            parameters = matches[1];
        }
        // split the method into module and function
        var parts = method.split('.');
        if (typeof faker[parts[0]] === "undefined") throw new Error('Invalid module: ' + parts[0]);
        if (typeof faker[parts[0]][parts[1]] === "undefined") throw new Error('Invalid method: ' + parts[0] + "." + parts[1]);
        // assign the function from the module.function namespace
        var fn = faker[parts[0]][parts[1]];
        // If parameters are populated here, they are always going to be of string type
        // since we might actually be dealing with an object or array,
        // we always attempt to the parse the incoming parameters into JSON
        var params;
        // Note: we experience a small performance hit here due to JSON.parse try / catch
        // If anyone actually needs to optimize this specific code path, please open a support issue on github
        try {
            params = JSON.parse(parameters);
        } catch (err) {
            // since JSON.parse threw an error, assume parameters was actually a string
            params = parameters;
        }
        var result;
        if (typeof params === "string" && params.length === 0) result = fn.call(this);
        else result = fn.call(this, params);
        // replace the found tag with the returned fake value
        res = str.replace('{{' + token + '}}', result);
        // return the response recursively until we are done finding all tags
        return fake(res);
    };
    return this;
}
module['exports'] = Fake;

},{}],"eV7RT":[function(require,module,exports) {
var uniqueExec = require('../vendor/unique');
/**
 *
 * @namespace faker.unique
 */ function Unique(faker) {
    // initialize unique module class variables
    // maximum time unique.exec will attempt to run before aborting
    var maxTime = 10;
    // maximum retries unique.exec will recurse before abortings ( max loop depth )
    var maxRetries = 10;
    // time the script started
    // var startTime = 0;
    /**
   * unique
   *
   * @method unique
   */ this.unique = function unique(method, args, opts) {
        opts = opts || {
        };
        opts.startTime = new Date().getTime();
        if (typeof opts.maxTime !== 'number') opts.maxTime = maxTime;
        if (typeof opts.maxRetries !== 'number') opts.maxRetries = maxRetries;
        opts.currentIterations = 0;
        return uniqueExec.exec(method, args, opts);
    };
}
module['exports'] = Unique;

},{"../vendor/unique":"cu0AO"}],"cu0AO":[function(require,module,exports) {
// the `unique` module
var unique = {
};
// global results store
// currently uniqueness is global to entire faker instance
// this means that faker should currently *never* return duplicate values across all API methods when using `Faker.unique`
// it's possible in the future that some users may want to scope found per function call instead of faker instance
var found = {
};
// global exclude list of results
// defaults to nothing excluded
var exclude = [];
// current iteration or retries of unique.exec ( current loop depth )
var currentIterations = 0;
// uniqueness compare function
// default behavior is to check value as key against object hash
var defaultCompare = function(obj, key) {
    if (typeof obj[key] === 'undefined') return -1;
    return 0;
};
// common error handler for messages
unique.errorMessage = function(now, code, opts) {
    console.error('error', code);
    console.log('found', Object.keys(found).length, 'unique entries before throwing error. \nretried:', currentIterations, '\ntotal time:', now - opts.startTime, 'ms');
    throw new Error(code + ' for uniqueness check \n\nMay not be able to generate any more unique values with current settings. \nTry adjusting maxTime or maxRetries parameters for faker.unique()');
};
unique.exec = function(method, args, opts) {
    //console.log(currentIterations)
    var now = new Date().getTime();
    opts = opts || {
    };
    opts.maxTime = opts.maxTime || 3;
    opts.maxRetries = opts.maxRetries || 50;
    opts.exclude = opts.exclude || exclude;
    opts.compare = opts.compare || defaultCompare;
    if (typeof opts.currentIterations !== 'number') opts.currentIterations = 0;
    if (typeof opts.startTime === 'undefined') opts.startTime = new Date().getTime();
    var startTime = opts.startTime;
    // support single exclude argument as string
    if (typeof opts.exclude === 'string') opts.exclude = [
        opts.exclude
    ];
    opts.currentIterations;
    // console.log(now - startTime)
    if (now - startTime >= opts.maxTime) return unique.errorMessage(now, 'Exceeded maxTime:' + opts.maxTime, opts);
    if (opts.currentIterations >= opts.maxRetries) return unique.errorMessage(now, 'Exceeded maxRetries:' + opts.maxRetries, opts);
    // execute the provided method to find a potential satifised value
    var result = method.apply(this, args);
    // if the result has not been previously found, add it to the found array and return the value as it's unique
    if (opts.compare(found, result) === -1 && opts.exclude.indexOf(result) === -1) {
        found[result] = result;
        opts.currentIterations = 0;
        return result;
    } else {
        // console.log('conflict', result);
        opts.currentIterations++;
        return unique.exec(method, args, opts);
    }
};
module.exports = unique;

},{}],"gl8xT":[function(require,module,exports) {
var Gen = require('../vendor/mersenne').MersenneTwister19937;
function Mersenne() {
    var gen = new Gen();
    gen.init_genrand((new Date).getTime() % 1000000000);
    this.rand = function(max, min) {
        if (max === undefined) {
            min = 0;
            max = 32768;
        }
        return Math.floor(gen.genrand_real2() * (max - min) + min);
    };
    this.seed = function(S) {
        if (typeof S != 'number') throw new Error("seed(S) must take numeric argument; is " + typeof S);
        gen.init_genrand(S);
    };
    this.seed_array = function(A) {
        if (typeof A != 'object') throw new Error("seed_array(A) must take array of numbers; is " + typeof A);
        gen.init_by_array(A, A.length);
    };
}
module.exports = Mersenne;

},{"../vendor/mersenne":"gPZuW"}],"gPZuW":[function(require,module,exports) {
// this program is a JavaScript version of Mersenne Twister, with concealment and encapsulation in class,
// an almost straight conversion from the original program, mt19937ar.c,
// translated by y. okada on July 17, 2006.
// and modified a little at july 20, 2006, but there are not any substantial differences.
// in this program, procedure descriptions and comments of original source code were not removed.
// lines commented with //c// were originally descriptions of c procedure. and a few following lines are appropriate JavaScript descriptions.
// lines commented with /* and */ are original comments.
// lines commented with // are additional comments in this JavaScript version.
// before using this version, create at least one instance of MersenneTwister19937 class, and initialize the each state, given below in c comments, of all the instances.
/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_genrand(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/ function MersenneTwister19937() {
    /* constants should be scoped inside the class */ var N, M, MATRIX_A, UPPER_MASK, LOWER_MASK;
    /* Period parameters */ //c//#define N 624
    //c//#define M 397
    //c//#define MATRIX_A 0x9908b0dfUL   /* constant vector a */
    //c//#define UPPER_MASK 0x80000000UL /* most significant w-r bits */
    //c//#define LOWER_MASK 0x7fffffffUL /* least significant r bits */
    N = 624;
    M = 397;
    MATRIX_A = 2567483615; /* constant vector a */ 
    UPPER_MASK = 2147483648; /* most significant w-r bits */ 
    LOWER_MASK = 2147483647; /* least significant r bits */ 
    //c//static unsigned long mt[N]; /* the array for the state vector  */
    //c//static int mti=N+1; /* mti==N+1 means mt[N] is not initialized */
    var mt = new Array(N); /* the array for the state vector  */ 
    var mti = N + 1; /* mti==N+1 means mt[N] is not initialized */ 
    function unsigned32(n1) {
        return n1 < 0 ? (n1 ^ UPPER_MASK) + UPPER_MASK : n1;
    }
    function subtraction32(n1, n2) {
        return n1 < n2 ? unsigned32(4294967296 - (n2 - n1) & 4294967295) : n1 - n2;
    }
    function addition32(n1, n2) {
        return unsigned32(n1 + n2 & 4294967295);
    }
    function multiplication32(n1, n2) {
        var sum = 0;
        for(var i = 0; i < 32; ++i)if (n1 >>> i & 1) sum = addition32(sum, unsigned32(n2 << i));
        return sum;
    }
    /* initializes mt[N] with a seed */ //c//void init_genrand(unsigned long s)
    this.init_genrand = function(s) {
        //c//mt[0]= s & 0xffffffff;
        mt[0] = unsigned32(s & 4294967295);
        for(mti = 1; mti < N; mti++){
            mt[mti] = //c//(1812433253 * (mt[mti-1] ^ (mt[mti-1] >> 30)) + mti);
            addition32(multiplication32(1812433253, unsigned32(mt[mti - 1] ^ mt[mti - 1] >>> 30)), mti);
            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */ /* In the previous versions, MSBs of the seed affect   */ /* only MSBs of the array mt[].                        */ /* 2002/01/09 modified by Makoto Matsumoto             */ //c//mt[mti] &= 0xffffffff;
            mt[mti] = unsigned32(mt[mti] & 4294967295);
        /* for >32 bit machines */ }
    };
    /* initialize by an array with array-length */ /* init_key is the array for initializing keys */ /* key_length is its length */ /* slight change for C++, 2004/2/26 */ //c//void init_by_array(unsigned long init_key[], int key_length)
    this.init_by_array = function(init_key, key_length) {
        //c//int i, j, k;
        var i, j, k;
        //c//init_genrand(19650218);
        this.init_genrand(19650218);
        i = 1;
        j = 0;
        k = N > key_length ? N : key_length;
        for(; k; k--){
            //c//mt[i] = (mt[i] ^ ((mt[i-1] ^ (mt[i-1] >> 30)) * 1664525))
            //c//	+ init_key[j] + j; /* non linear */
            mt[i] = addition32(addition32(unsigned32(mt[i] ^ multiplication32(unsigned32(mt[i - 1] ^ mt[i - 1] >>> 30), 1664525)), init_key[j]), j);
            mt[i] = //c//mt[i] &= 0xffffffff; /* for WORDSIZE > 32 machines */
            unsigned32(mt[i] & 4294967295);
            i++;
            j++;
            if (i >= N) {
                mt[0] = mt[N - 1];
                i = 1;
            }
            if (j >= key_length) j = 0;
        }
        for(k = N - 1; k; k--){
            //c//mt[i] = (mt[i] ^ ((mt[i-1] ^ (mt[i-1] >> 30)) * 1566083941))
            //c//- i; /* non linear */
            mt[i] = subtraction32(unsigned32((dbg = mt[i]) ^ multiplication32(unsigned32(mt[i - 1] ^ mt[i - 1] >>> 30), 1566083941)), i);
            //c//mt[i] &= 0xffffffff; /* for WORDSIZE > 32 machines */
            mt[i] = unsigned32(mt[i] & 4294967295);
            i++;
            if (i >= N) {
                mt[0] = mt[N - 1];
                i = 1;
            }
        }
        mt[0] = 2147483648; /* MSB is 1; assuring non-zero initial array */ 
    };
    /* moved outside of genrand_int32() by jwatte 2010-11-17; generate less garbage */ var mag01 = [
        0,
        MATRIX_A
    ];
    /* generates a random number on [0,0xffffffff]-interval */ //c//unsigned long genrand_int32(void)
    this.genrand_int32 = function() {
        //c//unsigned long y;
        //c//static unsigned long mag01[2]={0x0UL, MATRIX_A};
        var y;
        /* mag01[x] = x * MATRIX_A  for x=0,1 */ if (mti >= N) {
            //c//int kk;
            var kk;
            if (mti == N + 1) this.init_genrand(5489);
             /* a default initial seed is used */ 
            for(kk = 0; kk < N - M; kk++){
                //c//y = (mt[kk]&UPPER_MASK)|(mt[kk+1]&LOWER_MASK);
                //c//mt[kk] = mt[kk+M] ^ (y >> 1) ^ mag01[y & 0x1];
                y = unsigned32(mt[kk] & UPPER_MASK | mt[kk + 1] & LOWER_MASK);
                mt[kk] = unsigned32(mt[kk + M] ^ y >>> 1 ^ mag01[y & 1]);
            }
            for(; kk < N - 1; kk++){
                //c//y = (mt[kk]&UPPER_MASK)|(mt[kk+1]&LOWER_MASK);
                //c//mt[kk] = mt[kk+(M-N)] ^ (y >> 1) ^ mag01[y & 0x1];
                y = unsigned32(mt[kk] & UPPER_MASK | mt[kk + 1] & LOWER_MASK);
                mt[kk] = unsigned32(mt[kk + (M - N)] ^ y >>> 1 ^ mag01[y & 1]);
            }
            //c//y = (mt[N-1]&UPPER_MASK)|(mt[0]&LOWER_MASK);
            //c//mt[N-1] = mt[M-1] ^ (y >> 1) ^ mag01[y & 0x1];
            y = unsigned32(mt[N - 1] & UPPER_MASK | mt[0] & LOWER_MASK);
            mt[N - 1] = unsigned32(mt[M - 1] ^ y >>> 1 ^ mag01[y & 1]);
            mti = 0;
        }
        y = mt[mti++];
        /* Tempering */ //c//y ^= (y >> 11);
        //c//y ^= (y << 7) & 0x9d2c5680;
        //c//y ^= (y << 15) & 0xefc60000;
        //c//y ^= (y >> 18);
        y = unsigned32(y ^ y >>> 11);
        y = unsigned32(y ^ y << 7 & 2636928640);
        y = unsigned32(y ^ y << 15 & 4022730752);
        y = unsigned32(y ^ y >>> 18);
        return y;
    };
    /* generates a random number on [0,0x7fffffff]-interval */ //c//long genrand_int31(void)
    this.genrand_int31 = function() {
        //c//return (genrand_int32()>>1);
        return this.genrand_int32() >>> 1;
    };
    /* generates a random number on [0,1]-real-interval */ //c//double genrand_real1(void)
    this.genrand_real1 = function() {
        //c//return genrand_int32()*(1.0/4294967295.0);
        return this.genrand_int32() * (1 / 4294967295);
    /* divided by 2^32-1 */ };
    /* generates a random number on [0,1)-real-interval */ //c//double genrand_real2(void)
    this.genrand_real2 = function() {
        //c//return genrand_int32()*(1.0/4294967296.0);
        return this.genrand_int32() * (1 / 4294967296);
    /* divided by 2^32 */ };
    /* generates a random number on (0,1)-real-interval */ //c//double genrand_real3(void)
    this.genrand_real3 = function() {
        //c//return ((genrand_int32()) + 0.5)*(1.0/4294967296.0);
        return (this.genrand_int32() + 0.5) * (1 / 4294967296);
    /* divided by 2^32 */ };
    /* generates a random number on [0,1) with 53-bit resolution*/ //c//double genrand_res53(void)
    this.genrand_res53 = function() {
        //c//unsigned long a=genrand_int32()>>5, b=genrand_int32()>>6;
        var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
        return (a * 67108864 + b) * (1 / 9007199254740992);
    };
/* These real versions are due to Isaku Wada, 2002/01/09 added */ }
//  Exports: Public API
//  Export the twister class
exports.MersenneTwister19937 = MersenneTwister19937;

},{}],"7l9ga":[function(require,module,exports) {
/**
 * Method to reduce array of characters
 * @param arr existing array of characters
 * @param values array of characters which should be removed
 * @return {*} new array without banned characters
 */ var arrayRemove = function(arr, values) {
    values.forEach(function(value) {
        arr = arr.filter(function(ele) {
            return ele !== value;
        });
    });
    return arr;
};
/**
 *
 * @namespace faker.random
 */ function Random(faker, seed) {
    // Use a user provided seed if it is an array or number
    if (Array.isArray(seed) && seed.length) faker.mersenne.seed_array(seed);
    else if (!isNaN(seed)) faker.mersenne.seed(seed);
    /**
   * @Deprecated
   * returns a single random number based on a max number or range
   *
   * @method faker.random.number
   * @param {mixed} options {min, max, precision}
   */ this.number = function(options) {
        console.log("Deprecation Warning: faker.random.number is now located in faker.datatype.number");
        return faker.datatype.number(options);
    };
    /**
   * @Deprecated
   * returns a single random floating-point number based on a max number or range
   *
   * @method faker.random.float
   * @param {mixed} options
   */ this.float = function(options) {
        console.log("Deprecation Warning: faker.random.float is now located in faker.datatype.float");
        return faker.datatype.float(options);
    };
    /**
   * takes an array and returns a random element of the array
   *
   * @method faker.random.arrayElement
   * @param {array} array
   */ this.arrayElement = function(array) {
        array = array || [
            "a",
            "b",
            "c"
        ];
        var r = faker.datatype.number({
            max: array.length - 1
        });
        return array[r];
    };
    /**
   * takes an array and returns a subset with random elements of the array
   *
   * @method faker.random.arrayElements
   * @param {array} array
   * @param {number} count number of elements to pick
   */ this.arrayElements = function(array, count) {
        array = array || [
            "a",
            "b",
            "c"
        ];
        if (typeof count !== 'number') count = faker.datatype.number({
            min: 1,
            max: array.length
        });
        else if (count > array.length) count = array.length;
        else if (count < 0) count = 0;
        var arrayCopy = array.slice(0);
        var i = array.length;
        var min = i - count;
        var temp;
        var index;
        while((i--) > min){
            index = Math.floor((i + 1) * faker.datatype.float({
                min: 0,
                max: 0.99
            }));
            temp = arrayCopy[index];
            arrayCopy[index] = arrayCopy[i];
            arrayCopy[i] = temp;
        }
        return arrayCopy.slice(min);
    };
    /**
   * takes an object and returns a random key or value
   *
   * @method faker.random.objectElement
   * @param {object} object
   * @param {mixed} field
   */ this.objectElement = function(object, field) {
        object = object || {
            "foo": "bar",
            "too": "car"
        };
        var array = Object.keys(object);
        var key = faker.random.arrayElement(array);
        return field === "key" ? key : object[key];
    };
    /**
   * @Deprecated
   * uuid
   *
   * @method faker.random.uuid
   */ this.uuid = function() {
        console.log("Deprecation Warning: faker.random.uuid is now located in faker.datatype.uuid");
        return faker.datatype.uuid();
    };
    /**
   * boolean
   *
   * @method faker.random.boolean
   */ this.boolean = function() {
        console.log("Deprecation Warning: faker.random.boolean is now located in faker.datatype.boolean");
        return faker.datatype.boolean();
    };
    // TODO: have ability to return specific type of word? As in: noun, adjective, verb, etc
    /**
   * word
   *
   * @method faker.random.word
   * @param {string} type
   */ this.word = function randomWord(type) {
        var wordMethods = [
            'commerce.department',
            'commerce.productName',
            'commerce.productAdjective',
            'commerce.productMaterial',
            'commerce.product',
            'commerce.color',
            'company.catchPhraseAdjective',
            'company.catchPhraseDescriptor',
            'company.catchPhraseNoun',
            'company.bsAdjective',
            'company.bsBuzz',
            'company.bsNoun',
            'address.streetSuffix',
            'address.county',
            'address.country',
            'address.state',
            'finance.accountName',
            'finance.transactionType',
            'finance.currencyName',
            'hacker.noun',
            'hacker.verb',
            'hacker.adjective',
            'hacker.ingverb',
            'hacker.abbreviation',
            'name.jobDescriptor',
            'name.jobArea',
            'name.jobType'
        ];
        // randomly pick from the many faker methods that can generate words
        var randomWordMethod = faker.random.arrayElement(wordMethods);
        var result = faker.fake('{{' + randomWordMethod + '}}');
        return faker.random.arrayElement(result.split(' '));
    };
    /**
   * randomWords
   *
   * @method faker.random.words
   * @param {number} count defaults to a random value between 1 and 3
   */ this.words = function randomWords(count) {
        var words = [];
        if (typeof count === "undefined") count = faker.datatype.number({
            min: 1,
            max: 3
        });
        for(var i = 0; i < count; i++)words.push(faker.random.word());
        return words.join(' ');
    };
    /**
   * locale
   *
   * @method faker.random.image
   */ this.image = function randomImage() {
        return faker.image.image();
    };
    /**
   * locale
   *
   * @method faker.random.locale
   */ this.locale = function randomLocale() {
        return faker.random.arrayElement(Object.keys(faker.locales));
    };
    /**
   * alpha. returns lower/upper alpha characters based count and upcase options
   *
   * @method faker.random.alpha
   * @param {mixed} options // defaults to { count: 1, upcase: false, bannedChars: [] }
   */ this.alpha = function alpha(options) {
        if (typeof options === "undefined") options = {
            count: 1
        };
        else if (typeof options === "number") options = {
            count: options
        };
        else if (typeof options.count === "undefined") options.count = 1;
        if (typeof options.upcase === "undefined") options.upcase = false;
        if (typeof options.bannedChars === "undefined") options.bannedChars = [];
        var wholeString = "";
        var charsArray = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
        if (options.bannedChars) charsArray = arrayRemove(charsArray, options.bannedChars);
        for(var i = 0; i < options.count; i++)wholeString += faker.random.arrayElement(charsArray);
        return options.upcase ? wholeString.toUpperCase() : wholeString;
    };
    /**
   * alphaNumeric
   *
   * @method faker.random.alphaNumeric
   * @param {number} count defaults to 1
   * {mixed} options // defaults to { bannedChars: [] }
   * options.bannedChars - array of characters which should be banned in new string
   */ this.alphaNumeric = function alphaNumeric(count, options) {
        if (typeof count === "undefined") count = 1;
        if (typeof options === "undefined") options = {
        };
        if (typeof options.bannedChars === "undefined") options.bannedChars = [];
        var wholeString = "";
        var charsArray = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
        if (options) {
            if (options.bannedChars) charsArray = arrayRemove(charsArray, options.bannedChars);
        }
        for(var i = 0; i < count; i++)wholeString += faker.random.arrayElement(charsArray);
        return wholeString;
    };
    /**
   * @Deprecated
   * hexaDecimal
   *
   * @method faker.random.hexaDecimal
   * @param {number} count defaults to 1
   */ this.hexaDecimal = function hexaDecimal(count) {
        console.log("Deprecation Warning: faker.random.hexaDecimal is now located in faker.datatype.hexaDecimal");
        return faker.datatype.hexaDecimal(count);
    };
    return this;
}
module['exports'] = Random;

},{}],"WMGCq":[function(require,module,exports) {
/**
 *
 * @namespace faker.helpers
 */ var Helpers = function(faker) {
    var self = this;
    /**
   * backward-compatibility
   *
   * @method faker.helpers.randomize
   * @param {array} array
   */ self.randomize = function(array) {
        array = array || [
            "a",
            "b",
            "c"
        ];
        return faker.random.arrayElement(array);
    };
    /**
   * slugifies string
   *
   * @method faker.helpers.slugify
   * @param {string} string
   */ self.slugify = function(string) {
        string = string || "";
        return string.replace(/ /g, '-').replace(/[^\一-龠\ぁ-ゔ\ァ-ヴー\w\.\-]+/g, '');
    };
    /**
   * parses string for a symbol and replace it with a random number from 1-10
   *
   * @method faker.helpers.replaceSymbolWithNumber
   * @param {string} string
   * @param {string} symbol defaults to `"#"`
   */ self.replaceSymbolWithNumber = function(string, symbol) {
        string = string || "";
        // default symbol is '#'
        if (symbol === undefined) symbol = '#';
        var str = '';
        for(var i = 0; i < string.length; i++){
            if (string.charAt(i) == symbol) str += faker.datatype.number(9);
            else if (string.charAt(i) == "!") str += faker.datatype.number({
                min: 2,
                max: 9
            });
            else str += string.charAt(i);
        }
        return str;
    };
    /**
   * parses string for symbols (numbers or letters) and replaces them appropriately (# will be replaced with number,
   * ? with letter and * will be replaced with number or letter)
   *
   * @method faker.helpers.replaceSymbols
   * @param {string} string
   */ self.replaceSymbols = function(string) {
        string = string || "";
        var alpha = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
        var str = '';
        for(var i = 0; i < string.length; i++){
            if (string.charAt(i) == "#") str += faker.datatype.number(9);
            else if (string.charAt(i) == "?") str += faker.random.arrayElement(alpha);
            else if (string.charAt(i) == "*") str += faker.datatype.boolean() ? faker.random.arrayElement(alpha) : faker.datatype.number(9);
            else str += string.charAt(i);
        }
        return str;
    };
    /**
   * replace symbols in a credit card schems including Luhn checksum
   *
   * @method faker.helpers.replaceCreditCardSymbols
   * @param {string} string
   * @param {string} symbol
   */ self.replaceCreditCardSymbols = function(string, symbol) {
        // default values required for calling method without arguments
        string = string || "6453-####-####-####-###L";
        symbol = symbol || "#";
        // Function calculating the Luhn checksum of a number string
        var getCheckBit = function(number) {
            number.reverse();
            number = number.map(function(num, index) {
                if (index % 2 === 0) {
                    num *= 2;
                    if (num > 9) num -= 9;
                }
                return num;
            });
            var sum = number.reduce(function(prev, curr) {
                return prev + curr;
            });
            return sum % 10;
        };
        string = faker.helpers.regexpStyleStringParse(string); // replace [4-9] with a random number in range etc...
        string = faker.helpers.replaceSymbolWithNumber(string, symbol); // replace ### with random numbers
        var numberList = string.replace(/\D/g, "").split("").map(function(num) {
            return parseInt(num);
        });
        var checkNum = getCheckBit(numberList);
        return string.replace("L", checkNum);
    };
    /** string repeat helper, alternative to String.prototype.repeat.... See PR #382
   *
   * @method faker.helpers.repeatString
   * @param {string} string
   * @param {number} num
   */ self.repeatString = function(string, num) {
        if (typeof num === "undefined") num = 0;
        var text = "";
        for(var i = 0; i < num; i++)text += string.toString();
        return text;
    };
    /**
    * parse string patterns in a similar way to RegExp
    *
    * e.g. "#{3}test[1-5]" -> "###test4"
    *
    * @method faker.helpers.regexpStyleStringParse
    * @param {string} string
    */ self.regexpStyleStringParse = function(string) {
        string = string || "";
        // Deal with range repeat `{min,max}`
        var RANGE_REP_REG = /(.)\{(\d+)\,(\d+)\}/;
        var REP_REG = /(.)\{(\d+)\}/;
        var RANGE_REG = /\[(\d+)\-(\d+)\]/;
        var min, max, tmp, repetitions;
        var token = string.match(RANGE_REP_REG);
        while(token !== null){
            min = parseInt(token[2]);
            max = parseInt(token[3]);
            // switch min and max
            if (min > max) {
                tmp = max;
                max = min;
                min = tmp;
            }
            repetitions = faker.datatype.number({
                min: min,
                max: max
            });
            string = string.slice(0, token.index) + faker.helpers.repeatString(token[1], repetitions) + string.slice(token.index + token[0].length);
            token = string.match(RANGE_REP_REG);
        }
        // Deal with repeat `{num}`
        token = string.match(REP_REG);
        while(token !== null){
            repetitions = parseInt(token[2]);
            string = string.slice(0, token.index) + faker.helpers.repeatString(token[1], repetitions) + string.slice(token.index + token[0].length);
            token = string.match(REP_REG);
        }
        // Deal with range `[min-max]` (only works with numbers for now)
        //TODO: implement for letters e.g. [0-9a-zA-Z] etc.
        token = string.match(RANGE_REG);
        while(token !== null){
            min = parseInt(token[1]); // This time we are not capturing the char before `[]`
            max = parseInt(token[2]);
            // switch min and max
            if (min > max) {
                tmp = max;
                max = min;
                min = tmp;
            }
            string = string.slice(0, token.index) + faker.datatype.number({
                min: min,
                max: max
            }).toString() + string.slice(token.index + token[0].length);
            token = string.match(RANGE_REG);
        }
        return string;
    };
    /**
   * takes an array and randomizes it in place then returns it
   * 
   * uses the modern version of the Fisher–Yates algorithm
   *
   * @method faker.helpers.shuffle
   * @param {array} o
   */ self.shuffle = function(o) {
        if (typeof o === 'undefined' || o.length === 0) return o || [];
        o = o || [
            "a",
            "b",
            "c"
        ];
        for(var x, j, i = o.length - 1; i > 0; --i){
            j = faker.datatype.number(i);
            x = o[i];
            o[i] = o[j];
            o[j] = x;
        }
        return o;
    };
    /**
   * mustache
   *
   * @method faker.helpers.mustache
   * @param {string} str
   * @param {object} data
   */ self.mustache = function(str, data) {
        if (typeof str === 'undefined') return '';
        for(var p in data){
            var re = new RegExp('{{' + p + '}}', 'g');
            str = str.replace(re, data[p]);
        }
        return str;
    };
    /**
   * createCard
   *
   * @method faker.helpers.createCard
   */ self.createCard = function() {
        return {
            "name": faker.name.findName(),
            "username": faker.internet.userName(),
            "email": faker.internet.email(),
            "address": {
                "streetA": faker.address.streetName(),
                "streetB": faker.address.streetAddress(),
                "streetC": faker.address.streetAddress(true),
                "streetD": faker.address.secondaryAddress(),
                "city": faker.address.city(),
                "state": faker.address.state(),
                "country": faker.address.country(),
                "zipcode": faker.address.zipCode(),
                "geo": {
                    "lat": faker.address.latitude(),
                    "lng": faker.address.longitude()
                }
            },
            "phone": faker.phone.phoneNumber(),
            "website": faker.internet.domainName(),
            "company": {
                "name": faker.company.companyName(),
                "catchPhrase": faker.company.catchPhrase(),
                "bs": faker.company.bs()
            },
            "posts": [
                {
                    "words": faker.lorem.words(),
                    "sentence": faker.lorem.sentence(),
                    "sentences": faker.lorem.sentences(),
                    "paragraph": faker.lorem.paragraph()
                },
                {
                    "words": faker.lorem.words(),
                    "sentence": faker.lorem.sentence(),
                    "sentences": faker.lorem.sentences(),
                    "paragraph": faker.lorem.paragraph()
                },
                {
                    "words": faker.lorem.words(),
                    "sentence": faker.lorem.sentence(),
                    "sentences": faker.lorem.sentences(),
                    "paragraph": faker.lorem.paragraph()
                }
            ],
            "accountHistory": [
                faker.helpers.createTransaction(),
                faker.helpers.createTransaction(),
                faker.helpers.createTransaction()
            ]
        };
    };
    /**
   * contextualCard
   *
   * @method faker.helpers.contextualCard
   */ self.contextualCard = function() {
        var name = faker.name.firstName(), userName = faker.internet.userName(name);
        return {
            "name": name,
            "username": userName,
            "avatar": faker.internet.avatar(),
            "email": faker.internet.email(userName),
            "dob": faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)")),
            "phone": faker.phone.phoneNumber(),
            "address": {
                "street": faker.address.streetName(true),
                "suite": faker.address.secondaryAddress(),
                "city": faker.address.city(),
                "zipcode": faker.address.zipCode(),
                "geo": {
                    "lat": faker.address.latitude(),
                    "lng": faker.address.longitude()
                }
            },
            "website": faker.internet.domainName(),
            "company": {
                "name": faker.company.companyName(),
                "catchPhrase": faker.company.catchPhrase(),
                "bs": faker.company.bs()
            }
        };
    };
    /**
   * userCard
   *
   * @method faker.helpers.userCard
   */ self.userCard = function() {
        return {
            "name": faker.name.findName(),
            "username": faker.internet.userName(),
            "email": faker.internet.email(),
            "address": {
                "street": faker.address.streetName(true),
                "suite": faker.address.secondaryAddress(),
                "city": faker.address.city(),
                "zipcode": faker.address.zipCode(),
                "geo": {
                    "lat": faker.address.latitude(),
                    "lng": faker.address.longitude()
                }
            },
            "phone": faker.phone.phoneNumber(),
            "website": faker.internet.domainName(),
            "company": {
                "name": faker.company.companyName(),
                "catchPhrase": faker.company.catchPhrase(),
                "bs": faker.company.bs()
            }
        };
    };
    /**
   * createTransaction
   *
   * @method faker.helpers.createTransaction
   */ self.createTransaction = function() {
        return {
            "amount": faker.finance.amount(),
            "date": new Date(2012, 1, 2),
            "business": faker.company.companyName(),
            "name": [
                faker.finance.accountName(),
                faker.finance.mask()
            ].join(' '),
            "type": self.randomize(faker.definitions.finance.transaction_type),
            "account": faker.finance.account()
        };
    };
    return self;
};
/*
String.prototype.capitalize = function () { //v1.0
    return this.replace(/\w+/g, function (a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};
*/ module['exports'] = Helpers;

},{}],"g3ERX":[function(require,module,exports) {
/**
 *
 * @namespace faker.name
 */ function Name(faker) {
    /**
   * firstName
   *
   * @method firstName
   * @param {mixed} gender
   * @memberof faker.name
   */ this.firstName = function(gender) {
        if (typeof faker.definitions.name.male_first_name !== "undefined" && typeof faker.definitions.name.female_first_name !== "undefined") {
            // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
            // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
            if (typeof gender === 'string') {
                if (gender.toLowerCase() === 'male') gender = 0;
                else if (gender.toLowerCase() === 'female') gender = 1;
            }
            if (typeof gender !== 'number') {
                if (typeof faker.definitions.name.first_name === "undefined") gender = faker.datatype.number(1);
                else //Fall back to non-gendered names if they exist and gender wasn't specified
                return faker.random.arrayElement(faker.definitions.name.first_name);
            }
            if (gender === 0) return faker.random.arrayElement(faker.definitions.name.male_first_name);
            else return faker.random.arrayElement(faker.definitions.name.female_first_name);
        }
        return faker.random.arrayElement(faker.definitions.name.first_name);
    };
    /**
   * lastName
   *
   * @method lastName
   * @param {mixed} gender
   * @memberof faker.name
   */ this.lastName = function(gender) {
        if (typeof faker.definitions.name.male_last_name !== "undefined" && typeof faker.definitions.name.female_last_name !== "undefined") {
            // some locale datasets ( like ru ) have last_name split by gender. i have no idea how last names can have genders, but also i do not speak russian
            // see above comment of firstName method
            if (typeof gender !== 'number') gender = faker.datatype.number(1);
            if (gender === 0) return faker.random.arrayElement(faker.locales[faker.locale].name.male_last_name);
            else return faker.random.arrayElement(faker.locales[faker.locale].name.female_last_name);
        }
        return faker.random.arrayElement(faker.definitions.name.last_name);
    };
    /**
   * middleName
   *
   * @method middleName
   * @param {mixed} gender
   * @memberof faker.name
   */ this.middleName = function(gender) {
        if (typeof faker.definitions.name.male_middle_name !== "undefined" && typeof faker.definitions.name.female_middle_name !== "undefined") {
            if (typeof gender !== 'number') gender = faker.datatype.number(1);
            if (gender === 0) return faker.random.arrayElement(faker.locales[faker.locale].name.male_middle_name);
            else return faker.random.arrayElement(faker.locales[faker.locale].name.female_middle_name);
        }
        return faker.random.arrayElement(faker.definitions.name.middle_name);
    };
    /**
   * findName
   *
   * @method findName
   * @param {string} firstName
   * @param {string} lastName
   * @param {mixed} gender
   * @memberof faker.name
   */ this.findName = function(firstName, lastName, gender) {
        var r = faker.datatype.number(8);
        var prefix, suffix;
        // in particular locales first and last names split by gender,
        // thus we keep consistency by passing 0 as male and 1 as female
        if (typeof gender !== 'number') gender = faker.datatype.number(1);
        firstName = firstName || faker.name.firstName(gender);
        lastName = lastName || faker.name.lastName(gender);
        switch(r){
            case 0:
                prefix = faker.name.prefix(gender);
                if (prefix) return prefix + " " + firstName + " " + lastName;
            case 1:
                suffix = faker.name.suffix(gender);
                if (suffix) return firstName + " " + lastName + " " + suffix;
        }
        return firstName + " " + lastName;
    };
    /**
   * jobTitle
   *
   * @method jobTitle
   * @memberof faker.name
   */ this.jobTitle = function() {
        return faker.name.jobDescriptor() + " " + faker.name.jobArea() + " " + faker.name.jobType();
    };
    /**
   * gender
   *
   * @method gender
   * @memberof faker.name
   */ this.gender = function(binary) {
        if (binary) return faker.random.arrayElement(faker.definitions.name.binary_gender);
        else return faker.random.arrayElement(faker.definitions.name.gender);
    };
    /**
   * prefix
   *
   * @method prefix
   * @param {mixed} gender
   * @memberof faker.name
   */ this.prefix = function(gender) {
        if (typeof faker.definitions.name.male_prefix !== "undefined" && typeof faker.definitions.name.female_prefix !== "undefined") {
            if (typeof gender !== 'number') gender = faker.datatype.number(1);
            if (gender === 0) return faker.random.arrayElement(faker.locales[faker.locale].name.male_prefix);
            else return faker.random.arrayElement(faker.locales[faker.locale].name.female_prefix);
        }
        return faker.random.arrayElement(faker.definitions.name.prefix);
    };
    /**
   * suffix
   *
   * @method suffix
   * @memberof faker.name
   */ this.suffix = function() {
        return faker.random.arrayElement(faker.definitions.name.suffix);
    };
    /**
   * title
   *
   * @method title
   * @memberof faker.name
   */ this.title = function() {
        var descriptor = faker.random.arrayElement(faker.definitions.name.title.descriptor), level = faker.random.arrayElement(faker.definitions.name.title.level), job = faker.random.arrayElement(faker.definitions.name.title.job);
        return descriptor + " " + level + " " + job;
    };
    /**
   * jobDescriptor
   *
   * @method jobDescriptor
   * @memberof faker.name
   */ this.jobDescriptor = function() {
        return faker.random.arrayElement(faker.definitions.name.title.descriptor);
    };
    /**
   * jobArea
   *
   * @method jobArea
   * @memberof faker.name
   */ this.jobArea = function() {
        return faker.random.arrayElement(faker.definitions.name.title.level);
    };
    /**
   * jobType
   *
   * @method jobType
   * @memberof faker.name
   */ this.jobType = function() {
        return faker.random.arrayElement(faker.definitions.name.title.job);
    };
}
module['exports'] = Name;

},{}],"dyNkQ":[function(require,module,exports) {
/**
 *
 * @namespace faker.address
 */ function Address(faker) {
    var f = faker.fake, Helpers = faker.helpers;
    /**
   * Generates random zipcode from format. If format is not specified, the
   * locale's zip format is used.
   *
   * @method faker.address.zipCode
   * @param {String} format
   */ this.zipCode = function(format) {
        // if zip format is not specified, use the zip format defined for the locale
        if (typeof format === 'undefined') {
            var localeFormat = faker.definitions.address.postcode;
            if (typeof localeFormat === 'string') format = localeFormat;
            else format = faker.random.arrayElement(localeFormat);
        }
        return Helpers.replaceSymbols(format);
    };
    /**
   * Generates random zipcode from state abbreviation. If state abbreviation is
   * not specified, a random zip code is generated according to the locale's zip format.
   * Only works for locales with postcode_by_state definition. If a locale does not
   * have a postcode_by_state definition, a random zip code is generated according
   * to the locale's zip format.
   *
   * @method faker.address.zipCodeByState
   * @param {String} state
   */ this.zipCodeByState = function(state) {
        var zipRange = faker.definitions.address.postcode_by_state[state];
        if (zipRange) return faker.datatype.number(zipRange);
        return faker.address.zipCode();
    };
    /**
   * Generates a random localized city name. The format string can contain any
   * method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in
   * order to build the city name.
   *
   * If no format string is provided one of the following is randomly used:
   *
   * * `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
   * * `{{address.cityPrefix}} {{name.firstName}}`
   * * `{{name.firstName}}{{address.citySuffix}}`
   * * `{{name.lastName}}{{address.citySuffix}}`
   * * `{{address.cityName}}` when city name is available
   *
   * @method faker.address.city
   * @param {String} format
   */ this.city = function(format) {
        var formats = [
            '{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}',
            '{{address.cityPrefix}} {{name.firstName}}',
            '{{name.firstName}}{{address.citySuffix}}',
            '{{name.lastName}}{{address.citySuffix}}'
        ];
        if (!format && faker.definitions.address.city_name) formats.push('{{address.cityName}}');
        if (typeof format !== "number") format = faker.datatype.number(formats.length - 1);
        return f(formats[format]);
    };
    /**
   * Return a random localized city prefix
   * @method faker.address.cityPrefix
   */ this.cityPrefix = function() {
        return faker.random.arrayElement(faker.definitions.address.city_prefix);
    };
    /**
   * Return a random localized city suffix
   *
   * @method faker.address.citySuffix
   */ this.citySuffix = function() {
        return faker.random.arrayElement(faker.definitions.address.city_suffix);
    };
    /**
   * Returns a random city name
   * 
   * @method faker.address.cityName
   */ this.cityName = function() {
        return faker.random.arrayElement(faker.definitions.address.city_name);
    };
    /**
   * Returns a random localized street name
   *
   * @method faker.address.streetName
   */ this.streetName = function() {
        var result;
        var suffix = faker.address.streetSuffix();
        if (suffix !== "") suffix = " " + suffix;
        switch(faker.datatype.number(1)){
            case 0:
                result = faker.name.lastName() + suffix;
                break;
            case 1:
                result = faker.name.firstName() + suffix;
                break;
        }
        return result;
    };
    //
    // TODO: change all these methods that accept a boolean to instead accept an options hash.
    //
    /**
   * Returns a random localized street address
   *
   * @method faker.address.streetAddress
   * @param {Boolean} useFullAddress
   */ this.streetAddress = function(useFullAddress) {
        if (useFullAddress === undefined) useFullAddress = false;
        var address = "";
        switch(faker.datatype.number(2)){
            case 0:
                address = Helpers.replaceSymbolWithNumber("#####") + " " + faker.address.streetName();
                break;
            case 1:
                address = Helpers.replaceSymbolWithNumber("####") + " " + faker.address.streetName();
                break;
            case 2:
                address = Helpers.replaceSymbolWithNumber("###") + " " + faker.address.streetName();
                break;
        }
        return useFullAddress ? address + " " + faker.address.secondaryAddress() : address;
    };
    /**
   * streetSuffix
   *
   * @method faker.address.streetSuffix
   */ this.streetSuffix = function() {
        return faker.random.arrayElement(faker.definitions.address.street_suffix);
    };
    /**
   * streetPrefix
   *
   * @method faker.address.streetPrefix
   */ this.streetPrefix = function() {
        return faker.random.arrayElement(faker.definitions.address.street_prefix);
    };
    /**
   * secondaryAddress
   *
   * @method faker.address.secondaryAddress
   */ this.secondaryAddress = function() {
        return Helpers.replaceSymbolWithNumber(faker.random.arrayElement([
            'Apt. ###',
            'Suite ###'
        ]));
    };
    /**
   * county
   *
   * @method faker.address.county
   */ this.county = function() {
        return faker.random.arrayElement(faker.definitions.address.county);
    };
    /**
   * country
   *
   * @method faker.address.country
   */ this.country = function() {
        return faker.random.arrayElement(faker.definitions.address.country);
    };
    /**
   * countryCode
   *
   * @method faker.address.countryCode
   * @param {string} alphaCode default alpha-2
   */ this.countryCode = function(alphaCode) {
        if (typeof alphaCode === 'undefined' || alphaCode === 'alpha-2') return faker.random.arrayElement(faker.definitions.address.country_code);
        if (alphaCode === 'alpha-3') return faker.random.arrayElement(faker.definitions.address.country_code_alpha_3);
        return faker.random.arrayElement(faker.definitions.address.country_code);
    };
    /**
   * state
   *
   * @method faker.address.state
   * @param {Boolean} useAbbr
   */ this.state = function(useAbbr) {
        return faker.random.arrayElement(faker.definitions.address.state);
    };
    /**
   * stateAbbr
   *
   * @method faker.address.stateAbbr
   */ this.stateAbbr = function() {
        return faker.random.arrayElement(faker.definitions.address.state_abbr);
    };
    /**
   * latitude
   *
   * @method faker.address.latitude
   * @param {Double} max default is 90
   * @param {Double} min default is -90
   * @param {number} precision default is 4
   */ this.latitude = function(max, min, precision) {
        max = max || 90;
        min = min || -90;
        precision = precision || 4;
        return faker.datatype.number({
            max: max,
            min: min,
            precision: parseFloat(0..toPrecision(precision) + '1')
        }).toFixed(precision);
    };
    /**
   * longitude
   *
   * @method faker.address.longitude
   * @param {Double} max default is 180
   * @param {Double} min default is -180
   * @param {number} precision default is 4
   */ this.longitude = function(max, min, precision) {
        max = max || 180;
        min = min || -180;
        precision = precision || 4;
        return faker.datatype.number({
            max: max,
            min: min,
            precision: parseFloat(0..toPrecision(precision) + '1')
        }).toFixed(precision);
    };
    /**
   *  direction
   *
   * @method faker.address.direction
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */ this.direction = function(useAbbr) {
        if (typeof useAbbr === 'undefined' || useAbbr === false) return faker.random.arrayElement(faker.definitions.address.direction);
        return faker.random.arrayElement(faker.definitions.address.direction_abbr);
    };
    this.direction.schema = {
        "description": "Generates a direction. Use optional useAbbr bool to return abbreviation",
        "sampleResults": [
            "Northwest",
            "South",
            "SW",
            "E"
        ]
    };
    /**
   * cardinal direction
   *
   * @method faker.address.cardinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */ this.cardinalDirection = function(useAbbr) {
        if (typeof useAbbr === 'undefined' || useAbbr === false) return faker.random.arrayElement(faker.definitions.address.direction.slice(0, 4));
        return faker.random.arrayElement(faker.definitions.address.direction_abbr.slice(0, 4));
    };
    this.cardinalDirection.schema = {
        "description": "Generates a cardinal direction. Use optional useAbbr boolean to return abbreviation",
        "sampleResults": [
            "North",
            "South",
            "E",
            "W"
        ]
    };
    /**
   * ordinal direction
   *
   * @method faker.address.ordinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */ this.ordinalDirection = function(useAbbr) {
        if (typeof useAbbr === 'undefined' || useAbbr === false) return faker.random.arrayElement(faker.definitions.address.direction.slice(4, 8));
        return faker.random.arrayElement(faker.definitions.address.direction_abbr.slice(4, 8));
    };
    this.ordinalDirection.schema = {
        "description": "Generates an ordinal direction. Use optional useAbbr boolean to return abbreviation",
        "sampleResults": [
            "Northwest",
            "Southeast",
            "SW",
            "NE"
        ]
    };
    this.nearbyGPSCoordinate = function(coordinate, radius, isMetric) {
        function randomFloat(min, max) {
            return Math.random() * (max - min) + min;
        }
        function degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        }
        function radiansToDegrees(radians) {
            return radians * (180 / Math.PI);
        }
        function kilometersToMiles(miles) {
            return miles * 0.621371;
        }
        function coordinateWithOffset(coordinate, bearing, distance, isMetric) {
            var R = 6378.137; // Radius of the Earth (http://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html)
            var d = isMetric ? distance : kilometersToMiles(distance); // Distance in km
            var lat1 = degreesToRadians(coordinate[0]); //Current lat point converted to radians
            var lon1 = degreesToRadians(coordinate[1]); //Current long point converted to radians
            var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(bearing));
            var lon2 = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
            // Keep longitude in range [-180, 180]
            if (lon2 > degreesToRadians(180)) lon2 = lon2 - degreesToRadians(360);
            else if (lon2 < degreesToRadians(-180)) lon2 = lon2 + degreesToRadians(360);
            return [
                radiansToDegrees(lat2),
                radiansToDegrees(lon2)
            ];
        }
        // If there is no coordinate, the best we can do is return a random GPS coordinate.
        if (coordinate === undefined) return [
            faker.address.latitude(),
            faker.address.longitude()
        ];
        radius = radius || 10;
        isMetric = isMetric || false;
        // TODO: implement either a gaussian/uniform distribution of points in cicular region.
        // Possibly include param to function that allows user to choose between distributions.
        // This approach will likely result in a higher density of points near the center.
        var randomCoord = coordinateWithOffset(coordinate, degreesToRadians(Math.random() * 360), radius, isMetric);
        return [
            randomCoord[0].toFixed(4),
            randomCoord[1].toFixed(4)
        ];
    };
    /**
     * Return a random time zone
     * @method faker.address.timeZone
     */ this.timeZone = function() {
        return faker.random.arrayElement(faker.definitions.address.time_zone);
    };
    return this;
}
module.exports = Address;

},{}],"3MxpH":[function(require,module,exports) {
/**
 *
 * @namespace faker.animal
 */ var Animal = function(faker) {
    var self = this;
    /**
   * dog
   *
   * @method faker.animal.dog
   */ self.dog = function() {
        return faker.random.arrayElement(faker.definitions.animal.dog);
    };
    /**
   * cat
   *
   * @method faker.animal.cat
   */ self.cat = function() {
        return faker.random.arrayElement(faker.definitions.animal.cat);
    };
    /**
   * snake  
   *
   * @method faker.animal.snake
   */ self.snake = function() {
        return faker.random.arrayElement(faker.definitions.animal.snake);
    };
    /**
   * bear  
   *
   * @method faker.animal.bear
   */ self.bear = function() {
        return faker.random.arrayElement(faker.definitions.animal.bear);
    };
    /**
   * lion  
   *
   * @method faker.animal.lion
   */ self.lion = function() {
        return faker.random.arrayElement(faker.definitions.animal.lion);
    };
    /**
   * cetacean  
   *
   * @method faker.animal.cetacean
   */ self.cetacean = function() {
        return faker.random.arrayElement(faker.definitions.animal.cetacean);
    };
    /**
   * horse 
   *
   * @method faker.animal.horse
   */ self.horse = function() {
        return faker.random.arrayElement(faker.definitions.animal.horse);
    };
    /**
   * bird
   *
   * @method faker.animal.bird
   */ self.bird = function() {
        return faker.random.arrayElement(faker.definitions.animal.bird);
    };
    /**
   * cow 
   *
   * @method faker.animal.cow
   */ self.cow = function() {
        return faker.random.arrayElement(faker.definitions.animal.cow);
    };
    /**
   * fish
   *
   * @method faker.animal.fish
   */ self.fish = function() {
        return faker.random.arrayElement(faker.definitions.animal.fish);
    };
    /**
   * crocodilia
   *
   * @method faker.animal.crocodilia
   */ self.crocodilia = function() {
        return faker.random.arrayElement(faker.definitions.animal.crocodilia);
    };
    /**
   * insect  
   *
   * @method faker.animal.insect
   */ self.insect = function() {
        return faker.random.arrayElement(faker.definitions.animal.insect);
    };
    /**
   * rabbit 
   *
   * @method faker.animal.rabbit
   */ self.rabbit = function() {
        return faker.random.arrayElement(faker.definitions.animal.rabbit);
    };
    /**
   * type 
   *
   * @method faker.animal.type
   */ self.type = function() {
        return faker.random.arrayElement(faker.definitions.animal.type);
    };
    return self;
};
module['exports'] = Animal;

},{}],"d3FeR":[function(require,module,exports) {
/**
 *
 * @namespace faker.company
 */ var Company = function(faker) {
    var self = this;
    var f = faker.fake;
    /**
   * suffixes
   *
   * @method faker.company.suffixes
   */ this.suffixes = function() {
        // Don't want the source array exposed to modification, so return a copy
        return faker.definitions.company.suffix.slice(0);
    };
    /**
   * companyName
   *
   * @method faker.company.companyName
   * @param {string} format
   */ this.companyName = function(format) {
        var formats = [
            '{{name.lastName}} {{company.companySuffix}}',
            '{{name.lastName}} - {{name.lastName}}',
            '{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'
        ];
        if (typeof format !== "number") format = faker.datatype.number(formats.length - 1);
        return f(formats[format]);
    };
    /**
   * companySuffix
   *
   * @method faker.company.companySuffix
   */ this.companySuffix = function() {
        return faker.random.arrayElement(faker.company.suffixes());
    };
    /**
   * catchPhrase
   *
   * @method faker.company.catchPhrase
   */ this.catchPhrase = function() {
        return f('{{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}} {{company.catchPhraseNoun}}');
    };
    /**
   * bs
   *
   * @method faker.company.bs
   */ this.bs = function() {
        return f('{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}');
    };
    /**
   * catchPhraseAdjective
   *
   * @method faker.company.catchPhraseAdjective
   */ this.catchPhraseAdjective = function() {
        return faker.random.arrayElement(faker.definitions.company.adjective);
    };
    /**
   * catchPhraseDescriptor
   *
   * @method faker.company.catchPhraseDescriptor
   */ this.catchPhraseDescriptor = function() {
        return faker.random.arrayElement(faker.definitions.company.descriptor);
    };
    /**
   * catchPhraseNoun
   *
   * @method faker.company.catchPhraseNoun
   */ this.catchPhraseNoun = function() {
        return faker.random.arrayElement(faker.definitions.company.noun);
    };
    /**
   * bsAdjective
   *
   * @method faker.company.bsAdjective
   */ this.bsAdjective = function() {
        return faker.random.arrayElement(faker.definitions.company.bs_adjective);
    };
    /**
   * bsBuzz
   *
   * @method faker.company.bsBuzz
   */ this.bsBuzz = function() {
        return faker.random.arrayElement(faker.definitions.company.bs_verb);
    };
    /**
   * bsNoun
   *
   * @method faker.company.bsNoun
   */ this.bsNoun = function() {
        return faker.random.arrayElement(faker.definitions.company.bs_noun);
    };
};
module['exports'] = Company;

},{}],"iGcTZ":[function(require,module,exports) {
/**
 * @namespace faker.finance
 */ var Finance = function(faker) {
    var ibanLib = require("./iban");
    var Helpers = faker.helpers, self = this;
    /**
   * account
   *
   * @method faker.finance.account
   * @param {number} length
   */ self.account = function(length) {
        length = length || 8;
        var template = '';
        for(var i = 0; i < length; i++)template = template + '#';
        length = null;
        return Helpers.replaceSymbolWithNumber(template);
    };
    /**
   * accountName
   *
   * @method faker.finance.accountName
   */ self.accountName = function() {
        return [
            Helpers.randomize(faker.definitions.finance.account_type),
            'Account'
        ].join(' ');
    };
    /**
   * routingNumber
   *
   * @method faker.finance.routingNumber
   */ self.routingNumber = function() {
        var routingNumber = Helpers.replaceSymbolWithNumber('########');
        // Modules 10 straight summation.
        var sum = 0;
        for(var i = 0; i < routingNumber.length; i += 3){
            sum += Number(routingNumber[i]) * 3;
            sum += Number(routingNumber[i + 1]) * 7;
            sum += Number(routingNumber[i + 2]) || 0;
        }
        return routingNumber + (Math.ceil(sum / 10) * 10 - sum);
    };
    /**
   * mask
   *
   * @method faker.finance.mask
   * @param {number} length
   * @param {boolean} parens
   * @param {boolean} ellipsis
   */ self.mask = function(length, parens, ellipsis) {
        //set defaults
        length = length == 0 || !length || typeof length == 'undefined' ? 4 : length;
        parens = parens === null ? true : parens;
        ellipsis = ellipsis === null ? true : ellipsis;
        //create a template for length
        var template = '';
        for(var i = 0; i < length; i++)template = template + '#';
        //prefix with ellipsis
        template = ellipsis ? [
            '...',
            template
        ].join('') : template;
        template = parens ? [
            '(',
            template,
            ')'
        ].join('') : template;
        //generate random numbers
        template = Helpers.replaceSymbolWithNumber(template);
        return template;
    };
    //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
    //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol
    /**
   * amount
   *
   * @method faker.finance.amount
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */ self.amount = function(min, max, dec, symbol, autoFormat) {
        min = min || 0;
        max = max || 1000;
        dec = dec === undefined ? 2 : dec;
        symbol = symbol || '';
        const randValue = faker.datatype.number({
            max: max,
            min: min,
            precision: Math.pow(10, -dec)
        });
        var formattedString;
        if (autoFormat) formattedString = randValue.toLocaleString(undefined, {
            minimumFractionDigits: dec
        });
        else formattedString = randValue.toFixed(dec);
        return symbol + formattedString;
    };
    /**
   * transactionType
   *
   * @method faker.finance.transactionType
   */ self.transactionType = function() {
        return Helpers.randomize(faker.definitions.finance.transaction_type);
    };
    /**
   * currencyCode
   *
   * @method faker.finance.currencyCode
   */ self.currencyCode = function() {
        return faker.random.objectElement(faker.definitions.finance.currency)['code'];
    };
    /**
   * currencyName
   *
   * @method faker.finance.currencyName
   */ self.currencyName = function() {
        return faker.random.objectElement(faker.definitions.finance.currency, 'key');
    };
    /**
   * currencySymbol
   *
   * @method faker.finance.currencySymbol
   */ self.currencySymbol = function() {
        var symbol;
        while(!symbol)symbol = faker.random.objectElement(faker.definitions.finance.currency)['symbol'];
        return symbol;
    };
    /**
   * bitcoinAddress
   *
   * @method  faker.finance.bitcoinAddress
   */ self.bitcoinAddress = function() {
        var addressLength = faker.datatype.number({
            min: 25,
            max: 34
        });
        var address = faker.random.arrayElement([
            '1',
            '3'
        ]);
        for(var i = 0; i < addressLength - 1; i++)address += faker.random.arrayElement('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''));
        return address;
    };
    /**
 * litecoinAddress
 *
 * @method  faker.finance.litecoinAddress
 */ self.litecoinAddress = function() {
        var addressLength = faker.datatype.number({
            min: 26,
            max: 33
        });
        var address = faker.random.arrayElement([
            'L',
            'M',
            '3'
        ]);
        for(var i = 0; i < addressLength - 1; i++)address += faker.random.arrayElement('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'.split(''));
        return address;
    };
    /**
   * Credit card number
   * @method faker.finance.creditCardNumber
   * @param {string} provider | scheme
  */ self.creditCardNumber = function(provider) {
        provider = provider || "";
        var format, formats;
        var localeFormat = faker.definitions.finance.credit_card;
        if (provider in localeFormat) {
            formats = localeFormat[provider]; // there chould be multiple formats
            if (typeof formats === "string") format = formats;
            else format = faker.random.arrayElement(formats);
        } else if (provider.match(/#/)) format = provider;
        else {
            if (typeof localeFormat === 'string') format = localeFormat;
            else if (typeof localeFormat === "object") {
                // Credit cards are in a object structure
                formats = faker.random.objectElement(localeFormat, "value"); // There chould be multiple formats
                if (typeof formats === "string") format = formats;
                else format = faker.random.arrayElement(formats);
            }
        }
        format = format.replace(/\//g, "");
        return Helpers.replaceCreditCardSymbols(format);
    };
    /**
   * Credit card CVV
   * @method faker.finance.creditCardCVV
  */ self.creditCardCVV = function() {
        var cvv = "";
        for(var i = 0; i < 3; i++)cvv += faker.datatype.number({
            max: 9
        }).toString();
        return cvv;
    };
    /**
   * ethereumAddress
   *
   * @method  faker.finance.ethereumAddress
   */ self.ethereumAddress = function() {
        var address = faker.datatype.hexaDecimal(40).toLowerCase();
        return address;
    };
    /**
   * iban
   *
   * @param {boolean} [formatted=false] - Return a formatted version of the generated IBAN.
   * @param {string} [countryCode] - The country code from which you want to generate an IBAN, if none is provided a random country will be used.
   * @throws Will throw an error if the passed country code is not supported.
   *
   * @method  faker.finance.iban
   */ self.iban = function(formatted, countryCode) {
        var ibanFormat;
        if (countryCode) {
            var findFormat = function(currentFormat) {
                return currentFormat.country === countryCode;
            };
            ibanFormat = ibanLib.formats.find(findFormat);
        } else ibanFormat = faker.random.arrayElement(ibanLib.formats);
        if (!ibanFormat) throw new Error('Country code ' + countryCode + ' not supported.');
        var s = "";
        var count = 0;
        for(var b = 0; b < ibanFormat.bban.length; b++){
            var bban = ibanFormat.bban[b];
            var c = bban.count;
            count += bban.count;
            while(c > 0){
                if (bban.type == "a") s += faker.random.arrayElement(ibanLib.alpha);
                else if (bban.type == "c") {
                    if (faker.datatype.number(100) < 80) s += faker.datatype.number(9);
                    else s += faker.random.arrayElement(ibanLib.alpha);
                } else if (c >= 3 && faker.datatype.number(100) < 30) {
                    if (faker.datatype.boolean()) {
                        s += faker.random.arrayElement(ibanLib.pattern100);
                        c -= 2;
                    } else {
                        s += faker.random.arrayElement(ibanLib.pattern10);
                        c--;
                    }
                } else s += faker.datatype.number(9);
                c--;
            }
            s = s.substring(0, count);
        }
        var checksum = 98 - ibanLib.mod97(ibanLib.toDigitString(s + ibanFormat.country + "00"));
        if (checksum < 10) checksum = "0" + checksum;
        var iban = ibanFormat.country + checksum + s;
        return formatted ? iban.match(/.{1,4}/g).join(" ") : iban;
    };
    /**
   * bic
   *
   * @method  faker.finance.bic
   */ self.bic = function() {
        var vowels = [
            "A",
            "E",
            "I",
            "O",
            "U"
        ];
        var prob = faker.datatype.number(100);
        return Helpers.replaceSymbols("???") + faker.random.arrayElement(vowels) + faker.random.arrayElement(ibanLib.iso3166) + Helpers.replaceSymbols("?") + "1" + (prob < 10 ? Helpers.replaceSymbols("?" + faker.random.arrayElement(vowels) + "?") : prob < 40 ? Helpers.replaceSymbols("###") : "");
    };
    /**
   * description
   *
   * @method  faker.finance.transactionDescription
   */ self.transactionDescription = function() {
        var transaction = Helpers.createTransaction();
        var account = transaction.account;
        var amount = transaction.amount;
        var transactionType = transaction.type;
        var company = transaction.business;
        var card = faker.finance.mask();
        var currency = faker.finance.currencyCode();
        return transactionType + " transaction at " + company + " using card ending with ***" + card + " for " + currency + " " + amount + " in account ***" + account;
    };
};
module['exports'] = Finance;

},{"./iban":"eR5pn"}],"eR5pn":[function(require,module,exports) {
module["exports"] = {
    alpha: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ],
    pattern10: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09"
    ],
    pattern100: [
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009"
    ],
    toDigitString: function(str) {
        return str.replace(/[A-Z]/gi, function(match) {
            return match.toUpperCase().charCodeAt(0) - 55;
        });
    },
    mod97: function(digitStr) {
        var m = 0;
        for(var i = 0; i < digitStr.length; i++)m = (m * 10 + (digitStr[i] | 0)) % 97;
        return m;
    },
    formats: [
        {
            country: "AL",
            total: 28,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "c",
                    count: 16
                }
            ],
            format: "ALkk bbbs sssx cccc cccc cccc cccc"
        },
        {
            country: "AD",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "c",
                    count: 12
                }
            ],
            format: "ADkk bbbb ssss cccc cccc cccc"
        },
        {
            country: "AT",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "n",
                    count: 11
                }
            ],
            format: "ATkk bbbb bccc cccc cccc"
        },
        {
            // Azerbaijan
            // https://transferwise.com/fr/iban/azerbaijan
            // Length 28
            // BBAN 2c,16n
            // GEkk bbbb cccc cccc cccc cccc cccc
            // b = National bank code (alpha)
            // c = Account number
            // example IBAN AZ21 NABZ 0000 0000 1370 1000 1944
            country: "AZ",
            total: 28,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 20
                }
            ],
            format: "AZkk bbbb cccc cccc cccc cccc cccc"
        },
        {
            country: "BH",
            total: 22,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 14
                }
            ],
            format: "BHkk bbbb cccc cccc cccc cc"
        },
        {
            country: "BE",
            total: 16,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 9
                }
            ],
            format: "BEkk bbbc cccc ccxx"
        },
        {
            country: "BA",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "BAkk bbbs sscc cccc ccxx"
        },
        {
            country: "BR",
            total: 29,
            bban: [
                {
                    type: "n",
                    count: 13
                },
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "a",
                    count: 1
                },
                {
                    type: "c",
                    count: 1
                }
            ],
            format: "BRkk bbbb bbbb ssss sccc cccc ccct n"
        },
        {
            country: "BG",
            total: 22,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "c",
                    count: 8
                }
            ],
            format: "BGkk bbbb ssss ddcc cccc cc"
        },
        {
            country: "CR",
            total: 21,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 14
                }
            ],
            format: "CRkk bbbc cccc cccc cccc c"
        },
        {
            country: "HR",
            total: 21,
            bban: [
                {
                    type: "n",
                    count: 7
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "HRkk bbbb bbbc cccc cccc c"
        },
        {
            country: "CY",
            total: 28,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "c",
                    count: 16
                }
            ],
            format: "CYkk bbbs ssss cccc cccc cccc cccc"
        },
        {
            country: "CZ",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "CZkk bbbb ssss sscc cccc cccc"
        },
        {
            country: "DK",
            total: 18,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "DKkk bbbb cccc cccc cc"
        },
        {
            country: "DO",
            total: 28,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 20
                }
            ],
            format: "DOkk bbbb cccc cccc cccc cccc cccc"
        },
        {
            country: "TL",
            total: 23,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "TLkk bbbc cccc cccc cccc cxx"
        },
        {
            country: "EE",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 12
                }
            ],
            format: "EEkk bbss cccc cccc cccx"
        },
        {
            country: "FO",
            total: 18,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "FOkk bbbb cccc cccc cx"
        },
        {
            country: "FI",
            total: 18,
            bban: [
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 8
                }
            ],
            format: "FIkk bbbb bbcc cccc cx"
        },
        {
            country: "FR",
            total: 27,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "c",
                    count: 11
                },
                {
                    type: "n",
                    count: 2
                }
            ],
            format: "FRkk bbbb bggg ggcc cccc cccc cxx"
        },
        {
            country: "GE",
            total: 22,
            bban: [
                {
                    type: "a",
                    count: 2
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "GEkk bbcc cccc cccc cccc cc"
        },
        {
            country: "DE",
            total: 22,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "DEkk bbbb bbbb cccc cccc cc"
        },
        {
            country: "GI",
            total: 23,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 15
                }
            ],
            format: "GIkk bbbb cccc cccc cccc ccc"
        },
        {
            country: "GR",
            total: 27,
            bban: [
                {
                    type: "n",
                    count: 7
                },
                {
                    type: "c",
                    count: 16
                }
            ],
            format: "GRkk bbbs sssc cccc cccc cccc ccc"
        },
        {
            country: "GL",
            total: 18,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "GLkk bbbb cccc cccc cc"
        },
        {
            country: "GT",
            total: 28,
            bban: [
                {
                    type: "c",
                    count: 4
                },
                {
                    type: "c",
                    count: 4
                },
                {
                    type: "c",
                    count: 16
                }
            ],
            format: "GTkk bbbb mmtt cccc cccc cccc cccc"
        },
        {
            country: "HU",
            total: 28,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "HUkk bbbs sssk cccc cccc cccc cccx"
        },
        {
            country: "IS",
            total: 26,
            bban: [
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "ISkk bbbb sscc cccc iiii iiii ii"
        },
        {
            country: "IE",
            total: 22,
            bban: [
                {
                    type: "c",
                    count: 4
                },
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 8
                }
            ],
            format: "IEkk aaaa bbbb bbcc cccc cc"
        },
        {
            country: "IL",
            total: 23,
            bban: [
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 13
                }
            ],
            format: "ILkk bbbn nncc cccc cccc ccc"
        },
        {
            country: "IT",
            total: 27,
            bban: [
                {
                    type: "a",
                    count: 1
                },
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "c",
                    count: 12
                }
            ],
            format: "ITkk xaaa aabb bbbc cccc cccc ccc"
        },
        {
            country: "JO",
            total: 30,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 18
                }
            ],
            format: "JOkk bbbb nnnn cccc cccc cccc cccc cc"
        },
        {
            country: "KZ",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "c",
                    count: 13
                }
            ],
            format: "KZkk bbbc cccc cccc cccc"
        },
        {
            country: "XK",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 12
                }
            ],
            format: "XKkk bbbb cccc cccc cccc"
        },
        {
            country: "KW",
            total: 30,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 22
                }
            ],
            format: "KWkk bbbb cccc cccc cccc cccc cccc cc"
        },
        {
            country: "LV",
            total: 21,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 13
                }
            ],
            format: "LVkk bbbb cccc cccc cccc c"
        },
        {
            country: "LB",
            total: 28,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "c",
                    count: 20
                }
            ],
            format: "LBkk bbbb cccc cccc cccc cccc cccc"
        },
        {
            country: "LI",
            total: 21,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "c",
                    count: 12
                }
            ],
            format: "LIkk bbbb bccc cccc cccc c"
        },
        {
            country: "LT",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "n",
                    count: 11
                }
            ],
            format: "LTkk bbbb bccc cccc cccc"
        },
        {
            country: "LU",
            total: 20,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "c",
                    count: 13
                }
            ],
            format: "LUkk bbbc cccc cccc cccc"
        },
        {
            country: "MK",
            total: 19,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "c",
                    count: 10
                },
                {
                    type: "n",
                    count: 2
                }
            ],
            format: "MKkk bbbc cccc cccc cxx"
        },
        {
            country: "MT",
            total: 31,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "c",
                    count: 18
                }
            ],
            format: "MTkk bbbb ssss sccc cccc cccc cccc ccc"
        },
        {
            country: "MR",
            total: 27,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "n",
                    count: 13
                }
            ],
            format: "MRkk bbbb bsss sscc cccc cccc cxx"
        },
        {
            country: "MU",
            total: 30,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 15
                },
                {
                    type: "a",
                    count: 3
                }
            ],
            format: "MUkk bbbb bbss cccc cccc cccc 000d dd"
        },
        {
            country: "MC",
            total: 27,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "c",
                    count: 11
                },
                {
                    type: "n",
                    count: 2
                }
            ],
            format: "MCkk bbbb bsss sscc cccc cccc cxx"
        },
        {
            country: "MD",
            total: 24,
            bban: [
                {
                    type: "c",
                    count: 2
                },
                {
                    type: "c",
                    count: 18
                }
            ],
            format: "MDkk bbcc cccc cccc cccc cccc"
        },
        {
            country: "ME",
            total: 22,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 15
                }
            ],
            format: "MEkk bbbc cccc cccc cccc xx"
        },
        {
            country: "NL",
            total: 18,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "NLkk bbbb cccc cccc cc"
        },
        {
            country: "NO",
            total: 15,
            bban: [
                {
                    type: "n",
                    count: 4
                },
                {
                    type: "n",
                    count: 7
                }
            ],
            format: "NOkk bbbb cccc ccx"
        },
        {
            country: "PK",
            total: 24,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "PKkk bbbb cccc cccc cccc cccc"
        },
        {
            country: "PS",
            total: 29,
            bban: [
                {
                    type: "c",
                    count: 4
                },
                {
                    type: "n",
                    count: 9
                },
                {
                    type: "n",
                    count: 12
                }
            ],
            format: "PSkk bbbb xxxx xxxx xccc cccc cccc c"
        },
        {
            country: "PL",
            total: 28,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "PLkk bbbs sssx cccc cccc cccc cccc"
        },
        {
            country: "PT",
            total: 25,
            bban: [
                {
                    type: "n",
                    count: 8
                },
                {
                    type: "n",
                    count: 13
                }
            ],
            format: "PTkk bbbb ssss cccc cccc cccx x"
        },
        {
            country: "QA",
            total: 29,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 21
                }
            ],
            format: "QAkk bbbb cccc cccc cccc cccc cccc c"
        },
        {
            country: "RO",
            total: 24,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "c",
                    count: 16
                }
            ],
            format: "ROkk bbbb cccc cccc cccc cccc"
        },
        {
            country: "SM",
            total: 27,
            bban: [
                {
                    type: "a",
                    count: 1
                },
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "c",
                    count: 12
                }
            ],
            format: "SMkk xaaa aabb bbbc cccc cccc ccc"
        },
        {
            country: "SA",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 2
                },
                {
                    type: "c",
                    count: 18
                }
            ],
            format: "SAkk bbcc cccc cccc cccc cccc"
        },
        {
            country: "RS",
            total: 22,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 15
                }
            ],
            format: "RSkk bbbc cccc cccc cccc xx"
        },
        {
            country: "SK",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "SKkk bbbb ssss sscc cccc cccc"
        },
        {
            country: "SI",
            total: 19,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "SIkk bbss sccc cccc cxx"
        },
        {
            country: "ES",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 10
                },
                {
                    type: "n",
                    count: 10
                }
            ],
            format: "ESkk bbbb gggg xxcc cccc cccc"
        },
        {
            country: "SE",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 17
                }
            ],
            format: "SEkk bbbc cccc cccc cccc cccc"
        },
        {
            country: "CH",
            total: 21,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "c",
                    count: 12
                }
            ],
            format: "CHkk bbbb bccc cccc cccc c"
        },
        {
            country: "TN",
            total: 24,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "n",
                    count: 15
                }
            ],
            format: "TNkk bbss sccc cccc cccc cccc"
        },
        {
            country: "TR",
            total: 26,
            bban: [
                {
                    type: "n",
                    count: 5
                },
                {
                    type: "n",
                    count: 1
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "TRkk bbbb bxcc cccc cccc cccc cc"
        },
        {
            country: "AE",
            total: 23,
            bban: [
                {
                    type: "n",
                    count: 3
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "AEkk bbbc cccc cccc cccc ccc"
        },
        {
            country: "GB",
            total: 22,
            bban: [
                {
                    type: "a",
                    count: 4
                },
                {
                    type: "n",
                    count: 6
                },
                {
                    type: "n",
                    count: 8
                }
            ],
            format: "GBkk bbbb ssss sscc cccc cc"
        },
        {
            country: "VG",
            total: 24,
            bban: [
                {
                    type: "c",
                    count: 4
                },
                {
                    type: "n",
                    count: 16
                }
            ],
            format: "VGkk bbbb cccc cccc cccc cccc"
        }
    ],
    iso3166: [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AN",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BU",
        "BV",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CE",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CP",
        "CR",
        "CS",
        "CS",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DD",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "EU",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "FX",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NT",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SU",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "YE",
        "YT",
        "YU",
        "ZA",
        "ZM",
        "ZR",
        "ZW"
    ]
};

},{}],"9YwOh":[function(require,module,exports) {
/**
 *
 * @namespace faker.image
 * @property {object} lorempixel - faker.image.lorempixel
 * @property {object} unsplash - faker.image.unsplash
 * @property {object} unsplash - faker.image.lorempicsum
 * @default Default provider is unsplash image provider
 */ var Image = function(faker) {
    var self = this;
    var Lorempixel = require('./image_providers/lorempixel');
    var Unsplash = require('./image_providers/unsplash');
    var LoremPicsum = require('./image_providers/lorempicsum');
    /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.image
   */ self.image = function(width, height, randomize) {
        var categories = [
            "abstract",
            "animals",
            "business",
            "cats",
            "city",
            "food",
            "nightlife",
            "fashion",
            "people",
            "nature",
            "sports",
            "technics",
            "transport"
        ];
        return self[faker.random.arrayElement(categories)](width, height, randomize);
    };
    /**
   * avatar
   *
   * @method faker.image.avatar
   */ self.avatar = function() {
        return faker.internet.avatar();
    };
    /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @method faker.image.imageUrl
   */ self.imageUrl = function(width, height, category, randomize, https) {
        var width = width || 640;
        var height = height || 480;
        var protocol = 'http://';
        if (typeof https !== 'undefined' && https === true) protocol = 'https://';
        var url = protocol + 'placeimg.com/' + width + '/' + height;
        if (typeof category !== 'undefined') url += '/' + category;
        if (randomize) url += '?' + faker.datatype.number();
        return url;
    };
    /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.abstract
   */ self.abstract = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'abstract', randomize);
    };
    /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.animals
   */ self.animals = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'animals', randomize);
    };
    /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.business
   */ self.business = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'business', randomize);
    };
    /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.cats
   */ self.cats = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'cats', randomize);
    };
    /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.city
   */ self.city = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'city', randomize);
    };
    /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.food
   */ self.food = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'food', randomize);
    };
    /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.nightlife
   */ self.nightlife = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'nightlife', randomize);
    };
    /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.fashion
   */ self.fashion = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'fashion', randomize);
    };
    /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.people
   */ self.people = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'people', randomize);
    };
    /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.nature
   */ self.nature = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'nature', randomize);
    };
    /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.sports
   */ self.sports = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'sports', randomize);
    };
    /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.technics
   */ self.technics = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'technics', randomize);
    };
    /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.transport
   */ self.transport = function(width, height, randomize) {
        return faker.image.imageUrl(width, height, 'transport', randomize);
    };
    /**
   * dataUri
   *
   * @param {number} width
   * @param {number} height
   * @param {string} color
   * @method faker.image.dataUri
   */ self.dataUri = function(width, height, color) {
        color = color || 'grey';
        var svgString = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="' + width + '" height="' + height + '"><rect width="100%" height="100%" fill="' + color + '"/><text x="' + width / 2 + '" y="' + height / 2 + '" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">' + width + 'x' + height + '</text></svg>';
        var rawPrefix = 'data:image/svg+xml;charset=UTF-8,';
        return rawPrefix + encodeURIComponent(svgString);
    };
    self.lorempixel = new Lorempixel(faker);
    self.unsplash = new Unsplash(faker);
    self.lorempicsum = new LoremPicsum(faker);
// Object.assign(self, self.unsplash);
// How to set default as unsplash? should be image.default?
};
module["exports"] = Image;

},{"./image_providers/lorempixel":"kUaMi","./image_providers/unsplash":"1TCXD","./image_providers/lorempicsum":"kLYsN"}],"kUaMi":[function(require,module,exports) {
/**
 *
 * @namespace lorempixel
 * @memberof faker.image
 */ var Lorempixel = function(faker) {
    var self = this;
    /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.image
   */ self.image = function(width, height, randomize) {
        var categories = [
            "abstract",
            "animals",
            "business",
            "cats",
            "city",
            "food",
            "nightlife",
            "fashion",
            "people",
            "nature",
            "sports",
            "technics",
            "transport"
        ];
        return self[faker.random.arrayElement(categories)](width, height, randomize);
    };
    /**
   * avatar
   *
   * @method faker.image.lorempixel.avatar
   */ self.avatar = function() {
        return faker.internet.avatar();
    };
    /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @method faker.image.lorempixel.imageUrl
   */ self.imageUrl = function(width, height, category, randomize) {
        var width = width || 640;
        var height = height || 480;
        var url = 'https://lorempixel.com/' + width + '/' + height;
        if (typeof category !== 'undefined') url += '/' + category;
        if (randomize) url += '?' + faker.datatype.number();
        return url;
    };
    /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.abstract
   */ self.abstract = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'abstract', randomize);
    };
    /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.animals
   */ self.animals = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'animals', randomize);
    };
    /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.business
   */ self.business = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'business', randomize);
    };
    /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.cats
   */ self.cats = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'cats', randomize);
    };
    /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.city
   */ self.city = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'city', randomize);
    };
    /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.food
   */ self.food = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'food', randomize);
    };
    /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nightlife
   */ self.nightlife = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'nightlife', randomize);
    };
    /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.fashion
   */ self.fashion = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'fashion', randomize);
    };
    /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.people
   */ self.people = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'people', randomize);
    };
    /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nature
   */ self.nature = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'nature', randomize);
    };
    /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.sports
   */ self.sports = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'sports', randomize);
    };
    /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.technics
   */ self.technics = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'technics', randomize);
    };
    /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.transport
   */ self.transport = function(width, height, randomize) {
        return faker.image.lorempixel.imageUrl(width, height, 'transport', randomize);
    };
};
module["exports"] = Lorempixel;

},{}],"1TCXD":[function(require,module,exports) {
/**
 *
 * @namespace unsplash
 * @memberof faker.image
 */ var Unsplash = function(faker) {
    var self = this;
    var categories = [
        "food",
        "nature",
        "people",
        "technology",
        "objects",
        "buildings"
    ];
    /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.image
   * @description search image from unsplash
   */ self.image = function(width, height, keyword) {
        return self.imageUrl(width, height, undefined, keyword);
    };
    /**
   * avatar
   *
   * @method faker.image.unsplash.avatar
   */ self.avatar = function() {
        return faker.internet.avatar();
    };
    /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {string} keyword
   * @method faker.image.unsplash.imageUrl
   */ self.imageUrl = function(width, height, category, keyword) {
        var width = width || 640;
        var height = height || 480;
        var url = 'https://source.unsplash.com';
        if (typeof category !== 'undefined') url += '/category/' + category;
        url += '/' + width + 'x' + height;
        if (typeof keyword !== 'undefined') {
            var keywordFormat = new RegExp('^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$');
            if (keywordFormat.test(keyword)) url += '?' + keyword;
        }
        return url;
    };
    /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.food
   */ self.food = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'food', keyword);
    };
    /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.people
   */ self.people = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'people', keyword);
    };
    /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.nature
   */ self.nature = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'nature', keyword);
    };
    /**
   * technology
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.technology
   */ self.technology = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'technology', keyword);
    };
    /**
   * objects
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.objects
   */ self.objects = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'objects', keyword);
    };
    /**
   * buildings
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.buildings
   */ self.buildings = function(width, height, keyword) {
        return faker.image.unsplash.imageUrl(width, height, 'buildings', keyword);
    };
};
module["exports"] = Unsplash;

},{}],"kLYsN":[function(require,module,exports) {
/**
 *
 * @namespace lorempicsum
 * @memberof faker.image
 */ var LoremPicsum = function(faker) {
    var self = this;
    /**
     * image
     *
     * @param {number} width
     * @param {number} height
     * @param {boolean} grayscale
     * @param {number} blur 1-10
     * @method faker.image.lorempicsum.image
     * @description search image from unsplash
     */ self.image = function(width, height, grayscale, blur) {
        return self.imageUrl(width, height, grayscale, blur);
    };
    /**
     * imageGrayscaled
     *
     * @param {number} width
     * @param {number} height
     * @param {boolean} grayscale
     * @method faker.image.lorempicsum.imageGrayscaled
     * @description search grayscale image from unsplash
     */ self.imageGrayscale = function(width, height, grayscale) {
        return self.imageUrl(width, height, grayscale);
    };
    /**
     * imageBlurred
     *
     * @param {number} width
     * @param {number} height
     * @param {number} blur 1-10
     * @method faker.image.lorempicsum.imageBlurred
     * @description search blurred image from unsplash
     */ self.imageBlurred = function(width, height, blur) {
        return self.imageUrl(width, height, undefined, blur);
    };
    /**
     * imageRandomSeeded
     *
     * @param {number} width
     * @param {number} height
     * @param {boolean} grayscale
     * @param {number} blur 1-10
     * @param {string} seed
     * @method faker.image.lorempicsum.imageRandomSeeded
     * @description search same random image from unsplash, based on a seed
     */ self.imageRandomSeeded = function(width, height, grayscale, blur, seed) {
        return self.imageUrl(width, height, grayscale, blur, seed);
    };
    /**
     * avatar
     *
     * @method faker.image.lorempicsum.avatar
     */ self.avatar = function() {
        return faker.internet.avatar();
    };
    /**
     * imageUrl
     *
     * @param {number} width
     * @param {number} height
     * @param {boolean} grayscale
     * @param {number} blur 1-10
     * @param {string} seed
     * @method faker.image.lorempicsum.imageUrl
     */ self.imageUrl = function(width, height, grayscale, blur, seed) {
        var width = width || 640;
        var height = height || 480;
        var url = 'https://picsum.photos';
        if (seed) url += '/seed/' + seed;
        url += '/' + width + '/' + height;
        if (grayscale && blur) return url + '?grayscale' + '&blur=' + blur;
        if (grayscale) return url + '?grayscale';
        if (blur) return url + '?blur=' + blur;
        return url;
    };
};
module["exports"] = LoremPicsum;

},{}],"9tWvg":[function(require,module,exports) {
/**
 *
 * @namespace faker.lorem
 */ var Lorem = function(faker) {
    var self = this;
    var Helpers = faker.helpers;
    /**
   * generates a word of a specified length
   *
   * @method faker.lorem.word
   * @param {number} length length of the word that should be returned. Defaults to a random length
   */ self.word = function(length) {
        var hasRightLength = function(word) {
            return word.length === length;
        };
        var properLengthWords;
        if (typeof length === 'undefined') properLengthWords = faker.definitions.lorem.words;
        else properLengthWords = faker.definitions.lorem.words.filter(hasRightLength);
        return faker.random.arrayElement(properLengthWords);
    };
    /**
   * generates a space separated list of words
   *
   * @method faker.lorem.words
   * @param {number} num number of words, defaults to 3
   */ self.words = function(num) {
        if (typeof num == 'undefined') num = 3;
        var words = [];
        for(var i = 0; i < num; i++)words.push(faker.lorem.word());
        return words.join(' ');
    };
    /**
   * sentence
   *
   * @method faker.lorem.sentence
   * @param {number} wordCount defaults to a random number between 3 and 10
   * @param {number} range
   */ self.sentence = function(wordCount, range) {
        if (typeof wordCount == 'undefined') wordCount = faker.datatype.number({
            min: 3,
            max: 10
        });
        // if (typeof range == 'undefined') { range = 7; }
        // strange issue with the node_min_test failing for captialize, please fix and add faker.lorem.back
        //return  faker.lorem.words(wordCount + Helpers.randomNumber(range)).join(' ').capitalize();
        var sentence = faker.lorem.words(wordCount);
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    };
    /**
   * slug
   *
   * @method faker.lorem.slug
   * @param {number} wordCount number of words, defaults to 3
   */ self.slug = function(wordCount) {
        var words = faker.lorem.words(wordCount);
        return Helpers.slugify(words);
    };
    /**
   * sentences
   *
   * @method faker.lorem.sentences
   * @param {number} sentenceCount defautls to a random number between 2 and 6
   * @param {string} separator defaults to `' '`
   */ self.sentences = function(sentenceCount, separator) {
        if (typeof sentenceCount === 'undefined') sentenceCount = faker.datatype.number({
            min: 2,
            max: 6
        });
        if (typeof separator == 'undefined') separator = " ";
        var sentences = [];
        for(; sentenceCount > 0; sentenceCount--)sentences.push(faker.lorem.sentence());
        return sentences.join(separator);
    };
    /**
   * paragraph
   *
   * @method faker.lorem.paragraph
   * @param {number} sentenceCount defaults to 3
   */ self.paragraph = function(sentenceCount) {
        if (typeof sentenceCount == 'undefined') sentenceCount = 3;
        return faker.lorem.sentences(sentenceCount + faker.datatype.number(3));
    };
    /**
   * paragraphs
   *
   * @method faker.lorem.paragraphs
   * @param {number} paragraphCount defaults to 3
   * @param {string} separator defaults to `'\n \r'`
   */ self.paragraphs = function(paragraphCount, separator) {
        if (typeof separator === "undefined") separator = "\n \r";
        if (typeof paragraphCount == 'undefined') paragraphCount = 3;
        var paragraphs = [];
        for(; paragraphCount > 0; paragraphCount--)paragraphs.push(faker.lorem.paragraph());
        return paragraphs.join(separator);
    };
    /**
   * returns random text based on a random lorem method
   *
   * @method faker.lorem.text
   * @param {number} times
   */ self.text = function loremText(times) {
        var loremMethods = [
            'lorem.word',
            'lorem.words',
            'lorem.sentence',
            'lorem.sentences',
            'lorem.paragraph',
            'lorem.paragraphs',
            'lorem.lines'
        ];
        var randomLoremMethod = faker.random.arrayElement(loremMethods);
        return faker.fake('{{' + randomLoremMethod + '}}');
    };
    /**
   * returns lines of lorem separated by `'\n'`
   *
   * @method faker.lorem.lines
   * @param {number} lineCount defaults to a random number between 1 and 5
   */ self.lines = function lines(lineCount) {
        if (typeof lineCount === 'undefined') lineCount = faker.datatype.number({
            min: 1,
            max: 5
        });
        return faker.lorem.sentences(lineCount, '\n');
    };
    return self;
};
module["exports"] = Lorem;

},{}],"2jMFP":[function(require,module,exports) {
/**
 *
 * @namespace faker.hacker
 */ var Hacker = function(faker) {
    var self = this;
    /**
   * abbreviation
   *
   * @method faker.hacker.abbreviation
   */ self.abbreviation = function() {
        return faker.random.arrayElement(faker.definitions.hacker.abbreviation);
    };
    /**
   * adjective
   *
   * @method faker.hacker.adjective
   */ self.adjective = function() {
        return faker.random.arrayElement(faker.definitions.hacker.adjective);
    };
    /**
   * noun
   *
   * @method faker.hacker.noun
   */ self.noun = function() {
        return faker.random.arrayElement(faker.definitions.hacker.noun);
    };
    /**
   * verb
   *
   * @method faker.hacker.verb
   */ self.verb = function() {
        return faker.random.arrayElement(faker.definitions.hacker.verb);
    };
    /**
   * ingverb
   *
   * @method faker.hacker.ingverb
   */ self.ingverb = function() {
        return faker.random.arrayElement(faker.definitions.hacker.ingverb);
    };
    /**
   * phrase
   *
   * @method faker.hacker.phrase
   */ self.phrase = function() {
        var data = {
            abbreviation: self.abbreviation,
            adjective: self.adjective,
            ingverb: self.ingverb,
            noun: self.noun,
            verb: self.verb
        };
        var phrase = faker.random.arrayElement(faker.definitions.hacker.phrase);
        return faker.helpers.mustache(phrase, data);
    };
    return self;
};
module['exports'] = Hacker;

},{}],"9EOSC":[function(require,module,exports) {
var random_ua = require('../vendor/user-agent');
/**
 *
 * @namespace faker.internet
 */ var Internet = function(faker) {
    var self = this;
    /**
   * avatar
   *
   * @method faker.internet.avatar
   */ self.avatar = function() {
        return 'https://cdn.fakercloud.com/avatars/' + faker.random.arrayElement(faker.definitions.internet.avatar_uri);
    };
    self.avatar.schema = {
        "description": "Generates a URL for an avatar.",
        "sampleResults": [
            "https://cdn.fakercloud.com/avatars/sydlawrence_128.jpg"
        ]
    };
    /**
   * email
   *
   * @method faker.internet.email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} provider
   */ self.email = function(firstName, lastName, provider) {
        provider = provider || faker.random.arrayElement(faker.definitions.internet.free_email);
        return faker.helpers.slugify(faker.internet.userName(firstName, lastName)) + "@" + provider;
    };
    self.email.schema = {
        "description": "Generates a valid email address based on optional input criteria",
        "sampleResults": [
            "foo.bar@gmail.com"
        ],
        "properties": {
            "firstName": {
                "type": "string",
                "required": false,
                "description": "The first name of the user"
            },
            "lastName": {
                "type": "string",
                "required": false,
                "description": "The last name of the user"
            },
            "provider": {
                "type": "string",
                "required": false,
                "description": "The domain of the user"
            }
        }
    };
    /**
   * exampleEmail
   *
   * @method faker.internet.exampleEmail
   * @param {string} firstName
   * @param {string} lastName
   */ self.exampleEmail = function(firstName, lastName) {
        var provider = faker.random.arrayElement(faker.definitions.internet.example_email);
        return self.email(firstName, lastName, provider);
    };
    /**
   * userName
   *
   * @method faker.internet.userName
   * @param {string} firstName
   * @param {string} lastName
   */ self.userName = function(firstName, lastName) {
        var result;
        firstName = firstName || faker.name.firstName();
        lastName = lastName || faker.name.lastName();
        switch(faker.datatype.number(2)){
            case 0:
                result = firstName + faker.datatype.number(99);
                break;
            case 1:
                result = firstName + faker.random.arrayElement([
                    ".",
                    "_"
                ]) + lastName;
                break;
            case 2:
                result = firstName + faker.random.arrayElement([
                    ".",
                    "_"
                ]) + lastName + faker.datatype.number(99);
                break;
        }
        result = result.toString().replace(/'/g, "");
        result = result.replace(/ /g, "");
        return result;
    };
    self.userName.schema = {
        "description": "Generates a username based on one of several patterns. The pattern is chosen randomly.",
        "sampleResults": [
            "Kirstin39",
            "Kirstin.Smith",
            "Kirstin.Smith39",
            "KirstinSmith",
            "KirstinSmith39", 
        ],
        "properties": {
            "firstName": {
                "type": "string",
                "required": false,
                "description": "The first name of the user"
            },
            "lastName": {
                "type": "string",
                "required": false,
                "description": "The last name of the user"
            }
        }
    };
    /**
   * protocol
   *
   * @method faker.internet.protocol
   */ self.protocol = function() {
        var protocols = [
            'http',
            'https'
        ];
        return faker.random.arrayElement(protocols);
    };
    self.protocol.schema = {
        "description": "Randomly generates http or https",
        "sampleResults": [
            "https",
            "http"
        ]
    };
    /**
   * method
   *
   * @method faker.internet.httpMethod
   */ self.httpMethod = function() {
        var httpMethods = [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'PATCH'
        ];
        return faker.random.arrayElement(httpMethods);
    };
    self.httpMethod.schema = {
        "description": "Randomly generates HTTP Methods (GET, POST, PUT, DELETE, PATCH)",
        "sampleResults": [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "PATCH"
        ]
    };
    /**
   * url
   *
   * @method faker.internet.url
   */ self.url = function() {
        return faker.internet.protocol() + '://' + faker.internet.domainName();
    };
    self.url.schema = {
        "description": "Generates a random URL. The URL could be secure or insecure.",
        "sampleResults": [
            "http://rashawn.name",
            "https://rashawn.name"
        ]
    };
    /**
   * domainName
   *
   * @method faker.internet.domainName
   */ self.domainName = function() {
        return faker.internet.domainWord() + "." + faker.internet.domainSuffix();
    };
    self.domainName.schema = {
        "description": "Generates a random domain name.",
        "sampleResults": [
            "marvin.org"
        ]
    };
    /**
   * domainSuffix
   *
   * @method faker.internet.domainSuffix
   */ self.domainSuffix = function() {
        return faker.random.arrayElement(faker.definitions.internet.domain_suffix);
    };
    self.domainSuffix.schema = {
        "description": "Generates a random domain suffix.",
        "sampleResults": [
            "net"
        ]
    };
    /**
   * domainWord
   *
   * @method faker.internet.domainWord
   */ self.domainWord = function() {
        return faker.name.firstName().replace(/([\\~#&*{}/:<>?|\"'])/ig, '').toLowerCase();
    };
    self.domainWord.schema = {
        "description": "Generates a random domain word.",
        "sampleResults": [
            "alyce"
        ]
    };
    /**
   * ip
   *
   * @method faker.internet.ip
   */ self.ip = function() {
        var randNum = function() {
            return faker.datatype.number(255).toFixed(0);
        };
        var result = [];
        for(var i = 0; i < 4; i++)result[i] = randNum();
        return result.join(".");
    };
    self.ip.schema = {
        "description": "Generates a random IP.",
        "sampleResults": [
            "97.238.241.11"
        ]
    };
    /**
   * ipv6
   *
   * @method faker.internet.ipv6
   */ self.ipv6 = function() {
        var randHash = function() {
            var result = "";
            for(var i = 0; i < 4; i++)result += faker.random.arrayElement([
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f"
            ]);
            return result;
        };
        var result = [];
        for(var i = 0; i < 8; i++)result[i] = randHash();
        return result.join(":");
    };
    self.ipv6.schema = {
        "description": "Generates a random IPv6 address.",
        "sampleResults": [
            "2001:0db8:6276:b1a7:5213:22f1:25df:c8a0"
        ]
    };
    /**
   * port
   * 
   * @method faker.internet.port
   */ self.port = function() {
        return faker.datatype.number({
            min: 0,
            max: 65535
        });
    };
    self.port.schema = {
        "description": "Generates a random port number.",
        "sampleResults": [
            "4422"
        ]
    };
    /**
   * userAgent
   *
   * @method faker.internet.userAgent
   */ self.userAgent = function() {
        return random_ua.generate(faker);
    };
    self.userAgent.schema = {
        "description": "Generates a random user agent.",
        "sampleResults": [
            "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_5 rv:6.0; SL) AppleWebKit/532.0.1 (KHTML, like Gecko) Version/7.1.6 Safari/532.0.1"
        ]
    };
    /**
   * color
   *
   * @method faker.internet.color
   * @param {number} baseRed255
   * @param {number} baseGreen255
   * @param {number} baseBlue255
   */ self.color = function(baseRed255, baseGreen255, baseBlue255) {
        baseRed255 = baseRed255 || 0;
        baseGreen255 = baseGreen255 || 0;
        baseBlue255 = baseBlue255 || 0;
        // based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
        var red = Math.floor((faker.datatype.number(256) + baseRed255) / 2);
        var green = Math.floor((faker.datatype.number(256) + baseGreen255) / 2);
        var blue = Math.floor((faker.datatype.number(256) + baseBlue255) / 2);
        var redStr = red.toString(16);
        var greenStr = green.toString(16);
        var blueStr = blue.toString(16);
        return '#' + (redStr.length === 1 ? '0' : '') + redStr + (greenStr.length === 1 ? '0' : '') + greenStr + (blueStr.length === 1 ? '0' : '') + blueStr;
    };
    self.color.schema = {
        "description": "Generates a random hexadecimal color.",
        "sampleResults": [
            "#06267f"
        ],
        "properties": {
            "baseRed255": {
                "type": "number",
                "required": false,
                "description": "The red value. Valid values are 0 - 255."
            },
            "baseGreen255": {
                "type": "number",
                "required": false,
                "description": "The green value. Valid values are 0 - 255."
            },
            "baseBlue255": {
                "type": "number",
                "required": false,
                "description": "The blue value. Valid values are 0 - 255."
            }
        }
    };
    /**
   * mac
   *
   * @method faker.internet.mac
   * @param {string} sep
   */ self.mac = function(sep) {
        var i, mac = "", validSep = ':';
        // if the client passed in a different separator than `:`, 
        // we will use it if it is in the list of acceptable separators (dash or no separator)
        if ([
            '-',
            ''
        ].indexOf(sep) !== -1) validSep = sep;
        for(i = 0; i < 12; i++){
            mac += faker.datatype.number(15).toString(16);
            if (i % 2 == 1 && i != 11) mac += validSep;
        }
        return mac;
    };
    self.mac.schema = {
        "description": "Generates a random mac address.",
        "sampleResults": [
            "78:06:cc:ae:b3:81"
        ]
    };
    /**
   * password
   *
   * @method faker.internet.password
   * @param {number} len
   * @param {boolean} memorable
   * @param {string} pattern
   * @param {string} prefix
   */ self.password = function(len, memorable, pattern, prefix) {
        len = len || 15;
        if (typeof memorable === "undefined") memorable = false;
        /*
      * password-generator ( function )
      * Copyright(c) 2011-2013 Bermi Ferrer <bermi@bermilabs.com>
      * MIT Licensed
      */ var consonant, letter, vowel;
        letter = /[a-zA-Z]$/;
        vowel = /[aeiouAEIOU]$/;
        consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/;
        var _password = function(length, memorable, pattern, prefix) {
            var char, n;
            if (length == null) length = 10;
            if (memorable == null) memorable = true;
            if (pattern == null) pattern = /\w/;
            if (prefix == null) prefix = '';
            if (prefix.length >= length) return prefix;
            if (memorable) {
                if (prefix.match(consonant)) pattern = vowel;
                else pattern = consonant;
            }
            n = faker.datatype.number(94) + 33;
            char = String.fromCharCode(n);
            if (memorable) char = char.toLowerCase();
            if (!char.match(pattern)) return _password(length, memorable, pattern, prefix);
            return _password(length, memorable, pattern, "" + prefix + char);
        };
        return _password(len, memorable, pattern, prefix);
    };
    self.password.schema = {
        "description": "Generates a random password.",
        "sampleResults": [
            "AM7zl6Mg",
            "susejofe"
        ],
        "properties": {
            "length": {
                "type": "number",
                "required": false,
                "description": "The number of characters in the password."
            },
            "memorable": {
                "type": "boolean",
                "required": false,
                "description": "Whether a password should be easy to remember."
            },
            "pattern": {
                "type": "regex",
                "required": false,
                "description": "A regex to match each character of the password against. This parameter will be negated if the memorable setting is turned on."
            },
            "prefix": {
                "type": "string",
                "required": false,
                "description": "A value to prepend to the generated password. The prefix counts towards the length of the password."
            }
        }
    };
};
module["exports"] = Internet;

},{"../vendor/user-agent":"gvDdv"}],"gvDdv":[function(require,module,exports) {
/*

Copyright (c) 2012-2014 Jeffrey Mealo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

------------------------------------------------------------------------------------------------------------------------

Based loosely on Luka Pusic's PHP Script: http://360percents.com/posts/php-random-user-agent-generator/

The license for that script is as follows:

"THE BEER-WARE LICENSE" (Revision 42):

<pusic93@gmail.com> wrote this file. As long as you retain this notice you can do whatever you want with this stuff.
If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. Luka Pusic

*/ exports.generate = function generate(faker) {
    function rnd(a, b) {
        //calling rnd() with no arguments is identical to rnd(0, 100)
        a = a || 0;
        b = b || 100;
        if (typeof b === 'number' && typeof a === 'number') // 9/2018 - Added faker random to ensure mersenne and seed
        return faker.datatype.number({
            min: a,
            max: b
        });
        if (Object.prototype.toString.call(a) === "[object Array]") //returns a random element from array (a), even weighting
        return faker.random.arrayElement(a);
        if (a && typeof a === 'object') //returns a random key from the passed object; keys are weighted by the decimal probability in their value
        return (function(obj) {
            var rand = rnd(0, 100) / 100, min = 0, max = 0, key, return_val;
            for(key in obj)if (obj.hasOwnProperty(key)) {
                max = obj[key] + min;
                return_val = key;
                if (rand >= min && rand <= max) break;
                min = min + obj[key];
            }
            return return_val;
        })(a);
        throw new TypeError('Invalid arguments passed to rnd. (' + (b ? a + ', ' + b : a) + ')');
    }
    function randomLang() {
        return rnd([
            'AB',
            'AF',
            'AN',
            'AR',
            'AS',
            'AZ',
            'BE',
            'BG',
            'BN',
            'BO',
            'BR',
            'BS',
            'CA',
            'CE',
            'CO',
            'CS',
            'CU',
            'CY',
            'DA',
            'DE',
            'EL',
            'EN',
            'EO',
            'ES',
            'ET',
            'EU',
            'FA',
            'FI',
            'FJ',
            'FO',
            'FR',
            'FY',
            'GA',
            'GD',
            'GL',
            'GV',
            'HE',
            'HI',
            'HR',
            'HT',
            'HU',
            'HY',
            'ID',
            'IS',
            'IT',
            'JA',
            'JV',
            'KA',
            'KG',
            'KO',
            'KU',
            'KW',
            'KY',
            'LA',
            'LB',
            'LI',
            'LN',
            'LT',
            'LV',
            'MG',
            'MK',
            'MN',
            'MO',
            'MS',
            'MT',
            'MY',
            'NB',
            'NE',
            'NL',
            'NN',
            'NO',
            'OC',
            'PL',
            'PT',
            'RM',
            'RO',
            'RU',
            'SC',
            'SE',
            'SK',
            'SL',
            'SO',
            'SQ',
            'SR',
            'SV',
            'SW',
            'TK',
            'TR',
            'TY',
            'UK',
            'UR',
            'UZ',
            'VI',
            'VO',
            'YI',
            'ZH'
        ]);
    }
    function randomBrowserAndOS() {
        var browser = rnd({
            chrome: 0.45132810566,
            iexplorer: 0.27477061836,
            firefox: 0.19384170608,
            safari: 0.06186781118,
            opera: 0.01574236955
        }), os = {
            chrome: {
                win: 0.89,
                mac: 0.09,
                lin: 0.02
            },
            firefox: {
                win: 0.83,
                mac: 0.16,
                lin: 0.01
            },
            opera: {
                win: 0.91,
                mac: 0.03,
                lin: 0.06
            },
            safari: {
                win: 0.04,
                mac: 0.96
            },
            iexplorer: [
                'win'
            ]
        };
        return [
            browser,
            rnd(os[browser])
        ];
    }
    function randomProc(arch) {
        var procs = {
            lin: [
                'i686',
                'x86_64'
            ],
            mac: {
                'Intel': 0.48,
                'PPC': 0.01,
                'U; Intel': 0.48,
                'U; PPC': 0.01
            },
            win: [
                '',
                'WOW64',
                'Win64; x64'
            ]
        };
        return rnd(procs[arch]);
    }
    function randomRevision(dots) {
        var return_val = '';
        //generate a random revision
        //dots = 2 returns .x.y where x & y are between 0 and 9
        for(var x = 0; x < dots; x++)return_val += '.' + rnd(0, 9);
        return return_val;
    }
    var version_string = {
        net: function() {
            return [
                rnd(1, 4),
                rnd(0, 9),
                rnd(10000, 99999),
                rnd(0, 9)
            ].join('.');
        },
        nt: function() {
            return rnd(5, 6) + '.' + rnd(0, 3);
        },
        ie: function() {
            return rnd(7, 11);
        },
        trident: function() {
            return rnd(3, 7) + '.' + rnd(0, 1);
        },
        osx: function(delim) {
            return [
                10,
                rnd(5, 10),
                rnd(0, 9)
            ].join(delim || '.');
        },
        chrome: function() {
            return [
                rnd(13, 39),
                0,
                rnd(800, 899),
                0
            ].join('.');
        },
        presto: function() {
            return '2.9.' + rnd(160, 190);
        },
        presto2: function() {
            return rnd(10, 12) + '.00';
        },
        safari: function() {
            return rnd(531, 538) + '.' + rnd(0, 2) + '.' + rnd(0, 2);
        }
    };
    var browser = {
        firefox: function firefox(arch) {
            //https://developer.mozilla.org/en-US/docs/Gecko_user_agent_string_reference
            var firefox_ver = rnd(5, 15) + randomRevision(2), gecko_ver = 'Gecko/20100101 Firefox/' + firefox_ver, proc = randomProc(arch), os_ver = arch === 'win' ? '(Windows NT ' + version_string.nt() + (proc ? '; ' + proc : '') : arch === 'mac' ? '(Macintosh; ' + proc + ' Mac OS X ' + version_string.osx() : '(X11; Linux ' + proc;
            return 'Mozilla/5.0 ' + os_ver + '; rv:' + firefox_ver.slice(0, -2) + ') ' + gecko_ver;
        },
        iexplorer: function iexplorer() {
            var ver = version_string.ie();
            if (ver >= 11) //http://msdn.microsoft.com/en-us/library/ie/hh869301(v=vs.85).aspx
            return 'Mozilla/5.0 (Windows NT 6.' + rnd(1, 3) + '; Trident/7.0; ' + rnd([
                'Touch; ',
                ''
            ]) + 'rv:11.0) like Gecko';
            //http://msdn.microsoft.com/en-us/library/ie/ms537503(v=vs.85).aspx
            return 'Mozilla/5.0 (compatible; MSIE ' + ver + '.0; Windows NT ' + version_string.nt() + '; Trident/' + version_string.trident() + (rnd(0, 1) === 1 ? '; .NET CLR ' + version_string.net() : '') + ')';
        },
        opera: function opera(arch) {
            //http://www.opera.com/docs/history/
            var presto_ver = ' Presto/' + version_string.presto() + ' Version/' + version_string.presto2() + ')', os_ver = arch === 'win' ? '(Windows NT ' + version_string.nt() + '; U; ' + randomLang() + presto_ver : arch === 'lin' ? '(X11; Linux ' + randomProc(arch) + '; U; ' + randomLang() + presto_ver : '(Macintosh; Intel Mac OS X ' + version_string.osx() + ' U; ' + randomLang() + ' Presto/' + version_string.presto() + ' Version/' + version_string.presto2() + ')';
            return 'Opera/' + rnd(9, 14) + '.' + rnd(0, 99) + ' ' + os_ver;
        },
        safari: function safari(arch) {
            var safari = version_string.safari(), ver = rnd(4, 7) + '.' + rnd(0, 1) + '.' + rnd(0, 10), os_ver = arch === 'mac' ? '(Macintosh; ' + randomProc('mac') + ' Mac OS X ' + version_string.osx('_') + ' rv:' + rnd(2, 6) + '.0; ' + randomLang() + ') ' : '(Windows; U; Windows NT ' + version_string.nt() + ')';
            return 'Mozilla/5.0 ' + os_ver + 'AppleWebKit/' + safari + ' (KHTML, like Gecko) Version/' + ver + ' Safari/' + safari;
        },
        chrome: function chrome(arch) {
            var safari = version_string.safari(), os_ver = arch === 'mac' ? '(Macintosh; ' + randomProc('mac') + ' Mac OS X ' + version_string.osx('_') + ') ' : arch === 'win' ? '(Windows; U; Windows NT ' + version_string.nt() + ')' : '(X11; Linux ' + randomProc(arch);
            return 'Mozilla/5.0 ' + os_ver + ' AppleWebKit/' + safari + ' (KHTML, like Gecko) Chrome/' + version_string.chrome() + ' Safari/' + safari;
        }
    };
    var random = randomBrowserAndOS();
    return browser[random[0]](random[1]);
};

},{}],"7vg8w":[function(require,module,exports) {
/**
 *
 * @namespace faker.database
 */ var Database = function(faker) {
    var self = this;
    /**
   * column
   *
   * @method faker.database.column
   */ self.column = function() {
        return faker.random.arrayElement(faker.definitions.database.column);
    };
    self.column.schema = {
        "description": "Generates a column name.",
        "sampleResults": [
            "id",
            "title",
            "createdAt"
        ]
    };
    /**
   * type
   *
   * @method faker.database.type
   */ self.type = function() {
        return faker.random.arrayElement(faker.definitions.database.type);
    };
    self.type.schema = {
        "description": "Generates a column type.",
        "sampleResults": [
            "byte",
            "int",
            "varchar",
            "timestamp"
        ]
    };
    /**
   * collation
   *
   * @method faker.database.collation
   */ self.collation = function() {
        return faker.random.arrayElement(faker.definitions.database.collation);
    };
    self.collation.schema = {
        "description": "Generates a collation.",
        "sampleResults": [
            "utf8_unicode_ci",
            "utf8_bin"
        ]
    };
    /**
   * engine
   *
   * @method faker.database.engine
   */ self.engine = function() {
        return faker.random.arrayElement(faker.definitions.database.engine);
    };
    self.engine.schema = {
        "description": "Generates a storage engine.",
        "sampleResults": [
            "MyISAM",
            "InnoDB"
        ]
    };
};
module["exports"] = Database;

},{}],"7mtlo":[function(require,module,exports) {
/**
 *
 * @namespace faker.phone
 */ var Phone = function(faker) {
    var self = this;
    /**
   * phoneNumber
   *
   * @method faker.phone.phoneNumber
   * @param {string} format
   * @memberOf faker.phone
   */ self.phoneNumber = function(format) {
        format = format || faker.phone.phoneFormats();
        return faker.helpers.replaceSymbolWithNumber(format);
    };
    // FIXME: this is strange passing in an array index.
    /**
   * phoneNumberFormat
   *
   * @method faker.phone.phoneFormatsArrayIndex
   * @param phoneFormatsArrayIndex
   * @memberOf faker.phone
   */ self.phoneNumberFormat = function(phoneFormatsArrayIndex) {
        phoneFormatsArrayIndex = phoneFormatsArrayIndex || 0;
        return faker.helpers.replaceSymbolWithNumber(faker.definitions.phone_number.formats[phoneFormatsArrayIndex]);
    };
    /**
   * phoneFormats
   *
   * @method faker.phone.phoneFormats
   */ self.phoneFormats = function() {
        return faker.random.arrayElement(faker.definitions.phone_number.formats);
    };
    return self;
};
module['exports'] = Phone;

},{}],"7KIw8":[function(require,module,exports) {
/**
 *
 * @namespace faker.date
 */ var _Date = function(faker) {
    var self = this;
    /**
   * past
   *
   * @method faker.date.past
   * @param {number} years
   * @param {date} refDate
   */ self.past = function(years, refDate) {
        var date = new Date();
        if (typeof refDate !== "undefined") date = new Date(Date.parse(refDate));
        var range = {
            min: 1000,
            max: (years || 1) * 31536000000
        };
        var past = date.getTime();
        past -= faker.datatype.number(range); // some time from now to N years ago, in milliseconds
        date.setTime(past);
        return date;
    };
    /**
   * future
   *
   * @method faker.date.future
   * @param {number} years
   * @param {date} refDate
   */ self.future = function(years, refDate) {
        var date = new Date();
        if (typeof refDate !== "undefined") date = new Date(Date.parse(refDate));
        var range = {
            min: 1000,
            max: (years || 1) * 31536000000
        };
        var future = date.getTime();
        future += faker.datatype.number(range); // some time from now to N years later, in milliseconds
        date.setTime(future);
        return date;
    };
    /**
   * between
   *
   * @method faker.date.between
   * @param {date} from
   * @param {date} to
   */ self.between = function(from, to) {
        var fromMilli = Date.parse(from);
        var dateOffset = faker.datatype.number(Date.parse(to) - fromMilli);
        var newDate = new Date(fromMilli + dateOffset);
        return newDate;
    };
    /**
   * betweens
   *
   * @method faker.date.between
   * @param {date} from
   * @param {date} to
   */ self.betweens = function(from, to, num) {
        if (typeof num == 'undefined') num = 3;
        var newDates = [];
        var fromMilli = Date.parse(from);
        var dateOffset = (Date.parse(to) - fromMilli) / (num + 1);
        var lastDate = from;
        for(var i = 0; i < num; i++){
            fromMilli = Date.parse(lastDate);
            lastDate = new Date(fromMilli + dateOffset);
            newDates.push(lastDate);
        }
        return newDates;
    };
    /**
   * recent
   *
   * @method faker.date.recent
   * @param {number} days
   * @param {date} refDate
   */ self.recent = function(days, refDate) {
        var date = new Date();
        if (typeof refDate !== "undefined") date = new Date(Date.parse(refDate));
        var range = {
            min: 1000,
            max: (days || 1) * 86400000
        };
        var future = date.getTime();
        future -= faker.datatype.number(range); // some time from now to N days ago, in milliseconds
        date.setTime(future);
        return date;
    };
    /**
   * soon
   *
   * @method faker.date.soon
   * @param {number} days
   * @param {date} refDate
   */ self.soon = function(days, refDate) {
        var date = new Date();
        if (typeof refDate !== "undefined") date = new Date(Date.parse(refDate));
        var range = {
            min: 1000,
            max: (days || 1) * 86400000
        };
        var future = date.getTime();
        future += faker.datatype.number(range); // some time from now to N days later, in milliseconds
        date.setTime(future);
        return date;
    };
    /**
   * month
   *
   * @method faker.date.month
   * @param {object} options
   */ self.month = function(options) {
        options = options || {
        };
        var type = 'wide';
        if (options.abbr) type = 'abbr';
        if (options.context && typeof faker.definitions.date.month[type + '_context'] !== 'undefined') type += '_context';
        var source = faker.definitions.date.month[type];
        return faker.random.arrayElement(source);
    };
    /**
   * weekday
   *
   * @param {object} options
   * @method faker.date.weekday
   */ self.weekday = function(options) {
        options = options || {
        };
        var type = 'wide';
        if (options.abbr) type = 'abbr';
        if (options.context && typeof faker.definitions.date.weekday[type + '_context'] !== 'undefined') type += '_context';
        var source = faker.definitions.date.weekday[type];
        return faker.random.arrayElement(source);
    };
    return self;
};
module['exports'] = _Date;

},{}],"ameQh":[function(require,module,exports) {
/**
 *
 * @namespace faker.time
 */ var _Time = function(faker) {
    var self = this;
    /**
   * recent
   *
   * @method faker.time.recent
   * @param {string} outputType - 'abbr' || 'wide' || 'unix' (default choice)
   */ self.recent = function(outputType) {
        if (typeof outputType === "undefined") outputType = 'unix';
        var date = new Date();
        switch(outputType){
            case "abbr":
                date = date.toLocaleTimeString();
                break;
            case "wide":
                date = date.toTimeString();
                break;
            case "unix":
                date = date.getTime();
                break;
        }
        return date;
    };
    return self;
};
module["exports"] = _Time;

},{}],"8GyHf":[function(require,module,exports) {
/**
 *
 * @namespace faker.commerce
 */ var Commerce = function(faker) {
    var self = this;
    /**
   * color
   *
   * @method faker.commerce.color
   */ self.color = function() {
        return faker.random.arrayElement(faker.definitions.commerce.color);
    };
    /**
   * department
   *
   * @method faker.commerce.department
   */ self.department = function() {
        return faker.random.arrayElement(faker.definitions.commerce.department);
    };
    /**
   * productName
   *
   * @method faker.commerce.productName
   */ self.productName = function() {
        return faker.commerce.productAdjective() + " " + faker.commerce.productMaterial() + " " + faker.commerce.product();
    };
    /**
   * price
   *
   * @method faker.commerce.price
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */ self.price = function(min, max, dec, symbol) {
        min = min || 1;
        max = max || 1000;
        dec = dec === undefined ? 2 : dec;
        symbol = symbol || '';
        if (min < 0 || max < 0) return symbol + 0;
        var randValue = faker.datatype.number({
            max: max,
            min: min
        });
        return symbol + (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
    };
    /*
  self.categories = function(num) {
      var categories = [];

      do {
          var category = faker.random.arrayElement(faker.definitions.commerce.department);
          if(categories.indexOf(category) === -1) {
              categories.push(category);
          }
      } while(categories.length < num);

      return categories;
  };

  */ /*
  self.mergeCategories = function(categories) {
      var separator = faker.definitions.separator || " &";
      // TODO: find undefined here
      categories = categories || faker.definitions.commerce.categories;
      var commaSeparated = categories.slice(0, -1).join(', ');

      return [commaSeparated, categories[categories.length - 1]].join(separator + " ");
  };
  */ /**
   * productAdjective
   *
   * @method faker.commerce.productAdjective
   */ self.productAdjective = function() {
        return faker.random.arrayElement(faker.definitions.commerce.product_name.adjective);
    };
    /**
   * productMaterial
   *
   * @method faker.commerce.productMaterial
   */ self.productMaterial = function() {
        return faker.random.arrayElement(faker.definitions.commerce.product_name.material);
    };
    /**
   * product
   *
   * @method faker.commerce.product
   */ self.product = function() {
        return faker.random.arrayElement(faker.definitions.commerce.product_name.product);
    };
    /**
   * productDescription
   *
   * @method faker.commerce.productDescription
   */ self.productDescription = function() {
        return faker.random.arrayElement(faker.definitions.commerce.product_description);
    };
    return self;
};
module['exports'] = Commerce;

},{}],"7gdMd":[function(require,module,exports) {
// generates fake data for many computer systems properties
var commonFileTypes = [
    "video",
    "audio",
    "image",
    "text",
    "application"
];
var commonMimeTypes = [
    "application/pdf",
    "audio/mpeg",
    "audio/wav",
    "image/png",
    "image/jpeg",
    "image/gif",
    "video/mp4",
    "video/mpeg",
    "text/html"
];
function setToArray(set) {
    // shortcut if Array.from is available
    if (Array.from) return Array.from(set);
    var array = [];
    set.forEach(function(item) {
        array.push(item);
    });
    return array;
}
/**
 *
 * @namespace faker.system
 */ function System(faker) {
    /**
   * generates a file name
   *
   * @method faker.system.fileName
   */ this.fileName = function() {
        var str = faker.random.words();
        str = str.toLowerCase().replace(/\W/g, "_") + "." + faker.system.fileExt();
        return str;
    };
    /**
   * commonFileName
   *
   * @method faker.system.commonFileName
   * @param {string} ext
   */ this.commonFileName = function(ext) {
        var str = faker.random.words();
        str = str.toLowerCase().replace(/\W/g, "_");
        str += "." + (ext || faker.system.commonFileExt());
        return str;
    };
    /**
   * mimeType
   *
   * @method faker.system.mimeType
   */ this.mimeType = function() {
        var typeSet = new Set();
        var extensionSet = new Set();
        var mimeTypes = faker.definitions.system.mimeTypes;
        Object.keys(mimeTypes).forEach(function(m) {
            var type = m.split("/")[0];
            typeSet.add(type);
            if (mimeTypes[m].extensions instanceof Array) mimeTypes[m].extensions.forEach(function(ext) {
                extensionSet.add(ext);
            });
        });
        var types = setToArray(typeSet);
        var extensions = setToArray(extensionSet);
        var mimeTypeKeys = Object.keys(faker.definitions.system.mimeTypes);
        return faker.random.arrayElement(mimeTypeKeys);
    };
    /**
   * returns a commonly used file type
   *
   * @method faker.system.commonFileType
   */ this.commonFileType = function() {
        return faker.random.arrayElement(commonFileTypes);
    };
    /**
   * returns a commonly used file extension
   *
   * @method faker.system.commonFileExt
   */ this.commonFileExt = function() {
        return faker.system.fileExt(faker.random.arrayElement(commonMimeTypes));
    };
    /**
   * returns any file type available as mime-type
   *
   * @method faker.system.fileType
   */ this.fileType = function() {
        var typeSet = new Set();
        var extensionSet = new Set();
        var mimeTypes = faker.definitions.system.mimeTypes;
        Object.keys(mimeTypes).forEach(function(m) {
            var type = m.split("/")[0];
            typeSet.add(type);
            if (mimeTypes[m].extensions instanceof Array) mimeTypes[m].extensions.forEach(function(ext) {
                extensionSet.add(ext);
            });
        });
        var types = setToArray(typeSet);
        var extensions = setToArray(extensionSet);
        var mimeTypeKeys = Object.keys(faker.definitions.system.mimeTypes);
        return faker.random.arrayElement(types);
    };
    /**
   * fileExt
   *
   * @method faker.system.fileExt
   * @param {string} mimeType
   */ this.fileExt = function(mimeType) {
        var typeSet = new Set();
        var extensionSet = new Set();
        var mimeTypes = faker.definitions.system.mimeTypes;
        Object.keys(mimeTypes).forEach(function(m) {
            var type = m.split("/")[0];
            typeSet.add(type);
            if (mimeTypes[m].extensions instanceof Array) mimeTypes[m].extensions.forEach(function(ext) {
                extensionSet.add(ext);
            });
        });
        var types = setToArray(typeSet);
        var extensions = setToArray(extensionSet);
        var mimeTypeKeys = Object.keys(faker.definitions.system.mimeTypes);
        if (mimeType) {
            var mimes = faker.definitions.system.mimeTypes;
            return faker.random.arrayElement(mimes[mimeType].extensions);
        }
        return faker.random.arrayElement(extensions);
    };
    /**
   * returns directory path
   *
   * @method faker.system.directoryPath
   */ this.directoryPath = function() {
        var paths = faker.definitions.system.directoryPaths;
        return faker.random.arrayElement(paths);
    };
    /**
   * returns file path
   *
   * @method faker.system.filePath
   */ this.filePath = function() {
        return faker.fake("{{system.directoryPath}}/{{system.fileName}}.{{system.fileExt}}");
    };
    /**
   * semver
   *
   * @method faker.system.semver
   */ this.semver = function() {
        return [
            faker.datatype.number(9),
            faker.datatype.number(9),
            faker.datatype.number(9)
        ].join('.');
    };
}
module['exports'] = System;

},{}],"h5Oey":[function(require,module,exports) {
/**
 * @namespace faker.git
 */ var Git = function(faker) {
    var self = this;
    var f = faker.fake;
    var hexChars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
    ];
    /**
   * branch
   *
   * @method faker.git.branch
   */ self.branch = function() {
        var noun = faker.hacker.noun().replace(' ', '-');
        var verb = faker.hacker.verb().replace(' ', '-');
        return noun + '-' + verb;
    };
    /**
   * commitEntry
   *
   * @method faker.git.commitEntry
   * @param {object} options
   */ self.commitEntry = function(options) {
        options = options || {
        };
        var entry = 'commit {{git.commitSha}}\r\n';
        if (options.merge || faker.datatype.number({
            min: 0,
            max: 4
        }) === 0) entry += 'Merge: {{git.shortSha}} {{git.shortSha}}\r\n';
        entry += 'Author: {{name.firstName}} {{name.lastName}} <{{internet.email}}>\r\n';
        entry += 'Date: ' + faker.date.recent().toString() + '\r\n';
        entry += '\r\n\xa0\xa0\xa0\xa0{{git.commitMessage}}\r\n';
        return f(entry);
    };
    /**
   * commitMessage
   *
   * @method faker.git.commitMessage
   */ self.commitMessage = function() {
        var format = '{{hacker.verb}} {{hacker.adjective}} {{hacker.noun}}';
        return f(format);
    };
    /**
   * commitSha
   *
   * @method faker.git.commitSha
   */ self.commitSha = function() {
        var commit = "";
        for(var i = 0; i < 40; i++)commit += faker.random.arrayElement(hexChars);
        return commit;
    };
    /**
   * shortSha
   *
   * @method faker.git.shortSha
   */ self.shortSha = function() {
        var shortSha = "";
        for(var i = 0; i < 7; i++)shortSha += faker.random.arrayElement(hexChars);
        return shortSha;
    };
    return self;
};
module['exports'] = Git;

},{}],"3hapj":[function(require,module,exports) {
/**
 *
 * @namespace faker.vehicle
 */ var Vehicle = function(faker) {
    var self = this;
    var fake = faker.fake;
    /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */ self.vehicle = function() {
        return fake('{{vehicle.manufacturer}} {{vehicle.model}}');
    };
    self.vehicle.schema = {
        "description": "Generates a random vehicle.",
        "sampleResults": [
            "BMW Explorer",
            "Ford Camry",
            "Lamborghini Ranchero"
        ]
    };
    /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */ self.manufacturer = function() {
        return faker.random.arrayElement(faker.definitions.vehicle.manufacturer);
    };
    self.manufacturer.schema = {
        "description": "Generates a manufacturer name.",
        "sampleResults": [
            "Ford",
            "Jeep",
            "Tesla"
        ]
    };
    /**
   * model
   *
   * @method faker.vehicle.model
   */ self.model = function() {
        return faker.random.arrayElement(faker.definitions.vehicle.model);
    };
    self.model.schema = {
        "description": "Generates a vehicle model.",
        "sampleResults": [
            "Explorer",
            "Camry",
            "Ranchero"
        ]
    };
    /**
   * type
   *
   * @method faker.vehicle.type
   */ self.type = function() {
        return faker.random.arrayElement(faker.definitions.vehicle.type);
    };
    self.type.schema = {
        "description": "Generates a vehicle type.",
        "sampleResults": [
            "Coupe",
            "Convertable",
            "Sedan",
            "SUV"
        ]
    };
    /**
   * fuel
   *
   * @method faker.vehicle.fuel
   */ self.fuel = function() {
        return faker.random.arrayElement(faker.definitions.vehicle.fuel);
    };
    self.fuel.schema = {
        "description": "Generates a fuel type.",
        "sampleResults": [
            "Electric",
            "Gasoline",
            "Diesel"
        ]
    };
    /**
   * vin
   *
   * @method faker.vehicle.vin
   */ self.vin = function() {
        var bannedChars = [
            'o',
            'i',
            'q'
        ];
        return (faker.random.alphaNumeric(10, {
            bannedChars: bannedChars
        }) + faker.random.alpha({
            count: 1,
            upcase: true,
            bannedChars: bannedChars
        }) + faker.random.alphaNumeric(1, {
            bannedChars: bannedChars
        }) + faker.datatype.number({
            min: 10000,
            max: 100000
        }) // return five digit #
        ).toUpperCase();
    };
    self.vin.schema = {
        "description": "Generates a valid VIN number.",
        "sampleResults": [
            "YV1MH682762184654",
            "3C7WRMBJ2EG208836"
        ]
    };
    /**
   * color
   *
   * @method faker.vehicle.color
   */ self.color = function() {
        return fake('{{commerce.color}}');
    };
    self.color.schema = {
        "description": "Generates a color",
        "sampleResults": [
            "red",
            "white",
            "black"
        ]
    };
    /**
     * vrm
     *
     * @method faker.vehicle.vrm
     */ self.vrm = function() {
        return (faker.random.alpha({
            count: 2,
            upcase: true
        }) + faker.datatype.number({
            min: 0,
            max: 9
        }) + faker.datatype.number({
            min: 0,
            max: 9
        }) + faker.random.alpha({
            count: 3,
            upcase: true
        })).toUpperCase();
    };
    self.vrm.schema = {
        "description": "Generates a vehicle vrm",
        "sampleResults": [
            "MF56UPA",
            "GL19AAQ",
            "SF20TTA"
        ]
    };
    /**
  * bicycle
  *
  * @method faker.vehicle.bicycle
  */ self.bicycle = function() {
        return faker.random.arrayElement(faker.definitions.vehicle.bicycle_type);
    };
    self.bicycle.schema = {
        "description": "Generates a type of bicycle",
        "sampleResults": [
            "Adventure Road Bicycle",
            "City Bicycle",
            "Recumbent Bicycle"
        ]
    };
};
module["exports"] = Vehicle;

},{}],"hVke1":[function(require,module,exports) {
/**
 *
 * @namespace faker.music
 */ var Music = function(faker) {
    var self = this;
    /**
     * genre
     *
     * @method faker.music.genre
     */ self.genre = function() {
        return faker.random.arrayElement(faker.definitions.music.genre);
    };
    self.genre.schema = {
        "description": "Generates a genre.",
        "sampleResults": [
            "Rock",
            "Metal",
            "Pop"
        ]
    };
};
module["exports"] = Music;

},{}],"gh8Hr":[function(require,module,exports) {
/**
 *
 * @namespace faker.datatype
 */ function Datatype(faker, seed) {
    // Use a user provided seed if it is an array or number
    if (Array.isArray(seed) && seed.length) faker.mersenne.seed_array(seed);
    else if (!isNaN(seed)) faker.mersenne.seed(seed);
    /**
     * returns a single random number based on a max number or range
     *
     * @method faker.datatype.number
     * @param {mixed} options {min, max, precision}
     */ this.number = function(options) {
        if (typeof options === "number") options = {
            max: options
        };
        options = options || {
        };
        if (typeof options.min === "undefined") options.min = 0;
        if (typeof options.max === "undefined") options.max = 99999;
        if (typeof options.precision === "undefined") options.precision = 1;
        // Make the range inclusive of the max value
        var max = options.max;
        if (max >= 0) max += options.precision;
        var randomNumber = Math.floor(faker.mersenne.rand(max / options.precision, options.min / options.precision));
        // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01
        randomNumber = randomNumber / (1 / options.precision);
        return randomNumber;
    };
    /**
     * returns a single random floating-point number based on a max number or range
     *
     * @method faker.datatype.float
     * @param {mixed} options
     */ this.float = function(options) {
        if (typeof options === "number") options = {
            precision: options
        };
        options = options || {
        };
        var opts = {
        };
        for(var p in options)opts[p] = options[p];
        if (typeof opts.precision === 'undefined') opts.precision = 0.01;
        return faker.datatype.number(opts);
    };
    /**
     * method returns a Date object using a random number of milliseconds since 1. Jan 1970 UTC
     * Caveat: seeding is not working
     *
     * @method faker.datatype.datetime
     * @param {mixed} options, pass min OR max as number of milliseconds since 1. Jan 1970 UTC
     */ this.datetime = function(options) {
        if (typeof options === "number") options = {
            max: options
        };
        var minMax = 8640000000000000;
        options = options || {
        };
        if (typeof options.min === "undefined" || options.min < minMax * -1) options.min = new Date().setFullYear(1990, 1, 1);
        if (typeof options.max === "undefined" || options.max > minMax) options.max = new Date().setFullYear(2100, 1, 1);
        var random = faker.datatype.number(options);
        return new Date(random);
    };
    /**
     * Returns a string, containing UTF-16 chars between 33 and 125 ('!' to '}')
     *
     *
     * @method faker.datatype.string
     * @param { number } length: length of generated string, default = 10, max length = 2^20
     */ this.string = function(length) {
        if (length === undefined) length = 10;
        var maxLength = Math.pow(2, 20);
        if (length >= maxLength) length = maxLength;
        var charCodeOption = {
            min: 33,
            max: 125
        };
        var returnString = '';
        for(var i = 0; i < length; i++)returnString += String.fromCharCode(faker.datatype.number(charCodeOption));
        return returnString;
    };
    /**
     * uuid
     *
     * @method faker.datatype.uuid
     */ this.uuid = function() {
        var RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var replacePlaceholders = function(placeholder) {
            var random = faker.datatype.number({
                min: 0,
                max: 15
            });
            var value = placeholder == 'x' ? random : random & 3 | 8;
            return value.toString(16);
        };
        return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
    };
    /**
     * boolean
     *
     * @method faker.datatype.boolean
     */ this.boolean = function() {
        return !!faker.datatype.number(1);
    };
    /**
     * hexaDecimal
     *
     * @method faker.datatype.hexaDecimal
     * @param {number} count defaults to 1
     */ this.hexaDecimal = function hexaDecimal(count) {
        if (typeof count === "undefined") count = 1;
        var wholeString = "";
        for(var i = 0; i < count; i++)wholeString += faker.random.arrayElement([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
        ]);
        return "0x" + wholeString;
    };
    /**
     * returns json object with 7 pre-defined properties
     *
     * @method faker.datatype.json
     */ this.json = function json() {
        var properties = [
            'foo',
            'bar',
            'bike',
            'a',
            'b',
            'name',
            'prop'
        ];
        var returnObject = {
        };
        properties.forEach(function(prop) {
            returnObject[prop] = faker.datatype.boolean() ? faker.datatype.string() : faker.datatype.number();
        });
        return JSON.stringify(returnObject);
    };
    /**
     * returns an array with values generated by faker.datatype.number and faker.datatype.string
     *
     * @method faker.datatype.array
     * @param { number } length of the returned array
     */ this.array = function array(length) {
        if (length === undefined) length = 10;
        var returnArray = new Array(length);
        for(var i = 0; i < length; i++)returnArray[i] = faker.datatype.boolean() ? faker.datatype.string() : faker.datatype.number();
        return returnArray;
    };
    return this;
}
module['exports'] = Datatype;

},{}],"4zaRc":[function(require,module,exports) {
var en = {
};
module['exports'] = en;
en.title = "English";
en.separator = " & ";
en.address = require("./address");
en.animal = require("./animal");
en.company = require("./company");
en.internet = require("./internet");
en.database = require("./database");
en.lorem = require("./lorem");
en.name = require("./name");
en.phone_number = require("./phone_number");
en.cell_phone = require("./cell_phone");
en.business = require("./business");
en.commerce = require("./commerce");
en.team = require("./team");
en.hacker = require("./hacker");
en.app = require("./app");
en.finance = require("./finance");
en.date = require("./date");
en.system = require("./system");
en.vehicle = require("./vehicle");
en.music = require("./music");

},{"./address":"5WvYN","./animal":"7pyjQ","./company":"jGLGJ","./internet":"7stGZ","./database":"hNvTn","./lorem":"8bNdA","./name":"lWIew","./phone_number":"8mF9M","./cell_phone":"adOx0","./business":"cyGaC","./commerce":"gkAvb","./team":"dNlYQ","./hacker":"41uFr","./app":"2CjlR","./finance":"hMgcA","./date":"1VEoA","./system":"gnzoC","./vehicle":"gaFfB","./music":"7M1fs"}],"5WvYN":[function(require,module,exports) {
var address = {
};
module['exports'] = address;
address.city_prefix = require("./city_prefix");
address.city_suffix = require("./city_suffix");
address.city_name = require("./city_name");
address.county = require("./county");
address.country = require("./country");
address.country_code = require("./country_code");
address.country_code_alpha_3 = require("./country_code_alpha_3");
address.building_number = require("./building_number");
address.street_suffix = require("./street_suffix");
address.secondary_address = require("./secondary_address");
address.postcode = require("./postcode");
address.postcode_by_state = require("./postcode_by_state");
address.state = require("./state");
address.state_abbr = require("./state_abbr");
address.time_zone = require("./time_zone");
address.city = require("./city");
address.street_name = require("./street_name");
address.street_address = require("./street_address");
address.default_country = require("./default_country");
address.direction = require("./direction");
address.direction_abbr = require("./direction_abbr");

},{"./city_prefix":"iOxR0","./city_suffix":"kbL56","./city_name":"g8hgi","./county":"ikNLr","./country":"4Svim","./country_code":"8afTC","./country_code_alpha_3":"d5wSw","./building_number":"8bi5L","./street_suffix":"cS8We","./secondary_address":"79jIY","./postcode":"dwSCr","./postcode_by_state":"4lGjH","./state":"3hEy4","./state_abbr":"ejtkm","./time_zone":"3cFKj","./city":"6rRHR","./street_name":"2cZnL","./street_address":"ajY7J","./default_country":"80sSv","./direction":"aTu5y","./direction_abbr":"b4LZJ"}],"iOxR0":[function(require,module,exports) {
module["exports"] = [
    "North",
    "East",
    "West",
    "South",
    "New",
    "Lake",
    "Port"
];

},{}],"kbL56":[function(require,module,exports) {
module["exports"] = [
    "town",
    "ton",
    "land",
    "ville",
    "berg",
    "burgh",
    "borough",
    "bury",
    "view",
    "port",
    "mouth",
    "stad",
    "furt",
    "chester",
    "mouth",
    "fort",
    "haven",
    "side",
    "shire"
];

},{}],"g8hgi":[function(require,module,exports) {
module.exports = [
    "Abilene",
    "Akron",
    "Alafaya",
    "Alameda",
    "Albany",
    "Albany",
    "Albany",
    "Albuquerque",
    "Alexandria",
    "Alexandria",
    "Alhambra",
    "Aliso Viejo",
    "Allen",
    "Allentown",
    "Aloha",
    "Alpharetta",
    "Altadena",
    "Altamonte Springs",
    "Altoona",
    "Amarillo",
    "Ames",
    "Anaheim",
    "Anchorage",
    "Anderson",
    "Ankeny",
    "Ann Arbor",
    "Annandale",
    "Antelope",
    "Antioch",
    "Apex",
    "Apopka",
    "Apple Valley",
    "Apple Valley",
    "Appleton",
    "Arcadia",
    "Arden-Arcade",
    "Arecibo",
    "Arlington",
    "Arlington",
    "Arlington",
    "Arlington Heights",
    "Arvada",
    "Ashburn",
    "Asheville",
    "Aspen Hill",
    "Atascocita",
    "Athens-Clarke County",
    "Atlanta",
    "Attleboro",
    "Auburn",
    "Auburn",
    "Augusta-Richmond County",
    "Aurora",
    "Aurora",
    "Austin",
    "Avondale",
    "Azusa",
    "Bakersfield",
    "Baldwin Park",
    "Baltimore",
    "Barnstable Town",
    "Bartlett",
    "Bartlett",
    "Baton Rouge",
    "Battle Creek",
    "Bayamon",
    "Bayonne",
    "Baytown",
    "Beaumont",
    "Beaumont",
    "Beavercreek",
    "Beaverton",
    "Bedford",
    "Bel Air South",
    "Bell Gardens",
    "Belleville",
    "Bellevue",
    "Bellevue",
    "Bellflower",
    "Bellingham",
    "Bend",
    "Bentonville",
    "Berkeley",
    "Berwyn",
    "Bethesda",
    "Bethlehem",
    "Billings",
    "Biloxi",
    "Binghamton",
    "Birmingham",
    "Bismarck",
    "Blacksburg",
    "Blaine",
    "Bloomington",
    "Bloomington",
    "Bloomington",
    "Blue Springs",
    "Boca Raton",
    "Boise City",
    "Bolingbrook",
    "Bonita Springs",
    "Bossier City",
    "Boston",
    "Bothell",
    "Boulder",
    "Bountiful",
    "Bowie",
    "Bowling Green",
    "Boynton Beach",
    "Bozeman",
    "Bradenton",
    "Brandon",
    "Brentwood",
    "Brentwood",
    "Bridgeport",
    "Bristol",
    "Brockton",
    "Broken Arrow",
    "Brookhaven",
    "Brookline",
    "Brooklyn Park",
    "Broomfield",
    "Brownsville",
    "Bryan",
    "Buckeye",
    "Buena Park",
    "Buffalo",
    "Buffalo Grove",
    "Burbank",
    "Burien",
    "Burke",
    "Burleson",
    "Burlington",
    "Burlington",
    "Burnsville",
    "Caguas",
    "Caldwell",
    "Camarillo",
    "Cambridge",
    "Camden",
    "Canton",
    "Cape Coral",
    "Carlsbad",
    "Carmel",
    "Carmichael",
    "Carolina",
    "Carrollton",
    "Carson",
    "Carson City",
    "Cary",
    "Casa Grande",
    "Casas Adobes",
    "Casper",
    "Castle Rock",
    "Castro Valley",
    "Catalina Foothills",
    "Cathedral City",
    "Catonsville",
    "Cedar Hill",
    "Cedar Park",
    "Cedar Rapids",
    "Centennial",
    "Centreville",
    "Ceres",
    "Cerritos",
    "Champaign",
    "Chandler",
    "Chapel Hill",
    "Charleston",
    "Charleston",
    "Charlotte",
    "Charlottesville",
    "Chattanooga",
    "Cheektowaga",
    "Chesapeake",
    "Chesterfield",
    "Cheyenne",
    "Chicago",
    "Chico",
    "Chicopee",
    "Chino",
    "Chino Hills",
    "Chula Vista",
    "Cicero",
    "Cincinnati",
    "Citrus Heights",
    "Clarksville",
    "Clearwater",
    "Cleveland",
    "Cleveland",
    "Cleveland Heights",
    "Clifton",
    "Clovis",
    "Coachella",
    "Coconut Creek",
    "Coeur d'Alene",
    "College Station",
    "Collierville",
    "Colorado Springs",
    "Colton",
    "Columbia",
    "Columbia",
    "Columbia",
    "Columbus",
    "Columbus",
    "Columbus",
    "Commerce City",
    "Compton",
    "Concord",
    "Concord",
    "Concord",
    "Conroe",
    "Conway",
    "Coon Rapids",
    "Coral Gables",
    "Coral Springs",
    "Corona",
    "Corpus Christi",
    "Corvallis",
    "Costa Mesa",
    "Council Bluffs",
    "Country Club",
    "Covina",
    "Cranston",
    "Cupertino",
    "Cutler Bay",
    "Cuyahoga Falls",
    "Cypress",
    "Dale City",
    "Dallas",
    "Daly City",
    "Danbury",
    "Danville",
    "Danville",
    "Davenport",
    "Davie",
    "Davis",
    "Dayton",
    "Daytona Beach",
    "DeKalb",
    "DeSoto",
    "Dearborn",
    "Dearborn Heights",
    "Decatur",
    "Decatur",
    "Deerfield Beach",
    "Delano",
    "Delray Beach",
    "Deltona",
    "Denton",
    "Denver",
    "Des Moines",
    "Des Plaines",
    "Detroit",
    "Diamond Bar",
    "Doral",
    "Dothan",
    "Downers Grove",
    "Downey",
    "Draper",
    "Dublin",
    "Dublin",
    "Dubuque",
    "Duluth",
    "Dundalk",
    "Dunwoody",
    "Durham",
    "Eagan",
    "East Hartford",
    "East Honolulu",
    "East Lansing",
    "East Los Angeles",
    "East Orange",
    "East Providence",
    "Eastvale",
    "Eau Claire",
    "Eden Prairie",
    "Edina",
    "Edinburg",
    "Edmond",
    "El Cajon",
    "El Centro",
    "El Dorado Hills",
    "El Monte",
    "El Paso",
    "Elgin",
    "Elizabeth",
    "Elk Grove",
    "Elkhart",
    "Ellicott City",
    "Elmhurst",
    "Elyria",
    "Encinitas",
    "Enid",
    "Enterprise",
    "Erie",
    "Escondido",
    "Euclid",
    "Eugene",
    "Euless",
    "Evanston",
    "Evansville",
    "Everett",
    "Everett",
    "Fairfield",
    "Fairfield",
    "Fall River",
    "Fargo",
    "Farmington",
    "Farmington Hills",
    "Fayetteville",
    "Fayetteville",
    "Federal Way",
    "Findlay",
    "Fishers",
    "Flagstaff",
    "Flint",
    "Florence-Graham",
    "Florin",
    "Florissant",
    "Flower Mound",
    "Folsom",
    "Fond du Lac",
    "Fontana",
    "Fort Collins",
    "Fort Lauderdale",
    "Fort Myers",
    "Fort Pierce",
    "Fort Smith",
    "Fort Wayne",
    "Fort Worth",
    "Fountain Valley",
    "Fountainebleau",
    "Framingham",
    "Franklin",
    "Frederick",
    "Freeport",
    "Fremont",
    "Fresno",
    "Frisco",
    "Fullerton",
    "Gainesville",
    "Gaithersburg",
    "Galveston",
    "Garden Grove",
    "Gardena",
    "Garland",
    "Gary",
    "Gastonia",
    "Georgetown",
    "Germantown",
    "Gilbert",
    "Gilroy",
    "Glen Burnie",
    "Glendale",
    "Glendale",
    "Glendora",
    "Glenview",
    "Goodyear",
    "Grand Forks",
    "Grand Island",
    "Grand Junction",
    "Grand Prairie",
    "Grand Rapids",
    "Grapevine",
    "Great Falls",
    "Greeley",
    "Green Bay",
    "Greensboro",
    "Greenville",
    "Greenville",
    "Greenwood",
    "Gresham",
    "Guaynabo",
    "Gulfport",
    "Hacienda Heights",
    "Hackensack",
    "Haltom City",
    "Hamilton",
    "Hammond",
    "Hampton",
    "Hanford",
    "Harlingen",
    "Harrisburg",
    "Harrisonburg",
    "Hartford",
    "Hattiesburg",
    "Haverhill",
    "Hawthorne",
    "Hayward",
    "Hemet",
    "Hempstead",
    "Henderson",
    "Hendersonville",
    "Hesperia",
    "Hialeah",
    "Hicksville",
    "High Point",
    "Highland",
    "Highlands Ranch",
    "Hillsboro",
    "Hilo",
    "Hoboken",
    "Hoffman Estates",
    "Hollywood",
    "Homestead",
    "Honolulu",
    "Hoover",
    "Houston",
    "Huntersville",
    "Huntington",
    "Huntington Beach",
    "Huntington Park",
    "Huntsville",
    "Hutchinson",
    "Idaho Falls",
    "Independence",
    "Indianapolis",
    "Indio",
    "Inglewood",
    "Iowa City",
    "Irondequoit",
    "Irvine",
    "Irving",
    "Jackson",
    "Jackson",
    "Jacksonville",
    "Jacksonville",
    "Janesville",
    "Jefferson City",
    "Jeffersonville",
    "Jersey City",
    "Johns Creek",
    "Johnson City",
    "Joliet",
    "Jonesboro",
    "Joplin",
    "Jupiter",
    "Jurupa Valley",
    "Kalamazoo",
    "Kannapolis",
    "Kansas City",
    "Kansas City",
    "Kearny",
    "Keller",
    "Kendale Lakes",
    "Kendall",
    "Kenner",
    "Kennewick",
    "Kenosha",
    "Kent",
    "Kentwood",
    "Kettering",
    "Killeen",
    "Kingsport",
    "Kirkland",
    "Kissimmee",
    "Knoxville",
    "Kokomo",
    "La Crosse",
    "La Habra",
    "La Mesa",
    "La Mirada",
    "Lacey",
    "Lafayette",
    "Lafayette",
    "Laguna Niguel",
    "Lake Charles",
    "Lake Elsinore",
    "Lake Forest",
    "Lake Havasu City",
    "Lake Ridge",
    "Lakeland",
    "Lakeville",
    "Lakewood",
    "Lakewood",
    "Lakewood",
    "Lakewood",
    "Lakewood",
    "Lancaster",
    "Lancaster",
    "Lansing",
    "Laredo",
    "Largo",
    "Las Cruces",
    "Las Vegas",
    "Lauderhill",
    "Lawrence",
    "Lawrence",
    "Lawrence",
    "Lawton",
    "Layton",
    "League City",
    "Lee's Summit",
    "Leesburg",
    "Lehi",
    "Lehigh Acres",
    "Lenexa",
    "Levittown",
    "Levittown",
    "Lewisville",
    "Lexington-Fayette",
    "Lincoln",
    "Lincoln",
    "Linden",
    "Little Rock",
    "Littleton",
    "Livermore",
    "Livonia",
    "Lodi",
    "Logan",
    "Lombard",
    "Lompoc",
    "Long Beach",
    "Longmont",
    "Longview",
    "Lorain",
    "Los Angeles",
    "Louisville/Jefferson County",
    "Loveland",
    "Lowell",
    "Lubbock",
    "Lynchburg",
    "Lynn",
    "Lynwood",
    "Macon-Bibb County",
    "Madera",
    "Madison",
    "Madison",
    "Malden",
    "Manchester",
    "Manhattan",
    "Mansfield",
    "Mansfield",
    "Manteca",
    "Maple Grove",
    "Margate",
    "Maricopa",
    "Marietta",
    "Marysville",
    "Mayaguez",
    "McAllen",
    "McKinney",
    "McLean",
    "Medford",
    "Medford",
    "Melbourne",
    "Memphis",
    "Menifee",
    "Mentor",
    "Merced",
    "Meriden",
    "Meridian",
    "Mesa",
    "Mesquite",
    "Metairie",
    "Methuen Town",
    "Miami",
    "Miami Beach",
    "Miami Gardens",
    "Middletown",
    "Middletown",
    "Midland",
    "Midland",
    "Midwest City",
    "Milford",
    "Millcreek",
    "Milpitas",
    "Milwaukee",
    "Minneapolis",
    "Minnetonka",
    "Minot",
    "Miramar",
    "Mishawaka",
    "Mission",
    "Mission Viejo",
    "Missoula",
    "Missouri City",
    "Mobile",
    "Modesto",
    "Moline",
    "Monroe",
    "Montebello",
    "Monterey Park",
    "Montgomery",
    "Moore",
    "Moreno Valley",
    "Morgan Hill",
    "Mount Pleasant",
    "Mount Prospect",
    "Mount Vernon",
    "Mountain View",
    "Muncie",
    "Murfreesboro",
    "Murray",
    "Murrieta",
    "Nampa",
    "Napa",
    "Naperville",
    "Nashua",
    "Nashville-Davidson",
    "National City",
    "New Bedford",
    "New Braunfels",
    "New Britain",
    "New Brunswick",
    "New Haven",
    "New Orleans",
    "New Rochelle",
    "New York",
    "Newark",
    "Newark",
    "Newark",
    "Newport Beach",
    "Newport News",
    "Newton",
    "Niagara Falls",
    "Noblesville",
    "Norfolk",
    "Normal",
    "Norman",
    "North Bethesda",
    "North Charleston",
    "North Highlands",
    "North Las Vegas",
    "North Lauderdale",
    "North Little Rock",
    "North Miami",
    "North Miami Beach",
    "North Port",
    "North Richland Hills",
    "Norwalk",
    "Norwalk",
    "Novato",
    "Novi",
    "O'Fallon",
    "Oak Lawn",
    "Oak Park",
    "Oakland",
    "Oakland Park",
    "Ocala",
    "Oceanside",
    "Odessa",
    "Ogden",
    "Oklahoma City",
    "Olathe",
    "Olympia",
    "Omaha",
    "Ontario",
    "Orange",
    "Orem",
    "Orland Park",
    "Orlando",
    "Oro Valley",
    "Oshkosh",
    "Overland Park",
    "Owensboro",
    "Oxnard",
    "Palatine",
    "Palm Bay",
    "Palm Beach Gardens",
    "Palm Coast",
    "Palm Desert",
    "Palm Harbor",
    "Palm Springs",
    "Palmdale",
    "Palo Alto",
    "Paradise",
    "Paramount",
    "Parker",
    "Parma",
    "Pasadena",
    "Pasadena",
    "Pasco",
    "Passaic",
    "Paterson",
    "Pawtucket",
    "Peabody",
    "Pearl City",
    "Pearland",
    "Pembroke Pines",
    "Pensacola",
    "Peoria",
    "Peoria",
    "Perris",
    "Perth Amboy",
    "Petaluma",
    "Pflugerville",
    "Pharr",
    "Philadelphia",
    "Phoenix",
    "Pico Rivera",
    "Pine Bluff",
    "Pine Hills",
    "Pinellas Park",
    "Pittsburg",
    "Pittsburgh",
    "Pittsfield",
    "Placentia",
    "Plainfield",
    "Plainfield",
    "Plano",
    "Plantation",
    "Pleasanton",
    "Plymouth",
    "Pocatello",
    "Poinciana",
    "Pomona",
    "Pompano Beach",
    "Ponce",
    "Pontiac",
    "Port Arthur",
    "Port Charlotte",
    "Port Orange",
    "Port St. Lucie",
    "Portage",
    "Porterville",
    "Portland",
    "Portland",
    "Portsmouth",
    "Potomac",
    "Poway",
    "Providence",
    "Provo",
    "Pueblo",
    "Quincy",
    "Racine",
    "Raleigh",
    "Rancho Cordova",
    "Rancho Cucamonga",
    "Rancho Palos Verdes",
    "Rancho Santa Margarita",
    "Rapid City",
    "Reading",
    "Redding",
    "Redlands",
    "Redmond",
    "Redondo Beach",
    "Redwood City",
    "Reno",
    "Renton",
    "Reston",
    "Revere",
    "Rialto",
    "Richardson",
    "Richland",
    "Richmond",
    "Richmond",
    "Rio Rancho",
    "Riverside",
    "Riverton",
    "Riverview",
    "Roanoke",
    "Rochester",
    "Rochester",
    "Rochester Hills",
    "Rock Hill",
    "Rockford",
    "Rocklin",
    "Rockville",
    "Rockwall",
    "Rocky Mount",
    "Rogers",
    "Rohnert Park",
    "Rosemead",
    "Roseville",
    "Roseville",
    "Roswell",
    "Roswell",
    "Round Rock",
    "Rowland Heights",
    "Rowlett",
    "Royal Oak",
    "Sacramento",
    "Saginaw",
    "Salem",
    "Salem",
    "Salina",
    "Salinas",
    "Salt Lake City",
    "Sammamish",
    "San Angelo",
    "San Antonio",
    "San Bernardino",
    "San Bruno",
    "San Buenaventura (Ventura)",
    "San Clemente",
    "San Diego",
    "San Francisco",
    "San Jacinto",
    "San Jose",
    "San Juan",
    "San Leandro",
    "San Luis Obispo",
    "San Marcos",
    "San Marcos",
    "San Mateo",
    "San Rafael",
    "San Ramon",
    "San Tan Valley",
    "Sandy",
    "Sandy Springs",
    "Sanford",
    "Santa Ana",
    "Santa Barbara",
    "Santa Clara",
    "Santa Clarita",
    "Santa Cruz",
    "Santa Fe",
    "Santa Maria",
    "Santa Monica",
    "Santa Rosa",
    "Santee",
    "Sarasota",
    "Savannah",
    "Sayreville",
    "Schaumburg",
    "Schenectady",
    "Scottsdale",
    "Scranton",
    "Seattle",
    "Severn",
    "Shawnee",
    "Sheboygan",
    "Shoreline",
    "Shreveport",
    "Sierra Vista",
    "Silver Spring",
    "Simi Valley",
    "Sioux City",
    "Sioux Falls",
    "Skokie",
    "Smyrna",
    "Smyrna",
    "Somerville",
    "South Bend",
    "South Gate",
    "South Hill",
    "South Jordan",
    "South San Francisco",
    "South Valley",
    "South Whittier",
    "Southaven",
    "Southfield",
    "Sparks",
    "Spokane",
    "Spokane Valley",
    "Spring",
    "Spring Hill",
    "Spring Valley",
    "Springdale",
    "Springfield",
    "Springfield",
    "Springfield",
    "Springfield",
    "Springfield",
    "St. Charles",
    "St. Clair Shores",
    "St. Cloud",
    "St. Cloud",
    "St. George",
    "St. Joseph",
    "St. Louis",
    "St. Louis Park",
    "St. Paul",
    "St. Peters",
    "St. Petersburg",
    "Stamford",
    "State College",
    "Sterling Heights",
    "Stillwater",
    "Stockton",
    "Stratford",
    "Strongsville",
    "Suffolk",
    "Sugar Land",
    "Summerville",
    "Sunnyvale",
    "Sunrise",
    "Sunrise Manor",
    "Surprise",
    "Syracuse",
    "Tacoma",
    "Tallahassee",
    "Tamarac",
    "Tamiami",
    "Tampa",
    "Taunton",
    "Taylor",
    "Taylorsville",
    "Temecula",
    "Tempe",
    "Temple",
    "Terre Haute",
    "Texas City",
    "The Hammocks",
    "The Villages",
    "The Woodlands",
    "Thornton",
    "Thousand Oaks",
    "Tigard",
    "Tinley Park",
    "Titusville",
    "Toledo",
    "Toms River",
    "Tonawanda",
    "Topeka",
    "Torrance",
    "Town 'n' Country",
    "Towson",
    "Tracy",
    "Trenton",
    "Troy",
    "Troy",
    "Trujillo Alto",
    "Tuckahoe",
    "Tucson",
    "Tulare",
    "Tulsa",
    "Turlock",
    "Tuscaloosa",
    "Tustin",
    "Twin Falls",
    "Tyler",
    "Union City",
    "Union City",
    "University",
    "Upland",
    "Urbana",
    "Urbandale",
    "Utica",
    "Vacaville",
    "Valdosta",
    "Vallejo",
    "Vancouver",
    "Victoria",
    "Victorville",
    "Vineland",
    "Virginia Beach",
    "Visalia",
    "Vista",
    "Waco",
    "Waipahu",
    "Waldorf",
    "Walnut Creek",
    "Waltham",
    "Warner Robins",
    "Warren",
    "Warwick",
    "Washington",
    "Waterbury",
    "Waterloo",
    "Watsonville",
    "Waukegan",
    "Waukesha",
    "Wauwatosa",
    "Wellington",
    "Wesley Chapel",
    "West Allis",
    "West Babylon",
    "West Covina",
    "West Des Moines",
    "West Hartford",
    "West Haven",
    "West Jordan",
    "West Lafayette",
    "West New York",
    "West Palm Beach",
    "West Sacramento",
    "West Seneca",
    "West Valley City",
    "Westfield",
    "Westland",
    "Westminster",
    "Westminster",
    "Weston",
    "Weymouth Town",
    "Wheaton",
    "Wheaton",
    "White Plains",
    "Whittier",
    "Wichita",
    "Wichita Falls",
    "Wilmington",
    "Wilmington",
    "Wilson",
    "Winston-Salem",
    "Woodbury",
    "Woodland",
    "Worcester",
    "Wylie",
    "Wyoming",
    "Yakima",
    "Yonkers",
    "Yorba Linda",
    "York",
    "Youngstown",
    "Yuba City",
    "Yucaipa",
    "Yuma"
];

},{}],"ikNLr":[function(require,module,exports) {
module["exports"] = [
    "Avon",
    "Bedfordshire",
    "Berkshire",
    "Borders",
    "Buckinghamshire",
    "Cambridgeshire"
];

},{}],"4Svim":[function(require,module,exports) {
module["exports"] = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica (the territory South of 60 deg S)",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island (Bouvetoya)",
    "Brazil",
    "British Indian Ocean Territory (Chagos Archipelago)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Faroe Islands",
    "Falkland Islands (Malvinas)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Democratic People's Republic of Korea",
    "Republic of Korea",
    "Kuwait",
    "Kyrgyz Republic",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands Antilles",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthelemy",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia (Slovak Republic)",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard & Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

},{}],"8afTC":[function(require,module,exports) {
module["exports"] = [
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AO",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AW",
    "AX",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BL",
    "BM",
    "BN",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BT",
    "BV",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CC",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CK",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CW",
    "CX",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "EH",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FO",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GF",
    "GG",
    "GH",
    "GI",
    "GL",
    "GM",
    "GN",
    "GP",
    "GQ",
    "GR",
    "GS",
    "GT",
    "GU",
    "GW",
    "GY",
    "HK",
    "HM",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MF",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MQ",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NC",
    "NE",
    "NF",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NU",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PM",
    "PN",
    "PR",
    "PS",
    "PT",
    "PW",
    "PY",
    "QA",
    "RE",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SX",
    "SY",
    "SZ",
    "TC",
    "TD",
    "TF",
    "TG",
    "TH",
    "TJ",
    "TK",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "UM",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VG",
    "VI",
    "VN",
    "VU",
    "WF",
    "WS",
    "YE",
    "YT",
    "ZA",
    "ZM",
    "ZW"
];

},{}],"d5wSw":[function(require,module,exports) {
module["exports"] = [
    "BGD",
    "BEL",
    "BFA",
    "BGR",
    "BIH",
    "BRB",
    "WLF",
    "BLM",
    "BMU",
    "BRN",
    "BOL",
    "BHR",
    "BDI",
    "BEN",
    "BTN",
    "JAM",
    "BVT",
    "BWA",
    "WSM",
    "BES",
    "BRA",
    "BHS",
    "JEY",
    "BLR",
    "BLZ",
    "RUS",
    "RWA",
    "SRB",
    "TLS",
    "REU",
    "TKM",
    "TJK",
    "ROU",
    "TKL",
    "GNB",
    "GUM",
    "GTM",
    "SGS",
    "GRC",
    "GNQ",
    "GLP",
    "JPN",
    "GUY",
    "GGY",
    "GUF",
    "GEO",
    "GRD",
    "GBR",
    "GAB",
    "SLV",
    "GIN",
    "GMB",
    "GRL",
    "GIB",
    "GHA",
    "OMN",
    "TUN",
    "JOR",
    "HRV",
    "HTI",
    "HUN",
    "HKG",
    "HND",
    "HMD",
    "VEN",
    "PRI",
    "PSE",
    "PLW",
    "PRT",
    "SJM",
    "PRY",
    "IRQ",
    "PAN",
    "PYF",
    "PNG",
    "PER",
    "PAK",
    "PHL",
    "PCN",
    "POL",
    "SPM",
    "ZMB",
    "ESH",
    "EST",
    "EGY",
    "ZAF",
    "ECU",
    "ITA",
    "VNM",
    "SLB",
    "ETH",
    "SOM",
    "ZWE",
    "SAU",
    "ESP",
    "ERI",
    "MNE",
    "MDA",
    "MDG",
    "MAF",
    "MAR",
    "MCO",
    "UZB",
    "MMR",
    "MLI",
    "MAC",
    "MNG",
    "MHL",
    "MKD",
    "MUS",
    "MLT",
    "MWI",
    "MDV",
    "MTQ",
    "MNP",
    "MSR",
    "MRT",
    "IMN",
    "UGA",
    "TZA",
    "MYS",
    "MEX",
    "ISR",
    "FRA",
    "IOT",
    "SHN",
    "FIN",
    "FJI",
    "FLK",
    "FSM",
    "FRO",
    "NIC",
    "NLD",
    "NOR",
    "NAM",
    "VUT",
    "NCL",
    "NER",
    "NFK",
    "NGA",
    "NZL",
    "NPL",
    "NRU",
    "NIU",
    "COK",
    "XKX",
    "CIV",
    "CHE",
    "COL",
    "CHN",
    "CMR",
    "CHL",
    "CCK",
    "CAN",
    "COG",
    "CAF",
    "COD",
    "CZE",
    "CYP",
    "CXR",
    "CRI",
    "CUW",
    "CPV",
    "CUB",
    "SWZ",
    "SYR",
    "SXM",
    "KGZ",
    "KEN",
    "SSD",
    "SUR",
    "KIR",
    "KHM",
    "KNA",
    "COM",
    "STP",
    "SVK",
    "KOR",
    "SVN",
    "PRK",
    "KWT",
    "SEN",
    "SMR",
    "SLE",
    "SYC",
    "KAZ",
    "CYM",
    "SGP",
    "SWE",
    "SDN",
    "DOM",
    "DMA",
    "DJI",
    "DNK",
    "VGB",
    "DEU",
    "YEM",
    "DZA",
    "USA",
    "URY",
    "MYT",
    "UMI",
    "LBN",
    "LCA",
    "LAO",
    "TUV",
    "TWN",
    "TTO",
    "TUR",
    "LKA",
    "LIE",
    "LVA",
    "TON",
    "LTU",
    "LUX",
    "LBR",
    "LSO",
    "THA",
    "ATF",
    "TGO",
    "TCD",
    "TCA",
    "LBY",
    "VAT",
    "VCT",
    "ARE",
    "AND",
    "ATG",
    "AFG",
    "AIA",
    "VIR",
    "ISL",
    "IRN",
    "ARM",
    "ALB",
    "AGO",
    "ATA",
    "ASM",
    "ARG",
    "AUS",
    "AUT",
    "ABW",
    "IND",
    "ALA",
    "AZE",
    "IRL",
    "IDN",
    "UKR",
    "QAT",
    "MOZ"
];

},{}],"8bi5L":[function(require,module,exports) {
module["exports"] = [
    "#####",
    "####",
    "###"
];

},{}],"cS8We":[function(require,module,exports) {
module["exports"] = [
    "Alley",
    "Avenue",
    "Branch",
    "Bridge",
    "Brook",
    "Brooks",
    "Burg",
    "Burgs",
    "Bypass",
    "Camp",
    "Canyon",
    "Cape",
    "Causeway",
    "Center",
    "Centers",
    "Circle",
    "Circles",
    "Cliff",
    "Cliffs",
    "Club",
    "Common",
    "Corner",
    "Corners",
    "Course",
    "Court",
    "Courts",
    "Cove",
    "Coves",
    "Creek",
    "Crescent",
    "Crest",
    "Crossing",
    "Crossroad",
    "Curve",
    "Dale",
    "Dam",
    "Divide",
    "Drive",
    "Drive",
    "Drives",
    "Estate",
    "Estates",
    "Expressway",
    "Extension",
    "Extensions",
    "Fall",
    "Falls",
    "Ferry",
    "Field",
    "Fields",
    "Flat",
    "Flats",
    "Ford",
    "Fords",
    "Forest",
    "Forge",
    "Forges",
    "Fork",
    "Forks",
    "Fort",
    "Freeway",
    "Garden",
    "Gardens",
    "Gateway",
    "Glen",
    "Glens",
    "Green",
    "Greens",
    "Grove",
    "Groves",
    "Harbor",
    "Harbors",
    "Haven",
    "Heights",
    "Highway",
    "Hill",
    "Hills",
    "Hollow",
    "Inlet",
    "Inlet",
    "Island",
    "Island",
    "Islands",
    "Islands",
    "Isle",
    "Isle",
    "Junction",
    "Junctions",
    "Key",
    "Keys",
    "Knoll",
    "Knolls",
    "Lake",
    "Lakes",
    "Land",
    "Landing",
    "Lane",
    "Light",
    "Lights",
    "Loaf",
    "Lock",
    "Locks",
    "Locks",
    "Lodge",
    "Lodge",
    "Loop",
    "Mall",
    "Manor",
    "Manors",
    "Meadow",
    "Meadows",
    "Mews",
    "Mill",
    "Mills",
    "Mission",
    "Mission",
    "Motorway",
    "Mount",
    "Mountain",
    "Mountain",
    "Mountains",
    "Mountains",
    "Neck",
    "Orchard",
    "Oval",
    "Overpass",
    "Park",
    "Parks",
    "Parkway",
    "Parkways",
    "Pass",
    "Passage",
    "Path",
    "Pike",
    "Pine",
    "Pines",
    "Place",
    "Plain",
    "Plains",
    "Plains",
    "Plaza",
    "Plaza",
    "Point",
    "Points",
    "Port",
    "Port",
    "Ports",
    "Ports",
    "Prairie",
    "Prairie",
    "Radial",
    "Ramp",
    "Ranch",
    "Rapid",
    "Rapids",
    "Rest",
    "Ridge",
    "Ridges",
    "River",
    "Road",
    "Road",
    "Roads",
    "Roads",
    "Route",
    "Row",
    "Rue",
    "Run",
    "Shoal",
    "Shoals",
    "Shore",
    "Shores",
    "Skyway",
    "Spring",
    "Springs",
    "Springs",
    "Spur",
    "Spurs",
    "Square",
    "Square",
    "Squares",
    "Squares",
    "Station",
    "Station",
    "Stravenue",
    "Stravenue",
    "Stream",
    "Stream",
    "Street",
    "Street",
    "Streets",
    "Summit",
    "Summit",
    "Terrace",
    "Throughway",
    "Trace",
    "Track",
    "Trafficway",
    "Trail",
    "Trail",
    "Tunnel",
    "Tunnel",
    "Turnpike",
    "Turnpike",
    "Underpass",
    "Union",
    "Unions",
    "Valley",
    "Valleys",
    "Via",
    "Viaduct",
    "View",
    "Views",
    "Village",
    "Village",
    "Villages",
    "Ville",
    "Vista",
    "Vista",
    "Walk",
    "Walks",
    "Wall",
    "Way",
    "Ways",
    "Well",
    "Wells"
];

},{}],"79jIY":[function(require,module,exports) {
module["exports"] = [
    "Apt. ###",
    "Suite ###"
];

},{}],"dwSCr":[function(require,module,exports) {
module["exports"] = [
    "#####",
    "#####-####"
];

},{}],"4lGjH":[function(require,module,exports) {
module["exports"] = [
    "#####",
    "#####-####"
];

},{}],"3hEy4":[function(require,module,exports) {
module["exports"] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

},{}],"ejtkm":[function(require,module,exports) {
module["exports"] = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
];

},{}],"3cFKj":[function(require,module,exports) {
module["exports"] = [
    "Pacific/Midway",
    "Pacific/Pago_Pago",
    "Pacific/Honolulu",
    "America/Juneau",
    "America/Los_Angeles",
    "America/Tijuana",
    "America/Denver",
    "America/Phoenix",
    "America/Chihuahua",
    "America/Mazatlan",
    "America/Chicago",
    "America/Regina",
    "America/Mexico_City",
    "America/Mexico_City",
    "America/Monterrey",
    "America/Guatemala",
    "America/New_York",
    "America/Indiana/Indianapolis",
    "America/Bogota",
    "America/Lima",
    "America/Lima",
    "America/Halifax",
    "America/Caracas",
    "America/La_Paz",
    "America/Santiago",
    "America/St_Johns",
    "America/Sao_Paulo",
    "America/Argentina/Buenos_Aires",
    "America/Guyana",
    "America/Godthab",
    "Atlantic/South_Georgia",
    "Atlantic/Azores",
    "Atlantic/Cape_Verde",
    "Europe/Dublin",
    "Europe/London",
    "Europe/Lisbon",
    "Europe/London",
    "Africa/Casablanca",
    "Africa/Monrovia",
    "Etc/UTC",
    "Europe/Belgrade",
    "Europe/Bratislava",
    "Europe/Budapest",
    "Europe/Ljubljana",
    "Europe/Prague",
    "Europe/Sarajevo",
    "Europe/Skopje",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Brussels",
    "Europe/Copenhagen",
    "Europe/Madrid",
    "Europe/Paris",
    "Europe/Amsterdam",
    "Europe/Berlin",
    "Europe/Berlin",
    "Europe/Rome",
    "Europe/Stockholm",
    "Europe/Vienna",
    "Africa/Algiers",
    "Europe/Bucharest",
    "Africa/Cairo",
    "Europe/Helsinki",
    "Europe/Kiev",
    "Europe/Riga",
    "Europe/Sofia",
    "Europe/Tallinn",
    "Europe/Vilnius",
    "Europe/Athens",
    "Europe/Istanbul",
    "Europe/Minsk",
    "Asia/Jerusalem",
    "Africa/Harare",
    "Africa/Johannesburg",
    "Europe/Moscow",
    "Europe/Moscow",
    "Europe/Moscow",
    "Asia/Kuwait",
    "Asia/Riyadh",
    "Africa/Nairobi",
    "Asia/Baghdad",
    "Asia/Tehran",
    "Asia/Muscat",
    "Asia/Muscat",
    "Asia/Baku",
    "Asia/Tbilisi",
    "Asia/Yerevan",
    "Asia/Kabul",
    "Asia/Yekaterinburg",
    "Asia/Karachi",
    "Asia/Karachi",
    "Asia/Tashkent",
    "Asia/Kolkata",
    "Asia/Kolkata",
    "Asia/Kolkata",
    "Asia/Kolkata",
    "Asia/Kathmandu",
    "Asia/Dhaka",
    "Asia/Dhaka",
    "Asia/Colombo",
    "Asia/Almaty",
    "Asia/Novosibirsk",
    "Asia/Rangoon",
    "Asia/Bangkok",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Krasnoyarsk",
    "Asia/Shanghai",
    "Asia/Chongqing",
    "Asia/Hong_Kong",
    "Asia/Urumqi",
    "Asia/Kuala_Lumpur",
    "Asia/Singapore",
    "Asia/Taipei",
    "Australia/Perth",
    "Asia/Irkutsk",
    "Asia/Ulaanbaatar",
    "Asia/Seoul",
    "Asia/Tokyo",
    "Asia/Tokyo",
    "Asia/Tokyo",
    "Asia/Yakutsk",
    "Australia/Darwin",
    "Australia/Adelaide",
    "Australia/Melbourne",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Brisbane",
    "Australia/Hobart",
    "Asia/Vladivostok",
    "Pacific/Guam",
    "Pacific/Port_Moresby",
    "Asia/Magadan",
    "Asia/Magadan",
    "Pacific/Noumea",
    "Pacific/Fiji",
    "Asia/Kamchatka",
    "Pacific/Majuro",
    "Pacific/Auckland",
    "Pacific/Auckland",
    "Pacific/Tongatapu",
    "Pacific/Fakaofo",
    "Pacific/Apia"
];

},{}],"6rRHR":[function(require,module,exports) {
module["exports"] = [
    "#{city_prefix} #{Name.first_name}#{city_suffix}",
    "#{city_prefix} #{Name.first_name}",
    "#{Name.first_name}#{city_suffix}",
    "#{Name.last_name}#{city_suffix}"
];

},{}],"2cZnL":[function(require,module,exports) {
module["exports"] = [
    "#{Name.first_name} #{street_suffix}",
    "#{Name.last_name} #{street_suffix}"
];

},{}],"ajY7J":[function(require,module,exports) {
module["exports"] = [
    "#{building_number} #{street_name}"
];

},{}],"80sSv":[function(require,module,exports) {
module["exports"] = [
    "United States of America"
];

},{}],"aTu5y":[function(require,module,exports) {
module["exports"] = [
    "North",
    "East",
    "South",
    "West",
    "Northeast",
    "Northwest",
    "Southeast",
    "Southwest"
];

},{}],"b4LZJ":[function(require,module,exports) {
module["exports"] = [
    "N",
    "E",
    "S",
    "W",
    "NE",
    "NW",
    "SE",
    "SW"
];

},{}],"7pyjQ":[function(require,module,exports) {
var animal = {
};
module['exports'] = animal;
animal.dog = require("./dog");
animal.cat = require("./cat");
animal.snake = require("./snake");
animal.horse = require("./horse");
animal.cetacean = require("./cetacean");
animal.rabbit = require("./rabbit");
animal.insect = require("./insect");
animal.bear = require("./bear");
animal.lion = require("./lion");
animal.cow = require("./cow");
animal.bird = require("./bird");
animal.fish = require("./fish");
animal.crocodilia = require("./crocodilia");
animal.type = require("./type");

},{"./dog":"7aWnM","./cat":"keTFt","./snake":"dJQSi","./horse":"R8Pw2","./cetacean":"lVGZX","./rabbit":"lLhTM","./insect":"eskwX","./bear":"3kCSb","./lion":"36q0o","./cow":"gtAMw","./bird":"cS2Js","./fish":"cJOA8","./crocodilia":"1q0l3","./type":"ctEbT"}],"7aWnM":[function(require,module,exports) {
module["exports"] = [
    "Affenpinscher",
    "Afghan Hound",
    "Aidi",
    "Airedale Terrier",
    "Akbash",
    "Akita",
    "Alano Español",
    "Alapaha Blue Blood Bulldog",
    "Alaskan Husky",
    "Alaskan Klee Kai",
    "Alaskan Malamute",
    "Alopekis",
    "Alpine Dachsbracke",
    "American Bulldog",
    "American Bully",
    "American Cocker Spaniel",
    "American English Coonhound",
    "American Foxhound",
    "American Hairless Terrier",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Andalusian Hound",
    "Anglo-Français de Petite Vénerie",
    "Appenzeller Sennenhund",
    "Ariegeois",
    "Armant",
    "Armenian Gampr dog",
    "Artois Hound",
    "Australian Cattle Dog",
    "Australian Kelpie",
    "Australian Shepherd",
    "Australian Stumpy Tail Cattle Dog",
    "Australian Terrier",
    "Austrian Black and Tan Hound",
    "Austrian Pinscher",
    "Azawakh",
    "Bakharwal dog",
    "Banjara Hound",
    "Barbado da Terceira",
    "Barbet",
    "Basenji",
    "Basque Shepherd Dog",
    "Basset Artésien Normand",
    "Basset Bleu de Gascogne",
    "Basset Fauve de Bretagne",
    "Basset Hound",
    "Bavarian Mountain Hound",
    "Beagle",
    "Beagle-Harrier",
    "Belgian Shepherd",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Bergamasco Shepherd",
    "Berger Picard",
    "Bernese Mountain Dog",
    "Bhotia",
    "Bichon Frisé",
    "Billy",
    "Black and Tan Coonhound",
    "Black Norwegian Elkhound",
    "Black Russian Terrier",
    "Black Mouth Cur",
    "Bloodhound",
    "Blue Lacy",
    "Blue Picardy Spaniel",
    "Bluetick Coonhound",
    "Boerboel",
    "Bohemian Shepherd",
    "Bolognese",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    'Bosnian Coarse-haired Hound',
    "Boston Terrier",
    "Bouvier des Ardennes",
    "Bouvier des Flandres",
    "Boxer",
    "Boykin Spaniel",
    "Bracco Italiano",
    "Braque d'Auvergne",
    "Braque de l'Ariège",
    "Braque du Bourbonnais",
    "Braque Francais",
    "Braque Saint-Germain",
    "Briard",
    "Briquet Griffon Vendéen",
    "Brittany",
    "Broholmer",
    "Bruno Jura Hound",
    "Brussels Griffon",
    "Bucovina Shepherd Dog",
    "Bull Arab",
    "Bull Terrier",
    "Bulldog",
    "Bullmastiff",
    "Bully Kutta",
    'Burgos Pointer',
    "Cairn Terrier",
    "Campeiro Bulldog",
    "Canaan Dog",
    "Canadian Eskimo Dog",
    "Cane Corso",
    "Cane di Oropa",
    "Cane Paratore",
    "Cantabrian Water Dog",
    "Can de Chira",
    "Cão da Serra de Aires",
    "Cão de Castro Laboreiro",
    "Cão de Gado Transmontano",
    "Cão Fila de São Miguel",
    "Cardigan Welsh Corgi",
    "Carea Castellano Manchego",
    "Carolina Dog",
    "Carpathian Shepherd Dog",
    "Catahoula Leopard Dog",
    "Catalan Sheepdog",
    "Caucasian Shepherd Dog",
    "Cavalier King Charles Spaniel",
    "Central Asian Shepherd Dog",
    "Cesky Fousek",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Chien Français Blanc et Noir",
    "Chien Français Blanc et Orange",
    "Chien Français Tricolore",
    "Chihuahua",
    "Chilean Terrier",
    "Chinese Chongqing Dog",
    "Chinese Crested Dog",
    "Chinook",
    "Chippiparai",
    "Chongqing dog",
    "Chortai",
    "Chow Chow",
    "Cimarrón Uruguayo",
    "Cirneco dell'Etna",
    "Clumber Spaniel",
    "Colombian fino hound",
    "Coton de Tulear",
    "Cretan Hound",
    "Croatian Sheepdog",
    "Curly-Coated Retriever",
    "Cursinu",
    "Czechoslovakian Wolfdog",
    "Dachshund",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Danish-Swedish Farmdog",
    "Denmark Feist",
    "Dingo",
    "Doberman Pinscher",
    "Dogo Argentino",
    "Dogo Guatemalteco",
    "Dogo Sardesco",
    "Dogue Brasileiro",
    "Dogue de Bordeaux",
    "Drentse Patrijshond",
    "Drever",
    "Dunker",
    "Dutch Shepherd",
    "Dutch Smoushond",
    "East Siberian Laika",
    "East European Shepherd",
    "English Cocker Spaniel",
    "English Foxhound",
    "English Mastiff",
    "English Setter",
    "English Shepherd",
    "English Springer Spaniel",
    "English Toy Terrier",
    "Entlebucher Mountain Dog",
    "Estonian Hound",
    "Estrela Mountain Dog",
    "Eurasier",
    "Field Spaniel",
    "Fila Brasileiro",
    "Finnish Hound",
    "Finnish Lapphund",
    "Finnish Spitz",
    "Flat-Coated Retriever",
    "French Bulldog",
    "French Spaniel",
    "Galgo Español",
    "Galician Shepherd Dog",
    "Garafian Shepherd",
    "Gascon Saintongeois",
    "Georgian Shepherd",
    "German Hound",
    "German Longhaired Pointer",
    "German Pinscher",
    "German Roughhaired Pointer",
    "German Shepherd Dog",
    "German Shorthaired Pointer",
    "German Spaniel",
    "German Spitz",
    "German Wirehaired Pointer",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Gończy Polski",
    "Gordon Setter",
    "Grand Anglo-Français Blanc et Noir",
    "Grand Anglo-Français Blanc et Orange",
    "Grand Anglo-Français Tricolore",
    "Grand Basset Griffon Vendéen",
    "Grand Bleu de Gascogne",
    "Grand Griffon Vendéen",
    "Great Dane",
    "Greater Swiss Mountain Dog",
    "Greek Harehound",
    "Greek Shepherd",
    "Greenland Dog",
    "Greyhound",
    "Griffon Bleu de Gascogne",
    "Griffon Fauve de Bretagne",
    "Griffon Nivernais",
    "Gull Dong",
    "Gull Terrier",
    "Hällefors Elkhound",
    "Hamiltonstövare",
    "Hanover Hound",
    "Harrier",
    "Havanese",
    "Hierran Wolfdog",
    "Hokkaido",
    "Hovawart",
    "Huntaway",
    "Hygen Hound",
    "Ibizan Hound",
    "Icelandic Sheepdog",
    "Indian pariah dog",
    "Indian Spitz",
    "Irish Red and White Setter",
    "Irish Setter",
    "Irish Terrier",
    "Irish Water Spaniel",
    "Irish Wolfhound",
    "Istrian Coarse-haired Hound",
    "Istrian Shorthaired Hound",
    "Italian Greyhound",
    "Jack Russell Terrier",
    "Jagdterrier",
    "Japanese Chin",
    "Japanese Spitz",
    "Japanese Terrier",
    "Jindo",
    "Jonangi",
    "Kai Ken",
    "Kaikadi",
    "Kangal Shepherd Dog",
    "Kanni",
    "Karakachan dog",
    "Karelian Bear Dog",
    "Kars",
    "Karst Shepherd",
    "Keeshond",
    "Kerry Beagle",
    "Kerry Blue Terrier",
    "King Charles Spaniel",
    "King Shepherd",
    "Kintamani",
    "Kishu",
    "Kokoni",
    "Kombai",
    "Komondor",
    "Kooikerhondje",
    "Koolie",
    "Koyun dog",
    "Kromfohrländer",
    "Kuchi",
    "Kuvasz",
    "Labrador Retriever",
    "Lagotto Romagnolo",
    "Lakeland Terrier",
    "Lancashire Heeler",
    "Landseer",
    "Lapponian Herder",
    "Large Münsterländer",
    "Leonberger",
    "Levriero Sardo",
    "Lhasa Apso",
    "Lithuanian Hound",
    "Löwchen",
    "Lupo Italiano",
    "Mackenzie River Husky",
    "Magyar agár",
    "Mahratta Greyhound",
    "Maltese",
    "Manchester Terrier",
    "Maremmano-Abruzzese Sheepdog",
    "McNab dog",
    "Miniature American Shepherd",
    "Miniature Bull Terrier",
    "Miniature Fox Terrier",
    "Miniature Pinscher",
    "Miniature Schnauzer",
    "Molossus of Epirus",
    "Montenegrin Mountain Hound",
    "Mountain Cur",
    "Mountain Feist",
    "Mucuchies",
    "Mudhol Hound",
    "Mudi",
    "Neapolitan Mastiff",
    "New Guinea Singing Dog",
    "New Zealand Heading Dog",
    "Newfoundland",
    "Norfolk Terrier",
    "Norrbottenspets",
    "Northern Inuit Dog",
    "Norwegian Buhund",
    "Norwegian Elkhound",
    "Norwegian Lundehund",
    "Norwich Terrier",
    "Nova Scotia Duck Tolling Retriever",
    "Old Croatian Sighthound",
    "Old Danish Pointer",
    "Old English Sheepdog",
    "Old English Terrier",
    "Olde English Bulldogge",
    "Otterhound",
    "Pachon Navarro",
    "Pampas Deerhound",
    "Paisley Terrier",
    "Papillon",
    "Parson Russell Terrier",
    "Pastore della Lessinia e del Lagorai",
    "Patagonian Sheepdog",
    "Patterdale Terrier",
    "Pekingese",
    "Pembroke Welsh Corgi",
    "Perro Majorero",
    "Perro de Pastor Mallorquin",
    "Perro de Presa Canario",
    "Perro de Presa Mallorquin",
    "Peruvian Inca Orchid",
    "Petit Basset Griffon Vendéen",
    "Petit Bleu de Gascogne",
    "Phalène",
    "Pharaoh Hound",
    "Phu Quoc Ridgeback",
    "Picardy Spaniel",
    "Plummer Terrier",
    "Plott Hound",
    "Podenco Canario",
    "Podenco Valenciano",
    "Pointer",
    "Poitevin",
    "Polish Greyhound",
    "Polish Hound",
    "Polish Lowland Sheepdog",
    "Polish Tatra Sheepdog",
    "Pomeranian",
    "Pont-Audemer Spaniel",
    "Poodle",
    "Porcelaine",
    "Portuguese Podengo",
    "Portuguese Pointer",
    "Portuguese Water Dog",
    "Posavac Hound",
    "Pražský Krysařík",
    "Pshdar Dog",
    "Pudelpointer",
    "Pug",
    "Puli",
    "Pumi",
    "Pungsan Dog",
    "Pyrenean Mastiff",
    "Pyrenean Mountain Dog",
    "Pyrenean Sheepdog",
    "Rafeiro do Alentejo",
    "Rajapalayam",
    "Rampur Greyhound",
    "Rat Terrier",
    "Ratonero Bodeguero Andaluz",
    "Ratonero Mallorquin",
    "Ratonero Murciano de Huerta",
    "Ratonero Valenciano",
    "Redbone Coonhound",
    "Rhodesian Ridgeback",
    "Romanian Mioritic Shepherd Dog",
    "Romanian Raven Shepherd Dog",
    "Rottweiler",
    "Rough Collie",
    "Russian Spaniel",
    "Russian Toy",
    "Russo-European Laika",
    "Saarloos Wolfdog",
    "Sabueso Español",
    "Saint Bernard",
    "Saint Hubert Jura Hound",
    "Saint-Usuge Spaniel",
    "Saluki",
    "Samoyed",
    "Sapsali",
    "Sarabi dog",
    "Šarplaninac",
    "Schapendoes",
    "Schillerstövare",
    "Schipperke",
    "Schweizer Laufhund",
    "Schweizerischer Niederlaufhund",
    "Scottish Deerhound",
    "Scottish Terrier",
    "Sealyham Terrier",
    "Segugio dell'Appennino",
    "Segugio Italiano",
    "Segugio Maremmano",
    "Seppala Siberian Sleddog",
    "Serbian Hound",
    "Serbian Tricolour Hound",
    "Serrano Bulldog",
    "Shar Pei",
    "Shetland Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Shikoku",
    "Shiloh Shepherd",
    "Siberian Husky",
    "Silken Windhound",
    "Silky Terrier",
    "Sinhala Hound",
    "Skye Terrier",
    "Sloughi",
    "Slovakian Wirehaired Pointer",
    "Slovenský Cuvac",
    "Slovenský Kopov",
    "Smalandstövare",
    "Small Greek domestic dog",
    "Small Münsterländer",
    "Smooth Collie",
    "Smooth Fox Terrier",
    "Soft-Coated Wheaten Terrier",
    "South Russian Ovcharka",
    "Spanish Mastiff",
    "Spanish Water Dog",
    "Spinone Italiano",
    "Sporting Lucas Terrier",
    "Sardinian Shepherd Dog",
    "Stabyhoun",
    "Staffordshire Bull Terrier",
    "Standard Schnauzer",
    "Stephens Stock",
    "Styrian Coarse-haired Hound",
    "Sussex Spaniel",
    "Swedish Elkhound",
    "Swedish Lapphund",
    "Swedish Vallhund",
    "Swedish White Elkhound",
    "Taigan",
    "Taiwan Dog",
    "Tamaskan Dog",
    "Teddy Roosevelt Terrier",
    "Telomian",
    "Tenterfield Terrier",
    "Terrier Brasileiro",
    "Thai Bangkaew Dog",
    "Thai Ridgeback",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Tornjak",
    "Tosa",
    "Toy Fox Terrier",
    "Toy Manchester Terrier",
    "Transylvanian Hound",
    "Treeing Cur",
    "Treeing Feist",
    "Treeing Tennessee Brindle",
    "Treeing Walker Coonhound",
    "Trigg Hound",
    "Tyrolean Hound",
    "Vikhan",
    "Villano de Las Encartaciones",
    "Villanuco de Las Encartaciones",
    "Vizsla",
    "Volpino Italiano",
    "Weimaraner",
    "Welsh Sheepdog",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "West Highland White Terrier",
    "West Siberian Laika",
    "Westphalian Dachsbracke",
    "Wetterhoun",
    "Whippet",
    "White Shepherd",
    "White Swiss Shepherd Dog",
    "Wire Fox Terrier",
    "Wirehaired Pointing Griffon",
    "Wirehaired Vizsla",
    "Xiasi Dog",
    "Xoloitzcuintli",
    "Yakutian Laika",
    "Yorkshire Terrier", 
];

},{}],"keTFt":[function(require,module,exports) {
module["exports"] = [
    "Abyssinian",
    "American Bobtail",
    "American Curl",
    "American Shorthair",
    "American Wirehair",
    "Balinese",
    "Bengal",
    "Birman",
    "Bombay",
    "British Shorthair",
    "Burmese",
    "Chartreux",
    "Chausie",
    "Cornish Rex",
    "Devon Rex",
    "Donskoy",
    "Egyptian Mau",
    "Exotic Shorthair",
    "Havana",
    "Highlander",
    "Himalayan",
    "Japanese Bobtail",
    "Korat",
    "Kurilian Bobtail",
    "LaPerm",
    "Maine Coon",
    "Manx",
    "Minskin",
    "Munchkin",
    "Nebelung",
    "Norwegian Forest Cat",
    "Ocicat",
    "Ojos Azules",
    "Oriental",
    "Persian",
    "Peterbald",
    "Pixiebob",
    "Ragdoll",
    "Russian Blue",
    "Savannah",
    "Scottish Fold",
    "Selkirk Rex",
    "Serengeti",
    "Siberian",
    "Siamese",
    "Singapura",
    "Snowshoe",
    "Sokoke",
    "Somali",
    "Sphynx",
    "Thai",
    "Tonkinese",
    "Toyger",
    "Turkish Angora",
    "Turkish Van"
];

},{}],"dJQSi":[function(require,module,exports) {
module["exports"] = [
    "Viper Adder",
    "Common adder",
    "Death Adder",
    "Desert death adder",
    "Horned adder",
    "Long-nosed adder",
    "Many-horned adder",
    "Mountain adder",
    "Mud adder",
    "Namaqua dwarf adder",
    "Nightingale adder",
    "Peringuey's adder",
    "Puff adder",
    "African puff adder",
    "Rhombic night adder",
    "Sand adder",
    "Dwarf sand adder",
    "Namib dwarf sand adder",
    "Water adder",
    "Aesculapian snake",
    "Anaconda",
    "Bolivian anaconda",
    "De Schauensee's anaconda",
    "Green anaconda",
    "Yellow anaconda",
    "Arafura file snake",
    "Asp",
    "European asp",
    "Egyptian asp",
    "African beaked snake",
    "Ball Python",
    "Bird snake",
    "Black-headed snake",
    "Mexican black kingsnake",
    "Black rat snake",
    "Black snake",
    "Red-bellied black snake",
    "Blind snake",
    "Brahminy blind snake",
    "Texas blind snake",
    "Western blind snake",
    "Boa",
    "Abaco Island boa",
    "Amazon tree boa",
    "Boa constrictor",
    "Cuban boa",
    "Dumeril's boa",
    "Dwarf boa",
    "Emerald tree boa",
    "Hogg Island boa",
    "Jamaican boa",
    "Madagascar ground boa",
    "Madagascar tree boa",
    "Puerto Rican boa",
    "Rainbow boa",
    "Red-tailed boa",
    "Rosy boa",
    "Rubber boa",
    "Sand boa",
    "Tree boa",
    "Boiga",
    "Boomslang",
    "Brown snake",
    "Eastern brown snake",
    "Bull snake",
    "Bushmaster",
    "Dwarf beaked snake",
    "Rufous beaked snake",
    "Canebrake",
    "Cantil",
    "Cascabel",
    "Cat-eyed snake",
    "Banded cat-eyed snake",
    "Green cat-eyed snake",
    "Cat snake",
    "Andaman cat snake",
    "Beddome's cat snake",
    "Dog-toothed cat snake",
    "Forsten's cat snake",
    "Gold-ringed cat snake",
    "Gray cat snake",
    "Many-spotted cat snake",
    "Tawny cat snake",
    "Chicken snake",
    "Coachwhip snake",
    "Cobra",
    "Andaman cobra",
    "Arabian cobra",
    "Asian cobra",
    "Banded water cobra",
    "Black-necked cobra",
    "Black-necked spitting cobra",
    "Black tree cobra",
    "Burrowing cobra",
    "Cape cobra",
    "Caspian cobra",
    "Congo water cobra",
    "Common cobra",
    "Eastern water cobra",
    "Egyptian cobra",
    "Equatorial spitting cobra",
    "False cobra",
    "False water cobra",
    "Forest cobra",
    "Gold tree cobra",
    "Indian cobra",
    "Indochinese spitting cobra",
    "Javan spitting cobra",
    "King cobra",
    "Mandalay cobra",
    "Mozambique spitting cobra",
    "North Philippine cobra",
    "Nubian spitting cobra",
    "Philippine cobra",
    "Red spitting cobra",
    "Rinkhals cobra",
    "Shield-nosed cobra",
    "Sinai desert cobra",
    "Southern Indonesian spitting cobra",
    "Southern Philippine cobra",
    "Southwestern black spitting cobra",
    "Snouted cobra",
    "Spectacled cobra",
    "Spitting cobra",
    "Storm water cobra",
    "Thai cobra",
    "Taiwan cobra",
    "Zebra spitting cobra",
    "Collett's snake",
    "Congo snake",
    "Copperhead",
    "American copperhead",
    "Australian copperhead",
    "Coral snake",
    "Arizona coral snake",
    "Beddome's coral snake",
    "Brazilian coral snake",
    "Cape coral snake",
    "Harlequin coral snake",
    "High Woods coral snake",
    "Malayan long-glanded coral snake",
    "Texas Coral Snake",
    "Western coral snake",
    "Corn snake",
    "South eastern corn snake",
    "Cottonmouth",
    "Crowned snake",
    "Cuban wood snake",
    "Eastern hognose snake",
    "Egg-eater",
    "Eastern coral snake",
    "Fer-de-lance",
    "Fierce snake",
    "Fishing snake",
    "Flying snake",
    "Golden tree snake",
    "Indian flying snake",
    "Moluccan flying snake",
    "Ornate flying snake",
    "Paradise flying snake",
    "Twin-Barred tree snake",
    "Banded Flying Snake",
    "Fox snake, three species of Pantherophis",
    "Forest flame snake",
    "Garter snake",
    "Checkered garter snake",
    "Common garter snake",
    "San Francisco garter snake",
    "Texas garter snake",
    "Cape gopher snake",
    "Grass snake",
    "Green snake",
    "Rough green snake",
    "Smooth green snake",
    "Ground snake",
    "Common ground snake",
    "Three-lined ground snake",
    "Western ground snake",
    "Habu",
    "Hognose snake",
    "Blonde hognose snake",
    "Dusty hognose snake",
    "Eastern hognose snake",
    "Jan's hognose snake",
    "Giant Malagasy hognose snake",
    "Mexican hognose snake",
    "South American hognose snake",
    "Hundred pacer",
    "Ikaheka snake",
    "Indigo snake",
    "Jamaican Tree Snake",
    "Keelback",
    "Asian keelback",
    "Assam keelback",
    "Black-striped keelback",
    "Buff striped keelback",
    "Burmese keelback",
    "Checkered keelback",
    "Common keelback",
    "Hill keelback",
    "Himalayan keelback",
    "Khasi Hills keelback",
    "Modest keelback",
    "Nicobar Island keelback",
    "Nilgiri keelback",
    "Orange-collared keelback",
    "Red-necked keelback",
    "Sikkim keelback",
    "Speckle-bellied keelback",
    "White-lipped keelback",
    "Wynaad keelback",
    "Yunnan keelback",
    "King brown",
    "King cobra",
    "King snake",
    "California kingsnake",
    "Desert kingsnake",
    "Grey-banded kingsnake",
    "North eastern king snake",
    "Prairie kingsnake",
    "Scarlet kingsnake",
    "Speckled kingsnake",
    "Krait",
    "Banded krait",
    "Blue krait",
    "Black krait",
    "Burmese krait",
    "Ceylon krait",
    "Indian krait",
    "Lesser black krait",
    "Malayan krait",
    "Many-banded krait",
    "Northeastern hill krait",
    "Red-headed krait",
    "Sind krait",
    "Large shield snake",
    "Lancehead",
    "Common lancehead",
    "Lora",
    "Grey Lora",
    "Lyre snake",
    "Baja California lyresnake",
    "Central American lyre snake",
    "Texas lyre snake",
    "Eastern lyre snake",
    "Machete savane",
    "Mamba",
    "Black mamba",
    "Green mamba",
    "Eastern green mamba",
    "Western green mamba",
    "Mamushi",
    "Mangrove snake",
    "Milk snake",
    "Moccasin snake",
    "Montpellier snake",
    "Mud snake",
    "Eastern mud snake",
    "Western mud snake",
    "Mussurana",
    "Night snake",
    "Cat-eyed night snake",
    "Texas night snake",
    "Nichell snake",
    "Narrowhead Garter Snake",
    "Nose-horned viper",
    "Rhinoceros viper",
    "Vipera ammodytes",
    "Parrot snake",
    "Mexican parrot snake",
    "Patchnose snake",
    "Perrotet's shieldtail snake",
    "Pine snake",
    "Pipe snake",
    "Asian pipe snake",
    "Dwarf pipe snake",
    "Red-tailed pipe snake",
    "Python",
    "African rock python",
    "Amethystine python",
    "Angolan python",
    "Australian scrub python",
    "Ball python",
    "Bismarck ringed python",
    "Black headed python",
    "Blood python",
    "Boelen python",
    "Borneo short-tailed python",
    "Bredl's python",
    "Brown water python",
    "Burmese python",
    "Calabar python",
    "Western carpet python",
    "Centralian carpet python",
    "Coastal carpet python",
    "Inland carpet python",
    "Jungle carpet python",
    "New Guinea carpet python",
    "Northwestern carpet python",
    "Southwestern carpet python",
    "Children's python",
    "Dauan Island water python",
    "Desert woma python",
    "Diamond python",
    "Flinders python",
    "Green tree python",
    "Halmahera python",
    "Indian python",
    "Indonesian water python",
    "Macklot's python",
    "Mollucan python",
    "Oenpelli python",
    "Olive python",
    "Papuan python",
    "Pygmy python",
    "Red blood python",
    "Reticulated python",
    "Kayaudi dwarf reticulated python",
    "Selayer reticulated python",
    "Rough-scaled python",
    "Royal python",
    "Savu python",
    "Spotted python",
    "Stimson's python",
    "Sumatran short-tailed python",
    "Tanimbar python",
    "Timor python",
    "Wetar Island python",
    "White-lipped python",
    "Brown white-lipped python",
    "Northern white-lipped python",
    "Southern white-lipped python",
    "Woma python",
    "Western woma python",
    "Queen snake",
    "Racer",
    "Bimini racer",
    "Buttermilk racer",
    "Eastern racer",
    "Eastern yellowbelly sad racer",
    "Mexican racer",
    "Southern black racer",
    "Tan racer",
    "West Indian racer",
    "Raddysnake",
    "Southwestern blackhead snake",
    "Rat snake",
    "Baird's rat snake",
    "Beauty rat snake",
    "Great Plains rat snake",
    "Green rat snake",
    "Japanese forest rat snake",
    "Japanese rat snake",
    "King rat snake",
    "Mandarin rat snake",
    "Persian rat snake",
    "Red-backed rat snake",
    "Twin-spotted rat snake",
    "Yellow-striped rat snake",
    "Manchurian Black Water Snake",
    "Rattlesnake",
    "Arizona black rattlesnake",
    "Aruba rattlesnake",
    "Chihuahuan ridge-nosed rattlesnake",
    "Coronado Island rattlesnake",
    "Durango rock rattlesnake",
    "Dusky pigmy rattlesnake",
    "Eastern diamondback rattlesnake",
    "Grand Canyon rattlesnake",
    "Great Basin rattlesnake",
    "Hopi rattlesnake",
    "Lance-headed rattlesnake",
    "Long-tailed rattlesnake",
    "Massasauga rattlesnake",
    "Mexican green rattlesnake",
    "Mexican west coast rattlesnake",
    "Midget faded rattlesnake",
    "Mojave rattlesnake",
    "Northern black-tailed rattlesnake",
    "Oaxacan small-headed rattlesnake",
    "Rattler",
    "Red diamond rattlesnake",
    "Southern Pacific rattlesnake",
    "Southwestern speckled rattlesnake",
    "Tancitaran dusky rattlesnake",
    "Tiger rattlesnake",
    "Timber rattlesnake",
    "Tropical rattlesnake",
    "Twin-spotted rattlesnake",
    "Uracoan rattlesnake",
    "Western diamondback rattlesnake",
    "Ribbon snake",
    "Rinkhals",
    "River jack",
    "Sea snake",
    "Annulated sea snake",
    "Beaked sea snake",
    "Dubois's sea snake",
    "Hardwicke's sea snake",
    "Hook Nosed Sea Snake",
    "Olive sea snake",
    "Pelagic sea snake",
    "Stoke's sea snake",
    "Yellow-banded sea snake",
    "Yellow-bellied sea snake",
    "Yellow-lipped sea snake",
    "Shield-tailed snake",
    "Sidewinder",
    "Colorado desert sidewinder",
    "Mojave desert sidewinder",
    "Sonoran sidewinder",
    "Small-eyed snake",
    "Smooth snake",
    "Brazilian smooth snake",
    "European smooth snake",
    "Stiletto snake",
    "Striped snake",
    "Japanese striped snake",
    "Sunbeam snake",
    "Taipan",
    "Central ranges taipan",
    "Coastal taipan",
    "Inland taipan",
    "Paupan taipan",
    "Tentacled snake",
    "Tic polonga",
    "Tiger snake",
    "Chappell Island tiger snake",
    "Common tiger snake",
    "Down's tiger snake",
    "Eastern tiger snake",
    "King Island tiger snake",
    "Krefft's tiger snake",
    "Peninsula tiger snake",
    "Tasmanian tiger snake",
    "Western tiger snake",
    "Tigre snake",
    "Tree snake",
    "Blanding's tree snake",
    "Blunt-headed tree snake",
    "Brown tree snake",
    "Long-nosed tree snake",
    "Many-banded tree snake",
    "Northern tree snake",
    "Trinket snake",
    "Black-banded trinket snake",
    "Twig snake",
    "African twig snake",
    "Twin Headed King Snake",
    "Titanboa",
    "Urutu",
    "Vine snake",
    "Asian Vine Snake, Whip Snake",
    "American Vine Snake",
    "Mexican vine snake",
    "Viper",
    "Asp viper",
    "Bamboo viper",
    "Bluntnose viper",
    "Brazilian mud Viper",
    "Burrowing viper",
    "Bush viper",
    "Great Lakes bush viper",
    "Hairy bush viper",
    "Nitsche's bush viper",
    "Rough-scaled bush viper",
    "Spiny bush viper",
    "Carpet viper",
    "Crossed viper",
    "Cyclades blunt-nosed viper",
    "Eyelash viper",
    "False horned viper",
    "Fea's viper",
    "Fifty pacer",
    "Gaboon viper",
    "Hognosed viper",
    "Horned desert viper",
    "Horned viper",
    "Jumping viper",
    "Kaznakov's viper",
    "Leaf-nosed viper",
    "Leaf viper",
    "Levant viper",
    "Long-nosed viper",
    "McMahon's viper",
    "Mole viper",
    "Nose-horned viper",
    "Rhinoceros viper",
    "Vipera ammodytes",
    "Palestine viper",
    "Pallas' viper",
    "Palm viper",
    "Amazonian palm viper",
    "Black-speckled palm-pitviper",
    "Eyelash palm-pitviper",
    "Green palm viper",
    "Mexican palm-pitviper",
    "Guatemalan palm viper",
    "Honduran palm viper",
    "Siamese palm viper",
    "Side-striped palm-pitviper",
    "Yellow-lined palm viper",
    "Pit viper",
    "Banded pitviper",
    "Bamboo pitviper",
    "Barbour's pit viper",
    "Black-tailed horned pit viper",
    "Bornean pitviper",
    "Brongersma's pitviper",
    "Brown spotted pitviper[4]",
    "Cantor's pitviper",
    "Elegant pitviper",
    "Eyelash pit viper",
    "Fan-Si-Pan horned pitviper",
    "Flat-nosed pitviper",
    "Godman's pit viper",
    "Green tree pit viper",
    "Habu pit viper",
    "Hagen's pitviper",
    "Horseshoe pitviper",
    "Jerdon's pitviper",
    "Kanburian pit viper",
    "Kaulback's lance-headed pitviper",
    "Kham Plateau pitviper",
    "Large-eyed pitviper",
    "Malabar rock pitviper",
    "Malayan pit viper",
    "Mangrove pit viper",
    "Mangshan pitviper",
    "Motuo bamboo pitviper",
    "Nicobar bamboo pitviper",
    "Philippine pitviper",
    "Pointed-scaled pit viper[5]",
    "Red-tailed bamboo pitviper",
    "Schultze's pitviper",
    "Stejneger's bamboo pitviper",
    "Sri Lankan pit viper",
    "Temple pit viper",
    "Tibetan bamboo pitviper",
    "Tiger pit viper",
    "Undulated pit viper",
    "Wagler's pit viper",
    "Wirot's pit viper",
    "Portuguese viper",
    "Saw-scaled viper",
    "Schlegel's viper",
    "Sedge viper",
    "Sharp-nosed viper",
    "Snorkel viper",
    "Temple viper",
    "Tree viper",
    "Chinese tree viper",
    "Guatemalan tree viper",
    "Hutton's tree viper",
    "Indian tree viper",
    "Large-scaled tree viper",
    "Malcolm's tree viper",
    "Nitsche's tree viper",
    "Pope's tree viper",
    "Rough-scaled tree viper",
    "Rungwe tree viper",
    "Sumatran tree viper",
    "White-lipped tree viper",
    "Ursini's viper",
    "Western hog-nosed viper",
    "Wart snake",
    "Water moccasin",
    "Water snake",
    "Bocourt's water snake",
    "Northern water snake",
    "Whip snake",
    "Long-nosed whip snake",
    "Wolf snake",
    "African wolf snake",
    "Barred wolf snake",
    "Worm snake",
    "Common worm snake",
    "Longnosed worm snake",
    "Wutu",
    "Yarara",
    "Zebra snake"
];

},{}],"R8Pw2":[function(require,module,exports) {
module["exports"] = [
    "American Albino",
    "Abaco Barb",
    "Abtenauer",
    "Abyssinian",
    "Aegidienberger",
    "Akhal-Teke",
    "Albanian Horse",
    "Altai Horse",
    "Altèr Real",
    "American Cream Draft",
    "American Indian Horse",
    "American Paint Horse",
    "American Quarter Horse",
    "American Saddlebred",
    "American Warmblood",
    "Andalusian Horse",
    "Andravida Horse",
    "Anglo-Arabian",
    "Anglo-Arabo-Sardo",
    "Anglo-Kabarda",
    "Appaloosa",
    "AraAppaloosa",
    "Arabian Horse",
    "Ardennes Horse",
    "Arenberg-Nordkirchen",
    "Argentine Criollo",
    "Asian wild Horse",
    "Assateague Horse",
    "Asturcón",
    "Augeron",
    "Australian Brumby",
    "Australian Draught Horse",
    "Australian Stock Horse",
    "Austrian Warmblood",
    "Auvergne Horse",
    "Auxois",
    "Azerbaijan Horse",
    "Azteca Horse",
    "Baise Horse",
    "Bale",
    "Balearic Horse",
    "Balikun Horse",
    "Baluchi Horse",
    "Banker Horse",
    "Barb Horse",
    "Bardigiano",
    "Bashkir Curly",
    "Basque Mountain Horse",
    "Bavarian Warmblood",
    "Belgian Half-blood",
    "Belgian Horse",
    "Belgian Warmblood ",
    "Bhutia Horse",
    "Black Forest Horse",
    "Blazer Horse",
    "Boerperd",
    "Borana",
    "Boulonnais Horse",
    "Brabant",
    "Brandenburger",
    "Brazilian Sport Horse",
    "Breton Horse",
    "Brumby",
    "Budyonny Horse",
    "Burguete Horse",
    "Burmese Horse",
    "Byelorussian Harness Horse",
    "Calabrese Horse",
    "Camargue Horse",
    "Camarillo White Horse",
    "Campeiro",
    "Campolina",
    "Canadian Horse",
    "Canadian Pacer",
    "Carolina Marsh Tacky",
    "Carthusian Horse",
    "Caspian Horse",
    "Castilian Horse",
    "Castillonnais",
    "Catria Horse",
    "Cavallo Romano della Maremma Laziale",
    "Cerbat Mustang",
    "Chickasaw Horse",
    "Chilean Corralero",
    "Choctaw Horse",
    "Cleveland Bay",
    "Clydesdale Horse",
    "Cob",
    "Coldblood Trotter",
    "Colonial Spanish Horse",
    "Colorado Ranger",
    "Comtois Horse",
    "Corsican Horse",
    "Costa Rican Saddle Horse",
    "Cretan Horse",
    "Criollo Horse",
    "Croatian Coldblood",
    "Cuban Criollo",
    "Cumberland Island Horse",
    "Curly Horse",
    "Czech Warmblood",
    "Daliboz",
    "Danish Warmblood",
    "Danube Delta Horse",
    "Dole Gudbrandsdal",
    "Don",
    "Dongola Horse",
    "Draft Trotter",
    "Dutch Harness Horse",
    "Dutch Heavy Draft",
    "Dutch Warmblood",
    "Dzungarian Horse",
    "East Bulgarian",
    "East Friesian Horse",
    "Estonian Draft",
    "Estonian Horse",
    "Falabella",
    "Faroese",
    "Finnhorse",
    "Fjord Horse",
    "Fleuve",
    "Florida Cracker Horse",
    "Foutanké",
    "Frederiksborg Horse",
    "Freiberger",
    "French Trotter",
    "Friesian Cross",
    "Friesian Horse",
    "Friesian Sporthorse",
    "Furioso-North Star",
    "Galiceño",
    "Galician Pony",
    "Gelderland Horse",
    "Georgian Grande Horse",
    "German Warmblood",
    "Giara Horse",
    "Gidran",
    "Groningen Horse",
    "Gypsy Horse",
    "Hackney Horse",
    "Haflinger",
    "Hanoverian Horse",
    "Heck Horse",
    "Heihe Horse",
    "Henson Horse",
    "Hequ Horse",
    "Hirzai",
    "Hispano-Bretón",
    "Holsteiner Horse",
    "Horro",
    "Hungarian Warmblood",
    "Icelandic Horse",
    "Iomud",
    "Irish Draught",
    "Irish Sport Horse sometimes called Irish Hunter",
    "Italian Heavy Draft",
    "Italian Trotter",
    "Jaca Navarra",
    "Jeju Horse",
    "Jutland Horse",
    "Kabarda Horse",
    "Kafa",
    "Kaimanawa Horses",
    "Kalmyk Horse",
    "Karabair",
    "Karabakh Horse",
    "Karachai Horse",
    "Karossier",
    "Kathiawari",
    "Kazakh Horse",
    "Kentucky Mountain Saddle Horse",
    "Kiger Mustang",
    "Kinsky Horse",
    "Kisber Felver",
    "Kiso Horse",
    "Kladruber",
    "Knabstrupper",
    "Konik",
    "Kundudo",
    "Kustanair",
    "Kyrgyz Horse",
    "Latvian Horse",
    "Lipizzan",
    "Lithuanian Heavy Draught",
    "Lokai",
    "Losino Horse",
    "Lusitano",
    "Lyngshest",
    "M'Bayar",
    "M'Par",
    "Mallorquín",
    "Malopolski",
    "Mangalarga",
    "Mangalarga Marchador",
    "Maremmano",
    "Marismeño Horse",
    "Marsh Tacky",
    "Marwari Horse",
    "Mecklenburger",
    "Međimurje Horse",
    "Menorquín",
    "Mérens Horse",
    "Messara Horse",
    "Metis Trotter",
    "Mezőhegyesi Sport Horse",
    "Miniature Horse",
    "Misaki Horse",
    "Missouri Fox Trotter",
    "Monchina",
    "Mongolian Horse",
    "Mongolian Wild Horse",
    "Monterufolino",
    "Morab",
    "Morgan Horse",
    "Mountain Pleasure Horse",
    "Moyle Horse",
    "Murakoz Horse",
    "Murgese",
    "Mustang Horse",
    "Namib Desert Horse",
    "Nangchen Horse",
    "National Show Horse",
    "Nez Perce Horse",
    "Nivernais Horse",
    "Nokota Horse",
    "Noma",
    "Nonius Horse",
    "Nooitgedachter",
    "Nordlandshest",
    "Noriker Horse",
    "Norman Cob",
    "North American Single-Footer Horse",
    "North Swedish Horse",
    "Norwegian Coldblood Trotter",
    "Norwegian Fjord",
    "Novokirghiz",
    "Oberlander Horse",
    "Ogaden",
    "Oldenburg Horse",
    "Orlov trotter",
    "Ostfriesen",
    "Paint",
    "Pampa Horse",
    "Paso Fino",
    "Pentro Horse",
    "Percheron",
    "Persano Horse",
    "Peruvian Paso",
    "Pintabian",
    "Pleven Horse",
    "Poitevin Horse",
    "Posavac Horse",
    "Pottok",
    "Pryor Mountain Mustang",
    "Przewalski's Horse",
    "Pura Raza Española",
    "Purosangue Orientale",
    "Qatgani",
    "Quarab",
    "Quarter Horse",
    "Racking Horse",
    "Retuerta Horse",
    "Rhenish German Coldblood",
    "Rhinelander Horse",
    "Riwoche Horse",
    "Rocky Mountain Horse",
    "Romanian Sporthorse",
    "Rottaler",
    "Russian Don",
    "Russian Heavy Draft",
    "Russian Trotter",
    "Saddlebred",
    "Salerno Horse",
    "Samolaco Horse",
    "San Fratello Horse",
    "Sarcidano Horse",
    "Sardinian Anglo-Arab",
    "Schleswig Coldblood",
    "Schwarzwälder Kaltblut",
    "Selale",
    "Sella Italiano",
    "Selle Français",
    "Shagya Arabian",
    "Shan Horse",
    "Shire Horse",
    "Siciliano Indigeno",
    "Silesian Horse",
    "Sokolsky Horse",
    "Sorraia",
    "South German Coldblood",
    "Soviet Heavy Draft",
    "Spanish Anglo-Arab",
    "Spanish Barb",
    "Spanish Jennet Horse",
    "Spanish Mustang",
    "Spanish Tarpan",
    "Spanish-Norman Horse",
    "Spiti Horse",
    "Spotted Saddle Horse",
    "Standardbred Horse",
    "Suffolk Punch",
    "Swedish Ardennes",
    "Swedish coldblood trotter",
    "Swedish Warmblood",
    "Swiss Warmblood",
    "Taishū Horse",
    "Takhi",
    "Tawleed",
    "Tchernomor",
    "Tennessee Walking Horse",
    "Tersk Horse",
    "Thoroughbred",
    "Tiger Horse",
    "Tinker Horse",
    "Tolfetano",
    "Tori Horse",
    "Trait Du Nord",
    "Trakehner",
    "Tsushima",
    "Tuigpaard",
    "Ukrainian Riding Horse",
    "Unmol Horse",
    "Uzunyayla",
    "Ventasso Horse",
    "Virginia Highlander",
    "Vlaamperd",
    "Vladimir Heavy Draft",
    "Vyatka",
    "Waler",
    "Waler Horse",
    "Walkaloosa",
    "Warlander",
    "Warmblood",
    "Welsh Cob",
    "Westphalian Horse",
    "Wielkopolski",
    "Württemberger",
    "Xilingol Horse",
    "Yakutian Horse",
    "Yili Horse",
    "Yonaguni Horse",
    "Zaniskari",
    "Žemaitukas",
    "Zhemaichu",
    "Zweibrücker"
];

},{}],"lVGZX":[function(require,module,exports) {
module["exports"] = [
    "Blue Whale",
    "Fin Whale",
    "Sei Whale",
    "Sperm Whale",
    "Bryde’s whale",
    "Omura’s whale",
    "Humpback whale",
    "Long-Beaked Common Dolphin",
    "Short-Beaked Common Dolphin",
    "Bottlenose Dolphin",
    "Indo-Pacific Bottlenose Dolphin",
    "Northern Rightwhale Dolphin",
    "Southern Rightwhale Dolphin",
    "Tucuxi",
    "Costero",
    "Indo-Pacific Hump-backed Dolphin",
    "Chinese White Dolphin",
    "Atlantic Humpbacked Dolphin",
    "Atlantic Spotted Dolphin",
    "Clymene Dolphin",
    "Pantropical Spotted Dolphin",
    "Spinner Dolphin",
    "Striped Dolphin",
    "Rough-Toothed Dolphin",
    "Chilean Dolphin",
    "Commerson’s Dolphin",
    "Heaviside’s Dolphin",
    "Hector’s Dolphin",
    "Risso’s Dolphin",
    "Fraser’s Dolphin",
    "Atlantic White-Sided Dolphin",
    "Dusky Dolphin",
    "Hourglass Dolphin",
    "Pacific White-Sided Dolphin",
    "Peale’s Dolphin",
    "White-Beaked Dolphin",
    "Australian Snubfin Dolphin",
    "Irrawaddy Dolphin",
    "Melon-headed Whale",
    "Killer Whale (Orca)",
    "Pygmy Killer Whale",
    "False Killer Whale",
    "Long-finned Pilot Whale",
    "Short-finned Pilot Whale",
    "Guiana Dolphin",
    "Burrunan Dolphin",
    "Australian humpback Dolphin",
    "Amazon River Dolphin",
    "Chinese River Dolphin",
    "Ganges River Dolphin",
    "La Plata Dolphin",
    "Southern Bottlenose Whale",
    "Longman's Beaked Whale",
    "Arnoux's Beaked Whale"
];

},{}],"lLhTM":[function(require,module,exports) {
module["exports"] = [
    "American",
    "American Chinchilla",
    "American Fuzzy Lop",
    "American Sable",
    "Argente Brun",
    "Belgian Hare",
    "Beveren",
    "Blanc de Hotot",
    "Britannia Petite",
    "Californian",
    "Champagne D’Argent",
    "Checkered Giant",
    "Cinnamon",
    "Crème D’Argent",
    "Dutch",
    "Dwarf Hotot",
    "English Angora",
    "English Lop",
    "English Spot",
    "Flemish Giant",
    "Florida White",
    "French Angora",
    "French Lop",
    "Giant Angora",
    "Giant Chinchilla",
    "Harlequin",
    "Havana",
    "Himalayan",
    "Holland Lop",
    "Jersey Wooly",
    "Lilac",
    "Lionhead",
    "Mini Lop",
    "Mini Rex",
    "Mini Satin",
    "Netherland Dwarf",
    "New Zealand",
    "Palomino",
    "Polish",
    "Rex",
    "Rhinelander",
    "Satin",
    "Satin Angora",
    "Silver",
    "Silver Fox",
    "Silver Marten",
    "Standard Chinchilla",
    "Tan",
    "Thrianta"
];

},{}],"eskwX":[function(require,module,exports) {
module["exports"] = [
    "Acacia-ants",
    "Acorn-plum gall",
    "Aerial yellowjacket",
    "Africanized honey bee",
    "Allegheny mound ant",
    "Almond stone wasp",
    "Ant",
    "Arboreal ant",
    "Argentine ant",
    "Asian paper wasp",
    "Baldfaced hornet",
    "Bee",
    "Bigheaded ant",
    "Black and yellow mud dauber",
    "Black carpenter ant",
    "Black imported fire ant",
    "Blue horntail woodwasp",
    "Blue orchard bee",
    "Braconid wasp",
    "Bumble bee",
    "Carpenter ant",
    "Carpenter wasp",
    "Chalcid wasp",
    "Cicada killer",
    "Citrus blackfly parasitoid",
    "Common paper wasp",
    "Crazy ant",
    "Cuckoo wasp",
    "Cynipid gall wasp",
    "Eastern Carpenter bee",
    "Eastern yellowjacket",
    "Elm sawfly",
    "Encyrtid wasp",
    "Erythrina gall wasp",
    "Eulophid wasp",
    "European hornet",
    "European imported fire ant",
    "False honey ant",
    "Fire ant",
    "Forest bachac",
    "Forest yellowjacket",
    "German yellowjacket",
    "Ghost ant",
    "Giant ichneumon wasp",
    "Giant resin bee",
    "Giant wood wasp",
    "Golden northern bumble bee",
    "Golden paper wasp",
    "Gouty oak gall",
    "Grass Carrying Wasp",
    "Great black wasp",
    "Great golden digger wasp",
    "Hackberry nipple gall parasitoid",
    "Honey bee",
    "Horned oak gall",
    "Horse guard wasp",
    "Horse guard wasp",
    "Hunting wasp",
    "Ichneumonid wasp",
    "Keyhole wasp",
    "Knopper gall",
    "Large garden bumble bee",
    "Large oak-apple gall",
    "Leafcutting bee",
    "Little fire ant",
    "Little yellow ant",
    "Long-horned bees",
    "Long-legged ant",
    "Macao paper wasp",
    "Mallow bee",
    "Marble gall",
    "Mossyrose gall wasp",
    "Mud-daubers",
    "Multiflora rose seed chalcid",
    "Oak apple gall wasp",
    "Oak rough bulletgall wasp",
    "Oak saucer gall",
    "Oak shoot sawfly",
    "Odorous house ant",
    "Orange-tailed bumble bee",
    "Orangetailed potter wasp",
    "Oriental chestnut gall wasp",
    "Paper wasp",
    "Pavement ant",
    "Pigeon tremex",
    "Pip gall wasp",
    "Prairie yellowjacket",
    "Pteromalid wasp",
    "Pyramid ant",
    "Raspberry Horntail",
    "Red ant",
    "Red carpenter ant",
    "Red harvester ant",
    "Red imported fire ant",
    "Red wasp",
    "Red wood ant",
    "Red-tailed wasp",
    "Reddish carpenter ant",
    "Rough harvester ant",
    "Sawfly parasitic wasp",
    "Scale parasitoid",
    "Silky ant",
    "Sirex woodwasp",
    "Siricid woodwasp",
    "Smaller yellow ant",
    "Southeastern blueberry bee",
    "Southern fire ant",
    "Southern yellowjacket",
    "Sphecid wasp",
    "Stony gall",
    "Sweat bee",
    "Texas leafcutting ant",
    "Tiphiid wasp",
    "Torymid wasp",
    "Tramp ant",
    "Valentine ant",
    "Velvet ant",
    "Vespid wasp",
    "Weevil parasitoid",
    "Western harvester ant",
    "Western paper wasp",
    "Western thatching ant",
    "Western yellowjacket",
    "White-horned horntail",
    "Willow shoot sawfly",
    "Woodwasp",
    "Wool sower gall maker",
    "Yellow and black potter wasp",
    "Yellow Crazy Ant",
    "Yellow-horned horntail"
];

},{}],"3kCSb":[function(require,module,exports) {
module["exports"] = [
    "Giant panda",
    "Spectacled bear",
    "Sun bear",
    "Sloth bear",
    "American black bear",
    "Asian black bear",
    "Brown bear",
    "Polar bear"
];

},{}],"36q0o":[function(require,module,exports) {
module["exports"] = [
    "Asiatic Lion",
    "Barbary Lion",
    "West African Lion",
    "Northeast Congo Lion",
    "Masai Lion",
    "Transvaal lion",
    "Cape lion"
];

},{}],"gtAMw":[function(require,module,exports) {
module["exports"] = [
    "Aberdeen Angus",
    "Abergele",
    "Abigar",
    "Abondance",
    "Abyssinian Shorthorned Zebu",
    "Aceh",
    "Achham",
    "Adamawa",
    "Adaptaur",
    "Afar",
    "Africangus",
    "Afrikaner",
    "Agerolese",
    "Alambadi",
    "Alatau",
    "Albanian",
    "Albera",
    "Alderney",
    "Alentejana",
    "Aleutian wild cattle",
    "Aliad Dinka",
    "Alistana-Sanabresa",
    "Allmogekor",
    "Alur",
    "American",
    "American Angus",
    "American Beef Friesian",
    "American Brown Swiss",
    "American Milking Devon",
    "American White Park",
    "Amerifax",
    "Amrit Mahal",
    "Amsterdam Island cattle",
    "Anatolian Black",
    "Andalusian Black",
    "Andalusian Blond",
    "Andalusian Grey",
    "Angeln",
    "Angoni",
    "Ankina",
    "Ankole",
    "Ankole-Watusi",
    "Aracena",
    "Arado",
    "Argentine Criollo",
    "Argentine Friesian",
    "Armorican",
    "Arouquesa",
    "Arsi",
    "Asturian Mountain",
    "Asturian Valley",
    "Aubrac",
    "Aulie-Ata",
    "Aure et Saint-Girons",
    "Australian Braford",
    "Australian Brangus",
    "Australian Charbray",
    "Australian Friesian Sahiwal",
    "Australian Lowline",
    "Australian Milking Zebu",
    "Australian Shorthorn",
    "Austrian Simmental",
    "Austrian Yellow",
    "Avétonou",
    "Avileña-Negra Ibérica",
    "Aweil Dinka",
    "Ayrshire",
    "Azaouak",
    "Azebuado",
    "Azerbaijan Zebu",
    "Azores",
    "Bedit",
    "Breed",
    "Bachaur cattle",
    "Baherie cattle",
    "Bakosi cattle",
    "Balancer",
    "Baoule",
    "Bargur cattle",
    "Barrosã",
    "Barzona",
    "Bazadaise",
    "Beef Freisian",
    "Beefalo",
    "Beefmaker",
    "Beefmaster",
    "Begayt",
    "Belgian Blue",
    "Belgian Red",
    "Belgian Red Pied",
    "Belgian White-and-Red",
    "Belmont Red",
    "Belted Galloway",
    "Bernese",
    "Berrenda cattle",
    "Betizu",
    "Bianca Modenese",
    "Blaarkop",
    "Black Angus",
    "Black Baldy",
    "Black Hereford",
    "Blanca Cacereña",
    "Blanco Orejinegro BON",
    "Blonde d'Aquitaine",
    "Blue Albion",
    "Blue Grey",
    "Bohuskulla",
    "Bonsmara",
    "Boran",
    "Boškarin",
    "Braford",
    "Brahman",
    "Brahmousin",
    "Brangus",
    "Braunvieh",
    "Brava",
    "British White",
    "British Friesian",
    "Brown Carpathian",
    "Brown Caucasian",
    "Brown Swiss",
    "Bue Lingo",
    "Burlina",
    "Buša cattle",
    "Butana cattle",
    "Bushuyev",
    "Cedit",
    "Breed",
    "Cachena",
    "Caldelana",
    "Camargue",
    "Campbell Island cattle",
    "Canadian Speckle Park",
    "Canadienne",
    "Canaria",
    "Canchim",
    "Caracu",
    "Cárdena Andaluza",
    "Carinthian Blondvieh",
    "Carora",
    "Charbray",
    "Charolais",
    "Chateaubriand",
    "Chiangus",
    "Chianina",
    "Chillingham cattle",
    "Chinese Black Pied",
    "Cholistani",
    "Coloursided White Back",
    "Commercial",
    "Corriente",
    "Corsican cattle",
    "Costeño con Cuernos",
    "Crioulo Lageano",
    "Dedit",
    "Breed",
    "Dajal",
    "Dangi cattle",
    "Danish Black-Pied",
    "Danish Jersey",
    "Danish Red",
    "Deep Red cattle",
    "Deoni",
    "Devon",
    "Dexter cattle",
    "Dhanni",
    "Doayo cattle",
    "Doela",
    "Drakensberger",
    "Dølafe",
    "Droughtmaster",
    "Dulong'",
    "Dutch Belted",
    "Dutch Friesian",
    "Dwarf Lulu",
    "Eedit",
    "Breed",
    "East Anatolian Red",
    "Eastern Finncattle",
    "Eastern Red Polled",
    "Enderby Island cattle",
    "English Longhorn",
    "Ennstaler Bergscheck",
    "Estonian Holstein",
    "Estonian Native",
    "Estonian Red cattle",
    "Évolène cattle",
    "Fedit",
    "Breed",
    "Fēng Cattle",
    "Finnish Ayrshire",
    "Finncattle",
    "Finnish Holstein-Friesian",
    "Fjäll",
    "Fleckvieh",
    "Florida Cracker cattle",
    "Fogera",
    "French Simmental",
    "Fribourgeoise",
    "Friesian Red and White",
    "Fulani Sudanese",
    "Gedit",
    "Breed",
    "Galician Blond",
    "Galloway cattle",
    "Gangatiri",
    "Gaolao",
    "Garvonesa",
    "Gascon cattle",
    "Gelbvieh",
    "Georgian Mountain cattle",
    "German Angus",
    "German Black Pied cattle",
    "German Black Pied Dairy",
    "German Red Pied",
    "Gir",
    "Glan cattle",
    "Gloucester",
    "Gobra",
    "Greek Shorthorn",
    "Greek Steppe",
    "Greyman cattle",
    "Gudali",
    "Guernsey cattle",
    "Guzerá",
    "Hedit",
    "Breed",
    "Hallikar4",
    "Hanwoo",
    "Hariana cattle",
    "Hartón del Valle",
    "Harzer Rotvieh",
    "Hays Converter",
    "Heck cattle",
    "Hereford",
    "Herens",
    "Hybridmaster",
    "Highland cattle",
    "Hinterwald",
    "Holando-Argentino",
    "Holstein Friesian cattle",
    "Horro",
    "Huáng Cattle",
    "Hungarian Grey",
    "Iedit",
    "Breed",
    "Iberian cattle",
    "Icelandic",
    "Illawarra cattle",
    "Improved Red and White",
    "Indo-Brazilian",
    "Irish Moiled",
    "Israeli Holstein",
    "Israeli Red",
    "Istoben cattle",
    "Istrian cattle",
    "Jedit",
    "Breed",
    "Jamaica Black",
    "Jamaica Hope",
    "Jamaica Red",
    "Japanese Brown",
    "Jarmelista",
    "Javari cattle",
    "Jersey cattle",
    "Jutland cattle",
    "Kedit",
    "Breed",
    "Kabin Buri cattle",
    "Kalmyk cattle",
    "Kangayam",
    "Kankrej",
    "Kamphaeng Saen cattle",
    "Karan Swiss",
    "Kasaragod Dwarf cattle",
    "Kathiawadi",
    "Kazakh Whiteheaded",
    "Kenana cattle",
    "Kenkatha cattle",
    "Kerry cattle",
    "Kherigarh",
    "Khillari cattle",
    "Kholomogory",
    "Korat Wagyu",
    "Kostroma cattle",
    "Krishna Valley cattle",
    "Kuri",
    "Kurgan cattle",
    "Ledit",
    "Breed",
    "La Reina cattle",
    "Lakenvelder cattle",
    "Lampurger",
    "Latvian Blue",
    "Latvian Brown",
    "Latvian Danish Red",
    "Lebedyn",
    "Levantina",
    "Limia cattle",
    "Limousin",
    "Limpurger",
    "Lincoln Red",
    "Lineback",
    "Lithuanian Black-and-White",
    "Lithuanian Light Grey",
    "Lithuanian Red",
    "Lithuanian White-Backed",
    "Lohani cattle",
    "Lourdais",
    "Lucerna cattle",
    "Luing",
    "Medit",
    "Breed",
    "Madagascar Zebu",
    "Madura",
    "Maine-Anjou",
    "Malnad Gidda",
    "Malvi",
    "Mandalong Special",
    "Mantequera Leonesa",
    "Maramureş Brown",
    "Marchigiana",
    "Maremmana",
    "Marinhoa",
    "Maronesa",
    "Masai",
    "Mashona",
    "Menorquina",
    "Mertolenga",
    "Meuse-Rhine-Issel",
    "Mewati",
    "Milking Shorthorn",
    "Minhota",
    "Mirandesa",
    "Mirkadim",
    "Mocăniţă",
    "Mollie",
    "Monchina",
    "Mongolian",
    "Montbéliarde",
    "Morucha",
    "Muturu",
    "Murboden",
    "Murnau-Werdenfels",
    "Murray Grey",
    "Nedit",
    "Breed",
    "Nagori",
    "N'Dama",
    "Negra Andaluza",
    "Nelore",
    "Nguni",
    "Nimari",
    "Normande",
    "North Bengal Grey",
    "Northern Finncattle",
    "Northern Shorthorn",
    "Norwegian Red",
    "Oedit]",
    "Breed",
    "Ongole",
    "Original Simmental",
    "Pedit",
    "Breed",
    "Pajuna",
    "Palmera",
    "Pantaneiro",
    "Parda Alpina",
    "Parthenaise",
    "Pasiega",
    "Pembroke",
    "Philippine Native",
    "Pie Rouge des Plaines",
    "Piedmontese cattle",
    "Pineywoods",
    "Pinzgauer",
    "Pirenaica",
    "Podolac",
    "Podolica",
    "Polish Black-and-White",
    "Polish Red",
    "Polled Hereford",
    "Poll Shorthorn",
    "Polled Shorthorn",
    "Ponwar",
    "Preta",
    "Punganur",
    "Pulikulam",
    "Pustertaler Sprinzen",
    "Qedit",
    "Breed",
    "Qinchaun",
    "Queensland Miniature Boran",
    "Redit",
    "Breed",
    "Ramo Grande",
    "Randall",
    "Raramuri Criollo",
    "Rathi",
    "Rätisches Grauvieh",
    "Raya",
    "Red Angus",
    "Red Brangus",
    "Red Chittagong",
    "Red Fulani",
    "Red Gorbatov",
    "Red Holstein",
    "Red Kandhari",
    "Red Mingrelian",
    "Red Poll",
    "Red Polled Østland",
    "Red Sindhi",
    "Retinta",
    "Riggit Galloway",
    "Ringamåla",
    "Rohjan",
    "Romagnola",
    "Romanian Bălţata",
    "Romanian Steppe Gray",
    "Romosinuano",
    "Russian Black Pied",
    "RX3",
    "Sedit",
    "Breed",
    "Sahiwal",
    "Salers",
    "Salorn",
    "Sanga",
    "Sanhe",
    "Santa Cruz",
    "Santa Gertrudis",
    "Sayaguesa",
    "Schwyz",
    "Selembu",
    "Senepol",
    "Serbian Pied",
    "Serbian Steppe",
    "Sheko",
    "Shetland",
    "Shorthorn",
    "Siboney de Cuba",
    "Simbrah",
    "Simford",
    "Simmental",
    "Siri",
    "South Devon",
    "Spanish Fighting Bull",
    "Speckle Park",
    "Square Meater",
    "Sussex",
    "Swedish Friesian",
    "Swedish Polled",
    "Swedish Red Pied",
    "Swedish Red Polled",
    "Swedish Red-and-White",
    "Tedit",
    "Breed",
    "Tabapuã",
    "Tarentaise",
    "Tasmanian Grey",
    "Tauros",
    "Telemark",
    "Texas Longhorn",
    "Texon",
    "Thai Black",
    "Thai Fighting Bull",
    "Thai Friesian",
    "Thai Milking Zebu",
    "Tharparkar",
    "Tswana",
    "Tudanca",
    "Tuli",
    "Tulim",
    "Turkish Grey Steppe",
    "Tux-Zillertal",
    "Tyrol Grey",
    "Uedit",
    "Breed",
    "Umblachery",
    "Ukrainian Grey",
    "Vedit",
    "Breed",
    "Valdostana Castana",
    "Valdostana Pezzata Nera",
    "Valdostana Pezzata Rossa",
    "Väneko",
    "Vaynol",
    "Vechur8",
    "Vestland Fjord",
    "Vestland Red Polled",
    "Vianesa",
    "Volinian Beef",
    "Vorderwald",
    "Vosgienne",
    "Wedit",
    "Breed",
    "Wagyu",
    "Waguli",
    "Wangus",
    "Welsh Black",
    "Western Finncattle",
    "White Cáceres",
    "White Fulani",
    "White Lamphun",
    "White Park",
    "Whitebred Shorthorn",
    "Xedit",
    "Breed",
    "Xingjiang Brown",
    "Yedit",
    "Breed",
    "Yakutian",
    "Yanbian",
    "Yanhuang",
    "Yurino",
    "Zedit",
    "Breed",
    "Żubroń",
    "Zebu"
];

},{}],"cS2Js":[function(require,module,exports) {
module["exports"] = [
    "Red-throated Loon",
    "Arctic Loon",
    "Pacific Loon",
    "Common Loon",
    "Yellow-billed Loon",
    "Least Grebe",
    "Pied-billed Grebe",
    "Horned Grebe",
    "Red-necked Grebe",
    "Eared Grebe",
    "Western Grebe",
    "Clark's Grebe",
    "Yellow-nosed Albatross",
    "Shy Albatross",
    "Black-browed Albatross",
    "Wandering Albatross",
    "Laysan Albatross",
    "Black-footed Albatross",
    "Short-tailed Albatross",
    "Northern Fulmar",
    "Herald Petrel",
    "Murphy's Petrel",
    "Mottled Petrel",
    "Black-capped Petrel",
    "Cook's Petrel",
    "Stejneger's Petrel",
    "White-chinned Petrel",
    "Streaked Shearwater",
    "Cory's Shearwater",
    "Pink-footed Shearwater",
    "Flesh-footed Shearwater",
    "Greater Shearwater",
    "Wedge-tailed Shearwater",
    "Buller's Shearwater",
    "Sooty Shearwater",
    "Short-tailed Shearwater",
    "Manx Shearwater",
    "Black-vented Shearwater",
    "Audubon's Shearwater",
    "Little Shearwater",
    "Wilson's Storm-Petrel",
    "White-faced Storm-Petrel",
    "European Storm-Petrel",
    "Fork-tailed Storm-Petrel",
    "Leach's Storm-Petrel",
    "Ashy Storm-Petrel",
    "Band-rumped Storm-Petrel",
    "Wedge-rumped Storm-Petrel",
    "Black Storm-Petrel",
    "Least Storm-Petrel",
    "White-tailed Tropicbird",
    "Red-billed Tropicbird",
    "Red-tailed Tropicbird",
    "Masked Booby",
    "Blue-footed Booby",
    "Brown Booby",
    "Red-footed Booby",
    "Northern Gannet",
    "American White Pelican",
    "Brown Pelican",
    "Brandt's Cormorant",
    "Neotropic Cormorant",
    "Double-crested Cormorant",
    "Great Cormorant",
    "Red-faced Cormorant",
    "Pelagic Cormorant",
    "Anhinga",
    "Magnificent Frigatebird",
    "Great Frigatebird",
    "Lesser Frigatebird",
    "American Bittern",
    "Yellow Bittern",
    "Least Bittern",
    "Great Blue Heron",
    "Great Egret",
    "Chinese Egret",
    "Little Egret",
    "Western Reef-Heron",
    "Snowy Egret",
    "Little Blue Heron",
    "Tricolored Heron",
    "Reddish Egret",
    "Cattle Egret",
    "Green Heron",
    "Black-crowned Night-Heron",
    "Yellow-crowned Night-Heron",
    "White Ibis",
    "Scarlet Ibis",
    "Glossy Ibis",
    "White-faced Ibis",
    "Roseate Spoonbill",
    "Jabiru",
    "Wood Stork",
    "Black Vulture",
    "Turkey Vulture",
    "California Condor",
    "Greater Flamingo",
    "Black-bellied Whistling-Duck",
    "Fulvous Whistling-Duck",
    "Bean Goose",
    "Pink-footed Goose",
    "Greater White-fronted Goose",
    "Lesser White-fronted Goose",
    "Emperor Goose",
    "Snow Goose",
    "Ross's Goose",
    "Canada Goose",
    "Brant",
    "Barnacle Goose",
    "Mute Swan",
    "Trumpeter Swan",
    "Tundra Swan",
    "Whooper Swan",
    "Muscovy Duck",
    "Wood Duck",
    "Gadwall",
    "Falcated Duck",
    "Eurasian Wigeon",
    "American Wigeon",
    "American Black Duck",
    "Mallard",
    "Mottled Duck",
    "Spot-billed Duck",
    "Blue-winged Teal",
    "Cinnamon Teal",
    "Northern Shoveler",
    "White-cheeked Pintail",
    "Northern Pintail",
    "Garganey",
    "Baikal Teal",
    "Green-winged Teal",
    "Canvasback",
    "Redhead",
    "Common Pochard",
    "Ring-necked Duck",
    "Tufted Duck",
    "Greater Scaup",
    "Lesser Scaup",
    "Steller's Eider",
    "Spectacled Eider",
    "King Eider",
    "Common Eider",
    "Harlequin Duck",
    "Labrador Duck",
    "Surf Scoter",
    "White-winged Scoter",
    "Black Scoter",
    "Oldsquaw",
    "Bufflehead",
    "Common Goldeneye",
    "Barrow's Goldeneye",
    "Smew",
    "Hooded Merganser",
    "Common Merganser",
    "Red-breasted Merganser",
    "Masked Duck",
    "Ruddy Duck",
    "Osprey",
    "Hook-billed Kite",
    "Swallow-tailed Kite",
    "White-tailed Kite",
    "Snail Kite",
    "Mississippi Kite",
    "Bald Eagle",
    "White-tailed Eagle",
    "Steller's Sea-Eagle",
    "Northern Harrier",
    "Sharp-shinned Hawk",
    "Cooper's Hawk",
    "Northern Goshawk",
    "Crane Hawk",
    "Gray Hawk",
    "Common Black-Hawk",
    "Harris's Hawk",
    "Roadside Hawk",
    "Red-shouldered Hawk",
    "Broad-winged Hawk",
    "Short-tailed Hawk",
    "Swainson's Hawk",
    "White-tailed Hawk",
    "Zone-tailed Hawk",
    "Red-tailed Hawk",
    "Ferruginous Hawk",
    "Rough-legged Hawk",
    "Golden Eagle",
    "Collared Forest-Falcon",
    "Crested Caracara",
    "Eurasian Kestrel",
    "American Kestrel",
    "Merlin",
    "Eurasian Hobby",
    "Aplomado Falcon",
    "Gyrfalcon",
    "Peregrine Falcon",
    "Prairie Falcon",
    "Plain Chachalaca",
    "Chukar",
    "Himalayan Snowcock",
    "Gray Partridge",
    "Ring-necked Pheasant",
    "Ruffed Grouse",
    "Sage Grouse",
    "Spruce Grouse",
    "Willow Ptarmigan",
    "Rock Ptarmigan",
    "White-tailed Ptarmigan",
    "Blue Grouse",
    "Sharp-tailed Grouse",
    "Greater Prairie-chicken",
    "Lesser Prairie-chicken",
    "Wild Turkey",
    "Mountain Quail",
    "Scaled Quail",
    "California Quail",
    "Gambel's Quail",
    "Northern Bobwhite",
    "Montezuma Quail",
    "Yellow Rail",
    "Black Rail",
    "Corn Crake",
    "Clapper Rail",
    "King Rail",
    "Virginia Rail",
    "Sora",
    "Paint-billed Crake",
    "Spotted Rail",
    "Purple Gallinule",
    "Azure Gallinule",
    "Common Moorhen",
    "Eurasian Coot",
    "American Coot",
    "Limpkin",
    "Sandhill Crane",
    "Common Crane",
    "Whooping Crane",
    "Double-striped Thick-knee",
    "Northern Lapwing",
    "Black-bellied Plover",
    "European Golden-Plover",
    "American Golden-Plover",
    "Pacific Golden-Plover",
    "Mongolian Plover",
    "Collared Plover",
    "Snowy Plover",
    "Wilson's Plover",
    "Common Ringed Plover",
    "Semipalmated Plover",
    "Piping Plover",
    "Little Ringed Plover",
    "Killdeer",
    "Mountain Plover",
    "Eurasian Dotterel",
    "Eurasian Oystercatcher",
    "American Oystercatcher",
    "Black Oystercatcher",
    "Black-winged Stilt",
    "Black-necked Stilt",
    "American Avocet",
    "Northern Jacana",
    "Common Greenshank",
    "Greater Yellowlegs",
    "Lesser Yellowlegs",
    "Marsh Sandpiper",
    "Spotted Redshank",
    "Wood Sandpiper",
    "Green Sandpiper",
    "Solitary Sandpiper",
    "Willet",
    "Wandering Tattler",
    "Gray-tailed Tattler",
    "Common Sandpiper",
    "Spotted Sandpiper",
    "Terek Sandpiper",
    "Upland Sandpiper",
    "Little Curlew",
    "Eskimo Curlew",
    "Whimbrel",
    "Bristle-thighed Curlew",
    "Far Eastern Curlew",
    "Slender-billed Curlew",
    "Eurasian Curlew",
    "Long-billed Curlew",
    "Black-tailed Godwit",
    "Hudsonian Godwit",
    "Bar-tailed Godwit",
    "Marbled Godwit",
    "Ruddy Turnstone",
    "Black Turnstone",
    "Surfbird",
    "Great Knot",
    "Red Knot",
    "Sanderling",
    "Semipalmated Sandpiper",
    "Western Sandpiper",
    "Red-necked Stint",
    "Little Stint",
    "Temminck's Stint",
    "Long-toed Stint",
    "Least Sandpiper",
    "White-rumped Sandpiper",
    "Baird's Sandpiper",
    "Pectoral Sandpiper",
    "Sharp-tailed Sandpiper",
    "Purple Sandpiper",
    "Rock Sandpiper",
    "Dunlin",
    "Curlew Sandpiper",
    "Stilt Sandpiper",
    "Spoonbill Sandpiper",
    "Broad-billed Sandpiper",
    "Buff-breasted Sandpiper",
    "Ruff",
    "Short-billed Dowitcher",
    "Long-billed Dowitcher",
    "Jack Snipe",
    "Common Snipe",
    "Pin-tailed Snipe",
    "Eurasian Woodcock",
    "American Woodcock",
    "Wilson's Phalarope",
    "Red-necked Phalarope",
    "Red Phalarope",
    "Oriental Pratincole",
    "Great Skua",
    "South Polar Skua",
    "Pomarine Jaeger",
    "Parasitic Jaeger",
    "Long-tailed Jaeger",
    "Laughing Gull",
    "Franklin's Gull",
    "Little Gull",
    "Black-headed Gull",
    "Bonaparte's Gull",
    "Heermann's Gull",
    "Band-tailed Gull",
    "Black-tailed Gull",
    "Mew Gull",
    "Ring-billed Gull",
    "California Gull",
    "Herring Gull",
    "Yellow-legged Gull",
    "Thayer's Gull",
    "Iceland Gull",
    "Lesser Black-backed Gull",
    "Slaty-backed Gull",
    "Yellow-footed Gull",
    "Western Gull",
    "Glaucous-winged Gull",
    "Glaucous Gull",
    "Great Black-backed Gull",
    "Sabine's Gull",
    "Black-legged Kittiwake",
    "Red-legged Kittiwake",
    "Ross's Gull",
    "Ivory Gull",
    "Gull-billed Tern",
    "Caspian Tern",
    "Royal Tern",
    "Elegant Tern",
    "Sandwich Tern",
    "Roseate Tern",
    "Common Tern",
    "Arctic Tern",
    "Forster's Tern",
    "Least Tern",
    "Aleutian Tern",
    "Bridled Tern",
    "Sooty Tern",
    "Large-billed Tern",
    "White-winged Tern",
    "Whiskered Tern",
    "Black Tern",
    "Brown Noddy",
    "Black Noddy",
    "Black Skimmer",
    "Dovekie",
    "Common Murre",
    "Thick-billed Murre",
    "Razorbill",
    "Great Auk",
    "Black Guillemot",
    "Pigeon Guillemot",
    "Long-billed Murrelet",
    "Marbled Murrelet",
    "Kittlitz's Murrelet",
    "Xantus's Murrelet",
    "Craveri's Murrelet",
    "Ancient Murrelet",
    "Cassin's Auklet",
    "Parakeet Auklet",
    "Least Auklet",
    "Whiskered Auklet",
    "Crested Auklet",
    "Rhinoceros Auklet",
    "Atlantic Puffin",
    "Horned Puffin",
    "Tufted Puffin",
    "Rock Dove",
    "Scaly-naped Pigeon",
    "White-crowned Pigeon",
    "Red-billed Pigeon",
    "Band-tailed Pigeon",
    "Oriental Turtle-Dove",
    "European Turtle-Dove",
    "Eurasian Collared-Dove",
    "Spotted Dove",
    "White-winged Dove",
    "Zenaida Dove",
    "Mourning Dove",
    "Passenger Pigeon",
    "Inca Dove",
    "Common Ground-Dove",
    "Ruddy Ground-Dove",
    "White-tipped Dove",
    "Key West Quail-Dove",
    "Ruddy Quail-Dove",
    "Budgerigar",
    "Monk Parakeet",
    "Carolina Parakeet",
    "Thick-billed Parrot",
    "White-winged Parakeet",
    "Red-crowned Parrot",
    "Common Cuckoo",
    "Oriental Cuckoo",
    "Black-billed Cuckoo",
    "Yellow-billed Cuckoo",
    "Mangrove Cuckoo",
    "Greater Roadrunner",
    "Smooth-billed Ani",
    "Groove-billed Ani",
    "Barn Owl",
    "Flammulated Owl",
    "Oriental Scops-Owl",
    "Western Screech-Owl",
    "Eastern Screech-Owl",
    "Whiskered Screech-Owl",
    "Great Horned Owl",
    "Snowy Owl",
    "Northern Hawk Owl",
    "Northern Pygmy-Owl",
    "Ferruginous Pygmy-Owl",
    "Elf Owl",
    "Burrowing Owl",
    "Mottled Owl",
    "Spotted Owl",
    "Barred Owl",
    "Great Gray Owl",
    "Long-eared Owl",
    "Short-eared Owl",
    "Boreal Owl",
    "Northern Saw-whet Owl",
    "Lesser Nighthawk",
    "Common Nighthawk",
    "Antillean Nighthawk",
    "Common Pauraque",
    "Common Poorwill",
    "Chuck-will's-widow",
    "Buff-collared Nightjar",
    "Whip-poor-will",
    "Jungle Nightjar",
    "Black Swift",
    "White-collared Swift",
    "Chimney Swift",
    "Vaux's Swift",
    "White-throated Needletail",
    "Common Swift",
    "Fork-tailed Swift",
    "White-throated Swift",
    "Antillean Palm Swift",
    "Green Violet-ear",
    "Green-breasted Mango",
    "Broad-billed Hummingbird",
    "White-eared Hummingbird",
    "Xantus's Hummingbird",
    "Berylline Hummingbird",
    "Buff-bellied Hummingbird",
    "Cinnamon Hummingbird",
    "Violet-crowned Hummingbird",
    "Blue-throated Hummingbird",
    "Magnificent Hummingbird",
    "Plain-capped Starthroat",
    "Bahama Woodstar",
    "Lucifer Hummingbird",
    "Ruby-throated Hummingbird",
    "Black-chinned Hummingbird",
    "Anna's Hummingbird",
    "Costa's Hummingbird",
    "Calliope Hummingbird",
    "Bumblebee Hummingbird",
    "Broad-tailed Hummingbird",
    "Rufous Hummingbird",
    "Allen's Hummingbird",
    "Elegant Trogon",
    "Eared Trogon",
    "Hoopoe",
    "Ringed Kingfisher",
    "Belted Kingfisher",
    "Green Kingfisher",
    "Eurasian Wryneck",
    "Lewis's Woodpecker",
    "Red-headed Woodpecker",
    "Acorn Woodpecker",
    "Gila Woodpecker",
    "Golden-fronted Woodpecker",
    "Red-bellied Woodpecker",
    "Williamson's Sapsucker",
    "Yellow-bellied Sapsucker",
    "Red-naped Sapsucker",
    "Red-breasted Sapsucker",
    "Great Spotted Woodpecker",
    "Ladder-backed Woodpecker",
    "Nuttall's Woodpecker",
    "Downy Woodpecker",
    "Hairy Woodpecker",
    "Strickland's Woodpecker",
    "Red-cockaded Woodpecker",
    "White-headed Woodpecker",
    "Three-toed Woodpecker",
    "Black-backed Woodpecker",
    "Northern Flicker",
    "Gilded Flicker",
    "Pileated Woodpecker",
    "Ivory-billed Woodpecker",
    "Northern Beardless-Tyrannulet",
    "Greenish Elaenia",
    "Caribbean Elaenia",
    "Tufted Flycatcher",
    "Olive-sided Flycatcher",
    "Greater Pewee",
    "Western Wood-Pewee",
    "Eastern Wood-Pewee",
    "Yellow-bellied Flycatcher",
    "Acadian Flycatcher",
    "Alder Flycatcher",
    "Willow Flycatcher",
    "Least Flycatcher",
    "Hammond's Flycatcher",
    "Dusky Flycatcher",
    "Gray Flycatcher",
    "Pacific-slope Flycatcher",
    "Cordilleran Flycatcher",
    "Buff-breasted Flycatcher",
    "Black Phoebe",
    "Eastern Phoebe",
    "Say's Phoebe",
    "Vermilion Flycatcher",
    "Dusky-capped Flycatcher",
    "Ash-throated Flycatcher",
    "Nutting's Flycatcher",
    "Great Crested Flycatcher",
    "Brown-crested Flycatcher",
    "La Sagra's Flycatcher",
    "Great Kiskadee",
    "Sulphur-bellied Flycatcher",
    "Variegated Flycatcher",
    "Tropical Kingbird",
    "Couch's Kingbird",
    "Cassin's Kingbird",
    "Thick-billed Kingbird",
    "Western Kingbird",
    "Eastern Kingbird",
    "Gray Kingbird",
    "Loggerhead Kingbird",
    "Scissor-tailed Flycatcher",
    "Fork-tailed Flycatcher",
    "Rose-throated Becard",
    "Masked Tityra",
    "Brown Shrike",
    "Loggerhead Shrike",
    "Northern Shrike",
    "White-eyed Vireo",
    "Thick-billed Vireo",
    "Bell's Vireo",
    "Black-capped Vireo",
    "Gray Vireo",
    "Yellow-throated Vireo",
    "Plumbeous Vireo",
    "Cassin's Vireo",
    "Blue-headed Vireo",
    "Hutton's Vireo",
    "Warbling Vireo",
    "Philadelphia Vireo",
    "Red-eyed Vireo",
    "Yellow-green Vireo",
    "Black-whiskered Vireo",
    "Yucatan Vireo",
    "Gray Jay",
    "Steller's Jay",
    "Blue Jay",
    "Green Jay",
    "Brown Jay",
    "Florida Scrub-Jay",
    "Island Scrub-Jay",
    "Western Scrub-Jay",
    "Mexican Jay",
    "Pinyon Jay",
    "Clark's Nutcracker",
    "Black-billed Magpie",
    "Yellow-billed Magpie",
    "Eurasian Jackdaw",
    "American Crow",
    "Northwestern Crow",
    "Tamaulipas Crow",
    "Fish Crow",
    "Chihuahuan Raven",
    "Common Raven",
    "Sky Lark",
    "Horned Lark",
    "Purple Martin",
    "Cuban Martin",
    "Gray-breasted Martin",
    "Southern Martin",
    "Brown-chested Martin",
    "Tree Swallow",
    "Violet-green Swallow",
    "Bahama Swallow",
    "Northern Rough-winged Swallow",
    "Bank Swallow",
    "Cliff Swallow",
    "Cave Swallow",
    "Barn Swallow",
    "Common House-Martin",
    "Carolina Chickadee",
    "Black-capped Chickadee",
    "Mountain Chickadee",
    "Mexican Chickadee",
    "Chestnut-backed Chickadee",
    "Boreal Chickadee",
    "Gray-headed Chickadee",
    "Bridled Titmouse",
    "Oak Titmouse",
    "Juniper Titmouse",
    "Tufted Titmouse",
    "Verdin",
    "Bushtit",
    "Red-breasted Nuthatch",
    "White-breasted Nuthatch",
    "Pygmy Nuthatch",
    "Brown-headed Nuthatch",
    "Brown Creeper",
    "Cactus Wren",
    "Rock Wren",
    "Canyon Wren",
    "Carolina Wren",
    "Bewick's Wren",
    "House Wren",
    "Winter Wren",
    "Sedge Wren",
    "Marsh Wren",
    "American Dipper",
    "Red-whiskered Bulbul",
    "Golden-crowned Kinglet",
    "Ruby-crowned Kinglet",
    "Middendorff's Grasshopper-Warbler",
    "Lanceolated Warbler",
    "Wood Warbler",
    "Dusky Warbler",
    "Arctic Warbler",
    "Blue-gray Gnatcatcher",
    "California Gnatcatcher",
    "Black-tailed Gnatcatcher",
    "Black-capped Gnatcatcher",
    "Narcissus Flycatcher",
    "Mugimaki Flycatcher",
    "Red-breasted Flycatcher",
    "Siberian Flycatcher",
    "Gray-spotted Flycatcher",
    "Asian Brown Flycatcher",
    "Siberian Rubythroat",
    "Bluethroat",
    "Siberian Blue Robin",
    "Red-flanked Bluetail",
    "Northern Wheatear",
    "Stonechat",
    "Eastern Bluebird",
    "Western Bluebird",
    "Mountain Bluebird",
    "Townsend's Solitaire",
    "Veery",
    "Gray-cheeked Thrush",
    "Bicknell's Thrush",
    "Swainson's Thrush",
    "Hermit Thrush",
    "Wood Thrush",
    "Eurasian Blackbird",
    "Eyebrowed Thrush",
    "Dusky Thrush",
    "Fieldfare",
    "Redwing",
    "Clay-colored Robin",
    "White-throated Robin",
    "Rufous-backed Robin",
    "American Robin",
    "Varied Thrush",
    "Aztec Thrush",
    "Wrentit",
    "Gray Catbird",
    "Black Catbird",
    "Northern Mockingbird",
    "Bahama Mockingbird",
    "Sage Thrasher",
    "Brown Thrasher",
    "Long-billed Thrasher",
    "Bendire's Thrasher",
    "Curve-billed Thrasher",
    "California Thrasher",
    "Crissal Thrasher",
    "Le Conte's Thrasher",
    "Blue Mockingbird",
    "European Starling",
    "Crested Myna",
    "Siberian Accentor",
    "Yellow Wagtail",
    "Citrine Wagtail",
    "Gray Wagtail",
    "White Wagtail",
    "Black-backed Wagtail",
    "Tree Pipit",
    "Olive-backed Pipit",
    "Pechora Pipit",
    "Red-throated Pipit",
    "American Pipit",
    "Sprague's Pipit",
    "Bohemian Waxwing",
    "Cedar Waxwing",
    "Gray Silky-flycatcher",
    "Phainopepla",
    "Olive Warbler",
    "Bachman's Warbler",
    "Blue-winged Warbler",
    "Golden-winged Warbler",
    "Tennessee Warbler",
    "Orange-crowned Warbler",
    "Nashville Warbler",
    "Virginia's Warbler",
    "Colima Warbler",
    "Lucy's Warbler",
    "Crescent-chested Warbler",
    "Northern Parula",
    "Tropical Parula",
    "Yellow Warbler",
    "Chestnut-sided Warbler",
    "Magnolia Warbler",
    "Cape May Warbler",
    "Black-throated Blue Warbler",
    "Yellow-rumped Warbler",
    "Black-throated Gray Warbler",
    "Golden-cheeked Warbler",
    "Black-throated Green Warbler",
    "Townsend's Warbler",
    "Hermit Warbler",
    "Blackburnian Warbler",
    "Yellow-throated Warbler",
    "Grace's Warbler",
    "Pine Warbler",
    "Kirtland's Warbler",
    "Prairie Warbler",
    "Palm Warbler",
    "Bay-breasted Warbler",
    "Blackpoll Warbler",
    "Cerulean Warbler",
    "Black-and-white Warbler",
    "American Redstart",
    "Prothonotary Warbler",
    "Worm-eating Warbler",
    "Swainson's Warbler",
    "Ovenbird",
    "Northern Waterthrush",
    "Louisiana Waterthrush",
    "Kentucky Warbler",
    "Connecticut Warbler",
    "Mourning Warbler",
    "MacGillivray's Warbler",
    "Common Yellowthroat",
    "Gray-crowned Yellowthroat",
    "Hooded Warbler",
    "Wilson's Warbler",
    "Canada Warbler",
    "Red-faced Warbler",
    "Painted Redstart",
    "Slate-throated Redstart",
    "Fan-tailed Warbler",
    "Golden-crowned Warbler",
    "Rufous-capped Warbler",
    "Yellow-breasted Chat",
    "Bananaquit",
    "Hepatic Tanager",
    "Summer Tanager",
    "Scarlet Tanager",
    "Western Tanager",
    "Flame-colored Tanager",
    "Stripe-headed Tanager",
    "White-collared Seedeater",
    "Yellow-faced Grassquit",
    "Black-faced Grassquit",
    "Olive Sparrow",
    "Green-tailed Towhee",
    "Spotted Towhee",
    "Eastern Towhee",
    "Canyon Towhee",
    "California Towhee",
    "Abert's Towhee",
    "Rufous-winged Sparrow",
    "Cassin's Sparrow",
    "Bachman's Sparrow",
    "Botteri's Sparrow",
    "Rufous-crowned Sparrow",
    "Five-striped Sparrow",
    "American Tree Sparrow",
    "Chipping Sparrow",
    "Clay-colored Sparrow",
    "Brewer's Sparrow",
    "Field Sparrow",
    "Worthen's Sparrow",
    "Black-chinned Sparrow",
    "Vesper Sparrow",
    "Lark Sparrow",
    "Black-throated Sparrow",
    "Sage Sparrow",
    "Lark Bunting",
    "Savannah Sparrow",
    "Grasshopper Sparrow",
    "Baird's Sparrow",
    "Henslow's Sparrow",
    "Le Conte's Sparrow",
    "Nelson's Sharp-tailed Sparrow",
    "Saltmarsh Sharp-tailed Sparrow",
    "Seaside Sparrow",
    "Fox Sparrow",
    "Song Sparrow",
    "Lincoln's Sparrow",
    "Swamp Sparrow",
    "White-throated Sparrow",
    "Harris's Sparrow",
    "White-crowned Sparrow",
    "Golden-crowned Sparrow",
    "Dark-eyed Junco",
    "Yellow-eyed Junco",
    "McCown's Longspur",
    "Lapland Longspur",
    "Smith's Longspur",
    "Chestnut-collared Longspur",
    "Pine Bunting",
    "Little Bunting",
    "Rustic Bunting",
    "Yellow-breasted Bunting",
    "Gray Bunting",
    "Pallas's Bunting",
    "Reed Bunting",
    "Snow Bunting",
    "McKay's Bunting",
    "Crimson-collared Grosbeak",
    "Northern Cardinal",
    "Pyrrhuloxia",
    "Yellow Grosbeak",
    "Rose-breasted Grosbeak",
    "Black-headed Grosbeak",
    "Blue Bunting",
    "Blue Grosbeak",
    "Lazuli Bunting",
    "Indigo Bunting",
    "Varied Bunting",
    "Painted Bunting",
    "Dickcissel",
    "Bobolink",
    "Red-winged Blackbird",
    "Tricolored Blackbird",
    "Tawny-shouldered Blackbird",
    "Eastern Meadowlark",
    "Western Meadowlark",
    "Yellow-headed Blackbird",
    "Rusty Blackbird",
    "Brewer's Blackbird",
    "Common Grackle",
    "Boat-tailed Grackle",
    "Great-tailed Grackle",
    "Shiny Cowbird",
    "Bronzed Cowbird",
    "Brown-headed Cowbird",
    "Black-vented Oriole",
    "Orchard Oriole",
    "Hooded Oriole",
    "Streak-backed Oriole",
    "Spot-breasted Oriole",
    "Altamira Oriole",
    "Audubon's Oriole",
    "Baltimore Oriole",
    "Bullock's Oriole",
    "Scott's Oriole",
    "Common Chaffinch",
    "Brambling",
    "Gray-crowned Rosy-Finch",
    "Black Rosy-Finch",
    "Brown-capped Rosy-Finch",
    "Pine Grosbeak",
    "Common Rosefinch",
    "Purple Finch",
    "Cassin's Finch",
    "House Finch",
    "Red Crossbill",
    "White-winged Crossbill",
    "Common Redpoll",
    "Hoary Redpoll",
    "Eurasian Siskin",
    "Pine Siskin",
    "Lesser Goldfinch",
    "Lawrence's Goldfinch",
    "American Goldfinch",
    "Oriental Greenfinch",
    "Eurasian Bullfinch",
    "Evening Grosbeak",
    "Hawfinch",
    "House Sparrow",
    "Eurasian Tree Sparrow"
];

},{}],"cJOA8":[function(require,module,exports) {
module["exports"] = [
    "Grass carp",
    "Peruvian anchoveta",
    "Silver carp",
    "Common carp",
    "Asari,",
    "Japanese littleneck,",
    "Filipino Venus,",
    "Japanese cockle,",
    "Alaska pollock",
    "Nile tilapia",
    "Whiteleg shrimp",
    "Bighead carp",
    "Skipjack tuna",
    "Catla",
    "Crucian carp",
    "Atlantic salmon",
    "Atlantic herring",
    "Chub mackerel",
    "Rohu",
    "Yellowfin tuna",
    "Japanese anchovy",
    "Largehead hairtail",
    "Atlantic cod",
    "European pilchard",
    "Capelin",
    "Jumbo flying squid",
    "Milkfish",
    "Atlantic mackerel",
    "Rainbow trout",
    "Araucanian herring",
    "Wuchang bream",
    "Gulf menhaden",
    "Indian oil sardine",
    "Black carp",
    "European anchovy",
    "Northern snakehead",
    "Pacific cod",
    "Pacific saury",
    "Pacific herring",
    "Bigeye tuna",
    "Chilean jack mackerel",
    "Yellow croaker",
    "Haddock",
    "Gazami crab",
    "Amur catfish",
    "Japanese common catfish",
    "European sprat",
    "Pink salmon",
    "Mrigal carp",
    "Channel catfish",
    "Blood cockle",
    "Blue whiting",
    "Hilsa shad",
    "Daggertooth pike conger",
    "California pilchard",
    "Cape horse mackerel",
    "Pacific anchoveta",
    "Japanese flying squid",
    "Pollock",
    "Chinese softshell turtle",
    "Kawakawa",
    "Indian mackerel",
    "Asian swamp eel",
    "Argentine hake",
    "Short mackerel",
    "Southern rough shrimp",
    "Southern African anchovy",
    "Pond loach",
    "Iridescent shark",
    "Mandarin fish",
    "Chinese perch",
    "Nile perch",
    "Round sardinella",
    "Japanese pilchard",
    "Bombay-duck",
    "Yellowhead catfish",
    "Korean bullhead",
    "Narrow-barred Spanish mackerel",
    "Albacore",
    "Madeiran sardinella",
    "Bonga shad",
    "Silver cyprinid",
    "Nile tilapia",
    "Longtail tuna",
    "Atlantic menhaden",
    "North Pacific hake",
    "Atlantic horse mackerel",
    "Japanese jack mackerel",
    "Pacific thread herring",
    "Bigeye scad",
    "Yellowstripe scad",
    "Chum salmon",
    "Blue swimming crab",
    "Pacific sand lance",
    "Pacific sandlance",
    "Goldstripe sardinella"
];

},{}],"1q0l3":[function(require,module,exports) {
module["exports"] = [
    "Alligator mississippiensis",
    "Chinese Alligator",
    "Black Caiman",
    "Broad-snouted Caiman",
    "Spectacled Caiman",
    "Yacare Caiman",
    "Cuvier’s Dwarf Caiman",
    "Schneider’s Smooth-fronted Caiman",
    "African Slender-snouted Crocodile",
    "American Crocodile",
    "Australian Freshwater Crocodile",
    "Cuban Crocodile",
    "Dwarf Crocodile",
    "Morelet’s Crocodile",
    "Mugger Crocodile",
    "New Guinea Freshwater Crocodile",
    "Nile Crocodile",
    "West African Crocodile",
    "Orinoco Crocodile",
    "Philippine Crocodile",
    "Saltwater Crocodile",
    "Siamese Crocodile",
    "Gharial",
    "Tomistoma"
];

},{}],"ctEbT":[function(require,module,exports) {
module["exports"] = [
    "dog",
    "cat",
    "snake",
    "bear",
    "lion",
    "cetacean",
    "insect",
    "crocodilia",
    "cow",
    "bird",
    "fish",
    "rabbit",
    "horse"
];

},{}],"jGLGJ":[function(require,module,exports) {
var company = {
};
module['exports'] = company;
company.suffix = require("./suffix");
company.adjective = require("./adjective");
company.descriptor = require("./descriptor");
company.noun = require("./noun");
company.bs_verb = require("./bs_verb");
company.bs_adjective = require("./bs_adjective");
company.bs_noun = require("./bs_noun");
company.name = require("./name");

},{"./suffix":"bkyhA","./adjective":"VKWkT","./descriptor":"bhnVo","./noun":"eFmjY","./bs_verb":"9rccV","./bs_adjective":"5aBp5","./bs_noun":"fORcN","./name":"T7I3F"}],"bkyhA":[function(require,module,exports) {
module["exports"] = [
    "Inc",
    "and Sons",
    "LLC",
    "Group"
];

},{}],"VKWkT":[function(require,module,exports) {
module["exports"] = [
    "Adaptive",
    "Advanced",
    "Ameliorated",
    "Assimilated",
    "Automated",
    "Balanced",
    "Business-focused",
    "Centralized",
    "Cloned",
    "Compatible",
    "Configurable",
    "Cross-group",
    "Cross-platform",
    "Customer-focused",
    "Customizable",
    "Decentralized",
    "De-engineered",
    "Devolved",
    "Digitized",
    "Distributed",
    "Diverse",
    "Down-sized",
    "Enhanced",
    "Enterprise-wide",
    "Ergonomic",
    "Exclusive",
    "Expanded",
    "Extended",
    "Face to face",
    "Focused",
    "Front-line",
    "Fully-configurable",
    "Function-based",
    "Fundamental",
    "Future-proofed",
    "Grass-roots",
    "Horizontal",
    "Implemented",
    "Innovative",
    "Integrated",
    "Intuitive",
    "Inverse",
    "Managed",
    "Mandatory",
    "Monitored",
    "Multi-channelled",
    "Multi-lateral",
    "Multi-layered",
    "Multi-tiered",
    "Networked",
    "Object-based",
    "Open-architected",
    "Open-source",
    "Operative",
    "Optimized",
    "Optional",
    "Organic",
    "Organized",
    "Persevering",
    "Persistent",
    "Phased",
    "Polarised",
    "Pre-emptive",
    "Proactive",
    "Profit-focused",
    "Profound",
    "Programmable",
    "Progressive",
    "Public-key",
    "Quality-focused",
    "Reactive",
    "Realigned",
    "Re-contextualized",
    "Re-engineered",
    "Reduced",
    "Reverse-engineered",
    "Right-sized",
    "Robust",
    "Seamless",
    "Secured",
    "Self-enabling",
    "Sharable",
    "Stand-alone",
    "Streamlined",
    "Switchable",
    "Synchronised",
    "Synergistic",
    "Synergized",
    "Team-oriented",
    "Total",
    "Triple-buffered",
    "Universal",
    "Up-sized",
    "Upgradable",
    "User-centric",
    "User-friendly",
    "Versatile",
    "Virtual",
    "Visionary",
    "Vision-oriented"
];

},{}],"bhnVo":[function(require,module,exports) {
module["exports"] = [
    "24 hour",
    "24/7",
    "3rd generation",
    "4th generation",
    "5th generation",
    "6th generation",
    "actuating",
    "analyzing",
    "asymmetric",
    "asynchronous",
    "attitude-oriented",
    "background",
    "bandwidth-monitored",
    "bi-directional",
    "bifurcated",
    "bottom-line",
    "clear-thinking",
    "client-driven",
    "client-server",
    "coherent",
    "cohesive",
    "composite",
    "context-sensitive",
    "contextually-based",
    "content-based",
    "dedicated",
    "demand-driven",
    "didactic",
    "directional",
    "discrete",
    "disintermediate",
    "dynamic",
    "eco-centric",
    "empowering",
    "encompassing",
    "even-keeled",
    "executive",
    "explicit",
    "exuding",
    "fault-tolerant",
    "foreground",
    "fresh-thinking",
    "full-range",
    "global",
    "grid-enabled",
    "heuristic",
    "high-level",
    "holistic",
    "homogeneous",
    "human-resource",
    "hybrid",
    "impactful",
    "incremental",
    "intangible",
    "interactive",
    "intermediate",
    "leading edge",
    "local",
    "logistical",
    "maximized",
    "methodical",
    "mission-critical",
    "mobile",
    "modular",
    "motivating",
    "multimedia",
    "multi-state",
    "multi-tasking",
    "national",
    "needs-based",
    "neutral",
    "next generation",
    "non-volatile",
    "object-oriented",
    "optimal",
    "optimizing",
    "radical",
    "real-time",
    "reciprocal",
    "regional",
    "responsive",
    "scalable",
    "secondary",
    "solution-oriented",
    "stable",
    "static",
    "systematic",
    "systemic",
    "system-worthy",
    "tangible",
    "tertiary",
    "transitional",
    "uniform",
    "upward-trending",
    "user-facing",
    "value-added",
    "web-enabled",
    "well-modulated",
    "zero administration",
    "zero defect",
    "zero tolerance"
];

},{}],"eFmjY":[function(require,module,exports) {
module["exports"] = [
    "ability",
    "access",
    "adapter",
    "algorithm",
    "alliance",
    "analyzer",
    "application",
    "approach",
    "architecture",
    "archive",
    "artificial intelligence",
    "array",
    "attitude",
    "benchmark",
    "budgetary management",
    "capability",
    "capacity",
    "challenge",
    "circuit",
    "collaboration",
    "complexity",
    "concept",
    "conglomeration",
    "contingency",
    "core",
    "customer loyalty",
    "database",
    "data-warehouse",
    "definition",
    "emulation",
    "encoding",
    "encryption",
    "extranet",
    "firmware",
    "flexibility",
    "focus group",
    "forecast",
    "frame",
    "framework",
    "function",
    "functionalities",
    "Graphic Interface",
    "groupware",
    "Graphical User Interface",
    "hardware",
    "help-desk",
    "hierarchy",
    "hub",
    "implementation",
    "info-mediaries",
    "infrastructure",
    "initiative",
    "installation",
    "instruction set",
    "interface",
    "internet solution",
    "intranet",
    "knowledge user",
    "knowledge base",
    "local area network",
    "leverage",
    "matrices",
    "matrix",
    "methodology",
    "middleware",
    "migration",
    "model",
    "moderator",
    "monitoring",
    "moratorium",
    "neural-net",
    "open architecture",
    "open system",
    "orchestration",
    "paradigm",
    "parallelism",
    "policy",
    "portal",
    "pricing structure",
    "process improvement",
    "product",
    "productivity",
    "project",
    "projection",
    "protocol",
    "secured line",
    "service-desk",
    "software",
    "solution",
    "standardization",
    "strategy",
    "structure",
    "success",
    "superstructure",
    "support",
    "synergy",
    "system engine",
    "task-force",
    "throughput",
    "time-frame",
    "toolset",
    "utilisation",
    "website",
    "workforce"
];

},{}],"9rccV":[function(require,module,exports) {
module["exports"] = [
    "implement",
    "utilize",
    "integrate",
    "streamline",
    "optimize",
    "evolve",
    "transform",
    "embrace",
    "enable",
    "orchestrate",
    "leverage",
    "reinvent",
    "aggregate",
    "architect",
    "enhance",
    "incentivize",
    "morph",
    "empower",
    "envisioneer",
    "monetize",
    "harness",
    "facilitate",
    "seize",
    "disintermediate",
    "synergize",
    "strategize",
    "deploy",
    "brand",
    "grow",
    "target",
    "syndicate",
    "synthesize",
    "deliver",
    "mesh",
    "incubate",
    "engage",
    "maximize",
    "benchmark",
    "expedite",
    "reintermediate",
    "whiteboard",
    "visualize",
    "repurpose",
    "innovate",
    "scale",
    "unleash",
    "drive",
    "extend",
    "engineer",
    "revolutionize",
    "generate",
    "exploit",
    "transition",
    "e-enable",
    "iterate",
    "cultivate",
    "matrix",
    "productize",
    "redefine",
    "recontextualize"
];

},{}],"5aBp5":[function(require,module,exports) {
module["exports"] = [
    "clicks-and-mortar",
    "value-added",
    "vertical",
    "proactive",
    "robust",
    "revolutionary",
    "scalable",
    "leading-edge",
    "innovative",
    "intuitive",
    "strategic",
    "e-business",
    "mission-critical",
    "sticky",
    "one-to-one",
    "24/7",
    "end-to-end",
    "global",
    "B2B",
    "B2C",
    "granular",
    "frictionless",
    "virtual",
    "viral",
    "dynamic",
    "24/365",
    "best-of-breed",
    "killer",
    "magnetic",
    "bleeding-edge",
    "web-enabled",
    "interactive",
    "dot-com",
    "sexy",
    "back-end",
    "real-time",
    "efficient",
    "front-end",
    "distributed",
    "seamless",
    "extensible",
    "turn-key",
    "world-class",
    "open-source",
    "cross-platform",
    "cross-media",
    "synergistic",
    "bricks-and-clicks",
    "out-of-the-box",
    "enterprise",
    "integrated",
    "impactful",
    "wireless",
    "transparent",
    "next-generation",
    "cutting-edge",
    "user-centric",
    "visionary",
    "customized",
    "ubiquitous",
    "plug-and-play",
    "collaborative",
    "compelling",
    "holistic",
    "rich"
];

},{}],"fORcN":[function(require,module,exports) {
module["exports"] = [
    "synergies",
    "web-readiness",
    "paradigms",
    "markets",
    "partnerships",
    "infrastructures",
    "platforms",
    "initiatives",
    "channels",
    "eyeballs",
    "communities",
    "ROI",
    "solutions",
    "e-tailers",
    "e-services",
    "action-items",
    "portals",
    "niches",
    "technologies",
    "content",
    "vortals",
    "supply-chains",
    "convergence",
    "relationships",
    "architectures",
    "interfaces",
    "e-markets",
    "e-commerce",
    "systems",
    "bandwidth",
    "infomediaries",
    "models",
    "mindshare",
    "deliverables",
    "users",
    "schemas",
    "networks",
    "applications",
    "metrics",
    "e-business",
    "functionalities",
    "experiences",
    "web services",
    "methodologies",
    "blockchains"
];

},{}],"T7I3F":[function(require,module,exports) {
module["exports"] = [
    "#{Name.last_name} #{suffix}",
    "#{Name.last_name}-#{Name.last_name}",
    "#{Name.last_name}, #{Name.last_name} and #{Name.last_name}"
];

},{}],"7stGZ":[function(require,module,exports) {
var internet = {
};
module['exports'] = internet;
internet.free_email = require("./free_email");
internet.example_email = require("./example_email");
internet.domain_suffix = require("./domain_suffix");
internet.avatar_uri = require("./avatar_uri");

},{"./free_email":"cCh4K","./example_email":"3cquC","./domain_suffix":"11zXS","./avatar_uri":"5WmL4"}],"cCh4K":[function(require,module,exports) {
module["exports"] = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com"
];

},{}],"3cquC":[function(require,module,exports) {
module["exports"] = [
    "example.org",
    "example.com",
    "example.net"
];

},{}],"11zXS":[function(require,module,exports) {
module["exports"] = [
    "com",
    "biz",
    "info",
    "name",
    "net",
    "org"
];

},{}],"5WmL4":[function(require,module,exports) {
module["exports"] = [
    "0therplanet_128.jpg",
    "1markiz_128.jpg",
    "2fockus_128.jpg",
    "8d3k_128.jpg",
    "91bilal_128.jpg",
    "9lessons_128.jpg",
    "AM_Kn2_128.jpg",
    "AlbertoCococi_128.jpg",
    "BenouarradeM_128.jpg",
    "BillSKenney_128.jpg",
    "BrianPurkiss_128.jpg",
    "BroumiYoussef_128.jpg",
    "BryanHorsey_128.jpg",
    "Chakintosh_128.jpg",
    "ChrisFarina78_128.jpg",
    "Elt_n_128.jpg",
    "GavicoInd_128.jpg",
    "HenryHoffman_128.jpg",
    "IsaryAmairani_128.jpg",
    "Karimmove_128.jpg",
    "LucasPerdidao_128.jpg",
    "ManikRathee_128.jpg",
    "RussellBishop_128.jpg",
    "S0ufi4n3_128.jpg",
    "SULiik_128.jpg",
    "Shriiiiimp_128.jpg",
    "Silveredge9_128.jpg",
    "Skyhartman_128.jpg",
    "SlaapMe_128.jpg",
    "Stievius_128.jpg",
    "Talbi_ConSept_128.jpg",
    "VMilescu_128.jpg",
    "VinThomas_128.jpg",
    "YoungCutlass_128.jpg",
    "ZacharyZorbas_128.jpg",
    "_dwite__128.jpg",
    "_kkga_128.jpg",
    "_pedropinho_128.jpg",
    "_ragzor_128.jpg",
    "_scottburgess_128.jpg",
    "_shahedk_128.jpg",
    "_victa_128.jpg",
    "_vojto_128.jpg",
    "_williamguerra_128.jpg",
    "_yardenoon_128.jpg",
    "a1chapone_128.jpg",
    "a_brixen_128.jpg",
    "a_harris88_128.jpg",
    "aaronalfred_128.jpg",
    "aaroni_128.jpg",
    "aaronkwhite_128.jpg",
    "abdots_128.jpg",
    "abdulhyeuk_128.jpg",
    "abdullindenis_128.jpg",
    "abelcabans_128.jpg",
    "abotap_128.jpg",
    "abovefunction_128.jpg",
    "adamawesomeface_128.jpg",
    "adammarsbar_128.jpg",
    "adamnac_128.jpg",
    "adamsxu_128.jpg",
    "adellecharles_128.jpg",
    "ademilter_128.jpg",
    "adhamdannaway_128.jpg",
    "adhiardana_128.jpg",
    "adityasutomo_128.jpg",
    "adobi_128.jpg",
    "adrienths_128.jpg",
    "aeon56_128.jpg",
    "afusinatto_128.jpg",
    "agromov_128.jpg",
    "agustincruiz_128.jpg",
    "ah_lice_128.jpg",
    "ahmadajmi_128.jpg",
    "ahmetalpbalkan_128.jpg",
    "ahmetsulek_128.jpg",
    "aiiaiiaii_128.jpg",
    "ainsleywagon_128.jpg",
    "aio____128.jpg",
    "airskylar_128.jpg",
    "aislinnkelly_128.jpg",
    "ajaxy_ru_128.jpg",
    "aka_james_128.jpg",
    "akashsharma39_128.jpg",
    "akmalfikri_128.jpg",
    "akmur_128.jpg",
    "al_li_128.jpg",
    "alagoon_128.jpg",
    "alan_zhang__128.jpg",
    "albertaugustin_128.jpg",
    "alecarpentier_128.jpg",
    "aleclarsoniv_128.jpg",
    "aleinadsays_128.jpg",
    "alek_djuric_128.jpg",
    "aleksitappura_128.jpg",
    "alessandroribe_128.jpg",
    "alevizio_128.jpg",
    "alexandermayes_128.jpg",
    "alexivanichkin_128.jpg",
    "algunsanabria_128.jpg",
    "allagringaus_128.jpg",
    "allfordesign_128.jpg",
    "allthingssmitty_128.jpg",
    "alsobrooks_128.jpg",
    "alterchuca_128.jpg",
    "aluisio_azevedo_128.jpg",
    "alxleroydeval_128.jpg",
    "alxndrustinov_128.jpg",
    "amandabuzard_128.jpg",
    "amanruzaini_128.jpg",
    "amayvs_128.jpg",
    "amywebbb_128.jpg",
    "anaami_128.jpg",
    "anasnakawa_128.jpg",
    "anatolinicolae_128.jpg",
    "andrea211087_128.jpg",
    "andreas_pr_128.jpg",
    "andresdjasso_128.jpg",
    "andresenfredrik_128.jpg",
    "andrewabogado_128.jpg",
    "andrewarrow_128.jpg",
    "andrewcohen_128.jpg",
    "andrewofficer_128.jpg",
    "andyisonline_128.jpg",
    "andysolomon_128.jpg",
    "andytlaw_128.jpg",
    "angelceballos_128.jpg",
    "angelcolberg_128.jpg",
    "angelcreative_128.jpg",
    "anjhero_128.jpg",
    "ankitind_128.jpg",
    "anoff_128.jpg",
    "anthonysukow_128.jpg",
    "antjanus_128.jpg",
    "antongenkin_128.jpg",
    "antonyryndya_128.jpg",
    "antonyzotov_128.jpg",
    "aoimedia_128.jpg",
    "apriendeau_128.jpg",
    "arashmanteghi_128.jpg",
    "areandacom_128.jpg",
    "areus_128.jpg",
    "ariffsetiawan_128.jpg",
    "ariil_128.jpg",
    "arindam__128.jpg",
    "arishi__128.jpg",
    "arkokoley_128.jpg",
    "aroon_sharma_128.jpg",
    "arpitnj_128.jpg",
    "artd_sign_128.jpg",
    "artem_kostenko_128.jpg",
    "arthurholcombe1_128.jpg",
    "artvavs_128.jpg",
    "ashernatali_128.jpg",
    "ashocka18_128.jpg",
    "atanism_128.jpg",
    "atariboy_128.jpg",
    "ateneupopular_128.jpg",
    "attacks_128.jpg",
    "aviddayentonbay_128.jpg",
    "axel_128.jpg",
    "badlittleduck_128.jpg",
    "bagawarman_128.jpg",
    "baires_128.jpg",
    "balakayuriy_128.jpg",
    "balintorosz_128.jpg",
    "baliomega_128.jpg",
    "baluli_128.jpg",
    "bargaorobalo_128.jpg",
    "barputro_128.jpg",
    "bartjo_128.jpg",
    "bartoszdawydzik_128.jpg",
    "bassamology_128.jpg",
    "batsirai_128.jpg",
    "baumann_alex_128.jpg",
    "baumannzone_128.jpg",
    "bboy1895_128.jpg",
    "bcrad_128.jpg",
    "begreative_128.jpg",
    "belyaev_rs_128.jpg",
    "benefritz_128.jpg",
    "benjamin_knight_128.jpg",
    "bennyjien_128.jpg",
    "benoitboucart_128.jpg",
    "bereto_128.jpg",
    "bergmartin_128.jpg",
    "bermonpainter_128.jpg",
    "bertboerland_128.jpg",
    "besbujupi_128.jpg",
    "beshur_128.jpg",
    "betraydan_128.jpg",
    "beweinreich_128.jpg",
    "bfrohs_128.jpg",
    "bighanddesign_128.jpg",
    "bigmancho_128.jpg",
    "billyroshan_128.jpg",
    "bistrianiosip_128.jpg",
    "blakehawksworth_128.jpg",
    "blakesimkins_128.jpg",
    "bluefx__128.jpg",
    "bluesix_128.jpg",
    "bobbytwoshoes_128.jpg",
    "bobwassermann_128.jpg",
    "bolzanmarco_128.jpg",
    "borantula_128.jpg",
    "borges_marcos_128.jpg",
    "bowbrick_128.jpg",
    "boxmodel_128.jpg",
    "bpartridge_128.jpg",
    "bradenhamm_128.jpg",
    "brajeshwar_128.jpg",
    "brandclay_128.jpg",
    "brandonburke_128.jpg",
    "brandonflatsoda_128.jpg",
    "brandonmorreale_128.jpg",
    "brenmurrell_128.jpg",
    "brenton_clarke_128.jpg",
    "bruno_mart_128.jpg",
    "brunodesign1206_128.jpg",
    "bryan_topham_128.jpg",
    "bu7921_128.jpg",
    "bublienko_128.jpg",
    "buddhasource_128.jpg",
    "buleswapnil_128.jpg",
    "bungiwan_128.jpg",
    "buryaknick_128.jpg",
    "buzzusborne_128.jpg",
    "byrnecore_128.jpg",
    "byryan_128.jpg",
    "cadikkara_128.jpg",
    "calebjoyce_128.jpg",
    "calebogden_128.jpg",
    "canapud_128.jpg",
    "carbontwelve_128.jpg",
    "carlfairclough_128.jpg",
    "carlosblanco_eu_128.jpg",
    "carlosgavina_128.jpg",
    "carlosjgsousa_128.jpg",
    "carlosm_128.jpg",
    "carlyson_128.jpg",
    "caseycavanagh_128.jpg",
    "caspergrl_128.jpg",
    "catadeleon_128.jpg",
    "catarino_128.jpg",
    "cboller1_128.jpg",
    "cbracco_128.jpg",
    "ccinojasso1_128.jpg",
    "cdavis565_128.jpg",
    "cdharrison_128.jpg",
    "ceekaytweet_128.jpg",
    "cemshid_128.jpg",
    "cggaurav_128.jpg",
    "chaabane_wail_128.jpg",
    "chacky14_128.jpg",
    "chadami_128.jpg",
    "chadengle_128.jpg",
    "chaensel_128.jpg",
    "chandlervdw_128.jpg",
    "chanpory_128.jpg",
    "charlesrpratt_128.jpg",
    "charliecwaite_128.jpg",
    "charliegann_128.jpg",
    "chatyrko_128.jpg",
    "cherif_b_128.jpg",
    "chris_frees_128.jpg",
    "chris_witko_128.jpg",
    "chrismj83_128.jpg",
    "chrisslowik_128.jpg",
    "chrisstumph_128.jpg",
    "christianoliff_128.jpg",
    "chrisvanderkooi_128.jpg",
    "ciaranr_128.jpg",
    "cicerobr_128.jpg",
    "claudioguglieri_128.jpg",
    "cloudstudio_128.jpg",
    "clubb3rry_128.jpg",
    "cocolero_128.jpg",
    "codepoet_ru_128.jpg",
    "coderdiaz_128.jpg",
    "codysanfilippo_128.jpg",
    "cofla_128.jpg",
    "colgruv_128.jpg",
    "colirpixoil_128.jpg",
    "collegeman_128.jpg",
    "commadelimited_128.jpg",
    "conspirator_128.jpg",
    "constantx_128.jpg",
    "coreyginnivan_128.jpg",
    "coreyhaggard_128.jpg",
    "coreyweb_128.jpg",
    "craigelimeliah_128.jpg",
    "craighenneberry_128.jpg",
    "craigrcoles_128.jpg",
    "creartinc_128.jpg",
    "croakx_128.jpg",
    "curiousoffice_128.jpg",
    "curiousonaut_128.jpg",
    "cybind_128.jpg",
    "cynthiasavard_128.jpg",
    "cyril_gaillard_128.jpg",
    "d00maz_128.jpg",
    "d33pthought_128.jpg",
    "d_kobelyatsky_128.jpg",
    "d_nny_m_cher_128.jpg",
    "dactrtr_128.jpg",
    "dahparra_128.jpg",
    "dallasbpeters_128.jpg",
    "damenleeturks_128.jpg",
    "danillos_128.jpg",
    "daniloc_128.jpg",
    "danmartin70_128.jpg",
    "dannol_128.jpg",
    "danpliego_128.jpg",
    "danro_128.jpg",
    "dansowter_128.jpg",
    "danthms_128.jpg",
    "danvernon_128.jpg",
    "danvierich_128.jpg",
    "darcystonge_128.jpg",
    "darylws_128.jpg",
    "davecraige_128.jpg",
    "davidbaldie_128.jpg",
    "davidcazalis_128.jpg",
    "davidhemphill_128.jpg",
    "davidmerrique_128.jpg",
    "davidsasda_128.jpg",
    "dawidwu_128.jpg",
    "daykiine_128.jpg",
    "dc_user_128.jpg",
    "dcalonaci_128.jpg",
    "ddggccaa_128.jpg",
    "de_ascanio_128.jpg",
    "deeenright_128.jpg",
    "demersdesigns_128.jpg",
    "denisepires_128.jpg",
    "depaulawagner_128.jpg",
    "derekcramer_128.jpg",
    "derekebradley_128.jpg",
    "derienzo777_128.jpg",
    "desastrozo_128.jpg",
    "designervzm_128.jpg",
    "dev_essentials_128.jpg",
    "devankoshal_128.jpg",
    "deviljho__128.jpg",
    "devinhalladay_128.jpg",
    "dgajjar_128.jpg",
    "dgclegg_128.jpg",
    "dhilipsiva_128.jpg",
    "dhoot_amit_128.jpg",
    "dhooyenga_128.jpg",
    "dhrubo_128.jpg",
    "diansigitp_128.jpg",
    "dicesales_128.jpg",
    "diesellaws_128.jpg",
    "digitalmaverick_128.jpg",
    "dimaposnyy_128.jpg",
    "dingyi_128.jpg",
    "divya_128.jpg",
    "dixchen_128.jpg",
    "djsherman_128.jpg",
    "dmackerman_128.jpg",
    "dmitriychuta_128.jpg",
    "dnezkumar_128.jpg",
    "dnirmal_128.jpg",
    "donjain_128.jpg",
    "doooon_128.jpg",
    "doronmalki_128.jpg",
    "dorphern_128.jpg",
    "dotgridline_128.jpg",
    "dparrelli_128.jpg",
    "dpmachado_128.jpg",
    "dreizle_128.jpg",
    "drewbyreese_128.jpg",
    "dshster_128.jpg",
    "dss49_128.jpg",
    "dudestein_128.jpg",
    "duivvv_128.jpg",
    "dutchnadia_128.jpg",
    "dvdwinden_128.jpg",
    "dzantievm_128.jpg",
    "ecommerceil_128.jpg",
    "eddiechen_128.jpg",
    "edgarchris99_128.jpg",
    "edhenderson_128.jpg",
    "edkf_128.jpg",
    "edobene_128.jpg",
    "eduardostuart_128.jpg",
    "ehsandiary_128.jpg",
    "eitarafa_128.jpg",
    "el_fuertisimo_128.jpg",
    "elbuscainfo_128.jpg",
    "elenadissi_128.jpg",
    "elisabethkjaer_128.jpg",
    "elliotlewis_128.jpg",
    "elliotnolten_128.jpg",
    "embrcecreations_128.jpg",
    "emileboudeling_128.jpg",
    "emmandenn_128.jpg",
    "emmeffess_128.jpg",
    "emsgulam_128.jpg",
    "enda_128.jpg",
    "enjoythetau_128.jpg",
    "enricocicconi_128.jpg",
    "envex_128.jpg",
    "ernestsemerda_128.jpg",
    "erwanhesry_128.jpg",
    "estebanuribe_128.jpg",
    "eugeneeweb_128.jpg",
    "evandrix_128.jpg",
    "evanshajed_128.jpg",
    "exentrich_128.jpg",
    "eyronn_128.jpg",
    "fabbianz_128.jpg",
    "fabbrucci_128.jpg",
    "faisalabid_128.jpg",
    "falconerie_128.jpg",
    "falling_soul_128.jpg",
    "falvarad_128.jpg",
    "felipeapiress_128.jpg",
    "felipecsl_128.jpg",
    "ffbel_128.jpg",
    "finchjke_128.jpg",
    "findingjenny_128.jpg",
    "fiterik_128.jpg",
    "fjaguero_128.jpg",
    "flashmurphy_128.jpg",
    "flexrs_128.jpg",
    "foczzi_128.jpg",
    "fotomagin_128.jpg",
    "fran_mchamy_128.jpg",
    "francis_vega_128.jpg",
    "franciscoamk_128.jpg",
    "frankiefreesbie_128.jpg",
    "fronx_128.jpg",
    "funwatercat_128.jpg",
    "g3d_128.jpg",
    "gaborenton_128.jpg",
    "gabrielizalo_128.jpg",
    "gabrielrosser_128.jpg",
    "ganserene_128.jpg",
    "garand_128.jpg",
    "gauchomatt_128.jpg",
    "gauravjassal_128.jpg",
    "gavr1l0_128.jpg",
    "gcmorley_128.jpg",
    "gearpixels_128.jpg",
    "geneseleznev_128.jpg",
    "geobikas_128.jpg",
    "geran7_128.jpg",
    "geshan_128.jpg",
    "giancarlon_128.jpg",
    "gipsy_raf_128.jpg",
    "giuliusa_128.jpg",
    "gizmeedevil1991_128.jpg",
    "gkaam_128.jpg",
    "gmourier_128.jpg",
    "goddardlewis_128.jpg",
    "gofrasdesign_128.jpg",
    "gojeanyn_128.jpg",
    "gonzalorobaina_128.jpg",
    "grahamkennery_128.jpg",
    "greenbes_128.jpg",
    "gregkilian_128.jpg",
    "gregrwilkinson_128.jpg",
    "gregsqueeb_128.jpg",
    "grrr_nl_128.jpg",
    "gseguin_128.jpg",
    "gt_128.jpg",
    "gu5taf_128.jpg",
    "guiiipontes_128.jpg",
    "guillemboti_128.jpg",
    "guischmitt_128.jpg",
    "gusoto_128.jpg",
    "h1brd_128.jpg",
    "hafeeskhan_128.jpg",
    "hai_ninh_nguyen_128.jpg",
    "haligaliharun_128.jpg",
    "hanna_smi_128.jpg",
    "happypeter1983_128.jpg",
    "harry_sistalam_128.jpg",
    "haruintesettden_128.jpg",
    "hasslunsford_128.jpg",
    "haydn_woods_128.jpg",
    "helderleal_128.jpg",
    "hellofeverrrr_128.jpg",
    "her_ruu_128.jpg",
    "herbigt_128.jpg",
    "herkulano_128.jpg",
    "hermanobrother_128.jpg",
    "herrhaase_128.jpg",
    "heycamtaylor_128.jpg",
    "heyimjuani_128.jpg",
    "heykenneth_128.jpg",
    "hfalucas_128.jpg",
    "hgharrygo_128.jpg",
    "hiemil_128.jpg",
    "hjartstrorn_128.jpg",
    "hoangloi_128.jpg",
    "holdenweb_128.jpg",
    "homka_128.jpg",
    "horaciobella_128.jpg",
    "hota_v_128.jpg",
    "hsinyo23_128.jpg",
    "hugocornejo_128.jpg",
    "hugomano_128.jpg",
    "iamgarth_128.jpg",
    "iamglimy_128.jpg",
    "iamjdeleon_128.jpg",
    "iamkarna_128.jpg",
    "iamkeithmason_128.jpg",
    "iamsteffen_128.jpg",
    "id835559_128.jpg",
    "idiot_128.jpg",
    "iduuck_128.jpg",
    "ifarafonow_128.jpg",
    "igorgarybaldi_128.jpg",
    "illyzoren_128.jpg",
    "ilya_pestov_128.jpg",
    "imammuht_128.jpg",
    "imcoding_128.jpg",
    "imomenui_128.jpg",
    "imsoper_128.jpg",
    "increase_128.jpg",
    "incubo82_128.jpg",
    "instalox_128.jpg",
    "ionuss_128.jpg",
    "ipavelek_128.jpg",
    "iqbalperkasa_128.jpg",
    "iqonicd_128.jpg",
    "irae_128.jpg",
    "isaacfifth_128.jpg",
    "isacosta_128.jpg",
    "ismail_biltagi_128.jpg",
    "isnifer_128.jpg",
    "itolmach_128.jpg",
    "itsajimithing_128.jpg",
    "itskawsar_128.jpg",
    "itstotallyamy_128.jpg",
    "ivanfilipovbg_128.jpg",
    "j04ntoh_128.jpg",
    "j2deme_128.jpg",
    "j_drake__128.jpg",
    "jackiesaik_128.jpg",
    "jacksonlatka_128.jpg",
    "jacobbennett_128.jpg",
    "jagan123_128.jpg",
    "jakemoore_128.jpg",
    "jamiebrittain_128.jpg",
    "janpalounek_128.jpg",
    "jarjan_128.jpg",
    "jarsen_128.jpg",
    "jasonmarkjones_128.jpg",
    "javorszky_128.jpg",
    "jay_wilburn_128.jpg",
    "jayphen_128.jpg",
    "jayrobinson_128.jpg",
    "jcubic_128.jpg",
    "jedbridges_128.jpg",
    "jefffis_128.jpg",
    "jeffgolenski_128.jpg",
    "jehnglynn_128.jpg",
    "jennyshen_128.jpg",
    "jennyyo_128.jpg",
    "jeremery_128.jpg",
    "jeremiaha_128.jpg",
    "jeremiespoken_128.jpg",
    "jeremymouton_128.jpg",
    "jeremyshimko_128.jpg",
    "jeremyworboys_128.jpg",
    "jerrybai1907_128.jpg",
    "jervo_128.jpg",
    "jesseddy_128.jpg",
    "jffgrdnr_128.jpg",
    "jghyllebert_128.jpg",
    "jimmuirhead_128.jpg",
    "jitachi_128.jpg",
    "jjshaw14_128.jpg",
    "jjsiii_128.jpg",
    "jlsolerdeltoro_128.jpg",
    "jm_denis_128.jpg",
    "jmfsocial_128.jpg",
    "jmillspaysbills_128.jpg",
    "jnmnrd_128.jpg",
    "joannefournier_128.jpg",
    "joaoedumedeiros_128.jpg",
    "jodytaggart_128.jpg",
    "joe_black_128.jpg",
    "joelcipriano_128.jpg",
    "joelhelin_128.jpg",
    "joemdesign_128.jpg",
    "joetruesdell_128.jpg",
    "joeymurdah_128.jpg",
    "johannesneu_128.jpg",
    "johncafazza_128.jpg",
    "johndezember_128.jpg",
    "johnriordan_128.jpg",
    "johnsmithagency_128.jpg",
    "joki4_128.jpg",
    "jomarmen_128.jpg",
    "jonathansimmons_128.jpg",
    "jonkspr_128.jpg",
    "jonsgotwood_128.jpg",
    "jordyvdboom_128.jpg",
    "joreira_128.jpg",
    "josecarlospsh_128.jpg",
    "josemarques_128.jpg",
    "josep_martins_128.jpg",
    "josevnclch_128.jpg",
    "joshaustin_128.jpg",
    "joshhemsley_128.jpg",
    "joshmedeski_128.jpg",
    "joshuaraichur_128.jpg",
    "joshuasortino_128.jpg",
    "jpenico_128.jpg",
    "jpscribbles_128.jpg",
    "jqiuss_128.jpg",
    "juamperro_128.jpg",
    "juangomezw_128.jpg",
    "juanmamartinez_128.jpg",
    "juaumlol_128.jpg",
    "judzhin_miles_128.jpg",
    "justinrgraham_128.jpg",
    "justinrhee_128.jpg",
    "justinrob_128.jpg",
    "justme_timothyg_128.jpg",
    "jwalter14_128.jpg",
    "jydesign_128.jpg",
    "kaelifa_128.jpg",
    "kalmerrautam_128.jpg",
    "kamal_chaneman_128.jpg",
    "kanickairaj_128.jpg",
    "kapaluccio_128.jpg",
    "karalek_128.jpg",
    "karlkanall_128.jpg",
    "karolkrakowiak__128.jpg",
    "karsh_128.jpg",
    "karthipanraj_128.jpg",
    "kaspernordkvist_128.jpg",
    "katiemdaly_128.jpg",
    "kaysix_dizzy_128.jpg",
    "kazaky999_128.jpg",
    "kennyadr_128.jpg",
    "kerem_128.jpg",
    "kerihenare_128.jpg",
    "keryilmaz_128.jpg",
    "kevinjohndayy_128.jpg",
    "kevinoh_128.jpg",
    "kevka_128.jpg",
    "keyuri85_128.jpg",
    "kianoshp_128.jpg",
    "kijanmaharjan_128.jpg",
    "kikillo_128.jpg",
    "kimcool_128.jpg",
    "kinday_128.jpg",
    "kirangopal_128.jpg",
    "kiwiupover_128.jpg",
    "kkusaa_128.jpg",
    "klefue_128.jpg",
    "klimmka_128.jpg",
    "knilob_128.jpg",
    "kohette_128.jpg",
    "kojourin_128.jpg",
    "kolage_128.jpg",
    "kolmarlopez_128.jpg",
    "kolsvein_128.jpg",
    "konus_128.jpg",
    "koridhandy_128.jpg",
    "kosmar_128.jpg",
    "kostaspt_128.jpg",
    "krasnoukhov_128.jpg",
    "krystalfister_128.jpg",
    "kucingbelang4_128.jpg",
    "kudretkeskin_128.jpg",
    "kuldarkalvik_128.jpg",
    "kumarrajan12123_128.jpg",
    "kurafire_128.jpg",
    "kurtinc_128.jpg",
    "kushsolitary_128.jpg",
    "kvasnic_128.jpg",
    "ky_128.jpg",
    "kylefoundry_128.jpg",
    "kylefrost_128.jpg",
    "laasli_128.jpg",
    "lanceguyatt_128.jpg",
    "langate_128.jpg",
    "larrybolt_128.jpg",
    "larrygerard_128.jpg",
    "laurengray_128.jpg",
    "lawlbwoy_128.jpg",
    "layerssss_128.jpg",
    "leandrovaranda_128.jpg",
    "lebinoclard_128.jpg",
    "lebronjennan_128.jpg",
    "leehambley_128.jpg",
    "leeiio_128.jpg",
    "leemunroe_128.jpg",
    "leonfedotov_128.jpg",
    "lepetitogre_128.jpg",
    "lepinski_128.jpg",
    "levisan_128.jpg",
    "lewisainslie_128.jpg",
    "lhausermann_128.jpg",
    "liminha_128.jpg",
    "lingeswaran_128.jpg",
    "linkibol_128.jpg",
    "linux29_128.jpg",
    "lisovsky_128.jpg",
    "llun_128.jpg",
    "lmjabreu_128.jpg",
    "loganjlambert_128.jpg",
    "logorado_128.jpg",
    "lokesh_coder_128.jpg",
    "lonesomelemon_128.jpg",
    "longlivemyword_128.jpg",
    "looneydoodle_128.jpg",
    "lososina_128.jpg",
    "louis_currie_128.jpg",
    "low_res_128.jpg",
    "lowie_128.jpg",
    "lu4sh1i_128.jpg",
    "ludwiczakpawel_128.jpg",
    "luxe_128.jpg",
    "lvovenok_128.jpg",
    "m4rio_128.jpg",
    "m_kalibry_128.jpg",
    "ma_tiax_128.jpg",
    "mactopus_128.jpg",
    "macxim_128.jpg",
    "madcampos_128.jpg",
    "madebybrenton_128.jpg",
    "madebyvadim_128.jpg",
    "madewulf_128.jpg",
    "madshensel_128.jpg",
    "madysondesigns_128.jpg",
    "magoo04_128.jpg",
    "magugzbrand2d_128.jpg",
    "mahdif_128.jpg",
    "mahmoudmetwally_128.jpg",
    "maikelk_128.jpg",
    "maiklam_128.jpg",
    "malgordon_128.jpg",
    "malykhinv_128.jpg",
    "mandalareopens_128.jpg",
    "manekenthe_128.jpg",
    "mangosango_128.jpg",
    "manigm_128.jpg",
    "marakasina_128.jpg",
    "marciotoledo_128.jpg",
    "marclgonzales_128.jpg",
    "marcobarbosa_128.jpg",
    "marcomano__128.jpg",
    "marcoramires_128.jpg",
    "marcusgorillius_128.jpg",
    "markjenkins_128.jpg",
    "marklamb_128.jpg",
    "markolschesky_128.jpg",
    "markretzloff_128.jpg",
    "markwienands_128.jpg",
    "marlinjayakody_128.jpg",
    "marosholly_128.jpg",
    "marrimo_128.jpg",
    "marshallchen__128.jpg",
    "martinansty_128.jpg",
    "martip07_128.jpg",
    "mashaaaaal_128.jpg",
    "mastermindesign_128.jpg",
    "matbeedotcom_128.jpg",
    "mateaodviteza_128.jpg",
    "matkins_128.jpg",
    "matt3224_128.jpg",
    "mattbilotti_128.jpg",
    "mattdetails_128.jpg",
    "matthewkay__128.jpg",
    "mattlat_128.jpg",
    "mattsapii_128.jpg",
    "mauriolg_128.jpg",
    "maximseshuk_128.jpg",
    "maximsorokin_128.jpg",
    "maxlinderman_128.jpg",
    "maz_128.jpg",
    "mbilalsiddique1_128.jpg",
    "mbilderbach_128.jpg",
    "mcflydesign_128.jpg",
    "mds_128.jpg",
    "mdsisto_128.jpg",
    "meelford_128.jpg",
    "megdraws_128.jpg",
    "mekal_128.jpg",
    "meln1ks_128.jpg",
    "melvindidit_128.jpg",
    "mfacchinello_128.jpg",
    "mgonto_128.jpg",
    "mhaligowski_128.jpg",
    "mhesslow_128.jpg",
    "mhudobivnik_128.jpg",
    "michaelabehsera_128.jpg",
    "michaelbrooksjr_128.jpg",
    "michaelcolenso_128.jpg",
    "michaelcomiskey_128.jpg",
    "michaelkoper_128.jpg",
    "michaelmartinho_128.jpg",
    "michalhron_128.jpg",
    "michigangraham_128.jpg",
    "michzen_128.jpg",
    "mighty55_128.jpg",
    "miguelkooreman_128.jpg",
    "miguelmendes_128.jpg",
    "mikaeljorhult_128.jpg",
    "mikebeecham_128.jpg",
    "mikemai2awesome_128.jpg",
    "millinet_128.jpg",
    "mirfanqureshi_128.jpg",
    "missaaamy_128.jpg",
    "mizhgan_128.jpg",
    "mizko_128.jpg",
    "mkginfo_128.jpg",
    "mocabyte_128.jpg",
    "mohanrohith_128.jpg",
    "moscoz_128.jpg",
    "motionthinks_128.jpg",
    "moynihan_128.jpg",
    "mr_shiznit_128.jpg",
    "mr_subtle_128.jpg",
    "mrebay007_128.jpg",
    "mrjamesnoble_128.jpg",
    "mrmartineau_128.jpg",
    "mrxloka_128.jpg",
    "mslarkina_128.jpg",
    "msveet_128.jpg",
    "mtolokonnikov_128.jpg",
    "mufaddal_mw_128.jpg",
    "mugukamil_128.jpg",
    "muridrahhal_128.jpg",
    "muringa_128.jpg",
    "murrayswift_128.jpg",
    "mutlu82_128.jpg",
    "mutu_krish_128.jpg",
    "mvdheuvel_128.jpg",
    "mwarkentin_128.jpg",
    "myastro_128.jpg",
    "mylesb_128.jpg",
    "mymyboy_128.jpg",
    "n1ght_coder_128.jpg",
    "n3dmax_128.jpg",
    "n_tassone_128.jpg",
    "nacho_128.jpg",
    "naitanamoreno_128.jpg",
    "namankreative_128.jpg",
    "nandini_m_128.jpg",
    "nasirwd_128.jpg",
    "nastya_mane_128.jpg",
    "nateschulte_128.jpg",
    "nathalie_fs_128.jpg",
    "naupintos_128.jpg",
    "nbirckel_128.jpg",
    "nckjrvs_128.jpg",
    "necodymiconer_128.jpg",
    "nehfy_128.jpg",
    "nellleo_128.jpg",
    "nelshd_128.jpg",
    "nelsonjoyce_128.jpg",
    "nemanjaivanovic_128.jpg",
    "nepdud_128.jpg",
    "nerdgr8_128.jpg",
    "nerrsoft_128.jpg",
    "nessoila_128.jpg",
    "netonet_il_128.jpg",
    "newbrushes_128.jpg",
    "nfedoroff_128.jpg",
    "nickfratter_128.jpg",
    "nicklacke_128.jpg",
    "nicolai_larsen_128.jpg",
    "nicolasfolliot_128.jpg",
    "nicoleglynn_128.jpg",
    "nicollerich_128.jpg",
    "nilshelmersson_128.jpg",
    "nilshoenson_128.jpg",
    "ninjad3m0_128.jpg",
    "nitinhayaran_128.jpg",
    "nomidesigns_128.jpg",
    "normanbox_128.jpg",
    "notbadart_128.jpg",
    "noufalibrahim_128.jpg",
    "noxdzine_128.jpg",
    "nsamoylov_128.jpg",
    "ntfblog_128.jpg",
    "nutzumi_128.jpg",
    "nvkznemo_128.jpg",
    "nwdsha_128.jpg",
    "nyancecom_128.jpg",
    "oaktreemedia_128.jpg",
    "okandungel_128.jpg",
    "okansurreel_128.jpg",
    "okcoker_128.jpg",
    "oksanafrewer_128.jpg",
    "okseanjay_128.jpg",
    "oktayelipek_128.jpg",
    "olaolusoga_128.jpg",
    "olgary_128.jpg",
    "omnizya_128.jpg",
    "ooomz_128.jpg",
    "operatino_128.jpg",
    "opnsrce_128.jpg",
    "orkuncaylar_128.jpg",
    "oscarowusu_128.jpg",
    "oskamaya_128.jpg",
    "oskarlevinson_128.jpg",
    "osmanince_128.jpg",
    "osmond_128.jpg",
    "ostirbu_128.jpg",
    "osvaldas_128.jpg",
    "otozk_128.jpg",
    "ovall_128.jpg",
    "overcloacked_128.jpg",
    "overra_128.jpg",
    "panchajanyag_128.jpg",
    "panghal0_128.jpg",
    "patrickcoombe_128.jpg",
    "paulfarino_128.jpg",
    "pcridesagain_128.jpg",
    "peachananr_128.jpg",
    "pechkinator_128.jpg",
    "peejfancher_128.jpg",
    "pehamondello_128.jpg",
    "perfectflow_128.jpg",
    "perretmagali_128.jpg",
    "petar_prog_128.jpg",
    "petebernardo_128.jpg",
    "peter576_128.jpg",
    "peterlandt_128.jpg",
    "petrangr_128.jpg",
    "phillapier_128.jpg",
    "picard102_128.jpg",
    "pierre_nel_128.jpg",
    "pierrestoffe_128.jpg",
    "pifagor_128.jpg",
    "pixage_128.jpg",
    "plasticine_128.jpg",
    "plbabin_128.jpg",
    "pmeissner_128.jpg",
    "polarity_128.jpg",
    "ponchomendivil_128.jpg",
    "poormini_128.jpg",
    "popey_128.jpg",
    "posterjob_128.jpg",
    "praveen_vijaya_128.jpg",
    "prheemo_128.jpg",
    "primozcigler_128.jpg",
    "prinzadi_128.jpg",
    "privetwagner_128.jpg",
    "prrstn_128.jpg",
    "psaikali_128.jpg",
    "psdesignuk_128.jpg",
    "puzik_128.jpg",
    "pyronite_128.jpg",
    "quailandquasar_128.jpg",
    "r_garcia_128.jpg",
    "r_oy_128.jpg",
    "rachelreveley_128.jpg",
    "rahmeen_128.jpg",
    "ralph_lam_128.jpg",
    "ramanathan_pdy_128.jpg",
    "randomlies_128.jpg",
    "rangafangs_128.jpg",
    "raphaelnikson_128.jpg",
    "raquelwilson_128.jpg",
    "ratbus_128.jpg",
    "rawdiggie_128.jpg",
    "rdbannon_128.jpg",
    "rdsaunders_128.jpg",
    "reabo101_128.jpg",
    "reetajayendra_128.jpg",
    "rehatkathuria_128.jpg",
    "reideiredale_128.jpg",
    "renbyrd_128.jpg",
    "rez___a_128.jpg",
    "ricburton_128.jpg",
    "richardgarretts_128.jpg",
    "richwild_128.jpg",
    "rickdt_128.jpg",
    "rickyyean_128.jpg",
    "rikas_128.jpg",
    "ripplemdk_128.jpg",
    "rmlewisuk_128.jpg",
    "rob_thomas10_128.jpg",
    "robbschiller_128.jpg",
    "robergd_128.jpg",
    "robinclediere_128.jpg",
    "robinlayfield_128.jpg",
    "robturlinckx_128.jpg",
    "rodnylobos_128.jpg",
    "rohixx_128.jpg",
    "romanbulah_128.jpg",
    "roxanejammet_128.jpg",
    "roybarberuk_128.jpg",
    "rpatey_128.jpg",
    "rpeezy_128.jpg",
    "rtgibbons_128.jpg",
    "rtyukmaev_128.jpg",
    "rude_128.jpg",
    "ruehldesign_128.jpg",
    "runningskull_128.jpg",
    "russell_baylis_128.jpg",
    "russoedu_128.jpg",
    "ruzinav_128.jpg",
    "rweve_128.jpg",
    "ryandownie_128.jpg",
    "ryanjohnson_me_128.jpg",
    "ryankirkman_128.jpg",
    "ryanmclaughlin_128.jpg",
    "ryhanhassan_128.jpg",
    "ryuchi311_128.jpg",
    "s4f1_128.jpg",
    "saarabpreet_128.jpg",
    "sachacorazzi_128.jpg",
    "sachingawas_128.jpg",
    "safrankov_128.jpg",
    "sainraja_128.jpg",
    "salimianoff_128.jpg",
    "salleedesign_128.jpg",
    "salvafc_128.jpg",
    "samgrover_128.jpg",
    "samihah_128.jpg",
    "samscouto_128.jpg",
    "samuelkraft_128.jpg",
    "sandywoodruff_128.jpg",
    "sangdth_128.jpg",
    "santi_urso_128.jpg",
    "saschadroste_128.jpg",
    "saschamt_128.jpg",
    "sasha_shestakov_128.jpg",
    "saulihirvi_128.jpg",
    "sawalazar_128.jpg",
    "sawrb_128.jpg",
    "sbtransparent_128.jpg",
    "scips_128.jpg",
    "scott_riley_128.jpg",
    "scottfeltham_128.jpg",
    "scottgallant_128.jpg",
    "scottiedude_128.jpg",
    "scottkclark_128.jpg",
    "scrapdnb_128.jpg",
    "sdidonato_128.jpg",
    "sebashton_128.jpg",
    "sementiy_128.jpg",
    "serefka_128.jpg",
    "sergeyalmone_128.jpg",
    "sergeysafonov_128.jpg",
    "sethlouey_128.jpg",
    "seyedhossein1_128.jpg",
    "sgaurav_baghel_128.jpg",
    "shadeed9_128.jpg",
    "shalt0ni_128.jpg",
    "shaneIxD_128.jpg",
    "shanehudson_128.jpg",
    "sharvin_128.jpg",
    "shesgared_128.jpg",
    "shinze_128.jpg",
    "shoaib253_128.jpg",
    "shojberg_128.jpg",
    "shvelo96_128.jpg",
    "silv3rgvn_128.jpg",
    "silvanmuhlemann_128.jpg",
    "simobenso_128.jpg",
    "sindresorhus_128.jpg",
    "sircalebgrove_128.jpg",
    "skkirilov_128.jpg",
    "slowspock_128.jpg",
    "smaczny_128.jpg",
    "smalonso_128.jpg",
    "smenov_128.jpg",
    "snowshade_128.jpg",
    "snowwrite_128.jpg",
    "sokaniwaal_128.jpg",
    "solid_color_128.jpg",
    "souperphly_128.jpg",
    "souuf_128.jpg",
    "sovesove_128.jpg",
    "soyjavi_128.jpg",
    "spacewood__128.jpg",
    "spbroma_128.jpg",
    "spedwig_128.jpg",
    "sprayaga_128.jpg",
    "sreejithexp_128.jpg",
    "ssbb_me_128.jpg",
    "ssiskind_128.jpg",
    "sta1ex_128.jpg",
    "stalewine_128.jpg",
    "stan_128.jpg",
    "stayuber_128.jpg",
    "stefanotirloni_128.jpg",
    "stefanozoffoli_128.jpg",
    "stefooo_128.jpg",
    "stefvdham_128.jpg",
    "stephcoue_128.jpg",
    "sterlingrules_128.jpg",
    "stevedesigner_128.jpg",
    "steynviljoen_128.jpg",
    "strikewan_128.jpg",
    "stushona_128.jpg",
    "sulaqo_128.jpg",
    "sunlandictwin_128.jpg",
    "sunshinedgirl_128.jpg",
    "superoutman_128.jpg",
    "supervova_128.jpg",
    "supjoey_128.jpg",
    "suprb_128.jpg",
    "sur4dye_128.jpg",
    "surgeonist_128.jpg",
    "suribbles_128.jpg",
    "svenlen_128.jpg",
    "swaplord_128.jpg",
    "sweetdelisa_128.jpg",
    "switmer777_128.jpg",
    "swooshycueb_128.jpg",
    "sydlawrence_128.jpg",
    "syropian_128.jpg",
    "tanveerrao_128.jpg",
    "taybenlor_128.jpg",
    "taylorling_128.jpg",
    "tbakdesigns_128.jpg",
    "teddyzetterlund_128.jpg",
    "teeragit_128.jpg",
    "tereshenkov_128.jpg",
    "terpimost_128.jpg",
    "terrorpixel_128.jpg",
    "terryxlife_128.jpg",
    "teylorfeliz_128.jpg",
    "tgerken_128.jpg",
    "tgormtx_128.jpg",
    "thaisselenator__128.jpg",
    "thaodang17_128.jpg",
    "thatonetommy_128.jpg",
    "the_purplebunny_128.jpg",
    "the_winslet_128.jpg",
    "thedamianhdez_128.jpg",
    "thedjpetersen_128.jpg",
    "thehacker_128.jpg",
    "thekevinjones_128.jpg",
    "themadray_128.jpg",
    "themikenagle_128.jpg",
    "themrdave_128.jpg",
    "theonlyzeke_128.jpg",
    "therealmarvin_128.jpg",
    "thewillbeard_128.jpg",
    "thiagovernetti_128.jpg",
    "thibaut_re_128.jpg",
    "thierrykoblentz_128.jpg",
    "thierrymeier__128.jpg",
    "thimo_cz_128.jpg",
    "thinkleft_128.jpg",
    "thomasgeisen_128.jpg",
    "thomasschrijer_128.jpg",
    "timgthomas_128.jpg",
    "timmillwood_128.jpg",
    "timothycd_128.jpg",
    "timpetricola_128.jpg",
    "tjrus_128.jpg",
    "to_soham_128.jpg",
    "tobysaxon_128.jpg",
    "toddrew_128.jpg",
    "tom_even_128.jpg",
    "tomas_janousek_128.jpg",
    "tonymillion_128.jpg",
    "traneblow_128.jpg",
    "travis_arnold_128.jpg",
    "travishines_128.jpg",
    "tristanlegros_128.jpg",
    "trubeatto_128.jpg",
    "trueblood_33_128.jpg",
    "tumski_128.jpg",
    "tur8le_128.jpg",
    "turkutuuli_128.jpg",
    "tweetubhai_128.jpg",
    "twittypork_128.jpg",
    "txcx_128.jpg",
    "uberschizo_128.jpg",
    "ultragex_128.jpg",
    "umurgdk_128.jpg",
    "unterdreht_128.jpg",
    "urrutimeoli_128.jpg",
    "uxalex_128.jpg",
    "uxpiper_128.jpg",
    "uxward_128.jpg",
    "vanchesz_128.jpg",
    "vaughanmoffitt_128.jpg",
    "vc27_128.jpg",
    "vicivadeline_128.jpg",
    "victorDubugras_128.jpg",
    "victor_haydin_128.jpg",
    "victordeanda_128.jpg",
    "victorerixon_128.jpg",
    "victorquinn_128.jpg",
    "victorstuber_128.jpg",
    "vigobronx_128.jpg",
    "vijaykarthik_128.jpg",
    "vikashpathak18_128.jpg",
    "vikasvinfotech_128.jpg",
    "vimarethomas_128.jpg",
    "vinciarts_128.jpg",
    "vitor376_128.jpg",
    "vitorleal_128.jpg",
    "vivekprvr_128.jpg",
    "vj_demien_128.jpg",
    "vladarbatov_128.jpg",
    "vladimirdevic_128.jpg",
    "vladyn_128.jpg",
    "vlajki_128.jpg",
    "vm_f_128.jpg",
    "vocino_128.jpg",
    "vonachoo_128.jpg",
    "vovkasolovev_128.jpg",
    "vytautas_a_128.jpg",
    "waghner_128.jpg",
    "wake_gs_128.jpg",
    "we_social_128.jpg",
    "wearesavas_128.jpg",
    "weavermedia_128.jpg",
    "webtanya_128.jpg",
    "weglov_128.jpg",
    "wegotvices_128.jpg",
    "wesleytrankin_128.jpg",
    "wikiziner_128.jpg",
    "wiljanslofstra_128.jpg",
    "wim1k_128.jpg",
    "wintopia_128.jpg",
    "woodsman001_128.jpg",
    "woodydotmx_128.jpg",
    "wtrsld_128.jpg",
    "xadhix_128.jpg",
    "xalionmalik_128.jpg",
    "xamorep_128.jpg",
    "xiel_128.jpg",
    "xilantra_128.jpg",
    "xravil_128.jpg",
    "xripunov_128.jpg",
    "xtopherpaul_128.jpg",
    "y2graphic_128.jpg",
    "yalozhkin_128.jpg",
    "yassiryahya_128.jpg",
    "yayteejay_128.jpg",
    "yecidsm_128.jpg",
    "yehudab_128.jpg",
    "yesmeck_128.jpg",
    "yigitpinarbasi_128.jpg",
    "zackeeler_128.jpg",
    "zaki3d_128.jpg",
    "zauerkraut_128.jpg",
    "zforrester_128.jpg",
    "zvchkelly_128.jpg", 
];

},{}],"hNvTn":[function(require,module,exports) {
var database = {
};
module['exports'] = database;
database.collation = require("./collation");
database.column = require("./column");
database.engine = require("./engine");
database.type = require("./type");

},{"./collation":"1pnwI","./column":"hwNYh","./engine":"2GwbI","./type":"iBip6"}],"1pnwI":[function(require,module,exports) {
module["exports"] = [
    "utf8_unicode_ci",
    "utf8_general_ci",
    "utf8_bin",
    "ascii_bin",
    "ascii_general_ci",
    "cp1250_bin",
    "cp1250_general_ci"
];

},{}],"hwNYh":[function(require,module,exports) {
module["exports"] = [
    "id",
    "title",
    "name",
    "email",
    "phone",
    "token",
    "group",
    "category",
    "password",
    "comment",
    "avatar",
    "status",
    "createdAt",
    "updatedAt"
];

},{}],"2GwbI":[function(require,module,exports) {
module["exports"] = [
    "InnoDB",
    "MyISAM",
    "MEMORY",
    "CSV",
    "BLACKHOLE",
    "ARCHIVE"
];

},{}],"iBip6":[function(require,module,exports) {
module["exports"] = [
    "int",
    "varchar",
    "text",
    "date",
    "datetime",
    "tinyint",
    "time",
    "timestamp",
    "smallint",
    "mediumint",
    "bigint",
    "decimal",
    "float",
    "double",
    "real",
    "bit",
    "boolean",
    "serial",
    "blob",
    "binary",
    "enum",
    "set",
    "geometry",
    "point"
];

},{}],"8bNdA":[function(require,module,exports) {
var lorem = {
};
module['exports'] = lorem;
lorem.words = require("./words");
lorem.supplemental = require("./supplemental");

},{"./words":"hHlpa","./supplemental":"i1Fho"}],"hHlpa":[function(require,module,exports) {
module["exports"] = [
    "alias",
    "consequatur",
    "aut",
    "perferendis",
    "sit",
    "voluptatem",
    "accusantium",
    "doloremque",
    "aperiam",
    "eaque",
    "ipsa",
    "quae",
    "ab",
    "illo",
    "inventore",
    "veritatis",
    "et",
    "quasi",
    "architecto",
    "beatae",
    "vitae",
    "dicta",
    "sunt",
    "explicabo",
    "aspernatur",
    "aut",
    "odit",
    "aut",
    "fugit",
    "sed",
    "quia",
    "consequuntur",
    "magni",
    "dolores",
    "eos",
    "qui",
    "ratione",
    "voluptatem",
    "sequi",
    "nesciunt",
    "neque",
    "dolorem",
    "ipsum",
    "quia",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisci",
    "velit",
    "sed",
    "quia",
    "non",
    "numquam",
    "eius",
    "modi",
    "tempora",
    "incidunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magnam",
    "aliquam",
    "quaerat",
    "voluptatem",
    "ut",
    "enim",
    "ad",
    "minima",
    "veniam",
    "quis",
    "nostrum",
    "exercitationem",
    "ullam",
    "corporis",
    "nemo",
    "enim",
    "ipsam",
    "voluptatem",
    "quia",
    "voluptas",
    "sit",
    "suscipit",
    "laboriosam",
    "nisi",
    "ut",
    "aliquid",
    "ex",
    "ea",
    "commodi",
    "consequatur",
    "quis",
    "autem",
    "vel",
    "eum",
    "iure",
    "reprehenderit",
    "qui",
    "in",
    "ea",
    "voluptate",
    "velit",
    "esse",
    "quam",
    "nihil",
    "molestiae",
    "et",
    "iusto",
    "odio",
    "dignissimos",
    "ducimus",
    "qui",
    "blanditiis",
    "praesentium",
    "laudantium",
    "totam",
    "rem",
    "voluptatum",
    "deleniti",
    "atque",
    "corrupti",
    "quos",
    "dolores",
    "et",
    "quas",
    "molestias",
    "excepturi",
    "sint",
    "occaecati",
    "cupiditate",
    "non",
    "provident",
    "sed",
    "ut",
    "perspiciatis",
    "unde",
    "omnis",
    "iste",
    "natus",
    "error",
    "similique",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollitia",
    "animi",
    "id",
    "est",
    "laborum",
    "et",
    "dolorum",
    "fuga",
    "et",
    "harum",
    "quidem",
    "rerum",
    "facilis",
    "est",
    "et",
    "expedita",
    "distinctio",
    "nam",
    "libero",
    "tempore",
    "cum",
    "soluta",
    "nobis",
    "est",
    "eligendi",
    "optio",
    "cumque",
    "nihil",
    "impedit",
    "quo",
    "porro",
    "quisquam",
    "est",
    "qui",
    "minus",
    "id",
    "quod",
    "maxime",
    "placeat",
    "facere",
    "possimus",
    "omnis",
    "voluptas",
    "assumenda",
    "est",
    "omnis",
    "dolor",
    "repellendus",
    "temporibus",
    "autem",
    "quibusdam",
    "et",
    "aut",
    "consequatur",
    "vel",
    "illum",
    "qui",
    "dolorem",
    "eum",
    "fugiat",
    "quo",
    "voluptas",
    "nulla",
    "pariatur",
    "at",
    "vero",
    "eos",
    "et",
    "accusamus",
    "officiis",
    "debitis",
    "aut",
    "rerum",
    "necessitatibus",
    "saepe",
    "eveniet",
    "ut",
    "et",
    "voluptates",
    "repudiandae",
    "sint",
    "et",
    "molestiae",
    "non",
    "recusandae",
    "itaque",
    "earum",
    "rerum",
    "hic",
    "tenetur",
    "a",
    "sapiente",
    "delectus",
    "ut",
    "aut",
    "reiciendis",
    "voluptatibus",
    "maiores",
    "doloribus",
    "asperiores",
    "repellat"
];

},{}],"i1Fho":[function(require,module,exports) {
module["exports"] = [
    "abbas",
    "abduco",
    "abeo",
    "abscido",
    "absconditus",
    "absens",
    "absorbeo",
    "absque",
    "abstergo",
    "absum",
    "abundans",
    "abutor",
    "accedo",
    "accendo",
    "acceptus",
    "accipio",
    "accommodo",
    "accusator",
    "acer",
    "acerbitas",
    "acervus",
    "acidus",
    "acies",
    "acquiro",
    "acsi",
    "adamo",
    "adaugeo",
    "addo",
    "adduco",
    "ademptio",
    "adeo",
    "adeptio",
    "adfectus",
    "adfero",
    "adficio",
    "adflicto",
    "adhaero",
    "adhuc",
    "adicio",
    "adimpleo",
    "adinventitias",
    "adipiscor",
    "adiuvo",
    "administratio",
    "admiratio",
    "admitto",
    "admoneo",
    "admoveo",
    "adnuo",
    "adopto",
    "adsidue",
    "adstringo",
    "adsuesco",
    "adsum",
    "adulatio",
    "adulescens",
    "adultus",
    "aduro",
    "advenio",
    "adversus",
    "advoco",
    "aedificium",
    "aeger",
    "aegre",
    "aegrotatio",
    "aegrus",
    "aeneus",
    "aequitas",
    "aequus",
    "aer",
    "aestas",
    "aestivus",
    "aestus",
    "aetas",
    "aeternus",
    "ager",
    "aggero",
    "aggredior",
    "agnitio",
    "agnosco",
    "ago",
    "ait",
    "aiunt",
    "alienus",
    "alii",
    "alioqui",
    "aliqua",
    "alius",
    "allatus",
    "alo",
    "alter",
    "altus",
    "alveus",
    "amaritudo",
    "ambitus",
    "ambulo",
    "amicitia",
    "amiculum",
    "amissio",
    "amita",
    "amitto",
    "amo",
    "amor",
    "amoveo",
    "amplexus",
    "amplitudo",
    "amplus",
    "ancilla",
    "angelus",
    "angulus",
    "angustus",
    "animadverto",
    "animi",
    "animus",
    "annus",
    "anser",
    "ante",
    "antea",
    "antepono",
    "antiquus",
    "aperio",
    "aperte",
    "apostolus",
    "apparatus",
    "appello",
    "appono",
    "appositus",
    "approbo",
    "apto",
    "aptus",
    "apud",
    "aqua",
    "ara",
    "aranea",
    "arbitro",
    "arbor",
    "arbustum",
    "arca",
    "arceo",
    "arcesso",
    "arcus",
    "argentum",
    "argumentum",
    "arguo",
    "arma",
    "armarium",
    "armo",
    "aro",
    "ars",
    "articulus",
    "artificiose",
    "arto",
    "arx",
    "ascisco",
    "ascit",
    "asper",
    "aspicio",
    "asporto",
    "assentator",
    "astrum",
    "atavus",
    "ater",
    "atqui",
    "atrocitas",
    "atrox",
    "attero",
    "attollo",
    "attonbitus",
    "auctor",
    "auctus",
    "audacia",
    "audax",
    "audentia",
    "audeo",
    "audio",
    "auditor",
    "aufero",
    "aureus",
    "auris",
    "aurum",
    "aut",
    "autem",
    "autus",
    "auxilium",
    "avaritia",
    "avarus",
    "aveho",
    "averto",
    "avoco",
    "baiulus",
    "balbus",
    "barba",
    "bardus",
    "basium",
    "beatus",
    "bellicus",
    "bellum",
    "bene",
    "beneficium",
    "benevolentia",
    "benigne",
    "bestia",
    "bibo",
    "bis",
    "blandior",
    "bonus",
    "bos",
    "brevis",
    "cado",
    "caecus",
    "caelestis",
    "caelum",
    "calamitas",
    "calcar",
    "calco",
    "calculus",
    "callide",
    "campana",
    "candidus",
    "canis",
    "canonicus",
    "canto",
    "capillus",
    "capio",
    "capitulus",
    "capto",
    "caput",
    "carbo",
    "carcer",
    "careo",
    "caries",
    "cariosus",
    "caritas",
    "carmen",
    "carpo",
    "carus",
    "casso",
    "caste",
    "casus",
    "catena",
    "caterva",
    "cattus",
    "cauda",
    "causa",
    "caute",
    "caveo",
    "cavus",
    "cedo",
    "celebrer",
    "celer",
    "celo",
    "cena",
    "cenaculum",
    "ceno",
    "censura",
    "centum",
    "cerno",
    "cernuus",
    "certe",
    "certo",
    "certus",
    "cervus",
    "cetera",
    "charisma",
    "chirographum",
    "cibo",
    "cibus",
    "cicuta",
    "cilicium",
    "cimentarius",
    "ciminatio",
    "cinis",
    "circumvenio",
    "cito",
    "civis",
    "civitas",
    "clam",
    "clamo",
    "claro",
    "clarus",
    "claudeo",
    "claustrum",
    "clementia",
    "clibanus",
    "coadunatio",
    "coaegresco",
    "coepi",
    "coerceo",
    "cogito",
    "cognatus",
    "cognomen",
    "cogo",
    "cohaero",
    "cohibeo",
    "cohors",
    "colligo",
    "colloco",
    "collum",
    "colo",
    "color",
    "coma",
    "combibo",
    "comburo",
    "comedo",
    "comes",
    "cometes",
    "comis",
    "comitatus",
    "commemoro",
    "comminor",
    "commodo",
    "communis",
    "comparo",
    "compello",
    "complectus",
    "compono",
    "comprehendo",
    "comptus",
    "conatus",
    "concedo",
    "concido",
    "conculco",
    "condico",
    "conduco",
    "confero",
    "confido",
    "conforto",
    "confugo",
    "congregatio",
    "conicio",
    "coniecto",
    "conitor",
    "coniuratio",
    "conor",
    "conqueror",
    "conscendo",
    "conservo",
    "considero",
    "conspergo",
    "constans",
    "consuasor",
    "contabesco",
    "contego",
    "contigo",
    "contra",
    "conturbo",
    "conventus",
    "convoco",
    "copia",
    "copiose",
    "cornu",
    "corona",
    "corpus",
    "correptius",
    "corrigo",
    "corroboro",
    "corrumpo",
    "coruscus",
    "cotidie",
    "crapula",
    "cras",
    "crastinus",
    "creator",
    "creber",
    "crebro",
    "credo",
    "creo",
    "creptio",
    "crepusculum",
    "cresco",
    "creta",
    "cribro",
    "crinis",
    "cruciamentum",
    "crudelis",
    "cruentus",
    "crur",
    "crustulum",
    "crux",
    "cubicularis",
    "cubitum",
    "cubo",
    "cui",
    "cuius",
    "culpa",
    "culpo",
    "cultellus",
    "cultura",
    "cum",
    "cunabula",
    "cunae",
    "cunctatio",
    "cupiditas",
    "cupio",
    "cuppedia",
    "cupressus",
    "cur",
    "cura",
    "curatio",
    "curia",
    "curiositas",
    "curis",
    "curo",
    "curriculum",
    "currus",
    "cursim",
    "curso",
    "cursus",
    "curto",
    "curtus",
    "curvo",
    "curvus",
    "custodia",
    "damnatio",
    "damno",
    "dapifer",
    "debeo",
    "debilito",
    "decens",
    "decerno",
    "decet",
    "decimus",
    "decipio",
    "decor",
    "decretum",
    "decumbo",
    "dedecor",
    "dedico",
    "deduco",
    "defaeco",
    "defendo",
    "defero",
    "defessus",
    "defetiscor",
    "deficio",
    "defigo",
    "defleo",
    "defluo",
    "defungo",
    "degenero",
    "degero",
    "degusto",
    "deinde",
    "delectatio",
    "delego",
    "deleo",
    "delibero",
    "delicate",
    "delinquo",
    "deludo",
    "demens",
    "demergo",
    "demitto",
    "demo",
    "demonstro",
    "demoror",
    "demulceo",
    "demum",
    "denego",
    "denique",
    "dens",
    "denuncio",
    "denuo",
    "deorsum",
    "depereo",
    "depono",
    "depopulo",
    "deporto",
    "depraedor",
    "deprecator",
    "deprimo",
    "depromo",
    "depulso",
    "deputo",
    "derelinquo",
    "derideo",
    "deripio",
    "desidero",
    "desino",
    "desipio",
    "desolo",
    "desparatus",
    "despecto",
    "despirmatio",
    "infit",
    "inflammatio",
    "paens",
    "patior",
    "patria",
    "patrocinor",
    "patruus",
    "pauci",
    "paulatim",
    "pauper",
    "pax",
    "peccatus",
    "pecco",
    "pecto",
    "pectus",
    "pecunia",
    "pecus",
    "peior",
    "pel",
    "ocer",
    "socius",
    "sodalitas",
    "sol",
    "soleo",
    "solio",
    "solitudo",
    "solium",
    "sollers",
    "sollicito",
    "solum",
    "solus",
    "solutio",
    "solvo",
    "somniculosus",
    "somnus",
    "sonitus",
    "sono",
    "sophismata",
    "sopor",
    "sordeo",
    "sortitus",
    "spargo",
    "speciosus",
    "spectaculum",
    "speculum",
    "sperno",
    "spero",
    "spes",
    "spiculum",
    "spiritus",
    "spoliatio",
    "sponte",
    "stabilis",
    "statim",
    "statua",
    "stella",
    "stillicidium",
    "stipes",
    "stips",
    "sto",
    "strenuus",
    "strues",
    "studio",
    "stultus",
    "suadeo",
    "suasoria",
    "sub",
    "subito",
    "subiungo",
    "sublime",
    "subnecto",
    "subseco",
    "substantia",
    "subvenio",
    "succedo",
    "succurro",
    "sufficio",
    "suffoco",
    "suffragium",
    "suggero",
    "sui",
    "sulum",
    "sum",
    "summa",
    "summisse",
    "summopere",
    "sumo",
    "sumptus",
    "supellex",
    "super",
    "suppellex",
    "supplanto",
    "suppono",
    "supra",
    "surculus",
    "surgo",
    "sursum",
    "suscipio",
    "suspendo",
    "sustineo",
    "suus",
    "synagoga",
    "tabella",
    "tabernus",
    "tabesco",
    "tabgo",
    "tabula",
    "taceo",
    "tactus",
    "taedium",
    "talio",
    "talis",
    "talus",
    "tam",
    "tamdiu",
    "tamen",
    "tametsi",
    "tamisium",
    "tamquam",
    "tandem",
    "tantillus",
    "tantum",
    "tardus",
    "tego",
    "temeritas",
    "temperantia",
    "templum",
    "temptatio",
    "tempus",
    "tenax",
    "tendo",
    "teneo",
    "tener",
    "tenuis",
    "tenus",
    "tepesco",
    "tepidus",
    "ter",
    "terebro",
    "teres",
    "terga",
    "tergeo",
    "tergiversatio",
    "tergo",
    "tergum",
    "termes",
    "terminatio",
    "tero",
    "terra",
    "terreo",
    "territo",
    "terror",
    "tersus",
    "tertius",
    "testimonium",
    "texo",
    "textilis",
    "textor",
    "textus",
    "thalassinus",
    "theatrum",
    "theca",
    "thema",
    "theologus",
    "thermae",
    "thesaurus",
    "thesis",
    "thorax",
    "thymbra",
    "thymum",
    "tibi",
    "timidus",
    "timor",
    "titulus",
    "tolero",
    "tollo",
    "tondeo",
    "tonsor",
    "torqueo",
    "torrens",
    "tot",
    "totidem",
    "toties",
    "totus",
    "tracto",
    "trado",
    "traho",
    "trans",
    "tredecim",
    "tremo",
    "trepide",
    "tres",
    "tribuo",
    "tricesimus",
    "triduana",
    "triginta",
    "tripudio",
    "tristis",
    "triumphus",
    "trucido",
    "truculenter",
    "tubineus",
    "tui",
    "tum",
    "tumultus",
    "tunc",
    "turba",
    "turbo",
    "turpe",
    "turpis",
    "tutamen",
    "tutis",
    "tyrannus",
    "uberrime",
    "ubi",
    "ulciscor",
    "ullus",
    "ulterius",
    "ultio",
    "ultra",
    "umbra",
    "umerus",
    "umquam",
    "una",
    "unde",
    "undique",
    "universe",
    "unus",
    "urbanus",
    "urbs",
    "uredo",
    "usitas",
    "usque",
    "ustilo",
    "ustulo",
    "usus",
    "uter",
    "uterque",
    "utilis",
    "utique",
    "utor",
    "utpote",
    "utrimque",
    "utroque",
    "utrum",
    "uxor",
    "vaco",
    "vacuus",
    "vado",
    "vae",
    "valde",
    "valens",
    "valeo",
    "valetudo",
    "validus",
    "vallum",
    "vapulus",
    "varietas",
    "varius",
    "vehemens",
    "vel",
    "velociter",
    "velum",
    "velut",
    "venia",
    "venio",
    "ventito",
    "ventosus",
    "ventus",
    "venustas",
    "ver",
    "verbera",
    "verbum",
    "vere",
    "verecundia",
    "vereor",
    "vergo",
    "veritas",
    "vero",
    "versus",
    "verto",
    "verumtamen",
    "verus",
    "vesco",
    "vesica",
    "vesper",
    "vespillo",
    "vester",
    "vestigium",
    "vestrum",
    "vetus",
    "via",
    "vicinus",
    "vicissitudo",
    "victoria",
    "victus",
    "videlicet",
    "video",
    "viduata",
    "viduo",
    "vigilo",
    "vigor",
    "vilicus",
    "vilis",
    "vilitas",
    "villa",
    "vinco",
    "vinculum",
    "vindico",
    "vinitor",
    "vinum",
    "vir",
    "virga",
    "virgo",
    "viridis",
    "viriliter",
    "virtus",
    "vis",
    "viscus",
    "vita",
    "vitiosus",
    "vitium",
    "vito",
    "vivo",
    "vix",
    "vobis",
    "vociferor",
    "voco",
    "volaticus",
    "volo",
    "volubilis",
    "voluntarius",
    "volup",
    "volutabrum",
    "volva",
    "vomer",
    "vomica",
    "vomito",
    "vorago",
    "vorax",
    "voro",
    "vos",
    "votum",
    "voveo",
    "vox",
    "vulariter",
    "vulgaris",
    "vulgivagus",
    "vulgo",
    "vulgus",
    "vulnero",
    "vulnus",
    "vulpes",
    "vulticulus",
    "vultuosus",
    "xiphias"
];

},{}],"lWIew":[function(require,module,exports) {
var name = {
};
module['exports'] = name;
name.male_first_name = require("./male_first_name");
name.female_first_name = require("./female_first_name");
name.first_name = require("./first_name");
name.last_name = require("./last_name");
name.binary_gender = require("./binary_gender");
name.gender = require("./gender");
name.prefix = require("./prefix");
name.suffix = require("./suffix");
name.title = require("./title");
name.name = require("./name");

},{"./male_first_name":"50hwv","./female_first_name":"e260Y","./first_name":"jH0Oq","./last_name":"jpgzL","./binary_gender":"gV0e7","./gender":"15wwc","./prefix":"NsZN4","./suffix":"6rzXL","./title":"6Dwrj","./name":"7RNdS"}],"50hwv":[function(require,module,exports) {
module["exports"] = [
    "James",
    "John",
    "Robert",
    "Michael",
    "William",
    "David",
    "Richard",
    "Charles",
    "Joseph",
    "Thomas",
    "Christopher",
    "Daniel",
    "Paul",
    "Mark",
    "Donald",
    "George",
    "Kenneth",
    "Steven",
    "Edward",
    "Brian",
    "Ronald",
    "Anthony",
    "Kevin",
    "Jason",
    "Matthew",
    "Gary",
    "Timothy",
    "Jose",
    "Larry",
    "Jeffrey",
    "Frank",
    "Scott",
    "Eric",
    "Stephen",
    "Andrew",
    "Raymond",
    "Gregory",
    "Joshua",
    "Jerry",
    "Dennis",
    "Walter",
    "Patrick",
    "Peter",
    "Harold",
    "Douglas",
    "Henry",
    "Carl",
    "Arthur",
    "Ryan",
    "Roger",
    "Joe",
    "Juan",
    "Jack",
    "Albert",
    "Jonathan",
    "Justin",
    "Terry",
    "Gerald",
    "Keith",
    "Samuel",
    "Willie",
    "Ralph",
    "Lawrence",
    "Nicholas",
    "Roy",
    "Benjamin",
    "Bruce",
    "Brandon",
    "Adam",
    "Harry",
    "Fred",
    "Wayne",
    "Billy",
    "Steve",
    "Louis",
    "Jeremy",
    "Aaron",
    "Randy",
    "Howard",
    "Eugene",
    "Carlos",
    "Russell",
    "Bobby",
    "Victor",
    "Martin",
    "Ernest",
    "Phillip",
    "Todd",
    "Jesse",
    "Craig",
    "Alan",
    "Shawn",
    "Clarence",
    "Sean",
    "Philip",
    "Chris",
    "Johnny",
    "Earl",
    "Jimmy",
    "Antonio",
    "Danny",
    "Bryan",
    "Tony",
    "Luis",
    "Mike",
    "Stanley",
    "Leonard",
    "Nathan",
    "Dale",
    "Manuel",
    "Rodney",
    "Curtis",
    "Norman",
    "Allen",
    "Marvin",
    "Vincent",
    "Glenn",
    "Jeffery",
    "Travis",
    "Jeff",
    "Chad",
    "Jacob",
    "Lee",
    "Melvin",
    "Alfred",
    "Kyle",
    "Francis",
    "Bradley",
    "Jesus",
    "Herbert",
    "Frederick",
    "Ray",
    "Joel",
    "Edwin",
    "Don",
    "Eddie",
    "Ricky",
    "Troy",
    "Randall",
    "Barry",
    "Alexander",
    "Bernard",
    "Mario",
    "Leroy",
    "Francisco",
    "Marcus",
    "Micheal",
    "Theodore",
    "Clifford",
    "Miguel",
    "Oscar",
    "Jay",
    "Jim",
    "Tom",
    "Calvin",
    "Alex",
    "Jon",
    "Ronnie",
    "Bill",
    "Lloyd",
    "Tommy",
    "Leon",
    "Derek",
    "Warren",
    "Darrell",
    "Jerome",
    "Floyd",
    "Leo",
    "Alvin",
    "Tim",
    "Wesley",
    "Gordon",
    "Dean",
    "Greg",
    "Jorge",
    "Dustin",
    "Pedro",
    "Derrick",
    "Dan",
    "Lewis",
    "Zachary",
    "Corey",
    "Herman",
    "Maurice",
    "Vernon",
    "Roberto",
    "Clyde",
    "Glen",
    "Hector",
    "Shane",
    "Ricardo",
    "Sam",
    "Rick",
    "Lester",
    "Brent",
    "Ramon",
    "Charlie",
    "Tyler",
    "Gilbert",
    "Gene",
    "Marc",
    "Reginald",
    "Ruben",
    "Brett",
    "Angel",
    "Nathaniel",
    "Rafael",
    "Leslie",
    "Edgar",
    "Milton",
    "Raul",
    "Ben",
    "Chester",
    "Cecil",
    "Duane",
    "Franklin",
    "Andre",
    "Elmer",
    "Brad",
    "Gabriel",
    "Ron",
    "Mitchell",
    "Roland",
    "Arnold",
    "Harvey",
    "Jared",
    "Adrian",
    "Karl",
    "Cory",
    "Claude",
    "Erik",
    "Darryl",
    "Jamie",
    "Neil",
    "Jessie",
    "Christian",
    "Javier",
    "Fernando",
    "Clinton",
    "Ted",
    "Mathew",
    "Tyrone",
    "Darren",
    "Lonnie",
    "Lance",
    "Cody",
    "Julio",
    "Kelly",
    "Kurt",
    "Allan",
    "Nelson",
    "Guy",
    "Clayton",
    "Hugh",
    "Max",
    "Dwayne",
    "Dwight",
    "Armando",
    "Felix",
    "Jimmie",
    "Everett",
    "Jordan",
    "Ian",
    "Wallace",
    "Ken",
    "Bob",
    "Jaime",
    "Casey",
    "Alfredo",
    "Alberto",
    "Dave",
    "Ivan",
    "Johnnie",
    "Sidney",
    "Byron",
    "Julian",
    "Isaac",
    "Morris",
    "Clifton",
    "Willard",
    "Daryl",
    "Ross",
    "Virgil",
    "Andy",
    "Marshall",
    "Salvador",
    "Perry",
    "Kirk",
    "Sergio",
    "Marion",
    "Tracy",
    "Seth",
    "Kent",
    "Terrance",
    "Rene",
    "Eduardo",
    "Terrence",
    "Enrique",
    "Freddie",
    "Wade",
    "Austin",
    "Stuart",
    "Fredrick",
    "Arturo",
    "Alejandro",
    "Jackie",
    "Joey",
    "Nick",
    "Luther",
    "Wendell",
    "Jeremiah",
    "Evan",
    "Julius",
    "Dana",
    "Donnie",
    "Otis",
    "Shannon",
    "Trevor",
    "Oliver",
    "Luke",
    "Homer",
    "Gerard",
    "Doug",
    "Kenny",
    "Hubert",
    "Angelo",
    "Shaun",
    "Lyle",
    "Matt",
    "Lynn",
    "Alfonso",
    "Orlando",
    "Rex",
    "Carlton",
    "Ernesto",
    "Cameron",
    "Neal",
    "Pablo",
    "Lorenzo",
    "Omar",
    "Wilbur",
    "Blake",
    "Grant",
    "Horace",
    "Roderick",
    "Kerry",
    "Abraham",
    "Willis",
    "Rickey",
    "Jean",
    "Ira",
    "Andres",
    "Cesar",
    "Johnathan",
    "Malcolm",
    "Rudolph",
    "Damon",
    "Kelvin",
    "Rudy",
    "Preston",
    "Alton",
    "Archie",
    "Marco",
    "Wm",
    "Pete",
    "Randolph",
    "Garry",
    "Geoffrey",
    "Jonathon",
    "Felipe",
    "Bennie",
    "Gerardo",
    "Ed",
    "Dominic",
    "Robin",
    "Loren",
    "Delbert",
    "Colin",
    "Guillermo",
    "Earnest",
    "Lucas",
    "Benny",
    "Noel",
    "Spencer",
    "Rodolfo",
    "Myron",
    "Edmund",
    "Garrett",
    "Salvatore",
    "Cedric",
    "Lowell",
    "Gregg",
    "Sherman",
    "Wilson",
    "Devin",
    "Sylvester",
    "Kim",
    "Roosevelt",
    "Israel",
    "Jermaine",
    "Forrest",
    "Wilbert",
    "Leland",
    "Simon",
    "Guadalupe",
    "Clark",
    "Irving",
    "Carroll",
    "Bryant",
    "Owen",
    "Rufus",
    "Woodrow",
    "Sammy",
    "Kristopher",
    "Mack",
    "Levi",
    "Marcos",
    "Gustavo",
    "Jake",
    "Lionel",
    "Marty",
    "Taylor",
    "Ellis",
    "Dallas",
    "Gilberto",
    "Clint",
    "Nicolas",
    "Laurence",
    "Ismael",
    "Orville",
    "Drew",
    "Jody",
    "Ervin",
    "Dewey",
    "Al",
    "Wilfred",
    "Josh",
    "Hugo",
    "Ignacio",
    "Caleb",
    "Tomas",
    "Sheldon",
    "Erick",
    "Frankie",
    "Stewart",
    "Doyle",
    "Darrel",
    "Rogelio",
    "Terence",
    "Santiago",
    "Alonzo",
    "Elias",
    "Bert",
    "Elbert",
    "Ramiro",
    "Conrad",
    "Pat",
    "Noah",
    "Grady",
    "Phil",
    "Cornelius",
    "Lamar",
    "Rolando",
    "Clay",
    "Percy",
    "Dexter",
    "Bradford",
    "Merle",
    "Darin",
    "Amos",
    "Terrell",
    "Moses",
    "Irvin",
    "Saul",
    "Roman",
    "Darnell",
    "Randal",
    "Tommie",
    "Timmy",
    "Darrin",
    "Winston",
    "Brendan",
    "Toby",
    "Van",
    "Abel",
    "Dominick",
    "Boyd",
    "Courtney",
    "Jan",
    "Emilio",
    "Elijah",
    "Cary",
    "Domingo",
    "Santos",
    "Aubrey",
    "Emmett",
    "Marlon",
    "Emanuel",
    "Jerald",
    "Edmond"
];

},{}],"e260Y":[function(require,module,exports) {
module["exports"] = [
    "Mary",
    "Patricia",
    "Linda",
    "Barbara",
    "Elizabeth",
    "Jennifer",
    "Maria",
    "Susan",
    "Margaret",
    "Dorothy",
    "Lisa",
    "Nancy",
    "Karen",
    "Betty",
    "Helen",
    "Sandra",
    "Donna",
    "Carol",
    "Ruth",
    "Sharon",
    "Michelle",
    "Laura",
    "Sarah",
    "Kimberly",
    "Deborah",
    "Jessica",
    "Shirley",
    "Cynthia",
    "Angela",
    "Melissa",
    "Brenda",
    "Amy",
    "Anna",
    "Rebecca",
    "Virginia",
    "Kathleen",
    "Pamela",
    "Martha",
    "Debra",
    "Amanda",
    "Stephanie",
    "Carolyn",
    "Christine",
    "Marie",
    "Janet",
    "Catherine",
    "Frances",
    "Ann",
    "Joyce",
    "Diane",
    "Alice",
    "Julie",
    "Heather",
    "Teresa",
    "Doris",
    "Gloria",
    "Evelyn",
    "Jean",
    "Cheryl",
    "Mildred",
    "Katherine",
    "Joan",
    "Ashley",
    "Judith",
    "Rose",
    "Janice",
    "Kelly",
    "Nicole",
    "Judy",
    "Christina",
    "Kathy",
    "Theresa",
    "Beverly",
    "Denise",
    "Tammy",
    "Irene",
    "Jane",
    "Lori",
    "Rachel",
    "Marilyn",
    "Andrea",
    "Kathryn",
    "Louise",
    "Sara",
    "Anne",
    "Jacqueline",
    "Wanda",
    "Bonnie",
    "Julia",
    "Ruby",
    "Lois",
    "Tina",
    "Phyllis",
    "Norma",
    "Paula",
    "Diana",
    "Annie",
    "Lillian",
    "Emily",
    "Robin",
    "Peggy",
    "Crystal",
    "Gladys",
    "Rita",
    "Dawn",
    "Connie",
    "Florence",
    "Tracy",
    "Edna",
    "Tiffany",
    "Carmen",
    "Rosa",
    "Cindy",
    "Grace",
    "Wendy",
    "Victoria",
    "Edith",
    "Kim",
    "Sherry",
    "Sylvia",
    "Josephine",
    "Thelma",
    "Shannon",
    "Sheila",
    "Ethel",
    "Ellen",
    "Elaine",
    "Marjorie",
    "Carrie",
    "Charlotte",
    "Monica",
    "Esther",
    "Pauline",
    "Emma",
    "Juanita",
    "Anita",
    "Rhonda",
    "Hazel",
    "Amber",
    "Eva",
    "Debbie",
    "April",
    "Leslie",
    "Clara",
    "Lucille",
    "Jamie",
    "Joanne",
    "Eleanor",
    "Valerie",
    "Danielle",
    "Megan",
    "Alicia",
    "Suzanne",
    "Michele",
    "Gail",
    "Bertha",
    "Darlene",
    "Veronica",
    "Jill",
    "Erin",
    "Geraldine",
    "Lauren",
    "Cathy",
    "Joann",
    "Lorraine",
    "Lynn",
    "Sally",
    "Regina",
    "Erica",
    "Beatrice",
    "Dolores",
    "Bernice",
    "Audrey",
    "Yvonne",
    "Annette",
    "June",
    "Samantha",
    "Marion",
    "Dana",
    "Stacy",
    "Ana",
    "Renee",
    "Ida",
    "Vivian",
    "Roberta",
    "Holly",
    "Brittany",
    "Melanie",
    "Loretta",
    "Yolanda",
    "Jeanette",
    "Laurie",
    "Katie",
    "Kristen",
    "Vanessa",
    "Alma",
    "Sue",
    "Elsie",
    "Beth",
    "Jeanne",
    "Vicki",
    "Carla",
    "Tara",
    "Rosemary",
    "Eileen",
    "Terri",
    "Gertrude",
    "Lucy",
    "Tonya",
    "Ella",
    "Stacey",
    "Wilma",
    "Gina",
    "Kristin",
    "Jessie",
    "Natalie",
    "Agnes",
    "Vera",
    "Willie",
    "Charlene",
    "Bessie",
    "Delores",
    "Melinda",
    "Pearl",
    "Arlene",
    "Maureen",
    "Colleen",
    "Allison",
    "Tamara",
    "Joy",
    "Georgia",
    "Constance",
    "Lillie",
    "Claudia",
    "Jackie",
    "Marcia",
    "Tanya",
    "Nellie",
    "Minnie",
    "Marlene",
    "Heidi",
    "Glenda",
    "Lydia",
    "Viola",
    "Courtney",
    "Marian",
    "Stella",
    "Caroline",
    "Dora",
    "Jo",
    "Vickie",
    "Mattie",
    "Terry",
    "Maxine",
    "Irma",
    "Mabel",
    "Marsha",
    "Myrtle",
    "Lena",
    "Christy",
    "Deanna",
    "Patsy",
    "Hilda",
    "Gwendolyn",
    "Jennie",
    "Nora",
    "Margie",
    "Nina",
    "Cassandra",
    "Leah",
    "Penny",
    "Kay",
    "Priscilla",
    "Naomi",
    "Carole",
    "Brandy",
    "Olga",
    "Billie",
    "Dianne",
    "Tracey",
    "Leona",
    "Jenny",
    "Felicia",
    "Sonia",
    "Miriam",
    "Velma",
    "Becky",
    "Bobbie",
    "Violet",
    "Kristina",
    "Toni",
    "Misty",
    "Mae",
    "Shelly",
    "Daisy",
    "Ramona",
    "Sherri",
    "Erika",
    "Katrina",
    "Claire",
    "Lindsey",
    "Lindsay",
    "Geneva",
    "Guadalupe",
    "Belinda",
    "Margarita",
    "Sheryl",
    "Cora",
    "Faye",
    "Ada",
    "Natasha",
    "Sabrina",
    "Isabel",
    "Marguerite",
    "Hattie",
    "Harriet",
    "Molly",
    "Cecilia",
    "Kristi",
    "Brandi",
    "Blanche",
    "Sandy",
    "Rosie",
    "Joanna",
    "Iris",
    "Eunice",
    "Angie",
    "Inez",
    "Lynda",
    "Madeline",
    "Amelia",
    "Alberta",
    "Genevieve",
    "Monique",
    "Jodi",
    "Janie",
    "Maggie",
    "Kayla",
    "Sonya",
    "Jan",
    "Lee",
    "Kristine",
    "Candace",
    "Fannie",
    "Maryann",
    "Opal",
    "Alison",
    "Yvette",
    "Melody",
    "Luz",
    "Susie",
    "Olivia",
    "Flora",
    "Shelley",
    "Kristy",
    "Mamie",
    "Lula",
    "Lola",
    "Verna",
    "Beulah",
    "Antoinette",
    "Candice",
    "Juana",
    "Jeannette",
    "Pam",
    "Kelli",
    "Hannah",
    "Whitney",
    "Bridget",
    "Karla",
    "Celia",
    "Latoya",
    "Patty",
    "Shelia",
    "Gayle",
    "Della",
    "Vicky",
    "Lynne",
    "Sheri",
    "Marianne",
    "Kara",
    "Jacquelyn",
    "Erma",
    "Blanca",
    "Myra",
    "Leticia",
    "Pat",
    "Krista",
    "Roxanne",
    "Angelica",
    "Johnnie",
    "Robyn",
    "Francis",
    "Adrienne",
    "Rosalie",
    "Alexandra",
    "Brooke",
    "Bethany",
    "Sadie",
    "Bernadette",
    "Traci",
    "Jody",
    "Kendra",
    "Jasmine",
    "Nichole",
    "Rachael",
    "Chelsea",
    "Mable",
    "Ernestine",
    "Muriel",
    "Marcella",
    "Elena",
    "Krystal",
    "Angelina",
    "Nadine",
    "Kari",
    "Estelle",
    "Dianna",
    "Paulette",
    "Lora",
    "Mona",
    "Doreen",
    "Rosemarie",
    "Angel",
    "Desiree",
    "Antonia",
    "Hope",
    "Ginger",
    "Janis",
    "Betsy",
    "Christie",
    "Freda",
    "Mercedes",
    "Meredith",
    "Lynette",
    "Teri",
    "Cristina",
    "Eula",
    "Leigh",
    "Meghan",
    "Sophia",
    "Eloise",
    "Rochelle",
    "Gretchen",
    "Cecelia",
    "Raquel",
    "Henrietta",
    "Alyssa",
    "Jana",
    "Kelley",
    "Gwen",
    "Kerry",
    "Jenna",
    "Tricia",
    "Laverne",
    "Olive",
    "Alexis",
    "Tasha",
    "Silvia",
    "Elvira",
    "Casey",
    "Delia",
    "Sophie",
    "Kate",
    "Patti",
    "Lorena",
    "Kellie",
    "Sonja",
    "Lila",
    "Lana",
    "Darla",
    "May",
    "Mindy",
    "Essie",
    "Mandy",
    "Lorene",
    "Elsa",
    "Josefina",
    "Jeannie",
    "Miranda",
    "Dixie",
    "Lucia",
    "Marta",
    "Faith",
    "Lela",
    "Johanna",
    "Shari",
    "Camille",
    "Tami",
    "Shawna",
    "Elisa",
    "Ebony",
    "Melba",
    "Ora",
    "Nettie",
    "Tabitha",
    "Ollie",
    "Jaime",
    "Winifred",
    "Kristie"
];

},{}],"jH0Oq":[function(require,module,exports) {
module["exports"] = [
    "Aaliyah",
    "Aaron",
    "Abagail",
    "Abbey",
    "Abbie",
    "Abbigail",
    "Abby",
    "Abdiel",
    "Abdul",
    "Abdullah",
    "Abe",
    "Abel",
    "Abelardo",
    "Abigail",
    "Abigale",
    "Abigayle",
    "Abner",
    "Abraham",
    "Ada",
    "Adah",
    "Adalberto",
    "Adaline",
    "Adam",
    "Adan",
    "Addie",
    "Addison",
    "Adela",
    "Adelbert",
    "Adele",
    "Adelia",
    "Adeline",
    "Adell",
    "Adella",
    "Adelle",
    "Aditya",
    "Adolf",
    "Adolfo",
    "Adolph",
    "Adolphus",
    "Adonis",
    "Adrain",
    "Adrian",
    "Adriana",
    "Adrianna",
    "Adriel",
    "Adrien",
    "Adrienne",
    "Afton",
    "Aglae",
    "Agnes",
    "Agustin",
    "Agustina",
    "Ahmad",
    "Ahmed",
    "Aida",
    "Aidan",
    "Aiden",
    "Aileen",
    "Aimee",
    "Aisha",
    "Aiyana",
    "Akeem",
    "Al",
    "Alaina",
    "Alan",
    "Alana",
    "Alanis",
    "Alanna",
    "Alayna",
    "Alba",
    "Albert",
    "Alberta",
    "Albertha",
    "Alberto",
    "Albin",
    "Albina",
    "Alda",
    "Alden",
    "Alec",
    "Aleen",
    "Alejandra",
    "Alejandrin",
    "Alek",
    "Alena",
    "Alene",
    "Alessandra",
    "Alessandro",
    "Alessia",
    "Aletha",
    "Alex",
    "Alexa",
    "Alexander",
    "Alexandra",
    "Alexandre",
    "Alexandrea",
    "Alexandria",
    "Alexandrine",
    "Alexandro",
    "Alexane",
    "Alexanne",
    "Alexie",
    "Alexis",
    "Alexys",
    "Alexzander",
    "Alf",
    "Alfonso",
    "Alfonzo",
    "Alford",
    "Alfred",
    "Alfreda",
    "Alfredo",
    "Ali",
    "Alia",
    "Alice",
    "Alicia",
    "Alisa",
    "Alisha",
    "Alison",
    "Alivia",
    "Aliya",
    "Aliyah",
    "Aliza",
    "Alize",
    "Allan",
    "Allen",
    "Allene",
    "Allie",
    "Allison",
    "Ally",
    "Alphonso",
    "Alta",
    "Althea",
    "Alva",
    "Alvah",
    "Alvena",
    "Alvera",
    "Alverta",
    "Alvina",
    "Alvis",
    "Alyce",
    "Alycia",
    "Alysa",
    "Alysha",
    "Alyson",
    "Alysson",
    "Amalia",
    "Amanda",
    "Amani",
    "Amara",
    "Amari",
    "Amaya",
    "Amber",
    "Ambrose",
    "Amelia",
    "Amelie",
    "Amely",
    "America",
    "Americo",
    "Amie",
    "Amina",
    "Amir",
    "Amira",
    "Amiya",
    "Amos",
    "Amparo",
    "Amy",
    "Amya",
    "Ana",
    "Anabel",
    "Anabelle",
    "Anahi",
    "Anais",
    "Anastacio",
    "Anastasia",
    "Anderson",
    "Andre",
    "Andreane",
    "Andreanne",
    "Andres",
    "Andrew",
    "Andy",
    "Angel",
    "Angela",
    "Angelica",
    "Angelina",
    "Angeline",
    "Angelita",
    "Angelo",
    "Angie",
    "Angus",
    "Anibal",
    "Anika",
    "Anissa",
    "Anita",
    "Aniya",
    "Aniyah",
    "Anjali",
    "Anna",
    "Annabel",
    "Annabell",
    "Annabelle",
    "Annalise",
    "Annamae",
    "Annamarie",
    "Anne",
    "Annetta",
    "Annette",
    "Annie",
    "Ansel",
    "Ansley",
    "Anthony",
    "Antoinette",
    "Antone",
    "Antonetta",
    "Antonette",
    "Antonia",
    "Antonietta",
    "Antonina",
    "Antonio",
    "Antwan",
    "Antwon",
    "Anya",
    "April",
    "Ara",
    "Araceli",
    "Aracely",
    "Arch",
    "Archibald",
    "Ardella",
    "Arden",
    "Ardith",
    "Arely",
    "Ari",
    "Ariane",
    "Arianna",
    "Aric",
    "Ariel",
    "Arielle",
    "Arjun",
    "Arlene",
    "Arlie",
    "Arlo",
    "Armand",
    "Armando",
    "Armani",
    "Arnaldo",
    "Arne",
    "Arno",
    "Arnold",
    "Arnoldo",
    "Arnulfo",
    "Aron",
    "Art",
    "Arthur",
    "Arturo",
    "Arvel",
    "Arvid",
    "Arvilla",
    "Aryanna",
    "Asa",
    "Asha",
    "Ashlee",
    "Ashleigh",
    "Ashley",
    "Ashly",
    "Ashlynn",
    "Ashton",
    "Ashtyn",
    "Asia",
    "Assunta",
    "Astrid",
    "Athena",
    "Aubree",
    "Aubrey",
    "Audie",
    "Audra",
    "Audreanne",
    "Audrey",
    "August",
    "Augusta",
    "Augustine",
    "Augustus",
    "Aurelia",
    "Aurelie",
    "Aurelio",
    "Aurore",
    "Austen",
    "Austin",
    "Austyn",
    "Autumn",
    "Ava",
    "Avery",
    "Avis",
    "Axel",
    "Ayana",
    "Ayden",
    "Ayla",
    "Aylin",
    "Baby",
    "Bailee",
    "Bailey",
    "Barbara",
    "Barney",
    "Baron",
    "Barrett",
    "Barry",
    "Bart",
    "Bartholome",
    "Barton",
    "Baylee",
    "Beatrice",
    "Beau",
    "Beaulah",
    "Bell",
    "Bella",
    "Belle",
    "Ben",
    "Benedict",
    "Benjamin",
    "Bennett",
    "Bennie",
    "Benny",
    "Benton",
    "Berenice",
    "Bernadette",
    "Bernadine",
    "Bernard",
    "Bernardo",
    "Berneice",
    "Bernhard",
    "Bernice",
    "Bernie",
    "Berniece",
    "Bernita",
    "Berry",
    "Bert",
    "Berta",
    "Bertha",
    "Bertram",
    "Bertrand",
    "Beryl",
    "Bessie",
    "Beth",
    "Bethany",
    "Bethel",
    "Betsy",
    "Bette",
    "Bettie",
    "Betty",
    "Bettye",
    "Beulah",
    "Beverly",
    "Bianka",
    "Bill",
    "Billie",
    "Billy",
    "Birdie",
    "Blair",
    "Blaise",
    "Blake",
    "Blanca",
    "Blanche",
    "Blaze",
    "Bo",
    "Bobbie",
    "Bobby",
    "Bonita",
    "Bonnie",
    "Boris",
    "Boyd",
    "Brad",
    "Braden",
    "Bradford",
    "Bradley",
    "Bradly",
    "Brady",
    "Braeden",
    "Brain",
    "Brandi",
    "Brando",
    "Brandon",
    "Brandt",
    "Brandy",
    "Brandyn",
    "Brannon",
    "Branson",
    "Brant",
    "Braulio",
    "Braxton",
    "Brayan",
    "Breana",
    "Breanna",
    "Breanne",
    "Brenda",
    "Brendan",
    "Brenden",
    "Brendon",
    "Brenna",
    "Brennan",
    "Brennon",
    "Brent",
    "Bret",
    "Brett",
    "Bria",
    "Brian",
    "Briana",
    "Brianne",
    "Brice",
    "Bridget",
    "Bridgette",
    "Bridie",
    "Brielle",
    "Brigitte",
    "Brionna",
    "Brisa",
    "Britney",
    "Brittany",
    "Brock",
    "Broderick",
    "Brody",
    "Brook",
    "Brooke",
    "Brooklyn",
    "Brooks",
    "Brown",
    "Bruce",
    "Bryana",
    "Bryce",
    "Brycen",
    "Bryon",
    "Buck",
    "Bud",
    "Buddy",
    "Buford",
    "Bulah",
    "Burdette",
    "Burley",
    "Burnice",
    "Buster",
    "Cade",
    "Caden",
    "Caesar",
    "Caitlyn",
    "Cale",
    "Caleb",
    "Caleigh",
    "Cali",
    "Calista",
    "Callie",
    "Camden",
    "Cameron",
    "Camila",
    "Camilla",
    "Camille",
    "Camren",
    "Camron",
    "Camryn",
    "Camylle",
    "Candace",
    "Candelario",
    "Candice",
    "Candida",
    "Candido",
    "Cara",
    "Carey",
    "Carissa",
    "Carlee",
    "Carleton",
    "Carley",
    "Carli",
    "Carlie",
    "Carlo",
    "Carlos",
    "Carlotta",
    "Carmel",
    "Carmela",
    "Carmella",
    "Carmelo",
    "Carmen",
    "Carmine",
    "Carol",
    "Carolanne",
    "Carole",
    "Carolina",
    "Caroline",
    "Carolyn",
    "Carolyne",
    "Carrie",
    "Carroll",
    "Carson",
    "Carter",
    "Cary",
    "Casandra",
    "Casey",
    "Casimer",
    "Casimir",
    "Casper",
    "Cassandra",
    "Cassandre",
    "Cassidy",
    "Cassie",
    "Catalina",
    "Caterina",
    "Catharine",
    "Catherine",
    "Cathrine",
    "Cathryn",
    "Cathy",
    "Cayla",
    "Ceasar",
    "Cecelia",
    "Cecil",
    "Cecile",
    "Cecilia",
    "Cedrick",
    "Celestine",
    "Celestino",
    "Celia",
    "Celine",
    "Cesar",
    "Chad",
    "Chadd",
    "Chadrick",
    "Chaim",
    "Chance",
    "Chandler",
    "Chanel",
    "Chanelle",
    "Charity",
    "Charlene",
    "Charles",
    "Charley",
    "Charlie",
    "Charlotte",
    "Chase",
    "Chasity",
    "Chauncey",
    "Chaya",
    "Chaz",
    "Chelsea",
    "Chelsey",
    "Chelsie",
    "Chesley",
    "Chester",
    "Chet",
    "Cheyanne",
    "Cheyenne",
    "Chloe",
    "Chris",
    "Christ",
    "Christa",
    "Christelle",
    "Christian",
    "Christiana",
    "Christina",
    "Christine",
    "Christop",
    "Christophe",
    "Christopher",
    "Christy",
    "Chyna",
    "Ciara",
    "Cicero",
    "Cielo",
    "Cierra",
    "Cindy",
    "Citlalli",
    "Clair",
    "Claire",
    "Clara",
    "Clarabelle",
    "Clare",
    "Clarissa",
    "Clark",
    "Claud",
    "Claude",
    "Claudia",
    "Claudie",
    "Claudine",
    "Clay",
    "Clemens",
    "Clement",
    "Clementina",
    "Clementine",
    "Clemmie",
    "Cleo",
    "Cleora",
    "Cleta",
    "Cletus",
    "Cleve",
    "Cleveland",
    "Clifford",
    "Clifton",
    "Clint",
    "Clinton",
    "Clotilde",
    "Clovis",
    "Cloyd",
    "Clyde",
    "Coby",
    "Cody",
    "Colby",
    "Cole",
    "Coleman",
    "Colin",
    "Colleen",
    "Collin",
    "Colt",
    "Colten",
    "Colton",
    "Columbus",
    "Concepcion",
    "Conner",
    "Connie",
    "Connor",
    "Conor",
    "Conrad",
    "Constance",
    "Constantin",
    "Consuelo",
    "Cooper",
    "Cora",
    "Coralie",
    "Corbin",
    "Cordelia",
    "Cordell",
    "Cordia",
    "Cordie",
    "Corene",
    "Corine",
    "Cornelius",
    "Cornell",
    "Corrine",
    "Cortez",
    "Cortney",
    "Cory",
    "Coty",
    "Courtney",
    "Coy",
    "Craig",
    "Crawford",
    "Creola",
    "Cristal",
    "Cristian",
    "Cristina",
    "Cristobal",
    "Cristopher",
    "Cruz",
    "Crystal",
    "Crystel",
    "Cullen",
    "Curt",
    "Curtis",
    "Cydney",
    "Cynthia",
    "Cyril",
    "Cyrus",
    "Dagmar",
    "Dahlia",
    "Daija",
    "Daisha",
    "Daisy",
    "Dakota",
    "Dale",
    "Dallas",
    "Dallin",
    "Dalton",
    "Damaris",
    "Dameon",
    "Damian",
    "Damien",
    "Damion",
    "Damon",
    "Dan",
    "Dana",
    "Dandre",
    "Dane",
    "D'angelo",
    "Dangelo",
    "Danial",
    "Daniela",
    "Daniella",
    "Danielle",
    "Danika",
    "Dannie",
    "Danny",
    "Dante",
    "Danyka",
    "Daphne",
    "Daphnee",
    "Daphney",
    "Darby",
    "Daren",
    "Darian",
    "Dariana",
    "Darien",
    "Dario",
    "Darion",
    "Darius",
    "Darlene",
    "Daron",
    "Darrel",
    "Darrell",
    "Darren",
    "Darrick",
    "Darrin",
    "Darrion",
    "Darron",
    "Darryl",
    "Darwin",
    "Daryl",
    "Dashawn",
    "Dasia",
    "Dave",
    "David",
    "Davin",
    "Davion",
    "Davon",
    "Davonte",
    "Dawn",
    "Dawson",
    "Dax",
    "Dayana",
    "Dayna",
    "Dayne",
    "Dayton",
    "Dean",
    "Deangelo",
    "Deanna",
    "Deborah",
    "Declan",
    "Dedric",
    "Dedrick",
    "Dee",
    "Deion",
    "Deja",
    "Dejah",
    "Dejon",
    "Dejuan",
    "Delaney",
    "Delbert",
    "Delfina",
    "Delia",
    "Delilah",
    "Dell",
    "Della",
    "Delmer",
    "Delores",
    "Delpha",
    "Delphia",
    "Delphine",
    "Delta",
    "Demarco",
    "Demarcus",
    "Demario",
    "Demetris",
    "Demetrius",
    "Demond",
    "Dena",
    "Denis",
    "Dennis",
    "Deon",
    "Deondre",
    "Deontae",
    "Deonte",
    "Dereck",
    "Derek",
    "Derick",
    "Deron",
    "Derrick",
    "Deshaun",
    "Deshawn",
    "Desiree",
    "Desmond",
    "Dessie",
    "Destany",
    "Destin",
    "Destinee",
    "Destiney",
    "Destini",
    "Destiny",
    "Devan",
    "Devante",
    "Deven",
    "Devin",
    "Devon",
    "Devonte",
    "Devyn",
    "Dewayne",
    "Dewitt",
    "Dexter",
    "Diamond",
    "Diana",
    "Dianna",
    "Diego",
    "Dillan",
    "Dillon",
    "Dimitri",
    "Dina",
    "Dino",
    "Dion",
    "Dixie",
    "Dock",
    "Dolly",
    "Dolores",
    "Domenic",
    "Domenica",
    "Domenick",
    "Domenico",
    "Domingo",
    "Dominic",
    "Dominique",
    "Don",
    "Donald",
    "Donato",
    "Donavon",
    "Donna",
    "Donnell",
    "Donnie",
    "Donny",
    "Dora",
    "Dorcas",
    "Dorian",
    "Doris",
    "Dorothea",
    "Dorothy",
    "Dorris",
    "Dortha",
    "Dorthy",
    "Doug",
    "Douglas",
    "Dovie",
    "Doyle",
    "Drake",
    "Drew",
    "Duane",
    "Dudley",
    "Dulce",
    "Duncan",
    "Durward",
    "Dustin",
    "Dusty",
    "Dwight",
    "Dylan",
    "Earl",
    "Earlene",
    "Earline",
    "Earnest",
    "Earnestine",
    "Easter",
    "Easton",
    "Ebba",
    "Ebony",
    "Ed",
    "Eda",
    "Edd",
    "Eddie",
    "Eden",
    "Edgar",
    "Edgardo",
    "Edison",
    "Edmond",
    "Edmund",
    "Edna",
    "Eduardo",
    "Edward",
    "Edwardo",
    "Edwin",
    "Edwina",
    "Edyth",
    "Edythe",
    "Effie",
    "Efrain",
    "Efren",
    "Eileen",
    "Einar",
    "Eino",
    "Eladio",
    "Elaina",
    "Elbert",
    "Elda",
    "Eldon",
    "Eldora",
    "Eldred",
    "Eldridge",
    "Eleanora",
    "Eleanore",
    "Eleazar",
    "Electa",
    "Elena",
    "Elenor",
    "Elenora",
    "Eleonore",
    "Elfrieda",
    "Eli",
    "Elian",
    "Eliane",
    "Elias",
    "Eliezer",
    "Elijah",
    "Elinor",
    "Elinore",
    "Elisa",
    "Elisabeth",
    "Elise",
    "Eliseo",
    "Elisha",
    "Elissa",
    "Eliza",
    "Elizabeth",
    "Ella",
    "Ellen",
    "Ellie",
    "Elliot",
    "Elliott",
    "Ellis",
    "Ellsworth",
    "Elmer",
    "Elmira",
    "Elmo",
    "Elmore",
    "Elna",
    "Elnora",
    "Elody",
    "Eloisa",
    "Eloise",
    "Elouise",
    "Eloy",
    "Elroy",
    "Elsa",
    "Else",
    "Elsie",
    "Elta",
    "Elton",
    "Elva",
    "Elvera",
    "Elvie",
    "Elvis",
    "Elwin",
    "Elwyn",
    "Elyse",
    "Elyssa",
    "Elza",
    "Emanuel",
    "Emelia",
    "Emelie",
    "Emely",
    "Emerald",
    "Emerson",
    "Emery",
    "Emie",
    "Emil",
    "Emile",
    "Emilia",
    "Emiliano",
    "Emilie",
    "Emilio",
    "Emily",
    "Emma",
    "Emmalee",
    "Emmanuel",
    "Emmanuelle",
    "Emmet",
    "Emmett",
    "Emmie",
    "Emmitt",
    "Emmy",
    "Emory",
    "Ena",
    "Enid",
    "Enoch",
    "Enola",
    "Enos",
    "Enrico",
    "Enrique",
    "Ephraim",
    "Era",
    "Eriberto",
    "Eric",
    "Erica",
    "Erich",
    "Erick",
    "Ericka",
    "Erik",
    "Erika",
    "Erin",
    "Erling",
    "Erna",
    "Ernest",
    "Ernestina",
    "Ernestine",
    "Ernesto",
    "Ernie",
    "Ervin",
    "Erwin",
    "Eryn",
    "Esmeralda",
    "Esperanza",
    "Esta",
    "Esteban",
    "Estefania",
    "Estel",
    "Estell",
    "Estella",
    "Estelle",
    "Estevan",
    "Esther",
    "Estrella",
    "Etha",
    "Ethan",
    "Ethel",
    "Ethelyn",
    "Ethyl",
    "Ettie",
    "Eudora",
    "Eugene",
    "Eugenia",
    "Eula",
    "Eulah",
    "Eulalia",
    "Euna",
    "Eunice",
    "Eusebio",
    "Eva",
    "Evalyn",
    "Evan",
    "Evangeline",
    "Evans",
    "Eve",
    "Eveline",
    "Evelyn",
    "Everardo",
    "Everett",
    "Everette",
    "Evert",
    "Evie",
    "Ewald",
    "Ewell",
    "Ezekiel",
    "Ezequiel",
    "Ezra",
    "Fabian",
    "Fabiola",
    "Fae",
    "Fannie",
    "Fanny",
    "Fatima",
    "Faustino",
    "Fausto",
    "Favian",
    "Fay",
    "Faye",
    "Federico",
    "Felicia",
    "Felicita",
    "Felicity",
    "Felipa",
    "Felipe",
    "Felix",
    "Felton",
    "Fermin",
    "Fern",
    "Fernando",
    "Ferne",
    "Fidel",
    "Filiberto",
    "Filomena",
    "Finn",
    "Fiona",
    "Flavie",
    "Flavio",
    "Fleta",
    "Fletcher",
    "Flo",
    "Florence",
    "Florencio",
    "Florian",
    "Florida",
    "Florine",
    "Flossie",
    "Floy",
    "Floyd",
    "Ford",
    "Forest",
    "Forrest",
    "Foster",
    "Frances",
    "Francesca",
    "Francesco",
    "Francis",
    "Francisca",
    "Francisco",
    "Franco",
    "Frank",
    "Frankie",
    "Franz",
    "Fred",
    "Freda",
    "Freddie",
    "Freddy",
    "Frederic",
    "Frederick",
    "Frederik",
    "Frederique",
    "Fredrick",
    "Fredy",
    "Freeda",
    "Freeman",
    "Freida",
    "Frida",
    "Frieda",
    "Friedrich",
    "Fritz",
    "Furman",
    "Gabe",
    "Gabriel",
    "Gabriella",
    "Gabrielle",
    "Gaetano",
    "Gage",
    "Gail",
    "Gardner",
    "Garett",
    "Garfield",
    "Garland",
    "Garnet",
    "Garnett",
    "Garret",
    "Garrett",
    "Garrick",
    "Garrison",
    "Garry",
    "Garth",
    "Gaston",
    "Gavin",
    "Gay",
    "Gayle",
    "Gaylord",
    "Gene",
    "General",
    "Genesis",
    "Genevieve",
    "Gennaro",
    "Genoveva",
    "Geo",
    "Geoffrey",
    "George",
    "Georgette",
    "Georgiana",
    "Georgianna",
    "Geovanni",
    "Geovanny",
    "Geovany",
    "Gerald",
    "Geraldine",
    "Gerard",
    "Gerardo",
    "Gerda",
    "Gerhard",
    "Germaine",
    "German",
    "Gerry",
    "Gerson",
    "Gertrude",
    "Gia",
    "Gianni",
    "Gideon",
    "Gilbert",
    "Gilberto",
    "Gilda",
    "Giles",
    "Gillian",
    "Gina",
    "Gino",
    "Giovani",
    "Giovanna",
    "Giovanni",
    "Giovanny",
    "Gisselle",
    "Giuseppe",
    "Gladyce",
    "Gladys",
    "Glen",
    "Glenda",
    "Glenna",
    "Glennie",
    "Gloria",
    "Godfrey",
    "Golda",
    "Golden",
    "Gonzalo",
    "Gordon",
    "Grace",
    "Gracie",
    "Graciela",
    "Grady",
    "Graham",
    "Grant",
    "Granville",
    "Grayce",
    "Grayson",
    "Green",
    "Greg",
    "Gregg",
    "Gregoria",
    "Gregorio",
    "Gregory",
    "Greta",
    "Gretchen",
    "Greyson",
    "Griffin",
    "Grover",
    "Guadalupe",
    "Gudrun",
    "Guido",
    "Guillermo",
    "Guiseppe",
    "Gunnar",
    "Gunner",
    "Gus",
    "Gussie",
    "Gust",
    "Gustave",
    "Guy",
    "Gwen",
    "Gwendolyn",
    "Hadley",
    "Hailee",
    "Hailey",
    "Hailie",
    "Hal",
    "Haleigh",
    "Haley",
    "Halie",
    "Halle",
    "Hallie",
    "Hank",
    "Hanna",
    "Hannah",
    "Hans",
    "Hardy",
    "Harley",
    "Harmon",
    "Harmony",
    "Harold",
    "Harrison",
    "Harry",
    "Harvey",
    "Haskell",
    "Hassan",
    "Hassie",
    "Hattie",
    "Haven",
    "Hayden",
    "Haylee",
    "Hayley",
    "Haylie",
    "Hazel",
    "Hazle",
    "Heath",
    "Heather",
    "Heaven",
    "Heber",
    "Hector",
    "Heidi",
    "Helen",
    "Helena",
    "Helene",
    "Helga",
    "Hellen",
    "Helmer",
    "Heloise",
    "Henderson",
    "Henri",
    "Henriette",
    "Henry",
    "Herbert",
    "Herman",
    "Hermann",
    "Hermina",
    "Herminia",
    "Herminio",
    "Hershel",
    "Herta",
    "Hertha",
    "Hester",
    "Hettie",
    "Hilario",
    "Hilbert",
    "Hilda",
    "Hildegard",
    "Hillard",
    "Hillary",
    "Hilma",
    "Hilton",
    "Hipolito",
    "Hiram",
    "Hobart",
    "Holden",
    "Hollie",
    "Hollis",
    "Holly",
    "Hope",
    "Horace",
    "Horacio",
    "Hortense",
    "Hosea",
    "Houston",
    "Howard",
    "Howell",
    "Hoyt",
    "Hubert",
    "Hudson",
    "Hugh",
    "Hulda",
    "Humberto",
    "Hunter",
    "Hyman",
    "Ian",
    "Ibrahim",
    "Icie",
    "Ida",
    "Idell",
    "Idella",
    "Ignacio",
    "Ignatius",
    "Ike",
    "Ila",
    "Ilene",
    "Iliana",
    "Ima",
    "Imani",
    "Imelda",
    "Immanuel",
    "Imogene",
    "Ines",
    "Irma",
    "Irving",
    "Irwin",
    "Isaac",
    "Isabel",
    "Isabell",
    "Isabella",
    "Isabelle",
    "Isac",
    "Isadore",
    "Isai",
    "Isaiah",
    "Isaias",
    "Isidro",
    "Ismael",
    "Isobel",
    "Isom",
    "Israel",
    "Issac",
    "Itzel",
    "Iva",
    "Ivah",
    "Ivory",
    "Ivy",
    "Izabella",
    "Izaiah",
    "Jabari",
    "Jace",
    "Jacey",
    "Jacinthe",
    "Jacinto",
    "Jack",
    "Jackeline",
    "Jackie",
    "Jacklyn",
    "Jackson",
    "Jacky",
    "Jaclyn",
    "Jacquelyn",
    "Jacques",
    "Jacynthe",
    "Jada",
    "Jade",
    "Jaden",
    "Jadon",
    "Jadyn",
    "Jaeden",
    "Jaida",
    "Jaiden",
    "Jailyn",
    "Jaime",
    "Jairo",
    "Jakayla",
    "Jake",
    "Jakob",
    "Jaleel",
    "Jalen",
    "Jalon",
    "Jalyn",
    "Jamaal",
    "Jamal",
    "Jamar",
    "Jamarcus",
    "Jamel",
    "Jameson",
    "Jamey",
    "Jamie",
    "Jamil",
    "Jamir",
    "Jamison",
    "Jammie",
    "Jan",
    "Jana",
    "Janae",
    "Jane",
    "Janelle",
    "Janessa",
    "Janet",
    "Janice",
    "Janick",
    "Janie",
    "Janis",
    "Janiya",
    "Jannie",
    "Jany",
    "Jaquan",
    "Jaquelin",
    "Jaqueline",
    "Jared",
    "Jaren",
    "Jarod",
    "Jaron",
    "Jarred",
    "Jarrell",
    "Jarret",
    "Jarrett",
    "Jarrod",
    "Jarvis",
    "Jasen",
    "Jasmin",
    "Jason",
    "Jasper",
    "Jaunita",
    "Javier",
    "Javon",
    "Javonte",
    "Jay",
    "Jayce",
    "Jaycee",
    "Jayda",
    "Jayde",
    "Jayden",
    "Jaydon",
    "Jaylan",
    "Jaylen",
    "Jaylin",
    "Jaylon",
    "Jayme",
    "Jayne",
    "Jayson",
    "Jazlyn",
    "Jazmin",
    "Jazmyn",
    "Jazmyne",
    "Jean",
    "Jeanette",
    "Jeanie",
    "Jeanne",
    "Jed",
    "Jedediah",
    "Jedidiah",
    "Jeff",
    "Jefferey",
    "Jeffery",
    "Jeffrey",
    "Jeffry",
    "Jena",
    "Jenifer",
    "Jennie",
    "Jennifer",
    "Jennings",
    "Jennyfer",
    "Jensen",
    "Jerad",
    "Jerald",
    "Jeramie",
    "Jeramy",
    "Jerel",
    "Jeremie",
    "Jeremy",
    "Jermain",
    "Jermaine",
    "Jermey",
    "Jerod",
    "Jerome",
    "Jeromy",
    "Jerrell",
    "Jerrod",
    "Jerrold",
    "Jerry",
    "Jess",
    "Jesse",
    "Jessica",
    "Jessie",
    "Jessika",
    "Jessy",
    "Jessyca",
    "Jesus",
    "Jett",
    "Jettie",
    "Jevon",
    "Jewel",
    "Jewell",
    "Jillian",
    "Jimmie",
    "Jimmy",
    "Jo",
    "Joan",
    "Joana",
    "Joanie",
    "Joanne",
    "Joannie",
    "Joanny",
    "Joany",
    "Joaquin",
    "Jocelyn",
    "Jodie",
    "Jody",
    "Joe",
    "Joel",
    "Joelle",
    "Joesph",
    "Joey",
    "Johan",
    "Johann",
    "Johanna",
    "Johathan",
    "John",
    "Johnathan",
    "Johnathon",
    "Johnnie",
    "Johnny",
    "Johnpaul",
    "Johnson",
    "Jolie",
    "Jon",
    "Jonas",
    "Jonatan",
    "Jonathan",
    "Jonathon",
    "Jordan",
    "Jordane",
    "Jordi",
    "Jordon",
    "Jordy",
    "Jordyn",
    "Jorge",
    "Jose",
    "Josefa",
    "Josefina",
    "Joseph",
    "Josephine",
    "Josh",
    "Joshua",
    "Joshuah",
    "Josiah",
    "Josiane",
    "Josianne",
    "Josie",
    "Josue",
    "Jovan",
    "Jovani",
    "Jovanny",
    "Jovany",
    "Joy",
    "Joyce",
    "Juana",
    "Juanita",
    "Judah",
    "Judd",
    "Jude",
    "Judge",
    "Judson",
    "Judy",
    "Jules",
    "Julia",
    "Julian",
    "Juliana",
    "Julianne",
    "Julie",
    "Julien",
    "Juliet",
    "Julio",
    "Julius",
    "June",
    "Junior",
    "Junius",
    "Justen",
    "Justice",
    "Justina",
    "Justine",
    "Juston",
    "Justus",
    "Justyn",
    "Juvenal",
    "Juwan",
    "Kacey",
    "Kaci",
    "Kacie",
    "Kade",
    "Kaden",
    "Kadin",
    "Kaela",
    "Kaelyn",
    "Kaia",
    "Kailee",
    "Kailey",
    "Kailyn",
    "Kaitlin",
    "Kaitlyn",
    "Kale",
    "Kaleb",
    "Kaleigh",
    "Kaley",
    "Kali",
    "Kallie",
    "Kameron",
    "Kamille",
    "Kamren",
    "Kamron",
    "Kamryn",
    "Kane",
    "Kara",
    "Kareem",
    "Karelle",
    "Karen",
    "Kari",
    "Kariane",
    "Karianne",
    "Karina",
    "Karine",
    "Karl",
    "Karlee",
    "Karley",
    "Karli",
    "Karlie",
    "Karolann",
    "Karson",
    "Kasandra",
    "Kasey",
    "Kassandra",
    "Katarina",
    "Katelin",
    "Katelyn",
    "Katelynn",
    "Katharina",
    "Katherine",
    "Katheryn",
    "Kathleen",
    "Kathlyn",
    "Kathryn",
    "Kathryne",
    "Katlyn",
    "Katlynn",
    "Katrina",
    "Katrine",
    "Kattie",
    "Kavon",
    "Kay",
    "Kaya",
    "Kaycee",
    "Kayden",
    "Kayla",
    "Kaylah",
    "Kaylee",
    "Kayleigh",
    "Kayley",
    "Kayli",
    "Kaylie",
    "Kaylin",
    "Keagan",
    "Keanu",
    "Keara",
    "Keaton",
    "Keegan",
    "Keeley",
    "Keely",
    "Keenan",
    "Keira",
    "Keith",
    "Kellen",
    "Kelley",
    "Kelli",
    "Kellie",
    "Kelly",
    "Kelsi",
    "Kelsie",
    "Kelton",
    "Kelvin",
    "Ken",
    "Kendall",
    "Kendra",
    "Kendrick",
    "Kenna",
    "Kennedi",
    "Kennedy",
    "Kenneth",
    "Kennith",
    "Kenny",
    "Kenton",
    "Kenya",
    "Kenyatta",
    "Kenyon",
    "Keon",
    "Keshaun",
    "Keshawn",
    "Keven",
    "Kevin",
    "Kevon",
    "Keyon",
    "Keyshawn",
    "Khalid",
    "Khalil",
    "Kian",
    "Kiana",
    "Kianna",
    "Kiara",
    "Kiarra",
    "Kiel",
    "Kiera",
    "Kieran",
    "Kiley",
    "Kim",
    "Kimberly",
    "King",
    "Kip",
    "Kira",
    "Kirk",
    "Kirsten",
    "Kirstin",
    "Kitty",
    "Kobe",
    "Koby",
    "Kody",
    "Kolby",
    "Kole",
    "Korbin",
    "Korey",
    "Kory",
    "Kraig",
    "Kris",
    "Krista",
    "Kristian",
    "Kristin",
    "Kristina",
    "Kristofer",
    "Kristoffer",
    "Kristopher",
    "Kristy",
    "Krystal",
    "Krystel",
    "Krystina",
    "Kurt",
    "Kurtis",
    "Kyla",
    "Kyle",
    "Kylee",
    "Kyleigh",
    "Kyler",
    "Kylie",
    "Kyra",
    "Lacey",
    "Lacy",
    "Ladarius",
    "Lafayette",
    "Laila",
    "Laisha",
    "Lamar",
    "Lambert",
    "Lamont",
    "Lance",
    "Landen",
    "Lane",
    "Laney",
    "Larissa",
    "Laron",
    "Larry",
    "Larue",
    "Laura",
    "Laurel",
    "Lauren",
    "Laurence",
    "Lauretta",
    "Lauriane",
    "Laurianne",
    "Laurie",
    "Laurine",
    "Laury",
    "Lauryn",
    "Lavada",
    "Lavern",
    "Laverna",
    "Laverne",
    "Lavina",
    "Lavinia",
    "Lavon",
    "Lavonne",
    "Lawrence",
    "Lawson",
    "Layla",
    "Layne",
    "Lazaro",
    "Lea",
    "Leann",
    "Leanna",
    "Leanne",
    "Leatha",
    "Leda",
    "Lee",
    "Leif",
    "Leila",
    "Leilani",
    "Lela",
    "Lelah",
    "Leland",
    "Lelia",
    "Lempi",
    "Lemuel",
    "Lenna",
    "Lennie",
    "Lenny",
    "Lenora",
    "Lenore",
    "Leo",
    "Leola",
    "Leon",
    "Leonard",
    "Leonardo",
    "Leone",
    "Leonel",
    "Leonie",
    "Leonor",
    "Leonora",
    "Leopold",
    "Leopoldo",
    "Leora",
    "Lera",
    "Lesley",
    "Leslie",
    "Lesly",
    "Lessie",
    "Lester",
    "Leta",
    "Letha",
    "Letitia",
    "Levi",
    "Lew",
    "Lewis",
    "Lexi",
    "Lexie",
    "Lexus",
    "Lia",
    "Liam",
    "Liana",
    "Libbie",
    "Libby",
    "Lila",
    "Lilian",
    "Liliana",
    "Liliane",
    "Lilla",
    "Lillian",
    "Lilliana",
    "Lillie",
    "Lilly",
    "Lily",
    "Lilyan",
    "Lina",
    "Lincoln",
    "Linda",
    "Lindsay",
    "Lindsey",
    "Linnea",
    "Linnie",
    "Linwood",
    "Lionel",
    "Lisa",
    "Lisandro",
    "Lisette",
    "Litzy",
    "Liza",
    "Lizeth",
    "Lizzie",
    "Llewellyn",
    "Lloyd",
    "Logan",
    "Lois",
    "Lola",
    "Lolita",
    "Loma",
    "Lon",
    "London",
    "Lonie",
    "Lonnie",
    "Lonny",
    "Lonzo",
    "Lora",
    "Loraine",
    "Loren",
    "Lorena",
    "Lorenz",
    "Lorenza",
    "Lorenzo",
    "Lori",
    "Lorine",
    "Lorna",
    "Lottie",
    "Lou",
    "Louie",
    "Louisa",
    "Lourdes",
    "Louvenia",
    "Lowell",
    "Loy",
    "Loyal",
    "Loyce",
    "Lucas",
    "Luciano",
    "Lucie",
    "Lucienne",
    "Lucile",
    "Lucinda",
    "Lucio",
    "Lucious",
    "Lucius",
    "Lucy",
    "Ludie",
    "Ludwig",
    "Lue",
    "Luella",
    "Luigi",
    "Luis",
    "Luisa",
    "Lukas",
    "Lula",
    "Lulu",
    "Luna",
    "Lupe",
    "Lura",
    "Lurline",
    "Luther",
    "Luz",
    "Lyda",
    "Lydia",
    "Lyla",
    "Lynn",
    "Lyric",
    "Lysanne",
    "Mabel",
    "Mabelle",
    "Mable",
    "Mac",
    "Macey",
    "Maci",
    "Macie",
    "Mack",
    "Mackenzie",
    "Macy",
    "Madaline",
    "Madalyn",
    "Maddison",
    "Madeline",
    "Madelyn",
    "Madelynn",
    "Madge",
    "Madie",
    "Madilyn",
    "Madisen",
    "Madison",
    "Madisyn",
    "Madonna",
    "Madyson",
    "Mae",
    "Maegan",
    "Maeve",
    "Mafalda",
    "Magali",
    "Magdalen",
    "Magdalena",
    "Maggie",
    "Magnolia",
    "Magnus",
    "Maia",
    "Maida",
    "Maiya",
    "Major",
    "Makayla",
    "Makenna",
    "Makenzie",
    "Malachi",
    "Malcolm",
    "Malika",
    "Malinda",
    "Mallie",
    "Mallory",
    "Malvina",
    "Mandy",
    "Manley",
    "Manuel",
    "Manuela",
    "Mara",
    "Marc",
    "Marcel",
    "Marcelina",
    "Marcelino",
    "Marcella",
    "Marcelle",
    "Marcellus",
    "Marcelo",
    "Marcia",
    "Marco",
    "Marcos",
    "Marcus",
    "Margaret",
    "Margarete",
    "Margarett",
    "Margaretta",
    "Margarette",
    "Margarita",
    "Marge",
    "Margie",
    "Margot",
    "Margret",
    "Marguerite",
    "Maria",
    "Mariah",
    "Mariam",
    "Marian",
    "Mariana",
    "Mariane",
    "Marianna",
    "Marianne",
    "Mariano",
    "Maribel",
    "Marie",
    "Mariela",
    "Marielle",
    "Marietta",
    "Marilie",
    "Marilou",
    "Marilyne",
    "Marina",
    "Mario",
    "Marion",
    "Marisa",
    "Marisol",
    "Maritza",
    "Marjolaine",
    "Marjorie",
    "Marjory",
    "Mark",
    "Markus",
    "Marlee",
    "Marlen",
    "Marlene",
    "Marley",
    "Marlin",
    "Marlon",
    "Marques",
    "Marquis",
    "Marquise",
    "Marshall",
    "Marta",
    "Martin",
    "Martina",
    "Martine",
    "Marty",
    "Marvin",
    "Mary",
    "Maryam",
    "Maryjane",
    "Maryse",
    "Mason",
    "Mateo",
    "Mathew",
    "Mathias",
    "Mathilde",
    "Matilda",
    "Matilde",
    "Matt",
    "Matteo",
    "Mattie",
    "Maud",
    "Maude",
    "Maudie",
    "Maureen",
    "Maurice",
    "Mauricio",
    "Maurine",
    "Maverick",
    "Mavis",
    "Max",
    "Maxie",
    "Maxime",
    "Maximilian",
    "Maximillia",
    "Maximillian",
    "Maximo",
    "Maximus",
    "Maxine",
    "Maxwell",
    "May",
    "Maya",
    "Maybell",
    "Maybelle",
    "Maye",
    "Maymie",
    "Maynard",
    "Mayra",
    "Mazie",
    "Mckayla",
    "Mckenna",
    "Mckenzie",
    "Meagan",
    "Meaghan",
    "Meda",
    "Megane",
    "Meggie",
    "Meghan",
    "Mekhi",
    "Melany",
    "Melba",
    "Melisa",
    "Melissa",
    "Mellie",
    "Melody",
    "Melvin",
    "Melvina",
    "Melyna",
    "Melyssa",
    "Mercedes",
    "Meredith",
    "Merl",
    "Merle",
    "Merlin",
    "Merritt",
    "Mertie",
    "Mervin",
    "Meta",
    "Mia",
    "Micaela",
    "Micah",
    "Michael",
    "Michaela",
    "Michale",
    "Micheal",
    "Michel",
    "Michele",
    "Michelle",
    "Miguel",
    "Mikayla",
    "Mike",
    "Mikel",
    "Milan",
    "Miles",
    "Milford",
    "Miller",
    "Millie",
    "Milo",
    "Milton",
    "Mina",
    "Minerva",
    "Minnie",
    "Miracle",
    "Mireille",
    "Mireya",
    "Misael",
    "Missouri",
    "Misty",
    "Mitchel",
    "Mitchell",
    "Mittie",
    "Modesta",
    "Modesto",
    "Mohamed",
    "Mohammad",
    "Mohammed",
    "Moises",
    "Mollie",
    "Molly",
    "Mona",
    "Monica",
    "Monique",
    "Monroe",
    "Monserrat",
    "Monserrate",
    "Montana",
    "Monte",
    "Monty",
    "Morgan",
    "Moriah",
    "Morris",
    "Mortimer",
    "Morton",
    "Mose",
    "Moses",
    "Moshe",
    "Mossie",
    "Mozell",
    "Mozelle",
    "Muhammad",
    "Muriel",
    "Murl",
    "Murphy",
    "Murray",
    "Mustafa",
    "Mya",
    "Myah",
    "Mylene",
    "Myles",
    "Myra",
    "Myriam",
    "Myrl",
    "Myrna",
    "Myron",
    "Myrtice",
    "Myrtie",
    "Myrtis",
    "Myrtle",
    "Nadia",
    "Nakia",
    "Name",
    "Nannie",
    "Naomi",
    "Naomie",
    "Napoleon",
    "Narciso",
    "Nash",
    "Nasir",
    "Nat",
    "Natalia",
    "Natalie",
    "Natasha",
    "Nathan",
    "Nathanael",
    "Nathanial",
    "Nathaniel",
    "Nathen",
    "Nayeli",
    "Neal",
    "Ned",
    "Nedra",
    "Neha",
    "Neil",
    "Nelda",
    "Nella",
    "Nelle",
    "Nellie",
    "Nels",
    "Nelson",
    "Neoma",
    "Nestor",
    "Nettie",
    "Neva",
    "Newell",
    "Newton",
    "Nia",
    "Nicholas",
    "Nicholaus",
    "Nichole",
    "Nick",
    "Nicklaus",
    "Nickolas",
    "Nico",
    "Nicola",
    "Nicolas",
    "Nicole",
    "Nicolette",
    "Nigel",
    "Nikita",
    "Nikki",
    "Nikko",
    "Niko",
    "Nikolas",
    "Nils",
    "Nina",
    "Noah",
    "Noble",
    "Noe",
    "Noel",
    "Noelia",
    "Noemi",
    "Noemie",
    "Noemy",
    "Nola",
    "Nolan",
    "Nona",
    "Nora",
    "Norbert",
    "Norberto",
    "Norene",
    "Norma",
    "Norris",
    "Norval",
    "Norwood",
    "Nova",
    "Novella",
    "Nya",
    "Nyah",
    "Nyasia",
    "Obie",
    "Oceane",
    "Ocie",
    "Octavia",
    "Oda",
    "Odell",
    "Odessa",
    "Odie",
    "Ofelia",
    "Okey",
    "Ola",
    "Olaf",
    "Ole",
    "Olen",
    "Oleta",
    "Olga",
    "Olin",
    "Oliver",
    "Ollie",
    "Oma",
    "Omari",
    "Omer",
    "Ona",
    "Onie",
    "Opal",
    "Ophelia",
    "Ora",
    "Oral",
    "Oran",
    "Oren",
    "Orie",
    "Orin",
    "Orion",
    "Orland",
    "Orlando",
    "Orlo",
    "Orpha",
    "Orrin",
    "Orval",
    "Orville",
    "Osbaldo",
    "Osborne",
    "Oscar",
    "Osvaldo",
    "Oswald",
    "Oswaldo",
    "Otha",
    "Otho",
    "Otilia",
    "Otis",
    "Ottilie",
    "Ottis",
    "Otto",
    "Ova",
    "Owen",
    "Ozella",
    "Pablo",
    "Paige",
    "Palma",
    "Pamela",
    "Pansy",
    "Paolo",
    "Paris",
    "Parker",
    "Pascale",
    "Pasquale",
    "Pat",
    "Patience",
    "Patricia",
    "Patrick",
    "Patsy",
    "Pattie",
    "Paul",
    "Paula",
    "Pauline",
    "Paxton",
    "Payton",
    "Pearl",
    "Pearlie",
    "Pearline",
    "Pedro",
    "Peggie",
    "Penelope",
    "Percival",
    "Percy",
    "Perry",
    "Pete",
    "Peter",
    "Petra",
    "Peyton",
    "Philip",
    "Phoebe",
    "Phyllis",
    "Pierce",
    "Pierre",
    "Pietro",
    "Pink",
    "Pinkie",
    "Piper",
    "Polly",
    "Porter",
    "Precious",
    "Presley",
    "Preston",
    "Price",
    "Prince",
    "Princess",
    "Priscilla",
    "Providenci",
    "Prudence",
    "Queen",
    "Queenie",
    "Quentin",
    "Quincy",
    "Quinn",
    "Quinten",
    "Quinton",
    "Rachael",
    "Rachel",
    "Rachelle",
    "Rae",
    "Raegan",
    "Rafael",
    "Rafaela",
    "Raheem",
    "Rahsaan",
    "Rahul",
    "Raina",
    "Raleigh",
    "Ralph",
    "Ramiro",
    "Ramon",
    "Ramona",
    "Randal",
    "Randall",
    "Randi",
    "Randy",
    "Ransom",
    "Raoul",
    "Raphael",
    "Raphaelle",
    "Raquel",
    "Rashad",
    "Rashawn",
    "Rasheed",
    "Raul",
    "Raven",
    "Ray",
    "Raymond",
    "Raymundo",
    "Reagan",
    "Reanna",
    "Reba",
    "Rebeca",
    "Rebecca",
    "Rebeka",
    "Rebekah",
    "Reece",
    "Reed",
    "Reese",
    "Regan",
    "Reggie",
    "Reginald",
    "Reid",
    "Reilly",
    "Reina",
    "Reinhold",
    "Remington",
    "Rene",
    "Renee",
    "Ressie",
    "Reta",
    "Retha",
    "Retta",
    "Reuben",
    "Reva",
    "Rex",
    "Rey",
    "Reyes",
    "Reymundo",
    "Reyna",
    "Reynold",
    "Rhea",
    "Rhett",
    "Rhianna",
    "Rhiannon",
    "Rhoda",
    "Ricardo",
    "Richard",
    "Richie",
    "Richmond",
    "Rick",
    "Rickey",
    "Rickie",
    "Ricky",
    "Rico",
    "Rigoberto",
    "Riley",
    "Rita",
    "River",
    "Robb",
    "Robbie",
    "Robert",
    "Roberta",
    "Roberto",
    "Robin",
    "Robyn",
    "Rocio",
    "Rocky",
    "Rod",
    "Roderick",
    "Rodger",
    "Rodolfo",
    "Rodrick",
    "Rodrigo",
    "Roel",
    "Rogelio",
    "Roger",
    "Rogers",
    "Rolando",
    "Rollin",
    "Roma",
    "Romaine",
    "Roman",
    "Ron",
    "Ronaldo",
    "Ronny",
    "Roosevelt",
    "Rory",
    "Rosa",
    "Rosalee",
    "Rosalia",
    "Rosalind",
    "Rosalinda",
    "Rosalyn",
    "Rosamond",
    "Rosanna",
    "Rosario",
    "Roscoe",
    "Rose",
    "Rosella",
    "Roselyn",
    "Rosemarie",
    "Rosemary",
    "Rosendo",
    "Rosetta",
    "Rosie",
    "Rosina",
    "Roslyn",
    "Ross",
    "Rossie",
    "Rowan",
    "Rowena",
    "Rowland",
    "Roxane",
    "Roxanne",
    "Roy",
    "Royal",
    "Royce",
    "Rozella",
    "Ruben",
    "Rubie",
    "Ruby",
    "Rubye",
    "Rudolph",
    "Rudy",
    "Rupert",
    "Russ",
    "Russel",
    "Russell",
    "Rusty",
    "Ruth",
    "Ruthe",
    "Ruthie",
    "Ryan",
    "Ryann",
    "Ryder",
    "Rylan",
    "Rylee",
    "Ryleigh",
    "Ryley",
    "Sabina",
    "Sabrina",
    "Sabryna",
    "Sadie",
    "Sadye",
    "Sage",
    "Saige",
    "Sallie",
    "Sally",
    "Salma",
    "Salvador",
    "Salvatore",
    "Sam",
    "Samanta",
    "Samantha",
    "Samara",
    "Samir",
    "Sammie",
    "Sammy",
    "Samson",
    "Sandra",
    "Sandrine",
    "Sandy",
    "Sanford",
    "Santa",
    "Santiago",
    "Santina",
    "Santino",
    "Santos",
    "Sarah",
    "Sarai",
    "Sarina",
    "Sasha",
    "Saul",
    "Savanah",
    "Savanna",
    "Savannah",
    "Savion",
    "Scarlett",
    "Schuyler",
    "Scot",
    "Scottie",
    "Scotty",
    "Seamus",
    "Sean",
    "Sebastian",
    "Sedrick",
    "Selena",
    "Selina",
    "Selmer",
    "Serena",
    "Serenity",
    "Seth",
    "Shad",
    "Shaina",
    "Shakira",
    "Shana",
    "Shane",
    "Shanel",
    "Shanelle",
    "Shania",
    "Shanie",
    "Shaniya",
    "Shanna",
    "Shannon",
    "Shanny",
    "Shanon",
    "Shany",
    "Sharon",
    "Shaun",
    "Shawn",
    "Shawna",
    "Shaylee",
    "Shayna",
    "Shayne",
    "Shea",
    "Sheila",
    "Sheldon",
    "Shemar",
    "Sheridan",
    "Sherman",
    "Sherwood",
    "Shirley",
    "Shyann",
    "Shyanne",
    "Sibyl",
    "Sid",
    "Sidney",
    "Sienna",
    "Sierra",
    "Sigmund",
    "Sigrid",
    "Sigurd",
    "Silas",
    "Sim",
    "Simeon",
    "Simone",
    "Sincere",
    "Sister",
    "Skye",
    "Skyla",
    "Skylar",
    "Sofia",
    "Soledad",
    "Solon",
    "Sonia",
    "Sonny",
    "Sonya",
    "Sophia",
    "Sophie",
    "Spencer",
    "Stacey",
    "Stacy",
    "Stan",
    "Stanford",
    "Stanley",
    "Stanton",
    "Stefan",
    "Stefanie",
    "Stella",
    "Stephan",
    "Stephania",
    "Stephanie",
    "Stephany",
    "Stephen",
    "Stephon",
    "Sterling",
    "Steve",
    "Stevie",
    "Stewart",
    "Stone",
    "Stuart",
    "Summer",
    "Sunny",
    "Susan",
    "Susana",
    "Susanna",
    "Susie",
    "Suzanne",
    "Sven",
    "Syble",
    "Sydnee",
    "Sydney",
    "Sydni",
    "Sydnie",
    "Sylvan",
    "Sylvester",
    "Sylvia",
    "Tabitha",
    "Tad",
    "Talia",
    "Talon",
    "Tamara",
    "Tamia",
    "Tania",
    "Tanner",
    "Tanya",
    "Tara",
    "Taryn",
    "Tate",
    "Tatum",
    "Tatyana",
    "Taurean",
    "Tavares",
    "Taya",
    "Taylor",
    "Teagan",
    "Ted",
    "Telly",
    "Terence",
    "Teresa",
    "Terrance",
    "Terrell",
    "Terrence",
    "Terrill",
    "Terry",
    "Tess",
    "Tessie",
    "Tevin",
    "Thad",
    "Thaddeus",
    "Thalia",
    "Thea",
    "Thelma",
    "Theo",
    "Theodora",
    "Theodore",
    "Theresa",
    "Therese",
    "Theresia",
    "Theron",
    "Thomas",
    "Thora",
    "Thurman",
    "Tia",
    "Tiana",
    "Tianna",
    "Tiara",
    "Tierra",
    "Tiffany",
    "Tillman",
    "Timmothy",
    "Timmy",
    "Timothy",
    "Tina",
    "Tito",
    "Titus",
    "Tobin",
    "Toby",
    "Tod",
    "Tom",
    "Tomas",
    "Tomasa",
    "Tommie",
    "Toney",
    "Toni",
    "Tony",
    "Torey",
    "Torrance",
    "Torrey",
    "Toy",
    "Trace",
    "Tracey",
    "Tracy",
    "Travis",
    "Travon",
    "Tre",
    "Tremaine",
    "Tremayne",
    "Trent",
    "Trenton",
    "Tressa",
    "Tressie",
    "Treva",
    "Trever",
    "Trevion",
    "Trevor",
    "Trey",
    "Trinity",
    "Trisha",
    "Tristian",
    "Tristin",
    "Triston",
    "Troy",
    "Trudie",
    "Trycia",
    "Trystan",
    "Turner",
    "Twila",
    "Tyler",
    "Tyra",
    "Tyree",
    "Tyreek",
    "Tyrel",
    "Tyrell",
    "Tyrese",
    "Tyrique",
    "Tyshawn",
    "Tyson",
    "Ubaldo",
    "Ulices",
    "Ulises",
    "Una",
    "Unique",
    "Urban",
    "Uriah",
    "Uriel",
    "Ursula",
    "Vada",
    "Valentin",
    "Valentina",
    "Valentine",
    "Valerie",
    "Vallie",
    "Van",
    "Vance",
    "Vanessa",
    "Vaughn",
    "Veda",
    "Velda",
    "Vella",
    "Velma",
    "Velva",
    "Vena",
    "Verda",
    "Verdie",
    "Vergie",
    "Verla",
    "Verlie",
    "Vern",
    "Verna",
    "Verner",
    "Vernice",
    "Vernie",
    "Vernon",
    "Verona",
    "Veronica",
    "Vesta",
    "Vicenta",
    "Vicente",
    "Vickie",
    "Vicky",
    "Victor",
    "Victoria",
    "Vida",
    "Vidal",
    "Vilma",
    "Vince",
    "Vincent",
    "Vincenza",
    "Vincenzo",
    "Vinnie",
    "Viola",
    "Violet",
    "Violette",
    "Virgie",
    "Virgil",
    "Virginia",
    "Virginie",
    "Vita",
    "Vito",
    "Viva",
    "Vivian",
    "Viviane",
    "Vivianne",
    "Vivien",
    "Vivienne",
    "Vladimir",
    "Wade",
    "Waino",
    "Waldo",
    "Walker",
    "Wallace",
    "Walter",
    "Walton",
    "Wanda",
    "Ward",
    "Warren",
    "Watson",
    "Wava",
    "Waylon",
    "Wayne",
    "Webster",
    "Weldon",
    "Wellington",
    "Wendell",
    "Wendy",
    "Werner",
    "Westley",
    "Weston",
    "Whitney",
    "Wilber",
    "Wilbert",
    "Wilburn",
    "Wiley",
    "Wilford",
    "Wilfred",
    "Wilfredo",
    "Wilfrid",
    "Wilhelm",
    "Wilhelmine",
    "Will",
    "Willa",
    "Willard",
    "William",
    "Willie",
    "Willis",
    "Willow",
    "Willy",
    "Wilma",
    "Wilmer",
    "Wilson",
    "Wilton",
    "Winfield",
    "Winifred",
    "Winnifred",
    "Winona",
    "Winston",
    "Woodrow",
    "Wyatt",
    "Wyman",
    "Xander",
    "Xavier",
    "Xzavier",
    "Yadira",
    "Yasmeen",
    "Yasmin",
    "Yasmine",
    "Yazmin",
    "Yesenia",
    "Yessenia",
    "Yolanda",
    "Yoshiko",
    "Yvette",
    "Yvonne",
    "Zachariah",
    "Zachary",
    "Zachery",
    "Zack",
    "Zackary",
    "Zackery",
    "Zakary",
    "Zander",
    "Zane",
    "Zaria",
    "Zechariah",
    "Zelda",
    "Zella",
    "Zelma",
    "Zena",
    "Zetta",
    "Zion",
    "Zita",
    "Zoe",
    "Zoey",
    "Zoie",
    "Zoila",
    "Zola",
    "Zora",
    "Zula"
];

},{}],"jpgzL":[function(require,module,exports) {
module["exports"] = [
    "Abbott",
    "Abernathy",
    "Abshire",
    "Adams",
    "Altenwerth",
    "Anderson",
    "Ankunding",
    "Armstrong",
    "Auer",
    "Aufderhar",
    "Bahringer",
    "Bailey",
    "Balistreri",
    "Barrows",
    "Bartell",
    "Bartoletti",
    "Barton",
    "Bashirian",
    "Batz",
    "Bauch",
    "Baumbach",
    "Bayer",
    "Beahan",
    "Beatty",
    "Bechtelar",
    "Becker",
    "Bednar",
    "Beer",
    "Beier",
    "Berge",
    "Bergnaum",
    "Bergstrom",
    "Bernhard",
    "Bernier",
    "Bins",
    "Blanda",
    "Blick",
    "Block",
    "Bode",
    "Boehm",
    "Bogan",
    "Bogisich",
    "Borer",
    "Bosco",
    "Botsford",
    "Boyer",
    "Boyle",
    "Bradtke",
    "Brakus",
    "Braun",
    "Breitenberg",
    "Brekke",
    "Brown",
    "Bruen",
    "Buckridge",
    "Carroll",
    "Carter",
    "Cartwright",
    "Casper",
    "Cassin",
    "Champlin",
    "Christiansen",
    "Cole",
    "Collier",
    "Collins",
    "Conn",
    "Connelly",
    "Conroy",
    "Considine",
    "Corkery",
    "Cormier",
    "Corwin",
    "Cremin",
    "Crist",
    "Crona",
    "Cronin",
    "Crooks",
    "Cruickshank",
    "Cummerata",
    "Cummings",
    "Dach",
    "D'Amore",
    "Daniel",
    "Dare",
    "Daugherty",
    "Davis",
    "Deckow",
    "Denesik",
    "Dibbert",
    "Dickens",
    "Dicki",
    "Dickinson",
    "Dietrich",
    "Donnelly",
    "Dooley",
    "Douglas",
    "Doyle",
    "DuBuque",
    "Durgan",
    "Ebert",
    "Effertz",
    "Emard",
    "Emmerich",
    "Erdman",
    "Ernser",
    "Fadel",
    "Fahey",
    "Farrell",
    "Fay",
    "Feeney",
    "Feest",
    "Feil",
    "Ferry",
    "Fisher",
    "Flatley",
    "Frami",
    "Franecki",
    "Friesen",
    "Fritsch",
    "Funk",
    "Gaylord",
    "Gerhold",
    "Gerlach",
    "Gibson",
    "Gislason",
    "Gleason",
    "Gleichner",
    "Glover",
    "Goldner",
    "Goodwin",
    "Gorczany",
    "Gottlieb",
    "Goyette",
    "Grady",
    "Graham",
    "Grant",
    "Green",
    "Greenfelder",
    "Greenholt",
    "Grimes",
    "Gulgowski",
    "Gusikowski",
    "Gutkowski",
    "Gutmann",
    "Haag",
    "Hackett",
    "Hagenes",
    "Hahn",
    "Haley",
    "Halvorson",
    "Hamill",
    "Hammes",
    "Hand",
    "Hane",
    "Hansen",
    "Harber",
    "Harris",
    "Hartmann",
    "Harvey",
    "Hauck",
    "Hayes",
    "Heaney",
    "Heathcote",
    "Hegmann",
    "Heidenreich",
    "Heller",
    "Herman",
    "Hermann",
    "Hermiston",
    "Herzog",
    "Hessel",
    "Hettinger",
    "Hickle",
    "Hilll",
    "Hills",
    "Hilpert",
    "Hintz",
    "Hirthe",
    "Hodkiewicz",
    "Hoeger",
    "Homenick",
    "Hoppe",
    "Howe",
    "Howell",
    "Hudson",
    "Huel",
    "Huels",
    "Hyatt",
    "Jacobi",
    "Jacobs",
    "Jacobson",
    "Jakubowski",
    "Jaskolski",
    "Jast",
    "Jenkins",
    "Jerde",
    "Johns",
    "Johnson",
    "Johnston",
    "Jones",
    "Kassulke",
    "Kautzer",
    "Keebler",
    "Keeling",
    "Kemmer",
    "Kerluke",
    "Kertzmann",
    "Kessler",
    "Kiehn",
    "Kihn",
    "Kilback",
    "King",
    "Kirlin",
    "Klein",
    "Kling",
    "Klocko",
    "Koch",
    "Koelpin",
    "Koepp",
    "Kohler",
    "Konopelski",
    "Koss",
    "Kovacek",
    "Kozey",
    "Krajcik",
    "Kreiger",
    "Kris",
    "Kshlerin",
    "Kub",
    "Kuhic",
    "Kuhlman",
    "Kuhn",
    "Kulas",
    "Kunde",
    "Kunze",
    "Kuphal",
    "Kutch",
    "Kuvalis",
    "Labadie",
    "Lakin",
    "Lang",
    "Langosh",
    "Langworth",
    "Larkin",
    "Larson",
    "Leannon",
    "Lebsack",
    "Ledner",
    "Leffler",
    "Legros",
    "Lehner",
    "Lemke",
    "Lesch",
    "Leuschke",
    "Lind",
    "Lindgren",
    "Littel",
    "Little",
    "Lockman",
    "Lowe",
    "Lubowitz",
    "Lueilwitz",
    "Luettgen",
    "Lynch",
    "Macejkovic",
    "MacGyver",
    "Maggio",
    "Mann",
    "Mante",
    "Marks",
    "Marquardt",
    "Marvin",
    "Mayer",
    "Mayert",
    "McClure",
    "McCullough",
    "McDermott",
    "McGlynn",
    "McKenzie",
    "McLaughlin",
    "Medhurst",
    "Mertz",
    "Metz",
    "Miller",
    "Mills",
    "Mitchell",
    "Moen",
    "Mohr",
    "Monahan",
    "Moore",
    "Morar",
    "Morissette",
    "Mosciski",
    "Mraz",
    "Mueller",
    "Muller",
    "Murazik",
    "Murphy",
    "Murray",
    "Nader",
    "Nicolas",
    "Nienow",
    "Nikolaus",
    "Nitzsche",
    "Nolan",
    "Oberbrunner",
    "O'Connell",
    "O'Conner",
    "O'Hara",
    "O'Keefe",
    "O'Kon",
    "Okuneva",
    "Olson",
    "Ondricka",
    "O'Reilly",
    "Orn",
    "Ortiz",
    "Osinski",
    "Pacocha",
    "Padberg",
    "Pagac",
    "Parisian",
    "Parker",
    "Paucek",
    "Pfannerstill",
    "Pfeffer",
    "Pollich",
    "Pouros",
    "Powlowski",
    "Predovic",
    "Price",
    "Prohaska",
    "Prosacco",
    "Purdy",
    "Quigley",
    "Quitzon",
    "Rath",
    "Ratke",
    "Rau",
    "Raynor",
    "Reichel",
    "Reichert",
    "Reilly",
    "Reinger",
    "Rempel",
    "Renner",
    "Reynolds",
    "Rice",
    "Rippin",
    "Ritchie",
    "Robel",
    "Roberts",
    "Rodriguez",
    "Rogahn",
    "Rohan",
    "Rolfson",
    "Romaguera",
    "Roob",
    "Rosenbaum",
    "Rowe",
    "Ruecker",
    "Runolfsdottir",
    "Runolfsson",
    "Runte",
    "Russel",
    "Rutherford",
    "Ryan",
    "Sanford",
    "Satterfield",
    "Sauer",
    "Sawayn",
    "Schaden",
    "Schaefer",
    "Schamberger",
    "Schiller",
    "Schimmel",
    "Schinner",
    "Schmeler",
    "Schmidt",
    "Schmitt",
    "Schneider",
    "Schoen",
    "Schowalter",
    "Schroeder",
    "Schulist",
    "Schultz",
    "Schumm",
    "Schuppe",
    "Schuster",
    "Senger",
    "Shanahan",
    "Shields",
    "Simonis",
    "Sipes",
    "Skiles",
    "Smith",
    "Smitham",
    "Spencer",
    "Spinka",
    "Sporer",
    "Stamm",
    "Stanton",
    "Stark",
    "Stehr",
    "Steuber",
    "Stiedemann",
    "Stokes",
    "Stoltenberg",
    "Stracke",
    "Streich",
    "Stroman",
    "Strosin",
    "Swaniawski",
    "Swift",
    "Terry",
    "Thiel",
    "Thompson",
    "Tillman",
    "Torp",
    "Torphy",
    "Towne",
    "Toy",
    "Trantow",
    "Tremblay",
    "Treutel",
    "Tromp",
    "Turcotte",
    "Turner",
    "Ullrich",
    "Upton",
    "Vandervort",
    "Veum",
    "Volkman",
    "Von",
    "VonRueden",
    "Waelchi",
    "Walker",
    "Walsh",
    "Walter",
    "Ward",
    "Waters",
    "Watsica",
    "Weber",
    "Wehner",
    "Weimann",
    "Weissnat",
    "Welch",
    "West",
    "White",
    "Wiegand",
    "Wilderman",
    "Wilkinson",
    "Will",
    "Williamson",
    "Willms",
    "Windler",
    "Wintheiser",
    "Wisoky",
    "Wisozk",
    "Witting",
    "Wiza",
    "Wolf",
    "Wolff",
    "Wuckert",
    "Wunsch",
    "Wyman",
    "Yost",
    "Yundt",
    "Zboncak",
    "Zemlak",
    "Ziemann",
    "Zieme",
    "Zulauf"
];

},{}],"gV0e7":[function(require,module,exports) {
module["exports"] = [
    "Female",
    "Male"
];

},{}],"15wwc":[function(require,module,exports) {
module["exports"] = [
    "Asexual",
    "Female to male trans man",
    "Female to male transgender man",
    "Female to male transsexual man",
    "F2M",
    "Gender neutral",
    "Hermaphrodite",
    "Intersex man",
    "Intersex person",
    "Intersex woman",
    "Male to female trans woman",
    "Male to female transgender woman",
    "Male to female transsexual woman",
    "Man",
    "M2F",
    "Polygender",
    "T* man",
    "T* woman",
    "Two* person",
    "Two-spirit person",
    "Woman",
    "Agender",
    "Androgyne",
    "Androgynes",
    "Androgynous",
    "Bigender",
    "Cis",
    "Cis Female",
    "Cis Male",
    "Cis Man",
    "Cis Woman",
    "Cisgender",
    "Cisgender Female",
    "Cisgender Male",
    "Cisgender Man",
    "Cisgender Woman",
    "Female to Male",
    "FTM",
    "Gender Fluid",
    "Gender Nonconforming",
    "Gender Questioning",
    "Gender Variant",
    "Genderqueer",
    "Intersex",
    "Male to Female",
    "MTF",
    "Neither",
    "Neutrois",
    "Non-binary",
    "Other",
    "Pangender",
    "Trans",
    "Trans Female",
    "Trans Male",
    "Trans Man",
    "Trans Person",
    "Trans*Female",
    "Trans*Male",
    "Trans*Man",
    "Trans*Person",
    "Trans*Woman",
    "Transexual",
    "Transexual Female",
    "Transexual Male",
    "Transexual Man",
    "Transexual Person",
    "Transexual Woman",
    "Transgender Female",
    "Transgender Person",
    "Transmasculine",
    "Two-spirit"
];

},{}],"NsZN4":[function(require,module,exports) {
module["exports"] = [
    "Mr.",
    "Mrs.",
    "Ms.",
    "Miss",
    "Dr."
];

},{}],"6rzXL":[function(require,module,exports) {
module["exports"] = [
    "Jr.",
    "Sr.",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "MD",
    "DDS",
    "PhD",
    "DVM"
];

},{}],"6Dwrj":[function(require,module,exports) {
module["exports"] = {
    "descriptor": [
        "Lead",
        "Senior",
        "Direct",
        "Corporate",
        "Dynamic",
        "Future",
        "Product",
        "National",
        "Regional",
        "District",
        "Central",
        "Global",
        "Customer",
        "Investor",
        "Dynamic",
        "International",
        "Legacy",
        "Forward",
        "Internal",
        "Human",
        "Chief",
        "Principal"
    ],
    "level": [
        "Solutions",
        "Program",
        "Brand",
        "Security",
        "Research",
        "Marketing",
        "Directives",
        "Implementation",
        "Integration",
        "Functionality",
        "Response",
        "Paradigm",
        "Tactics",
        "Identity",
        "Markets",
        "Group",
        "Division",
        "Applications",
        "Optimization",
        "Operations",
        "Infrastructure",
        "Intranet",
        "Communications",
        "Web",
        "Branding",
        "Quality",
        "Assurance",
        "Mobility",
        "Accounts",
        "Data",
        "Creative",
        "Configuration",
        "Accountability",
        "Interactions",
        "Factors",
        "Usability",
        "Metrics"
    ],
    "job": [
        "Supervisor",
        "Associate",
        "Executive",
        "Liaison",
        "Officer",
        "Manager",
        "Engineer",
        "Specialist",
        "Director",
        "Coordinator",
        "Administrator",
        "Architect",
        "Analyst",
        "Designer",
        "Planner",
        "Orchestrator",
        "Technician",
        "Developer",
        "Producer",
        "Consultant",
        "Assistant",
        "Facilitator",
        "Agent",
        "Representative",
        "Strategist"
    ]
};

},{}],"7RNdS":[function(require,module,exports) {
module["exports"] = [
    "#{prefix} #{first_name} #{last_name}",
    "#{first_name} #{last_name} #{suffix}",
    "#{first_name} #{last_name}",
    "#{first_name} #{last_name}",
    "#{male_first_name} #{last_name}",
    "#{female_first_name} #{last_name}"
];

},{}],"8mF9M":[function(require,module,exports) {
var phone_number = {
};
module['exports'] = phone_number;
phone_number.formats = require("./formats");

},{"./formats":"885zs"}],"885zs":[function(require,module,exports) {
module["exports"] = [
    "!##-!##-####",
    "(!##) !##-####",
    "1-!##-!##-####",
    "!##.!##.####",
    "!##-!##-####",
    "(!##) !##-####",
    "1-!##-!##-####",
    "!##.!##.####",
    "!##-!##-#### x###",
    "(!##) !##-#### x###",
    "1-!##-!##-#### x###",
    "!##.!##.#### x###",
    "!##-!##-#### x####",
    "(!##) !##-#### x####",
    "1-!##-!##-#### x####",
    "!##.!##.#### x####",
    "!##-!##-#### x#####",
    "(!##) !##-#### x#####",
    "1-!##-!##-#### x#####",
    "!##.!##.#### x#####"
];

},{}],"adOx0":[function(require,module,exports) {
var cell_phone = {
};
module['exports'] = cell_phone;
cell_phone.formats = require("./formats");

},{"./formats":"jiSUQ"}],"jiSUQ":[function(require,module,exports) {
module["exports"] = [
    "###-###-####",
    "(###) ###-####",
    "1-###-###-####",
    "###.###.####"
];

},{}],"cyGaC":[function(require,module,exports) {
var business = {
};
module['exports'] = business;
business.credit_card_numbers = require("./credit_card_numbers");
business.credit_card_expiry_dates = require("./credit_card_expiry_dates");
business.credit_card_types = require("./credit_card_types");

},{"./credit_card_numbers":"jXtI8","./credit_card_expiry_dates":"k7yJ0","./credit_card_types":"dAakh"}],"jXtI8":[function(require,module,exports) {
module["exports"] = [
    "1234-2121-1221-1211",
    "1212-1221-1121-1234",
    "1211-1221-1234-2201",
    "1228-1221-1221-1431"
];

},{}],"k7yJ0":[function(require,module,exports) {
module["exports"] = [
    "2011-10-12",
    "2012-11-12",
    "2015-11-11",
    "2013-9-12"
];

},{}],"dAakh":[function(require,module,exports) {
module["exports"] = [
    "visa",
    "mastercard",
    "americanexpress",
    "discover"
];

},{}],"gkAvb":[function(require,module,exports) {
var commerce = {
};
module['exports'] = commerce;
commerce.color = require("./color");
commerce.department = require("./department");
commerce.product_name = require("./product_name");
commerce.product_description = require("./product_description");

},{"./color":"49KpV","./department":"66dtk","./product_name":"5NGLj","./product_description":"jshUm"}],"49KpV":[function(require,module,exports) {
module["exports"] = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "mint green",
    "teal",
    "white",
    "black",
    "orange",
    "pink",
    "grey",
    "maroon",
    "violet",
    "turquoise",
    "tan",
    "sky blue",
    "salmon",
    "plum",
    "orchid",
    "olive",
    "magenta",
    "lime",
    "ivory",
    "indigo",
    "gold",
    "fuchsia",
    "cyan",
    "azure",
    "lavender",
    "silver"
];

},{}],"66dtk":[function(require,module,exports) {
module["exports"] = [
    "Books",
    "Movies",
    "Music",
    "Games",
    "Electronics",
    "Computers",
    "Home",
    "Garden",
    "Tools",
    "Grocery",
    "Health",
    "Beauty",
    "Toys",
    "Kids",
    "Baby",
    "Clothing",
    "Shoes",
    "Jewelery",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial"
];

},{}],"5NGLj":[function(require,module,exports) {
module["exports"] = {
    "adjective": [
        "Small",
        "Ergonomic",
        "Rustic",
        "Intelligent",
        "Gorgeous",
        "Incredible",
        "Fantastic",
        "Practical",
        "Sleek",
        "Awesome",
        "Generic",
        "Handcrafted",
        "Handmade",
        "Licensed",
        "Refined",
        "Unbranded",
        "Tasty"
    ],
    "material": [
        "Steel",
        "Wooden",
        "Concrete",
        "Plastic",
        "Cotton",
        "Granite",
        "Rubber",
        "Metal",
        "Soft",
        "Fresh",
        "Frozen"
    ],
    "product": [
        "Chair",
        "Car",
        "Computer",
        "Keyboard",
        "Mouse",
        "Bike",
        "Ball",
        "Gloves",
        "Pants",
        "Shirt",
        "Table",
        "Shoes",
        "Hat",
        "Towels",
        "Soap",
        "Tuna",
        "Chicken",
        "Fish",
        "Cheese",
        "Bacon",
        "Pizza",
        "Salad",
        "Sausages",
        "Chips"
    ]
};

},{}],"jshUm":[function(require,module,exports) {
module["exports"] = [
    "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "The Football Is Good For Training And Recreational Purposes",
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
];

},{}],"dNlYQ":[function(require,module,exports) {
var team = {
};
module['exports'] = team;
team.creature = require("./creature");
team.name = require("./name");

},{"./creature":"epH9n","./name":"giZvc"}],"epH9n":[function(require,module,exports) {
module["exports"] = [
    "ants",
    "bats",
    "bears",
    "bees",
    "birds",
    "buffalo",
    "cats",
    "chickens",
    "cattle",
    "dogs",
    "dolphins",
    "ducks",
    "elephants",
    "fishes",
    "foxes",
    "frogs",
    "geese",
    "goats",
    "horses",
    "kangaroos",
    "lions",
    "monkeys",
    "owls",
    "oxen",
    "penguins",
    "people",
    "pigs",
    "rabbits",
    "sheep",
    "tigers",
    "whales",
    "wolves",
    "zebras",
    "banshees",
    "crows",
    "black cats",
    "chimeras",
    "ghosts",
    "conspirators",
    "dragons",
    "dwarves",
    "elves",
    "enchanters",
    "exorcists",
    "sons",
    "foes",
    "giants",
    "gnomes",
    "goblins",
    "gooses",
    "griffins",
    "lycanthropes",
    "nemesis",
    "ogres",
    "oracles",
    "prophets",
    "sorcerors",
    "spiders",
    "spirits",
    "vampires",
    "warlocks",
    "vixens",
    "werewolves",
    "witches",
    "worshipers",
    "zombies",
    "druids"
];

},{}],"giZvc":[function(require,module,exports) {
module["exports"] = [
    "#{Address.state} #{creature}"
];

},{}],"41uFr":[function(require,module,exports) {
var hacker = {
};
module['exports'] = hacker;
hacker.abbreviation = require("./abbreviation");
hacker.adjective = require("./adjective");
hacker.noun = require("./noun");
hacker.verb = require("./verb");
hacker.ingverb = require("./ingverb");
hacker.phrase = require("./phrase");

},{"./abbreviation":"71VHy","./adjective":"jW0yf","./noun":"d07Z0","./verb":"8UJPT","./ingverb":"9QTXj","./phrase":"4jmB2"}],"71VHy":[function(require,module,exports) {
module["exports"] = [
    "TCP",
    "HTTP",
    "SDD",
    "RAM",
    "GB",
    "CSS",
    "SSL",
    "AGP",
    "SQL",
    "FTP",
    "PCI",
    "AI",
    "ADP",
    "RSS",
    "XML",
    "EXE",
    "COM",
    "HDD",
    "THX",
    "SMTP",
    "SMS",
    "USB",
    "PNG",
    "SAS",
    "IB",
    "SCSI",
    "JSON",
    "XSS",
    "JBOD"
];

},{}],"jW0yf":[function(require,module,exports) {
module["exports"] = [
    "auxiliary",
    "primary",
    "back-end",
    "digital",
    "open-source",
    "virtual",
    "cross-platform",
    "redundant",
    "online",
    "haptic",
    "multi-byte",
    "bluetooth",
    "wireless",
    "1080p",
    "neural",
    "optical",
    "solid state",
    "mobile"
];

},{}],"d07Z0":[function(require,module,exports) {
module["exports"] = [
    "driver",
    "protocol",
    "bandwidth",
    "panel",
    "microchip",
    "program",
    "port",
    "card",
    "array",
    "interface",
    "system",
    "sensor",
    "firewall",
    "hard drive",
    "pixel",
    "alarm",
    "feed",
    "monitor",
    "application",
    "transmitter",
    "bus",
    "circuit",
    "capacitor",
    "matrix"
];

},{}],"8UJPT":[function(require,module,exports) {
module["exports"] = [
    "back up",
    "bypass",
    "hack",
    "override",
    "compress",
    "copy",
    "navigate",
    "index",
    "connect",
    "generate",
    "quantify",
    "calculate",
    "synthesize",
    "input",
    "transmit",
    "program",
    "reboot",
    "parse"
];

},{}],"9QTXj":[function(require,module,exports) {
module["exports"] = [
    "backing up",
    "bypassing",
    "hacking",
    "overriding",
    "compressing",
    "copying",
    "navigating",
    "indexing",
    "connecting",
    "generating",
    "quantifying",
    "calculating",
    "synthesizing",
    "transmitting",
    "programming",
    "parsing"
];

},{}],"4jmB2":[function(require,module,exports) {
module["exports"] = [
    "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!",
    "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
    "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!",
    "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!",
    "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!",
    "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!",
    "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
    "I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!"
];

},{}],"2CjlR":[function(require,module,exports) {
var app = {
};
module['exports'] = app;
app.name = require("./name");
app.version = require("./version");
app.author = require("./author");

},{"./name":"fU1tL","./version":"hMLcG","./author":"2EVgL"}],"fU1tL":[function(require,module,exports) {
module["exports"] = [
    "Redhold",
    "Treeflex",
    "Trippledex",
    "Kanlam",
    "Bigtax",
    "Daltfresh",
    "Toughjoyfax",
    "Mat Lam Tam",
    "Otcom",
    "Tres-Zap",
    "Y-Solowarm",
    "Tresom",
    "Voltsillam",
    "Biodex",
    "Greenlam",
    "Viva",
    "Matsoft",
    "Temp",
    "Zoolab",
    "Subin",
    "Rank",
    "Job",
    "Stringtough",
    "Tin",
    "It",
    "Home Ing",
    "Zamit",
    "Sonsing",
    "Konklab",
    "Alpha",
    "Latlux",
    "Voyatouch",
    "Alphazap",
    "Holdlamis",
    "Zaam-Dox",
    "Sub-Ex",
    "Quo Lux",
    "Bamity",
    "Ventosanzap",
    "Lotstring",
    "Hatity",
    "Tempsoft",
    "Overhold",
    "Fixflex",
    "Konklux",
    "Zontrax",
    "Tampflex",
    "Span",
    "Namfix",
    "Transcof",
    "Stim",
    "Fix San",
    "Sonair",
    "Stronghold",
    "Fintone",
    "Y-find",
    "Opela",
    "Lotlux",
    "Ronstring",
    "Zathin",
    "Duobam",
    "Keylex"
];

},{}],"hMLcG":[function(require,module,exports) {
module["exports"] = [
    "0.#.#",
    "0.##",
    "#.##",
    "#.#",
    "#.#.#"
];

},{}],"2EVgL":[function(require,module,exports) {
module["exports"] = [
    "#{Name.name}",
    "#{Company.name}"
];

},{}],"hMgcA":[function(require,module,exports) {
var finance = {
};
module['exports'] = finance;
finance.account_type = require("./account_type");
finance.transaction_type = require("./transaction_type");
finance.currency = require("./currency");
finance.credit_card = require("./credit_card");

},{"./account_type":"cUqEN","./transaction_type":"hhvaS","./currency":"adEN9","./credit_card":"ajRzS"}],"cUqEN":[function(require,module,exports) {
module["exports"] = [
    "Checking",
    "Savings",
    "Money Market",
    "Investment",
    "Home Loan",
    "Credit Card",
    "Auto Loan",
    "Personal Loan"
];

},{}],"hhvaS":[function(require,module,exports) {
module["exports"] = [
    "deposit",
    "withdrawal",
    "payment",
    "invoice"
];

},{}],"adEN9":[function(require,module,exports) {
module["exports"] = {
    "UAE Dirham": {
        "code": "AED",
        "symbol": ""
    },
    "Afghani": {
        "code": "AFN",
        "symbol": "؋"
    },
    "Lek": {
        "code": "ALL",
        "symbol": "Lek"
    },
    "Armenian Dram": {
        "code": "AMD",
        "symbol": ""
    },
    "Netherlands Antillian Guilder": {
        "code": "ANG",
        "symbol": "ƒ"
    },
    "Kwanza": {
        "code": "AOA",
        "symbol": ""
    },
    "Argentine Peso": {
        "code": "ARS",
        "symbol": "$"
    },
    "Australian Dollar": {
        "code": "AUD",
        "symbol": "$"
    },
    "Aruban Guilder": {
        "code": "AWG",
        "symbol": "ƒ"
    },
    "Azerbaijanian Manat": {
        "code": "AZN",
        "symbol": "ман"
    },
    "Convertible Marks": {
        "code": "BAM",
        "symbol": "KM"
    },
    "Barbados Dollar": {
        "code": "BBD",
        "symbol": "$"
    },
    "Taka": {
        "code": "BDT",
        "symbol": ""
    },
    "Bulgarian Lev": {
        "code": "BGN",
        "symbol": "лв"
    },
    "Bahraini Dinar": {
        "code": "BHD",
        "symbol": ""
    },
    "Burundi Franc": {
        "code": "BIF",
        "symbol": ""
    },
    "Bermudian Dollar (customarily known as Bermuda Dollar)": {
        "code": "BMD",
        "symbol": "$"
    },
    "Brunei Dollar": {
        "code": "BND",
        "symbol": "$"
    },
    "Boliviano boliviano": {
        "code": "BOB",
        "symbol": "Bs"
    },
    "Brazilian Real": {
        "code": "BRL",
        "symbol": "R$"
    },
    "Bahamian Dollar": {
        "code": "BSD",
        "symbol": "$"
    },
    "Pula": {
        "code": "BWP",
        "symbol": "P"
    },
    "Belarussian Ruble": {
        "code": "BYR",
        "symbol": "p."
    },
    "Belize Dollar": {
        "code": "BZD",
        "symbol": "BZ$"
    },
    "Canadian Dollar": {
        "code": "CAD",
        "symbol": "$"
    },
    "Congolese Franc": {
        "code": "CDF",
        "symbol": ""
    },
    "Swiss Franc": {
        "code": "CHF",
        "symbol": "CHF"
    },
    "Chilean Peso": {
        "code": "CLP",
        "symbol": "$"
    },
    "Yuan Renminbi": {
        "code": "CNY",
        "symbol": "¥"
    },
    "Colombian Peso": {
        "code": "COP",
        "symbol": "$"
    },
    "Costa Rican Colon": {
        "code": "CRC",
        "symbol": "₡"
    },
    "Cuban Peso": {
        "code": "CUP",
        "symbol": "₱"
    },
    "Cuban Peso Convertible": {
        "code": "CUC",
        "symbol": "$"
    },
    "Cape Verde Escudo": {
        "code": "CVE",
        "symbol": ""
    },
    "Czech Koruna": {
        "code": "CZK",
        "symbol": "Kč"
    },
    "Djibouti Franc": {
        "code": "DJF",
        "symbol": ""
    },
    "Danish Krone": {
        "code": "DKK",
        "symbol": "kr"
    },
    "Dominican Peso": {
        "code": "DOP",
        "symbol": "RD$"
    },
    "Algerian Dinar": {
        "code": "DZD",
        "symbol": ""
    },
    "Kroon": {
        "code": "EEK",
        "symbol": ""
    },
    "Egyptian Pound": {
        "code": "EGP",
        "symbol": "£"
    },
    "Nakfa": {
        "code": "ERN",
        "symbol": ""
    },
    "Ethiopian Birr": {
        "code": "ETB",
        "symbol": ""
    },
    "Euro": {
        "code": "EUR",
        "symbol": "€"
    },
    "Fiji Dollar": {
        "code": "FJD",
        "symbol": "$"
    },
    "Falkland Islands Pound": {
        "code": "FKP",
        "symbol": "£"
    },
    "Pound Sterling": {
        "code": "GBP",
        "symbol": "£"
    },
    "Lari": {
        "code": "GEL",
        "symbol": ""
    },
    "Cedi": {
        "code": "GHS",
        "symbol": ""
    },
    "Gibraltar Pound": {
        "code": "GIP",
        "symbol": "£"
    },
    "Dalasi": {
        "code": "GMD",
        "symbol": ""
    },
    "Guinea Franc": {
        "code": "GNF",
        "symbol": ""
    },
    "Quetzal": {
        "code": "GTQ",
        "symbol": "Q"
    },
    "Guyana Dollar": {
        "code": "GYD",
        "symbol": "$"
    },
    "Hong Kong Dollar": {
        "code": "HKD",
        "symbol": "$"
    },
    "Lempira": {
        "code": "HNL",
        "symbol": "L"
    },
    "Croatian Kuna": {
        "code": "HRK",
        "symbol": "kn"
    },
    "Gourde": {
        "code": "HTG",
        "symbol": ""
    },
    "Forint": {
        "code": "HUF",
        "symbol": "Ft"
    },
    "Rupiah": {
        "code": "IDR",
        "symbol": "Rp"
    },
    "New Israeli Sheqel": {
        "code": "ILS",
        "symbol": "₪"
    },
    "Bhutanese Ngultrum": {
        "code": "BTN",
        "symbol": "Nu"
    },
    "Indian Rupee": {
        "code": "INR",
        "symbol": "₹"
    },
    "Iraqi Dinar": {
        "code": "IQD",
        "symbol": ""
    },
    "Iranian Rial": {
        "code": "IRR",
        "symbol": "﷼"
    },
    "Iceland Krona": {
        "code": "ISK",
        "symbol": "kr"
    },
    "Jamaican Dollar": {
        "code": "JMD",
        "symbol": "J$"
    },
    "Jordanian Dinar": {
        "code": "JOD",
        "symbol": ""
    },
    "Yen": {
        "code": "JPY",
        "symbol": "¥"
    },
    "Kenyan Shilling": {
        "code": "KES",
        "symbol": ""
    },
    "Som": {
        "code": "KGS",
        "symbol": "лв"
    },
    "Riel": {
        "code": "KHR",
        "symbol": "៛"
    },
    "Comoro Franc": {
        "code": "KMF",
        "symbol": ""
    },
    "North Korean Won": {
        "code": "KPW",
        "symbol": "₩"
    },
    "Won": {
        "code": "KRW",
        "symbol": "₩"
    },
    "Kuwaiti Dinar": {
        "code": "KWD",
        "symbol": ""
    },
    "Cayman Islands Dollar": {
        "code": "KYD",
        "symbol": "$"
    },
    "Tenge": {
        "code": "KZT",
        "symbol": "лв"
    },
    "Kip": {
        "code": "LAK",
        "symbol": "₭"
    },
    "Lebanese Pound": {
        "code": "LBP",
        "symbol": "£"
    },
    "Sri Lanka Rupee": {
        "code": "LKR",
        "symbol": "₨"
    },
    "Liberian Dollar": {
        "code": "LRD",
        "symbol": "$"
    },
    "Lithuanian Litas": {
        "code": "LTL",
        "symbol": "Lt"
    },
    "Latvian Lats": {
        "code": "LVL",
        "symbol": "Ls"
    },
    "Libyan Dinar": {
        "code": "LYD",
        "symbol": ""
    },
    "Moroccan Dirham": {
        "code": "MAD",
        "symbol": ""
    },
    "Moldovan Leu": {
        "code": "MDL",
        "symbol": ""
    },
    "Malagasy Ariary": {
        "code": "MGA",
        "symbol": ""
    },
    "Denar": {
        "code": "MKD",
        "symbol": "ден"
    },
    "Kyat": {
        "code": "MMK",
        "symbol": ""
    },
    "Tugrik": {
        "code": "MNT",
        "symbol": "₮"
    },
    "Pataca": {
        "code": "MOP",
        "symbol": ""
    },
    "Ouguiya": {
        "code": "MRO",
        "symbol": ""
    },
    "Mauritius Rupee": {
        "code": "MUR",
        "symbol": "₨"
    },
    "Rufiyaa": {
        "code": "MVR",
        "symbol": ""
    },
    "Kwacha": {
        "code": "MWK",
        "symbol": ""
    },
    "Mexican Peso": {
        "code": "MXN",
        "symbol": "$"
    },
    "Malaysian Ringgit": {
        "code": "MYR",
        "symbol": "RM"
    },
    "Metical": {
        "code": "MZN",
        "symbol": "MT"
    },
    "Naira": {
        "code": "NGN",
        "symbol": "₦"
    },
    "Cordoba Oro": {
        "code": "NIO",
        "symbol": "C$"
    },
    "Norwegian Krone": {
        "code": "NOK",
        "symbol": "kr"
    },
    "Nepalese Rupee": {
        "code": "NPR",
        "symbol": "₨"
    },
    "New Zealand Dollar": {
        "code": "NZD",
        "symbol": "$"
    },
    "Rial Omani": {
        "code": "OMR",
        "symbol": "﷼"
    },
    "Balboa": {
        "code": "PAB",
        "symbol": "B/."
    },
    "Nuevo Sol": {
        "code": "PEN",
        "symbol": "S/."
    },
    "Kina": {
        "code": "PGK",
        "symbol": ""
    },
    "Philippine Peso": {
        "code": "PHP",
        "symbol": "Php"
    },
    "Pakistan Rupee": {
        "code": "PKR",
        "symbol": "₨"
    },
    "Zloty": {
        "code": "PLN",
        "symbol": "zł"
    },
    "Guarani": {
        "code": "PYG",
        "symbol": "Gs"
    },
    "Qatari Rial": {
        "code": "QAR",
        "symbol": "﷼"
    },
    "New Leu": {
        "code": "RON",
        "symbol": "lei"
    },
    "Serbian Dinar": {
        "code": "RSD",
        "symbol": "Дин."
    },
    "Russian Ruble": {
        "code": "RUB",
        "symbol": "руб"
    },
    "Rwanda Franc": {
        "code": "RWF",
        "symbol": ""
    },
    "Saudi Riyal": {
        "code": "SAR",
        "symbol": "﷼"
    },
    "Solomon Islands Dollar": {
        "code": "SBD",
        "symbol": "$"
    },
    "Seychelles Rupee": {
        "code": "SCR",
        "symbol": "₨"
    },
    "Sudanese Pound": {
        "code": "SDG",
        "symbol": ""
    },
    "Swedish Krona": {
        "code": "SEK",
        "symbol": "kr"
    },
    "Singapore Dollar": {
        "code": "SGD",
        "symbol": "$"
    },
    "Saint Helena Pound": {
        "code": "SHP",
        "symbol": "£"
    },
    "Leone": {
        "code": "SLL",
        "symbol": ""
    },
    "Somali Shilling": {
        "code": "SOS",
        "symbol": "S"
    },
    "Surinam Dollar": {
        "code": "SRD",
        "symbol": "$"
    },
    "Dobra": {
        "code": "STN",
        "symbol": "Db"
    },
    "El Salvador Colon": {
        "code": "SVC",
        "symbol": "₡"
    },
    "Syrian Pound": {
        "code": "SYP",
        "symbol": "£"
    },
    "Lilangeni": {
        "code": "SZL",
        "symbol": ""
    },
    "Baht": {
        "code": "THB",
        "symbol": "฿"
    },
    "Somoni": {
        "code": "TJS",
        "symbol": ""
    },
    "Manat": {
        "code": "TMT",
        "symbol": ""
    },
    "Tunisian Dinar": {
        "code": "TND",
        "symbol": ""
    },
    "Pa'anga": {
        "code": "TOP",
        "symbol": ""
    },
    "Turkish Lira": {
        "code": "TRY",
        "symbol": "₺"
    },
    "Trinidad and Tobago Dollar": {
        "code": "TTD",
        "symbol": "TT$"
    },
    "New Taiwan Dollar": {
        "code": "TWD",
        "symbol": "NT$"
    },
    "Tanzanian Shilling": {
        "code": "TZS",
        "symbol": ""
    },
    "Hryvnia": {
        "code": "UAH",
        "symbol": "₴"
    },
    "Uganda Shilling": {
        "code": "UGX",
        "symbol": ""
    },
    "US Dollar": {
        "code": "USD",
        "symbol": "$"
    },
    "Peso Uruguayo": {
        "code": "UYU",
        "symbol": "$U"
    },
    "Uzbekistan Sum": {
        "code": "UZS",
        "symbol": "лв"
    },
    "Bolivar Fuerte": {
        "code": "VEF",
        "symbol": "Bs"
    },
    "Dong": {
        "code": "VND",
        "symbol": "₫"
    },
    "Vatu": {
        "code": "VUV",
        "symbol": ""
    },
    "Tala": {
        "code": "WST",
        "symbol": ""
    },
    "CFA Franc BEAC": {
        "code": "XAF",
        "symbol": ""
    },
    "Silver": {
        "code": "XAG",
        "symbol": ""
    },
    "Gold": {
        "code": "XAU",
        "symbol": ""
    },
    "Bond Markets Units European Composite Unit (EURCO)": {
        "code": "XBA",
        "symbol": ""
    },
    "European Monetary Unit (E.M.U.-6)": {
        "code": "XBB",
        "symbol": ""
    },
    "European Unit of Account 9(E.U.A.-9)": {
        "code": "XBC",
        "symbol": ""
    },
    "European Unit of Account 17(E.U.A.-17)": {
        "code": "XBD",
        "symbol": ""
    },
    "East Caribbean Dollar": {
        "code": "XCD",
        "symbol": "$"
    },
    "SDR": {
        "code": "XDR",
        "symbol": ""
    },
    "UIC-Franc": {
        "code": "XFU",
        "symbol": ""
    },
    "CFA Franc BCEAO": {
        "code": "XOF",
        "symbol": ""
    },
    "Palladium": {
        "code": "XPD",
        "symbol": ""
    },
    "CFP Franc": {
        "code": "XPF",
        "symbol": ""
    },
    "Platinum": {
        "code": "XPT",
        "symbol": ""
    },
    "Codes specifically reserved for testing purposes": {
        "code": "XTS",
        "symbol": ""
    },
    "Yemeni Rial": {
        "code": "YER",
        "symbol": "﷼"
    },
    "Rand": {
        "code": "ZAR",
        "symbol": "R"
    },
    "Lesotho Loti": {
        "code": "LSL",
        "symbol": ""
    },
    "Namibia Dollar": {
        "code": "NAD",
        "symbol": "N$"
    },
    "Zambian Kwacha": {
        "code": "ZMK",
        "symbol": ""
    },
    "Zimbabwe Dollar": {
        "code": "ZWL",
        "symbol": ""
    }
};

},{}],"ajRzS":[function(require,module,exports) {
var credit_card = {
};
module['exports'] = credit_card;
credit_card.visa = require("./visa");
credit_card.mastercard = require("./mastercard");
credit_card.discover = require("./discover");
credit_card.american_express = require("./american_express");
credit_card.diners_club = require("./diners_club");
credit_card.jcb = require("./jcb");
credit_card.switch = require("./switch");
credit_card.solo = require("./solo");
credit_card.maestro = require("./maestro");
credit_card.laser = require("./laser");
credit_card.instapayment = require("./instapayment.js");

},{"./visa":"3I8UZ","./mastercard":"1McqS","./discover":"cQL0R","./american_express":"hC4bi","./diners_club":"c9H8l","./jcb":"5Nu18","./switch":"lTn82","./solo":"1gWJo","./maestro":"eSLaQ","./laser":"5GVIJ","./instapayment.js":"6Uq3G"}],"3I8UZ":[function(require,module,exports) {
module["exports"] = [
    "4###########L",
    "4###-####-####-###L"
];

},{}],"1McqS":[function(require,module,exports) {
module["exports"] = [
    "5[1-5]##-####-####-###L",
    "6771-89##-####-###L"
];

},{}],"cQL0R":[function(require,module,exports) {
module["exports"] = [
    "6011-####-####-###L",
    "65##-####-####-###L",
    "64[4-9]#-####-####-###L",
    "6011-62##-####-####-###L",
    "65##-62##-####-####-###L",
    "64[4-9]#-62##-####-####-###L"
];

},{}],"hC4bi":[function(require,module,exports) {
module["exports"] = [
    "34##-######-####L",
    "37##-######-####L"
];

},{}],"c9H8l":[function(require,module,exports) {
module["exports"] = [
    "30[0-5]#-######-###L",
    "36##-######-###L",
    "54##-####-####-###L"
];

},{}],"5Nu18":[function(require,module,exports) {
module["exports"] = [
    "3528-####-####-###L",
    "3529-####-####-###L",
    "35[3-8]#-####-####-###L"
];

},{}],"lTn82":[function(require,module,exports) {
module["exports"] = [
    "6759-####-####-###L",
    "6759-####-####-####-#L",
    "6759-####-####-####-##L"
];

},{}],"1gWJo":[function(require,module,exports) {
module["exports"] = [
    "6767-####-####-###L",
    "6767-####-####-####-#L",
    "6767-####-####-####-##L"
];

},{}],"eSLaQ":[function(require,module,exports) {
module["exports"] = [
    "5018-#{4}-#{4}-#{3}L",
    "5020-#{4}-#{4}-#{3}L",
    "5038-#{4}-#{4}-#{3}L",
    "5893-#{4}-#{4}-#{3}L",
    "6304-#{4}-#{4}-#{3}L",
    "6759-#{4}-#{4}-#{3}L",
    "676[1-3]-####-####-###L",
    "5018#{11,15}L",
    "5020#{11,15}L",
    "5038#{11,15}L",
    "5893#{11,15}L",
    "6304#{11,15}L",
    "6759#{11,15}L",
    "676[1-3]#{11,15}L", 
]; // 5018 xxxx xxxx xxxx xxL

},{}],"5GVIJ":[function(require,module,exports) {
module["exports"] = [
    "6304###########L",
    "6706###########L",
    "6771###########L",
    "6709###########L",
    "6304#########{5,6}L",
    "6706#########{5,6}L",
    "6771#########{5,6}L",
    "6709#########{5,6}L"
];

},{}],"6Uq3G":[function(require,module,exports) {
module["exports"] = [
    "63[7-9]#-####-####-###L"
];

},{}],"1VEoA":[function(require,module,exports) {
var date = {
};
module["exports"] = date;
date.month = require("./month");
date.weekday = require("./weekday");

},{"./month":"l8DuN","./weekday":"jVYwL"}],"l8DuN":[function(require,module,exports) {
// Source: http://unicode.org/cldr/trac/browser/tags/release-27/common/main/en.xml#L1799
module["exports"] = {
    wide: [
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
    // Property "wide_context" is optional, if not set then "wide" will be used instead
    // It is used to specify a word in context, which may differ from a stand-alone word
    wide_context: [
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
    abbr: [
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
    ],
    // Property "abbr_context" is optional, if not set then "abbr" will be used instead
    // It is used to specify a word in context, which may differ from a stand-alone word
    abbr_context: [
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
};

},{}],"jVYwL":[function(require,module,exports) {
// Source: http://unicode.org/cldr/trac/browser/tags/release-27/common/main/en.xml#L1847
module["exports"] = {
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    // Property "wide_context" is optional, if not set then "wide" will be used instead
    // It is used to specify a word in context, which may differ from a stand-alone word
    wide_context: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    abbr: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    // Property "abbr_context" is optional, if not set then "abbr" will be used instead
    // It is used to specify a word in context, which may differ from a stand-alone word
    abbr_context: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]
};

},{}],"gnzoC":[function(require,module,exports) {
var system = {
};
module['exports'] = system;
system.directoryPaths = require("./directoryPaths");
system.mimeTypes = require("./mimeTypes");

},{"./directoryPaths":"7djEr","./mimeTypes":"5rSl7"}],"7djEr":[function(require,module,exports) {
module['exports'] = [
    "/Applications",
    "/bin",
    "/boot",
    "/boot/defaults",
    "/dev",
    "/etc",
    "/etc/defaults",
    "/etc/mail",
    "/etc/namedb",
    "/etc/periodic",
    "/etc/ppp",
    "/home",
    "/home/user",
    "/home/user/dir",
    "/lib",
    "/Library",
    "/lost+found",
    "/media",
    "/mnt",
    "/net",
    "/Network",
    "/opt",
    "/opt/bin",
    "/opt/include",
    "/opt/lib",
    "/opt/sbin",
    "/opt/share",
    "/private",
    "/private/tmp",
    "/private/var",
    "/proc",
    "/rescue",
    "/root",
    "/sbin",
    "/selinux",
    "/srv",
    "/sys",
    "/System",
    "/tmp",
    "/Users",
    "/usr",
    "/usr/X11R6",
    "/usr/bin",
    "/usr/include",
    "/usr/lib",
    "/usr/libdata",
    "/usr/libexec",
    "/usr/local/bin",
    "/usr/local/src",
    "/usr/obj",
    "/usr/ports",
    "/usr/sbin",
    "/usr/share",
    "/usr/src",
    "/var",
    "/var/log",
    "/var/mail",
    "/var/spool",
    "/var/tmp",
    "/var/yp"
];

},{}],"5rSl7":[function(require,module,exports) {
/*

The MIT License (MIT)

Copyright (c) 2014 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Definitions from mime-db v1.21.0
For updates check: https://github.com/jshttp/mime-db/blob/master/db.json

*/ module['exports'] = {
    "application/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "application/3gpdash-qoe-report+xml": {
        "source": "iana"
    },
    "application/3gpp-ims+xml": {
        "source": "iana"
    },
    "application/a2l": {
        "source": "iana"
    },
    "application/activemessage": {
        "source": "iana"
    },
    "application/alto-costmap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-costmapfilter+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-directory+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointcost+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointcostparams+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointprop+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointpropparams+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-error+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-networkmap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-networkmapfilter+json": {
        "source": "iana",
        "compressible": true
    },
    "application/aml": {
        "source": "iana"
    },
    "application/andrew-inset": {
        "source": "iana",
        "extensions": [
            "ez"
        ]
    },
    "application/applefile": {
        "source": "iana"
    },
    "application/applixware": {
        "source": "apache",
        "extensions": [
            "aw"
        ]
    },
    "application/atf": {
        "source": "iana"
    },
    "application/atfx": {
        "source": "iana"
    },
    "application/atom+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "atom"
        ]
    },
    "application/atomcat+xml": {
        "source": "iana",
        "extensions": [
            "atomcat"
        ]
    },
    "application/atomdeleted+xml": {
        "source": "iana"
    },
    "application/atomicmail": {
        "source": "iana"
    },
    "application/atomsvc+xml": {
        "source": "iana",
        "extensions": [
            "atomsvc"
        ]
    },
    "application/atxml": {
        "source": "iana"
    },
    "application/auth-policy+xml": {
        "source": "iana"
    },
    "application/bacnet-xdd+zip": {
        "source": "iana"
    },
    "application/batch-smtp": {
        "source": "iana"
    },
    "application/bdoc": {
        "compressible": false,
        "extensions": [
            "bdoc"
        ]
    },
    "application/beep+xml": {
        "source": "iana"
    },
    "application/calendar+json": {
        "source": "iana",
        "compressible": true
    },
    "application/calendar+xml": {
        "source": "iana"
    },
    "application/call-completion": {
        "source": "iana"
    },
    "application/cals-1840": {
        "source": "iana"
    },
    "application/cbor": {
        "source": "iana"
    },
    "application/ccmp+xml": {
        "source": "iana"
    },
    "application/ccxml+xml": {
        "source": "iana",
        "extensions": [
            "ccxml"
        ]
    },
    "application/cdfx+xml": {
        "source": "iana"
    },
    "application/cdmi-capability": {
        "source": "iana",
        "extensions": [
            "cdmia"
        ]
    },
    "application/cdmi-container": {
        "source": "iana",
        "extensions": [
            "cdmic"
        ]
    },
    "application/cdmi-domain": {
        "source": "iana",
        "extensions": [
            "cdmid"
        ]
    },
    "application/cdmi-object": {
        "source": "iana",
        "extensions": [
            "cdmio"
        ]
    },
    "application/cdmi-queue": {
        "source": "iana",
        "extensions": [
            "cdmiq"
        ]
    },
    "application/cdni": {
        "source": "iana"
    },
    "application/cea": {
        "source": "iana"
    },
    "application/cea-2018+xml": {
        "source": "iana"
    },
    "application/cellml+xml": {
        "source": "iana"
    },
    "application/cfw": {
        "source": "iana"
    },
    "application/cms": {
        "source": "iana"
    },
    "application/cnrp+xml": {
        "source": "iana"
    },
    "application/coap-group+json": {
        "source": "iana",
        "compressible": true
    },
    "application/commonground": {
        "source": "iana"
    },
    "application/conference-info+xml": {
        "source": "iana"
    },
    "application/cpl+xml": {
        "source": "iana"
    },
    "application/csrattrs": {
        "source": "iana"
    },
    "application/csta+xml": {
        "source": "iana"
    },
    "application/cstadata+xml": {
        "source": "iana"
    },
    "application/csvm+json": {
        "source": "iana",
        "compressible": true
    },
    "application/cu-seeme": {
        "source": "apache",
        "extensions": [
            "cu"
        ]
    },
    "application/cybercash": {
        "source": "iana"
    },
    "application/dart": {
        "compressible": true
    },
    "application/dash+xml": {
        "source": "iana",
        "extensions": [
            "mdp"
        ]
    },
    "application/dashdelta": {
        "source": "iana"
    },
    "application/davmount+xml": {
        "source": "iana",
        "extensions": [
            "davmount"
        ]
    },
    "application/dca-rft": {
        "source": "iana"
    },
    "application/dcd": {
        "source": "iana"
    },
    "application/dec-dx": {
        "source": "iana"
    },
    "application/dialog-info+xml": {
        "source": "iana"
    },
    "application/dicom": {
        "source": "iana"
    },
    "application/dii": {
        "source": "iana"
    },
    "application/dit": {
        "source": "iana"
    },
    "application/dns": {
        "source": "iana"
    },
    "application/docbook+xml": {
        "source": "apache",
        "extensions": [
            "dbk"
        ]
    },
    "application/dskpp+xml": {
        "source": "iana"
    },
    "application/dssc+der": {
        "source": "iana",
        "extensions": [
            "dssc"
        ]
    },
    "application/dssc+xml": {
        "source": "iana",
        "extensions": [
            "xdssc"
        ]
    },
    "application/dvcs": {
        "source": "iana"
    },
    "application/ecmascript": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "ecma"
        ]
    },
    "application/edi-consent": {
        "source": "iana"
    },
    "application/edi-x12": {
        "source": "iana",
        "compressible": false
    },
    "application/edifact": {
        "source": "iana",
        "compressible": false
    },
    "application/emergencycalldata.comment+xml": {
        "source": "iana"
    },
    "application/emergencycalldata.deviceinfo+xml": {
        "source": "iana"
    },
    "application/emergencycalldata.providerinfo+xml": {
        "source": "iana"
    },
    "application/emergencycalldata.serviceinfo+xml": {
        "source": "iana"
    },
    "application/emergencycalldata.subscriberinfo+xml": {
        "source": "iana"
    },
    "application/emma+xml": {
        "source": "iana",
        "extensions": [
            "emma"
        ]
    },
    "application/emotionml+xml": {
        "source": "iana"
    },
    "application/encaprtp": {
        "source": "iana"
    },
    "application/epp+xml": {
        "source": "iana"
    },
    "application/epub+zip": {
        "source": "iana",
        "extensions": [
            "epub"
        ]
    },
    "application/eshop": {
        "source": "iana"
    },
    "application/exi": {
        "source": "iana",
        "extensions": [
            "exi"
        ]
    },
    "application/fastinfoset": {
        "source": "iana"
    },
    "application/fastsoap": {
        "source": "iana"
    },
    "application/fdt+xml": {
        "source": "iana"
    },
    "application/fits": {
        "source": "iana"
    },
    "application/font-sfnt": {
        "source": "iana"
    },
    "application/font-tdpfr": {
        "source": "iana",
        "extensions": [
            "pfr"
        ]
    },
    "application/font-woff": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "woff"
        ]
    },
    "application/font-woff2": {
        "compressible": false,
        "extensions": [
            "woff2"
        ]
    },
    "application/framework-attributes+xml": {
        "source": "iana"
    },
    "application/gml+xml": {
        "source": "apache",
        "extensions": [
            "gml"
        ]
    },
    "application/gpx+xml": {
        "source": "apache",
        "extensions": [
            "gpx"
        ]
    },
    "application/gxf": {
        "source": "apache",
        "extensions": [
            "gxf"
        ]
    },
    "application/gzip": {
        "source": "iana",
        "compressible": false
    },
    "application/h224": {
        "source": "iana"
    },
    "application/held+xml": {
        "source": "iana"
    },
    "application/http": {
        "source": "iana"
    },
    "application/hyperstudio": {
        "source": "iana",
        "extensions": [
            "stk"
        ]
    },
    "application/ibe-key-request+xml": {
        "source": "iana"
    },
    "application/ibe-pkg-reply+xml": {
        "source": "iana"
    },
    "application/ibe-pp-data": {
        "source": "iana"
    },
    "application/iges": {
        "source": "iana"
    },
    "application/im-iscomposing+xml": {
        "source": "iana"
    },
    "application/index": {
        "source": "iana"
    },
    "application/index.cmd": {
        "source": "iana"
    },
    "application/index.obj": {
        "source": "iana"
    },
    "application/index.response": {
        "source": "iana"
    },
    "application/index.vnd": {
        "source": "iana"
    },
    "application/inkml+xml": {
        "source": "iana",
        "extensions": [
            "ink",
            "inkml"
        ]
    },
    "application/iotp": {
        "source": "iana"
    },
    "application/ipfix": {
        "source": "iana",
        "extensions": [
            "ipfix"
        ]
    },
    "application/ipp": {
        "source": "iana"
    },
    "application/isup": {
        "source": "iana"
    },
    "application/its+xml": {
        "source": "iana"
    },
    "application/java-archive": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "jar",
            "war",
            "ear"
        ]
    },
    "application/java-serialized-object": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "ser"
        ]
    },
    "application/java-vm": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "class"
        ]
    },
    "application/javascript": {
        "source": "iana",
        "charset": "UTF-8",
        "compressible": true,
        "extensions": [
            "js"
        ]
    },
    "application/jose": {
        "source": "iana"
    },
    "application/jose+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jrd+json": {
        "source": "iana",
        "compressible": true
    },
    "application/json": {
        "source": "iana",
        "charset": "UTF-8",
        "compressible": true,
        "extensions": [
            "json",
            "map"
        ]
    },
    "application/json-patch+json": {
        "source": "iana",
        "compressible": true
    },
    "application/json-seq": {
        "source": "iana"
    },
    "application/json5": {
        "extensions": [
            "json5"
        ]
    },
    "application/jsonml+json": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "jsonml"
        ]
    },
    "application/jwk+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jwk-set+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jwt": {
        "source": "iana"
    },
    "application/kpml-request+xml": {
        "source": "iana"
    },
    "application/kpml-response+xml": {
        "source": "iana"
    },
    "application/ld+json": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "jsonld"
        ]
    },
    "application/link-format": {
        "source": "iana"
    },
    "application/load-control+xml": {
        "source": "iana"
    },
    "application/lost+xml": {
        "source": "iana",
        "extensions": [
            "lostxml"
        ]
    },
    "application/lostsync+xml": {
        "source": "iana"
    },
    "application/lxf": {
        "source": "iana"
    },
    "application/mac-binhex40": {
        "source": "iana",
        "extensions": [
            "hqx"
        ]
    },
    "application/mac-compactpro": {
        "source": "apache",
        "extensions": [
            "cpt"
        ]
    },
    "application/macwriteii": {
        "source": "iana"
    },
    "application/mads+xml": {
        "source": "iana",
        "extensions": [
            "mads"
        ]
    },
    "application/manifest+json": {
        "charset": "UTF-8",
        "compressible": true,
        "extensions": [
            "webmanifest"
        ]
    },
    "application/marc": {
        "source": "iana",
        "extensions": [
            "mrc"
        ]
    },
    "application/marcxml+xml": {
        "source": "iana",
        "extensions": [
            "mrcx"
        ]
    },
    "application/mathematica": {
        "source": "iana",
        "extensions": [
            "ma",
            "nb",
            "mb"
        ]
    },
    "application/mathml+xml": {
        "source": "iana",
        "extensions": [
            "mathml"
        ]
    },
    "application/mathml-content+xml": {
        "source": "iana"
    },
    "application/mathml-presentation+xml": {
        "source": "iana"
    },
    "application/mbms-associated-procedure-description+xml": {
        "source": "iana"
    },
    "application/mbms-deregister+xml": {
        "source": "iana"
    },
    "application/mbms-envelope+xml": {
        "source": "iana"
    },
    "application/mbms-msk+xml": {
        "source": "iana"
    },
    "application/mbms-msk-response+xml": {
        "source": "iana"
    },
    "application/mbms-protection-description+xml": {
        "source": "iana"
    },
    "application/mbms-reception-report+xml": {
        "source": "iana"
    },
    "application/mbms-register+xml": {
        "source": "iana"
    },
    "application/mbms-register-response+xml": {
        "source": "iana"
    },
    "application/mbms-schedule+xml": {
        "source": "iana"
    },
    "application/mbms-user-service-description+xml": {
        "source": "iana"
    },
    "application/mbox": {
        "source": "iana",
        "extensions": [
            "mbox"
        ]
    },
    "application/media-policy-dataset+xml": {
        "source": "iana"
    },
    "application/media_control+xml": {
        "source": "iana"
    },
    "application/mediaservercontrol+xml": {
        "source": "iana",
        "extensions": [
            "mscml"
        ]
    },
    "application/merge-patch+json": {
        "source": "iana",
        "compressible": true
    },
    "application/metalink+xml": {
        "source": "apache",
        "extensions": [
            "metalink"
        ]
    },
    "application/metalink4+xml": {
        "source": "iana",
        "extensions": [
            "meta4"
        ]
    },
    "application/mets+xml": {
        "source": "iana",
        "extensions": [
            "mets"
        ]
    },
    "application/mf4": {
        "source": "iana"
    },
    "application/mikey": {
        "source": "iana"
    },
    "application/mods+xml": {
        "source": "iana",
        "extensions": [
            "mods"
        ]
    },
    "application/moss-keys": {
        "source": "iana"
    },
    "application/moss-signature": {
        "source": "iana"
    },
    "application/mosskey-data": {
        "source": "iana"
    },
    "application/mosskey-request": {
        "source": "iana"
    },
    "application/mp21": {
        "source": "iana",
        "extensions": [
            "m21",
            "mp21"
        ]
    },
    "application/mp4": {
        "source": "iana",
        "extensions": [
            "mp4s",
            "m4p"
        ]
    },
    "application/mpeg4-generic": {
        "source": "iana"
    },
    "application/mpeg4-iod": {
        "source": "iana"
    },
    "application/mpeg4-iod-xmt": {
        "source": "iana"
    },
    "application/mrb-consumer+xml": {
        "source": "iana"
    },
    "application/mrb-publish+xml": {
        "source": "iana"
    },
    "application/msc-ivr+xml": {
        "source": "iana"
    },
    "application/msc-mixer+xml": {
        "source": "iana"
    },
    "application/msword": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "doc",
            "dot"
        ]
    },
    "application/mxf": {
        "source": "iana",
        "extensions": [
            "mxf"
        ]
    },
    "application/nasdata": {
        "source": "iana"
    },
    "application/news-checkgroups": {
        "source": "iana"
    },
    "application/news-groupinfo": {
        "source": "iana"
    },
    "application/news-transmission": {
        "source": "iana"
    },
    "application/nlsml+xml": {
        "source": "iana"
    },
    "application/nss": {
        "source": "iana"
    },
    "application/ocsp-request": {
        "source": "iana"
    },
    "application/ocsp-response": {
        "source": "iana"
    },
    "application/octet-stream": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "bin",
            "dms",
            "lrf",
            "mar",
            "so",
            "dist",
            "distz",
            "pkg",
            "bpk",
            "dump",
            "elc",
            "deploy",
            "exe",
            "dll",
            "deb",
            "dmg",
            "iso",
            "img",
            "msi",
            "msp",
            "msm",
            "buffer"
        ]
    },
    "application/oda": {
        "source": "iana",
        "extensions": [
            "oda"
        ]
    },
    "application/odx": {
        "source": "iana"
    },
    "application/oebps-package+xml": {
        "source": "iana",
        "extensions": [
            "opf"
        ]
    },
    "application/ogg": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "ogx"
        ]
    },
    "application/omdoc+xml": {
        "source": "apache",
        "extensions": [
            "omdoc"
        ]
    },
    "application/onenote": {
        "source": "apache",
        "extensions": [
            "onetoc",
            "onetoc2",
            "onetmp",
            "onepkg"
        ]
    },
    "application/oxps": {
        "source": "iana",
        "extensions": [
            "oxps"
        ]
    },
    "application/p2p-overlay+xml": {
        "source": "iana"
    },
    "application/parityfec": {
        "source": "iana"
    },
    "application/patch-ops-error+xml": {
        "source": "iana",
        "extensions": [
            "xer"
        ]
    },
    "application/pdf": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "pdf"
        ]
    },
    "application/pdx": {
        "source": "iana"
    },
    "application/pgp-encrypted": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "pgp"
        ]
    },
    "application/pgp-keys": {
        "source": "iana"
    },
    "application/pgp-signature": {
        "source": "iana",
        "extensions": [
            "asc",
            "sig"
        ]
    },
    "application/pics-rules": {
        "source": "apache",
        "extensions": [
            "prf"
        ]
    },
    "application/pidf+xml": {
        "source": "iana"
    },
    "application/pidf-diff+xml": {
        "source": "iana"
    },
    "application/pkcs10": {
        "source": "iana",
        "extensions": [
            "p10"
        ]
    },
    "application/pkcs12": {
        "source": "iana"
    },
    "application/pkcs7-mime": {
        "source": "iana",
        "extensions": [
            "p7m",
            "p7c"
        ]
    },
    "application/pkcs7-signature": {
        "source": "iana",
        "extensions": [
            "p7s"
        ]
    },
    "application/pkcs8": {
        "source": "iana",
        "extensions": [
            "p8"
        ]
    },
    "application/pkix-attr-cert": {
        "source": "iana",
        "extensions": [
            "ac"
        ]
    },
    "application/pkix-cert": {
        "source": "iana",
        "extensions": [
            "cer"
        ]
    },
    "application/pkix-crl": {
        "source": "iana",
        "extensions": [
            "crl"
        ]
    },
    "application/pkix-pkipath": {
        "source": "iana",
        "extensions": [
            "pkipath"
        ]
    },
    "application/pkixcmp": {
        "source": "iana",
        "extensions": [
            "pki"
        ]
    },
    "application/pls+xml": {
        "source": "iana",
        "extensions": [
            "pls"
        ]
    },
    "application/poc-settings+xml": {
        "source": "iana"
    },
    "application/postscript": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "ai",
            "eps",
            "ps"
        ]
    },
    "application/provenance+xml": {
        "source": "iana"
    },
    "application/prs.alvestrand.titrax-sheet": {
        "source": "iana"
    },
    "application/prs.cww": {
        "source": "iana",
        "extensions": [
            "cww"
        ]
    },
    "application/prs.hpub+zip": {
        "source": "iana"
    },
    "application/prs.nprend": {
        "source": "iana"
    },
    "application/prs.plucker": {
        "source": "iana"
    },
    "application/prs.rdf-xml-crypt": {
        "source": "iana"
    },
    "application/prs.xsf+xml": {
        "source": "iana"
    },
    "application/pskc+xml": {
        "source": "iana",
        "extensions": [
            "pskcxml"
        ]
    },
    "application/qsig": {
        "source": "iana"
    },
    "application/raptorfec": {
        "source": "iana"
    },
    "application/rdap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/rdf+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "rdf"
        ]
    },
    "application/reginfo+xml": {
        "source": "iana",
        "extensions": [
            "rif"
        ]
    },
    "application/relax-ng-compact-syntax": {
        "source": "iana",
        "extensions": [
            "rnc"
        ]
    },
    "application/remote-printing": {
        "source": "iana"
    },
    "application/reputon+json": {
        "source": "iana",
        "compressible": true
    },
    "application/resource-lists+xml": {
        "source": "iana",
        "extensions": [
            "rl"
        ]
    },
    "application/resource-lists-diff+xml": {
        "source": "iana",
        "extensions": [
            "rld"
        ]
    },
    "application/rfc+xml": {
        "source": "iana"
    },
    "application/riscos": {
        "source": "iana"
    },
    "application/rlmi+xml": {
        "source": "iana"
    },
    "application/rls-services+xml": {
        "source": "iana",
        "extensions": [
            "rs"
        ]
    },
    "application/rpki-ghostbusters": {
        "source": "iana",
        "extensions": [
            "gbr"
        ]
    },
    "application/rpki-manifest": {
        "source": "iana",
        "extensions": [
            "mft"
        ]
    },
    "application/rpki-roa": {
        "source": "iana",
        "extensions": [
            "roa"
        ]
    },
    "application/rpki-updown": {
        "source": "iana"
    },
    "application/rsd+xml": {
        "source": "apache",
        "extensions": [
            "rsd"
        ]
    },
    "application/rss+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "rss"
        ]
    },
    "application/rtf": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "rtf"
        ]
    },
    "application/rtploopback": {
        "source": "iana"
    },
    "application/rtx": {
        "source": "iana"
    },
    "application/samlassertion+xml": {
        "source": "iana"
    },
    "application/samlmetadata+xml": {
        "source": "iana"
    },
    "application/sbml+xml": {
        "source": "iana",
        "extensions": [
            "sbml"
        ]
    },
    "application/scaip+xml": {
        "source": "iana"
    },
    "application/scim+json": {
        "source": "iana",
        "compressible": true
    },
    "application/scvp-cv-request": {
        "source": "iana",
        "extensions": [
            "scq"
        ]
    },
    "application/scvp-cv-response": {
        "source": "iana",
        "extensions": [
            "scs"
        ]
    },
    "application/scvp-vp-request": {
        "source": "iana",
        "extensions": [
            "spq"
        ]
    },
    "application/scvp-vp-response": {
        "source": "iana",
        "extensions": [
            "spp"
        ]
    },
    "application/sdp": {
        "source": "iana",
        "extensions": [
            "sdp"
        ]
    },
    "application/sep+xml": {
        "source": "iana"
    },
    "application/sep-exi": {
        "source": "iana"
    },
    "application/session-info": {
        "source": "iana"
    },
    "application/set-payment": {
        "source": "iana"
    },
    "application/set-payment-initiation": {
        "source": "iana",
        "extensions": [
            "setpay"
        ]
    },
    "application/set-registration": {
        "source": "iana"
    },
    "application/set-registration-initiation": {
        "source": "iana",
        "extensions": [
            "setreg"
        ]
    },
    "application/sgml": {
        "source": "iana"
    },
    "application/sgml-open-catalog": {
        "source": "iana"
    },
    "application/shf+xml": {
        "source": "iana",
        "extensions": [
            "shf"
        ]
    },
    "application/sieve": {
        "source": "iana"
    },
    "application/simple-filter+xml": {
        "source": "iana"
    },
    "application/simple-message-summary": {
        "source": "iana"
    },
    "application/simplesymbolcontainer": {
        "source": "iana"
    },
    "application/slate": {
        "source": "iana"
    },
    "application/smil": {
        "source": "iana"
    },
    "application/smil+xml": {
        "source": "iana",
        "extensions": [
            "smi",
            "smil"
        ]
    },
    "application/smpte336m": {
        "source": "iana"
    },
    "application/soap+fastinfoset": {
        "source": "iana"
    },
    "application/soap+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sparql-query": {
        "source": "iana",
        "extensions": [
            "rq"
        ]
    },
    "application/sparql-results+xml": {
        "source": "iana",
        "extensions": [
            "srx"
        ]
    },
    "application/spirits-event+xml": {
        "source": "iana"
    },
    "application/sql": {
        "source": "iana"
    },
    "application/srgs": {
        "source": "iana",
        "extensions": [
            "gram"
        ]
    },
    "application/srgs+xml": {
        "source": "iana",
        "extensions": [
            "grxml"
        ]
    },
    "application/sru+xml": {
        "source": "iana",
        "extensions": [
            "sru"
        ]
    },
    "application/ssdl+xml": {
        "source": "apache",
        "extensions": [
            "ssdl"
        ]
    },
    "application/ssml+xml": {
        "source": "iana",
        "extensions": [
            "ssml"
        ]
    },
    "application/tamp-apex-update": {
        "source": "iana"
    },
    "application/tamp-apex-update-confirm": {
        "source": "iana"
    },
    "application/tamp-community-update": {
        "source": "iana"
    },
    "application/tamp-community-update-confirm": {
        "source": "iana"
    },
    "application/tamp-error": {
        "source": "iana"
    },
    "application/tamp-sequence-adjust": {
        "source": "iana"
    },
    "application/tamp-sequence-adjust-confirm": {
        "source": "iana"
    },
    "application/tamp-status-query": {
        "source": "iana"
    },
    "application/tamp-status-response": {
        "source": "iana"
    },
    "application/tamp-update": {
        "source": "iana"
    },
    "application/tamp-update-confirm": {
        "source": "iana"
    },
    "application/tar": {
        "compressible": true
    },
    "application/tei+xml": {
        "source": "iana",
        "extensions": [
            "tei",
            "teicorpus"
        ]
    },
    "application/thraud+xml": {
        "source": "iana",
        "extensions": [
            "tfi"
        ]
    },
    "application/timestamp-query": {
        "source": "iana"
    },
    "application/timestamp-reply": {
        "source": "iana"
    },
    "application/timestamped-data": {
        "source": "iana",
        "extensions": [
            "tsd"
        ]
    },
    "application/ttml+xml": {
        "source": "iana"
    },
    "application/tve-trigger": {
        "source": "iana"
    },
    "application/ulpfec": {
        "source": "iana"
    },
    "application/urc-grpsheet+xml": {
        "source": "iana"
    },
    "application/urc-ressheet+xml": {
        "source": "iana"
    },
    "application/urc-targetdesc+xml": {
        "source": "iana"
    },
    "application/urc-uisocketdesc+xml": {
        "source": "iana"
    },
    "application/vcard+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vcard+xml": {
        "source": "iana"
    },
    "application/vemmi": {
        "source": "iana"
    },
    "application/vividence.scriptfile": {
        "source": "apache"
    },
    "application/vnd.3gpp-prose+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp-prose-pc3ch+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.access-transfer-events+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.bsf+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.mid-call+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.pic-bw-large": {
        "source": "iana",
        "extensions": [
            "plb"
        ]
    },
    "application/vnd.3gpp.pic-bw-small": {
        "source": "iana",
        "extensions": [
            "psb"
        ]
    },
    "application/vnd.3gpp.pic-bw-var": {
        "source": "iana",
        "extensions": [
            "pvb"
        ]
    },
    "application/vnd.3gpp.sms": {
        "source": "iana"
    },
    "application/vnd.3gpp.srvcc-ext+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.srvcc-info+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.state-and-event-info+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp.ussd+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp2.bcmcsinfo+xml": {
        "source": "iana"
    },
    "application/vnd.3gpp2.sms": {
        "source": "iana"
    },
    "application/vnd.3gpp2.tcap": {
        "source": "iana",
        "extensions": [
            "tcap"
        ]
    },
    "application/vnd.3m.post-it-notes": {
        "source": "iana",
        "extensions": [
            "pwn"
        ]
    },
    "application/vnd.accpac.simply.aso": {
        "source": "iana",
        "extensions": [
            "aso"
        ]
    },
    "application/vnd.accpac.simply.imp": {
        "source": "iana",
        "extensions": [
            "imp"
        ]
    },
    "application/vnd.acucobol": {
        "source": "iana",
        "extensions": [
            "acu"
        ]
    },
    "application/vnd.acucorp": {
        "source": "iana",
        "extensions": [
            "atc",
            "acutc"
        ]
    },
    "application/vnd.adobe.air-application-installer-package+zip": {
        "source": "apache",
        "extensions": [
            "air"
        ]
    },
    "application/vnd.adobe.flash.movie": {
        "source": "iana"
    },
    "application/vnd.adobe.formscentral.fcdt": {
        "source": "iana",
        "extensions": [
            "fcdt"
        ]
    },
    "application/vnd.adobe.fxp": {
        "source": "iana",
        "extensions": [
            "fxp",
            "fxpl"
        ]
    },
    "application/vnd.adobe.partial-upload": {
        "source": "iana"
    },
    "application/vnd.adobe.xdp+xml": {
        "source": "iana",
        "extensions": [
            "xdp"
        ]
    },
    "application/vnd.adobe.xfdf": {
        "source": "iana",
        "extensions": [
            "xfdf"
        ]
    },
    "application/vnd.aether.imp": {
        "source": "iana"
    },
    "application/vnd.ah-barcode": {
        "source": "iana"
    },
    "application/vnd.ahead.space": {
        "source": "iana",
        "extensions": [
            "ahead"
        ]
    },
    "application/vnd.airzip.filesecure.azf": {
        "source": "iana",
        "extensions": [
            "azf"
        ]
    },
    "application/vnd.airzip.filesecure.azs": {
        "source": "iana",
        "extensions": [
            "azs"
        ]
    },
    "application/vnd.amazon.ebook": {
        "source": "apache",
        "extensions": [
            "azw"
        ]
    },
    "application/vnd.americandynamics.acc": {
        "source": "iana",
        "extensions": [
            "acc"
        ]
    },
    "application/vnd.amiga.ami": {
        "source": "iana",
        "extensions": [
            "ami"
        ]
    },
    "application/vnd.amundsen.maze+xml": {
        "source": "iana"
    },
    "application/vnd.android.package-archive": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "apk"
        ]
    },
    "application/vnd.anki": {
        "source": "iana"
    },
    "application/vnd.anser-web-certificate-issue-initiation": {
        "source": "iana",
        "extensions": [
            "cii"
        ]
    },
    "application/vnd.anser-web-funds-transfer-initiation": {
        "source": "apache",
        "extensions": [
            "fti"
        ]
    },
    "application/vnd.antix.game-component": {
        "source": "iana",
        "extensions": [
            "atx"
        ]
    },
    "application/vnd.apache.thrift.binary": {
        "source": "iana"
    },
    "application/vnd.apache.thrift.compact": {
        "source": "iana"
    },
    "application/vnd.apache.thrift.json": {
        "source": "iana"
    },
    "application/vnd.api+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.apple.installer+xml": {
        "source": "iana",
        "extensions": [
            "mpkg"
        ]
    },
    "application/vnd.apple.mpegurl": {
        "source": "iana",
        "extensions": [
            "m3u8"
        ]
    },
    "application/vnd.apple.pkpass": {
        "compressible": false,
        "extensions": [
            "pkpass"
        ]
    },
    "application/vnd.arastra.swi": {
        "source": "iana"
    },
    "application/vnd.aristanetworks.swi": {
        "source": "iana",
        "extensions": [
            "swi"
        ]
    },
    "application/vnd.artsquare": {
        "source": "iana"
    },
    "application/vnd.astraea-software.iota": {
        "source": "iana",
        "extensions": [
            "iota"
        ]
    },
    "application/vnd.audiograph": {
        "source": "iana",
        "extensions": [
            "aep"
        ]
    },
    "application/vnd.autopackage": {
        "source": "iana"
    },
    "application/vnd.avistar+xml": {
        "source": "iana"
    },
    "application/vnd.balsamiq.bmml+xml": {
        "source": "iana"
    },
    "application/vnd.balsamiq.bmpr": {
        "source": "iana"
    },
    "application/vnd.bekitzur-stech+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.biopax.rdf+xml": {
        "source": "iana"
    },
    "application/vnd.blueice.multipass": {
        "source": "iana",
        "extensions": [
            "mpm"
        ]
    },
    "application/vnd.bluetooth.ep.oob": {
        "source": "iana"
    },
    "application/vnd.bluetooth.le.oob": {
        "source": "iana"
    },
    "application/vnd.bmi": {
        "source": "iana",
        "extensions": [
            "bmi"
        ]
    },
    "application/vnd.businessobjects": {
        "source": "iana",
        "extensions": [
            "rep"
        ]
    },
    "application/vnd.cab-jscript": {
        "source": "iana"
    },
    "application/vnd.canon-cpdl": {
        "source": "iana"
    },
    "application/vnd.canon-lips": {
        "source": "iana"
    },
    "application/vnd.cendio.thinlinc.clientconf": {
        "source": "iana"
    },
    "application/vnd.century-systems.tcp_stream": {
        "source": "iana"
    },
    "application/vnd.chemdraw+xml": {
        "source": "iana",
        "extensions": [
            "cdxml"
        ]
    },
    "application/vnd.chipnuts.karaoke-mmd": {
        "source": "iana",
        "extensions": [
            "mmd"
        ]
    },
    "application/vnd.cinderella": {
        "source": "iana",
        "extensions": [
            "cdy"
        ]
    },
    "application/vnd.cirpack.isdn-ext": {
        "source": "iana"
    },
    "application/vnd.citationstyles.style+xml": {
        "source": "iana"
    },
    "application/vnd.claymore": {
        "source": "iana",
        "extensions": [
            "cla"
        ]
    },
    "application/vnd.cloanto.rp9": {
        "source": "iana",
        "extensions": [
            "rp9"
        ]
    },
    "application/vnd.clonk.c4group": {
        "source": "iana",
        "extensions": [
            "c4g",
            "c4d",
            "c4f",
            "c4p",
            "c4u"
        ]
    },
    "application/vnd.cluetrust.cartomobile-config": {
        "source": "iana",
        "extensions": [
            "c11amc"
        ]
    },
    "application/vnd.cluetrust.cartomobile-config-pkg": {
        "source": "iana",
        "extensions": [
            "c11amz"
        ]
    },
    "application/vnd.coffeescript": {
        "source": "iana"
    },
    "application/vnd.collection+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.collection.doc+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.collection.next+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.commerce-battelle": {
        "source": "iana"
    },
    "application/vnd.commonspace": {
        "source": "iana",
        "extensions": [
            "csp"
        ]
    },
    "application/vnd.contact.cmsg": {
        "source": "iana",
        "extensions": [
            "cdbcmsg"
        ]
    },
    "application/vnd.cosmocaller": {
        "source": "iana",
        "extensions": [
            "cmc"
        ]
    },
    "application/vnd.crick.clicker": {
        "source": "iana",
        "extensions": [
            "clkx"
        ]
    },
    "application/vnd.crick.clicker.keyboard": {
        "source": "iana",
        "extensions": [
            "clkk"
        ]
    },
    "application/vnd.crick.clicker.palette": {
        "source": "iana",
        "extensions": [
            "clkp"
        ]
    },
    "application/vnd.crick.clicker.template": {
        "source": "iana",
        "extensions": [
            "clkt"
        ]
    },
    "application/vnd.crick.clicker.wordbank": {
        "source": "iana",
        "extensions": [
            "clkw"
        ]
    },
    "application/vnd.criticaltools.wbs+xml": {
        "source": "iana",
        "extensions": [
            "wbs"
        ]
    },
    "application/vnd.ctc-posml": {
        "source": "iana",
        "extensions": [
            "pml"
        ]
    },
    "application/vnd.ctct.ws+xml": {
        "source": "iana"
    },
    "application/vnd.cups-pdf": {
        "source": "iana"
    },
    "application/vnd.cups-postscript": {
        "source": "iana"
    },
    "application/vnd.cups-ppd": {
        "source": "iana",
        "extensions": [
            "ppd"
        ]
    },
    "application/vnd.cups-raster": {
        "source": "iana"
    },
    "application/vnd.cups-raw": {
        "source": "iana"
    },
    "application/vnd.curl": {
        "source": "iana"
    },
    "application/vnd.curl.car": {
        "source": "apache",
        "extensions": [
            "car"
        ]
    },
    "application/vnd.curl.pcurl": {
        "source": "apache",
        "extensions": [
            "pcurl"
        ]
    },
    "application/vnd.cyan.dean.root+xml": {
        "source": "iana"
    },
    "application/vnd.cybank": {
        "source": "iana"
    },
    "application/vnd.dart": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "dart"
        ]
    },
    "application/vnd.data-vision.rdz": {
        "source": "iana",
        "extensions": [
            "rdz"
        ]
    },
    "application/vnd.debian.binary-package": {
        "source": "iana"
    },
    "application/vnd.dece.data": {
        "source": "iana",
        "extensions": [
            "uvf",
            "uvvf",
            "uvd",
            "uvvd"
        ]
    },
    "application/vnd.dece.ttml+xml": {
        "source": "iana",
        "extensions": [
            "uvt",
            "uvvt"
        ]
    },
    "application/vnd.dece.unspecified": {
        "source": "iana",
        "extensions": [
            "uvx",
            "uvvx"
        ]
    },
    "application/vnd.dece.zip": {
        "source": "iana",
        "extensions": [
            "uvz",
            "uvvz"
        ]
    },
    "application/vnd.denovo.fcselayout-link": {
        "source": "iana",
        "extensions": [
            "fe_launch"
        ]
    },
    "application/vnd.desmume-movie": {
        "source": "iana"
    },
    "application/vnd.dir-bi.plate-dl-nosuffix": {
        "source": "iana"
    },
    "application/vnd.dm.delegation+xml": {
        "source": "iana"
    },
    "application/vnd.dna": {
        "source": "iana",
        "extensions": [
            "dna"
        ]
    },
    "application/vnd.document+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dolby.mlp": {
        "source": "apache",
        "extensions": [
            "mlp"
        ]
    },
    "application/vnd.dolby.mobile.1": {
        "source": "iana"
    },
    "application/vnd.dolby.mobile.2": {
        "source": "iana"
    },
    "application/vnd.doremir.scorecloud-binary-document": {
        "source": "iana"
    },
    "application/vnd.dpgraph": {
        "source": "iana",
        "extensions": [
            "dpg"
        ]
    },
    "application/vnd.dreamfactory": {
        "source": "iana",
        "extensions": [
            "dfac"
        ]
    },
    "application/vnd.drive+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ds-keypoint": {
        "source": "apache",
        "extensions": [
            "kpxx"
        ]
    },
    "application/vnd.dtg.local": {
        "source": "iana"
    },
    "application/vnd.dtg.local.flash": {
        "source": "iana"
    },
    "application/vnd.dtg.local.html": {
        "source": "iana"
    },
    "application/vnd.dvb.ait": {
        "source": "iana",
        "extensions": [
            "ait"
        ]
    },
    "application/vnd.dvb.dvbj": {
        "source": "iana"
    },
    "application/vnd.dvb.esgcontainer": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcdftnotifaccess": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgaccess": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgaccess2": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgpdd": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcroaming": {
        "source": "iana"
    },
    "application/vnd.dvb.iptv.alfec-base": {
        "source": "iana"
    },
    "application/vnd.dvb.iptv.alfec-enhancement": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-aggregate-root+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-container+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-generic+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-ia-msglist+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-ia-registration-request+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-ia-registration-response+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-init+xml": {
        "source": "iana"
    },
    "application/vnd.dvb.pfr": {
        "source": "iana"
    },
    "application/vnd.dvb.service": {
        "source": "iana",
        "extensions": [
            "svc"
        ]
    },
    "application/vnd.dxr": {
        "source": "iana"
    },
    "application/vnd.dynageo": {
        "source": "iana",
        "extensions": [
            "geo"
        ]
    },
    "application/vnd.dzr": {
        "source": "iana"
    },
    "application/vnd.easykaraoke.cdgdownload": {
        "source": "iana"
    },
    "application/vnd.ecdis-update": {
        "source": "iana"
    },
    "application/vnd.ecowin.chart": {
        "source": "iana",
        "extensions": [
            "mag"
        ]
    },
    "application/vnd.ecowin.filerequest": {
        "source": "iana"
    },
    "application/vnd.ecowin.fileupdate": {
        "source": "iana"
    },
    "application/vnd.ecowin.series": {
        "source": "iana"
    },
    "application/vnd.ecowin.seriesrequest": {
        "source": "iana"
    },
    "application/vnd.ecowin.seriesupdate": {
        "source": "iana"
    },
    "application/vnd.emclient.accessrequest+xml": {
        "source": "iana"
    },
    "application/vnd.enliven": {
        "source": "iana",
        "extensions": [
            "nml"
        ]
    },
    "application/vnd.enphase.envoy": {
        "source": "iana"
    },
    "application/vnd.eprints.data+xml": {
        "source": "iana"
    },
    "application/vnd.epson.esf": {
        "source": "iana",
        "extensions": [
            "esf"
        ]
    },
    "application/vnd.epson.msf": {
        "source": "iana",
        "extensions": [
            "msf"
        ]
    },
    "application/vnd.epson.quickanime": {
        "source": "iana",
        "extensions": [
            "qam"
        ]
    },
    "application/vnd.epson.salt": {
        "source": "iana",
        "extensions": [
            "slt"
        ]
    },
    "application/vnd.epson.ssf": {
        "source": "iana",
        "extensions": [
            "ssf"
        ]
    },
    "application/vnd.ericsson.quickcall": {
        "source": "iana"
    },
    "application/vnd.eszigno3+xml": {
        "source": "iana",
        "extensions": [
            "es3",
            "et3"
        ]
    },
    "application/vnd.etsi.aoc+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.asic-e+zip": {
        "source": "iana"
    },
    "application/vnd.etsi.asic-s+zip": {
        "source": "iana"
    },
    "application/vnd.etsi.cug+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvcommand+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvdiscovery+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvprofile+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvsad-bc+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvsad-cod+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvsad-npvr+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvservice+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvsync+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.iptvueprofile+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.mcid+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.mheg5": {
        "source": "iana"
    },
    "application/vnd.etsi.overload-control-policy-dataset+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.pstn+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.sci+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.simservs+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.timestamp-token": {
        "source": "iana"
    },
    "application/vnd.etsi.tsl+xml": {
        "source": "iana"
    },
    "application/vnd.etsi.tsl.der": {
        "source": "iana"
    },
    "application/vnd.eudora.data": {
        "source": "iana"
    },
    "application/vnd.ezpix-album": {
        "source": "iana",
        "extensions": [
            "ez2"
        ]
    },
    "application/vnd.ezpix-package": {
        "source": "iana",
        "extensions": [
            "ez3"
        ]
    },
    "application/vnd.f-secure.mobile": {
        "source": "iana"
    },
    "application/vnd.fastcopy-disk-image": {
        "source": "iana"
    },
    "application/vnd.fdf": {
        "source": "iana",
        "extensions": [
            "fdf"
        ]
    },
    "application/vnd.fdsn.mseed": {
        "source": "iana",
        "extensions": [
            "mseed"
        ]
    },
    "application/vnd.fdsn.seed": {
        "source": "iana",
        "extensions": [
            "seed",
            "dataless"
        ]
    },
    "application/vnd.ffsns": {
        "source": "iana"
    },
    "application/vnd.filmit.zfc": {
        "source": "iana"
    },
    "application/vnd.fints": {
        "source": "iana"
    },
    "application/vnd.firemonkeys.cloudcell": {
        "source": "iana"
    },
    "application/vnd.flographit": {
        "source": "iana",
        "extensions": [
            "gph"
        ]
    },
    "application/vnd.fluxtime.clip": {
        "source": "iana",
        "extensions": [
            "ftc"
        ]
    },
    "application/vnd.font-fontforge-sfd": {
        "source": "iana"
    },
    "application/vnd.framemaker": {
        "source": "iana",
        "extensions": [
            "fm",
            "frame",
            "maker",
            "book"
        ]
    },
    "application/vnd.frogans.fnc": {
        "source": "iana",
        "extensions": [
            "fnc"
        ]
    },
    "application/vnd.frogans.ltf": {
        "source": "iana",
        "extensions": [
            "ltf"
        ]
    },
    "application/vnd.fsc.weblaunch": {
        "source": "iana",
        "extensions": [
            "fsc"
        ]
    },
    "application/vnd.fujitsu.oasys": {
        "source": "iana",
        "extensions": [
            "oas"
        ]
    },
    "application/vnd.fujitsu.oasys2": {
        "source": "iana",
        "extensions": [
            "oa2"
        ]
    },
    "application/vnd.fujitsu.oasys3": {
        "source": "iana",
        "extensions": [
            "oa3"
        ]
    },
    "application/vnd.fujitsu.oasysgp": {
        "source": "iana",
        "extensions": [
            "fg5"
        ]
    },
    "application/vnd.fujitsu.oasysprs": {
        "source": "iana",
        "extensions": [
            "bh2"
        ]
    },
    "application/vnd.fujixerox.art-ex": {
        "source": "iana"
    },
    "application/vnd.fujixerox.art4": {
        "source": "iana"
    },
    "application/vnd.fujixerox.ddd": {
        "source": "iana",
        "extensions": [
            "ddd"
        ]
    },
    "application/vnd.fujixerox.docuworks": {
        "source": "iana",
        "extensions": [
            "xdw"
        ]
    },
    "application/vnd.fujixerox.docuworks.binder": {
        "source": "iana",
        "extensions": [
            "xbd"
        ]
    },
    "application/vnd.fujixerox.docuworks.container": {
        "source": "iana"
    },
    "application/vnd.fujixerox.hbpl": {
        "source": "iana"
    },
    "application/vnd.fut-misnet": {
        "source": "iana"
    },
    "application/vnd.fuzzysheet": {
        "source": "iana",
        "extensions": [
            "fzs"
        ]
    },
    "application/vnd.genomatix.tuxedo": {
        "source": "iana",
        "extensions": [
            "txd"
        ]
    },
    "application/vnd.geo+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.geocube+xml": {
        "source": "iana"
    },
    "application/vnd.geogebra.file": {
        "source": "iana",
        "extensions": [
            "ggb"
        ]
    },
    "application/vnd.geogebra.tool": {
        "source": "iana",
        "extensions": [
            "ggt"
        ]
    },
    "application/vnd.geometry-explorer": {
        "source": "iana",
        "extensions": [
            "gex",
            "gre"
        ]
    },
    "application/vnd.geonext": {
        "source": "iana",
        "extensions": [
            "gxt"
        ]
    },
    "application/vnd.geoplan": {
        "source": "iana",
        "extensions": [
            "g2w"
        ]
    },
    "application/vnd.geospace": {
        "source": "iana",
        "extensions": [
            "g3w"
        ]
    },
    "application/vnd.gerber": {
        "source": "iana"
    },
    "application/vnd.globalplatform.card-content-mgt": {
        "source": "iana"
    },
    "application/vnd.globalplatform.card-content-mgt-response": {
        "source": "iana"
    },
    "application/vnd.gmx": {
        "source": "iana",
        "extensions": [
            "gmx"
        ]
    },
    "application/vnd.google-apps.document": {
        "compressible": false,
        "extensions": [
            "gdoc"
        ]
    },
    "application/vnd.google-apps.presentation": {
        "compressible": false,
        "extensions": [
            "gslides"
        ]
    },
    "application/vnd.google-apps.spreadsheet": {
        "compressible": false,
        "extensions": [
            "gsheet"
        ]
    },
    "application/vnd.google-earth.kml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "kml"
        ]
    },
    "application/vnd.google-earth.kmz": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "kmz"
        ]
    },
    "application/vnd.gov.sk.e-form+xml": {
        "source": "iana"
    },
    "application/vnd.gov.sk.e-form+zip": {
        "source": "iana"
    },
    "application/vnd.gov.sk.xmldatacontainer+xml": {
        "source": "iana"
    },
    "application/vnd.grafeq": {
        "source": "iana",
        "extensions": [
            "gqf",
            "gqs"
        ]
    },
    "application/vnd.gridmp": {
        "source": "iana"
    },
    "application/vnd.groove-account": {
        "source": "iana",
        "extensions": [
            "gac"
        ]
    },
    "application/vnd.groove-help": {
        "source": "iana",
        "extensions": [
            "ghf"
        ]
    },
    "application/vnd.groove-identity-message": {
        "source": "iana",
        "extensions": [
            "gim"
        ]
    },
    "application/vnd.groove-injector": {
        "source": "iana",
        "extensions": [
            "grv"
        ]
    },
    "application/vnd.groove-tool-message": {
        "source": "iana",
        "extensions": [
            "gtm"
        ]
    },
    "application/vnd.groove-tool-template": {
        "source": "iana",
        "extensions": [
            "tpl"
        ]
    },
    "application/vnd.groove-vcard": {
        "source": "iana",
        "extensions": [
            "vcg"
        ]
    },
    "application/vnd.hal+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hal+xml": {
        "source": "iana",
        "extensions": [
            "hal"
        ]
    },
    "application/vnd.handheld-entertainment+xml": {
        "source": "iana",
        "extensions": [
            "zmm"
        ]
    },
    "application/vnd.hbci": {
        "source": "iana",
        "extensions": [
            "hbci"
        ]
    },
    "application/vnd.hcl-bireports": {
        "source": "iana"
    },
    "application/vnd.heroku+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hhe.lesson-player": {
        "source": "iana",
        "extensions": [
            "les"
        ]
    },
    "application/vnd.hp-hpgl": {
        "source": "iana",
        "extensions": [
            "hpgl"
        ]
    },
    "application/vnd.hp-hpid": {
        "source": "iana",
        "extensions": [
            "hpid"
        ]
    },
    "application/vnd.hp-hps": {
        "source": "iana",
        "extensions": [
            "hps"
        ]
    },
    "application/vnd.hp-jlyt": {
        "source": "iana",
        "extensions": [
            "jlt"
        ]
    },
    "application/vnd.hp-pcl": {
        "source": "iana",
        "extensions": [
            "pcl"
        ]
    },
    "application/vnd.hp-pclxl": {
        "source": "iana",
        "extensions": [
            "pclxl"
        ]
    },
    "application/vnd.httphone": {
        "source": "iana"
    },
    "application/vnd.hydrostatix.sof-data": {
        "source": "iana",
        "extensions": [
            "sfd-hdstx"
        ]
    },
    "application/vnd.hyperdrive+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hzn-3d-crossword": {
        "source": "iana"
    },
    "application/vnd.ibm.afplinedata": {
        "source": "iana"
    },
    "application/vnd.ibm.electronic-media": {
        "source": "iana"
    },
    "application/vnd.ibm.minipay": {
        "source": "iana",
        "extensions": [
            "mpy"
        ]
    },
    "application/vnd.ibm.modcap": {
        "source": "iana",
        "extensions": [
            "afp",
            "listafp",
            "list3820"
        ]
    },
    "application/vnd.ibm.rights-management": {
        "source": "iana",
        "extensions": [
            "irm"
        ]
    },
    "application/vnd.ibm.secure-container": {
        "source": "iana",
        "extensions": [
            "sc"
        ]
    },
    "application/vnd.iccprofile": {
        "source": "iana",
        "extensions": [
            "icc",
            "icm"
        ]
    },
    "application/vnd.ieee.1905": {
        "source": "iana"
    },
    "application/vnd.igloader": {
        "source": "iana",
        "extensions": [
            "igl"
        ]
    },
    "application/vnd.immervision-ivp": {
        "source": "iana",
        "extensions": [
            "ivp"
        ]
    },
    "application/vnd.immervision-ivu": {
        "source": "iana",
        "extensions": [
            "ivu"
        ]
    },
    "application/vnd.ims.imsccv1p1": {
        "source": "iana"
    },
    "application/vnd.ims.imsccv1p2": {
        "source": "iana"
    },
    "application/vnd.ims.imsccv1p3": {
        "source": "iana"
    },
    "application/vnd.ims.lis.v2.result+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolproxy+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolproxy.id+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolsettings+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.informedcontrol.rms+xml": {
        "source": "iana"
    },
    "application/vnd.informix-visionary": {
        "source": "iana"
    },
    "application/vnd.infotech.project": {
        "source": "iana"
    },
    "application/vnd.infotech.project+xml": {
        "source": "iana"
    },
    "application/vnd.innopath.wamp.notification": {
        "source": "iana"
    },
    "application/vnd.insors.igm": {
        "source": "iana",
        "extensions": [
            "igm"
        ]
    },
    "application/vnd.intercon.formnet": {
        "source": "iana",
        "extensions": [
            "xpw",
            "xpx"
        ]
    },
    "application/vnd.intergeo": {
        "source": "iana",
        "extensions": [
            "i2g"
        ]
    },
    "application/vnd.intertrust.digibox": {
        "source": "iana"
    },
    "application/vnd.intertrust.nncp": {
        "source": "iana"
    },
    "application/vnd.intu.qbo": {
        "source": "iana",
        "extensions": [
            "qbo"
        ]
    },
    "application/vnd.intu.qfx": {
        "source": "iana",
        "extensions": [
            "qfx"
        ]
    },
    "application/vnd.iptc.g2.catalogitem+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.conceptitem+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.knowledgeitem+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.newsitem+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.newsmessage+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.packageitem+xml": {
        "source": "iana"
    },
    "application/vnd.iptc.g2.planningitem+xml": {
        "source": "iana"
    },
    "application/vnd.ipunplugged.rcprofile": {
        "source": "iana",
        "extensions": [
            "rcprofile"
        ]
    },
    "application/vnd.irepository.package+xml": {
        "source": "iana",
        "extensions": [
            "irp"
        ]
    },
    "application/vnd.is-xpr": {
        "source": "iana",
        "extensions": [
            "xpr"
        ]
    },
    "application/vnd.isac.fcs": {
        "source": "iana",
        "extensions": [
            "fcs"
        ]
    },
    "application/vnd.jam": {
        "source": "iana",
        "extensions": [
            "jam"
        ]
    },
    "application/vnd.japannet-directory-service": {
        "source": "iana"
    },
    "application/vnd.japannet-jpnstore-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-payment-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-registration": {
        "source": "iana"
    },
    "application/vnd.japannet-registration-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-setstore-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-verification": {
        "source": "iana"
    },
    "application/vnd.japannet-verification-wakeup": {
        "source": "iana"
    },
    "application/vnd.jcp.javame.midlet-rms": {
        "source": "iana",
        "extensions": [
            "rms"
        ]
    },
    "application/vnd.jisp": {
        "source": "iana",
        "extensions": [
            "jisp"
        ]
    },
    "application/vnd.joost.joda-archive": {
        "source": "iana",
        "extensions": [
            "joda"
        ]
    },
    "application/vnd.jsk.isdn-ngn": {
        "source": "iana"
    },
    "application/vnd.kahootz": {
        "source": "iana",
        "extensions": [
            "ktz",
            "ktr"
        ]
    },
    "application/vnd.kde.karbon": {
        "source": "iana",
        "extensions": [
            "karbon"
        ]
    },
    "application/vnd.kde.kchart": {
        "source": "iana",
        "extensions": [
            "chrt"
        ]
    },
    "application/vnd.kde.kformula": {
        "source": "iana",
        "extensions": [
            "kfo"
        ]
    },
    "application/vnd.kde.kivio": {
        "source": "iana",
        "extensions": [
            "flw"
        ]
    },
    "application/vnd.kde.kontour": {
        "source": "iana",
        "extensions": [
            "kon"
        ]
    },
    "application/vnd.kde.kpresenter": {
        "source": "iana",
        "extensions": [
            "kpr",
            "kpt"
        ]
    },
    "application/vnd.kde.kspread": {
        "source": "iana",
        "extensions": [
            "ksp"
        ]
    },
    "application/vnd.kde.kword": {
        "source": "iana",
        "extensions": [
            "kwd",
            "kwt"
        ]
    },
    "application/vnd.kenameaapp": {
        "source": "iana",
        "extensions": [
            "htke"
        ]
    },
    "application/vnd.kidspiration": {
        "source": "iana",
        "extensions": [
            "kia"
        ]
    },
    "application/vnd.kinar": {
        "source": "iana",
        "extensions": [
            "kne",
            "knp"
        ]
    },
    "application/vnd.koan": {
        "source": "iana",
        "extensions": [
            "skp",
            "skd",
            "skt",
            "skm"
        ]
    },
    "application/vnd.kodak-descriptor": {
        "source": "iana",
        "extensions": [
            "sse"
        ]
    },
    "application/vnd.las.las+xml": {
        "source": "iana",
        "extensions": [
            "lasxml"
        ]
    },
    "application/vnd.liberty-request+xml": {
        "source": "iana"
    },
    "application/vnd.llamagraphics.life-balance.desktop": {
        "source": "iana",
        "extensions": [
            "lbd"
        ]
    },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
        "source": "iana",
        "extensions": [
            "lbe"
        ]
    },
    "application/vnd.lotus-1-2-3": {
        "source": "iana",
        "extensions": [
            "123"
        ]
    },
    "application/vnd.lotus-approach": {
        "source": "iana",
        "extensions": [
            "apr"
        ]
    },
    "application/vnd.lotus-freelance": {
        "source": "iana",
        "extensions": [
            "pre"
        ]
    },
    "application/vnd.lotus-notes": {
        "source": "iana",
        "extensions": [
            "nsf"
        ]
    },
    "application/vnd.lotus-organizer": {
        "source": "iana",
        "extensions": [
            "org"
        ]
    },
    "application/vnd.lotus-screencam": {
        "source": "iana",
        "extensions": [
            "scm"
        ]
    },
    "application/vnd.lotus-wordpro": {
        "source": "iana",
        "extensions": [
            "lwp"
        ]
    },
    "application/vnd.macports.portpkg": {
        "source": "iana",
        "extensions": [
            "portpkg"
        ]
    },
    "application/vnd.mapbox-vector-tile": {
        "source": "iana"
    },
    "application/vnd.marlin.drm.actiontoken+xml": {
        "source": "iana"
    },
    "application/vnd.marlin.drm.conftoken+xml": {
        "source": "iana"
    },
    "application/vnd.marlin.drm.license+xml": {
        "source": "iana"
    },
    "application/vnd.marlin.drm.mdcf": {
        "source": "iana"
    },
    "application/vnd.mason+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.maxmind.maxmind-db": {
        "source": "iana"
    },
    "application/vnd.mcd": {
        "source": "iana",
        "extensions": [
            "mcd"
        ]
    },
    "application/vnd.medcalcdata": {
        "source": "iana",
        "extensions": [
            "mc1"
        ]
    },
    "application/vnd.mediastation.cdkey": {
        "source": "iana",
        "extensions": [
            "cdkey"
        ]
    },
    "application/vnd.meridian-slingshot": {
        "source": "iana"
    },
    "application/vnd.mfer": {
        "source": "iana",
        "extensions": [
            "mwf"
        ]
    },
    "application/vnd.mfmp": {
        "source": "iana",
        "extensions": [
            "mfm"
        ]
    },
    "application/vnd.micro+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.micrografx.flo": {
        "source": "iana",
        "extensions": [
            "flo"
        ]
    },
    "application/vnd.micrografx.igx": {
        "source": "iana",
        "extensions": [
            "igx"
        ]
    },
    "application/vnd.microsoft.portable-executable": {
        "source": "iana"
    },
    "application/vnd.miele+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.mif": {
        "source": "iana",
        "extensions": [
            "mif"
        ]
    },
    "application/vnd.minisoft-hp3000-save": {
        "source": "iana"
    },
    "application/vnd.mitsubishi.misty-guard.trustweb": {
        "source": "iana"
    },
    "application/vnd.mobius.daf": {
        "source": "iana",
        "extensions": [
            "daf"
        ]
    },
    "application/vnd.mobius.dis": {
        "source": "iana",
        "extensions": [
            "dis"
        ]
    },
    "application/vnd.mobius.mbk": {
        "source": "iana",
        "extensions": [
            "mbk"
        ]
    },
    "application/vnd.mobius.mqy": {
        "source": "iana",
        "extensions": [
            "mqy"
        ]
    },
    "application/vnd.mobius.msl": {
        "source": "iana",
        "extensions": [
            "msl"
        ]
    },
    "application/vnd.mobius.plc": {
        "source": "iana",
        "extensions": [
            "plc"
        ]
    },
    "application/vnd.mobius.txf": {
        "source": "iana",
        "extensions": [
            "txf"
        ]
    },
    "application/vnd.mophun.application": {
        "source": "iana",
        "extensions": [
            "mpn"
        ]
    },
    "application/vnd.mophun.certificate": {
        "source": "iana",
        "extensions": [
            "mpc"
        ]
    },
    "application/vnd.motorola.flexsuite": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.adsi": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.fis": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.gotap": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.kmr": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.ttc": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.wem": {
        "source": "iana"
    },
    "application/vnd.motorola.iprm": {
        "source": "iana"
    },
    "application/vnd.mozilla.xul+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "xul"
        ]
    },
    "application/vnd.ms-3mfdocument": {
        "source": "iana"
    },
    "application/vnd.ms-artgalry": {
        "source": "iana",
        "extensions": [
            "cil"
        ]
    },
    "application/vnd.ms-asf": {
        "source": "iana"
    },
    "application/vnd.ms-cab-compressed": {
        "source": "iana",
        "extensions": [
            "cab"
        ]
    },
    "application/vnd.ms-color.iccprofile": {
        "source": "apache"
    },
    "application/vnd.ms-excel": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "xls",
            "xlm",
            "xla",
            "xlc",
            "xlt",
            "xlw"
        ]
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "xlam"
        ]
    },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "xlsb"
        ]
    },
    "application/vnd.ms-excel.sheet.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "xlsm"
        ]
    },
    "application/vnd.ms-excel.template.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "xltm"
        ]
    },
    "application/vnd.ms-fontobject": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "eot"
        ]
    },
    "application/vnd.ms-htmlhelp": {
        "source": "iana",
        "extensions": [
            "chm"
        ]
    },
    "application/vnd.ms-ims": {
        "source": "iana",
        "extensions": [
            "ims"
        ]
    },
    "application/vnd.ms-lrm": {
        "source": "iana",
        "extensions": [
            "lrm"
        ]
    },
    "application/vnd.ms-office.activex+xml": {
        "source": "iana"
    },
    "application/vnd.ms-officetheme": {
        "source": "iana",
        "extensions": [
            "thmx"
        ]
    },
    "application/vnd.ms-opentype": {
        "source": "apache",
        "compressible": true
    },
    "application/vnd.ms-package.obfuscated-opentype": {
        "source": "apache"
    },
    "application/vnd.ms-pki.seccat": {
        "source": "apache",
        "extensions": [
            "cat"
        ]
    },
    "application/vnd.ms-pki.stl": {
        "source": "apache",
        "extensions": [
            "stl"
        ]
    },
    "application/vnd.ms-playready.initiator+xml": {
        "source": "iana"
    },
    "application/vnd.ms-powerpoint": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "ppt",
            "pps",
            "pot"
        ]
    },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "ppam"
        ]
    },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "pptm"
        ]
    },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "sldm"
        ]
    },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "ppsm"
        ]
    },
    "application/vnd.ms-powerpoint.template.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "potm"
        ]
    },
    "application/vnd.ms-printdevicecapabilities+xml": {
        "source": "iana"
    },
    "application/vnd.ms-printing.printticket+xml": {
        "source": "apache"
    },
    "application/vnd.ms-project": {
        "source": "iana",
        "extensions": [
            "mpp",
            "mpt"
        ]
    },
    "application/vnd.ms-tnef": {
        "source": "iana"
    },
    "application/vnd.ms-windows.devicepairing": {
        "source": "iana"
    },
    "application/vnd.ms-windows.nwprinting.oob": {
        "source": "iana"
    },
    "application/vnd.ms-windows.printerpairing": {
        "source": "iana"
    },
    "application/vnd.ms-windows.wsd.oob": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.lic-chlg-req": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.lic-resp": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.meter-chlg-req": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.meter-resp": {
        "source": "iana"
    },
    "application/vnd.ms-word.document.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "docm"
        ]
    },
    "application/vnd.ms-word.template.macroenabled.12": {
        "source": "iana",
        "extensions": [
            "dotm"
        ]
    },
    "application/vnd.ms-works": {
        "source": "iana",
        "extensions": [
            "wps",
            "wks",
            "wcm",
            "wdb"
        ]
    },
    "application/vnd.ms-wpl": {
        "source": "iana",
        "extensions": [
            "wpl"
        ]
    },
    "application/vnd.ms-xpsdocument": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "xps"
        ]
    },
    "application/vnd.msa-disk-image": {
        "source": "iana"
    },
    "application/vnd.mseq": {
        "source": "iana",
        "extensions": [
            "mseq"
        ]
    },
    "application/vnd.msign": {
        "source": "iana"
    },
    "application/vnd.multiad.creator": {
        "source": "iana"
    },
    "application/vnd.multiad.creator.cif": {
        "source": "iana"
    },
    "application/vnd.music-niff": {
        "source": "iana"
    },
    "application/vnd.musician": {
        "source": "iana",
        "extensions": [
            "mus"
        ]
    },
    "application/vnd.muvee.style": {
        "source": "iana",
        "extensions": [
            "msty"
        ]
    },
    "application/vnd.mynfc": {
        "source": "iana",
        "extensions": [
            "taglet"
        ]
    },
    "application/vnd.ncd.control": {
        "source": "iana"
    },
    "application/vnd.ncd.reference": {
        "source": "iana"
    },
    "application/vnd.nervana": {
        "source": "iana"
    },
    "application/vnd.netfpx": {
        "source": "iana"
    },
    "application/vnd.neurolanguage.nlu": {
        "source": "iana",
        "extensions": [
            "nlu"
        ]
    },
    "application/vnd.nintendo.nitro.rom": {
        "source": "iana"
    },
    "application/vnd.nintendo.snes.rom": {
        "source": "iana"
    },
    "application/vnd.nitf": {
        "source": "iana",
        "extensions": [
            "ntf",
            "nitf"
        ]
    },
    "application/vnd.noblenet-directory": {
        "source": "iana",
        "extensions": [
            "nnd"
        ]
    },
    "application/vnd.noblenet-sealer": {
        "source": "iana",
        "extensions": [
            "nns"
        ]
    },
    "application/vnd.noblenet-web": {
        "source": "iana",
        "extensions": [
            "nnw"
        ]
    },
    "application/vnd.nokia.catalogs": {
        "source": "iana"
    },
    "application/vnd.nokia.conml+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.conml+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.iptv.config+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.isds-radio-presets": {
        "source": "iana"
    },
    "application/vnd.nokia.landmark+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.landmark+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.landmarkcollection+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.n-gage.ac+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.n-gage.data": {
        "source": "iana",
        "extensions": [
            "ngdat"
        ]
    },
    "application/vnd.nokia.n-gage.symbian.install": {
        "source": "iana",
        "extensions": [
            "n-gage"
        ]
    },
    "application/vnd.nokia.ncd": {
        "source": "iana"
    },
    "application/vnd.nokia.pcd+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.pcd+xml": {
        "source": "iana"
    },
    "application/vnd.nokia.radio-preset": {
        "source": "iana",
        "extensions": [
            "rpst"
        ]
    },
    "application/vnd.nokia.radio-presets": {
        "source": "iana",
        "extensions": [
            "rpss"
        ]
    },
    "application/vnd.novadigm.edm": {
        "source": "iana",
        "extensions": [
            "edm"
        ]
    },
    "application/vnd.novadigm.edx": {
        "source": "iana",
        "extensions": [
            "edx"
        ]
    },
    "application/vnd.novadigm.ext": {
        "source": "iana",
        "extensions": [
            "ext"
        ]
    },
    "application/vnd.ntt-local.content-share": {
        "source": "iana"
    },
    "application/vnd.ntt-local.file-transfer": {
        "source": "iana"
    },
    "application/vnd.ntt-local.ogw_remote-access": {
        "source": "iana"
    },
    "application/vnd.ntt-local.sip-ta_remote": {
        "source": "iana"
    },
    "application/vnd.ntt-local.sip-ta_tcp_stream": {
        "source": "iana"
    },
    "application/vnd.oasis.opendocument.chart": {
        "source": "iana",
        "extensions": [
            "odc"
        ]
    },
    "application/vnd.oasis.opendocument.chart-template": {
        "source": "iana",
        "extensions": [
            "otc"
        ]
    },
    "application/vnd.oasis.opendocument.database": {
        "source": "iana",
        "extensions": [
            "odb"
        ]
    },
    "application/vnd.oasis.opendocument.formula": {
        "source": "iana",
        "extensions": [
            "odf"
        ]
    },
    "application/vnd.oasis.opendocument.formula-template": {
        "source": "iana",
        "extensions": [
            "odft"
        ]
    },
    "application/vnd.oasis.opendocument.graphics": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "odg"
        ]
    },
    "application/vnd.oasis.opendocument.graphics-template": {
        "source": "iana",
        "extensions": [
            "otg"
        ]
    },
    "application/vnd.oasis.opendocument.image": {
        "source": "iana",
        "extensions": [
            "odi"
        ]
    },
    "application/vnd.oasis.opendocument.image-template": {
        "source": "iana",
        "extensions": [
            "oti"
        ]
    },
    "application/vnd.oasis.opendocument.presentation": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "odp"
        ]
    },
    "application/vnd.oasis.opendocument.presentation-template": {
        "source": "iana",
        "extensions": [
            "otp"
        ]
    },
    "application/vnd.oasis.opendocument.spreadsheet": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "ods"
        ]
    },
    "application/vnd.oasis.opendocument.spreadsheet-template": {
        "source": "iana",
        "extensions": [
            "ots"
        ]
    },
    "application/vnd.oasis.opendocument.text": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "odt"
        ]
    },
    "application/vnd.oasis.opendocument.text-master": {
        "source": "iana",
        "extensions": [
            "odm"
        ]
    },
    "application/vnd.oasis.opendocument.text-template": {
        "source": "iana",
        "extensions": [
            "ott"
        ]
    },
    "application/vnd.oasis.opendocument.text-web": {
        "source": "iana",
        "extensions": [
            "oth"
        ]
    },
    "application/vnd.obn": {
        "source": "iana"
    },
    "application/vnd.oftn.l10n+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.contentaccessdownload+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.contentaccessstreaming+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.cspg-hexbinary": {
        "source": "iana"
    },
    "application/vnd.oipf.dae.svg+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.dae.xhtml+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.mippvcontrolmessage+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.pae.gem": {
        "source": "iana"
    },
    "application/vnd.oipf.spdiscovery+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.spdlist+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.ueprofile+xml": {
        "source": "iana"
    },
    "application/vnd.oipf.userprofile+xml": {
        "source": "iana"
    },
    "application/vnd.olpc-sugar": {
        "source": "iana",
        "extensions": [
            "xo"
        ]
    },
    "application/vnd.oma-scws-config": {
        "source": "iana"
    },
    "application/vnd.oma-scws-http-request": {
        "source": "iana"
    },
    "application/vnd.oma-scws-http-response": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.drm-trigger+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.imd+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.ltkm": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.notification+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.provisioningtrigger": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sgboot": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sgdd+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sgdu": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.simple-symbol-container": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.smartcard-trigger+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sprov+xml": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.stkm": {
        "source": "iana"
    },
    "application/vnd.oma.cab-address-book+xml": {
        "source": "iana"
    },
    "application/vnd.oma.cab-feature-handler+xml": {
        "source": "iana"
    },
    "application/vnd.oma.cab-pcc+xml": {
        "source": "iana"
    },
    "application/vnd.oma.cab-subs-invite+xml": {
        "source": "iana"
    },
    "application/vnd.oma.cab-user-prefs+xml": {
        "source": "iana"
    },
    "application/vnd.oma.dcd": {
        "source": "iana"
    },
    "application/vnd.oma.dcdc": {
        "source": "iana"
    },
    "application/vnd.oma.dd2+xml": {
        "source": "iana",
        "extensions": [
            "dd2"
        ]
    },
    "application/vnd.oma.drm.risd+xml": {
        "source": "iana"
    },
    "application/vnd.oma.group-usage-list+xml": {
        "source": "iana"
    },
    "application/vnd.oma.pal+xml": {
        "source": "iana"
    },
    "application/vnd.oma.poc.detailed-progress-report+xml": {
        "source": "iana"
    },
    "application/vnd.oma.poc.final-report+xml": {
        "source": "iana"
    },
    "application/vnd.oma.poc.groups+xml": {
        "source": "iana"
    },
    "application/vnd.oma.poc.invocation-descriptor+xml": {
        "source": "iana"
    },
    "application/vnd.oma.poc.optimized-progress-report+xml": {
        "source": "iana"
    },
    "application/vnd.oma.push": {
        "source": "iana"
    },
    "application/vnd.oma.scidm.messages+xml": {
        "source": "iana"
    },
    "application/vnd.oma.xcap-directory+xml": {
        "source": "iana"
    },
    "application/vnd.omads-email+xml": {
        "source": "iana"
    },
    "application/vnd.omads-file+xml": {
        "source": "iana"
    },
    "application/vnd.omads-folder+xml": {
        "source": "iana"
    },
    "application/vnd.omaloc-supl-init": {
        "source": "iana"
    },
    "application/vnd.openblox.game+xml": {
        "source": "iana"
    },
    "application/vnd.openblox.game-binary": {
        "source": "iana"
    },
    "application/vnd.openeye.oeb": {
        "source": "iana"
    },
    "application/vnd.openofficeorg.extension": {
        "source": "apache",
        "extensions": [
            "oxt"
        ]
    },
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawing+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml-template": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "pptx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        "source": "iana",
        "extensions": [
            "sldx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        "source": "iana",
        "extensions": [
            "ppsx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template": {
        "source": "apache",
        "extensions": [
            "potx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml-template": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "xlsx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        "source": "apache",
        "extensions": [
            "xltx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.theme+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.vmldrawing": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml-template": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "docx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        "source": "apache",
        "extensions": [
            "dotx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-package.core-properties+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-package.relationships+xml": {
        "source": "iana"
    },
    "application/vnd.oracle.resource+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.orange.indata": {
        "source": "iana"
    },
    "application/vnd.osa.netdeploy": {
        "source": "iana"
    },
    "application/vnd.osgeo.mapguide.package": {
        "source": "iana",
        "extensions": [
            "mgp"
        ]
    },
    "application/vnd.osgi.bundle": {
        "source": "iana"
    },
    "application/vnd.osgi.dp": {
        "source": "iana",
        "extensions": [
            "dp"
        ]
    },
    "application/vnd.osgi.subsystem": {
        "source": "iana",
        "extensions": [
            "esa"
        ]
    },
    "application/vnd.otps.ct-kip+xml": {
        "source": "iana"
    },
    "application/vnd.oxli.countgraph": {
        "source": "iana"
    },
    "application/vnd.pagerduty+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.palm": {
        "source": "iana",
        "extensions": [
            "pdb",
            "pqa",
            "oprc"
        ]
    },
    "application/vnd.panoply": {
        "source": "iana"
    },
    "application/vnd.paos+xml": {
        "source": "iana"
    },
    "application/vnd.paos.xml": {
        "source": "apache"
    },
    "application/vnd.pawaafile": {
        "source": "iana",
        "extensions": [
            "paw"
        ]
    },
    "application/vnd.pcos": {
        "source": "iana"
    },
    "application/vnd.pg.format": {
        "source": "iana",
        "extensions": [
            "str"
        ]
    },
    "application/vnd.pg.osasli": {
        "source": "iana",
        "extensions": [
            "ei6"
        ]
    },
    "application/vnd.piaccess.application-licence": {
        "source": "iana"
    },
    "application/vnd.picsel": {
        "source": "iana",
        "extensions": [
            "efif"
        ]
    },
    "application/vnd.pmi.widget": {
        "source": "iana",
        "extensions": [
            "wg"
        ]
    },
    "application/vnd.poc.group-advertisement+xml": {
        "source": "iana"
    },
    "application/vnd.pocketlearn": {
        "source": "iana",
        "extensions": [
            "plf"
        ]
    },
    "application/vnd.powerbuilder6": {
        "source": "iana",
        "extensions": [
            "pbd"
        ]
    },
    "application/vnd.powerbuilder6-s": {
        "source": "iana"
    },
    "application/vnd.powerbuilder7": {
        "source": "iana"
    },
    "application/vnd.powerbuilder7-s": {
        "source": "iana"
    },
    "application/vnd.powerbuilder75": {
        "source": "iana"
    },
    "application/vnd.powerbuilder75-s": {
        "source": "iana"
    },
    "application/vnd.preminet": {
        "source": "iana"
    },
    "application/vnd.previewsystems.box": {
        "source": "iana",
        "extensions": [
            "box"
        ]
    },
    "application/vnd.proteus.magazine": {
        "source": "iana",
        "extensions": [
            "mgz"
        ]
    },
    "application/vnd.publishare-delta-tree": {
        "source": "iana",
        "extensions": [
            "qps"
        ]
    },
    "application/vnd.pvi.ptid1": {
        "source": "iana",
        "extensions": [
            "ptid"
        ]
    },
    "application/vnd.pwg-multiplexed": {
        "source": "iana"
    },
    "application/vnd.pwg-xhtml-print+xml": {
        "source": "iana"
    },
    "application/vnd.qualcomm.brew-app-res": {
        "source": "iana"
    },
    "application/vnd.quark.quarkxpress": {
        "source": "iana",
        "extensions": [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb"
        ]
    },
    "application/vnd.quobject-quoxdocument": {
        "source": "iana"
    },
    "application/vnd.radisys.moml+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-audit+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-audit-conf+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-audit-conn+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-audit-dialog+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-audit-stream+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-conf+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-base+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-group+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-speech+xml": {
        "source": "iana"
    },
    "application/vnd.radisys.msml-dialog-transform+xml": {
        "source": "iana"
    },
    "application/vnd.rainstor.data": {
        "source": "iana"
    },
    "application/vnd.rapid": {
        "source": "iana"
    },
    "application/vnd.realvnc.bed": {
        "source": "iana",
        "extensions": [
            "bed"
        ]
    },
    "application/vnd.recordare.musicxml": {
        "source": "iana",
        "extensions": [
            "mxl"
        ]
    },
    "application/vnd.recordare.musicxml+xml": {
        "source": "iana",
        "extensions": [
            "musicxml"
        ]
    },
    "application/vnd.renlearn.rlprint": {
        "source": "iana"
    },
    "application/vnd.rig.cryptonote": {
        "source": "iana",
        "extensions": [
            "cryptonote"
        ]
    },
    "application/vnd.rim.cod": {
        "source": "apache",
        "extensions": [
            "cod"
        ]
    },
    "application/vnd.rn-realmedia": {
        "source": "apache",
        "extensions": [
            "rm"
        ]
    },
    "application/vnd.rn-realmedia-vbr": {
        "source": "apache",
        "extensions": [
            "rmvb"
        ]
    },
    "application/vnd.route66.link66+xml": {
        "source": "iana",
        "extensions": [
            "link66"
        ]
    },
    "application/vnd.rs-274x": {
        "source": "iana"
    },
    "application/vnd.ruckus.download": {
        "source": "iana"
    },
    "application/vnd.s3sms": {
        "source": "iana"
    },
    "application/vnd.sailingtracker.track": {
        "source": "iana",
        "extensions": [
            "st"
        ]
    },
    "application/vnd.sbm.cid": {
        "source": "iana"
    },
    "application/vnd.sbm.mid2": {
        "source": "iana"
    },
    "application/vnd.scribus": {
        "source": "iana"
    },
    "application/vnd.sealed.3df": {
        "source": "iana"
    },
    "application/vnd.sealed.csf": {
        "source": "iana"
    },
    "application/vnd.sealed.doc": {
        "source": "iana"
    },
    "application/vnd.sealed.eml": {
        "source": "iana"
    },
    "application/vnd.sealed.mht": {
        "source": "iana"
    },
    "application/vnd.sealed.net": {
        "source": "iana"
    },
    "application/vnd.sealed.ppt": {
        "source": "iana"
    },
    "application/vnd.sealed.tiff": {
        "source": "iana"
    },
    "application/vnd.sealed.xls": {
        "source": "iana"
    },
    "application/vnd.sealedmedia.softseal.html": {
        "source": "iana"
    },
    "application/vnd.sealedmedia.softseal.pdf": {
        "source": "iana"
    },
    "application/vnd.seemail": {
        "source": "iana",
        "extensions": [
            "see"
        ]
    },
    "application/vnd.sema": {
        "source": "iana",
        "extensions": [
            "sema"
        ]
    },
    "application/vnd.semd": {
        "source": "iana",
        "extensions": [
            "semd"
        ]
    },
    "application/vnd.semf": {
        "source": "iana",
        "extensions": [
            "semf"
        ]
    },
    "application/vnd.shana.informed.formdata": {
        "source": "iana",
        "extensions": [
            "ifm"
        ]
    },
    "application/vnd.shana.informed.formtemplate": {
        "source": "iana",
        "extensions": [
            "itp"
        ]
    },
    "application/vnd.shana.informed.interchange": {
        "source": "iana",
        "extensions": [
            "iif"
        ]
    },
    "application/vnd.shana.informed.package": {
        "source": "iana",
        "extensions": [
            "ipk"
        ]
    },
    "application/vnd.simtech-mindmapper": {
        "source": "iana",
        "extensions": [
            "twd",
            "twds"
        ]
    },
    "application/vnd.siren+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.smaf": {
        "source": "iana",
        "extensions": [
            "mmf"
        ]
    },
    "application/vnd.smart.notebook": {
        "source": "iana"
    },
    "application/vnd.smart.teacher": {
        "source": "iana",
        "extensions": [
            "teacher"
        ]
    },
    "application/vnd.software602.filler.form+xml": {
        "source": "iana"
    },
    "application/vnd.software602.filler.form-xml-zip": {
        "source": "iana"
    },
    "application/vnd.solent.sdkm+xml": {
        "source": "iana",
        "extensions": [
            "sdkm",
            "sdkd"
        ]
    },
    "application/vnd.spotfire.dxp": {
        "source": "iana",
        "extensions": [
            "dxp"
        ]
    },
    "application/vnd.spotfire.sfs": {
        "source": "iana",
        "extensions": [
            "sfs"
        ]
    },
    "application/vnd.sss-cod": {
        "source": "iana"
    },
    "application/vnd.sss-dtf": {
        "source": "iana"
    },
    "application/vnd.sss-ntf": {
        "source": "iana"
    },
    "application/vnd.stardivision.calc": {
        "source": "apache",
        "extensions": [
            "sdc"
        ]
    },
    "application/vnd.stardivision.draw": {
        "source": "apache",
        "extensions": [
            "sda"
        ]
    },
    "application/vnd.stardivision.impress": {
        "source": "apache",
        "extensions": [
            "sdd"
        ]
    },
    "application/vnd.stardivision.math": {
        "source": "apache",
        "extensions": [
            "smf"
        ]
    },
    "application/vnd.stardivision.writer": {
        "source": "apache",
        "extensions": [
            "sdw",
            "vor"
        ]
    },
    "application/vnd.stardivision.writer-global": {
        "source": "apache",
        "extensions": [
            "sgl"
        ]
    },
    "application/vnd.stepmania.package": {
        "source": "iana",
        "extensions": [
            "smzip"
        ]
    },
    "application/vnd.stepmania.stepchart": {
        "source": "iana",
        "extensions": [
            "sm"
        ]
    },
    "application/vnd.street-stream": {
        "source": "iana"
    },
    "application/vnd.sun.wadl+xml": {
        "source": "iana"
    },
    "application/vnd.sun.xml.calc": {
        "source": "apache",
        "extensions": [
            "sxc"
        ]
    },
    "application/vnd.sun.xml.calc.template": {
        "source": "apache",
        "extensions": [
            "stc"
        ]
    },
    "application/vnd.sun.xml.draw": {
        "source": "apache",
        "extensions": [
            "sxd"
        ]
    },
    "application/vnd.sun.xml.draw.template": {
        "source": "apache",
        "extensions": [
            "std"
        ]
    },
    "application/vnd.sun.xml.impress": {
        "source": "apache",
        "extensions": [
            "sxi"
        ]
    },
    "application/vnd.sun.xml.impress.template": {
        "source": "apache",
        "extensions": [
            "sti"
        ]
    },
    "application/vnd.sun.xml.math": {
        "source": "apache",
        "extensions": [
            "sxm"
        ]
    },
    "application/vnd.sun.xml.writer": {
        "source": "apache",
        "extensions": [
            "sxw"
        ]
    },
    "application/vnd.sun.xml.writer.global": {
        "source": "apache",
        "extensions": [
            "sxg"
        ]
    },
    "application/vnd.sun.xml.writer.template": {
        "source": "apache",
        "extensions": [
            "stw"
        ]
    },
    "application/vnd.sus-calendar": {
        "source": "iana",
        "extensions": [
            "sus",
            "susp"
        ]
    },
    "application/vnd.svd": {
        "source": "iana",
        "extensions": [
            "svd"
        ]
    },
    "application/vnd.swiftview-ics": {
        "source": "iana"
    },
    "application/vnd.symbian.install": {
        "source": "apache",
        "extensions": [
            "sis",
            "sisx"
        ]
    },
    "application/vnd.syncml+xml": {
        "source": "iana",
        "extensions": [
            "xsm"
        ]
    },
    "application/vnd.syncml.dm+wbxml": {
        "source": "iana",
        "extensions": [
            "bdm"
        ]
    },
    "application/vnd.syncml.dm+xml": {
        "source": "iana",
        "extensions": [
            "xdm"
        ]
    },
    "application/vnd.syncml.dm.notification": {
        "source": "iana"
    },
    "application/vnd.syncml.dmddf+wbxml": {
        "source": "iana"
    },
    "application/vnd.syncml.dmddf+xml": {
        "source": "iana"
    },
    "application/vnd.syncml.dmtnds+wbxml": {
        "source": "iana"
    },
    "application/vnd.syncml.dmtnds+xml": {
        "source": "iana"
    },
    "application/vnd.syncml.ds.notification": {
        "source": "iana"
    },
    "application/vnd.tao.intent-module-archive": {
        "source": "iana",
        "extensions": [
            "tao"
        ]
    },
    "application/vnd.tcpdump.pcap": {
        "source": "iana",
        "extensions": [
            "pcap",
            "cap",
            "dmp"
        ]
    },
    "application/vnd.tmd.mediaflex.api+xml": {
        "source": "iana"
    },
    "application/vnd.tml": {
        "source": "iana"
    },
    "application/vnd.tmobile-livetv": {
        "source": "iana",
        "extensions": [
            "tmo"
        ]
    },
    "application/vnd.trid.tpt": {
        "source": "iana",
        "extensions": [
            "tpt"
        ]
    },
    "application/vnd.triscape.mxs": {
        "source": "iana",
        "extensions": [
            "mxs"
        ]
    },
    "application/vnd.trueapp": {
        "source": "iana",
        "extensions": [
            "tra"
        ]
    },
    "application/vnd.truedoc": {
        "source": "iana"
    },
    "application/vnd.ubisoft.webplayer": {
        "source": "iana"
    },
    "application/vnd.ufdl": {
        "source": "iana",
        "extensions": [
            "ufd",
            "ufdl"
        ]
    },
    "application/vnd.uiq.theme": {
        "source": "iana",
        "extensions": [
            "utz"
        ]
    },
    "application/vnd.umajin": {
        "source": "iana",
        "extensions": [
            "umj"
        ]
    },
    "application/vnd.unity": {
        "source": "iana",
        "extensions": [
            "unityweb"
        ]
    },
    "application/vnd.uoml+xml": {
        "source": "iana",
        "extensions": [
            "uoml"
        ]
    },
    "application/vnd.uplanet.alert": {
        "source": "iana"
    },
    "application/vnd.uplanet.alert-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.bearer-choice": {
        "source": "iana"
    },
    "application/vnd.uplanet.bearer-choice-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.cacheop": {
        "source": "iana"
    },
    "application/vnd.uplanet.cacheop-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.channel": {
        "source": "iana"
    },
    "application/vnd.uplanet.channel-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.list": {
        "source": "iana"
    },
    "application/vnd.uplanet.list-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.listcmd": {
        "source": "iana"
    },
    "application/vnd.uplanet.listcmd-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.signal": {
        "source": "iana"
    },
    "application/vnd.uri-map": {
        "source": "iana"
    },
    "application/vnd.valve.source.material": {
        "source": "iana"
    },
    "application/vnd.vcx": {
        "source": "iana",
        "extensions": [
            "vcx"
        ]
    },
    "application/vnd.vd-study": {
        "source": "iana"
    },
    "application/vnd.vectorworks": {
        "source": "iana"
    },
    "application/vnd.verimatrix.vcas": {
        "source": "iana"
    },
    "application/vnd.vidsoft.vidconference": {
        "source": "iana"
    },
    "application/vnd.visio": {
        "source": "iana",
        "extensions": [
            "vsd",
            "vst",
            "vss",
            "vsw"
        ]
    },
    "application/vnd.visionary": {
        "source": "iana",
        "extensions": [
            "vis"
        ]
    },
    "application/vnd.vividence.scriptfile": {
        "source": "iana"
    },
    "application/vnd.vsf": {
        "source": "iana",
        "extensions": [
            "vsf"
        ]
    },
    "application/vnd.wap.sic": {
        "source": "iana"
    },
    "application/vnd.wap.slc": {
        "source": "iana"
    },
    "application/vnd.wap.wbxml": {
        "source": "iana",
        "extensions": [
            "wbxml"
        ]
    },
    "application/vnd.wap.wmlc": {
        "source": "iana",
        "extensions": [
            "wmlc"
        ]
    },
    "application/vnd.wap.wmlscriptc": {
        "source": "iana",
        "extensions": [
            "wmlsc"
        ]
    },
    "application/vnd.webturbo": {
        "source": "iana",
        "extensions": [
            "wtb"
        ]
    },
    "application/vnd.wfa.p2p": {
        "source": "iana"
    },
    "application/vnd.wfa.wsc": {
        "source": "iana"
    },
    "application/vnd.windows.devicepairing": {
        "source": "iana"
    },
    "application/vnd.wmc": {
        "source": "iana"
    },
    "application/vnd.wmf.bootstrap": {
        "source": "iana"
    },
    "application/vnd.wolfram.mathematica": {
        "source": "iana"
    },
    "application/vnd.wolfram.mathematica.package": {
        "source": "iana"
    },
    "application/vnd.wolfram.player": {
        "source": "iana",
        "extensions": [
            "nbp"
        ]
    },
    "application/vnd.wordperfect": {
        "source": "iana",
        "extensions": [
            "wpd"
        ]
    },
    "application/vnd.wqd": {
        "source": "iana",
        "extensions": [
            "wqd"
        ]
    },
    "application/vnd.wrq-hp3000-labelled": {
        "source": "iana"
    },
    "application/vnd.wt.stf": {
        "source": "iana",
        "extensions": [
            "stf"
        ]
    },
    "application/vnd.wv.csp+wbxml": {
        "source": "iana"
    },
    "application/vnd.wv.csp+xml": {
        "source": "iana"
    },
    "application/vnd.wv.ssp+xml": {
        "source": "iana"
    },
    "application/vnd.xacml+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.xara": {
        "source": "iana",
        "extensions": [
            "xar"
        ]
    },
    "application/vnd.xfdl": {
        "source": "iana",
        "extensions": [
            "xfdl"
        ]
    },
    "application/vnd.xfdl.webform": {
        "source": "iana"
    },
    "application/vnd.xmi+xml": {
        "source": "iana"
    },
    "application/vnd.xmpie.cpkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.dpkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.plan": {
        "source": "iana"
    },
    "application/vnd.xmpie.ppkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.xlim": {
        "source": "iana"
    },
    "application/vnd.yamaha.hv-dic": {
        "source": "iana",
        "extensions": [
            "hvd"
        ]
    },
    "application/vnd.yamaha.hv-script": {
        "source": "iana",
        "extensions": [
            "hvs"
        ]
    },
    "application/vnd.yamaha.hv-voice": {
        "source": "iana",
        "extensions": [
            "hvp"
        ]
    },
    "application/vnd.yamaha.openscoreformat": {
        "source": "iana",
        "extensions": [
            "osf"
        ]
    },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        "source": "iana",
        "extensions": [
            "osfpvg"
        ]
    },
    "application/vnd.yamaha.remote-setup": {
        "source": "iana"
    },
    "application/vnd.yamaha.smaf-audio": {
        "source": "iana",
        "extensions": [
            "saf"
        ]
    },
    "application/vnd.yamaha.smaf-phrase": {
        "source": "iana",
        "extensions": [
            "spf"
        ]
    },
    "application/vnd.yamaha.through-ngn": {
        "source": "iana"
    },
    "application/vnd.yamaha.tunnel-udpencap": {
        "source": "iana"
    },
    "application/vnd.yaoweme": {
        "source": "iana"
    },
    "application/vnd.yellowriver-custom-menu": {
        "source": "iana",
        "extensions": [
            "cmp"
        ]
    },
    "application/vnd.zul": {
        "source": "iana",
        "extensions": [
            "zir",
            "zirz"
        ]
    },
    "application/vnd.zzazz.deck+xml": {
        "source": "iana",
        "extensions": [
            "zaz"
        ]
    },
    "application/voicexml+xml": {
        "source": "iana",
        "extensions": [
            "vxml"
        ]
    },
    "application/vq-rtcpxr": {
        "source": "iana"
    },
    "application/watcherinfo+xml": {
        "source": "iana"
    },
    "application/whoispp-query": {
        "source": "iana"
    },
    "application/whoispp-response": {
        "source": "iana"
    },
    "application/widget": {
        "source": "iana",
        "extensions": [
            "wgt"
        ]
    },
    "application/winhlp": {
        "source": "apache",
        "extensions": [
            "hlp"
        ]
    },
    "application/wita": {
        "source": "iana"
    },
    "application/wordperfect5.1": {
        "source": "iana"
    },
    "application/wsdl+xml": {
        "source": "iana",
        "extensions": [
            "wsdl"
        ]
    },
    "application/wspolicy+xml": {
        "source": "iana",
        "extensions": [
            "wspolicy"
        ]
    },
    "application/x-7z-compressed": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "7z"
        ]
    },
    "application/x-abiword": {
        "source": "apache",
        "extensions": [
            "abw"
        ]
    },
    "application/x-ace-compressed": {
        "source": "apache",
        "extensions": [
            "ace"
        ]
    },
    "application/x-amf": {
        "source": "apache"
    },
    "application/x-apple-diskimage": {
        "source": "apache",
        "extensions": [
            "dmg"
        ]
    },
    "application/x-authorware-bin": {
        "source": "apache",
        "extensions": [
            "aab",
            "x32",
            "u32",
            "vox"
        ]
    },
    "application/x-authorware-map": {
        "source": "apache",
        "extensions": [
            "aam"
        ]
    },
    "application/x-authorware-seg": {
        "source": "apache",
        "extensions": [
            "aas"
        ]
    },
    "application/x-bcpio": {
        "source": "apache",
        "extensions": [
            "bcpio"
        ]
    },
    "application/x-bdoc": {
        "compressible": false,
        "extensions": [
            "bdoc"
        ]
    },
    "application/x-bittorrent": {
        "source": "apache",
        "extensions": [
            "torrent"
        ]
    },
    "application/x-blorb": {
        "source": "apache",
        "extensions": [
            "blb",
            "blorb"
        ]
    },
    "application/x-bzip": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "bz"
        ]
    },
    "application/x-bzip2": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "bz2",
            "boz"
        ]
    },
    "application/x-cbr": {
        "source": "apache",
        "extensions": [
            "cbr",
            "cba",
            "cbt",
            "cbz",
            "cb7"
        ]
    },
    "application/x-cdlink": {
        "source": "apache",
        "extensions": [
            "vcd"
        ]
    },
    "application/x-cfs-compressed": {
        "source": "apache",
        "extensions": [
            "cfs"
        ]
    },
    "application/x-chat": {
        "source": "apache",
        "extensions": [
            "chat"
        ]
    },
    "application/x-chess-pgn": {
        "source": "apache",
        "extensions": [
            "pgn"
        ]
    },
    "application/x-chrome-extension": {
        "extensions": [
            "crx"
        ]
    },
    "application/x-cocoa": {
        "source": "nginx",
        "extensions": [
            "cco"
        ]
    },
    "application/x-compress": {
        "source": "apache"
    },
    "application/x-conference": {
        "source": "apache",
        "extensions": [
            "nsc"
        ]
    },
    "application/x-cpio": {
        "source": "apache",
        "extensions": [
            "cpio"
        ]
    },
    "application/x-csh": {
        "source": "apache",
        "extensions": [
            "csh"
        ]
    },
    "application/x-deb": {
        "compressible": false
    },
    "application/x-debian-package": {
        "source": "apache",
        "extensions": [
            "deb",
            "udeb"
        ]
    },
    "application/x-dgc-compressed": {
        "source": "apache",
        "extensions": [
            "dgc"
        ]
    },
    "application/x-director": {
        "source": "apache",
        "extensions": [
            "dir",
            "dcr",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ]
    },
    "application/x-doom": {
        "source": "apache",
        "extensions": [
            "wad"
        ]
    },
    "application/x-dtbncx+xml": {
        "source": "apache",
        "extensions": [
            "ncx"
        ]
    },
    "application/x-dtbook+xml": {
        "source": "apache",
        "extensions": [
            "dtb"
        ]
    },
    "application/x-dtbresource+xml": {
        "source": "apache",
        "extensions": [
            "res"
        ]
    },
    "application/x-dvi": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "dvi"
        ]
    },
    "application/x-envoy": {
        "source": "apache",
        "extensions": [
            "evy"
        ]
    },
    "application/x-eva": {
        "source": "apache",
        "extensions": [
            "eva"
        ]
    },
    "application/x-font-bdf": {
        "source": "apache",
        "extensions": [
            "bdf"
        ]
    },
    "application/x-font-dos": {
        "source": "apache"
    },
    "application/x-font-framemaker": {
        "source": "apache"
    },
    "application/x-font-ghostscript": {
        "source": "apache",
        "extensions": [
            "gsf"
        ]
    },
    "application/x-font-libgrx": {
        "source": "apache"
    },
    "application/x-font-linux-psf": {
        "source": "apache",
        "extensions": [
            "psf"
        ]
    },
    "application/x-font-otf": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "otf"
        ]
    },
    "application/x-font-pcf": {
        "source": "apache",
        "extensions": [
            "pcf"
        ]
    },
    "application/x-font-snf": {
        "source": "apache",
        "extensions": [
            "snf"
        ]
    },
    "application/x-font-speedo": {
        "source": "apache"
    },
    "application/x-font-sunos-news": {
        "source": "apache"
    },
    "application/x-font-ttf": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "ttf",
            "ttc"
        ]
    },
    "application/x-font-type1": {
        "source": "apache",
        "extensions": [
            "pfa",
            "pfb",
            "pfm",
            "afm"
        ]
    },
    "application/x-font-vfont": {
        "source": "apache"
    },
    "application/x-freearc": {
        "source": "apache",
        "extensions": [
            "arc"
        ]
    },
    "application/x-futuresplash": {
        "source": "apache",
        "extensions": [
            "spl"
        ]
    },
    "application/x-gca-compressed": {
        "source": "apache",
        "extensions": [
            "gca"
        ]
    },
    "application/x-glulx": {
        "source": "apache",
        "extensions": [
            "ulx"
        ]
    },
    "application/x-gnumeric": {
        "source": "apache",
        "extensions": [
            "gnumeric"
        ]
    },
    "application/x-gramps-xml": {
        "source": "apache",
        "extensions": [
            "gramps"
        ]
    },
    "application/x-gtar": {
        "source": "apache",
        "extensions": [
            "gtar"
        ]
    },
    "application/x-gzip": {
        "source": "apache"
    },
    "application/x-hdf": {
        "source": "apache",
        "extensions": [
            "hdf"
        ]
    },
    "application/x-httpd-php": {
        "compressible": true,
        "extensions": [
            "php"
        ]
    },
    "application/x-install-instructions": {
        "source": "apache",
        "extensions": [
            "install"
        ]
    },
    "application/x-iso9660-image": {
        "source": "apache",
        "extensions": [
            "iso"
        ]
    },
    "application/x-java-archive-diff": {
        "source": "nginx",
        "extensions": [
            "jardiff"
        ]
    },
    "application/x-java-jnlp-file": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "jnlp"
        ]
    },
    "application/x-javascript": {
        "compressible": true
    },
    "application/x-latex": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "latex"
        ]
    },
    "application/x-lua-bytecode": {
        "extensions": [
            "luac"
        ]
    },
    "application/x-lzh-compressed": {
        "source": "apache",
        "extensions": [
            "lzh",
            "lha"
        ]
    },
    "application/x-makeself": {
        "source": "nginx",
        "extensions": [
            "run"
        ]
    },
    "application/x-mie": {
        "source": "apache",
        "extensions": [
            "mie"
        ]
    },
    "application/x-mobipocket-ebook": {
        "source": "apache",
        "extensions": [
            "prc",
            "mobi"
        ]
    },
    "application/x-mpegurl": {
        "compressible": false
    },
    "application/x-ms-application": {
        "source": "apache",
        "extensions": [
            "application"
        ]
    },
    "application/x-ms-shortcut": {
        "source": "apache",
        "extensions": [
            "lnk"
        ]
    },
    "application/x-ms-wmd": {
        "source": "apache",
        "extensions": [
            "wmd"
        ]
    },
    "application/x-ms-wmz": {
        "source": "apache",
        "extensions": [
            "wmz"
        ]
    },
    "application/x-ms-xbap": {
        "source": "apache",
        "extensions": [
            "xbap"
        ]
    },
    "application/x-msaccess": {
        "source": "apache",
        "extensions": [
            "mdb"
        ]
    },
    "application/x-msbinder": {
        "source": "apache",
        "extensions": [
            "obd"
        ]
    },
    "application/x-mscardfile": {
        "source": "apache",
        "extensions": [
            "crd"
        ]
    },
    "application/x-msclip": {
        "source": "apache",
        "extensions": [
            "clp"
        ]
    },
    "application/x-msdos-program": {
        "extensions": [
            "exe"
        ]
    },
    "application/x-msdownload": {
        "source": "apache",
        "extensions": [
            "exe",
            "dll",
            "com",
            "bat",
            "msi"
        ]
    },
    "application/x-msmediaview": {
        "source": "apache",
        "extensions": [
            "mvb",
            "m13",
            "m14"
        ]
    },
    "application/x-msmetafile": {
        "source": "apache",
        "extensions": [
            "wmf",
            "wmz",
            "emf",
            "emz"
        ]
    },
    "application/x-msmoney": {
        "source": "apache",
        "extensions": [
            "mny"
        ]
    },
    "application/x-mspublisher": {
        "source": "apache",
        "extensions": [
            "pub"
        ]
    },
    "application/x-msschedule": {
        "source": "apache",
        "extensions": [
            "scd"
        ]
    },
    "application/x-msterminal": {
        "source": "apache",
        "extensions": [
            "trm"
        ]
    },
    "application/x-mswrite": {
        "source": "apache",
        "extensions": [
            "wri"
        ]
    },
    "application/x-netcdf": {
        "source": "apache",
        "extensions": [
            "nc",
            "cdf"
        ]
    },
    "application/x-ns-proxy-autoconfig": {
        "compressible": true,
        "extensions": [
            "pac"
        ]
    },
    "application/x-nzb": {
        "source": "apache",
        "extensions": [
            "nzb"
        ]
    },
    "application/x-perl": {
        "source": "nginx",
        "extensions": [
            "pl",
            "pm"
        ]
    },
    "application/x-pilot": {
        "source": "nginx",
        "extensions": [
            "prc",
            "pdb"
        ]
    },
    "application/x-pkcs12": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "p12",
            "pfx"
        ]
    },
    "application/x-pkcs7-certificates": {
        "source": "apache",
        "extensions": [
            "p7b",
            "spc"
        ]
    },
    "application/x-pkcs7-certreqresp": {
        "source": "apache",
        "extensions": [
            "p7r"
        ]
    },
    "application/x-rar-compressed": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "rar"
        ]
    },
    "application/x-redhat-package-manager": {
        "source": "nginx",
        "extensions": [
            "rpm"
        ]
    },
    "application/x-research-info-systems": {
        "source": "apache",
        "extensions": [
            "ris"
        ]
    },
    "application/x-sea": {
        "source": "nginx",
        "extensions": [
            "sea"
        ]
    },
    "application/x-sh": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "sh"
        ]
    },
    "application/x-shar": {
        "source": "apache",
        "extensions": [
            "shar"
        ]
    },
    "application/x-shockwave-flash": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "swf"
        ]
    },
    "application/x-silverlight-app": {
        "source": "apache",
        "extensions": [
            "xap"
        ]
    },
    "application/x-sql": {
        "source": "apache",
        "extensions": [
            "sql"
        ]
    },
    "application/x-stuffit": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "sit"
        ]
    },
    "application/x-stuffitx": {
        "source": "apache",
        "extensions": [
            "sitx"
        ]
    },
    "application/x-subrip": {
        "source": "apache",
        "extensions": [
            "srt"
        ]
    },
    "application/x-sv4cpio": {
        "source": "apache",
        "extensions": [
            "sv4cpio"
        ]
    },
    "application/x-sv4crc": {
        "source": "apache",
        "extensions": [
            "sv4crc"
        ]
    },
    "application/x-t3vm-image": {
        "source": "apache",
        "extensions": [
            "t3"
        ]
    },
    "application/x-tads": {
        "source": "apache",
        "extensions": [
            "gam"
        ]
    },
    "application/x-tar": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "tar"
        ]
    },
    "application/x-tcl": {
        "source": "apache",
        "extensions": [
            "tcl",
            "tk"
        ]
    },
    "application/x-tex": {
        "source": "apache",
        "extensions": [
            "tex"
        ]
    },
    "application/x-tex-tfm": {
        "source": "apache",
        "extensions": [
            "tfm"
        ]
    },
    "application/x-texinfo": {
        "source": "apache",
        "extensions": [
            "texinfo",
            "texi"
        ]
    },
    "application/x-tgif": {
        "source": "apache",
        "extensions": [
            "obj"
        ]
    },
    "application/x-ustar": {
        "source": "apache",
        "extensions": [
            "ustar"
        ]
    },
    "application/x-wais-source": {
        "source": "apache",
        "extensions": [
            "src"
        ]
    },
    "application/x-web-app-manifest+json": {
        "compressible": true,
        "extensions": [
            "webapp"
        ]
    },
    "application/x-www-form-urlencoded": {
        "source": "iana",
        "compressible": true
    },
    "application/x-x509-ca-cert": {
        "source": "apache",
        "extensions": [
            "der",
            "crt",
            "pem"
        ]
    },
    "application/x-xfig": {
        "source": "apache",
        "extensions": [
            "fig"
        ]
    },
    "application/x-xliff+xml": {
        "source": "apache",
        "extensions": [
            "xlf"
        ]
    },
    "application/x-xpinstall": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "xpi"
        ]
    },
    "application/x-xz": {
        "source": "apache",
        "extensions": [
            "xz"
        ]
    },
    "application/x-zmachine": {
        "source": "apache",
        "extensions": [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8"
        ]
    },
    "application/x400-bp": {
        "source": "iana"
    },
    "application/xacml+xml": {
        "source": "iana"
    },
    "application/xaml+xml": {
        "source": "apache",
        "extensions": [
            "xaml"
        ]
    },
    "application/xcap-att+xml": {
        "source": "iana"
    },
    "application/xcap-caps+xml": {
        "source": "iana"
    },
    "application/xcap-diff+xml": {
        "source": "iana",
        "extensions": [
            "xdf"
        ]
    },
    "application/xcap-el+xml": {
        "source": "iana"
    },
    "application/xcap-error+xml": {
        "source": "iana"
    },
    "application/xcap-ns+xml": {
        "source": "iana"
    },
    "application/xcon-conference-info+xml": {
        "source": "iana"
    },
    "application/xcon-conference-info-diff+xml": {
        "source": "iana"
    },
    "application/xenc+xml": {
        "source": "iana",
        "extensions": [
            "xenc"
        ]
    },
    "application/xhtml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "xhtml",
            "xht"
        ]
    },
    "application/xhtml-voice+xml": {
        "source": "apache"
    },
    "application/xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "xml",
            "xsl",
            "xsd"
        ]
    },
    "application/xml-dtd": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "dtd"
        ]
    },
    "application/xml-external-parsed-entity": {
        "source": "iana"
    },
    "application/xml-patch+xml": {
        "source": "iana"
    },
    "application/xmpp+xml": {
        "source": "iana"
    },
    "application/xop+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "xop"
        ]
    },
    "application/xproc+xml": {
        "source": "apache",
        "extensions": [
            "xpl"
        ]
    },
    "application/xslt+xml": {
        "source": "iana",
        "extensions": [
            "xslt"
        ]
    },
    "application/xspf+xml": {
        "source": "apache",
        "extensions": [
            "xspf"
        ]
    },
    "application/xv+xml": {
        "source": "iana",
        "extensions": [
            "mxml",
            "xhvml",
            "xvml",
            "xvm"
        ]
    },
    "application/yang": {
        "source": "iana",
        "extensions": [
            "yang"
        ]
    },
    "application/yin+xml": {
        "source": "iana",
        "extensions": [
            "yin"
        ]
    },
    "application/zip": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "zip"
        ]
    },
    "application/zlib": {
        "source": "iana"
    },
    "audio/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "audio/32kadpcm": {
        "source": "iana"
    },
    "audio/3gpp": {
        "source": "iana"
    },
    "audio/3gpp2": {
        "source": "iana"
    },
    "audio/ac3": {
        "source": "iana"
    },
    "audio/adpcm": {
        "source": "apache",
        "extensions": [
            "adp"
        ]
    },
    "audio/amr": {
        "source": "iana"
    },
    "audio/amr-wb": {
        "source": "iana"
    },
    "audio/amr-wb+": {
        "source": "iana"
    },
    "audio/aptx": {
        "source": "iana"
    },
    "audio/asc": {
        "source": "iana"
    },
    "audio/atrac-advanced-lossless": {
        "source": "iana"
    },
    "audio/atrac-x": {
        "source": "iana"
    },
    "audio/atrac3": {
        "source": "iana"
    },
    "audio/basic": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "au",
            "snd"
        ]
    },
    "audio/bv16": {
        "source": "iana"
    },
    "audio/bv32": {
        "source": "iana"
    },
    "audio/clearmode": {
        "source": "iana"
    },
    "audio/cn": {
        "source": "iana"
    },
    "audio/dat12": {
        "source": "iana"
    },
    "audio/dls": {
        "source": "iana"
    },
    "audio/dsr-es201108": {
        "source": "iana"
    },
    "audio/dsr-es202050": {
        "source": "iana"
    },
    "audio/dsr-es202211": {
        "source": "iana"
    },
    "audio/dsr-es202212": {
        "source": "iana"
    },
    "audio/dv": {
        "source": "iana"
    },
    "audio/dvi4": {
        "source": "iana"
    },
    "audio/eac3": {
        "source": "iana"
    },
    "audio/encaprtp": {
        "source": "iana"
    },
    "audio/evrc": {
        "source": "iana"
    },
    "audio/evrc-qcp": {
        "source": "iana"
    },
    "audio/evrc0": {
        "source": "iana"
    },
    "audio/evrc1": {
        "source": "iana"
    },
    "audio/evrcb": {
        "source": "iana"
    },
    "audio/evrcb0": {
        "source": "iana"
    },
    "audio/evrcb1": {
        "source": "iana"
    },
    "audio/evrcnw": {
        "source": "iana"
    },
    "audio/evrcnw0": {
        "source": "iana"
    },
    "audio/evrcnw1": {
        "source": "iana"
    },
    "audio/evrcwb": {
        "source": "iana"
    },
    "audio/evrcwb0": {
        "source": "iana"
    },
    "audio/evrcwb1": {
        "source": "iana"
    },
    "audio/evs": {
        "source": "iana"
    },
    "audio/fwdred": {
        "source": "iana"
    },
    "audio/g711-0": {
        "source": "iana"
    },
    "audio/g719": {
        "source": "iana"
    },
    "audio/g722": {
        "source": "iana"
    },
    "audio/g7221": {
        "source": "iana"
    },
    "audio/g723": {
        "source": "iana"
    },
    "audio/g726-16": {
        "source": "iana"
    },
    "audio/g726-24": {
        "source": "iana"
    },
    "audio/g726-32": {
        "source": "iana"
    },
    "audio/g726-40": {
        "source": "iana"
    },
    "audio/g728": {
        "source": "iana"
    },
    "audio/g729": {
        "source": "iana"
    },
    "audio/g7291": {
        "source": "iana"
    },
    "audio/g729d": {
        "source": "iana"
    },
    "audio/g729e": {
        "source": "iana"
    },
    "audio/gsm": {
        "source": "iana"
    },
    "audio/gsm-efr": {
        "source": "iana"
    },
    "audio/gsm-hr-08": {
        "source": "iana"
    },
    "audio/ilbc": {
        "source": "iana"
    },
    "audio/ip-mr_v2.5": {
        "source": "iana"
    },
    "audio/isac": {
        "source": "apache"
    },
    "audio/l16": {
        "source": "iana"
    },
    "audio/l20": {
        "source": "iana"
    },
    "audio/l24": {
        "source": "iana",
        "compressible": false
    },
    "audio/l8": {
        "source": "iana"
    },
    "audio/lpc": {
        "source": "iana"
    },
    "audio/midi": {
        "source": "apache",
        "extensions": [
            "mid",
            "midi",
            "kar",
            "rmi"
        ]
    },
    "audio/mobile-xmf": {
        "source": "iana"
    },
    "audio/mp4": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "mp4a",
            "m4a"
        ]
    },
    "audio/mp4a-latm": {
        "source": "iana"
    },
    "audio/mpa": {
        "source": "iana"
    },
    "audio/mpa-robust": {
        "source": "iana"
    },
    "audio/mpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "mpga",
            "mp2",
            "mp2a",
            "mp3",
            "m2a",
            "m3a"
        ]
    },
    "audio/mpeg4-generic": {
        "source": "iana"
    },
    "audio/musepack": {
        "source": "apache"
    },
    "audio/ogg": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "oga",
            "ogg",
            "spx"
        ]
    },
    "audio/opus": {
        "source": "iana"
    },
    "audio/parityfec": {
        "source": "iana"
    },
    "audio/pcma": {
        "source": "iana"
    },
    "audio/pcma-wb": {
        "source": "iana"
    },
    "audio/pcmu": {
        "source": "iana"
    },
    "audio/pcmu-wb": {
        "source": "iana"
    },
    "audio/prs.sid": {
        "source": "iana"
    },
    "audio/qcelp": {
        "source": "iana"
    },
    "audio/raptorfec": {
        "source": "iana"
    },
    "audio/red": {
        "source": "iana"
    },
    "audio/rtp-enc-aescm128": {
        "source": "iana"
    },
    "audio/rtp-midi": {
        "source": "iana"
    },
    "audio/rtploopback": {
        "source": "iana"
    },
    "audio/rtx": {
        "source": "iana"
    },
    "audio/s3m": {
        "source": "apache",
        "extensions": [
            "s3m"
        ]
    },
    "audio/silk": {
        "source": "apache",
        "extensions": [
            "sil"
        ]
    },
    "audio/smv": {
        "source": "iana"
    },
    "audio/smv-qcp": {
        "source": "iana"
    },
    "audio/smv0": {
        "source": "iana"
    },
    "audio/sp-midi": {
        "source": "iana"
    },
    "audio/speex": {
        "source": "iana"
    },
    "audio/t140c": {
        "source": "iana"
    },
    "audio/t38": {
        "source": "iana"
    },
    "audio/telephone-event": {
        "source": "iana"
    },
    "audio/tone": {
        "source": "iana"
    },
    "audio/uemclip": {
        "source": "iana"
    },
    "audio/ulpfec": {
        "source": "iana"
    },
    "audio/vdvi": {
        "source": "iana"
    },
    "audio/vmr-wb": {
        "source": "iana"
    },
    "audio/vnd.3gpp.iufp": {
        "source": "iana"
    },
    "audio/vnd.4sb": {
        "source": "iana"
    },
    "audio/vnd.audiokoz": {
        "source": "iana"
    },
    "audio/vnd.celp": {
        "source": "iana"
    },
    "audio/vnd.cisco.nse": {
        "source": "iana"
    },
    "audio/vnd.cmles.radio-events": {
        "source": "iana"
    },
    "audio/vnd.cns.anp1": {
        "source": "iana"
    },
    "audio/vnd.cns.inf1": {
        "source": "iana"
    },
    "audio/vnd.dece.audio": {
        "source": "iana",
        "extensions": [
            "uva",
            "uvva"
        ]
    },
    "audio/vnd.digital-winds": {
        "source": "iana",
        "extensions": [
            "eol"
        ]
    },
    "audio/vnd.dlna.adts": {
        "source": "iana"
    },
    "audio/vnd.dolby.heaac.1": {
        "source": "iana"
    },
    "audio/vnd.dolby.heaac.2": {
        "source": "iana"
    },
    "audio/vnd.dolby.mlp": {
        "source": "iana"
    },
    "audio/vnd.dolby.mps": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2x": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2z": {
        "source": "iana"
    },
    "audio/vnd.dolby.pulse.1": {
        "source": "iana"
    },
    "audio/vnd.dra": {
        "source": "iana",
        "extensions": [
            "dra"
        ]
    },
    "audio/vnd.dts": {
        "source": "iana",
        "extensions": [
            "dts"
        ]
    },
    "audio/vnd.dts.hd": {
        "source": "iana",
        "extensions": [
            "dtshd"
        ]
    },
    "audio/vnd.dvb.file": {
        "source": "iana"
    },
    "audio/vnd.everad.plj": {
        "source": "iana"
    },
    "audio/vnd.hns.audio": {
        "source": "iana"
    },
    "audio/vnd.lucent.voice": {
        "source": "iana",
        "extensions": [
            "lvp"
        ]
    },
    "audio/vnd.ms-playready.media.pya": {
        "source": "iana",
        "extensions": [
            "pya"
        ]
    },
    "audio/vnd.nokia.mobile-xmf": {
        "source": "iana"
    },
    "audio/vnd.nortel.vbk": {
        "source": "iana"
    },
    "audio/vnd.nuera.ecelp4800": {
        "source": "iana",
        "extensions": [
            "ecelp4800"
        ]
    },
    "audio/vnd.nuera.ecelp7470": {
        "source": "iana",
        "extensions": [
            "ecelp7470"
        ]
    },
    "audio/vnd.nuera.ecelp9600": {
        "source": "iana",
        "extensions": [
            "ecelp9600"
        ]
    },
    "audio/vnd.octel.sbc": {
        "source": "iana"
    },
    "audio/vnd.qcelp": {
        "source": "iana"
    },
    "audio/vnd.rhetorex.32kadpcm": {
        "source": "iana"
    },
    "audio/vnd.rip": {
        "source": "iana",
        "extensions": [
            "rip"
        ]
    },
    "audio/vnd.rn-realaudio": {
        "compressible": false
    },
    "audio/vnd.sealedmedia.softseal.mpeg": {
        "source": "iana"
    },
    "audio/vnd.vmx.cvsd": {
        "source": "iana"
    },
    "audio/vnd.wave": {
        "compressible": false
    },
    "audio/vorbis": {
        "source": "iana",
        "compressible": false
    },
    "audio/vorbis-config": {
        "source": "iana"
    },
    "audio/wav": {
        "compressible": false,
        "extensions": [
            "wav"
        ]
    },
    "audio/wave": {
        "compressible": false,
        "extensions": [
            "wav"
        ]
    },
    "audio/webm": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "weba"
        ]
    },
    "audio/x-aac": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "aac"
        ]
    },
    "audio/x-aiff": {
        "source": "apache",
        "extensions": [
            "aif",
            "aiff",
            "aifc"
        ]
    },
    "audio/x-caf": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "caf"
        ]
    },
    "audio/x-flac": {
        "source": "apache",
        "extensions": [
            "flac"
        ]
    },
    "audio/x-m4a": {
        "source": "nginx",
        "extensions": [
            "m4a"
        ]
    },
    "audio/x-matroska": {
        "source": "apache",
        "extensions": [
            "mka"
        ]
    },
    "audio/x-mpegurl": {
        "source": "apache",
        "extensions": [
            "m3u"
        ]
    },
    "audio/x-ms-wax": {
        "source": "apache",
        "extensions": [
            "wax"
        ]
    },
    "audio/x-ms-wma": {
        "source": "apache",
        "extensions": [
            "wma"
        ]
    },
    "audio/x-pn-realaudio": {
        "source": "apache",
        "extensions": [
            "ram",
            "ra"
        ]
    },
    "audio/x-pn-realaudio-plugin": {
        "source": "apache",
        "extensions": [
            "rmp"
        ]
    },
    "audio/x-realaudio": {
        "source": "nginx",
        "extensions": [
            "ra"
        ]
    },
    "audio/x-tta": {
        "source": "apache"
    },
    "audio/x-wav": {
        "source": "apache",
        "extensions": [
            "wav"
        ]
    },
    "audio/xm": {
        "source": "apache",
        "extensions": [
            "xm"
        ]
    },
    "chemical/x-cdx": {
        "source": "apache",
        "extensions": [
            "cdx"
        ]
    },
    "chemical/x-cif": {
        "source": "apache",
        "extensions": [
            "cif"
        ]
    },
    "chemical/x-cmdf": {
        "source": "apache",
        "extensions": [
            "cmdf"
        ]
    },
    "chemical/x-cml": {
        "source": "apache",
        "extensions": [
            "cml"
        ]
    },
    "chemical/x-csml": {
        "source": "apache",
        "extensions": [
            "csml"
        ]
    },
    "chemical/x-pdb": {
        "source": "apache"
    },
    "chemical/x-xyz": {
        "source": "apache",
        "extensions": [
            "xyz"
        ]
    },
    "font/opentype": {
        "compressible": true,
        "extensions": [
            "otf"
        ]
    },
    "image/bmp": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "bmp"
        ]
    },
    "image/cgm": {
        "source": "iana",
        "extensions": [
            "cgm"
        ]
    },
    "image/fits": {
        "source": "iana"
    },
    "image/g3fax": {
        "source": "iana",
        "extensions": [
            "g3"
        ]
    },
    "image/gif": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "gif"
        ]
    },
    "image/ief": {
        "source": "iana",
        "extensions": [
            "ief"
        ]
    },
    "image/jp2": {
        "source": "iana"
    },
    "image/jpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "jpeg",
            "jpg",
            "jpe"
        ]
    },
    "image/jpm": {
        "source": "iana"
    },
    "image/jpx": {
        "source": "iana"
    },
    "image/ktx": {
        "source": "iana",
        "extensions": [
            "ktx"
        ]
    },
    "image/naplps": {
        "source": "iana"
    },
    "image/pjpeg": {
        "compressible": false
    },
    "image/png": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "png"
        ]
    },
    "image/prs.btif": {
        "source": "iana",
        "extensions": [
            "btif"
        ]
    },
    "image/prs.pti": {
        "source": "iana"
    },
    "image/pwg-raster": {
        "source": "iana"
    },
    "image/sgi": {
        "source": "apache",
        "extensions": [
            "sgi"
        ]
    },
    "image/svg+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "svg",
            "svgz"
        ]
    },
    "image/t38": {
        "source": "iana"
    },
    "image/tiff": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "tiff",
            "tif"
        ]
    },
    "image/tiff-fx": {
        "source": "iana"
    },
    "image/vnd.adobe.photoshop": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "psd"
        ]
    },
    "image/vnd.airzip.accelerator.azv": {
        "source": "iana"
    },
    "image/vnd.cns.inf2": {
        "source": "iana"
    },
    "image/vnd.dece.graphic": {
        "source": "iana",
        "extensions": [
            "uvi",
            "uvvi",
            "uvg",
            "uvvg"
        ]
    },
    "image/vnd.djvu": {
        "source": "iana",
        "extensions": [
            "djvu",
            "djv"
        ]
    },
    "image/vnd.dvb.subtitle": {
        "source": "iana",
        "extensions": [
            "sub"
        ]
    },
    "image/vnd.dwg": {
        "source": "iana",
        "extensions": [
            "dwg"
        ]
    },
    "image/vnd.dxf": {
        "source": "iana",
        "extensions": [
            "dxf"
        ]
    },
    "image/vnd.fastbidsheet": {
        "source": "iana",
        "extensions": [
            "fbs"
        ]
    },
    "image/vnd.fpx": {
        "source": "iana",
        "extensions": [
            "fpx"
        ]
    },
    "image/vnd.fst": {
        "source": "iana",
        "extensions": [
            "fst"
        ]
    },
    "image/vnd.fujixerox.edmics-mmr": {
        "source": "iana",
        "extensions": [
            "mmr"
        ]
    },
    "image/vnd.fujixerox.edmics-rlc": {
        "source": "iana",
        "extensions": [
            "rlc"
        ]
    },
    "image/vnd.globalgraphics.pgb": {
        "source": "iana"
    },
    "image/vnd.microsoft.icon": {
        "source": "iana"
    },
    "image/vnd.mix": {
        "source": "iana"
    },
    "image/vnd.mozilla.apng": {
        "source": "iana"
    },
    "image/vnd.ms-modi": {
        "source": "iana",
        "extensions": [
            "mdi"
        ]
    },
    "image/vnd.ms-photo": {
        "source": "apache",
        "extensions": [
            "wdp"
        ]
    },
    "image/vnd.net-fpx": {
        "source": "iana",
        "extensions": [
            "npx"
        ]
    },
    "image/vnd.radiance": {
        "source": "iana"
    },
    "image/vnd.sealed.png": {
        "source": "iana"
    },
    "image/vnd.sealedmedia.softseal.gif": {
        "source": "iana"
    },
    "image/vnd.sealedmedia.softseal.jpg": {
        "source": "iana"
    },
    "image/vnd.svf": {
        "source": "iana"
    },
    "image/vnd.tencent.tap": {
        "source": "iana"
    },
    "image/vnd.valve.source.texture": {
        "source": "iana"
    },
    "image/vnd.wap.wbmp": {
        "source": "iana",
        "extensions": [
            "wbmp"
        ]
    },
    "image/vnd.xiff": {
        "source": "iana",
        "extensions": [
            "xif"
        ]
    },
    "image/vnd.zbrush.pcx": {
        "source": "iana"
    },
    "image/webp": {
        "source": "apache",
        "extensions": [
            "webp"
        ]
    },
    "image/x-3ds": {
        "source": "apache",
        "extensions": [
            "3ds"
        ]
    },
    "image/x-cmu-raster": {
        "source": "apache",
        "extensions": [
            "ras"
        ]
    },
    "image/x-cmx": {
        "source": "apache",
        "extensions": [
            "cmx"
        ]
    },
    "image/x-freehand": {
        "source": "apache",
        "extensions": [
            "fh",
            "fhc",
            "fh4",
            "fh5",
            "fh7"
        ]
    },
    "image/x-icon": {
        "source": "apache",
        "compressible": true,
        "extensions": [
            "ico"
        ]
    },
    "image/x-jng": {
        "source": "nginx",
        "extensions": [
            "jng"
        ]
    },
    "image/x-mrsid-image": {
        "source": "apache",
        "extensions": [
            "sid"
        ]
    },
    "image/x-ms-bmp": {
        "source": "nginx",
        "compressible": true,
        "extensions": [
            "bmp"
        ]
    },
    "image/x-pcx": {
        "source": "apache",
        "extensions": [
            "pcx"
        ]
    },
    "image/x-pict": {
        "source": "apache",
        "extensions": [
            "pic",
            "pct"
        ]
    },
    "image/x-portable-anymap": {
        "source": "apache",
        "extensions": [
            "pnm"
        ]
    },
    "image/x-portable-bitmap": {
        "source": "apache",
        "extensions": [
            "pbm"
        ]
    },
    "image/x-portable-graymap": {
        "source": "apache",
        "extensions": [
            "pgm"
        ]
    },
    "image/x-portable-pixmap": {
        "source": "apache",
        "extensions": [
            "ppm"
        ]
    },
    "image/x-rgb": {
        "source": "apache",
        "extensions": [
            "rgb"
        ]
    },
    "image/x-tga": {
        "source": "apache",
        "extensions": [
            "tga"
        ]
    },
    "image/x-xbitmap": {
        "source": "apache",
        "extensions": [
            "xbm"
        ]
    },
    "image/x-xcf": {
        "compressible": false
    },
    "image/x-xpixmap": {
        "source": "apache",
        "extensions": [
            "xpm"
        ]
    },
    "image/x-xwindowdump": {
        "source": "apache",
        "extensions": [
            "xwd"
        ]
    },
    "message/cpim": {
        "source": "iana"
    },
    "message/delivery-status": {
        "source": "iana"
    },
    "message/disposition-notification": {
        "source": "iana"
    },
    "message/external-body": {
        "source": "iana"
    },
    "message/feedback-report": {
        "source": "iana"
    },
    "message/global": {
        "source": "iana"
    },
    "message/global-delivery-status": {
        "source": "iana"
    },
    "message/global-disposition-notification": {
        "source": "iana"
    },
    "message/global-headers": {
        "source": "iana"
    },
    "message/http": {
        "source": "iana",
        "compressible": false
    },
    "message/imdn+xml": {
        "source": "iana",
        "compressible": true
    },
    "message/news": {
        "source": "iana"
    },
    "message/partial": {
        "source": "iana",
        "compressible": false
    },
    "message/rfc822": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "eml",
            "mime"
        ]
    },
    "message/s-http": {
        "source": "iana"
    },
    "message/sip": {
        "source": "iana"
    },
    "message/sipfrag": {
        "source": "iana"
    },
    "message/tracking-status": {
        "source": "iana"
    },
    "message/vnd.si.simp": {
        "source": "iana"
    },
    "message/vnd.wfa.wsc": {
        "source": "iana"
    },
    "model/iges": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "igs",
            "iges"
        ]
    },
    "model/mesh": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "msh",
            "mesh",
            "silo"
        ]
    },
    "model/vnd.collada+xml": {
        "source": "iana",
        "extensions": [
            "dae"
        ]
    },
    "model/vnd.dwf": {
        "source": "iana",
        "extensions": [
            "dwf"
        ]
    },
    "model/vnd.flatland.3dml": {
        "source": "iana"
    },
    "model/vnd.gdl": {
        "source": "iana",
        "extensions": [
            "gdl"
        ]
    },
    "model/vnd.gs-gdl": {
        "source": "apache"
    },
    "model/vnd.gs.gdl": {
        "source": "iana"
    },
    "model/vnd.gtw": {
        "source": "iana",
        "extensions": [
            "gtw"
        ]
    },
    "model/vnd.moml+xml": {
        "source": "iana"
    },
    "model/vnd.mts": {
        "source": "iana",
        "extensions": [
            "mts"
        ]
    },
    "model/vnd.opengex": {
        "source": "iana"
    },
    "model/vnd.parasolid.transmit.binary": {
        "source": "iana"
    },
    "model/vnd.parasolid.transmit.text": {
        "source": "iana"
    },
    "model/vnd.valve.source.compiled-map": {
        "source": "iana"
    },
    "model/vnd.vtu": {
        "source": "iana",
        "extensions": [
            "vtu"
        ]
    },
    "model/vrml": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "wrl",
            "vrml"
        ]
    },
    "model/x3d+binary": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "x3db",
            "x3dbz"
        ]
    },
    "model/x3d+fastinfoset": {
        "source": "iana"
    },
    "model/x3d+vrml": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "x3dv",
            "x3dvz"
        ]
    },
    "model/x3d+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "x3d",
            "x3dz"
        ]
    },
    "model/x3d-vrml": {
        "source": "iana"
    },
    "multipart/alternative": {
        "source": "iana",
        "compressible": false
    },
    "multipart/appledouble": {
        "source": "iana"
    },
    "multipart/byteranges": {
        "source": "iana"
    },
    "multipart/digest": {
        "source": "iana"
    },
    "multipart/encrypted": {
        "source": "iana",
        "compressible": false
    },
    "multipart/form-data": {
        "source": "iana",
        "compressible": false
    },
    "multipart/header-set": {
        "source": "iana"
    },
    "multipart/mixed": {
        "source": "iana",
        "compressible": false
    },
    "multipart/parallel": {
        "source": "iana"
    },
    "multipart/related": {
        "source": "iana",
        "compressible": false
    },
    "multipart/report": {
        "source": "iana"
    },
    "multipart/signed": {
        "source": "iana",
        "compressible": false
    },
    "multipart/voice-message": {
        "source": "iana"
    },
    "multipart/x-mixed-replace": {
        "source": "iana"
    },
    "text/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "text/cache-manifest": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "appcache",
            "manifest"
        ]
    },
    "text/calendar": {
        "source": "iana",
        "extensions": [
            "ics",
            "ifb"
        ]
    },
    "text/calender": {
        "compressible": true
    },
    "text/cmd": {
        "compressible": true
    },
    "text/coffeescript": {
        "extensions": [
            "coffee",
            "litcoffee"
        ]
    },
    "text/css": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "css"
        ]
    },
    "text/csv": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "csv"
        ]
    },
    "text/csv-schema": {
        "source": "iana"
    },
    "text/directory": {
        "source": "iana"
    },
    "text/dns": {
        "source": "iana"
    },
    "text/ecmascript": {
        "source": "iana"
    },
    "text/encaprtp": {
        "source": "iana"
    },
    "text/enriched": {
        "source": "iana"
    },
    "text/fwdred": {
        "source": "iana"
    },
    "text/grammar-ref-list": {
        "source": "iana"
    },
    "text/hjson": {
        "extensions": [
            "hjson"
        ]
    },
    "text/html": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "html",
            "htm",
            "shtml"
        ]
    },
    "text/jade": {
        "extensions": [
            "jade"
        ]
    },
    "text/javascript": {
        "source": "iana",
        "compressible": true
    },
    "text/jcr-cnd": {
        "source": "iana"
    },
    "text/jsx": {
        "compressible": true,
        "extensions": [
            "jsx"
        ]
    },
    "text/less": {
        "extensions": [
            "less"
        ]
    },
    "text/markdown": {
        "source": "iana"
    },
    "text/mathml": {
        "source": "nginx",
        "extensions": [
            "mml"
        ]
    },
    "text/mizar": {
        "source": "iana"
    },
    "text/n3": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "n3"
        ]
    },
    "text/parameters": {
        "source": "iana"
    },
    "text/parityfec": {
        "source": "iana"
    },
    "text/plain": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "txt",
            "text",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "ini"
        ]
    },
    "text/provenance-notation": {
        "source": "iana"
    },
    "text/prs.fallenstein.rst": {
        "source": "iana"
    },
    "text/prs.lines.tag": {
        "source": "iana",
        "extensions": [
            "dsc"
        ]
    },
    "text/raptorfec": {
        "source": "iana"
    },
    "text/red": {
        "source": "iana"
    },
    "text/rfc822-headers": {
        "source": "iana"
    },
    "text/richtext": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "rtx"
        ]
    },
    "text/rtf": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "rtf"
        ]
    },
    "text/rtp-enc-aescm128": {
        "source": "iana"
    },
    "text/rtploopback": {
        "source": "iana"
    },
    "text/rtx": {
        "source": "iana"
    },
    "text/sgml": {
        "source": "iana",
        "extensions": [
            "sgml",
            "sgm"
        ]
    },
    "text/stylus": {
        "extensions": [
            "stylus",
            "styl"
        ]
    },
    "text/t140": {
        "source": "iana"
    },
    "text/tab-separated-values": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "tsv"
        ]
    },
    "text/troff": {
        "source": "iana",
        "extensions": [
            "t",
            "tr",
            "roff",
            "man",
            "me",
            "ms"
        ]
    },
    "text/turtle": {
        "source": "iana",
        "extensions": [
            "ttl"
        ]
    },
    "text/ulpfec": {
        "source": "iana"
    },
    "text/uri-list": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "uri",
            "uris",
            "urls"
        ]
    },
    "text/vcard": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "vcard"
        ]
    },
    "text/vnd.a": {
        "source": "iana"
    },
    "text/vnd.abc": {
        "source": "iana"
    },
    "text/vnd.curl": {
        "source": "iana",
        "extensions": [
            "curl"
        ]
    },
    "text/vnd.curl.dcurl": {
        "source": "apache",
        "extensions": [
            "dcurl"
        ]
    },
    "text/vnd.curl.mcurl": {
        "source": "apache",
        "extensions": [
            "mcurl"
        ]
    },
    "text/vnd.curl.scurl": {
        "source": "apache",
        "extensions": [
            "scurl"
        ]
    },
    "text/vnd.debian.copyright": {
        "source": "iana"
    },
    "text/vnd.dmclientscript": {
        "source": "iana"
    },
    "text/vnd.dvb.subtitle": {
        "source": "iana",
        "extensions": [
            "sub"
        ]
    },
    "text/vnd.esmertec.theme-descriptor": {
        "source": "iana"
    },
    "text/vnd.fly": {
        "source": "iana",
        "extensions": [
            "fly"
        ]
    },
    "text/vnd.fmi.flexstor": {
        "source": "iana",
        "extensions": [
            "flx"
        ]
    },
    "text/vnd.graphviz": {
        "source": "iana",
        "extensions": [
            "gv"
        ]
    },
    "text/vnd.in3d.3dml": {
        "source": "iana",
        "extensions": [
            "3dml"
        ]
    },
    "text/vnd.in3d.spot": {
        "source": "iana",
        "extensions": [
            "spot"
        ]
    },
    "text/vnd.iptc.newsml": {
        "source": "iana"
    },
    "text/vnd.iptc.nitf": {
        "source": "iana"
    },
    "text/vnd.latex-z": {
        "source": "iana"
    },
    "text/vnd.motorola.reflex": {
        "source": "iana"
    },
    "text/vnd.ms-mediapackage": {
        "source": "iana"
    },
    "text/vnd.net2phone.commcenter.command": {
        "source": "iana"
    },
    "text/vnd.radisys.msml-basic-layout": {
        "source": "iana"
    },
    "text/vnd.si.uricatalogue": {
        "source": "iana"
    },
    "text/vnd.sun.j2me.app-descriptor": {
        "source": "iana",
        "extensions": [
            "jad"
        ]
    },
    "text/vnd.trolltech.linguist": {
        "source": "iana"
    },
    "text/vnd.wap.si": {
        "source": "iana"
    },
    "text/vnd.wap.sl": {
        "source": "iana"
    },
    "text/vnd.wap.wml": {
        "source": "iana",
        "extensions": [
            "wml"
        ]
    },
    "text/vnd.wap.wmlscript": {
        "source": "iana",
        "extensions": [
            "wmls"
        ]
    },
    "text/vtt": {
        "charset": "UTF-8",
        "compressible": true,
        "extensions": [
            "vtt"
        ]
    },
    "text/x-asm": {
        "source": "apache",
        "extensions": [
            "s",
            "asm"
        ]
    },
    "text/x-c": {
        "source": "apache",
        "extensions": [
            "c",
            "cc",
            "cxx",
            "cpp",
            "h",
            "hh",
            "dic"
        ]
    },
    "text/x-component": {
        "source": "nginx",
        "extensions": [
            "htc"
        ]
    },
    "text/x-fortran": {
        "source": "apache",
        "extensions": [
            "f",
            "for",
            "f77",
            "f90"
        ]
    },
    "text/x-gwt-rpc": {
        "compressible": true
    },
    "text/x-handlebars-template": {
        "extensions": [
            "hbs"
        ]
    },
    "text/x-java-source": {
        "source": "apache",
        "extensions": [
            "java"
        ]
    },
    "text/x-jquery-tmpl": {
        "compressible": true
    },
    "text/x-lua": {
        "extensions": [
            "lua"
        ]
    },
    "text/x-markdown": {
        "compressible": true,
        "extensions": [
            "markdown",
            "md",
            "mkd"
        ]
    },
    "text/x-nfo": {
        "source": "apache",
        "extensions": [
            "nfo"
        ]
    },
    "text/x-opml": {
        "source": "apache",
        "extensions": [
            "opml"
        ]
    },
    "text/x-pascal": {
        "source": "apache",
        "extensions": [
            "p",
            "pas"
        ]
    },
    "text/x-processing": {
        "compressible": true,
        "extensions": [
            "pde"
        ]
    },
    "text/x-sass": {
        "extensions": [
            "sass"
        ]
    },
    "text/x-scss": {
        "extensions": [
            "scss"
        ]
    },
    "text/x-setext": {
        "source": "apache",
        "extensions": [
            "etx"
        ]
    },
    "text/x-sfv": {
        "source": "apache",
        "extensions": [
            "sfv"
        ]
    },
    "text/x-suse-ymp": {
        "compressible": true,
        "extensions": [
            "ymp"
        ]
    },
    "text/x-uuencode": {
        "source": "apache",
        "extensions": [
            "uu"
        ]
    },
    "text/x-vcalendar": {
        "source": "apache",
        "extensions": [
            "vcs"
        ]
    },
    "text/x-vcard": {
        "source": "apache",
        "extensions": [
            "vcf"
        ]
    },
    "text/xml": {
        "source": "iana",
        "compressible": true,
        "extensions": [
            "xml"
        ]
    },
    "text/xml-external-parsed-entity": {
        "source": "iana"
    },
    "text/yaml": {
        "extensions": [
            "yaml",
            "yml"
        ]
    },
    "video/1d-interleaved-parityfec": {
        "source": "apache"
    },
    "video/3gpp": {
        "source": "apache",
        "extensions": [
            "3gp",
            "3gpp"
        ]
    },
    "video/3gpp-tt": {
        "source": "apache"
    },
    "video/3gpp2": {
        "source": "apache",
        "extensions": [
            "3g2"
        ]
    },
    "video/bmpeg": {
        "source": "apache"
    },
    "video/bt656": {
        "source": "apache"
    },
    "video/celb": {
        "source": "apache"
    },
    "video/dv": {
        "source": "apache"
    },
    "video/h261": {
        "source": "apache",
        "extensions": [
            "h261"
        ]
    },
    "video/h263": {
        "source": "apache",
        "extensions": [
            "h263"
        ]
    },
    "video/h263-1998": {
        "source": "apache"
    },
    "video/h263-2000": {
        "source": "apache"
    },
    "video/h264": {
        "source": "apache",
        "extensions": [
            "h264"
        ]
    },
    "video/h264-rcdo": {
        "source": "apache"
    },
    "video/h264-svc": {
        "source": "apache"
    },
    "video/jpeg": {
        "source": "apache",
        "extensions": [
            "jpgv"
        ]
    },
    "video/jpeg2000": {
        "source": "apache"
    },
    "video/jpm": {
        "source": "apache",
        "extensions": [
            "jpm",
            "jpgm"
        ]
    },
    "video/mj2": {
        "source": "apache",
        "extensions": [
            "mj2",
            "mjp2"
        ]
    },
    "video/mp1s": {
        "source": "apache"
    },
    "video/mp2p": {
        "source": "apache"
    },
    "video/mp2t": {
        "source": "apache",
        "extensions": [
            "ts"
        ]
    },
    "video/mp4": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "mp4",
            "mp4v",
            "mpg4"
        ]
    },
    "video/mp4v-es": {
        "source": "apache"
    },
    "video/mpeg": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "mpeg",
            "mpg",
            "mpe",
            "m1v",
            "m2v"
        ]
    },
    "video/mpeg4-generic": {
        "source": "apache"
    },
    "video/mpv": {
        "source": "apache"
    },
    "video/nv": {
        "source": "apache"
    },
    "video/ogg": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "ogv"
        ]
    },
    "video/parityfec": {
        "source": "apache"
    },
    "video/pointer": {
        "source": "apache"
    },
    "video/quicktime": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "qt",
            "mov"
        ]
    },
    "video/raw": {
        "source": "apache"
    },
    "video/rtp-enc-aescm128": {
        "source": "apache"
    },
    "video/rtx": {
        "source": "apache"
    },
    "video/smpte292m": {
        "source": "apache"
    },
    "video/ulpfec": {
        "source": "apache"
    },
    "video/vc1": {
        "source": "apache"
    },
    "video/vnd.cctv": {
        "source": "apache"
    },
    "video/vnd.dece.hd": {
        "source": "apache",
        "extensions": [
            "uvh",
            "uvvh"
        ]
    },
    "video/vnd.dece.mobile": {
        "source": "apache",
        "extensions": [
            "uvm",
            "uvvm"
        ]
    },
    "video/vnd.dece.mp4": {
        "source": "apache"
    },
    "video/vnd.dece.pd": {
        "source": "apache",
        "extensions": [
            "uvp",
            "uvvp"
        ]
    },
    "video/vnd.dece.sd": {
        "source": "apache",
        "extensions": [
            "uvs",
            "uvvs"
        ]
    },
    "video/vnd.dece.video": {
        "source": "apache",
        "extensions": [
            "uvv",
            "uvvv"
        ]
    },
    "video/vnd.directv.mpeg": {
        "source": "apache"
    },
    "video/vnd.directv.mpeg-tts": {
        "source": "apache"
    },
    "video/vnd.dlna.mpeg-tts": {
        "source": "apache"
    },
    "video/vnd.dvb.file": {
        "source": "apache",
        "extensions": [
            "dvb"
        ]
    },
    "video/vnd.fvt": {
        "source": "apache",
        "extensions": [
            "fvt"
        ]
    },
    "video/vnd.hns.video": {
        "source": "apache"
    },
    "video/vnd.iptvforum.1dparityfec-1010": {
        "source": "apache"
    },
    "video/vnd.iptvforum.1dparityfec-2005": {
        "source": "apache"
    },
    "video/vnd.iptvforum.2dparityfec-1010": {
        "source": "apache"
    },
    "video/vnd.iptvforum.2dparityfec-2005": {
        "source": "apache"
    },
    "video/vnd.iptvforum.ttsavc": {
        "source": "apache"
    },
    "video/vnd.iptvforum.ttsmpeg2": {
        "source": "apache"
    },
    "video/vnd.motorola.video": {
        "source": "apache"
    },
    "video/vnd.motorola.videop": {
        "source": "apache"
    },
    "video/vnd.mpegurl": {
        "source": "apache",
        "extensions": [
            "mxu",
            "m4u"
        ]
    },
    "video/vnd.ms-playready.media.pyv": {
        "source": "apache",
        "extensions": [
            "pyv"
        ]
    },
    "video/vnd.nokia.interleaved-multimedia": {
        "source": "apache"
    },
    "video/vnd.nokia.videovoip": {
        "source": "apache"
    },
    "video/vnd.objectvideo": {
        "source": "apache"
    },
    "video/vnd.sealed.mpeg1": {
        "source": "apache"
    },
    "video/vnd.sealed.mpeg4": {
        "source": "apache"
    },
    "video/vnd.sealed.swf": {
        "source": "apache"
    },
    "video/vnd.sealedmedia.softseal.mov": {
        "source": "apache"
    },
    "video/vnd.uvvu.mp4": {
        "source": "apache",
        "extensions": [
            "uvu",
            "uvvu"
        ]
    },
    "video/vnd.vivo": {
        "source": "apache",
        "extensions": [
            "viv"
        ]
    },
    "video/webm": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "webm"
        ]
    },
    "video/x-f4v": {
        "source": "apache",
        "extensions": [
            "f4v"
        ]
    },
    "video/x-fli": {
        "source": "apache",
        "extensions": [
            "fli"
        ]
    },
    "video/x-flv": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "flv"
        ]
    },
    "video/x-m4v": {
        "source": "apache",
        "extensions": [
            "m4v"
        ]
    },
    "video/x-matroska": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "mkv",
            "mk3d",
            "mks"
        ]
    },
    "video/x-mng": {
        "source": "apache",
        "extensions": [
            "mng"
        ]
    },
    "video/x-ms-asf": {
        "source": "apache",
        "extensions": [
            "asf",
            "asx"
        ]
    },
    "video/x-ms-vob": {
        "source": "apache",
        "extensions": [
            "vob"
        ]
    },
    "video/x-ms-wm": {
        "source": "apache",
        "extensions": [
            "wm"
        ]
    },
    "video/x-ms-wmv": {
        "source": "apache",
        "compressible": false,
        "extensions": [
            "wmv"
        ]
    },
    "video/x-ms-wmx": {
        "source": "apache",
        "extensions": [
            "wmx"
        ]
    },
    "video/x-ms-wvx": {
        "source": "apache",
        "extensions": [
            "wvx"
        ]
    },
    "video/x-msvideo": {
        "source": "apache",
        "extensions": [
            "avi"
        ]
    },
    "video/x-sgi-movie": {
        "source": "apache",
        "extensions": [
            "movie"
        ]
    },
    "video/x-smv": {
        "source": "apache",
        "extensions": [
            "smv"
        ]
    },
    "x-conference/x-cooltalk": {
        "source": "apache",
        "extensions": [
            "ice"
        ]
    },
    "x-shader/x-fragment": {
        "compressible": true
    },
    "x-shader/x-vertex": {
        "compressible": true
    }
};

},{}],"gaFfB":[function(require,module,exports) {
var vehicle = {
};
module["exports"] = vehicle;
vehicle.manufacturer = require("./manufacturer");
vehicle.model = require("./model");
vehicle.type = require("./vehicle_type");
vehicle.fuel = require("./fuel");
vehicle.bicycle = require("./bicycle");

},{"./manufacturer":"flejk","./model":"1H9fz","./vehicle_type":"3FhCS","./fuel":"hgOxT","./bicycle":"a8u9m"}],"flejk":[function(require,module,exports) {
module["exports"] = [
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Maserati",
    "Mazda",
    "Mercedes Benz",
    "Mini",
    "Nissan",
    "Polestar",
    "Porsche",
    "Rolls Royce",
    "Smart",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
];

},{}],"1H9fz":[function(require,module,exports) {
module["exports"] = [
    "Fiesta",
    "Focus",
    "Taurus",
    "Mustang",
    "Explorer",
    "Expedition",
    "F-150",
    "Model T",
    "Ranchero",
    "Volt",
    "Cruze",
    "Malibu",
    "Impala",
    "Camaro",
    "Corvette",
    "Colorado",
    "Silverado",
    "El Camino",
    "CTS",
    "XTS",
    "ATS",
    "Escalade",
    "Alpine",
    "Charger",
    "LeBaron",
    "PT Cruiser",
    "Challenger",
    "Durango",
    "Grand Caravan",
    "Wrangler",
    "Grand Cherokee",
    "Roadster",
    "Model S",
    "Model 3",
    "Camry",
    "Prius",
    "Land Cruiser",
    "Accord",
    "Civic",
    "Element",
    "Sentra",
    "Altima",
    "A8",
    "A4",
    "Beetle",
    "Jetta",
    "Golf",
    "911",
    "Spyder",
    "Countach",
    "Mercielago",
    "Aventador",
    "1",
    "2",
    "Fortwo",
    "V90",
    "XC90",
    "CX-9", 
];

},{}],"3FhCS":[function(require,module,exports) {
module["exports"] = [
    "Cargo Van",
    "Convertible",
    "Coupe",
    "Crew Cab Pickup",
    "Extended Cab Pickup",
    "Hatchback",
    "Minivan",
    "Passenger Van",
    "SUV",
    "Sedan",
    "Wagon"
];

},{}],"hgOxT":[function(require,module,exports) {
module["exports"] = [
    "Diesel",
    "Electric",
    "Gasoline",
    "Hybrid"
];

},{}],"a8u9m":[function(require,module,exports) {
module["exports"] = [
    "Adventure Road Bicycle",
    "BMX Bicycle",
    "City Bicycle",
    "Cruiser Bicycle",
    "Cyclocross Bicycle",
    "Dual-Sport Bicycle",
    "Fitness Bicycle",
    "Flat-Foot Comfort Bicycle",
    "Folding Bicycle",
    "Hybrid Bicycle",
    "Mountain Bicycle",
    "Recumbent Bicycle",
    "Road Bicycle",
    "Tandem Bicycle",
    "Touring Bicycle",
    "Track/Fixed-Gear Bicycle",
    "Triathlon/Time Trial Bicycle",
    "Tricycle"
];

},{}],"7M1fs":[function(require,module,exports) {
var music = {
};
module['exports'] = music;
music.genre = require("./genre");

},{"./genre":"FmseK"}],"FmseK":[function(require,module,exports) {
module["exports"] = [
    "Rock",
    "Metal",
    "Pop",
    "Electronic",
    "Folk",
    "World",
    "Country",
    "Jazz",
    "Funk",
    "Soul",
    "Hip Hop",
    "Classical",
    "Latin",
    "Reggae",
    "Stage And Screen",
    "Blues",
    "Non Music",
    "Rap"
];

},{}]},["8h2Kx","kmYzM","19Ijc","3Yy36","axYM6","euwhi","68wJx","31w0r","5uiTB","lkS6V"], "lkS6V", "parcelRequire3004")

//# sourceMappingURL=index.30d478c3.js.map
