import registerComponent from '@plasmicapp/host/registerComponent';
import React, { useRef, useMemo, useContext, createContext, useCallback } from 'react';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { useMutablePlasmicQueryData } from '@plasmicapp/query';
import { GlobalActionsProvider, useSelector, DataProvider, PlasmicCanvasContext, repeatedElement } from '@plasmicapp/host';
import Cookies from 'js-cookie';
import debounce from 'debounce';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
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
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
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

var _excluded = ["children"];
var Commerce = /*#__PURE__*/createContext({});
function CoreCommerceProvider(_ref) {
  var provider = _ref.provider,
    children = _ref.children;
  var providerRef = useRef(provider);
  // TODO: Remove the fetcherRef
  var fetcherRef = useRef(provider.fetcher);
  // If the parent re-renders this provider will re-render every
  // consumer unless we memoize the config
  var _providerRef$current = providerRef.current,
    locale = _providerRef$current.locale,
    cartCookie = _providerRef$current.cartCookie;
  var cfg = useMemo(function () {
    return {
      providerRef: providerRef,
      fetcherRef: fetcherRef,
      locale: locale,
      cartCookie: cartCookie
    };
  }, [locale, cartCookie]);
  return React.createElement(Commerce.Provider, {
    value: cfg
  }, children);
}
function getCommerceProvider(provider) {
  return function CommerceProvider(_ref2) {
    var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);
    return React.createElement(CoreCommerceProvider, {
      provider: _extends({}, provider, props)
    }, children);
  };
}
function useCommerce() {
  return useContext(Commerce);
}

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/commerce/src
  Changes: None
*/
// Taken from https://fettblog.eu/typescript-assertion-signatures/
function defineProperty(obj, prop, val) {
  Object.defineProperty(obj, prop, val);
}

var CommerceError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(CommerceError, _Error);
  function CommerceError(_ref) {
    var _this;
    var message = _ref.message,
      code = _ref.code,
      errors = _ref.errors;
    var error = message ? _extends({
      message: message
    }, code ? {
      code: code
    } : {}) : errors[0];
    _this = _Error.call(this, error.message) || this;
    _this.errors = message ? [error] : errors;
    if (error.code) _this.code = error.code;
    return _this;
  }
  return CommerceError;
}(/*#__PURE__*/_wrapNativeSuper(Error));
// Used for errors that come from a bad implementation of the hooks
var ValidationError = /*#__PURE__*/function (_CommerceError) {
  _inheritsLoose(ValidationError, _CommerceError);
  function ValidationError(options) {
    var _this2;
    _this2 = _CommerceError.call(this, options) || this;
    _this2.code = 'validation_error';
    return _this2;
  }
  return ValidationError;
}(CommerceError);
var FetcherError = /*#__PURE__*/function (_CommerceError2) {
  _inheritsLoose(FetcherError, _CommerceError2);
  function FetcherError(options) {
    var _this3;
    _this3 = _CommerceError2.call(this, options) || this;
    _this3.status = options.status;
    return _this3;
  }
  return FetcherError;
}(CommerceError);

var useData = function useData(options, input, fetcherFn, swrOptions, provider) {
  var hookInput = Array.isArray(input) ? input : Object.entries(input);
  var fetcher = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, query, method) {
      var _len,
        args,
        _key,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            for (_len = _args.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              args[_key - 3] = _args[_key];
            }
            _context.next = 4;
            return options.fetcher({
              options: {
                url: url,
                query: query,
                method: method
              },
              // Transform the input array into an object
              input: args.reduce(function (obj, val, i) {
                obj[hookInput[i][0]] = val;
                return obj;
              }, {}),
              fetch: fetcherFn,
              provider: provider
            });
          case 4:
            return _context.abrupt("return", _context.sent);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            // SWR will not log errors, but any error that's not an instance
            // of CommerceError is not welcomed by this hook
            if (!(_context.t0 instanceof CommerceError)) {
              console.error(_context.t0);
            }
            throw _context.t0;
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function fetcher(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var response = useMutablePlasmicQueryData(function () {
    var opts = options.fetchOptions;
    return opts ? [opts.url, opts.query, opts.method].concat(hookInput.map(function (e) {
      return e[1];
    })) : null;
  }, fetcher, swrOptions);
  if (!("isLoading" in response)) {
    defineProperty(response, "isLoading", {
      get: function get() {
        return response.data === undefined;
      },
      enumerable: true
    });
  }
  return response;
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/commerce/src
  Changes: Add provider to useSWRHook and useMutationHook
*/
function useFetcher() {
  var _providerRef$current$;
  var _useCommerce = useCommerce(),
    providerRef = _useCommerce.providerRef,
    fetcherRef = _useCommerce.fetcherRef;
  return (_providerRef$current$ = providerRef.current.fetcher) != null ? _providerRef$current$ : fetcherRef.current;
}
function useProvider() {
  var _useCommerce2 = useCommerce(),
    providerRef = _useCommerce2.providerRef;
  return providerRef.current;
}
function useHook(fn) {
  var _useCommerce3 = useCommerce(),
    providerRef = _useCommerce3.providerRef;
  var provider = providerRef.current;
  return fn(provider);
}
function useSWRHook(hook) {
  var fetcher = useFetcher();
  var provider = useProvider();
  return hook.useHook({
    useData: function useData$1(ctx) {
      var _ctx$input;
      var response = useData(hook, (_ctx$input = ctx == null ? void 0 : ctx.input) != null ? _ctx$input : [], fetcher, ctx == null ? void 0 : ctx.swrOptions, provider);
      return response;
    }
  });
}
function useMutationHook(hook) {
  var fetcher = useFetcher();
  var provider = useProvider();
  return hook.useHook({
    fetch: useCallback(function (_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        input = _ref.input;
      return hook.fetcher({
        input: input,
        options: hook.fetchOptions,
        fetch: fetcher,
        provider: provider
      });
    }, [fetcher, hook.fetchOptions])
  });
}

var SWRFetcher = function SWRFetcher(_ref) {
  var options = _ref.options,
    fetch = _ref.fetch;
  return fetch(options);
};
var mutationFetcher = function mutationFetcher(_ref2) {
  var input = _ref2.input,
    options = _ref2.options,
    fetch = _ref2.fetch;
  return fetch(_extends({}, options, {
    body: input
  }));
};

var fetcher = mutationFetcher;
var fn = function fn(provider) {
  var _provider$cart;
  return (_provider$cart = provider.cart) == null ? void 0 : _provider$cart.useAddItem;
};
var useAddItem = function useAddItem() {
  var hook = useHook(fn);
  return useMutationHook(_extends({
    fetcher: fetcher
  }, hook)).apply(void 0, arguments);
};

var fetcher$1 = mutationFetcher;
var fn$1 = function fn(provider) {
  var _provider$cart;
  return (_provider$cart = provider.cart) == null ? void 0 : _provider$cart.useRemoveItem;
};
var useRemoveItem = function useRemoveItem(input) {
  var hook = useHook(fn$1);
  return useMutationHook(_extends({
    fetcher: fetcher$1
  }, hook))(input);
};

var fetcher$2 = mutationFetcher;
var fn$2 = function fn(provider) {
  var _provider$cart;
  return (_provider$cart = provider.cart) == null ? void 0 : _provider$cart.useUpdateItem;
};
var useUpdateItem = function useUpdateItem(input) {
  var hook = useHook(fn$2);
  return useMutationHook(_extends({
    fetcher: fetcher$2
  }, hook))(input);
};

var defaultProduct = {
  id: "123456789",
  name: "Product name",
  description: "",
  descriptionHtml: "\n    <p>This is a <strong>placeholder</strong>.</p>\n  ",
  images: [{
    url: "https://static1.plasmic.app/commerce/lightweight-jacket-0.png",
    alt: "Lightweight Jacket"
  }, {
    url: "https://static1.plasmic.app/commerce/lightweight-jacket-1.png",
    alt: "Lightweight Jacket"
  }, {
    url: "https://static1.plasmic.app/commerce/lightweight-jacket-2.png",
    alt: "Lightweight Jacket"
  }],
  variants: [{
    id: "variant1",
    name: "Variant 1",
    options: []
  }, {
    id: "variant2",
    name: "Variant 2",
    options: []
  }],
  price: {
    value: 0,
    currencyCode: "USD"
  },
  options: []
};

var productSelector = "currentProduct";
function ProductProvider(_ref) {
  var product = _ref.product,
    children = _ref.children;
  var methods = useForm();
  return React.createElement(DataProvider, {
    name: productSelector,
    data: product,
    key: product.id
  }, React.createElement(FormProvider, Object.assign({}, methods), children));
}
var useProduct = function useProduct() {
  var product = useSelector(productSelector);
  return product != null ? product : defaultProduct;
};
var PrimaryCategoryContext = /*#__PURE__*/React.createContext(undefined); //used to render correctly the defaultValueHint in ProductCollection
var categorySelector = "currentCategory";
function CategoryProvider(_ref2) {
  var category = _ref2.category,
    children = _ref2.children;
  return React.createElement(DataProvider, {
    name: categorySelector,
    data: category,
    key: category.id
  }, children);
}
var useCategoryContext = function useCategoryContext() {
  return useSelector(categorySelector);
};
var usePrimaryCategory = function usePrimaryCategory() {
  return useContext(PrimaryCategoryContext);
};
var mediaSelector = "currentMedia";
function ProductMediaProvider(_ref3) {
  var mediaIndex = _ref3.mediaIndex,
    onClick = _ref3.onClick,
    children = _ref3.children;
  return React.createElement(DataProvider, {
    name: mediaSelector,
    data: mediaIndex,
    key: mediaIndex
  }, React.cloneElement(React.isValidElement(children) ? children : React.createElement(React.Fragment, null), {
    onClick: onClick
  }));
}
var useProductMediaContext = function useProductMediaContext() {
  return useSelector(mediaSelector);
};
function CartActionsProvider(props) {
  var _addItem = useAddItem();
  var _removeItem = useRemoveItem();
  var _updateItem = useUpdateItem();
  var actions = React.useMemo(function () {
    return {
      addItem: function addItem(productId, variantId, quantity) {
        _addItem({
          productId: productId,
          variantId: variantId,
          quantity: quantity
        });
      },
      updateItem: function updateItem(lineItemId, quantity) {
        _updateItem({
          id: lineItemId,
          quantity: quantity
        });
      },
      removeItem: function removeItem(lineItemId) {
        _removeItem({
          id: lineItemId
        });
      }
    };
  }, [_addItem, _removeItem, _updateItem]);
  return React.createElement(GlobalActionsProvider, {
    contextName: props.globalContextName,
    actions: actions
  }, props.children);
}
var globalActionsRegistrations = {
  addItem: {
    displayName: "Add item to cart",
    parameters: [{
      name: "productId",
      displayName: "Product Id",
      type: "string"
    }, {
      name: "variantId",
      displayName: "Variant Id",
      type: "string"
    }, {
      name: "quantity",
      displayName: "Quantity",
      type: "number"
    }]
  },
  updateItem: {
    displayName: "Update item in cart",
    parameters: [{
      name: "lineItemId",
      displayName: "Line Item Id",
      type: "string"
    }, {
      name: "quantity",
      displayName: "New Quantity",
      type: "number"
    }]
  },
  removeItem: {
    displayName: "Remove item from cart",
    parameters: [{
      name: "lineItemId",
      displayName: "Line Item Id",
      type: "string"
    }]
  }
};

var addToCartButtonMeta = {
  name: "plasmic-commerce-add-to-cart-button",
  displayName: "Add To Cart Button",
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "button",
        value: "Add To Cart"
      }]
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "AddToCartButton"
};
function AddToCartButton(props) {
  var children = props.children;
  var product = useProduct();
  var form = useFormContext();
  var addItem = useAddItem();
  var addToCart = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _form$getValues$Produ;
      var quantity, _form$getValues$Produ2, variantId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quantity = +((_form$getValues$Produ = form.getValues()["ProductQuantity"]) != null ? _form$getValues$Produ : 1);
            if (!(isNaN(quantity) || quantity < 1)) {
              _context.next = 3;
              break;
            }
            throw new CommerceError({
              message: "The item quantity has to be a valid integer greater than 0"
            });
          case 3:
            if (!product) {
              _context.next = 7;
              break;
            }
            variantId = (_form$getValues$Produ2 = form.getValues()["ProductVariant"]) != null ? _form$getValues$Produ2 : product.variants[0].id;
            _context.next = 7;
            return addItem({
              productId: product.id,
              variantId: variantId,
              quantity: quantity
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function addToCart() {
      return _ref.apply(this, arguments);
    };
  }();
  return React.isValidElement(children) ? React.cloneElement(children, {
    onClick: function onClick(e) {
      if (children.props.onClick && typeof children.props.onClick === "function") {
        children.props.onClick(e);
      }
      addToCart();
    }
  }) : null;
}
function registerAddToCartButton(loader, customAddToCartButtonMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(AddToCartButton, customAddToCartButtonMeta != null ? customAddToCartButtonMeta : addToCartButtonMeta);
}

var fetcher$3 = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var options, cartId, fetch;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _ref.options, cartId = _ref.input.cartId, fetch = _ref.fetch;
          if (!cartId) {
            _context.next = 7;
            break;
          }
          _context.next = 4;
          return fetch(options);
        case 4:
          _context.t0 = _context.sent;
          _context.next = 8;
          break;
        case 7:
          _context.t0 = null;
        case 8:
          return _context.abrupt("return", _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetcher(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var fn$3 = function fn(provider) {
  var _provider$cart;
  return (_provider$cart = provider.cart) == null ? void 0 : _provider$cart.useCart;
};
var useCart = function useCart(input) {
  var _hook$fetcher;
  var hook = useHook(fn$3);
  var _useCommerce = useCommerce(),
    cartCookie = _useCommerce.cartCookie;
  var fetcherFn = (_hook$fetcher = hook.fetcher) != null ? _hook$fetcher : fetcher$3;
  var wrapper = function wrapper(context) {
    context.input.cartId = Cookies.get(cartCookie);
    return fetcherFn(context);
  };
  return useSWRHook(_extends({}, hook, {
    fetcher: wrapper
  }))(input);
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/commerce/src
  Changes: None
*/
function formatPrice(_ref) {
  var amount = _ref.amount,
    currencyCode = _ref.currencyCode,
    locale = _ref.locale;
  var formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  });
  return formatCurrency.format(amount);
}
function formatVariantPrice(_ref2) {
  var amount = _ref2.amount,
    baseAmount = _ref2.baseAmount,
    currencyCode = _ref2.currencyCode,
    locale = _ref2.locale;
  var hasDiscount = baseAmount > amount;
  var formatDiscount = new Intl.NumberFormat(locale, {
    style: 'percent'
  });
  var discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
  var price = formatPrice({
    amount: amount,
    currencyCode: currencyCode,
    locale: locale
  });
  var basePrice = hasDiscount ? formatPrice({
    amount: baseAmount,
    currencyCode: currencyCode,
    locale: locale
  }) : null;
  return {
    price: price,
    basePrice: basePrice,
    discount: discount
  };
}
function usePrice(data) {
  var _ref3 = data != null ? data : {},
    amount = _ref3.amount,
    baseAmount = _ref3.baseAmount,
    currencyCode = _ref3.currencyCode;
  var _useCommerce = useCommerce(),
    locale = _useCommerce.locale;
  var value = useMemo(function () {
    if (typeof amount !== 'number' || !currencyCode) return '';
    return baseAmount ? formatVariantPrice({
      amount: amount,
      baseAmount: baseAmount,
      currencyCode: currencyCode,
      locale: locale
    }) : formatPrice({
      amount: amount,
      currencyCode: currencyCode,
      locale: locale
    });
  }, [amount, baseAmount, currencyCode]);
  return typeof value === 'string' ? {
    price: value
  } : value;
}

var cartMeta = {
  name: "plasmic-commerce-cart",
  displayName: "Cart",
  description: "Show the size or total of the cart. See Cart Provider component to access more cart data.",
  props: {
    field: {
      type: "choice",
      options: ["Size", "Total Price"]
    },
    hideIfIsEmpty: {
      type: "boolean",
      defaultValue: false,
      description: "You can hide this component if the cart is empty"
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "CartComponent"
};
function CartComponent(props) {
  var _data$totalPrice, _data$currency$code;
  var className = props.className,
    field = props.field,
    hideIfIsEmpty = props.hideIfIsEmpty;
  var _useCart = useCart(),
    data = _useCart.data;
  var _usePrice = usePrice({
      amount: (_data$totalPrice = data == null ? void 0 : data.totalPrice) != null ? _data$totalPrice : 0,
      currencyCode: (_data$currency$code = data == null ? void 0 : data.currency.code) != null ? _data$currency$code : "USD"
    }),
    price = _usePrice.price;
  if (!field) {
    return React.createElement("p", null, "You must set the field prop");
  }
  var value;
  if (field === "Size") {
    var _data$lineItems$lengt;
    value = (_data$lineItems$lengt = data == null ? void 0 : data.lineItems.length) != null ? _data$lineItems$lengt : 0;
  } else if (field === "Total Price") {
    value = price != null ? price : 0;
  }
  return hideIfIsEmpty && value === 0 ? null : React.createElement("span", {
    className: className
  }, value);
}
function registerCart(loader, customCartMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CartComponent, customCartMeta != null ? customCartMeta : cartMeta);
}

var cartProviderMeta = {
  name: "plasmic-commerce-cart-provider",
  displayName: "Cart Provider",
  description: "Use this to create bespoke cart UI. Inside Cart Provider, use dynamic values to access cart data.",
  props: {
    children: "slot"
  },
  providesData: true,
  importPath: "@plasmicpkgs/commerce",
  importName: "CartProvider"
};
function CartProvider(props) {
  var _useCart = useCart(),
    data = _useCart.data;
  return React.createElement(DataProvider, {
    data: data,
    name: "cart"
  }, props.children);
}
function registerCartProvider(loader, customCartProviderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CartProvider, customCartProviderMeta != null ? customCartProviderMeta : cartProviderMeta);
}

var fetcher$4 = SWRFetcher;
var fn$4 = function fn(provider) {
  var _provider$site;
  return (_provider$site = provider.site) == null ? void 0 : _provider$site.useCategories;
};
var useCategories = function useCategories(input) {
  var hook = useHook(fn$4);
  return useSWRHook(_extends({
    fetcher: fetcher$4
  }, hook))(input);
};

var categoryCollectionMeta = {
  name: "plasmic-commerce-category-collection",
  displayName: "Category Collection",
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "vbox",
        children: [{
          type: "component",
          name: "plasmic-commerce-category-field",
          props: {
            field: "name"
          }
        }, {
          type: "component",
          name: "plasmic-commerce-product-collection"
        }],
        styles: {
          width: "100%",
          minWidth: 0
        }
      }]
    },
    emptyMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "No collection found!"
      }
    },
    loadingMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading..."
      }
    },
    category: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$categories$map;
        return (_ctx$categories$map = ctx == null ? void 0 : ctx.categories.map(function (category) {
          var _category$depth;
          return {
            label: "" + "  ".repeat((_category$depth = category.depth) != null ? _category$depth : 0) + category.name,
            value: category.id
          };
        })) != null ? _ctx$categories$map : [];
      }
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "Do not render a container element."
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category."
    }
  },
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "CategoryCollection",
  providesData: true
};
function CategoryCollection(props) {
  var _categories$findIndex;
  var children = props.children,
    noLayout = props.noLayout,
    noAutoRepeat = props.noAutoRepeat,
    className = props.className,
    loadingMessage = props.loadingMessage,
    emptyMessage = props.emptyMessage,
    selectedCategory = props.category,
    setControlContextData = props.setControlContextData;
  var inEditor = React.useContext(PlasmicCanvasContext);
  var _useCategories = useCategories(),
    allCategories = _useCategories.data,
    isAllCategoriesLoading = _useCategories.isLoading;
  var _useCategories2 = useCategories({
      categoryId: selectedCategory,
      addIsEmptyField: !!inEditor
    }),
    categories = _useCategories2.data,
    isLoading = _useCategories2.isLoading;
  if (allCategories) {
    setControlContextData == null || setControlContextData({
      categories: allCategories
    });
  }
  var firstCategoryNotEmpty = categories == null ? void 0 : categories.find(function (category) {
    return !category.isEmpty;
  });
  var firstCategoryNotEmptyIndex = (_categories$findIndex = categories == null ? void 0 : categories.findIndex(function (category) {
    return !category.isEmpty;
  })) != null ? _categories$findIndex : -1;
  var renderedData = noAutoRepeat ? children : categories == null ? void 0 : categories.map(function (category, i) {
    return React.createElement(CategoryProvider, {
      category: category,
      key: category.id
    }, repeatedElement(i < firstCategoryNotEmptyIndex ? i + 1 : i === firstCategoryNotEmptyIndex ? 0 : i, children));
  });
  if ([isAllCategoriesLoading, isLoading].includes(true)) {
    return React.isValidElement(loadingMessage) ? loadingMessage : null;
  }
  if (!categories || categories.length === 0) {
    return React.isValidElement(emptyMessage) ? emptyMessage : null;
  }
  return React.createElement(DataProvider, {
    name: "categories",
    data: categories
  }, React.createElement(PrimaryCategoryContext.Provider, {
    value: firstCategoryNotEmpty != null ? firstCategoryNotEmpty : categories[0]
  }, noLayout ? React.createElement(React.Fragment, null, renderedData) : React.createElement("div", {
    className: className
  }, renderedData)));
}
function registerCategoryCollection(loader, customCategoryCollectionMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CategoryCollection, customCategoryCollectionMeta != null ? customCategoryCollectionMeta : categoryCollectionMeta);
}

var categoryFieldMeta = {
  name: "plasmic-commerce-category-field",
  displayName: "Category Field",
  props: {
    field: {
      type: "choice",
      options: ["id", "name", "slug", "path"]
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "CategoryField"
};
function CategoryField(props) {
  var className = props.className,
    field = props.field;
  var category = useCategoryContext();
  if (!field) {
    return React.createElement("span", null, "You must set the field prop");
  }
  var data = category ? category[field] : "Category field placeholder";
  return React.createElement("span", {
    className: className
  }, data);
}
function registerCategoryField(loader, customCategoryFieldMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CategoryField, customCategoryFieldMeta != null ? customCategoryFieldMeta : categoryFieldMeta);
}

var categoryLinkMeta = {
  name: "plasmic-commerce-category-link",
  displayName: "Category Link",
  props: {
    children: "slot",
    linkDest: {
      type: "string",
      defaultValueHint: "category/{slug}",
      description: "Set the link destination. You can use {slug} to replace by the category slug"
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "CategoryLink"
};
function CategoryLink(props) {
  var className = props.className,
    children = props.children,
    linkDest = props.linkDest;
  var category = useCategoryContext();
  var resolveLink = function resolveLink(linkDest) {
    var _linkDest$match;
    if (!linkDest) {
      return undefined;
    }
    var regex = /{[^}]*}/;
    var regexAll = new RegExp(regex, "g");
    var matches = (_linkDest$match = linkDest.match(regexAll)) != null ? _linkDest$match : [];
    var resolvedLink = linkDest;
    for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
      var match = _step.value;
      var field = match.slice(1, -1);
      if (!category || !(field in category)) {
        return undefined;
      }
      resolvedLink = resolvedLink.replace(regex, category[field]);
    }
    return resolvedLink;
  };
  return React.createElement("a", {
    className: className,
    href: resolveLink(linkDest),
    style: {
      color: "inherit",
      textDecoration: "inherit"
    }
  }, children);
}
function registerCategoryLink(loader, customCategoryLinkMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CategoryLink, customCategoryLinkMeta != null ? customCategoryLinkMeta : categoryLinkMeta);
}

var categoryMediaMeta = {
  name: "plasmic-commerce-category-media",
  displayName: "Category Media",
  props: {
    mediaIndex: "number"
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "CategoryMedia"
};
var CategoryMedia = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _image$url;
  var className = props.className,
    _props$mediaIndex = props.mediaIndex,
    mediaIndex = _props$mediaIndex === void 0 ? 0 : _props$mediaIndex;
  var category = useCategoryContext();
  var image = category != null && category.images ? category.images[mediaIndex] : undefined;
  return React.createElement("img", {
    ref: ref,
    alt: (category == null ? void 0 : category.name) || "Category Image",
    src: (_image$url = image == null ? void 0 : image.url) != null ? _image$url : "",
    loading: "lazy",
    className: className
  });
});
function registerCategoryMedia(loader, customCategoryMediaMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(CategoryMedia, customCategoryMediaMeta != null ? customCategoryMediaMeta : categoryMediaMeta);
}

var fetcher$5 = SWRFetcher;
var fn$5 = function fn(provider) {
  var _provider$products;
  return (_provider$products = provider.products) == null ? void 0 : _provider$products.useProduct;
};
var useProduct$1 = function useProduct(input) {
  var hook = useHook(fn$5);
  return useSWRHook(_extends({
    fetcher: fetcher$5
  }, hook))(input);
};

var fetcher$6 = SWRFetcher;
var fn$6 = function fn(provider) {
  var _provider$products;
  return (_provider$products = provider.products) == null ? void 0 : _provider$products.useSearch;
};
var useSearch = function useSearch(input) {
  var hook = useHook(fn$6);
  return useSWRHook(_extends({
    fetcher: fetcher$6
  }, hook))(input);
};

var productBoxMeta = {
  name: "plasmic-commerce-product-box",
  displayName: "Product Box",
  description: "Show a single product. [See commerce tutorial video](https://www.youtube.com/watch?v=1OJ_gXmta2Q)",
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "vbox",
        children: [{
          type: "component",
          name: "plasmic-commerce-product-text-field",
          props: {
            field: "name"
          }
        }, {
          type: "component",
          name: "plasmic-commerce-product-media"
        }],
        styles: {
          width: "100%",
          minWidth: 0
        }
      }]
    },
    noLayout: "boolean",
    id: {
      type: "cardPicker",
      modalTitle: "Product",
      onSearch: function onSearch(props, ctx) {
        return ctx == null ? void 0 : ctx.onSearch;
      },
      showInput: true,
      options: function options(props, ctx) {
        var _ctx$products$map;
        return (_ctx$products$map = ctx == null ? void 0 : ctx.products.map(function (product) {
          var _product$images, _product$slug;
          return {
            imgUrl: (_product$images = product.images) == null || (_product$images = _product$images[0]) == null ? void 0 : _product$images.url,
            value: product.id,
            label: (_product$slug = product.slug) != null ? _product$slug : product.name,
            footer: React.createElement("div", null, React.createElement("div", null, React.createElement("strong", null, product.name)), React.createElement("div", null, product.slug))
          };
        })) != null ? _ctx$products$map : [];
      }
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductBox",
  providesData: true
};
function ProductBox(props) {
  var className = props.className,
    children = props.children,
    noLayout = props.noLayout,
    id = props.id,
    setControlContextData = props.setControlContextData;
  var _React$useState = React.useState(""),
    productSearch = _React$useState[0],
    setProductSearch = _React$useState[1];
  var _useSearch = useSearch({
      search: productSearch !== "" ? productSearch : undefined
    }),
    allProducts = _useSearch.data;
  var onSearch = React.useCallback(debounce(function (value) {
    return setProductSearch(value);
  }, 300), []);
  if (allProducts) {
    setControlContextData == null || setControlContextData({
      products: allProducts.products,
      onSearch: onSearch
    });
  }
  var _useProduct = useProduct$1({
      id: id
    }),
    data = _useProduct.data,
    error = _useProduct.error,
    isLoading = _useProduct.isLoading;
  if (!id) {
    return React.createElement("span", null, "You must set the id prop");
  }
  if (error) {
    throw new CommerceError({
      message: error.message,
      code: error.code
    });
  }
  if (isLoading) {
    return React.createElement("span", null, "Loading...");
  }
  if (!data) {
    throw new Error("Product not found!");
  }
  var renderedData = React.createElement(ProductProvider, {
    product: data
  }, children);
  return noLayout ? React.createElement(React.Fragment, null, renderedData) : React.createElement("div", {
    className: className
  }, renderedData);
}
function registerProductBox(loader, customProductBoxMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductBox, customProductBoxMeta != null ? customProductBoxMeta : productBoxMeta);
}

var fetcher$7 = SWRFetcher;
var fn$7 = function fn(provider) {
  var _provider$site;
  return (_provider$site = provider.site) == null ? void 0 : _provider$site.useBrands;
};
var useBrands = function useBrands(input) {
  var hook = useHook(fn$7);
  return useSWRHook(_extends({
    fetcher: fetcher$7
  }, hook))(input);
};

var useCommerceExtraFeatures = function useCommerceExtraFeatures() {
  var _useCommerce = useCommerce(),
    providerRef = _useCommerce.providerRef;
  return providerRef.current.extraFeatures;
};

var productCollectionMeta = {
  name: "plasmic-commerce-product-collection",
  displayName: "Product Collection",
  description: "Show a product category. [See commerce tutorial video](https://www.youtube.com/watch?v=1OJ_gXmta2Q)",
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "vbox",
        children: [{
          type: "component",
          name: "plasmic-commerce-product-text-field",
          props: {
            field: "name"
          }
        }, {
          type: "component",
          name: "plasmic-commerce-product-media"
        }],
        styles: {
          width: "100%",
          minWidth: 0
        }
      }]
    },
    emptyMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "No product found!"
      }
    },
    loadingMessage: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading..."
      }
    },
    count: "number",
    category: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$categories$map;
        return (_ctx$categories$map = ctx == null ? void 0 : ctx.categories.map(function (category) {
          var _category$depth;
          return {
            label: "" + "  ".repeat((_category$depth = category.depth) != null ? _category$depth : 0) + category.name,
            value: category.id
          };
        })) != null ? _ctx$categories$map : [];
      },
      defaultValueHint: function defaultValueHint(props, ctx) {
        var _ctx$categoryCtx;
        return ctx == null || (_ctx$categoryCtx = ctx.categoryCtx) == null ? void 0 : _ctx$categoryCtx.name;
      },
      readOnly: function readOnly(props, ctx) {
        return !!(ctx != null && ctx.categoryCtx);
      }
    },
    includeSubCategories: {
      type: "boolean",
      hidden: function hidden(props, ctx) {
        var _ctx$features;
        return !(ctx != null && (_ctx$features = ctx.features) != null && _ctx$features.includeSubCategories);
      }
    },
    brand: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$brands$map;
        return (_ctx$brands$map = ctx == null ? void 0 : ctx.brands.map(function (brand) {
          return {
            label: brand.name,
            value: brand.entityId
          };
        })) != null ? _ctx$brands$map : [];
      }
    },
    search: {
      type: "string"
    },
    sort: {
      type: "choice",
      options: [{
        label: "Trending",
        value: "trending-desc"
      }, {
        label: "New Arrivals",
        value: "latest-desc"
      }, {
        label: "Price: Low to High",
        value: "price-asc"
      }, {
        label: "Price: High to Low",
        value: "price-desc"
      }]
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "Do not render a container element."
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category."
    }
  },
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductCollection",
  providesData: true
};
function ProductCollection(props) {
  var _categoryCtx$id;
  var className = props.className,
    children = props.children,
    count = props.count,
    category = props.category,
    includeSubCategories = props.includeSubCategories,
    brand = props.brand,
    noLayout = props.noLayout,
    noAutoRepeat = props.noAutoRepeat,
    setControlContextData = props.setControlContextData,
    emptyMessage = props.emptyMessage,
    loadingMessage = props.loadingMessage,
    search = props.search,
    sort = props.sort;
  var _useCategories = useCategories(),
    categories = _useCategories.data,
    isCategoriesLoading = _useCategories.isLoading;
  var _useBrands = useBrands(),
    brands = _useBrands.data,
    isBrandsLoading = _useBrands.isLoading;
  var categoryCtx = useCategoryContext();
  var _useSearch = useSearch({
      categoryId: (_categoryCtx$id = categoryCtx == null ? void 0 : categoryCtx.id) != null ? _categoryCtx$id : category,
      brandId: brand,
      count: count,
      categories: categories != null ? categories : [],
      includeSubCategories: includeSubCategories,
      search: search,
      sort: sort
    }),
    data = _useSearch.data,
    isSearchLoading = _useSearch.isLoading;
  var features = useCommerceExtraFeatures();
  var primaryCategory = usePrimaryCategory();
  if (categories && brands) {
    setControlContextData == null || setControlContextData({
      categories: categories,
      brands: brands,
      features: features,
      categoryCtx: primaryCategory
    });
  }
  var renderedData = noAutoRepeat ? children : data == null ? void 0 : data.products.map(function (product, i) {
    return React.createElement(ProductProvider, {
      product: product,
      key: product.id
    }, repeatedElement(i, children));
  });
  if ([isSearchLoading, isBrandsLoading, isCategoriesLoading].includes(true)) {
    return React.isValidElement(loadingMessage) ? loadingMessage : null;
  }
  if (!data || data.products.length === 0) {
    return React.isValidElement(emptyMessage) ? emptyMessage : null;
  }
  return React.createElement(DataProvider, {
    name: "products",
    data: data == null ? void 0 : data.products
  }, noLayout ? React.createElement(React.Fragment, null, renderedData) : React.createElement("div", {
    className: className
  }, renderedData));
}
function registerProductCollection(loader, customProductCollectionMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductCollection, customProductCollectionMeta != null ? customProductCollectionMeta : productCollectionMeta);
}

var productLinkMeta = {
  name: "plasmic-commerce-product-link",
  displayName: "Product Link",
  props: {
    children: "slot",
    linkDest: {
      type: "string",
      defaultValueHint: "products/{slug}",
      description: "Set the link destination. You can use {slug} to replace by the product slug"
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductLink"
};
function ProductLink(props) {
  var className = props.className,
    children = props.children,
    linkDest = props.linkDest;
  var product = useProduct();
  var resolveLink = function resolveLink(linkDest) {
    var _linkDest$match;
    if (!linkDest) {
      return undefined;
    }
    var regex = /{[^}]*}/;
    var regexAll = new RegExp(regex, "g");
    var matches = (_linkDest$match = linkDest.match(regexAll)) != null ? _linkDest$match : [];
    var resolvedLink = linkDest;
    for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
      var match = _step.value;
      var field = match.slice(1, -1);
      if (!product || !(field in product)) {
        return undefined;
      }
      resolvedLink = resolvedLink.replace(regex, product[field]);
    }
    return resolvedLink;
  };
  return React.createElement("a", {
    className: className,
    href: resolveLink(linkDest),
    style: {
      color: "inherit",
      textDecoration: "inherit"
    }
  }, children);
}
function registerProductLink(loader, customProductLinkMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductLink, customProductLinkMeta != null ? customProductLinkMeta : productLinkMeta);
}

var placeholderImage = "https://static1.plasmic.app/commerce/lightweight-jacket-0.png";
var productMediaMeta = {
  name: "plasmic-commerce-product-media",
  displayName: "Product Media",
  props: {
    mediaIndex: {
      type: "number",
      min: 0,
      hidden: function hidden(_, ctx) {
        return !!(ctx != null && ctx.inMediaContext);
      }
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductMedia"
};
var ProductMedia = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _image$url;
  var className = props.className,
    _props$mediaIndex = props.mediaIndex,
    mediaIndex = _props$mediaIndex === void 0 ? 0 : _props$mediaIndex,
    setControlContextData = props.setControlContextData;
  var product = useProduct();
  var mediaContext = useProductMediaContext();
  setControlContextData == null || setControlContextData({
    inMediaContext: mediaContext !== undefined
  });
  var image = product == null ? void 0 : product.images[mediaContext != null ? mediaContext : mediaIndex];
  return React.createElement("img", {
    ref: ref,
    alt: (product == null ? void 0 : product.name) || "Product Image",
    src: product ? (_image$url = image == null ? void 0 : image.url) != null ? _image$url : "" : placeholderImage,
    loading: "lazy",
    className: className
  });
});
function registerProductMedia(loader, customProductMediaMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductMedia, customProductMediaMeta != null ? customProductMediaMeta : productMediaMeta);
}

var productMediaCollectionMeta = {
  name: "plasmic-commerce-product-media-collection",
  displayName: "Product Media Collection",
  props: {
    media: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "plasmic-commerce-product-media"
      },
      allowedComponents: ["plasmic-commerce-product-media"]
    }
  },
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductMediaCollection",
  providesData: true
};
function ProductMediaCollection(props) {
  var media = props.media,
    className = props.className;
  var product = useProduct();
  return React.createElement("div", {
    className: className
  }, product == null ? void 0 : product.images.map(function (image, i) {
    return repeatedElement(i, React.createElement(ProductMediaProvider, {
      mediaIndex: i,
      children: media
    }));
  }));
}
function registerProductMediaCollection(loader, customProductMediaCollectionMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductMediaCollection, customProductMediaCollectionMeta != null ? customProductMediaCollectionMeta : productMediaCollectionMeta);
}

var getProductPrice = function getProductPrice(product, variantId) {
  var _product$variants$fin, _product$variants$fin2;
  return (_product$variants$fin = (_product$variants$fin2 = product.variants.find(function (variant) {
    return variant.id === variantId;
  })) == null ? void 0 : _product$variants$fin2.price) != null ? _product$variants$fin : product.price.value;
};

var productPriceMeta = {
  name: "plasmic-commerce-product-price",
  displayName: "Product Price",
  props: {},
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductPriceComponent"
};
function ProductPriceComponent(props) {
  var _product$price;
  var className = props.className;
  var product = useProduct();
  var form = useFormContext();
  var watchProductVariant = form == null ? void 0 : form.watch("ProductVariant", (_product$price = product.price) != null ? _product$price : "");
  var _usePrice = usePrice({
      amount: product ? getProductPrice(product, watchProductVariant) : 0,
      currencyCode: product ? product.price.currencyCode : "USD"
    }),
    price = _usePrice.price;
  return React.createElement("span", {
    className: className
  }, price);
}
function registerProductPrice(loader, customProductPriceMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductPriceComponent, customProductPriceMeta != null ? customProductPriceMeta : productPriceMeta);
}

var productQuantityMeta = {
  name: "plasmic-commerce-product-quantity",
  displayName: "Product Quantity",
  props: {
    children: {
      type: "slot",
      defaultValue: [{
        type: "input",
        attrs: {
          value: "1"
        }
      }]
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductQuantity"
};
function ProductQuantity(props) {
  var className = props.className,
    children = props.children;
  var form = useFormContext();
  return React.createElement("div", {
    className: className
  }, React.createElement(Controller, {
    name: "ProductQuantity",
    defaultValue: 1,
    control: form == null ? void 0 : form.control,
    render: function render(_ref) {
      var field = _ref.field;
      return React.isValidElement(children) ? React.cloneElement(children, _extends({}, children.props, field, {
        name: "ProductQuantity"
      })) : React.createElement(React.Fragment, null);
    }
  }));
}
function registerProductQuantity(loader, customProductQuantityMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductQuantity, customProductQuantityMeta != null ? customProductQuantityMeta : productQuantityMeta);
}

var productSliderMeta = {
  name: "plasmic-commerce-product-slider",
  displayName: "Product Slider",
  providesData: true,
  props: {
    thumbsVisible: {
      type: "number",
      description: "Number of thumbs visible",
      defaultValue: 4,
      defaultValueHint: 4
    },
    slideContainer: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [{
          type: "component",
          name: "plasmic-commerce-product-media"
        }]
      }
    },
    thumbsContainer: {
      type: "slot",
      defaultValue: {
        type: "hbox",
        children: [{
          type: "component",
          name: "plasmic-commerce-product-media"
        }]
      }
    },
    slideSelected: {
      type: "number",
      defaultValue: 0,
      defaultValueHint: 0,
      description: "Current slide selected"
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductSlider"
};
function ProductSlider(props) {
  var className = props.className,
    slideContainer = props.slideContainer,
    thumbsContainer = props.thumbsContainer,
    _props$thumbsVisible = props.thumbsVisible,
    thumbsVisible = _props$thumbsVisible === void 0 ? 4 : _props$thumbsVisible,
    _props$slideSelected = props.slideSelected,
    slideSelected = _props$slideSelected === void 0 ? 0 : _props$slideSelected;
  var product = useProduct();
  var _React$useState = React.useState(slideSelected),
    selected = _React$useState[0],
    setSelected = _React$useState[1];
  var maximumLeft = Math.max(0, product.images.length - thumbsVisible);
  var leftIndex = Math.min(maximumLeft, Math.max(0, selected - 1));
  return React.createElement("div", {
    className: className
  }, React.createElement(ProductMediaProvider, {
    mediaIndex: selected,
    children: slideContainer
  }), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + thumbsVisible + ", 1fr)"
    }
  }, product.images.slice(leftIndex, leftIndex + thumbsVisible).map(function (image, i) {
    return repeatedElement(i, React.createElement(ProductMediaProvider, {
      mediaIndex: leftIndex + i,
      children: thumbsContainer,
      onClick: function onClick() {
        return setSelected(leftIndex + i);
      }
    }));
  })));
}
function registerProductSlider(loader, customProductSliderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductSlider, customProductSliderMeta != null ? customProductSliderMeta : productSliderMeta);
}

var productTextFieldMeta = {
  name: "plasmic-commerce-product-text-field",
  displayName: "Product Text Field",
  props: {
    field: {
      type: "choice",
      options: ["id", "name", "description", "sku", "slug", "path"]
    }
  },
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductTextField"
};
function ProductTextField(props) {
  var className = props.className,
    field = props.field;
  var product = useProduct();
  if (!product) {
    return React.createElement("span", {
      className: className
    }, "Fake Product Field");
  }
  if (!field) {
    return React.createElement("span", {
      className: className
    }, "Unknown Product Field");
  }
  var value;
  if (field === "description") {
    var _product$descriptionH;
    return React.createElement("div", {
      className: className,
      dangerouslySetInnerHTML: {
        __html: (_product$descriptionH = product.descriptionHtml) != null ? _product$descriptionH : product.description
      }
    });
  } else {
    value = product[field];
  }
  return React.createElement("span", {
    className: className
  }, value);
}
function registerTextField(loader, customProductTextFieldMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductTextField, customProductTextFieldMeta != null ? customProductTextFieldMeta : productTextFieldMeta);
}

var productVariantPickerMeta = {
  name: "plasmic-commerce-product-variant-picker",
  displayName: "Product Variant Picker",
  props: {},
  importPath: "@plasmicpkgs/commerce",
  importName: "ProductVariantPicker"
};
function ProductVariantPicker(props) {
  var _useFormContext, _product$variants$fin;
  var className = props.className;
  var product = useProduct();
  var form = (_useFormContext = useFormContext()) != null ? _useFormContext : useForm();
  return React.createElement(Controller, {
    name: "ProductVariant",
    control: form == null ? void 0 : form.control,
    defaultValue: product == null || (_product$variants$fin = product.variants.find(function (v) {
      return v.price === product.price.value;
    })) == null ? void 0 : _product$variants$fin.id,
    render: function render(_ref) {
      var _product$variants$map;
      var field = _ref.field;
      return React.createElement("select", Object.assign({
        className: className
      }, field), (_product$variants$map = product == null ? void 0 : product.variants.map(function (variant) {
        return React.createElement("option", {
          value: variant.id
        }, variant.name);
      })) != null ? _product$variants$map : React.createElement("option", null, "Product Variant Placeholder"));
    }
  });
}
function registerProductVariantPicker(loader, customProductVariantPickerMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerComponent.apply(loader, arguments) : registerComponent.apply(void 0, arguments);
  };
  doRegisterComponent(ProductVariantPicker, customProductVariantPickerMeta != null ? customProductVariantPickerMeta : productVariantPickerMeta);
}



var cart = {
  __proto__: null
};



var product = {
  __proto__: null
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/commerce/src
  Changes: Added CategoryImage and depth/children/parent_id to Category
*/

var site = {
  __proto__: null
};

function registerAll(loader) {
  registerProductCollection(loader);
  registerTextField(loader);
  registerProductPrice(loader);
  registerProductMedia(loader);
  registerProductMediaCollection(loader);
  registerCart(loader);
  registerCartProvider(loader);
  registerAddToCartButton(loader);
  registerProductQuantity(loader);
  registerProductVariantPicker(loader);
  registerProductBox(loader);
  registerProductSlider(loader);
  registerProductLink(loader);
  registerCategoryCollection(loader);
  registerCategoryField(loader);
  registerCategoryLink(loader);
  registerCategoryMedia(loader);
}

export { AddToCartButton, CartActionsProvider, CartComponent, CartProvider, cart as CartType, CategoryCollection, CategoryField, CategoryLink, CategoryMedia, CommerceError, CoreCommerceProvider, FetcherError, ProductBox, ProductCollection, ProductLink, ProductMedia, ProductMediaCollection, defaultProduct as ProductPlaceholder, ProductPriceComponent, ProductQuantity, ProductSlider, ProductTextField, product as ProductTypes, ProductVariantPicker, site as SiteTypes, ValidationError, addToCartButtonMeta, cartMeta, cartProviderMeta, categoryCollectionMeta, categoryFieldMeta, categoryLinkMeta, categoryMediaMeta, fetcher$6 as fetcher, getCommerceProvider, globalActionsRegistrations, productBoxMeta, productCollectionMeta, productLinkMeta, productMediaCollectionMeta, productMediaMeta, productPriceMeta, productQuantityMeta, productSliderMeta, productTextFieldMeta, productVariantPickerMeta, registerAddToCartButton, registerAll, registerCart, registerCartProvider, registerCategoryCollection, registerCategoryField, registerCategoryLink, registerCategoryMedia, registerProductBox, registerProductCollection, registerProductLink, registerProductMedia, registerProductMediaCollection, registerProductPrice, registerProductQuantity, registerProductSlider, registerProductVariantPicker, registerTextField, useAddItem, useBrands, useCart, useCategories, useCommerce, useProduct$1 as useProduct, useRemoveItem, useSearch, useUpdateItem };
//# sourceMappingURL=commerce.esm.js.map
