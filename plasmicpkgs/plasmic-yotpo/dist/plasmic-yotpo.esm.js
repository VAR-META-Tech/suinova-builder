import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { usePlasmicQueryData } from '@plasmicapp/query';
import isArray from 'lodash-es/isArray';
import React, { useContext } from 'react';

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

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-yotpo";
var CredentialsContext = /*#__PURE__*/React.createContext(undefined);
var YotpoCredentialsProviderMeta = {
  name: "Yotpo",
  displayName: "Yotpo Credentials Provider",
  description: "Your app key is sometimes referred to as your Store ID.[get your App Key](https://support.yotpo.com/en/article/finding-your-yotpo-app-key-and-secret-key).",
  importName: "Yotpo",
  importPath: modulePath,
  props: {
    appKey: {
      type: "string",
      displayName: "App Key",
      description: "App Key of your Yotpo Store "
    },
    uToken: {
      type: "string",
      displayName: "UToken",
      description: "Utoken is required in non-public API calls to ensure private account data is accessible only by authorized users."
    }
  }
};
function YotpoCredentialsProvider(_ref) {
  var appKey = _ref.appKey,
    uToken = _ref.uToken,
    children = _ref.children;
  return React.createElement(CredentialsContext.Provider, {
    value: {
      appKey: appKey,
      uToken: uToken
    }
  }, children);
}
var YotpoReviewsMeta = {
  name: "hostless-yotpo-star-reviews",
  displayName: "Yotpo Reviews",
  importName: "YotpoReviews",
  importPath: modulePath,
  providesData: true,
  description: "Yotpo Reviews for your product pages ",
  defaultStyles: {
    width: "400px",
    height: "600px"
  },
  props: {
    reviewId: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$reviews$map, _ctx$reviews;
        return (_ctx$reviews$map = ctx == null || (_ctx$reviews = ctx.reviews) == null ? void 0 : _ctx$reviews.map(function (item) {
          return {
            label: item == null ? void 0 : item.name,
            value: item == null ? void 0 : item.id
          };
        })) != null ? _ctx$reviews$map : [];
      },
      displayName: "Review",
      description: "Review Widget which to be displayed"
    },
    productPrice: {
      type: "string",
      displayName: "Price",
      description: "Price of the Product"
    },
    currency: {
      type: "string",
      displayName: "Currency",
      description: "Currency"
    }
  }
};
function YotpoReviews(_ref2) {
  var reviewId = _ref2.reviewId,
    setControlContextData = _ref2.setControlContextData,
    productPrice = _ref2.productPrice,
    currency = _ref2.currency,
    className = _ref2.className;
  var creds = ensure(useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    creds: creds,
    reviewId: reviewId
  });
  React.useEffect(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = "(function e(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.async=true,e.src=\"//staticw2.yotpo.com/" + creds.appKey + "/widget.js\";var t=document.getElementsByTagName(\"script\")[0];t.parentNode.insertBefore(e,t)})();";
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [creds]);
  var _usePlasmicQueryData = usePlasmicQueryData(cacheKey + "/reviews", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var options, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context.next = 3;
            return fetch("https://api.yotpo.com/v1/apps/" + creds.appKey + "/reviews?utoken=" + creds.uToken, options);
          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.json());
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))),
    reviewsData = _usePlasmicQueryData.data;
  var _usePlasmicQueryData2 = usePlasmicQueryData(cacheKey + "/review", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var options, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (reviewId) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", undefined);
          case 2:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context2.next = 5;
            return fetch("https://api.yotpo.com/reviews/" + reviewId + "?utoken=" + creds.uToken, options);
          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.json());
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))),
    reviewData = _usePlasmicQueryData2.data;
  if (!reviewsData) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }
  var data = Object.values(reviewsData).map(function (item) {
    return item;
  });
  setControlContextData == null || setControlContextData({
    reviews: data[0] || []
  });
  if (!creds.uToken || !creds.appKey) {
    return React.createElement("div", null, "Please specify a valid API Credentials: uToken,appKey");
  }
  if (!reviewData) {
    return React.createElement("div", null, "Please choose the reviewId");
  }
  if (!productPrice || !currency) {
    return React.createElement("div", null, " Please enter Product price and Currency");
  }
  var review = Object.values(reviewsData).flatMap(function (item, i) {
    return (isArray(item) ? item : [item]).filter(function (review) {
      return review.id === reviewId;
    });
  });
  var renderedData = reviewData == null ? void 0 : reviewData.response.review.products.map(function (item) {
    var _review$;
    var imageUrl = item == null ? void 0 : item.Product.images.map(function (image) {
      return image.image_url;
    });
    return React.createElement("div", {
      key: item.Product.id,
      className: "yotpo yotpo-main-widget",
      "data-product-id": (_review$ = review[0]) == null ? void 0 : _review$.sku,
      "data-price": productPrice,
      "data-currency": currency,
      "data-name": item == null ? void 0 : item.Product.name,
      "data-url": item == null ? void 0 : item.Product.shorten_url,
      "data-image-url": imageUrl
    });
  });
  return React.createElement("div", {
    className: className
  }, renderedData);
}
var YotpoStarRatingMeta = {
  name: "hostless-yotpo-star-rating",
  displayName: "Yotpo Star Rating",
  importName: "YotpoStarRating",
  importPath: modulePath,
  providesData: true,
  description: "Yotpo Star Rating for your product pages ",
  props: {
    productId: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$reviews$map2, _ctx$reviews2;
        return (_ctx$reviews$map2 = ctx == null || (_ctx$reviews2 = ctx.reviews) == null ? void 0 : _ctx$reviews2.map(function (item) {
          return {
            label: item == null ? void 0 : item.name,
            value: item == null ? void 0 : item.id
          };
        })) != null ? _ctx$reviews$map2 : [];
      },
      displayName: "Product",
      description: "Product which you want to show rating"
    }
  }
};
function YotpoStarRating(_ref5) {
  var productId = _ref5.productId,
    className = _ref5.className,
    setControlContextData = _ref5.setControlContextData;
  var creds = ensure(useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    creds: creds,
    productId: productId
  });
  React.useEffect(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = "(function e(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.async=true,e.src=\"//staticw2.yotpo.com/" + creds.appKey + "/widget.js\";var t=document.getElementsByTagName(\"script\")[0];t.parentNode.insertBefore(e,t)})();";
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [creds]);
  var _usePlasmicQueryData3 = usePlasmicQueryData(cacheKey + "/starReviews", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var options, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context3.next = 3;
            return fetch("https://api.yotpo.com/v1/apps/" + creds.appKey + "/reviews?utoken=" + creds.uToken, options);
          case 3:
            res = _context3.sent;
            return _context3.abrupt("return", res.json());
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))),
    reviews = _usePlasmicQueryData3.data;
  var _usePlasmicQueryData4 = usePlasmicQueryData(cacheKey + "/starReview", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var options, res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (productId) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", undefined);
          case 2:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context4.next = 5;
            return fetch("https://api.yotpo.com/reviews/" + productId + "?utoken=" + creds.uToken, options);
          case 5:
            res = _context4.sent;
            return _context4.abrupt("return", res.json());
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))),
    review = _usePlasmicQueryData4.data;
  if (!creds.uToken || !creds.appKey) {
    return React.createElement("div", null, "Please specify a valid API Credentials: uToken,appKey");
  }
  if (!reviews) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }
  var data = Object.values(reviews).map(function (item) {
    return item;
  });
  setControlContextData == null || setControlContextData({
    reviews: data[0] || []
  });
  if (!review) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }
  var product = Object.values(reviews).flatMap(function (item, i) {
    return (isArray(item) ? item : [item]).filter(function (review) {
      return review.id === productId;
    });
  });
  var renderedData = review == null ? void 0 : review.response.review.products.map(function (item) {
    var _product$;
    return React.createElement("div", {
      className: "yotpo bottomLine",
      "data-product-id": (_product$ = product[0]) == null ? void 0 : _product$.sku,
      "data-url": item.Product.product_url
    });
  });
  return React.createElement("div", {
    className: className
  }, renderedData);
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
    loader.registerGlobalContext(YotpoCredentialsProvider, YotpoCredentialsProviderMeta);
  } else {
    registerGlobalContext(YotpoCredentialsProvider, YotpoCredentialsProviderMeta);
  }
  _registerComponent(YotpoReviews, YotpoReviewsMeta);
  _registerComponent(YotpoStarRating, YotpoStarRatingMeta);
}

export { YotpoCredentialsProvider, YotpoCredentialsProviderMeta, YotpoReviews, YotpoReviewsMeta, YotpoStarRating, YotpoStarRatingMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-yotpo.esm.js.map
