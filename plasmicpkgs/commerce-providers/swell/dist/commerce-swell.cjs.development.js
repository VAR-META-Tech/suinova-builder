'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var commerce = require('@plasmicpkgs/commerce');
var React = require('react');
var React__default = _interopDefault(React);
var swell = require('swell-js');
var swell__default = _interopDefault(swell);
var Cookies = _interopDefault(require('js-cookie'));
var debounce = _interopDefault(require('debounce'));

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
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: Removed store id and public key
*/
var SWELL_CHECKOUT_ID_COOKIE = 'SWELL_checkoutId';
var SWELL_CHECKOUT_URL_COOKIE = 'swell_checkoutUrl';
var SWELL_COOKIE_EXPIRE = 30;

var _excluded = ["file"];
var normalizeProductOption = function normalizeProductOption(_ref2) {
  var id = _ref2.id,
    _ref2$name = _ref2.name,
    displayName = _ref2$name === void 0 ? "" : _ref2$name,
    _ref2$values = _ref2.values,
    values = _ref2$values === void 0 ? [] : _ref2$values;
  var returnValues = values.map(function (value) {
    var output = {
      label: value.name
    };
    if (displayName.match(/colou?r/gi)) {
      output = _extends({}, output, {
        hexColors: [value.name]
      });
    }
    return output;
  });
  return {
    __typename: "MultipleChoiceOption",
    id: id,
    displayName: displayName,
    values: returnValues
  };
};
var normalizeProductImages = function normalizeProductImages(images) {
  if (!images || images.length < 1) {
    return [{
      url: "/"
    }];
  }
  return images == null ? void 0 : images.map(function (_ref3) {
    var file = _ref3.file,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
    return _extends({
      url: (file == null ? void 0 : file.url) + "",
      height: Number(file == null ? void 0 : file.height),
      width: Number(file == null ? void 0 : file.width)
    }, rest);
  });
};
var normalizeProductVariants = function normalizeProductVariants(variants, productOptions) {
  return variants == null ? void 0 : variants.map(function (_ref4) {
    var id = _ref4.id,
      name = _ref4.name,
      price = _ref4.price,
      _ref4$option_value_id = _ref4.option_value_ids,
      optionValueIds = _ref4$option_value_id === void 0 ? [] : _ref4$option_value_id;
    var values = name.split(",").map(function (i) {
      return {
        name: i.trim(),
        label: i.trim()
      };
    });
    var options = optionValueIds.map(function (id) {
      var _matchingOption$name;
      var matchingOption = productOptions.find(function (option) {
        return option.values.find(function (value) {
          return value.id == id;
        });
      });
      return normalizeProductOption({
        id: id,
        name: (_matchingOption$name = matchingOption == null ? void 0 : matchingOption.name) != null ? _matchingOption$name : "",
        values: values
      });
    });
    return {
      id: id,
      name: name,
      // sku: sku ?? id,
      price: price != null ? price : undefined,
      // listPrice: price ?? null,
      // requiresShipping: true,
      options: options
    };
  });
};
function normalizeProduct(swellProduct) {
  var id = swellProduct.id,
    description = swellProduct.description,
    images = swellProduct.images,
    options = swellProduct.options,
    slug = swellProduct.slug,
    variants = swellProduct.variants,
    value = swellProduct.price,
    currencyCode = swellProduct.currency;
  // ProductView accesses variants for each product
  var emptyVariants = [{
    options: [],
    id: id,
    name: "Default variant"
  }];
  var productOptions = options ? options.map(function (o) {
    return normalizeProductOption(o);
  }) : [];
  var productVariants = variants ? normalizeProductVariants(variants.results, options) : [];
  var productImages = normalizeProductImages(images);
  var product = _extends({}, swellProduct, {
    description: description,
    id: id,
    vendor: "",
    path: "/" + slug,
    images: productImages,
    variants: productVariants && productVariants.length ? productVariants : emptyVariants,
    options: productOptions,
    price: {
      value: value,
      currencyCode: currencyCode
    }
  });
  return product;
}
function normalizeCart(_ref5) {
  var _items$map;
  var id = _ref5.id,
    account_id = _ref5.account_id,
    date_created = _ref5.date_created,
    currency = _ref5.currency,
    tax_included_total = _ref5.tax_included_total,
    items = _ref5.items,
    sub_total = _ref5.sub_total,
    grand_total = _ref5.grand_total,
    discounts = _ref5.discounts;
  var cart = {
    id: id,
    customerId: account_id + "",
    email: "",
    createdAt: date_created,
    currency: {
      code: currency
    },
    taxesIncluded: tax_included_total > 0,
    lineItems: (_items$map = items == null ? void 0 : items.map(normalizeLineItem)) != null ? _items$map : [],
    lineItemsSubtotalPrice: +sub_total,
    subtotalPrice: +sub_total,
    totalPrice: grand_total,
    discounts: discounts == null ? void 0 : discounts.map(function (discount) {
      return {
        value: discount.amount
      };
    })
  };
  return cart;
}
/*
export function normalizeCustomer(customer: SwellCustomer): Customer {
  const { first_name: firstName, last_name: lastName } = customer
  return {
    ...customer,
    firstName,
    lastName,
  }
}
*/
function normalizeLineItem(_ref6) {
  var _product$id, _product$name, _variant$id, _variant$sku;
  var id = _ref6.id,
    product = _ref6.product,
    price = _ref6.price,
    variant = _ref6.variant,
    quantity = _ref6.quantity;
  var item = {
    id: id,
    variantId: variant == null ? void 0 : variant.id,
    productId: (_product$id = product.id) != null ? _product$id : "",
    name: (_product$name = product == null ? void 0 : product.name) != null ? _product$name : "",
    quantity: quantity,
    variant: {
      id: (_variant$id = variant == null ? void 0 : variant.id) != null ? _variant$id : "",
      sku: (_variant$sku = variant == null ? void 0 : variant.sku) != null ? _variant$sku : "",
      name: variant == null ? void 0 : variant.name,
      image: {
        url: product != null && product.images && product.images.length > 0 ? product == null ? void 0 : product.images[0].file.url : "/"
      },
      requiresShipping: false,
      price: price,
      listPrice: price
    },
    path: "",
    discounts: [],
    options: [{
      value: variant == null ? void 0 : variant.name
    }]
  };
  return item;
}
function normalizeChildren(children) {
  return children == null ? void 0 : children.results.map(function (ch) {
    return ch.id;
  });
}
function normalizeCategory(_ref7) {
  var id = _ref7.id,
    name = _ref7.name,
    slug = _ref7.slug,
    products = _ref7.products,
    images = _ref7.images,
    depth = _ref7.depth,
    children = _ref7.children,
    parent_id = _ref7.parent_id;
  return {
    id: id,
    name: name,
    slug: slug,
    path: "/" + slug,
    isEmpty: (products == null ? void 0 : products.length) === 0,
    images: images == null ? void 0 : images.map(function (image) {
      return {
        url: image.file.url
      };
    }),
    depth: depth,
    children: normalizeChildren(children),
    parentId: parent_id
  };
}

var handleFetchResponse = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!res) {
            _context.next = 4;
            break;
          }
          if (!res.error) {
            _context.next = 3;
            break;
          }
          throw new commerce.CommerceError(res.error);
        case 3:
          return _context.abrupt("return", res);
        case 4:
          return _context.abrupt("return", null);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleFetchResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: None
*/
var getCheckoutId = function getCheckoutId(id) {
  return id != null ? id : Cookies.get(SWELL_CHECKOUT_ID_COOKIE);
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: None
*/
var checkoutToCart = function checkoutToCart(checkoutPayload) {
  if (!checkoutPayload) {
    throw new commerce.CommerceError({
      message: 'Invalid response from Swell'
    });
  }
  return normalizeCart(checkoutPayload);
};

var checkoutCreate = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fetch) {
    var cart, checkoutUrl, options;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch({
            query: 'cart',
            method: 'get'
          });
        case 2:
          cart = _context.sent;
          if (cart) {
            _context.next = 6;
            break;
          }
          _context.next = 6;
          return fetch({
            query: 'cart',
            method: 'setItems',
            variables: [[]]
          });
        case 6:
          checkoutUrl = cart == null ? void 0 : cart.checkout_url;
          options = {
            expires: SWELL_COOKIE_EXPIRE,
            sameSite: "none",
            secure: true
          };
          if (checkoutUrl) {
            Cookies.set(SWELL_CHECKOUT_URL_COOKIE, checkoutUrl, options);
          }
          return _context.abrupt("return", cart);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function checkoutCreate(_x) {
    return _ref.apply(this, arguments);
  };
}();

var handler = {
  fetchOptions: {
    query: 'cart',
    method: 'get'
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetch, cart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch;
            _context.next = 3;
            return checkoutCreate(fetch);
          case 3:
            cart = _context.sent;
            return _context.abrupt("return", cart ? normalizeCart(cart) : null);
          case 5:
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
    query: 'cart',
    method: 'addItem'
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var item, options, fetch, variables, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            item = _ref.input, options = _ref.options, fetch = _ref.fetch;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1))) {
              _context.next = 3;
              break;
            }
            throw new commerce.CommerceError({
              message: 'The item quantity has to be a valid integer greater than 0'
            });
          case 3:
            variables = {
              checkoutId: getCheckoutId(),
              product_id: item.productId,
              quantity: item.quantity
            };
            if (item.productId !== item.variantId) {
              variables.variant_id = item.variantId;
            }
            _context.next = 7;
            return fetch(_extends({}, options, {
              variables: variables
            }));
          case 7:
            response = _context.sent;
            return _context.abrupt("return", checkoutToCart(response));
          case 9:
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
    query: "cart",
    method: "removeItem"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var itemId, options, fetch, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            itemId = _ref.input.itemId, options = _ref.options, fetch = _ref.fetch;
            _context.next = 3;
            return fetch(_extends({}, options, {
              variables: [itemId]
            }));
          case 3:
            response = _context.sent;
            return _context.abrupt("return", checkoutToCart(response));
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
    query: "cart",
    method: "updateItem"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ref$input, itemId, item, options, fetch, response;
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
            _context.next = 10;
            return fetch(_extends({}, options, {
              variables: [itemId, {
                quantity: item.quantity
              }]
            }));
          case 10:
            response = _context.sent;
            return _context.abrupt("return", checkoutToCart(response));
          case 12:
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

function ensure(x, msg) {
  if (msg === void 0) {
    msg = "";
  }
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null" + (msg ? "- " + msg : ""));
  } else {
    return x;
  }
}
var ensureNoNilFields = function ensureNoNilFields(o) {
  return Object.fromEntries(Object.entries(o).filter(function (_ref) {
    var v = _ref[1];
    return v != null;
  }));
};

var walkCategoryTree = function walkCategoryTree(category, categories) {
  if (!category || !categories) {
    return [];
  }
  var queue = [category];
  var result = [];
  while (queue.length > 0) {
    var _curr$children$map, _curr$children;
    var curr = ensure(queue.shift());
    result.push(curr);
    queue.push.apply(queue, (_curr$children$map = (_curr$children = curr.children) == null ? void 0 : _curr$children.map(function (child) {
      return ensure(categories.find(function (category) {
        return category.id === child;
      }), "The child category must always exist in the categories list");
    })) != null ? _curr$children$map : []);
  }
  return result;
};
var topologicalSortForCategoryTree = function topologicalSortForCategoryTree(categories) {
  return categories.filter(function (category) {
    return !category.parentId;
  }).flatMap(function (category) {
    return walkCategoryTree(category, categories);
  });
};

var handler$4 = {
  fetchOptions: {
    query: "products",
    method: "list"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, sortMap, categoryId, includeSubCategories, categories, brandId, search, _input$sort, sort, count, mappedSort, includedCategories, _yield$fetch, products;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            sortMap = new Map([["latest-desc", ""], ["price-asc", "price asc"], ["price-desc", "price desc"], ["trending-desc", "popularity"]]);
            categoryId = input.categoryId, includeSubCategories = input.includeSubCategories, categories = input.categories, brandId = input.brandId, search = input.search, _input$sort = input.sort, sort = _input$sort === void 0 ? "latest-desc" : _input$sort, count = input.count;
            mappedSort = sortMap.get(sort);
            includedCategories = includeSubCategories ? walkCategoryTree(categories == null ? void 0 : categories.find(function (category) {
              return category.id === categoryId;
            }), categories) : undefined;
            _context.next = 7;
            return fetch({
              query: options.query,
              method: options.method,
              variables: ensureNoNilFields({
                category: !includeSubCategories ? categoryId : undefined,
                brand: brandId,
                search: search,
                sort: mappedSort,
                expand: ["variants"],
                limit: count,
                $filters: _extends({}, includeSubCategories ? {
                  category: includedCategories == null ? void 0 : includedCategories.map(function (c) {
                    return c.id;
                  })
                } : {})
              })
            });
          case 7:
            _yield$fetch = _context.sent;
            products = _yield$fetch.results;
            return _context.abrupt("return", {
              products: products.map(function (product) {
                return normalizeProduct(product);
              }),
              found: products.length > 0
            });
          case 10:
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
        input: [["search", input.search], ["categoryId", input.categoryId], ["includeSubCategories", input.includeSubCategories], ["categories", input.categories], ["brandId", input.brandId], ["sort", input.sort], ["count", input.count]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var handler$5 = {
  fetchOptions: {
    query: 'products',
    method: 'get'
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, id, product;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            id = input.id;
            _context.next = 4;
            return fetch({
              query: options.query,
              method: options.method,
              variables: [id]
            });
          case 4:
            product = _context.sent;
            if (product) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", null);
          case 7:
            return _context.abrupt("return", normalizeProduct(product));
          case 8:
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
        input: [['id', input.id]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var handler$6 = {
  fetchOptions: {
    query: "categories",
    method: "get"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _data$results;
      var input, options, fetch, addIsEmptyField, categoryId, data, categories, normalizedCategories, _loop, _iterator, _step;
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            addIsEmptyField = input.addIsEmptyField, categoryId = input.categoryId;
            _context3.next = 4;
            return fetch({
              query: options.query,
              method: options.method,
              variables: ensureNoNilFields({
                expand: ["children", "parent_id"],
                id: categoryId
              })
            });
          case 4:
            data = _context3.sent;
            categories = (_data$results = data == null ? void 0 : data.results) != null ? _data$results : [];
            if (!addIsEmptyField) {
              _context3.next = 10;
              break;
            }
            _context3.next = 9;
            return Promise.all(categories.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(category) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = _extends;
                      _context.t1 = {};
                      _context.t2 = category;
                      _context.next = 5;
                      return fetch({
                        query: "products",
                        method: "list",
                        variables: ensureNoNilFields({
                          limit: 1,
                          category: category.id
                        })
                      });
                    case 5:
                      _context.t3 = _context.sent.results;
                      _context.t4 = {
                        products: _context.t3
                      };
                      return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2, _context.t4));
                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 9:
            categories = _context3.sent;
          case 10:
            normalizedCategories = !categoryId ? topologicalSortForCategoryTree(categories.map(normalizeCategory)) : categories.map(normalizeCategory);
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var _normalizedCategories, _normalizedCategories2;
              var category;
              return _regeneratorRuntime().wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    category = _step.value;
                    category.depth = ((_normalizedCategories = (_normalizedCategories2 = normalizedCategories.find(function (c) {
                      return c.id === category.parentId;
                    })) == null ? void 0 : _normalizedCategories2.depth) != null ? _normalizedCategories : -1) + 1;
                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            _iterator = _createForOfIteratorHelperLoose(normalizedCategories);
          case 13:
            if ((_step = _iterator()).done) {
              _context3.next = 17;
              break;
            }
            return _context3.delegateYield(_loop(), "t0", 15);
          case 15:
            _context3.next = 13;
            break;
          case 17:
            return _context3.abrupt("return", normalizedCategories);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee2);
    }))();
  },
  useHook: function useHook(_ref3) {
    var useData = _ref3.useData;
    return function (input) {
      var response = useData({
        input: [["addIsEmptyField", input == null ? void 0 : input.addIsEmptyField], ["categoryId", input == null ? void 0 : input.categoryId]],
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

var handler$7 = {
  fetchOptions: {
    query: "attributes",
    method: "get"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$fetch$values, _yield$fetch;
      var fetch, vendors;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch;
            _context.next = 3;
            return fetch({
              query: "attributes",
              method: "get",
              variables: "brand"
            });
          case 3:
            _context.t0 = _yield$fetch = _context.sent;
            if (!(_context.t0 == null)) {
              _context.next = 8;
              break;
            }
            _context.t1 = void 0;
            _context.next = 9;
            break;
          case 8:
            _context.t1 = _yield$fetch.values;
          case 9:
            _context.t2 = _yield$fetch$values = _context.t1;
            if (!(_context.t2 != null)) {
              _context.next = 14;
              break;
            }
            _context.t3 = _yield$fetch$values;
            _context.next = 15;
            break;
          case 14:
            _context.t3 = [];
          case 15:
            vendors = _context.t3;
            return _context.abrupt("return", Array.from(new Set(vendors).values()).map(function (v) {
              return {
                entityId: v,
                name: v,
                path: "brands/" + v
              };
            }));
          case 17:
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

var fetcher = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
    var _ref$method, method, variables, query, callSwell, _callSwell;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _callSwell = function _callSwell3() {
            _callSwell = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var arg1, arg2, response, _response;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!Array.isArray(variables)) {
                      _context.next = 9;
                      break;
                    }
                    arg1 = variables[0];
                    arg2 = variables[1];
                    _context.next = 5;
                    return swell__default[query][method](arg1, arg2);
                  case 5:
                    response = _context.sent;
                    return _context.abrupt("return", handleFetchResponse(response));
                  case 9:
                    _context.next = 11;
                    return swell__default[query][method](variables);
                  case 11:
                    _response = _context.sent;
                    return _context.abrupt("return", handleFetchResponse(_response));
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _callSwell.apply(this, arguments);
          };
          callSwell = function _callSwell2() {
            return _callSwell.apply(this, arguments);
          };
          _ref$method = _ref.method, method = _ref$method === void 0 ? 'get' : _ref$method, variables = _ref.variables, query = _ref.query;
          if (!(query && query in swell__default)) {
            _context2.next = 9;
            break;
          }
          _context2.next = 6;
          return callSwell();
        case 6:
          return _context2.abrupt("return", _context2.sent);
        case 9:
          throw new commerce.CommerceError({
            message: 'Invalid query argument!'
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetcher(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: Added storeId and publicKey parameters
*/
var getSwellProvider = function getSwellProvider(storeId, publicKey) {
  swell.init(storeId, publicKey);
  return {
    locale: "en-us",
    cartCookie: SWELL_CHECKOUT_ID_COOKIE,
    swell: swell__default,
    fetcher: fetcher,
    cart: {
      useCart: handler,
      useAddItem: handler$1,
      useUpdateItem: handler$3,
      useRemoveItem: handler$2
    },
    products: {
      useSearch: handler$4,
      useProduct: handler$5
    },
    site: {
      useCategories: handler$6,
      useBrands: handler$7
    },
    extraFeatures: {
      includeSubCategories: true
    }
  };
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/swell/src
  Changes: None
*/
var getCommerceProvider = function getCommerceProvider(storeId, publicKey) {
  return commerce.getCommerceProvider(getSwellProvider(storeId, publicKey));
};
var useCommerce = function useCommerce() {
  return commerce.useCommerce();
};

var globalContextName = "plasmic-commerce-swell-provider";
var commerceProviderMeta = /*#__PURE__*/_extends({
  name: "plasmic-commerce-swell-provider",
  displayName: "Swell Provider",
  props: {
    storeId: {
      type: "string",
      defaultValue: "plasmic-sandbox"
    },
    publicKey: {
      type: "string",
      defaultValue: "pk_QaZeGhtpQaVbNQnWJdRlE1abE6Ezf9U9"
    }
  }
}, {
  globalActions: commerce.globalActionsRegistrations
}, {
  description: "Get your store ID and public storefront API key from the Swell admin UI under Developer > API Keys.\n\n[Watch how to use this integration](https://www.youtube.com/watch?v=b2mgOTbP2_8).",
  importPath: "@plasmicpkgs/commerce-swell",
  importName: "CommerceProviderComponent"
});
function CommerceProviderComponent(props) {
  var storeId = props.storeId,
    publicKey = props.publicKey,
    children = props.children;
  var CommerceProvider = React__default.useMemo(function () {
    return getCommerceProvider(storeId, publicKey);
  }, [storeId, publicKey]);
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
exports.commerceProviderMeta = commerceProviderMeta;
exports.getCommerceProvider = getCommerceProvider;
exports.registerAll = registerAll;
exports.registerCommerceProvider = registerCommerceProvider;
exports.useCommerce = useCommerce;
//# sourceMappingURL=commerce-swell.cjs.development.js.map
