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

var queryOperators = [{
  value: "search",
  label: 'Search'
}, {
  value: "slug",
  label: 'Filter by Slug'
}, {
  value: "author",
  label: 'Filter by author'
}];

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-wordpress";
var CredentialsContext = /*#__PURE__*/React__default.createContext(undefined);
var WordpressProviderMeta = {
  name: "WordpressProvider",
  displayName: "Wordpress Provider",
  description: "The endpoint of your Wordpress",
  importName: "WordpressProvider",
  importPath: modulePath,
  props: {
    wordpressUrl: {
      type: "string",
      displayName: "Wordpress URL",
      description: "URL of your Wordpress ",
      defaultValue: "https://techcrunch.com/"
    }
  }
};
function WordpressProvider(_ref) {
  var wordpressUrl = _ref.wordpressUrl,
    children = _ref.children;
  return React__default.createElement(CredentialsContext.Provider, {
    value: {
      wordpressUrl: wordpressUrl
    }
  }, children);
}
var WordpressFetcherMeta = {
  name: "WordpressFetcher",
  displayName: "Wordpress Fetcher",
  importName: "WordpressFetcher",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Wordpress data and repeats content of children once for every row fetched. ",
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "8px",
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
          name: "WordpressField"
        }
      }
    },
    queryType: {
      type: "choice",
      options: ["posts", "pages"]
    },
    queryOperator: {
      type: "choice",
      displayName: "Query Operator",
      description: "Filter Parameter filter by",
      options: function options(props, ctx) {
        return queryOperators.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      hidden: function hidden(props, ctx) {
        return !props.queryType;
      }
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter",
      hidden: function hidden(props, ctx) {
        return !props.queryOperator;
      }
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Limit"
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every posts or pages.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Wordpress Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function WordpressFetcher(_ref2) {
  var queryOperator = _ref2.queryOperator,
    filterValue = _ref2.filterValue,
    noAutoRepeat = _ref2.noAutoRepeat,
    limit = _ref2.limit,
    queryType = _ref2.queryType,
    children = _ref2.children,
    className = _ref2.className,
    noLayout = _ref2.noLayout,
    setControlContextData = _ref2.setControlContextData;
  var creds = ensure(React.useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    queryOperator: queryOperator,
    filterValue: filterValue,
    limit: limit,
    queryType: queryType,
    creds: creds
  });
  var _usePlasmicQueryData = query.usePlasmicQueryData(queryType === "posts" ? cacheKey + "/posts" : null, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, query, resp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            url = creds.wordpressUrl + "/wp-json/wp/v2/posts";
            if (limit) {
              query = url + "?per_page=" + limit;
            } else {
              query = url;
            }
            _context.next = 4;
            return fetch(query);
          case 4:
            resp = _context.sent;
            _context.next = 7;
            return resp.json();
          case 7:
            return _context.abrupt("return", _context.sent);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))),
    posts = _usePlasmicQueryData.data;
  var _usePlasmicQueryData2 = query.usePlasmicQueryData(queryType === "pages" ? cacheKey + "/pages" : null, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var url, query, resp;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            url = creds.wordpressUrl + "/wp-json/wp/v2/pages";
            if (limit) {
              query = url + "?per_page=" + limit;
            } else {
              query = url;
            }
            _context2.next = 4;
            return fetch(query);
          case 4:
            resp = _context2.sent;
            _context2.next = 7;
            return resp.json();
          case 7:
            return _context2.abrupt("return", _context2.sent);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))),
    pages = _usePlasmicQueryData2.data;
  setControlContextData == null || setControlContextData({
    posts: posts == null ? void 0 : posts.map(function (post) {
      return {
        value: post.id,
        label: post.slug
      };
    }),
    pages: pages == null ? void 0 : pages.map(function (page) {
      return {
        value: page.id,
        label: page.slug
      };
    })
  });
  var _usePlasmicQueryData3 = query.usePlasmicQueryData(queryType === "pages" && queryOperator && filterValue ? cacheKey + "/pages/filtered" : null, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var url, query, resp;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            url = creds.wordpressUrl + "/wp-json/wp/v2/pages?" + queryOperator + "=" + filterValue;
            if (limit) {
              query = url + "&per_page=" + limit;
            } else {
              query = url;
            }
            _context3.next = 4;
            return fetch(query);
          case 4:
            resp = _context3.sent;
            _context3.next = 7;
            return resp.json();
          case 7:
            return _context3.abrupt("return", _context3.sent);
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))),
    filteredPages = _usePlasmicQueryData3.data;
  var _usePlasmicQueryData4 = query.usePlasmicQueryData(queryType === "posts" && queryOperator && filterValue ? cacheKey + "/posts/filtered" : null, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var url, query, resp;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            url = creds.wordpressUrl + "/wp-json/wp/v2/posts?" + queryOperator + "=" + filterValue;
            if (limit) {
              query = url + "&per_page=" + limit;
            } else {
              query = url;
            }
            _context4.next = 4;
            return fetch(query);
          case 4:
            resp = _context4.sent;
            _context4.next = 7;
            return resp.json();
          case 7:
            return _context4.abrupt("return", _context4.sent);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))),
    filteredPosts = _usePlasmicQueryData4.data;
  if (!queryType) {
    return React__default.createElement("div", null, "Please specify query type");
  }
  if (queryOperator && !filterValue) {
    return React__default.createElement("div", null, "Please specify Filter Value");
  }
  if (!queryOperator && filterValue) {
    return React__default.createElement("div", null, "Please specify Query Operator");
  }
  var renderedData;
  if (queryType === "posts" && posts && !filteredPosts) {
    renderedData = noAutoRepeat ? children : posts == null ? void 0 : posts.map(function (post, i) {
      return React__default.createElement(host.DataProvider, {
        key: post.id,
        name: "wordpressItem",
        data: post,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: "currentWordpressPost",
        data: post
      }, host.repeatedElement(i, children)));
    });
  } else if (queryType === "pages" && pages && !filteredPages) {
    renderedData = noAutoRepeat ? children : pages == null ? void 0 : pages.map(function (page, i) {
      return React__default.createElement(host.DataProvider, {
        key: page.id,
        name: "wordpressItem",
        data: page,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: "currentWordpressPage",
        data: page
      }, host.repeatedElement(i, children)));
    });
  } else if (queryType === "pages" && filteredPages) {
    if (!filteredPages && queryOperator === "pages") {
      return React__default.createElement("div", null, "Please make sure queryType is pages");
    }
    if (filteredPages.length === 0) {
      return React__default.createElement("div", null, "No published pages found");
    }
    renderedData = noAutoRepeat ? children : filteredPages == null ? void 0 : filteredPages.map(function (page, i) {
      return React__default.createElement(host.DataProvider, {
        key: page.id,
        name: "wordpressItem",
        data: page,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: "currentWordpressPage",
        data: page
      }, host.repeatedElement(i, children)));
    });
  } else if (queryType === "posts" && filteredPosts) {
    if (!filteredPosts && queryOperator === "posts") {
      return React__default.createElement("div", null, "Please make sure queryType is posts");
    }
    if (filteredPosts.length === 0) {
      return React__default.createElement("div", null, "No published posts found");
    }
    renderedData = filteredPosts == null ? void 0 : filteredPosts.map(function (page, i) {
      return React__default.createElement(host.DataProvider, {
        key: page.id,
        name: "wordpressItem",
        data: page,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: "currentWordpressPost",
        data: page
      }, host.repeatedElement(i, children)));
    });
  } else {
    return React__default.createElement("div", null, "Please choose the Query Type in order to render the data");
  }
  var response = [pages, posts];
  return React__default.createElement(host.DataProvider, {
    data: response,
    name: "wordpressItems"
  }, noLayout ? React__default.createElement(React__default.Fragment, null, " ", renderedData, " ") : React__default.createElement("div", {
    className: className
  }, " ", renderedData, " "));
}
var WordpressFieldMeta = {
  name: "WordpressField",
  displayName: "Wordpress Field",
  importName: "WordpressField",
  importPath: modulePath,
  props: {
    field: {
      type: "choice",
      options: ["title", "slug", "content", "excerpt", "date", "modified", "link", "status"],
      displayName: "Field",
      description: "Field to be displayed."
    }
  }
};
function WordpressField(_ref7) {
  var className = _ref7.className,
    field = _ref7.field,
    setControlContextData = _ref7.setControlContextData;
  var item = host.useSelector("wordpressItem");
  if (!item) {
    return React__default.createElement("div", null, "WordpressField must be used within a WordpressFetcher ");
  }
  setControlContextData == null || setControlContextData({
    data: item
  });
  if (!field) {
    return React__default.createElement("div", null, "Please specify a valid path or select a field.");
  }
  var data = get(item, field);
  if (typeof data === "object" && "rendered" in data) {
    return React__default.createElement("div", {
      className: className,
      style: {
        whiteSpace: "normal"
      },
      dangerouslySetInnerHTML: {
        __html: data.rendered
      }
    });
  } else if (!data || typeof data === "object") {
    return React__default.createElement("div", {
      className: className
    }, "Please specify a valid field.");
  } else {
    return React__default.createElement("div", {
      className: className
    }, " ", data, " ");
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
    loader.registerGlobalContext(WordpressProvider, WordpressProviderMeta);
  } else {
    registerGlobalContext(WordpressProvider, WordpressProviderMeta);
  }
  _registerComponent(WordpressFetcher, WordpressFetcherMeta);
  _registerComponent(WordpressField, WordpressFieldMeta);
}

exports.WordpressFetcher = WordpressFetcher;
exports.WordpressFetcherMeta = WordpressFetcherMeta;
exports.WordpressField = WordpressField;
exports.WordpressFieldMeta = WordpressFieldMeta;
exports.WordpressProvider = WordpressProvider;
exports.WordpressProviderMeta = WordpressProviderMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-wordpress.cjs.development.js.map
