import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { useSelector, DataProvider, useDataEnv, usePlasmicCanvasContext, repeatedElement } from '@plasmicapp/host';
import { usePlasmicQueryData } from '@plasmicapp/query';
import dayjs from 'dayjs';
import React from 'react';

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

function queryParamsToApi(params) {
  return {
    where: params.where,
    limit: params.limit,
    offset: params.offset,
    order: params.orderBy ? [{
      field: params.orderBy,
      dir: params.desc ? "desc" : "asc"
    }] : undefined,
    fields: params.fields
  };
}
var HttpError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(HttpError, _Error);
  function HttpError(status, message) {
    var _this;
    _this = _Error.call(this, message) || this;
    _this.status = status;
    return _this;
  }
  return HttpError;
}(/*#__PURE__*/_wrapNativeSuper(Error));
var API = /*#__PURE__*/function () {
  function API(config) {
    this.config = config;
  }
  var _proto = API.prototype;
  _proto.get = /*#__PURE__*/function () {
    var _get = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, params) {
      var url, fixedParams, response, message, _json$error, json;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (params === void 0) {
              params = {};
            }
            url = new URL(this.config.host + "/api/v1/cms/databases/" + this.config.databaseId + endpoint);
            fixedParams = Object.keys(params).reduce(function (newObj, key) {
              var value = params[key];
              if (value != null) {
                newObj[key] = value;
              }
              return newObj;
            }, {});
            url.search = new URLSearchParams(fixedParams).toString();
            _context.next = 6;
            return fetch(url.toString(), {
              method: "GET",
              headers: {
                accept: "*/*",
                "x-plasmic-api-cms-tokens": this.config.databaseId + ":" + this.config.databaseToken
              },
              mode: "cors"
            });
          case 6:
            response = _context.sent;
            if (!(response.status !== 200)) {
              _context.next = 13;
              break;
            }
            _context.next = 10;
            return response.text();
          case 10:
            message = _context.sent;
            try {
              json = JSON.parse(message);
              if ((_json$error = json.error) != null && _json$error.message) {
                message = json.error.message;
              }
            } catch (_unused) {
              // ignored
            }
            throw new HttpError(response.status, message);
          case 13:
            _context.next = 15;
            return response.json();
          case 15:
            return _context.abrupt("return", _context.sent);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }
    return get;
  }();
  _proto.fetchTables = /*#__PURE__*/function () {
    var _fetchTables = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return this.get("");
          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.tables);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            throw _context2.t0;
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[0, 7]]);
    }));
    function fetchTables() {
      return _fetchTables.apply(this, arguments);
    }
    return fetchTables;
  }();
  _proto.useDraftForTable = function useDraftForTable(table) {
    if (Array.isArray(this.config.useDraft)) {
      return this.config.useDraft.includes(table);
    } else {
      return this.config.useDraft;
    }
  };
  _proto.query = /*#__PURE__*/function () {
    var _query = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(table, params) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (params === void 0) {
              params = {};
            }
            _context3.prev = 1;
            _context3.next = 4;
            return this.get("/tables/" + table + "/query", {
              q: JSON.stringify(queryParamsToApi(params)),
              draft: Number(this.useDraftForTable(table) || params.useDraft),
              locale: this.config.locale
            });
          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response.rows);
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
            throw _context3.t0;
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this, [[1, 8]]);
    }));
    function query(_x3, _x4) {
      return _query.apply(this, arguments);
    }
    return query;
  }();
  _proto.count = /*#__PURE__*/function () {
    var _count = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(table, params) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (params === void 0) {
              params = {};
            }
            _context4.prev = 1;
            _context4.next = 4;
            return this.get("/tables/" + table + "/count", {
              q: JSON.stringify(queryParamsToApi(params)),
              draft: Number(this.useDraftForTable(table) || params.useDraft)
            });
          case 4:
            response = _context4.sent;
            return _context4.abrupt("return", response.count);
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);
            throw _context4.t0;
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this, [[1, 8]]);
    }));
    function count(_x5, _x6) {
      return _count.apply(this, arguments);
    }
    return count;
  }();
  return API;
}();
function mkApi(config) {
  if (!config) {
    throw new Error("Component must be wrapped in 'CMS Data Provider'.");
  }
  return new API(config);
}

var _excluded = ["databaseToken"];
var contextPrefix = "plasmicCms";
var databaseContextKey = contextPrefix + "Database";
var tablesContextKey = contextPrefix + "Tables";
var tableSchemaContextKey = contextPrefix + "TableSchema";
var collectionResultSuffix = "Collection";
var mkQueryContextKey = function mkQueryContextKey(table) {
  return "" + contextPrefix + capitalizeFirst(table) + collectionResultSuffix;
};
var itemContextSuffix = "Item";
var countContextSuffix = "Count";
var modeContextSuffix = "Mode";
var mkRowContextKey = function mkRowContextKey(table) {
  return "" + contextPrefix + capitalizeFirst(table) + itemContextSuffix;
};
var mkCountContextKey = function mkCountContextKey(table) {
  return "" + contextPrefix + capitalizeFirst(table) + countContextSuffix;
};
var mkModeContextKey = function mkModeContextKey(table) {
  return "" + contextPrefix + capitalizeFirst(table) + modeContextSuffix;
};
function capitalizeFirst(str) {
  var _str$;
  return ((_str$ = str[0]) == null ? void 0 : _str$.toUpperCase()) + str.slice(1);
}
function useDatabase() {
  return useSelector(databaseContextKey);
}
function makeDatabaseCacheKey(config) {
  if (!config) {
    return null;
  }
  var rest = _objectWithoutPropertiesLoose(config, _excluded);
  return JSON.stringify(rest);
}
function DatabaseProvider(_ref) {
  var config = _ref.config,
    children = _ref.children;
  return React.createElement(DataProvider, {
    name: databaseContextKey,
    data: config,
    hidden: true
  }, children);
}
function useTables() {
  return useSelector(tablesContextKey);
}
function TablesProvider(_ref2) {
  var children = _ref2.children,
    tables = _ref2.tables;
  return React.createElement(DataProvider, {
    name: tablesContextKey,
    data: tables,
    hidden: true
  }, children);
}
function TableSchemaProvider(_ref3) {
  var children = _ref3.children,
    table = _ref3.table;
  var tables = useTables();
  var schema;
  if (tables && (tables == null ? void 0 : tables.length) > 0) {
    if (!table) {
      var _tables$;
      schema = (_tables$ = tables[0]) == null ? void 0 : _tables$.schema;
    } else {
      var _tables$find;
      schema = tables == null || (_tables$find = tables.find(function (t) {
        return (t == null ? void 0 : t.identifier) === table;
      })) == null ? void 0 : _tables$find.schema;
    }
  }
  return React.createElement(DataProvider, {
    name: tableSchemaContextKey,
    data: schema
  }, children);
}
function getClosestMatchingKeysBy(env, pred) {
  return [].concat(Object.keys(env).reverse()).filter(function (key) {
    return pred(key);
  });
}
function QueryResultProvider(_ref4) {
  var children = _ref4.children,
    table = _ref4.table,
    rows = _ref4.rows,
    hidden = _ref4.hidden;
  return React.createElement(DataProvider, {
    name: table ? mkModeContextKey(table) : undefined,
    data: "rows",
    hidden: true
  }, React.createElement(DataProvider, {
    name: table ? mkQueryContextKey(table) : undefined,
    data: rows,
    hidden: hidden
  }, children));
}
function useTablesWithDataLoaded(mode) {
  var env = useDataEnv();
  var tables = useTables();
  if (!env) {
    return undefined;
  }
  if (!tables) {
    return undefined;
  }
  var matchingKeys = getClosestMatchingKeysBy(env, function (key) {
    if (mode === "rows") {
      return key.endsWith(itemContextSuffix);
    } else if (mode === "count") {
      return key.endsWith(countContextSuffix);
    } else {
      return key.endsWith(itemContextSuffix) || key.endsWith(countContextSuffix);
    }
  });
  return tables.filter(function (table) {
    return matchingKeys.some(function (key) {
      if (mode === "rows") {
        return mkRowContextKey(table.identifier) === key;
      } else if (mode === "count") {
        return mkCountContextKey(table.identifier) === key;
      } else {
        return mkRowContextKey(table.identifier) === key || mkCountContextKey(table.identifier) === key;
      }
    });
  });
}
function deriveTableId(tables, table) {
  if (!table && tables && tables.length > 0) {
    table = tables[0].identifier;
  }
  return table;
}
function useRow(tables, table) {
  var env = useDataEnv();
  if (!env) {
    return undefined;
  }
  table = deriveTableId(tables, table);
  if (table) {
    return {
      table: table,
      row: env[mkRowContextKey(table)]
    };
  }
  return undefined;
}
function useCount(tables, table) {
  var env = useDataEnv();
  if (!env) {
    return undefined;
  }
  table = deriveTableId(tables, table);
  if (table) {
    return {
      table: table,
      count: env[mkCountContextKey(table)]
    };
  }
  return undefined;
}
function RowProvider(_ref5) {
  var children = _ref5.children,
    table = _ref5.table,
    row = _ref5.row;
  return React.createElement(DataProvider, {
    name: mkRowContextKey(table),
    data: row
  }, children);
}
function CountProvider(_ref6) {
  var children = _ref6.children,
    table = _ref6.table,
    count = _ref6.count;
  return React.createElement(DataProvider, {
    name: table ? mkModeContextKey(table) : undefined,
    data: "count",
    hidden: true
  }, React.createElement(DataProvider, {
    name: table ? mkCountContextKey(table) : undefined,
    data: count
  }, children));
}

function mkTableOptions(tables) {
  if (!tables) {
    return [];
  }
  return tables.map(function (table) {
    return {
      value: table.identifier,
      label: table.name
    };
  });
}
function mkFieldOptions(tables, tableIdentifier, types) {
  if (!tables) {
    return [];
  }
  var table = tables.find(function (t) {
    return t.identifier === tableIdentifier;
  });
  if (!table) {
    return [];
  }
  var fields = table.schema.fields;
  if (types) {
    fields = fields.filter(function (f) {
      return types.includes(f.type);
    });
  }
  var options = fields.map(function (f) {
    return {
      value: f.identifier,
      label: f.name || f.identifier
    };
  });
  if (!options.some(function (option) {
    return option.value === "_id";
  })) {
    options.push({
      label: "System-assigned ID",
      value: "_id"
    });
  }
  return options;
}

var _excluded$1 = ["className", "table", "field", "dateFormat", "setControlContextData", "usePlasmicTheme", "themeResetClassName"],
  _excluded2 = ["className", "table", "setControlContextData"],
  _excluded3 = ["table", "field", "valueProp", "children", "setControlContextData"];
var modulePath = "@plasmicpkgs/plasmic-cms";
var componentPrefix = "hostless-plasmic-cms";
function renderMaybeData(maybeData, renderFn, loaderProps, inEditor, loadingMessage, forceLoadingState) {
  if ("error" in maybeData) {
    var error = maybeData.error;
    if (!inEditor) {
      return React.createElement(React.Fragment, null, loadingMessage != null ? loadingMessage : React.createElement("div", null, "Loading..."));
    }
    if (error && error instanceof HttpError && error.status === 404) {
      if (loaderProps.hideIfNotFound) {
        return null;
      } else {
        return React.createElement("div", null, "Error: Data not found");
      }
    } else {
      return React.createElement("div", null, "Error: ", error == null ? void 0 : error.message);
    }
  }
  if (!("data" in maybeData) || forceLoadingState) {
    return React.createElement(React.Fragment, null, loadingMessage != null ? loadingMessage : React.createElement("div", null, "Loading..."));
  }
  return renderFn(maybeData.data);
}
var defaultHost = "https://data.plasmic.app";
var cmsCredentialsProviderMeta = {
  name: componentPrefix + "-credentials-provider",
  displayName: "CMS Credentials Provider",
  description: "\nFind (or create) your CMS in the [dashboard](https://studio.plasmic.app), and go to its Settings view for the ID and token.\n\n[See tutorial video](https://docs.plasmic.app/learn/plasmic-cms/).",
  importName: "CmsCredentialsProvider",
  importPath: modulePath,
  providesData: true,
  props: {
    host: {
      type: "string",
      displayName: "Studio URL",
      description: "The default host for use in production is " + defaultHost + ".",
      defaultValue: defaultHost,
      defaultValueHint: defaultHost,
      advanced: true
    },
    databaseId: {
      type: "string",
      displayName: "CMS ID",
      description: "The ID of the CMS (database) to use. (Can get on the CMS settings page)"
    },
    databaseToken: {
      type: "string",
      displayName: "CMS Public Token",
      description: "The Public Token of the CMS (database) you are using. (Can get on the CMS settings page)"
    },
    locale: {
      type: "string",
      displayName: "Locale",
      description: "The locale to use for localized values, leave empty for the default locale."
    }
  }
};
function CmsCredentialsProvider(_ref) {
  var children = _ref.children,
    databaseId = _ref.databaseId,
    databaseToken = _ref.databaseToken,
    host = _ref.host,
    locale = _ref.locale,
    useDraft = _ref.useDraft;
  var config = {
    databaseId: databaseId,
    databaseToken: databaseToken,
    locale: locale,
    host: host || defaultHost,
    useDraft: useDraft != null ? useDraft : false
  };
  return React.createElement(DatabaseProvider, {
    config: config
  }, React.createElement(TablesFetcher, null, children));
}
function TablesFetcher(_ref2) {
  var children = _ref2.children;
  var databaseConfig = useDatabase();
  var cacheKey = JSON.stringify({
    component: "TablesFetcher",
    databaseConfig: makeDatabaseCacheKey(databaseConfig)
  });
  var maybeData = usePlasmicQueryData(cacheKey, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (isDatabaseConfigured(databaseConfig)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", []);
        case 2:
          _context.next = 4;
          return mkApi(databaseConfig).fetchTables();
        case 4:
          return _context.abrupt("return", _context.sent);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  var inEditor = !!usePlasmicCanvasContext();
  return React.createElement(TablesProvider, {
    tables: maybeData.data
  }, inEditor && maybeData.error ? React.createElement("div", null, "CMS Error: ", maybeData.error.message) : children);
}
function isDatabaseConfigured(config) {
  return (config == null ? void 0 : config.databaseId) && (config == null ? void 0 : config.databaseToken);
}
var cmsQueryRepeaterMeta = {
  name: componentPrefix + "-query-repeater",
  displayName: "CMS Data Fetcher",
  description: "Fetches CMS data. Repeats `children` slot content for each row fetched. [See tutorial video](https://docs.plasmic.app/learn/plasmic-cms/).",
  importName: "CmsQueryRepeater",
  importPath: modulePath,
  providesData: true,
  defaultStyles: {
    display: "flex",
    width: "stretch",
    maxWidth: "100%",
    flexDirection: "column"
  },
  props: {
    children: {
      type: "slot",
      isRepeated: true,
      defaultValue: {
        type: "vbox",
        children: [{
          type: "component",
          name: componentPrefix + "-row-field"
        }]
      }
    },
    table: {
      type: "choice",
      displayName: "Model",
      description: "CMS model (table) to query.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    },
    useDraft: {
      type: "boolean",
      displayName: "Use drafts?",
      description: "If set, also query unpublished content.",
      defaultValue: false,
      hidden: function hidden() {
        return true;
      }
    },
    mode: {
      type: "choice",
      options: [{
        label: "Rows",
        value: "rows"
      }, {
        label: "Count",
        value: "count"
      }],
      defaultValueHint: "rows"
    },
    where: {
      type: "object",
      displayName: "Filter",
      description: "Filter clause, as a JSON in Mongo query format. Should not be used together with Filter field and Filter value",
      advanced: true
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from model schema) to filter by",
      options: function options(_ref4, ctx) {
        var _ctx$table;
        var table = _ref4.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table = ctx == null ? void 0 : ctx.table) != null ? _ctx$table : table, ["number" /* NUMBER */, "boolean" /* BOOLEAN */, "text" /* TEXT */, "long-text" /* LONG_TEXT */, "ref" /* REF */]);
      }
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type"
    },
    orderBy: {
      type: "choice",
      displayName: "Order by",
      description: "Field to order by.",
      options: function options(_, ctx) {
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, ctx == null ? void 0 : ctx.table, ["number" /* NUMBER */, "boolean" /* BOOLEAN */, "date-time" /* DATE_TIME */, "long-text" /* LONG_TEXT */, "text" /* TEXT */]);
      },
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    },
    desc: {
      type: "boolean",
      displayName: "Sort descending?",
      description: 'Sort descending by "Order by" field.',
      defaultValue: false,
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Maximum number of entries to fetch (0 for unlimited).",
      defaultValue: 0,
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    },
    offset: {
      type: "number",
      displayName: "Offset",
      description: "Skips this number of rows in the result set; used in combination with limit to build pagination",
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    },
    fields: {
      type: "choice",
      multiSelect: true,
      displayName: "Fields",
      description: "Fields from the CMS model to include with each row; by default, all fields are included",
      options: function options(_ref5, ctx) {
        var _ctx$table2;
        var table = _ref5.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table2 = ctx == null ? void 0 : ctx.table) != null ? _ctx$table2 : table);
      },
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    },
    emptyMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "No matching published entries found."
      }
    },
    forceEmptyState: {
      type: "boolean",
      displayName: "Force empty state",
      description: "If set, will render as if no matching entries were found.",
      defaultValue: false
    },
    loadingMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading..."
      }
    },
    forceLoadingState: {
      type: "boolean",
      displayName: "Force loading state",
      description: "If set, will render as if it is waiting for the query to run.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, CMS Data Loader will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every entry.",
      defaultValue: false,
      hidden: function hidden(ps) {
        return ps.mode === "count";
      }
    }
  }
};
function CmsQueryRepeater(_ref6) {
  var table = _ref6.table,
    children = _ref6.children,
    setControlContextData = _ref6.setControlContextData,
    mode = _ref6.mode,
    where = _ref6.where,
    useDraft = _ref6.useDraft,
    orderBy = _ref6.orderBy,
    desc = _ref6.desc,
    limit = _ref6.limit,
    offset = _ref6.offset,
    emptyMessage = _ref6.emptyMessage,
    forceEmptyState = _ref6.forceEmptyState,
    loadingMessage = _ref6.loadingMessage,
    forceLoadingState = _ref6.forceLoadingState,
    noLayout = _ref6.noLayout,
    noAutoRepeat = _ref6.noAutoRepeat,
    className = _ref6.className,
    filterField = _ref6.filterField,
    filterValue = _ref6.filterValue,
    fields = _ref6.fields;
  var databaseConfig = useDatabase();
  var tables = useTables();
  if (filterField && filterValue) {
    var _where;
    where = (_where = {}, _where[filterField] = filterValue, _where);
  }
  var params = {
    where: where,
    useDraft: useDraft,
    orderBy: orderBy,
    desc: desc,
    limit: limit,
    offset: offset,
    fields: fields
  };
  if (!table && tables && tables.length > 0) {
    table = tables[0].identifier;
  }
  var cacheKey = JSON.stringify({
    component: "CmsQueryLoader",
    mode: mode,
    table: table,
    databaseConfig: makeDatabaseCacheKey(databaseConfig),
    params: params
  });
  if (tables) {
    // TODO: Only include table if __plasmic_cms_row_{table} exists.
    setControlContextData == null || setControlContextData({
      tables: tables,
      table: table
    });
  }
  var maybeData = usePlasmicQueryData(cacheKey, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (isDatabaseConfigured(databaseConfig)) {
            _context2.next = 2;
            break;
          }
          throw new Error("You must specify a CMS ID and API key");
        case 2:
          if (table) {
            _context2.next = 6;
            break;
          }
          throw new Error("You must select a model to query");
        case 6:
          if (!(tables && !tables.find(function (t) {
            return t.identifier === table;
          }))) {
            _context2.next = 10;
            break;
          }
          throw new Error("There is no model called \"" + table + "\"");
        case 10:
          if (!(mode === "count")) {
            _context2.next = 14;
            break;
          }
          return _context2.abrupt("return", mkApi(databaseConfig).count(table, params));
        case 14:
          return _context2.abrupt("return", mkApi(databaseConfig).query(table, params));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  var inEditor = !!usePlasmicCanvasContext();
  if (mode === "count") {
    var node = renderMaybeData(maybeData, function () {
      return children;
    }, {
      hideIfNotFound: false
    }, inEditor, loadingMessage, forceLoadingState);
    return React.createElement(TableSchemaProvider, {
      table: table
    }, React.createElement(CountProvider, {
      table: table,
      count: typeof (maybeData == null ? void 0 : maybeData.data) === "number" ? maybeData.data : undefined
    }, node));
  } else {
    var _node = renderMaybeData(maybeData, function (rows) {
      if (rows.length === 0 || forceEmptyState) {
        return emptyMessage;
      }
      return noAutoRepeat ? children : rows.map(function (row, index) {
        return React.createElement(RowProvider, {
          key: index,
          table: table,
          row: row
        }, repeatedElement(index, children));
      });
    }, {
      hideIfNotFound: false
    }, inEditor, loadingMessage, forceLoadingState);
    return React.createElement(TableSchemaProvider, {
      table: table
    }, React.createElement(QueryResultProvider, {
      rows: Array.isArray(maybeData == null ? void 0 : maybeData.data) ? maybeData.data : undefined,
      table: table
    }, noLayout ? React.createElement(React.Fragment, null, " ", _node, " ") : React.createElement("div", {
      className: className
    }, " ", _node, " ")));
  }
}
var cmsRowFieldMeta = {
  name: componentPrefix + "-row-field",
  displayName: "CMS Entry Field",
  importName: "CmsRowField",
  importPath: modulePath,
  props: {
    table: {
      type: "choice",
      displayName: "Model",
      hidden: function hidden(props, ctx) {
        var _ctx$tables$length, _ctx$tables;
        return ((_ctx$tables$length = ctx == null || (_ctx$tables = ctx.tables) == null ? void 0 : _ctx$tables.length) != null ? _ctx$tables$length : 0) <= 1 && !props.table;
      },
      helpText: "Pick model from a CMS Data Fetcher",
      description: "Usually not used! Only with multiple CMS Data Loaders, use this to choose which to show. Otherwise, go select the CMS Data Loader if you want to load different data.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    },
    field: {
      type: "choice",
      displayName: "Field",
      description: "Field (from model schema) to use.",
      options: function options(_ref8, ctx) {
        var _ctx$table3;
        var table = _ref8.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table3 = ctx == null ? void 0 : ctx.table) != null ? _ctx$table3 : table, ["number" /* NUMBER */, "boolean" /* BOOLEAN */, "text" /* TEXT */, "long-text" /* LONG_TEXT */, "date-time" /* DATE_TIME */, "rich-text" /* RICH_TEXT */, "image" /* IMAGE */, "file" /* FILE */, "enum" /* ENUM */]);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        var _ctx$fieldMeta, _ctx$fieldMeta2;
        return (ctx == null || (_ctx$fieldMeta = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta.name) || (ctx == null || (_ctx$fieldMeta2 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta2.identifier);
      }
    },
    dateFormat: {
      type: "choice",
      displayName: "Date Format",
      hidden: function hidden(_ref9, ctx) {
        var field = _ref9.field;
        if (!ctx) {
          return true;
        }
        var tableIdentifier = ctx.table,
          tables = ctx.tables;
        var table = tables == null ? void 0 : tables.find(function (t) {
          return t.identifier === tableIdentifier;
        });
        if (!table) {
          return true;
        }
        var fieldMeta = table.schema.fields.find(function (f) {
          return f.identifier === field;
        });
        if (!fieldMeta) {
          return true;
        }
        return fieldMeta.type !== "date-time" /* DATE_TIME */;
      },
      options: [{
        label: "July 26, 2014",
        value: "MMMM D, YYYY"
      }, {
        label: "July 26, 2014 10:02 PM",
        value: "MMMM D, YYYY h:mm A"
      }, {
        label: "Jul 26, 2014",
        value: "MMM D, YYYY"
      }, {
        label: "Jul 26, 2014 10:02 PM",
        value: "MMM D, YYYY h:mm A"
      }, {
        label: "Saturday, July 26, 2014",
        value: "dddd, MMMM D, YYYY"
      }, {
        label: "7/26/2014",
        value: "M/D/YYYY"
      }, {
        label: "7/26/2014 10:02 PM",
        value: "M/D/YYYY h:mm A"
      }, {
        label: "26/7/2014",
        value: "D/M/YYYY"
      }, {
        label: "26/7/2014 10:02 PM",
        value: "D/M/YYYY h:mm A"
      }, {
        label: "7/26/14",
        value: "M/D/YY"
      }, {
        label: "7/26/14 10:02 PM",
        value: "M/D/YY h:mm A"
      }, {
        label: "26/7/14",
        value: "D/M/YY"
      }, {
        label: "26/7/14 10:02 PM",
        value: "D/M/YY h:mm A"
      }]
    },
    usePlasmicTheme: {
      type: "boolean",
      displayName: "Use Plasmic tag styles?",
      description: "For HTML content, use tag styles defined in Plasmic",
      advanced: true
    },
    themeResetClassName: {
      type: "themeResetClass",
      targetAllTags: true
    }
  },
  defaultStyles: {
    objectFit: "cover"
  }
};
function CmsRowField(_ref10) {
  var _res$row$data;
  var className = _ref10.className,
    table = _ref10.table,
    field = _ref10.field,
    dateFormat = _ref10.dateFormat,
    setControlContextData = _ref10.setControlContextData,
    usePlasmicTheme = _ref10.usePlasmicTheme,
    themeResetClassName = _ref10.themeResetClassName,
    rest = _objectWithoutPropertiesLoose(_ref10, _excluded$1);
  var tables = useTablesWithDataLoaded("rows");
  var res = useRow(tables, table);
  var unknown = React.createElement("div", Object.assign({
    className: className
  }, rest), "Field ", table != null ? table : "Unknown Model", ".", field != null ? field : "Unknown Field");
  var fieldMeta = res ? deriveInferredTableField({
    table: res.table,
    tables: tables,
    field: field,
    typeFilters: ["text" /* TEXT */, "long-text" /* LONG_TEXT */, "rich-text" /* RICH_TEXT */]
  }) : undefined;
  if (tables) {
    // TODO: Only include table if __plasmic_cms_row_{table} exists.
    setControlContextData == null || setControlContextData(_extends({
      tables: tables
    }, res && res.row ? {
      table: res.table,
      row: res.row,
      fieldMeta: fieldMeta
    } : {}));
  }
  if (!res) {
    return unknown;
  }
  if (!res.row) {
    return React.createElement("div", {
      className: className
    }, "Error: No CMS Entry found");
  }
  if (!fieldMeta) {
    return unknown;
  }
  var data = (_res$row$data = res.row.data) == null ? void 0 : _res$row$data[fieldMeta.identifier];
  if (!data) {
    return null;
  }
  if (fieldMeta.type === "date-time" /* DATE_TIME */ && dateFormat) {
    data = dayjs(data).format(dateFormat);
  }
  return data ? renderValue(data, fieldMeta.type, _extends({
    className: (usePlasmicTheme ? themeResetClassName : "") + " " + className
  }, rest)) : null;
}
var cmsCountFieldMeta = {
  name: componentPrefix + "-count",
  displayName: "CMS Entries Count",
  importName: "CmsCount",
  importPath: modulePath,
  props: {
    table: {
      type: "choice",
      displayName: "Model",
      hidden: function hidden(props, ctx) {
        var _ctx$tables$length2, _ctx$tables2;
        return ((_ctx$tables$length2 = ctx == null || (_ctx$tables2 = ctx.tables) == null ? void 0 : _ctx$tables2.length) != null ? _ctx$tables$length2 : 0) <= 1 && !props.table;
      },
      helpText: "Pick model from a CMS Data Fetcher",
      description: "Usually not used! Only with multiple CMS Data Loaders, use this to choose which to show. Otherwise, go select the CMS Data Loader if you want to load different data.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    }
  }
};
function CmsCount(_ref11) {
  var className = _ref11.className,
    table = _ref11.table,
    rest = _objectWithoutPropertiesLoose(_ref11, _excluded2);
  var tables = useTablesWithDataLoaded("count");
  var res = useCount(tables, table);
  var unknown = React.createElement("div", Object.assign({
    className: className
  }, rest), "Count: ", table != null ? table : "Unknown Model");
  if (!res) {
    return unknown;
  }
  if (res.count == null) {
    return null;
  } else {
    return React.createElement("div", Object.assign({
      className: className
    }, rest), new Intl.NumberFormat().format(res.count));
  }
}
var DEFAULT_TYPE_FILTERS = ["text" /* TEXT */];
function deriveInferredTableField(opts) {
  var _tables$find;
  var table = opts.table,
    tables = opts.tables,
    field = opts.field,
    typeFilters = opts.typeFilters;
  if (!table) return undefined;
  var schema = tables == null || (_tables$find = tables.find(function (t) {
    return t.identifier === table;
  })) == null ? void 0 : _tables$find.schema;
  var fieldMeta = field ? schema == null ? void 0 : schema.fields.find(function (f) {
    return f.identifier === field;
  }) : schema == null ? void 0 : schema.fields.find(function (f) {
    return (typeFilters != null ? typeFilters : DEFAULT_TYPE_FILTERS).includes(f.type);
  });
  return fieldMeta;
}
function assertNever(_) {
  throw new Error("unexpected branch taken");
}
function renderValue(value, type, props) {
  switch (type) {
    case "number" /* NUMBER */:
    case "boolean" /* BOOLEAN */:
    case "text" /* TEXT */:
    case "long-text" /* LONG_TEXT */:
    case "date-time" /* DATE_TIME */:
    case "enum" /* ENUM */:
    case "ref" /* REF */:
      return React.createElement("div", Object.assign({}, props), value);
    case "rich-text" /* RICH_TEXT */:
      return React.createElement("div", Object.assign({
        dangerouslySetInnerHTML: {
          __html: value
        },
        style: {
          whiteSpace: "normal"
        }
      }, props));
    case "image" /* IMAGE */:
      if (value && typeof value === "object" && value.url && value.imageMeta) {
        return React.createElement("img", Object.assign({
          src: value.url,
          width: value.imageMeta.width,
          height: value.imageMeta.height
        }, props));
      }
      return null;
    case "file" /* FILE */:
      if (value && typeof value === "object" && value.url && value.name) {
        return React.createElement("a", Object.assign({
          href: value.url,
          target: "_blank"
        }, props), value.name);
      }
      return null;
    default:
      assertNever();
  }
}
var cmsRowLinkMeta = {
  name: componentPrefix + "-row-link",
  displayName: "CMS Entry Link",
  importName: "CmsRowLink",
  importPath: modulePath,
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        tag: "a",
        value: "Link"
      }
    },
    table: {
      type: "choice",
      displayName: "Model",
      hidden: function hidden(props, ctx) {
        var _ctx$tables$length3, _ctx$tables3;
        return ((_ctx$tables$length3 = ctx == null || (_ctx$tables3 = ctx.tables) == null ? void 0 : _ctx$tables3.length) != null ? _ctx$tables$length3 : 0) <= 1 && !props.table;
      },
      helpText: "Pick model from a CMS Data Fetcher",
      description: "Usually not used! Only with multiple CMS Data Loaders, use this to choose which to show. Otherwise, go select the CMS Data Loader if you want to load different data.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    },
    field: {
      type: "choice",
      displayName: "Field",
      description: "Field (from model schema) to use.",
      options: function options(_ref12, ctx) {
        var _ctx$table4;
        var table = _ref12.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table4 = ctx == null ? void 0 : ctx.table) != null ? _ctx$table4 : table);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        var _ctx$fieldMeta3, _ctx$fieldMeta4;
        return (ctx == null || (_ctx$fieldMeta3 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta3.name) || (ctx == null || (_ctx$fieldMeta4 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta4.identifier);
      }
    },
    hrefProp: {
      type: "string",
      displayName: '"href" prop',
      description: "Prop to inject into children",
      defaultValue: "href"
    },
    prefix: {
      type: "string",
      displayName: "Optional prefix",
      description: "Prefix to prepend to prop value.",
      hidden: function hidden(_, ctx) {
        var _ctx$fieldMeta5;
        return (ctx == null || (_ctx$fieldMeta5 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta5.type) === "file";
      }
    },
    suffix: {
      type: "string",
      displayName: "Optional suffix",
      description: "Suffix to append to prop value.",
      hidden: function hidden(_, ctx) {
        var _ctx$fieldMeta6;
        return (ctx == null || (_ctx$fieldMeta6 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta6.type) === "file";
      }
    }
  }
};
function CmsRowLink(_ref13) {
  var _res$row$data2;
  var table = _ref13.table,
    field = _ref13.field,
    hrefProp = _ref13.hrefProp,
    children = _ref13.children,
    setControlContextData = _ref13.setControlContextData,
    prefix = _ref13.prefix,
    suffix = _ref13.suffix;
  var tables = useTablesWithDataLoaded("rows");
  var res = useRow(tables, table);
  if (!res || !res.row) {
    return React.createElement(React.Fragment, null, children);
  }
  var fieldMeta = deriveInferredTableField({
    table: res.table,
    tables: tables,
    field: field,
    typeFilters: ["file" /* FILE */, "text" /* TEXT */]
  });
  if (tables) {
    // TODO: Only include table if __plasmic_cms_row_{table} exists.
    setControlContextData == null || setControlContextData({
      tables: tables,
      table: res.table,
      row: res.row,
      fieldMeta: fieldMeta
    });
  }
  if (!fieldMeta) {
    return React.createElement(React.Fragment, null, children);
  }
  if (!children) {
    return null;
  }
  var value = ((_res$row$data2 = res.row.data) == null ? void 0 : _res$row$data2[fieldMeta.identifier]) || "";
  var childrenWithProps = React.Children.map(children, function (child) {
    if (React.isValidElement(child)) {
      var _React$cloneElement;
      return React.cloneElement(child, (_React$cloneElement = {}, _React$cloneElement[hrefProp] = fieldMeta.type === "file" /* FILE */ ? value.url : prefix || suffix ? "" + (prefix || "") + value + (suffix || "") : value, _React$cloneElement));
    }
    return child;
  });
  return React.createElement(React.Fragment, null, childrenWithProps != null ? childrenWithProps : null);
}
var cmsRowImageMeta = {
  name: componentPrefix + "-row-image",
  displayName: "CMS Entry Image",
  importName: "CmsRowImage",
  importPath: modulePath,
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "img",
        src: "https://studio.plasmic.app/static/img/placeholder-full.png"
      }
    },
    table: {
      type: "choice",
      displayName: "Model",
      hidden: function hidden(props, ctx) {
        var _ctx$tables$length4, _ctx$tables4;
        return ((_ctx$tables$length4 = ctx == null || (_ctx$tables4 = ctx.tables) == null ? void 0 : _ctx$tables4.length) != null ? _ctx$tables$length4 : 0) <= 1 && !props.table;
      },
      helpText: "Pick model from a CMS Data Fetcher",
      description: "Usually not used! Only with multiple CMS Data Loaders, use this to choose which to show. Otherwise, go select the CMS Data Loader if you want to load different data.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    },
    field: {
      type: "choice",
      displayName: "Field",
      description: "Field (from model schema) to use.",
      options: function options(_ref14, ctx) {
        var _ctx$table5;
        var table = _ref14.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table5 = ctx == null ? void 0 : ctx.table) != null ? _ctx$table5 : table, ["image" /* IMAGE */]);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        var _ctx$fieldMeta7, _ctx$fieldMeta8;
        return (ctx == null || (_ctx$fieldMeta7 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta7.name) || (ctx == null || (_ctx$fieldMeta8 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta8.identifier);
      }
    },
    srcProp: {
      type: "string",
      displayName: 'Image "src" prop',
      description: "Prop to inject into children",
      defaultValue: "src"
    }
  }
};
function CmsRowImage(_ref15) {
  var _res$row$data3;
  var table = _ref15.table,
    field = _ref15.field,
    srcProp = _ref15.srcProp,
    children = _ref15.children,
    setControlContextData = _ref15.setControlContextData;
  var tables = useTablesWithDataLoaded("rows");
  var res = useRow(tables, table);
  if (!res || !res.row) {
    return React.createElement(React.Fragment, null, children);
  }
  var fieldMeta = deriveInferredTableField({
    table: res.table,
    tables: tables,
    field: field,
    typeFilters: ["image" /* IMAGE */]
  });
  if (tables) {
    // TODO: Only include table if __plasmic_cms_row_{table} exists.
    setControlContextData == null || setControlContextData({
      tables: tables,
      table: res.table,
      row: res.row,
      fieldMeta: fieldMeta
    });
  }
  if (!fieldMeta) {
    return React.createElement(React.Fragment, null, children);
  }
  var value = ((_res$row$data3 = res.row.data) == null ? void 0 : _res$row$data3[fieldMeta.identifier]) || "";
  var childrenWithProps = React.Children.map(children, function (child) {
    if (React.isValidElement(child) && value) {
      var _React$cloneElement3;
      if (typeof value === "object" && value.url && value.imageMeta) {
        var _React$cloneElement2;
        return React.cloneElement(child, (_React$cloneElement2 = {}, _React$cloneElement2[srcProp] = {
          src: value.url,
          fullHeight: value.imageMeta.height,
          fullWidth: value.imageMeta.width
        }, _React$cloneElement2));
      }
      return React.cloneElement(child, (_React$cloneElement3 = {}, _React$cloneElement3[srcProp] = value, _React$cloneElement3));
    }
    return child;
  });
  return React.createElement(React.Fragment, null, childrenWithProps);
}
var cmsRowFieldValueMeta = {
  name: componentPrefix + "-row-value",
  displayName: "CMS Entry Value",
  importName: "CmsRowFieldValue",
  importPath: modulePath,
  props: {
    children: {
      type: "slot"
    },
    table: {
      type: "choice",
      displayName: "Model",
      hidden: function hidden(props, ctx) {
        var _ctx$tables$length5, _ctx$tables5;
        return ((_ctx$tables$length5 = ctx == null || (_ctx$tables5 = ctx.tables) == null ? void 0 : _ctx$tables5.length) != null ? _ctx$tables$length5 : 0) <= 1 && !props.table;
      },
      helpText: "Pick model from a CMS Data Fetcher",
      description: "Usually not used! Only with multiple CMS Data Loaders, use this to choose which to show. Otherwise, go select the CMS Data Loader if you want to load different data.",
      options: function options(_, ctx) {
        return mkTableOptions(ctx == null ? void 0 : ctx.tables);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        return ctx == null ? void 0 : ctx.table;
      }
    },
    field: {
      type: "choice",
      displayName: "Field",
      description: "Field (from model schema) to use.",
      options: function options(_ref16, ctx) {
        var _ctx$table6;
        var table = _ref16.table;
        return mkFieldOptions(ctx == null ? void 0 : ctx.tables, (_ctx$table6 = ctx == null ? void 0 : ctx.table) != null ? _ctx$table6 : table);
      },
      defaultValueHint: function defaultValueHint(_, ctx) {
        var _ctx$fieldMeta9, _ctx$fieldMeta10;
        return (ctx == null || (_ctx$fieldMeta9 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta9.name) || (ctx == null || (_ctx$fieldMeta10 = ctx.fieldMeta) == null ? void 0 : _ctx$fieldMeta10.identifier);
      }
    },
    valueProp: {
      type: "string",
      displayName: "Value prop",
      description: "Prop to inject into children as",
      defaultValue: "children"
    }
  }
};
function CmsRowFieldValue(_ref17) {
  var _res$row$data4;
  var table = _ref17.table,
    field = _ref17.field,
    valueProp = _ref17.valueProp,
    children = _ref17.children,
    setControlContextData = _ref17.setControlContextData,
    rest = _objectWithoutPropertiesLoose(_ref17, _excluded3);
  var tables = useTablesWithDataLoaded("rows");
  var res = useRow(tables, table);
  if (!res || !res.row) {
    return React.createElement(React.Fragment, null, children);
  }
  var fieldMeta = deriveInferredTableField({
    table: res.table,
    tables: tables,
    field: field,
    typeFilters: ["text" /* TEXT */]
  });
  if (tables) {
    // TODO: Only include table if __plasmic_cms_row_{table} exists.
    setControlContextData == null || setControlContextData({
      tables: tables,
      table: res.table,
      row: res.row,
      fieldMeta: fieldMeta
    });
  }
  if (!fieldMeta) {
    return React.createElement(React.Fragment, null, children);
  }
  var value = ((_res$row$data4 = res.row.data) == null ? void 0 : _res$row$data4[fieldMeta.identifier]) || "";
  var childrenWithProps = React.Children.map(children, function (child) {
    if (React.isValidElement(child)) {
      var _extends2;
      return React.cloneElement(child, _extends({}, rest, (_extends2 = {}, _extends2[valueProp] = value, _extends2)));
    }
    return child;
  });
  return React.createElement(React.Fragment, null, childrenWithProps);
}

function registerAll(loader) {
  //const registerContext = loader?.registerContext ?? hostRegisterContext;
  //registerContext(CmsDataProvider, cmsDataProviderMeta);
  var _registerComponent = function _registerComponent(Component, defaultMeta) {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  var _registerGlobalContext = function _registerGlobalContext(Component, defaultMeta) {
    if (loader) {
      loader.registerGlobalContext(Component, defaultMeta);
    } else {
      registerGlobalContext(Component, defaultMeta);
    }
  };
  _registerGlobalContext(CmsCredentialsProvider, cmsCredentialsProviderMeta);
  _registerComponent(CmsQueryRepeater, cmsQueryRepeaterMeta);
  _registerComponent(CmsRowField, cmsRowFieldMeta);
  _registerComponent(CmsRowLink, cmsRowLinkMeta);
  _registerComponent(CmsRowImage, cmsRowImageMeta);
  _registerComponent(CmsRowFieldValue, cmsRowFieldValueMeta);
  _registerComponent(CmsCount, cmsCountFieldMeta);
}

export { API, CmsCount, CmsCredentialsProvider, CmsQueryRepeater, CmsRowField, CmsRowFieldValue, CmsRowImage, CmsRowLink, HttpError, cmsCountFieldMeta, cmsCredentialsProviderMeta, cmsQueryRepeaterMeta, cmsRowFieldMeta, cmsRowFieldValueMeta, cmsRowImageMeta, cmsRowLinkMeta, mkApi, registerAll };
//# sourceMappingURL=plasmic-cms.esm.js.map
