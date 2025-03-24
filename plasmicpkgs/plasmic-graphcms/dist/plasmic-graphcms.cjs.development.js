'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var host = require('@plasmicapp/host');
var query = require('@plasmicapp/query');
var get = _interopDefault(require('dlv'));
var React = require('react');
var React__default = _interopDefault(React);

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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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

function ensure(x) {
  if (x === null || x === undefined) {
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-graphcms";
var CredentialsContext = /*#__PURE__*/React__default.createContext(undefined);
var GraphCMSCredentialsProviderMeta = {
  name: "GraphCMSCredentialsProvider",
  displayName: "Hygraph Credentials Provider",
  description: "Permanent Auth Tokens are used for controlling access to querying, mutating content, and comes in the form of Bearer token authentication.[get your Auth Token](https://graphcms.com/docs/api-reference/basics/authorization#permanent-auth-tokens).",
  importName: "GraphCMSCredentialsProvider",
  importPath: modulePath,
  props: {
    apiUrl: {
      type: "string",
      displayName: "API url",
      description: "API url of your Hygraph CMS ",
      defaultValue: "https://api-us-west-2.graphcms.com/v2/cl3ua8gpwdni001z10ucc482i/master"
    },
    authToken: {
      type: "string",
      displayName: "Auth Token ",
      description: "Auth Token",
      defaultValue: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQwMDg5NzUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsM3VhOGdwd2RuaTAwMXoxMHVjYzQ4MmkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWU2NGY0ZDMtODE3Yy00OTdkLWE4YTQtNzA4OTY4Zjg3OTc3IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.bWr3rpqT7UmJ5NwoEVatkW_QsqxC8tB-zxdcTecIVR19oS5tcoxbbmwe946B-57Zmqrnc5rNntj9UjN065RqEDFM0iPhy4BCgDHCFfNUuHg5Mmq1qu8-j_ZSN90aJfwVmMNYH9GuOYFiOCd6uytLe8fPcQRWOKpXEcO8q4BusrreCvwkwXIaZV2dq-FOJ4LdBdKcRWwfQWeMdthVzBxrlrxogP_xEYQuMNdfbe5tGWgVsRVDN7eQjB1w9Srqc9T_NgY6x-aL8rPmobcZ1IMdUj9klPPm_dINMzrhZS4OR-HXHPwdnSFObgPeJDPI6YEo2SFAg78PMCNZNRT2DtfDVC4F7cLboxaNUNY4r6Z2d9uBu2N1o05zIXra6Q4JIA--0xBfELTUcmU06Ococioyui8PCI5r_QlRSSlnxrdb85Ht00yMDBRGHPtySGUNiEy9Lq5RcoW1a41bJRmZ-z1Q8zluOUHrgwcIb2DN8xKB9YThPce7ytnFcVajH0K3Hnd57m7SukCgZACmULt_EK0NYTUe1BBmTC8eg9ZBM3lplPWSUzBKWgajGTUNK50KRWokAke_UCEf0gssR3MYLIo5PVN131-bD57nccEPBkegYmmZUACRoYHyI_gQYC-0---MXCS6BV7cK1D-_yDbiBrCCixyKNBYCmhxuZOxVcWu4dk"
    }
  }
};
function GraphCMSCredentialsProvider(_ref) {
  var apiUrl = _ref.apiUrl,
    authToken = _ref.authToken,
    children = _ref.children;
  return React__default.createElement(CredentialsContext.Provider, {
    value: {
      apiUrl: apiUrl,
      authToken: authToken
    }
  }, children);
}
var GraphCMSFetcherMeta = {
  name: "GraphCMSFetcher",
  displayName: "Hygraph Fetcher",
  importName: "GraphCMSFetcher",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Hygraph data and repeats content of children once for every row fetched. ",
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        styles: {
          padding: "8px"
        },
        children: {
          type: "component",
          name: "GraphCMSField"
        }
      }
    },
    query: {
      type: "code",
      lang: "graphql",
      endpoint: function endpoint(props, ctx) {
        var _ctx$endpoint;
        return (_ctx$endpoint = ctx == null ? void 0 : ctx.endpoint) != null ? _ctx$endpoint : "";
      },
      headers: function headers(props, ctx) {
        var _ctx$headers;
        return (_ctx$headers = ctx == null ? void 0 : ctx.headers) != null ? _ctx$headers : "";
      }
    },
    varOverrides: {
      type: "object",
      description: "Pass in dynamic values for your query variables, as an object of key-values",
      defaultValue: {}
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every entry.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, GraphCMS Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function compact(arr) {
  return arr.filter(function (x) {
    return !!x;
  });
}
function GraphCMSFetcher(_ref2) {
  var query$1 = _ref2.query,
    children = _ref2.children,
    className = _ref2.className,
    noLayout = _ref2.noLayout,
    noAutoRepeat = _ref2.noAutoRepeat,
    varOverrides = _ref2.varOverrides,
    setControlContextData = _ref2.setControlContextData;
  var creds = ensure(React.useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    query: query$1,
    creds: creds,
    varOverrides: varOverrides
  });
  var headers = {
    Authorization: "Bearer " + creds.authToken
  };
  var _usePlasmicQueryData = query.usePlasmicQueryData(cacheKey, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (query$1) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", null);
          case 2:
            if (varOverrides && typeof varOverrides === "object" && Object.keys(varOverrides).length > 0) {
              query$1 = _extends({}, query$1, {
                variables: _extends({}, query$1.variables, varOverrides)
              });
            }
            _context.next = 5;
            return fetch(creds.apiUrl, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(query$1)
            });
          case 5:
            data = _context.sent;
            _context.next = 8;
            return data.json();
          case 8:
            return _context.abrupt("return", _context.sent);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))),
    data = _usePlasmicQueryData.data,
    error = _usePlasmicQueryData.error,
    isLoading = _usePlasmicQueryData.isLoading;
  setControlContextData == null || setControlContextData({
    endpoint: creds.apiUrl,
    headers: headers
  });
  if (!query$1) {
    return React__default.createElement("div", null, "Please make a query in order to fetch data ");
  }
  if (!creds.apiUrl || !creds.authToken) {
    return React__default.createElement("div", null, "Please specify a valid API Credentials: API Url, Auth Token");
  }
  if (error) {
    return React__default.createElement("div", null, "Error: ", error.message);
  }
  if (isLoading) {
    return null;
  }
  if (!(data != null && data.data) || compact(Object.values(data == null ? void 0 : data.data)).length === 0) {
    return React__default.createElement("div", null, "Data not found");
  }
  var renderedData = noAutoRepeat ? children : Object.values(data == null ? void 0 : data.data).flatMap(function (model) {
    return Array.isArray(model) ? model : [model];
  }).map(function (item, i) {
    return React__default.createElement(host.DataProvider, {
      key: JSON.stringify(item),
      name: "graphCmsItem",
      data: item
    }, host.repeatedElement(i, children));
  });
  return noLayout ? React__default.createElement(React__default.Fragment, null, " ", renderedData, " ") : React__default.createElement("div", {
    className: className
  }, " ", renderedData, " ");
}
var GraphCMSFieldMeta = {
  name: "GraphCMSField",
  displayName: "Hygraph Field",
  importName: "GraphCMSField",
  importPath: modulePath,
  props: {
    path: {
      type: "dataSelector",
      data: function data(props, ctx) {
        var _ctx$data;
        return (_ctx$data = ctx == null ? void 0 : ctx.data) != null ? _ctx$data : {};
      },
      displayName: "Field",
      description: "Field to be displayed."
    },
    themeClassName: {
      type: "themeResetClass",
      targetAllTags: true
    }
  }
};
function GraphCMSField(_ref4) {
  var _data$mimeType;
  var className = _ref4.className,
    path = _ref4.path,
    themeClassName = _ref4.themeClassName,
    setControlContextData = _ref4.setControlContextData;
  var item = host.useSelector("graphCmsItem");
  if (!item) {
    return React__default.createElement("div", null, "GraphCMSField must be used within a GraphCMSFetcher ");
  }
  setControlContextData == null || setControlContextData({
    data: item
  });
  if (!path) {
    return React__default.createElement("div", null, "Please specify a valid path or select a field.");
  }
  // We need to improve this check by making an introspection query
  var isRichText = function isRichText(data) {
    return "html" in data;
  };
  var data = get(item, path);
  if (typeof data === "object" && (_data$mimeType = data.mimeType) != null && _data$mimeType.startsWith("image")) {
    return React__default.createElement("img", {
      src: data.url,
      className: className
    });
  } else if (typeof data === "object" && isRichText(data)) {
    return React__default.createElement("div", {
      className: themeClassName + " " + className,
      dangerouslySetInnerHTML: {
        __html: data.html
      }
    });
  } else if (!data || typeof data === "object") {
    return React__default.createElement("div", {
      className: className
    }, "Please specify a valid field.");
  } else {
    return React__default.createElement("div", {
      className: className
    }, data);
  }
}

function registerAll(loader) {
  var _registerComponent = function _registerComponent(Component, defaultMeta) {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  if (loader) {
    loader.registerGlobalContext(GraphCMSCredentialsProvider, GraphCMSCredentialsProviderMeta);
  } else {
    registerGlobalContext(GraphCMSCredentialsProvider, GraphCMSCredentialsProviderMeta);
  }
  _registerComponent(GraphCMSFetcher, GraphCMSFetcherMeta);
  _registerComponent(GraphCMSField, GraphCMSFieldMeta);
}

exports.GraphCMSCredentialsProvider = GraphCMSCredentialsProvider;
exports.GraphCMSCredentialsProviderMeta = GraphCMSCredentialsProviderMeta;
exports.GraphCMSFetcher = GraphCMSFetcher;
exports.GraphCMSFetcherMeta = GraphCMSFetcherMeta;
exports.GraphCMSField = GraphCMSField;
exports.GraphCMSFieldMeta = GraphCMSFieldMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-graphcms.cjs.development.js.map
