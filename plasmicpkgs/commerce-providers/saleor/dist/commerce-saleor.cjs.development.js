'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var commerce = require('@plasmicpkgs/commerce');
var React = require('react');
var React__default = _interopDefault(React);
var Cookies = _interopDefault(require('js-cookie'));
var debounce = _interopDefault(require('debounce'));

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

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: Removed api_url
*/
var CHECKOUT_ID_COOKIE = 'saleor.CheckoutID';
var SALEOR_TOKEN = 'saleor.Token';

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var getSortVariables = function getSortVariables(sort, isCategory) {
  var output = {};
  switch (sort) {
    case 'price-asc':
      output = {
        field: 'PRICE',
        direction: 'ASC'
      };
      break;
    case 'price-desc':
      output = {
        field: 'PRICE',
        direction: 'DESC'
      };
      break;
    case 'trending-desc':
      //default
      output = {};
      break;
    case 'latest-desc':
      output = {
        field: 'DATE',
        direction: 'DESC'
      };
      break;
  }
  return output;
};

function getError(errors, status) {
  var _errors;
  errors = (_errors = errors) != null ? _errors : [{
    message: 'Failed to fetch Saleor API'
  }];
  return new commerce.FetcherError({
    errors: errors,
    status: status
  });
}
function getAsyncError(_x) {
  return _getAsyncError.apply(this, arguments);
}
function _getAsyncError() {
  _getAsyncError = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return res.json();
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", getError(data.errors, res.status));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getAsyncError.apply(this, arguments);
}
var handleFetchResponse = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
    var _yield$res$json, data, errors;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!res.ok) {
            _context.next = 9;
            break;
          }
          _context.next = 3;
          return res.json();
        case 3:
          _yield$res$json = _context.sent;
          data = _yield$res$json.data;
          errors = _yield$res$json.errors;
          if (!(errors && errors.length)) {
            _context.next = 8;
            break;
          }
          throw getError(errors, res.status);
        case 8:
          return _context.abrupt("return", data);
        case 9:
          _context.next = 11;
          return getAsyncError(res);
        case 11:
          throw _context.sent;
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleFetchResponse(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var getSearchVariables = function getSearchVariables(_ref) {
  var search = _ref.search,
    categoryId = _ref.categoryId,
    sort = _ref.sort,
    count = _ref.count;
  var sortBy = _extends({
    field: 'NAME',
    direction: 'ASC'
  }, getSortVariables(sort), {
    channel: 'default-channel'
  });
  return {
    categoryId: categoryId,
    filter: {
      search: search
    },
    sortBy: sortBy,
    first: count
  };
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var getCheckoutId = function getCheckoutId(id) {
  var _Cookies$get;
  var r = ((_Cookies$get = Cookies.get(CHECKOUT_ID_COOKIE)) == null ? void 0 : _Cookies$get.split(':')) || [];
  return {
    checkoutId: r[0],
    checkoutToken: r[1]
  };
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var ProductConnection = /* GraphQL */"\n  fragment ProductConnection on ProductCountableConnection {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        name\n        description\n        slug\n        pricing {\n          priceRange {\n            start {\n              net {\n                amount\n              }\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n        variants {\n          id\n          name\n          attributes {\n            attribute {\n              name\n            }\n            values {\n              name\n            }\n          }\n          pricing {\n            price {\n              net {\n                amount\n                currency\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutDetails = /* GraphQL */"\n  fragment CheckoutDetails on Checkout {\n    id\n    token\n    created\n    totalPrice {\n      currency\n      gross {\n        amount\n      }\n    }\n    subtotalPrice {\n      currency\n      gross {\n        amount\n      }\n    }\n\n    lines {\n      id\n      variant {\n        id\n        name\n        sku\n        product {\n          name\n          slug\n          id\n        }\n        media {\n          url\n        }\n        pricing {\n          price {\n            gross {\n              amount\n            }\n          }\n        }\n      }\n      quantity\n      totalPrice {\n        currency\n        gross {\n          amount\n        }\n      }\n    }\n  }\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutCreate = /* GraphQL */"\n  mutation CheckoutCreate {\n    checkoutCreate(input: { email: \"customer@example.com\", lines: [], channel: \"default-channel\" }) {\n      errors {\n        code\n        field\n        message\n      }\n      checkout {\n        ...CheckoutDetails\n      }\n    }\n  }\n  " + CheckoutDetails + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutLineAdd = /* GraphQL */"\n  mutation CheckoutLineAdd($checkoutId: ID!, $lineItems: [CheckoutLineInput!]!) {\n    checkoutLinesAdd(checkoutId: $checkoutId, lines: $lineItems) {\n      errors {\n        code\n        field\n        message\n      }\n      checkout {\n        ...CheckoutDetails\n      }\n    }\n  }\n  " + CheckoutDetails + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutLineUpdate = /* GraphQL */"\n  mutation CheckoutLineUpdate($checkoutId: ID!, $lineItems: [CheckoutLineInput!]!) {\n    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lineItems) {\n      errors {\n        code\n        field\n        message\n      }\n      checkout {\n        ...CheckoutDetails\n      }\n    }\n  }\n  " + CheckoutDetails + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutLineDelete = /* GraphQL */"\n  mutation CheckoutLineDelete($checkoutId: ID!, $lineId: ID!) {\n    checkoutLineDelete(checkoutId: $checkoutId, lineId: $lineId) {\n      errors {\n        code\n        field\n        message\n      }\n      checkout {\n        ...CheckoutDetails\n      }\n    }\n  }\n  " + CheckoutDetails + "\n";

var checkoutCreate = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fetch) {
    var _data$checkoutCreate;
    var data, checkout, checkoutId, checkoutToken, value, options;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch({
            query: CheckoutCreate
          });
        case 2:
          data = _context.sent;
          checkout = (_data$checkoutCreate = data.checkoutCreate) == null ? void 0 : _data$checkoutCreate.checkout;
          checkoutId = checkout == null ? void 0 : checkout.id;
          checkoutToken = checkout == null ? void 0 : checkout.token;
          value = checkoutId + ":" + checkoutToken;
          if (checkoutId) {
            options = {
              expires: 60 * 60 * 24 * 30,
              sameSite: "none",
              secure: true
            };
            Cookies.set(CHECKOUT_ID_COOKIE, value, options);
          }
          return _context.abrupt("return", checkout);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkoutCreate(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _excluded = ["id", "name", "media", "variants", "description", "slug", "pricing"];
/* eslint-disable */
/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
// TODO: Check nextjs-commerce bug if no images are added for a product
var placeholderImg = "/product-img-placeholder.svg";
var money = function money(_ref) {
  var amount = _ref.amount,
    currency = _ref.currency;
  return {
    value: +amount,
    currencyCode: currency || "USD"
  };
};
var normalizeProductOptions = function normalizeProductOptions(options) {
  return options == null ? void 0 : options.map(function (option) {
    return option == null ? void 0 : option.attributes;
  }).flat(1).reduce(function (acc, x) {
    if (acc.find(function (_ref2) {
      var displayName = _ref2.displayName;
      return displayName === x.attribute.name;
    })) {
      return acc.map(function (opt) {
        return opt.displayName === x.attribute.name ? _extends({}, opt, {
          values: [].concat(opt.values, x.values.map(function (value) {
            return {
              label: value == null ? void 0 : value.name
            };
          }))
        }) : opt;
      });
    }
    return acc.concat({
      __typename: "MultipleChoiceOption",
      displayName: x.attribute.name,
      variant: "size",
      values: x.values.map(function (value) {
        return {
          label: value == null ? void 0 : value.name
        };
      })
    });
  }, []);
};
var normalizeProductVariants = function normalizeProductVariants(variants) {
  return variants == null ? void 0 : variants.map(function (variant) {
    var _pricing$price, _money;
    var id = variant.id,
      sku = variant.sku,
      name = variant.name,
      pricing = variant.pricing;
    var price = (pricing == null || (_pricing$price = pricing.price) == null ? void 0 : _pricing$price.net) && ((_money = money(pricing.price.net)) == null ? void 0 : _money.value);
    return {
      id: id,
      name: name,
      sku: sku != null ? sku : id,
      price: price,
      listPrice: price,
      requiresShipping: true,
      options: normalizeProductOptions([variant])
    };
  });
};
function normalizeProduct(productNode) {
  var _JSON$parse, _pricing$priceRange;
  var id = productNode.id,
    name = productNode.name,
    _productNode$media = productNode.media,
    media = _productNode$media === void 0 ? [] : _productNode$media,
    variants = productNode.variants,
    description = productNode.description,
    slug = productNode.slug,
    pricing = productNode.pricing,
    rest = _objectWithoutPropertiesLoose(productNode, _excluded);
  var product = _extends({
    id: id,
    name: name,
    vendor: "",
    description: description ? (_JSON$parse = JSON.parse(description)) == null || (_JSON$parse = _JSON$parse.blocks[0]) == null ? void 0 : _JSON$parse.data.text : "",
    path: "/" + slug,
    slug: slug == null ? void 0 : slug.replace(/^\/+|\/+$/g, ""),
    price: (pricing == null || (_pricing$priceRange = pricing.priceRange) == null || (_pricing$priceRange = _pricing$priceRange.start) == null ? void 0 : _pricing$priceRange.net) && money(pricing.priceRange.start.net) || {
      value: 0,
      currencyCode: "USD"
    },
    // TODO: Check nextjs-commerce bug if no images are added for a product
    images: media != null && media.length ? media : [{
      url: placeholderImg
    }],
    variants: variants && variants.length > 0 ? normalizeProductVariants(variants) : [],
    options: variants && variants.length > 0 ? normalizeProductOptions(variants) : []
  }, rest);
  return product;
}
function normalizeCart(checkout) {
  var _checkout$totalPrice, _checkout$subtotalPri, _checkout$subtotalPri2, _checkout$totalPrice2;
  var lines = checkout.lines;
  var lineItems = lines.length > 0 ? lines == null ? void 0 : lines.map(normalizeLineItem) : [];
  return {
    id: checkout.id,
    customerId: "",
    email: "",
    createdAt: checkout.created,
    currency: {
      code: (_checkout$totalPrice = checkout.totalPrice) == null ? void 0 : _checkout$totalPrice.currency
    },
    taxesIncluded: false,
    lineItems: lineItems,
    lineItemsSubtotalPrice: (_checkout$subtotalPri = checkout.subtotalPrice) == null || (_checkout$subtotalPri = _checkout$subtotalPri.gross) == null ? void 0 : _checkout$subtotalPri.amount,
    subtotalPrice: (_checkout$subtotalPri2 = checkout.subtotalPrice) == null || (_checkout$subtotalPri2 = _checkout$subtotalPri2.gross) == null ? void 0 : _checkout$subtotalPri2.amount,
    totalPrice: (_checkout$totalPrice2 = checkout.totalPrice) == null ? void 0 : _checkout$totalPrice2.gross.amount,
    discounts: []
  };
}
function normalizeLineItem(_ref3) {
  var _variant$product, _variant$sku, _variant$pricing, _variant$product2;
  var id = _ref3.id,
    variant = _ref3.variant,
    quantity = _ref3.quantity;
  return {
    id: id,
    variantId: String(variant == null ? void 0 : variant.id),
    productId: String(variant == null || (_variant$product = variant.product) == null ? void 0 : _variant$product.id),
    name: "" + variant.product.name,
    quantity: quantity,
    variant: {
      id: String(variant == null ? void 0 : variant.id),
      sku: (_variant$sku = variant == null ? void 0 : variant.sku) != null ? _variant$sku : "",
      name: variant == null ? void 0 : variant.name,
      image: {
        url: variant != null && variant.media[0] ? variant == null ? void 0 : variant.media[0].url : placeholderImg
      },
      requiresShipping: false,
      price: variant == null || (_variant$pricing = variant.pricing) == null || (_variant$pricing = _variant$pricing.price) == null ? void 0 : _variant$pricing.gross.amount,
      listPrice: 0
    },
    path: String(variant == null || (_variant$product2 = variant.product) == null ? void 0 : _variant$product2.slug),
    discounts: [],
    options: []
  };
}
var normalizeCategory = function normalizeCategory(_ref4) {
  var name = _ref4.name,
    slug = _ref4.slug,
    id = _ref4.id;
  return {
    id: id,
    name: name,
    slug: slug,
    path: "/" + slug
  };
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var throwUserErrors = function throwUserErrors(errors) {
  if (errors && errors.length) {
    throw new commerce.ValidationError({
      errors: errors.map(function (_ref) {
        var code = _ref.code,
          message = _ref.message;
        return {
          code: code != null ? code : 'validation_error',
          message: message || ''
        };
      })
    });
  }
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var checkoutToCart = function checkoutToCart(checkoutPayload) {
  var _checkoutPayload$erro;
  if (!checkoutPayload) {
    throw new commerce.CommerceError({
      message: 'Missing checkout payload from response'
    });
  }
  var checkout = checkoutPayload == null ? void 0 : checkoutPayload.checkout;
  if ((checkoutPayload == null || (_checkoutPayload$erro = checkoutPayload.errors) == null ? void 0 : _checkoutPayload$erro.length) === 1 && checkoutPayload.errors[0].code === "PRODUCT_UNAVAILABLE_FOR_PURCHASE") {
    console.error(checkoutPayload.errors[0]);
    return undefined;
  }
  if (checkoutPayload != null && checkoutPayload.errors) {
    throwUserErrors(checkoutPayload == null ? void 0 : checkoutPayload.errors);
  }
  if (!checkout) {
    throw new commerce.CommerceError({
      message: 'Missing checkout object from response'
    });
  }
  return normalizeCart(checkout);
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var getToken = function getToken() {
  return Cookies.get(SALEOR_TOKEN);
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CollectionMany = /* GraphQL */"\n  query CollectionMany( $channel: String = \"default-channel\") {\n    collections(first:100, channel: $channel) {\n      edges {\n        node {\n          id\n          name\n          slug\n        }\n      }\n    }\n  }\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var ProductOneBySlug = /* GraphQL */"\n  query ProductOneBySlug($slug: String!, $channel: String = \"default-channel\") {\n    product(slug: $slug, channel: $channel) {\n      id\n      slug\n      name\n      description\n      pricing {\n        priceRange {\n          start {\n            net {\n              amount\n            }\n          }\n        }\n      }\n      variants {\n        id\n        name\n        attributes {\n          attribute {\n            name\n          }\n          values {\n            name\n          }\n        }\n        pricing {\n          price {\n            net {\n              amount\n              currency\n            }\n          }\n        }\n      }\n      media {\n        url\n        alt\n      }\n    }\n  }\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var ProductMany = /* GraphQL */"\n  query ProductMany(\n    $first: Int = 100\n    $filter: ProductFilterInput\n    $sortBy: ProductOrder\n    $channel: String = \"default-channel\"\n  ) {\n    products(first: $first, channel: $channel, filter: $filter, sortBy: $sortBy) {\n      ...ProductConnection\n    }\n  }\n  " + ProductConnection + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CollectionOne = /* GraphQL */"\n  query getProductsFromCollection($categoryId: ID!, $first: Int = 100, $channel: String = \"default-channel\") {\n    collection(id: $categoryId, channel: $channel) {\n      id\n      name\n      slug\n      products(first: $first) {\n        ...ProductConnection\n      }\n    }\n  }\n  " + ProductConnection + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var CheckoutOne = /* GraphQL */"\n  query CheckoutOne($checkoutId: UUID!) {\n    checkout(token: $checkoutId) {\n      ... on Checkout {\n        ...CheckoutDetails\n      }\n    }\n  }\n  " + CheckoutDetails + "\n";

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: None
*/
var getAllProductVendors = /* GraphQL */"\n  query getAllProductVendors($cursor: String, $channel: String = \"default-channel\") {\n    products(first:100,channel: $channel, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          slug\n        }\n        cursor\n      }\n    }\n  }\n";

var handler = {
  fetchOptions: {
    query: CheckoutOne
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _checkout;
      var checkoutId, options, fetch, checkout, _checkoutId, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            checkoutId = _ref.input.cartId, options = _ref.options, fetch = _ref.fetch;
            if (!checkoutId) {
              _context.next = 7;
              break;
            }
            _checkoutId = getCheckoutId().checkoutToken;
            _context.next = 5;
            return fetch(_extends({}, options, {
              variables: {
                checkoutId: _checkoutId
              }
            }));
          case 5:
            data = _context.sent;
            checkout = data;
          case 7:
            if (!((_checkout = checkout) != null && _checkout.completedAt || !checkoutId)) {
              _context.next = 11;
              break;
            }
            _context.next = 10;
            return checkoutCreate(fetch);
          case 10:
            checkout = _context.sent;
          case 11:
            return _context.abrupt("return", checkoutToCart(checkout));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      var response = useData({
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$lineIt, _response$data;
              return ((_response$data$lineIt = (_response$data = response.data) == null ? void 0 : _response$data.lineItems.length) != null ? _response$data$lineIt : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

var handler$1 = {
  fetchOptions: {
    query: CheckoutLineAdd
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item$quantity;
      var item, options, fetch, _yield$fetch, checkoutLinesAdd;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            item = _ref.input, options = _ref.options, fetch = _ref.fetch;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1))) {
              _context.next = 3;
              break;
            }
            throw new commerce.CommerceError({
              message: "The item quantity has to be a valid integer greater than 0"
            });
          case 3:
            _context.next = 5;
            return fetch(_extends({}, options, {
              variables: {
                checkoutId: getCheckoutId().checkoutId,
                lineItems: [{
                  variantId: item.variantId,
                  quantity: (_item$quantity = item.quantity) != null ? _item$quantity : 1
                }]
              }
            }));
          case 5:
            _yield$fetch = _context.sent;
            checkoutLinesAdd = _yield$fetch.checkoutLinesAdd;
            return _context.abrupt("return", checkoutToCart(checkoutLinesAdd));
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function () {
      var _useCart = commerce.useCart(),
        mutate = _useCart.mutate;
      return React.useCallback(/*#__PURE__*/function () {
        var _addItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch({
                  input: input
                });
              case 2:
                data = _context2.sent;
                if (!data) {
                  _context2.next = 8;
                  break;
                }
                _context2.next = 6;
                return mutate(data, false);
              case 6:
                _context2.next = 10;
                break;
              case 8:
                _context2.next = 10;
                return mutate();
              case 10:
                return _context2.abrupt("return", data);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function addItem(_x) {
          return _addItem.apply(this, arguments);
        }
        return addItem;
      }(), [fetch, mutate]);
    };
  }
};

var handler$2 = {
  fetchOptions: {
    query: CheckoutLineDelete
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var itemId, options, fetch, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            itemId = _ref.input.itemId, options = _ref.options, fetch = _ref.fetch;
            _context.next = 3;
            return fetch(_extends({}, options, {
              variables: {
                checkoutId: getCheckoutId().checkoutId,
                lineId: itemId
              }
            }));
          case 3:
            data = _context.sent;
            return _context.abrupt("return", checkoutToCart(data.checkoutLineDelete));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function () {
      var _useCart = commerce.useCart(),
        mutate = _useCart.mutate;
      return React.useCallback(/*#__PURE__*/function () {
        var _removeItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch({
                  input: {
                    itemId: input.id
                  }
                });
              case 2:
                data = _context2.sent;
                _context2.next = 5;
                return mutate(data, false);
              case 5:
                return _context2.abrupt("return", data);
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function removeItem(_x) {
          return _removeItem.apply(this, arguments);
        }
        return removeItem;
      }(), [fetch, mutate]);
    };
  }
};

var handler$3 = {
  fetchOptions: {
    query: CheckoutLineUpdate
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ref$input, itemId, item, options, fetch, checkoutId, _yield$fetch, checkoutLinesUpdate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref$input = _ref.input, itemId = _ref$input.itemId, item = _ref$input.item, options = _ref.options, fetch = _ref.fetch;
            if (!Number.isInteger(item.quantity)) {
              _context.next = 6;
              break;
            }
            if (!(item.quantity < 1)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", handler$2.fetcher({
              options: handler$2.fetchOptions,
              input: {
                itemId: itemId
              },
              fetch: fetch
            }));
          case 4:
            _context.next = 8;
            break;
          case 6:
            if (!item.quantity) {
              _context.next = 8;
              break;
            }
            throw new commerce.ValidationError({
              message: "The item quantity has to be a valid integer"
            });
          case 8:
            checkoutId = getCheckoutId().checkoutId;
            _context.next = 11;
            return fetch(_extends({}, options, {
              variables: {
                checkoutId: checkoutId,
                lineItems: [{
                  itemId: itemId,
                  quantity: item.quantity
                }]
              }
            }));
          case 11:
            _yield$fetch = _context.sent;
            checkoutLinesUpdate = _yield$fetch.checkoutLinesUpdate;
            return _context.abrupt("return", checkoutToCart(checkoutLinesUpdate));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function (ctx) {
      var _ctx$wait;
      if (ctx === void 0) {
        ctx = {};
      }
      var _ctx = ctx,
        item = _ctx.item;
      var _useCart = commerce.useCart(),
        mutate = _useCart.mutate;
      return React.useCallback(debounce(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var _input$id;
          var itemId, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                itemId = (_input$id = input.id) != null ? _input$id : item == null ? void 0 : item.id;
                if (itemId) {
                  _context2.next = 3;
                  break;
                }
                throw new commerce.ValidationError({
                  message: "Invalid input used for this operation"
                });
              case 3:
                _context2.next = 5;
                return fetch({
                  input: {
                    item: {
                      quantity: input.quantity
                    },
                    itemId: itemId
                  }
                });
              case 5:
                data = _context2.sent;
                _context2.next = 8;
                return mutate(data, false);
              case 8:
                return _context2.abrupt("return", data);
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), (_ctx$wait = ctx.wait) != null ? _ctx$wait : 500), [fetch, mutate]);
    };
  }
};

var handler$4 = {
  fetchOptions: {
    query: CollectionMany
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, fetch, categoryId, _data$collections$edg, _data$collections, data, _data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            categoryId = input.categoryId;
            if (categoryId) {
              _context.next = 9;
              break;
            }
            _context.next = 5;
            return fetch({
              query: CollectionMany,
              variables: {
                first: 250
              }
            });
          case 5:
            data = _context.sent;
            return _context.abrupt("return", (_data$collections$edg = (_data$collections = data.collections) == null || (_data$collections = _data$collections.edges) == null ? void 0 : _data$collections.map(function (_ref2) {
              var node = _ref2.node;
              return normalizeCategory(node);
            })) != null ? _data$collections$edg : []);
          case 9:
            _context.next = 11;
            return fetch({
              query: CollectionOne,
              variables: {
                categoryId: categoryId
              }
            });
          case 11:
            _data = _context.sent;
            return _context.abrupt("return", !!(_data != null && _data.collection) ? [normalizeCategory(_data == null ? void 0 : _data.collection)] : []);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref3) {
    var useData = _ref3.useData;
    return function (input) {
      var response = useData({
        input: [["categoryId", input == null ? void 0 : input.categoryId]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$length, _response$data;
              return ((_response$data$length = (_response$data = response.data) == null ? void 0 : _response$data.length) != null ? _response$data$length : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

var handler$5 = {
  fetchOptions: {
    query: getAllProductVendors
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", []);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      var response = useData({
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$length, _response$data;
              return ((_response$data$length = (_response$data = response.data) == null ? void 0 : _response$data.length) != null ? _response$data$length : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

var handler$6 = {
  fetchOptions: {
    query: ProductMany
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, categoryId, brandId, data, edges, _data$collection$prod, _data$collection, _data$products$edges, _data$products;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            categoryId = input.categoryId, brandId = input.brandId;
            _context.next = 4;
            return fetch({
              query: categoryId ? CollectionOne : options.query,
              method: options == null ? void 0 : options.method,
              variables: getSearchVariables(input)
            });
          case 4:
            data = _context.sent;
            if (categoryId) {
              edges = (_data$collection$prod = (_data$collection = data.collection) == null || (_data$collection = _data$collection.products) == null ? void 0 : _data$collection.edges) != null ? _data$collection$prod : [];
              // FIXME @zaiste, no `vendor` in Saleor
              // if (brandId) {
              //   edges = edges.filter(
              //     ({ node: { vendor } }: ProductCountableEdge) =>
              //       vendor.replace(/\s+/g, '-').toLowerCase() === brandId
              //   )
              // }
            } else {
              edges = (_data$products$edges = (_data$products = data.products) == null ? void 0 : _data$products.edges) != null ? _data$products$edges : [];
            }
            return _context.abrupt("return", {
              products: edges.map(function (_ref2) {
                var node = _ref2.node;
                return normalizeProduct(node);
              }),
              found: !!edges.length
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref3) {
    var useData = _ref3.useData;
    return function (input) {
      if (input === void 0) {
        input = {};
      }
      return useData({
        input: [["search", input.search], ["categoryId", input.categoryId], ["brandId", input.brandId], ["sort", input.sort], ["count", input.count]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var ProductOneById = /* GraphQL */"\n  query ProductOneById($id: ID!, $channel: String = \"default-channel\") {\n    product(id: $id, channel: $channel) {\n\n      slug\n      name\n      description\n      pricing {\n        priceRange {\n          start {\n            net {\n              amount\n            }\n          }\n        }\n      }\n      variants {\n        id\n        name\n        attributes {\n          attribute {\n            name\n          }\n          values {\n            name\n          }\n        }\n        pricing {\n          price {\n            net {\n              amount\n              currency\n            }\n          }\n        }\n      }\n      media {\n        url\n        alt\n      }\n    }\n  }";

var handler$7 = {
  fetchOptions: {
    query: ProductOneById
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, fetch, id, data, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            id = input.id;
            if (id) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", null);
          case 4:
            _context.next = 6;
            return fetch({
              query: ProductOneById,
              variables: {
                id: id
              }
            });
          case 6:
            data = _context.sent;
            if (data.product) {
              _context.next = 12;
              break;
            }
            _context.next = 10;
            return fetch({
              query: ProductOneBySlug,
              variables: {
                slug: id
              }
            });
          case 10:
            response = _context.sent;
            return _context.abrupt("return", response.product ? normalizeProduct(response.product) : null);
          case 12:
            return _context.abrupt("return", data.product ? normalizeProduct(data.product) : null);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      if (input === void 0) {
        input = {};
      }
      return useData({
        input: [["id", input.id]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var _excluded$1 = ["locale"];
var getFetcher = function getFetcher(saleorApiUrl) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _ref$url, url, _ref$method, method, query, variables, _ref3, vars, token;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref$url = _ref.url, url = _ref$url === void 0 ? saleorApiUrl : _ref$url, _ref$method = _ref.method, method = _ref$method === void 0 ? 'POST' : _ref$method, query = _ref.query, variables = _ref.variables;
            _ref3 = variables != null ? variables : {}, vars = _objectWithoutPropertiesLoose(_ref3, _excluded$1);
            token = getToken();
            _context.t0 = handleFetchResponse;
            _context.next = 6;
            return fetch(url, {
              method: method,
              body: JSON.stringify({
                query: query,
                variables: vars
              }),
              headers: {
                Authorization: "JWT " + token,
                'Content-Type': 'application/json'
              }
            });
          case 6:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)(_context.t1));
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes:
    - Removed customer and auth hooks.
    - Added saleor_api_url parameters.
*/
var getSaleorProvider = function getSaleorProvider(saleorApiUrl) {
  return {
    locale: 'en-us',
    cartCookie: CHECKOUT_ID_COOKIE,
    fetcher: getFetcher(saleorApiUrl),
    cart: {
      useCart: handler,
      useAddItem: handler$1,
      useUpdateItem: handler$3,
      useRemoveItem: handler$2
    },
    products: {
      useSearch: handler$6,
      useProduct: handler$7
    },
    site: {
      useCategories: handler$4,
      useBrands: handler$5
    }
  };
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes:
    - Added saleor_api_url parameter.
*/
var useCommerce = function useCommerce() {
  return commerce.useCommerce();
};
var getCommerceProvider = function getCommerceProvider(saleorApiUrl) {
  return commerce.getCommerceProvider(getSaleorProvider(saleorApiUrl));
};

var globalContextName = "plasmic-commerce-saleor-provider";
var commerceProviderMeta = /*#__PURE__*/_extends({
  name: globalContextName,
  displayName: "Saleor Provider",
  props: {
    saleorApiUrl: {
      type: "string",
      defaultValue: "https://vercel.saleor.cloud/graphql/"
    }
  }
}, {
  globalActions: commerce.globalActionsRegistrations
}, {
  importPath: "@plasmicpkgs/commerce-saleor",
  importName: "CommerceProviderComponent"
});
function CommerceProviderComponent(props) {
  var saleorApiUrl = props.saleorApiUrl,
    children = props.children;
  var CommerceProvider = React__default.useMemo(function () {
    return getCommerceProvider(saleorApiUrl);
  }, [saleorApiUrl]);
  return React__default.createElement(CommerceProvider, null, React__default.createElement(commerce.CartActionsProvider, {
    globalContextName: globalContextName
  }, children));
}
function registerCommerceProvider(loader, customCommerceProviderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerGlobalContext.apply(loader, arguments) : registerGlobalContext.apply(void 0, arguments);
  };
  doRegisterComponent(CommerceProviderComponent, customCommerceProviderMeta != null ? customCommerceProviderMeta : commerceProviderMeta);
}

function registerAll(loader) {
  registerCommerceProvider(loader);
}

exports.CommerceProviderComponent = CommerceProviderComponent;
exports.getCommerceProvider = getCommerceProvider;
exports.registerAll = registerAll;
exports.registerCommerceProvider = registerCommerceProvider;
exports.useCommerce = useCommerce;
//# sourceMappingURL=commerce-saleor.cjs.development.js.map
