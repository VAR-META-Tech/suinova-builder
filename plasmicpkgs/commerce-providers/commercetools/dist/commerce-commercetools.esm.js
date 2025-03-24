import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { usePlasmicQueryData } from '@plasmicapp/query';
import { useCart, ValidationError, useCommerce as useCommerce$1, getCommerceProvider as getCommerceProvider$1, CartActionsProvider, globalActionsRegistrations } from '@plasmicpkgs/commerce';
import React, { useMemo, useCallback } from 'react';
import Cookies from 'js-cookie';
import debounce from 'debounce';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ClientBuilder } from '@commercetools/sdk-client-v2';

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

var getSortVariables = function getSortVariables(sort, isCategory) {
  var output = undefined;
  switch (sort) {
    case 'price-asc':
      output = 'price asc';
      break;
    case 'price-desc':
      output = 'price desc';
      break;
    case 'trending-desc':
      // default option
      output = undefined;
      break;
    case 'latest-desc':
      output = 'createdAt desc';
      break;
  }
  return output;
};

var COMMERCETOOLS_COOKIE_EXPIRE = 30;
var COMMERCETOOLS_CART_COOKIE = 'commercetools_cart';

var options = {
  expires: COMMERCETOOLS_COOKIE_EXPIRE,
  sameSite: "none",
  secure: true
};
var getCookies = function getCookies(name) {
  var cookie = Cookies.get(name);
  return cookie ? JSON.parse(cookie) : undefined;
};
var setCookies = function setCookies(name, value) {
  return Cookies.set(name, JSON.stringify(value), options);
};
var removeCookies = function removeCookies(name) {
  return Cookies.remove(name);
};

var getCartId = function getCartId() {
  return getCookies(COMMERCETOOLS_CART_COOKIE);
};
var setCartId = function setCartId(id) {
  return setCookies(COMMERCETOOLS_CART_COOKIE, id);
};
var removeCartCookie = function removeCartCookie() {
  return removeCookies(COMMERCETOOLS_CART_COOKIE);
};

var createCart = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fetch) {
    var draft, cart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          draft = {
            currency: 'USD',
            country: 'US'
          };
          _context.next = 3;
          return fetch({
            query: 'carts',
            method: 'post',
            body: draft
          });
        case 3:
          cart = _context.sent;
          if (!cart.body) {
            removeCartCookie();
          } else {
            setCartId(cart.body.id);
          }
          return _context.abrupt("return", cart.body);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createCart(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getActiveCart = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fetch) {
    var cartId, activeCart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cartId = getCartId();
          if (!cartId) {
            _context.next = 7;
            break;
          }
          _context.next = 4;
          return fetch({
            query: 'carts',
            method: 'get',
            variables: {
              id: cartId
            }
          });
        case 4:
          activeCart = _context.sent.body;
          _context.next = 10;
          break;
        case 7:
          _context.next = 9;
          return createCart(fetch);
        case 9:
          activeCart = _context.sent;
        case 10:
          if (!activeCart) {
            removeCartCookie();
          } else {
            setCartId(activeCart.id);
          }
          return _context.abrupt("return", activeCart);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getActiveCart(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getLocalizedString = function getLocalizedString(localizedString, locale) {
  return !localizedString || !locale ? undefined : locale in localizedString ? localizedString[locale] : Object.values(localizedString)[0];
};

var withoutNils = function withoutNils(xs) {
  return xs.filter(function (x) {
    return x != null;
  });
};
var dedup = function dedup(xs) {
  return [].concat(new Set(xs));
};

var currencyCode = 'USD';
var stringify = function stringify(value) {
  return typeof value === 'string' ? value : JSON.stringify(value);
};
var money = function money(price) {
  return price ? {
    value: price.centAmount / 100,
    currencyCode: price.currencyCode
  } : {
    value: -1.0,
    currencyCode: currencyCode
  };
};
var normalizeProductOption = function normalizeProductOption(option) {
  return {
    __typename: 'MultipleChoiceOption',
    id: option.name,
    displayName: option.name,
    values: dedup(Array.isArray(option.value) ? option.value : [option.value]).map(function (val) {
      if (option.name.match(/colou?r/gi) && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(val)) {
        return {
          label: stringify(val),
          hexColors: [val]
        };
      } else {
        return {
          label: stringify(val)
        };
      }
    })
  };
};
var normalizeProductImages = function normalizeProductImages(images) {
  return images.map(function (image) {
    return _extends({
      url: image.url
    }, image.label ? {
      alt: image.label
    } : {}, {
      width: image.dimensions.w,
      height: image.dimensions.h
    });
  });
};
var normalizeProductVariant = function normalizeProductVariant(variant) {
  var _variant$prices$find$, _variant$prices, _variant$prices2, _variant$sku, _variant$attributes$m, _variant$attributes;
  var price = money((_variant$prices$find$ = (_variant$prices = variant.prices) == null || (_variant$prices = _variant$prices.find(function (price) {
    return price.value.currencyCode === currencyCode;
  })) == null ? void 0 : _variant$prices.value) != null ? _variant$prices$find$ : (_variant$prices2 = variant.prices) == null || (_variant$prices2 = _variant$prices2[0]) == null ? void 0 : _variant$prices2.value).value;
  return {
    id: "" + variant.id,
    name: "" + variant.id,
    sku: (_variant$sku = variant.sku) != null ? _variant$sku : '',
    price: price,
    options: (_variant$attributes$m = (_variant$attributes = variant.attributes) == null ? void 0 : _variant$attributes.map(function (attribute) {
      return normalizeProductOption({
        name: attribute.name,
        value: attribute.value.key
      });
    })) != null ? _variant$attributes$m : [],
    requiresShipping: false,
    listPrice: price
  };
};
var normalizeProduct = function normalizeProduct(product, locale) {
  var _getLocalizedString, _getLocalizedString2, _product$masterVarian, _product$masterVarian2, _product$masterVarian3;
  return {
    id: product.id,
    name: (_getLocalizedString = getLocalizedString(product.name, locale)) != null ? _getLocalizedString : "",
    slug: getLocalizedString(product.slug, locale),
    path: "/" + getLocalizedString(product.slug, locale),
    description: (_getLocalizedString2 = getLocalizedString(product.description, locale)) != null ? _getLocalizedString2 : '',
    price: money((_product$masterVarian = (_product$masterVarian2 = product.masterVariant.prices) == null || (_product$masterVarian2 = _product$masterVarian2.find(function (price) {
      return price.value.currencyCode === currencyCode;
    })) == null ? void 0 : _product$masterVarian2.value) != null ? _product$masterVarian : (_product$masterVarian3 = product.masterVariant.prices) == null || (_product$masterVarian3 = _product$masterVarian3[0]) == null ? void 0 : _product$masterVarian3.value),
    images: normalizeProductImages(withoutNils([].concat(product.masterVariant.images ? product.masterVariant.images : [], product.variants.flatMap(function (variant) {
      return variant.images;
    })))),
    variants: [product.masterVariant].concat(product.variants).map(normalizeProductVariant),
    options: withoutNils([].concat(product.masterVariant.attributes ? product.masterVariant.attributes : [], product.variants.flatMap(function (variant) {
      return variant.attributes;
    }))).reduce(function (groupedAttributes, attribute) {
      var groupedAttribute = groupedAttributes.find(function (gAttr) {
        return gAttr.name === attribute.name;
      });
      if (groupedAttribute) {
        groupedAttribute.value.push(stringify(attribute.value.key));
      } else {
        groupedAttributes.push({
          name: attribute.name,
          value: [stringify(attribute.value.key)]
        });
      }
      return groupedAttributes;
    }, []).map(normalizeProductOption)
  };
};
var normalizeLineItem = function normalizeLineItem(lineItem, locale) {
  var _getLocalizedString3, _lineItem$variant$att, _lineItem$variant$att2;
  return {
    id: lineItem.id,
    variantId: "" + lineItem.variant.id,
    productId: lineItem.productId,
    name: (_getLocalizedString3 = getLocalizedString(lineItem.name, locale)) != null ? _getLocalizedString3 : "",
    path: '',
    quantity: lineItem.quantity,
    discounts: [],
    variant: normalizeProductVariant(lineItem.variant),
    options: (_lineItem$variant$att = (_lineItem$variant$att2 = lineItem.variant.attributes) == null ? void 0 : _lineItem$variant$att2.map(function (attribute) {
      return {
        id: attribute.name,
        name: attribute.name,
        value: attribute.value.key
      };
    })) != null ? _lineItem$variant$att : []
  };
};
var normalizeCart = function normalizeCart(cart, locale) {
  return {
    id: cart.id,
    customerId: cart.customerId,
    email: cart.customerEmail,
    createdAt: cart.createdAt,
    currency: {
      code: currencyCode
    },
    taxesIncluded: cart.taxMode !== 'Disabled',
    lineItems: cart.lineItems.map(function (item) {
      return normalizeLineItem(item, locale);
    }),
    lineItemsSubtotalPrice: 0,
    subtotalPrice: money(cart.totalPrice).value,
    totalPrice: money(cart.totalPrice).value,
    discounts: []
  };
};
var normalizeCategory = function normalizeCategory(category, locale) {
  var _getLocalizedString4, _getLocalizedString5;
  return {
    id: category.id,
    name: (_getLocalizedString4 = getLocalizedString(category.name, locale)) != null ? _getLocalizedString4 : "",
    slug: (_getLocalizedString5 = getLocalizedString(category.slug, locale)) != null ? _getLocalizedString5 : "",
    path: "/" + getLocalizedString(category.slug, locale)
  };
};

var handler = {
  fetchOptions: {
    query: "cart",
    method: "get"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetch, provider, activeCart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch, provider = _ref.provider;
            _context.next = 3;
            return getActiveCart(fetch);
          case 3:
            activeCart = _context.sent;
            return _context.abrupt("return", activeCart ? normalizeCart(activeCart, provider.locale) : null);
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
      return useMemo(function () {
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
    query: "cart",
    method: "post"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item$quantity;
      var item, fetch, provider, activeCart, updatedCart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            item = _ref.input, fetch = _ref.fetch, provider = _ref.provider;
            _context.next = 3;
            return getActiveCart(fetch);
          case 3:
            activeCart = _context.sent;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1) || !activeCart)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", undefined);
          case 6:
            _context.next = 8;
            return fetch({
              query: "carts",
              method: "post",
              variables: {
                id: activeCart.id
              },
              body: {
                version: activeCart.version,
                actions: [{
                  action: "addLineItem",
                  variantId: +item.variantId,
                  productId: item.productId,
                  quantity: (_item$quantity = item.quantity) != null ? _item$quantity : 1
                }]
              }
            });
          case 8:
            updatedCart = _context.sent;
            if (updatedCart.body) {
              setCartId(updatedCart.body.id);
            } else {
              removeCartCookie();
            }
            return _context.abrupt("return", updatedCart.body ? normalizeCart(updatedCart.body, provider.locale) : undefined);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function () {
      var _useCart = useCart(),
        mutate = _useCart.mutate;
      return useCallback(/*#__PURE__*/function () {
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
    method: "post"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var itemId, fetch, provider, activeCart, updatedCart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            itemId = _ref.input.itemId, fetch = _ref.fetch, provider = _ref.provider;
            _context.next = 3;
            return getActiveCart(fetch);
          case 3:
            activeCart = _context.sent;
            if (!(!itemId || !activeCart)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", undefined);
          case 6:
            _context.next = 8;
            return fetch({
              query: "carts",
              method: "post",
              variables: {
                id: activeCart.id
              },
              body: {
                version: activeCart.version,
                actions: [{
                  action: "removeLineItem",
                  lineItemId: itemId
                }]
              }
            });
          case 8:
            updatedCart = _context.sent;
            if (updatedCart.body) {
              setCartId(updatedCart.body.id);
            } else {
              removeCartCookie();
            }
            return _context.abrupt("return", normalizeCart(updatedCart.body, provider.locale));
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function (ctx) {
      if (ctx === void 0) {
        ctx = {};
      }
      var _ctx = ctx,
        item = _ctx.item;
      var _useCart = useCart(),
        mutate = _useCart.mutate;
      var removeItem = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var _input$id;
          var itemId, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                itemId = (_input$id = input == null ? void 0 : input.id) != null ? _input$id : item == null ? void 0 : item.id;
                if (itemId) {
                  _context2.next = 3;
                  break;
                }
                throw new ValidationError({
                  message: "Invalid input used for this operation"
                });
              case 3:
                _context2.next = 5;
                return fetch({
                  input: {
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
        return function removeItem(_x) {
          return _ref3.apply(this, arguments);
        };
      }();
      return useCallback(removeItem, [fetch, mutate]);
    };
  }
};

var handler$3 = {
  fetchOptions: {
    query: "cart",
    method: "post"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item$quantity;
      var _ref$input, item, itemId, fetch, provider, activeCart, updatedCart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref$input = _ref.input, item = _ref$input.item, itemId = _ref$input.itemId, fetch = _ref.fetch, provider = _ref.provider;
            if (!Number.isInteger(item.quantity)) {
              _context.next = 6;
              break;
            }
            if (!(item.quantity < 1)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", handler$2.fetcher == null ? void 0 : handler$2.fetcher({
              options: handler$2.fetchOptions,
              input: {
                itemId: itemId
              },
              fetch: fetch,
              provider: provider
            }));
          case 4:
            _context.next = 8;
            break;
          case 6:
            if (!item.quantity) {
              _context.next = 8;
              break;
            }
            throw new ValidationError({
              message: "The item quantity has to be a valid integer"
            });
          case 8:
            _context.next = 10;
            return getActiveCart(fetch);
          case 10:
            activeCart = _context.sent;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1) || !activeCart)) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", undefined);
          case 13:
            _context.next = 15;
            return fetch({
              query: "carts",
              method: "post",
              variables: {
                id: activeCart.id
              },
              body: {
                version: activeCart.version,
                actions: [{
                  action: "changeLineItemQuantity",
                  lineItemId: itemId,
                  quantity: (_item$quantity = item.quantity) != null ? _item$quantity : 1
                }]
              }
            });
          case 15:
            updatedCart = _context.sent;
            if (updatedCart.body) {
              setCartId(updatedCart.body.id);
            } else {
              removeCartCookie();
            }
            return _context.abrupt("return", updatedCart.body ? normalizeCart(updatedCart.body, provider.locale) : undefined);
          case 18:
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
      var _useCart = useCart(),
        mutate = _useCart.mutate;
      return useCallback(debounce(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var _input$id;
          var itemId, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                itemId = (_input$id = input.id) != null ? _input$id : item == null ? void 0 : item.id;
                if (!(!itemId || input.quantity == null)) {
                  _context2.next = 3;
                  break;
                }
                throw new ValidationError({
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

var initCommercetoolsSDKClient = function initCommercetoolsSDKClient(creds) {
  var scopes = ["manage_project:" + creds.projectKey];
  // Configure authMiddlewareOptions
  var authMiddlewareOptions = {
    host: "https://auth." + creds.region + ".commercetools.com",
    projectKey: creds.clientSecret,
    credentials: {
      clientId: creds.clientId,
      clientSecret: creds.clientSecret
    },
    scopes: scopes,
    fetch: fetch
  };
  // Configure httpMiddlewareOptions
  var httpMiddlewareOptions = {
    host: "https://api." + creds.region + ".commercetools.com",
    fetch: fetch
  };
  // Export the ClientBuilder
  return new ClientBuilder().withProjectKey(creds.projectKey).withClientCredentialsFlow(authMiddlewareOptions).withHttpMiddleware(httpMiddlewareOptions).build();
};

var getFetcher = function getFetcher(creds) {
  var client = initCommercetoolsSDKClient(creds);
  var apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: creds.projectKey
  });
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var method, variables, query, body, queryBuilder;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            method = _ref.method, variables = _ref.variables, query = _ref.query, body = _ref.body;
            queryBuilder = apiRoot;
            if (query) {
              queryBuilder = queryBuilder[query]();
            }
            if (variables != null && variables.id) {
              queryBuilder = queryBuilder.withId({
                ID: variables.id
              });
            }
            if (variables != null && variables.search) {
              queryBuilder = queryBuilder.search();
            }
            _context.next = 7;
            return queryBuilder[method]({
              body: body,
              queryArgs: _extends({
                expand: variables == null ? void 0 : variables.expand,
                limit: variables == null ? void 0 : variables.limit
              }, variables != null && variables.sort ? {
                sort: variables.sort
              } : {}, variables != null && variables.search ? variables.search : {}, variables != null && variables.filters ? {
                filter: variables.filters
              } : {}, variables != null && variables.where ? {
                where: variables.where
              } : {})
            }).execute();
          case 7:
            return _context.abrupt("return", _context.sent);
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

var handler$4 = {
  fetchOptions: {
    query: "productProjections",
    method: "get"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, provider, id, product;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch, provider = _ref.provider;
            id = input.id;
            if (id) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", null);
          case 4:
            _context.next = 6;
            return fetch(_extends({}, options, {
              variables: {
                id: id
              }
            }));
          case 6:
            product = _context.sent;
            return _context.abrupt("return", product.body ? normalizeProduct(product.body, provider.locale) : null);
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

var handler$5 = {
  fetchOptions: {
    method: "get",
    query: "productProjections"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _search;
      var input, options, fetch, provider, search, categoryId, sort, count, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch, provider = _ref.provider;
            search = input.search, categoryId = input.categoryId, sort = input.sort, count = input.count;
            _context.next = 4;
            return fetch(_extends({}, options, {
              variables: _extends({
                expand: ["masterData.current"],
                sort: getSortVariables(sort),
                limit: count
              }, search ?
              // eslint-disable-next-line
              {
                search: (_search = {}, _search["text." + (provider == null ? void 0 : provider.locale)] = search, _search)
              } : {}, categoryId ? {
                filters: "categories.id: subtree(\"" + categoryId + "\")"
              } : {})
            }));
          case 4:
            response = _context.sent;
            return _context.abrupt("return", {
              products: response.body.results.map(function (product) {
                return normalizeProduct(product, provider.locale);
              }),
              found: response.body.count > 0
            });
          case 6:
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
        input: [["search", input.search], ["categoryId", input.categoryId], ["brandId", input.brandId], ["sort", input.sort], ["locale", input.locale], ["count", input.count]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var handler$6 = {
  fetchOptions: {
    query: ""
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", null);
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
      return useMemo(function () {
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
    query: "categories",
    method: "get"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, provider, categoryId, categories, category;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch, provider = _ref.provider;
            categoryId = input.categoryId;
            if (categoryId) {
              _context.next = 9;
              break;
            }
            _context.next = 5;
            return fetch(_extends({}, options));
          case 5:
            categories = _context.sent;
            return _context.abrupt("return", categories.body ? categories.body.results.map(function (category) {
              return normalizeCategory(category, provider.locale);
            }) : []);
          case 9:
            _context.next = 11;
            return fetch(_extends({}, options, {
              variables: _extends({}, categoryId ? {
                id: categoryId
              } : {})
            }));
          case 11:
            category = _context.sent;
            return _context.abrupt("return", category.body ? [normalizeCategory(category.body, provider.locale)] : []);
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
      var response = useData({
        input: [["categoryId", input == null ? void 0 : input.categoryId]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return useMemo(function () {
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

var getCommercetoolsProvider = function getCommercetoolsProvider(creds, locale) {
  return {
    locale: locale,
    cartCookie: COMMERCETOOLS_CART_COOKIE,
    cart: {
      useCart: handler,
      useAddItem: handler$1,
      useRemoveItem: handler$2,
      useUpdateItem: handler$3
    },
    fetcher: getFetcher(creds),
    products: {
      useSearch: handler$5,
      useProduct: handler$4
    },
    site: {
      useCategories: handler$7,
      useBrands: handler$6
    }
  };
};

var useCommerce = function useCommerce() {
  return useCommerce$1();
};
var getCommerceProvider = function getCommerceProvider(creds, locale) {
  return getCommerceProvider$1(getCommercetoolsProvider(creds, locale));
};

var globalContextName = "plasmic-commerce-commercetools-provider";
var commerceProviderMeta = /*#__PURE__*/_extends({
  name: globalContextName,
  displayName: "Commercetools Provider",
  props: {
    projectKey: {
      type: "string",
      defaultValue: "plasmic-demo"
    },
    clientId: {
      type: "string",
      defaultValue: "B4hmK61xvz5LvdSDtsFmcflM"
    },
    clientSecret: {
      type: "string",
      defaultValue: "KhzjcjSu1Oul4aomSmOsLZOCZKbvfHqx"
    },
    region: {
      type: "choice",
      options: ["us-central1.gcp", "us-east-2.aws", "europe-west1.gcp", "eu-central-1.aws", "australia-southeast1.gcp"],
      defaultValue: "us-central1.gcp"
    }
  }
}, {
  globalActions: globalActionsRegistrations
}, {
  importPath: "@plasmicpkgs/commercetools",
  importName: "CommerceProviderComponent"
});
function CommerceProviderComponent(props) {
  var children = props.children,
    projectKey = props.projectKey,
    clientId = props.clientId,
    clientSecret = props.clientSecret,
    region = props.region;
  var creds = React.useMemo(function () {
    return {
      projectKey: projectKey,
      clientId: clientId,
      clientSecret: clientSecret,
      region: region
    };
  }, [projectKey, clientId, clientSecret, region]);
  var _usePlasmicQueryData = usePlasmicQueryData(JSON.stringify({
      creds: creds
    }) + "locale", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetcher, project;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetcher = getFetcher(creds);
            _context.next = 3;
            return fetcher({
              method: "get"
            });
          case 3:
            project = _context.sent;
            return _context.abrupt("return", project.body ? project.body.languages[0] : undefined);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))),
    locale = _usePlasmicQueryData.data,
    error = _usePlasmicQueryData.error,
    isLoading = _usePlasmicQueryData.isLoading;
  var CommerceProvider = React.useMemo(function () {
    return getCommerceProvider(creds, locale != null ? locale : "");
  }, [creds, locale]);
  if (isLoading) {
    return null;
  } else if (error || !locale) {
    throw new Error(error ? error.message : "Project language not found");
  }
  return React.createElement(CommerceProvider, null, React.createElement(CartActionsProvider, {
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

export { CommerceProviderComponent, commerceProviderMeta, getCommerceProvider, registerAll, registerCommerceProvider, useCommerce };
//# sourceMappingURL=commerce-commercetools.esm.js.map
