import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { useCart, CommerceError, ValidationError, FetcherError, useCommerce as useCommerce$1, getCommerceProvider as getCommerceProvider$1, CartActionsProvider, globalActionsRegistrations } from '@plasmicpkgs/commerce';
import React, { useMemo, useCallback } from 'react';
import Cookies from 'js-cookie';
import debounce from 'debounce';

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

var _schema;
var defaultStoreDomain = "next-js-store.myshopify.com";
var defaultAccessToken = "ef7d41c7bf7e1c214074d0d3047bcd7b";
var shopifyApiVersion = "2025-01";
var config = {
  schema: (_schema = {}, _schema["https://" + defaultStoreDomain + "/api/" + shopifyApiVersion + "/graphql.json"] = {
    headers: {
      "X-Shopify-Storefront-Access-Token": defaultAccessToken
    }
  }, _schema),
  generates: {
    "./src/utils/graphql/gen/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false
      },
      config: {
        documentMode: "string"
      }
    }
  },
  documents: ["./src/utils/fragments/*.{ts,tsx}", "./src/utils/mutations/*.{ts,tsx}", "./src/utils/queries/*.{ts,tsx}"]
};

var SHOPIFY_CART_ID_COOKIE = "shopify_cartId";
var SHOPIFY_CHECKOUT_URL_COOKIE = "shopify_checkoutUrl";
var SHOPIFY_COOKIE_EXPIRE = 30;

/** The set of valid sort keys for the Article query. */
var ArticleSortKeys;
(function (ArticleSortKeys) {
  /** Sort by the `author` value. */
  ArticleSortKeys["Author"] = "AUTHOR";
  /** Sort by the `blog_title` value. */
  ArticleSortKeys["BlogTitle"] = "BLOG_TITLE";
  /** Sort by the `id` value. */
  ArticleSortKeys["Id"] = "ID";
  /** Sort by the `published_at` value. */
  ArticleSortKeys["PublishedAt"] = "PUBLISHED_AT";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ArticleSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  ArticleSortKeys["Title"] = "TITLE";
  /** Sort by the `updated_at` value. */
  ArticleSortKeys["UpdatedAt"] = "UPDATED_AT";
})(ArticleSortKeys || (ArticleSortKeys = {}));
/** The set of valid sort keys for the Blog query. */
var BlogSortKeys;
(function (BlogSortKeys) {
  /** Sort by the `handle` value. */
  BlogSortKeys["Handle"] = "HANDLE";
  /** Sort by the `id` value. */
  BlogSortKeys["Id"] = "ID";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  BlogSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  BlogSortKeys["Title"] = "TITLE";
})(BlogSortKeys || (BlogSortKeys = {}));
/** Card brand, such as Visa or Mastercard, which can be used for payments. */
var CardBrand;
(function (CardBrand) {
  /** American Express. */
  CardBrand["AmericanExpress"] = "AMERICAN_EXPRESS";
  /** Diners Club. */
  CardBrand["DinersClub"] = "DINERS_CLUB";
  /** Discover. */
  CardBrand["Discover"] = "DISCOVER";
  /** JCB. */
  CardBrand["Jcb"] = "JCB";
  /** Mastercard. */
  CardBrand["Mastercard"] = "MASTERCARD";
  /** Visa. */
  CardBrand["Visa"] = "VISA";
})(CardBrand || (CardBrand = {}));
/**
 * Represents how credit card details are provided for a direct payment.
 *
 */
var CartCardSource;
(function (CartCardSource) {
  /**
   * The credit card was provided by a third party and vaulted on their system.
   * Using this value requires a separate permission from Shopify.
   *
   */
  CartCardSource["SavedCreditCard"] = "SAVED_CREDIT_CARD";
})(CartCardSource || (CartCardSource = {}));
/**
 * Defines what type of merchandise is in the delivery group.
 *
 */
var CartDeliveryGroupType;
(function (CartDeliveryGroupType) {
  /**
   * The delivery group only contains merchandise that is either a one time purchase or a first delivery of
   * subscription merchandise.
   *
   */
  CartDeliveryGroupType["OneTimePurchase"] = "ONE_TIME_PURCHASE";
  /** The delivery group only contains subscription merchandise. */
  CartDeliveryGroupType["Subscription"] = "SUBSCRIPTION";
})(CartDeliveryGroupType || (CartDeliveryGroupType = {}));
/** Possible error codes that can be returned by `CartUserError`. */
var CartErrorCode;
(function (CartErrorCode) {
  /** The specified address field contains emojis. */
  CartErrorCode["AddressFieldContainsEmojis"] = "ADDRESS_FIELD_CONTAINS_EMOJIS";
  /** The specified address field contains HTML tags. */
  CartErrorCode["AddressFieldContainsHtmlTags"] = "ADDRESS_FIELD_CONTAINS_HTML_TAGS";
  /** The specified address field contains a URL. */
  CartErrorCode["AddressFieldContainsUrl"] = "ADDRESS_FIELD_CONTAINS_URL";
  /** The specified address field does not match the expected pattern. */
  CartErrorCode["AddressFieldDoesNotMatchExpectedPattern"] = "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN";
  /** The specified address field is required. */
  CartErrorCode["AddressFieldIsRequired"] = "ADDRESS_FIELD_IS_REQUIRED";
  /** The specified address field is too long. */
  CartErrorCode["AddressFieldIsTooLong"] = "ADDRESS_FIELD_IS_TOO_LONG";
  /** The input value is invalid. */
  CartErrorCode["Invalid"] = "INVALID";
  /** Company location not found or not allowed. */
  CartErrorCode["InvalidCompanyLocation"] = "INVALID_COMPANY_LOCATION";
  /** The delivery address was not found. */
  CartErrorCode["InvalidDeliveryAddressId"] = "INVALID_DELIVERY_ADDRESS_ID";
  /** Delivery group was not found in cart. */
  CartErrorCode["InvalidDeliveryGroup"] = "INVALID_DELIVERY_GROUP";
  /** Delivery option was not valid. */
  CartErrorCode["InvalidDeliveryOption"] = "INVALID_DELIVERY_OPTION";
  /** The quantity must be a multiple of the specified increment. */
  CartErrorCode["InvalidIncrement"] = "INVALID_INCREMENT";
  /** Merchandise line was not found in cart. */
  CartErrorCode["InvalidMerchandiseLine"] = "INVALID_MERCHANDISE_LINE";
  /** The metafields were not valid. */
  CartErrorCode["InvalidMetafields"] = "INVALID_METAFIELDS";
  /** The payment wasn't valid. */
  CartErrorCode["InvalidPayment"] = "INVALID_PAYMENT";
  /** Cannot update payment on an empty cart */
  CartErrorCode["InvalidPaymentEmptyCart"] = "INVALID_PAYMENT_EMPTY_CART";
  /** The given zip code is invalid for the provided country. */
  CartErrorCode["InvalidZipCodeForCountry"] = "INVALID_ZIP_CODE_FOR_COUNTRY";
  /** The given zip code is invalid for the provided province. */
  CartErrorCode["InvalidZipCodeForProvince"] = "INVALID_ZIP_CODE_FOR_PROVINCE";
  /** The input value should be less than the maximum value allowed. */
  CartErrorCode["LessThan"] = "LESS_THAN";
  /** The quantity must be below the specified maximum for the item. */
  CartErrorCode["MaximumExceeded"] = "MAXIMUM_EXCEEDED";
  /** The quantity must be above the specified minimum for the item. */
  CartErrorCode["MinimumNotMet"] = "MINIMUM_NOT_MET";
  /** The customer access token is required when setting a company location. */
  CartErrorCode["MissingCustomerAccessToken"] = "MISSING_CUSTOMER_ACCESS_TOKEN";
  /** Missing discount code. */
  CartErrorCode["MissingDiscountCode"] = "MISSING_DISCOUNT_CODE";
  /** Missing note. */
  CartErrorCode["MissingNote"] = "MISSING_NOTE";
  /** The note length must be below the specified maximum. */
  CartErrorCode["NoteTooLong"] = "NOTE_TOO_LONG";
  /** Only one delivery address can be selected. */
  CartErrorCode["OnlyOneDeliveryAddressCanBeSelected"] = "ONLY_ONE_DELIVERY_ADDRESS_CAN_BE_SELECTED";
  /** The payment method is not supported. */
  CartErrorCode["PaymentMethodNotSupported"] = "PAYMENT_METHOD_NOT_SUPPORTED";
  /** The given province cannot be found. */
  CartErrorCode["ProvinceNotFound"] = "PROVINCE_NOT_FOUND";
  /** Too many delivery addresses on Cart. */
  CartErrorCode["TooManyDeliveryAddresses"] = "TOO_MANY_DELIVERY_ADDRESSES";
  /** A general error occurred during address validation. */
  CartErrorCode["UnspecifiedAddressError"] = "UNSPECIFIED_ADDRESS_ERROR";
  /** Validation failed. */
  CartErrorCode["ValidationCustom"] = "VALIDATION_CUSTOM";
  /** The given zip code is unsupported. */
  CartErrorCode["ZipCodeNotSupported"] = "ZIP_CODE_NOT_SUPPORTED";
})(CartErrorCode || (CartErrorCode = {}));
/** The code for the cart warning. */
var CartWarningCode;
(function (CartWarningCode) {
  /** A delivery address with the same details already exists on this cart. */
  CartWarningCode["DuplicateDeliveryAddress"] = "DUPLICATE_DELIVERY_ADDRESS";
  /** The merchandise does not have enough stock. */
  CartWarningCode["MerchandiseNotEnoughStock"] = "MERCHANDISE_NOT_ENOUGH_STOCK";
  /** The merchandise is out of stock. */
  CartWarningCode["MerchandiseOutOfStock"] = "MERCHANDISE_OUT_OF_STOCK";
  /** Gift cards are not available as a payment method. */
  CartWarningCode["PaymentsGiftCardsUnavailable"] = "PAYMENTS_GIFT_CARDS_UNAVAILABLE";
})(CartWarningCode || (CartWarningCode = {}));
/** The set of valid sort keys for the Collection query. */
var CollectionSortKeys;
(function (CollectionSortKeys) {
  /** Sort by the `id` value. */
  CollectionSortKeys["Id"] = "ID";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  CollectionSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  CollectionSortKeys["Title"] = "TITLE";
  /** Sort by the `updated_at` value. */
  CollectionSortKeys["UpdatedAt"] = "UPDATED_AT";
})(CollectionSortKeys || (CollectionSortKeys = {}));
/** The code of the error that occurred during a cart completion attempt. */
var CompletionErrorCode;
(function (CompletionErrorCode) {
  CompletionErrorCode["Error"] = "ERROR";
  CompletionErrorCode["InventoryReservationError"] = "INVENTORY_RESERVATION_ERROR";
  CompletionErrorCode["PaymentAmountTooSmall"] = "PAYMENT_AMOUNT_TOO_SMALL";
  CompletionErrorCode["PaymentCallIssuer"] = "PAYMENT_CALL_ISSUER";
  CompletionErrorCode["PaymentCardDeclined"] = "PAYMENT_CARD_DECLINED";
  CompletionErrorCode["PaymentError"] = "PAYMENT_ERROR";
  CompletionErrorCode["PaymentGatewayNotEnabledError"] = "PAYMENT_GATEWAY_NOT_ENABLED_ERROR";
  CompletionErrorCode["PaymentInsufficientFunds"] = "PAYMENT_INSUFFICIENT_FUNDS";
  CompletionErrorCode["PaymentInvalidBillingAddress"] = "PAYMENT_INVALID_BILLING_ADDRESS";
  CompletionErrorCode["PaymentInvalidCreditCard"] = "PAYMENT_INVALID_CREDIT_CARD";
  CompletionErrorCode["PaymentInvalidCurrency"] = "PAYMENT_INVALID_CURRENCY";
  CompletionErrorCode["PaymentInvalidPaymentMethod"] = "PAYMENT_INVALID_PAYMENT_METHOD";
  CompletionErrorCode["PaymentTransientError"] = "PAYMENT_TRANSIENT_ERROR";
})(CompletionErrorCode || (CompletionErrorCode = {}));
/** The precision of the value returned by a count field. */
var CountPrecision;
(function (CountPrecision) {
  /** The count is at least the value. A limit was reached. */
  CountPrecision["AtLeast"] = "AT_LEAST";
  /** The count is exactly the value. */
  CountPrecision["Exact"] = "EXACT";
})(CountPrecision || (CountPrecision = {}));
/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
var CountryCode;
(function (CountryCode) {
  /** Ascension Island. */
  CountryCode["Ac"] = "AC";
  /** Andorra. */
  CountryCode["Ad"] = "AD";
  /** United Arab Emirates. */
  CountryCode["Ae"] = "AE";
  /** Afghanistan. */
  CountryCode["Af"] = "AF";
  /** Antigua & Barbuda. */
  CountryCode["Ag"] = "AG";
  /** Anguilla. */
  CountryCode["Ai"] = "AI";
  /** Albania. */
  CountryCode["Al"] = "AL";
  /** Armenia. */
  CountryCode["Am"] = "AM";
  /** Netherlands Antilles. */
  CountryCode["An"] = "AN";
  /** Angola. */
  CountryCode["Ao"] = "AO";
  /** Argentina. */
  CountryCode["Ar"] = "AR";
  /** Austria. */
  CountryCode["At"] = "AT";
  /** Australia. */
  CountryCode["Au"] = "AU";
  /** Aruba. */
  CountryCode["Aw"] = "AW";
  /** Åland Islands. */
  CountryCode["Ax"] = "AX";
  /** Azerbaijan. */
  CountryCode["Az"] = "AZ";
  /** Bosnia & Herzegovina. */
  CountryCode["Ba"] = "BA";
  /** Barbados. */
  CountryCode["Bb"] = "BB";
  /** Bangladesh. */
  CountryCode["Bd"] = "BD";
  /** Belgium. */
  CountryCode["Be"] = "BE";
  /** Burkina Faso. */
  CountryCode["Bf"] = "BF";
  /** Bulgaria. */
  CountryCode["Bg"] = "BG";
  /** Bahrain. */
  CountryCode["Bh"] = "BH";
  /** Burundi. */
  CountryCode["Bi"] = "BI";
  /** Benin. */
  CountryCode["Bj"] = "BJ";
  /** St. Barthélemy. */
  CountryCode["Bl"] = "BL";
  /** Bermuda. */
  CountryCode["Bm"] = "BM";
  /** Brunei. */
  CountryCode["Bn"] = "BN";
  /** Bolivia. */
  CountryCode["Bo"] = "BO";
  /** Caribbean Netherlands. */
  CountryCode["Bq"] = "BQ";
  /** Brazil. */
  CountryCode["Br"] = "BR";
  /** Bahamas. */
  CountryCode["Bs"] = "BS";
  /** Bhutan. */
  CountryCode["Bt"] = "BT";
  /** Bouvet Island. */
  CountryCode["Bv"] = "BV";
  /** Botswana. */
  CountryCode["Bw"] = "BW";
  /** Belarus. */
  CountryCode["By"] = "BY";
  /** Belize. */
  CountryCode["Bz"] = "BZ";
  /** Canada. */
  CountryCode["Ca"] = "CA";
  /** Cocos (Keeling) Islands. */
  CountryCode["Cc"] = "CC";
  /** Congo - Kinshasa. */
  CountryCode["Cd"] = "CD";
  /** Central African Republic. */
  CountryCode["Cf"] = "CF";
  /** Congo - Brazzaville. */
  CountryCode["Cg"] = "CG";
  /** Switzerland. */
  CountryCode["Ch"] = "CH";
  /** Côte d’Ivoire. */
  CountryCode["Ci"] = "CI";
  /** Cook Islands. */
  CountryCode["Ck"] = "CK";
  /** Chile. */
  CountryCode["Cl"] = "CL";
  /** Cameroon. */
  CountryCode["Cm"] = "CM";
  /** China. */
  CountryCode["Cn"] = "CN";
  /** Colombia. */
  CountryCode["Co"] = "CO";
  /** Costa Rica. */
  CountryCode["Cr"] = "CR";
  /** Cuba. */
  CountryCode["Cu"] = "CU";
  /** Cape Verde. */
  CountryCode["Cv"] = "CV";
  /** Curaçao. */
  CountryCode["Cw"] = "CW";
  /** Christmas Island. */
  CountryCode["Cx"] = "CX";
  /** Cyprus. */
  CountryCode["Cy"] = "CY";
  /** Czechia. */
  CountryCode["Cz"] = "CZ";
  /** Germany. */
  CountryCode["De"] = "DE";
  /** Djibouti. */
  CountryCode["Dj"] = "DJ";
  /** Denmark. */
  CountryCode["Dk"] = "DK";
  /** Dominica. */
  CountryCode["Dm"] = "DM";
  /** Dominican Republic. */
  CountryCode["Do"] = "DO";
  /** Algeria. */
  CountryCode["Dz"] = "DZ";
  /** Ecuador. */
  CountryCode["Ec"] = "EC";
  /** Estonia. */
  CountryCode["Ee"] = "EE";
  /** Egypt. */
  CountryCode["Eg"] = "EG";
  /** Western Sahara. */
  CountryCode["Eh"] = "EH";
  /** Eritrea. */
  CountryCode["Er"] = "ER";
  /** Spain. */
  CountryCode["Es"] = "ES";
  /** Ethiopia. */
  CountryCode["Et"] = "ET";
  /** Finland. */
  CountryCode["Fi"] = "FI";
  /** Fiji. */
  CountryCode["Fj"] = "FJ";
  /** Falkland Islands. */
  CountryCode["Fk"] = "FK";
  /** Faroe Islands. */
  CountryCode["Fo"] = "FO";
  /** France. */
  CountryCode["Fr"] = "FR";
  /** Gabon. */
  CountryCode["Ga"] = "GA";
  /** United Kingdom. */
  CountryCode["Gb"] = "GB";
  /** Grenada. */
  CountryCode["Gd"] = "GD";
  /** Georgia. */
  CountryCode["Ge"] = "GE";
  /** French Guiana. */
  CountryCode["Gf"] = "GF";
  /** Guernsey. */
  CountryCode["Gg"] = "GG";
  /** Ghana. */
  CountryCode["Gh"] = "GH";
  /** Gibraltar. */
  CountryCode["Gi"] = "GI";
  /** Greenland. */
  CountryCode["Gl"] = "GL";
  /** Gambia. */
  CountryCode["Gm"] = "GM";
  /** Guinea. */
  CountryCode["Gn"] = "GN";
  /** Guadeloupe. */
  CountryCode["Gp"] = "GP";
  /** Equatorial Guinea. */
  CountryCode["Gq"] = "GQ";
  /** Greece. */
  CountryCode["Gr"] = "GR";
  /** South Georgia & South Sandwich Islands. */
  CountryCode["Gs"] = "GS";
  /** Guatemala. */
  CountryCode["Gt"] = "GT";
  /** Guinea-Bissau. */
  CountryCode["Gw"] = "GW";
  /** Guyana. */
  CountryCode["Gy"] = "GY";
  /** Hong Kong SAR. */
  CountryCode["Hk"] = "HK";
  /** Heard & McDonald Islands. */
  CountryCode["Hm"] = "HM";
  /** Honduras. */
  CountryCode["Hn"] = "HN";
  /** Croatia. */
  CountryCode["Hr"] = "HR";
  /** Haiti. */
  CountryCode["Ht"] = "HT";
  /** Hungary. */
  CountryCode["Hu"] = "HU";
  /** Indonesia. */
  CountryCode["Id"] = "ID";
  /** Ireland. */
  CountryCode["Ie"] = "IE";
  /** Israel. */
  CountryCode["Il"] = "IL";
  /** Isle of Man. */
  CountryCode["Im"] = "IM";
  /** India. */
  CountryCode["In"] = "IN";
  /** British Indian Ocean Territory. */
  CountryCode["Io"] = "IO";
  /** Iraq. */
  CountryCode["Iq"] = "IQ";
  /** Iran. */
  CountryCode["Ir"] = "IR";
  /** Iceland. */
  CountryCode["Is"] = "IS";
  /** Italy. */
  CountryCode["It"] = "IT";
  /** Jersey. */
  CountryCode["Je"] = "JE";
  /** Jamaica. */
  CountryCode["Jm"] = "JM";
  /** Jordan. */
  CountryCode["Jo"] = "JO";
  /** Japan. */
  CountryCode["Jp"] = "JP";
  /** Kenya. */
  CountryCode["Ke"] = "KE";
  /** Kyrgyzstan. */
  CountryCode["Kg"] = "KG";
  /** Cambodia. */
  CountryCode["Kh"] = "KH";
  /** Kiribati. */
  CountryCode["Ki"] = "KI";
  /** Comoros. */
  CountryCode["Km"] = "KM";
  /** St. Kitts & Nevis. */
  CountryCode["Kn"] = "KN";
  /** North Korea. */
  CountryCode["Kp"] = "KP";
  /** South Korea. */
  CountryCode["Kr"] = "KR";
  /** Kuwait. */
  CountryCode["Kw"] = "KW";
  /** Cayman Islands. */
  CountryCode["Ky"] = "KY";
  /** Kazakhstan. */
  CountryCode["Kz"] = "KZ";
  /** Laos. */
  CountryCode["La"] = "LA";
  /** Lebanon. */
  CountryCode["Lb"] = "LB";
  /** St. Lucia. */
  CountryCode["Lc"] = "LC";
  /** Liechtenstein. */
  CountryCode["Li"] = "LI";
  /** Sri Lanka. */
  CountryCode["Lk"] = "LK";
  /** Liberia. */
  CountryCode["Lr"] = "LR";
  /** Lesotho. */
  CountryCode["Ls"] = "LS";
  /** Lithuania. */
  CountryCode["Lt"] = "LT";
  /** Luxembourg. */
  CountryCode["Lu"] = "LU";
  /** Latvia. */
  CountryCode["Lv"] = "LV";
  /** Libya. */
  CountryCode["Ly"] = "LY";
  /** Morocco. */
  CountryCode["Ma"] = "MA";
  /** Monaco. */
  CountryCode["Mc"] = "MC";
  /** Moldova. */
  CountryCode["Md"] = "MD";
  /** Montenegro. */
  CountryCode["Me"] = "ME";
  /** St. Martin. */
  CountryCode["Mf"] = "MF";
  /** Madagascar. */
  CountryCode["Mg"] = "MG";
  /** North Macedonia. */
  CountryCode["Mk"] = "MK";
  /** Mali. */
  CountryCode["Ml"] = "ML";
  /** Myanmar (Burma). */
  CountryCode["Mm"] = "MM";
  /** Mongolia. */
  CountryCode["Mn"] = "MN";
  /** Macao SAR. */
  CountryCode["Mo"] = "MO";
  /** Martinique. */
  CountryCode["Mq"] = "MQ";
  /** Mauritania. */
  CountryCode["Mr"] = "MR";
  /** Montserrat. */
  CountryCode["Ms"] = "MS";
  /** Malta. */
  CountryCode["Mt"] = "MT";
  /** Mauritius. */
  CountryCode["Mu"] = "MU";
  /** Maldives. */
  CountryCode["Mv"] = "MV";
  /** Malawi. */
  CountryCode["Mw"] = "MW";
  /** Mexico. */
  CountryCode["Mx"] = "MX";
  /** Malaysia. */
  CountryCode["My"] = "MY";
  /** Mozambique. */
  CountryCode["Mz"] = "MZ";
  /** Namibia. */
  CountryCode["Na"] = "NA";
  /** New Caledonia. */
  CountryCode["Nc"] = "NC";
  /** Niger. */
  CountryCode["Ne"] = "NE";
  /** Norfolk Island. */
  CountryCode["Nf"] = "NF";
  /** Nigeria. */
  CountryCode["Ng"] = "NG";
  /** Nicaragua. */
  CountryCode["Ni"] = "NI";
  /** Netherlands. */
  CountryCode["Nl"] = "NL";
  /** Norway. */
  CountryCode["No"] = "NO";
  /** Nepal. */
  CountryCode["Np"] = "NP";
  /** Nauru. */
  CountryCode["Nr"] = "NR";
  /** Niue. */
  CountryCode["Nu"] = "NU";
  /** New Zealand. */
  CountryCode["Nz"] = "NZ";
  /** Oman. */
  CountryCode["Om"] = "OM";
  /** Panama. */
  CountryCode["Pa"] = "PA";
  /** Peru. */
  CountryCode["Pe"] = "PE";
  /** French Polynesia. */
  CountryCode["Pf"] = "PF";
  /** Papua New Guinea. */
  CountryCode["Pg"] = "PG";
  /** Philippines. */
  CountryCode["Ph"] = "PH";
  /** Pakistan. */
  CountryCode["Pk"] = "PK";
  /** Poland. */
  CountryCode["Pl"] = "PL";
  /** St. Pierre & Miquelon. */
  CountryCode["Pm"] = "PM";
  /** Pitcairn Islands. */
  CountryCode["Pn"] = "PN";
  /** Palestinian Territories. */
  CountryCode["Ps"] = "PS";
  /** Portugal. */
  CountryCode["Pt"] = "PT";
  /** Paraguay. */
  CountryCode["Py"] = "PY";
  /** Qatar. */
  CountryCode["Qa"] = "QA";
  /** Réunion. */
  CountryCode["Re"] = "RE";
  /** Romania. */
  CountryCode["Ro"] = "RO";
  /** Serbia. */
  CountryCode["Rs"] = "RS";
  /** Russia. */
  CountryCode["Ru"] = "RU";
  /** Rwanda. */
  CountryCode["Rw"] = "RW";
  /** Saudi Arabia. */
  CountryCode["Sa"] = "SA";
  /** Solomon Islands. */
  CountryCode["Sb"] = "SB";
  /** Seychelles. */
  CountryCode["Sc"] = "SC";
  /** Sudan. */
  CountryCode["Sd"] = "SD";
  /** Sweden. */
  CountryCode["Se"] = "SE";
  /** Singapore. */
  CountryCode["Sg"] = "SG";
  /** St. Helena. */
  CountryCode["Sh"] = "SH";
  /** Slovenia. */
  CountryCode["Si"] = "SI";
  /** Svalbard & Jan Mayen. */
  CountryCode["Sj"] = "SJ";
  /** Slovakia. */
  CountryCode["Sk"] = "SK";
  /** Sierra Leone. */
  CountryCode["Sl"] = "SL";
  /** San Marino. */
  CountryCode["Sm"] = "SM";
  /** Senegal. */
  CountryCode["Sn"] = "SN";
  /** Somalia. */
  CountryCode["So"] = "SO";
  /** Suriname. */
  CountryCode["Sr"] = "SR";
  /** South Sudan. */
  CountryCode["Ss"] = "SS";
  /** São Tomé & Príncipe. */
  CountryCode["St"] = "ST";
  /** El Salvador. */
  CountryCode["Sv"] = "SV";
  /** Sint Maarten. */
  CountryCode["Sx"] = "SX";
  /** Syria. */
  CountryCode["Sy"] = "SY";
  /** Eswatini. */
  CountryCode["Sz"] = "SZ";
  /** Tristan da Cunha. */
  CountryCode["Ta"] = "TA";
  /** Turks & Caicos Islands. */
  CountryCode["Tc"] = "TC";
  /** Chad. */
  CountryCode["Td"] = "TD";
  /** French Southern Territories. */
  CountryCode["Tf"] = "TF";
  /** Togo. */
  CountryCode["Tg"] = "TG";
  /** Thailand. */
  CountryCode["Th"] = "TH";
  /** Tajikistan. */
  CountryCode["Tj"] = "TJ";
  /** Tokelau. */
  CountryCode["Tk"] = "TK";
  /** Timor-Leste. */
  CountryCode["Tl"] = "TL";
  /** Turkmenistan. */
  CountryCode["Tm"] = "TM";
  /** Tunisia. */
  CountryCode["Tn"] = "TN";
  /** Tonga. */
  CountryCode["To"] = "TO";
  /** Türkiye. */
  CountryCode["Tr"] = "TR";
  /** Trinidad & Tobago. */
  CountryCode["Tt"] = "TT";
  /** Tuvalu. */
  CountryCode["Tv"] = "TV";
  /** Taiwan. */
  CountryCode["Tw"] = "TW";
  /** Tanzania. */
  CountryCode["Tz"] = "TZ";
  /** Ukraine. */
  CountryCode["Ua"] = "UA";
  /** Uganda. */
  CountryCode["Ug"] = "UG";
  /** U.S. Outlying Islands. */
  CountryCode["Um"] = "UM";
  /** United States. */
  CountryCode["Us"] = "US";
  /** Uruguay. */
  CountryCode["Uy"] = "UY";
  /** Uzbekistan. */
  CountryCode["Uz"] = "UZ";
  /** Vatican City. */
  CountryCode["Va"] = "VA";
  /** St. Vincent & Grenadines. */
  CountryCode["Vc"] = "VC";
  /** Venezuela. */
  CountryCode["Ve"] = "VE";
  /** British Virgin Islands. */
  CountryCode["Vg"] = "VG";
  /** Vietnam. */
  CountryCode["Vn"] = "VN";
  /** Vanuatu. */
  CountryCode["Vu"] = "VU";
  /** Wallis & Futuna. */
  CountryCode["Wf"] = "WF";
  /** Samoa. */
  CountryCode["Ws"] = "WS";
  /** Kosovo. */
  CountryCode["Xk"] = "XK";
  /** Yemen. */
  CountryCode["Ye"] = "YE";
  /** Mayotte. */
  CountryCode["Yt"] = "YT";
  /** South Africa. */
  CountryCode["Za"] = "ZA";
  /** Zambia. */
  CountryCode["Zm"] = "ZM";
  /** Zimbabwe. */
  CountryCode["Zw"] = "ZW";
  /** Unknown Region. */
  CountryCode["Zz"] = "ZZ";
})(CountryCode || (CountryCode = {}));
/** The part of the image that should remain after cropping. */
var CropRegion;
(function (CropRegion) {
  /** Keep the bottom of the image. */
  CropRegion["Bottom"] = "BOTTOM";
  /** Keep the center of the image. */
  CropRegion["Center"] = "CENTER";
  /** Keep the left of the image. */
  CropRegion["Left"] = "LEFT";
  /** Keep the right of the image. */
  CropRegion["Right"] = "RIGHT";
  /** Keep the top of the image. */
  CropRegion["Top"] = "TOP";
})(CropRegion || (CropRegion = {}));
/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
var CurrencyCode;
(function (CurrencyCode) {
  /** United Arab Emirates Dirham (AED). */
  CurrencyCode["Aed"] = "AED";
  /** Afghan Afghani (AFN). */
  CurrencyCode["Afn"] = "AFN";
  /** Albanian Lek (ALL). */
  CurrencyCode["All"] = "ALL";
  /** Armenian Dram (AMD). */
  CurrencyCode["Amd"] = "AMD";
  /** Netherlands Antillean Guilder. */
  CurrencyCode["Ang"] = "ANG";
  /** Angolan Kwanza (AOA). */
  CurrencyCode["Aoa"] = "AOA";
  /** Argentine Pesos (ARS). */
  CurrencyCode["Ars"] = "ARS";
  /** Australian Dollars (AUD). */
  CurrencyCode["Aud"] = "AUD";
  /** Aruban Florin (AWG). */
  CurrencyCode["Awg"] = "AWG";
  /** Azerbaijani Manat (AZN). */
  CurrencyCode["Azn"] = "AZN";
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  CurrencyCode["Bam"] = "BAM";
  /** Barbadian Dollar (BBD). */
  CurrencyCode["Bbd"] = "BBD";
  /** Bangladesh Taka (BDT). */
  CurrencyCode["Bdt"] = "BDT";
  /** Bulgarian Lev (BGN). */
  CurrencyCode["Bgn"] = "BGN";
  /** Bahraini Dinar (BHD). */
  CurrencyCode["Bhd"] = "BHD";
  /** Burundian Franc (BIF). */
  CurrencyCode["Bif"] = "BIF";
  /** Bermudian Dollar (BMD). */
  CurrencyCode["Bmd"] = "BMD";
  /** Brunei Dollar (BND). */
  CurrencyCode["Bnd"] = "BND";
  /** Bolivian Boliviano (BOB). */
  CurrencyCode["Bob"] = "BOB";
  /** Brazilian Real (BRL). */
  CurrencyCode["Brl"] = "BRL";
  /** Bahamian Dollar (BSD). */
  CurrencyCode["Bsd"] = "BSD";
  /** Bhutanese Ngultrum (BTN). */
  CurrencyCode["Btn"] = "BTN";
  /** Botswana Pula (BWP). */
  CurrencyCode["Bwp"] = "BWP";
  /** Belarusian Ruble (BYN). */
  CurrencyCode["Byn"] = "BYN";
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  CurrencyCode["Byr"] = "BYR";
  /** Belize Dollar (BZD). */
  CurrencyCode["Bzd"] = "BZD";
  /** Canadian Dollars (CAD). */
  CurrencyCode["Cad"] = "CAD";
  /** Congolese franc (CDF). */
  CurrencyCode["Cdf"] = "CDF";
  /** Swiss Francs (CHF). */
  CurrencyCode["Chf"] = "CHF";
  /** Chilean Peso (CLP). */
  CurrencyCode["Clp"] = "CLP";
  /** Chinese Yuan Renminbi (CNY). */
  CurrencyCode["Cny"] = "CNY";
  /** Colombian Peso (COP). */
  CurrencyCode["Cop"] = "COP";
  /** Costa Rican Colones (CRC). */
  CurrencyCode["Crc"] = "CRC";
  /** Cape Verdean escudo (CVE). */
  CurrencyCode["Cve"] = "CVE";
  /** Czech Koruny (CZK). */
  CurrencyCode["Czk"] = "CZK";
  /** Djiboutian Franc (DJF). */
  CurrencyCode["Djf"] = "DJF";
  /** Danish Kroner (DKK). */
  CurrencyCode["Dkk"] = "DKK";
  /** Dominican Peso (DOP). */
  CurrencyCode["Dop"] = "DOP";
  /** Algerian Dinar (DZD). */
  CurrencyCode["Dzd"] = "DZD";
  /** Egyptian Pound (EGP). */
  CurrencyCode["Egp"] = "EGP";
  /** Eritrean Nakfa (ERN). */
  CurrencyCode["Ern"] = "ERN";
  /** Ethiopian Birr (ETB). */
  CurrencyCode["Etb"] = "ETB";
  /** Euro (EUR). */
  CurrencyCode["Eur"] = "EUR";
  /** Fijian Dollars (FJD). */
  CurrencyCode["Fjd"] = "FJD";
  /** Falkland Islands Pounds (FKP). */
  CurrencyCode["Fkp"] = "FKP";
  /** United Kingdom Pounds (GBP). */
  CurrencyCode["Gbp"] = "GBP";
  /** Georgian Lari (GEL). */
  CurrencyCode["Gel"] = "GEL";
  /** Ghanaian Cedi (GHS). */
  CurrencyCode["Ghs"] = "GHS";
  /** Gibraltar Pounds (GIP). */
  CurrencyCode["Gip"] = "GIP";
  /** Gambian Dalasi (GMD). */
  CurrencyCode["Gmd"] = "GMD";
  /** Guinean Franc (GNF). */
  CurrencyCode["Gnf"] = "GNF";
  /** Guatemalan Quetzal (GTQ). */
  CurrencyCode["Gtq"] = "GTQ";
  /** Guyanese Dollar (GYD). */
  CurrencyCode["Gyd"] = "GYD";
  /** Hong Kong Dollars (HKD). */
  CurrencyCode["Hkd"] = "HKD";
  /** Honduran Lempira (HNL). */
  CurrencyCode["Hnl"] = "HNL";
  /** Croatian Kuna (HRK). */
  CurrencyCode["Hrk"] = "HRK";
  /** Haitian Gourde (HTG). */
  CurrencyCode["Htg"] = "HTG";
  /** Hungarian Forint (HUF). */
  CurrencyCode["Huf"] = "HUF";
  /** Indonesian Rupiah (IDR). */
  CurrencyCode["Idr"] = "IDR";
  /** Israeli New Shekel (NIS). */
  CurrencyCode["Ils"] = "ILS";
  /** Indian Rupees (INR). */
  CurrencyCode["Inr"] = "INR";
  /** Iraqi Dinar (IQD). */
  CurrencyCode["Iqd"] = "IQD";
  /** Iranian Rial (IRR). */
  CurrencyCode["Irr"] = "IRR";
  /** Icelandic Kronur (ISK). */
  CurrencyCode["Isk"] = "ISK";
  /** Jersey Pound. */
  CurrencyCode["Jep"] = "JEP";
  /** Jamaican Dollars (JMD). */
  CurrencyCode["Jmd"] = "JMD";
  /** Jordanian Dinar (JOD). */
  CurrencyCode["Jod"] = "JOD";
  /** Japanese Yen (JPY). */
  CurrencyCode["Jpy"] = "JPY";
  /** Kenyan Shilling (KES). */
  CurrencyCode["Kes"] = "KES";
  /** Kyrgyzstani Som (KGS). */
  CurrencyCode["Kgs"] = "KGS";
  /** Cambodian Riel. */
  CurrencyCode["Khr"] = "KHR";
  /** Kiribati Dollar (KID). */
  CurrencyCode["Kid"] = "KID";
  /** Comorian Franc (KMF). */
  CurrencyCode["Kmf"] = "KMF";
  /** South Korean Won (KRW). */
  CurrencyCode["Krw"] = "KRW";
  /** Kuwaiti Dinar (KWD). */
  CurrencyCode["Kwd"] = "KWD";
  /** Cayman Dollars (KYD). */
  CurrencyCode["Kyd"] = "KYD";
  /** Kazakhstani Tenge (KZT). */
  CurrencyCode["Kzt"] = "KZT";
  /** Laotian Kip (LAK). */
  CurrencyCode["Lak"] = "LAK";
  /** Lebanese Pounds (LBP). */
  CurrencyCode["Lbp"] = "LBP";
  /** Sri Lankan Rupees (LKR). */
  CurrencyCode["Lkr"] = "LKR";
  /** Liberian Dollar (LRD). */
  CurrencyCode["Lrd"] = "LRD";
  /** Lesotho Loti (LSL). */
  CurrencyCode["Lsl"] = "LSL";
  /** Lithuanian Litai (LTL). */
  CurrencyCode["Ltl"] = "LTL";
  /** Latvian Lati (LVL). */
  CurrencyCode["Lvl"] = "LVL";
  /** Libyan Dinar (LYD). */
  CurrencyCode["Lyd"] = "LYD";
  /** Moroccan Dirham. */
  CurrencyCode["Mad"] = "MAD";
  /** Moldovan Leu (MDL). */
  CurrencyCode["Mdl"] = "MDL";
  /** Malagasy Ariary (MGA). */
  CurrencyCode["Mga"] = "MGA";
  /** Macedonia Denar (MKD). */
  CurrencyCode["Mkd"] = "MKD";
  /** Burmese Kyat (MMK). */
  CurrencyCode["Mmk"] = "MMK";
  /** Mongolian Tugrik. */
  CurrencyCode["Mnt"] = "MNT";
  /** Macanese Pataca (MOP). */
  CurrencyCode["Mop"] = "MOP";
  /** Mauritanian Ouguiya (MRU). */
  CurrencyCode["Mru"] = "MRU";
  /** Mauritian Rupee (MUR). */
  CurrencyCode["Mur"] = "MUR";
  /** Maldivian Rufiyaa (MVR). */
  CurrencyCode["Mvr"] = "MVR";
  /** Malawian Kwacha (MWK). */
  CurrencyCode["Mwk"] = "MWK";
  /** Mexican Pesos (MXN). */
  CurrencyCode["Mxn"] = "MXN";
  /** Malaysian Ringgits (MYR). */
  CurrencyCode["Myr"] = "MYR";
  /** Mozambican Metical. */
  CurrencyCode["Mzn"] = "MZN";
  /** Namibian Dollar. */
  CurrencyCode["Nad"] = "NAD";
  /** Nigerian Naira (NGN). */
  CurrencyCode["Ngn"] = "NGN";
  /** Nicaraguan Córdoba (NIO). */
  CurrencyCode["Nio"] = "NIO";
  /** Norwegian Kroner (NOK). */
  CurrencyCode["Nok"] = "NOK";
  /** Nepalese Rupee (NPR). */
  CurrencyCode["Npr"] = "NPR";
  /** New Zealand Dollars (NZD). */
  CurrencyCode["Nzd"] = "NZD";
  /** Omani Rial (OMR). */
  CurrencyCode["Omr"] = "OMR";
  /** Panamian Balboa (PAB). */
  CurrencyCode["Pab"] = "PAB";
  /** Peruvian Nuevo Sol (PEN). */
  CurrencyCode["Pen"] = "PEN";
  /** Papua New Guinean Kina (PGK). */
  CurrencyCode["Pgk"] = "PGK";
  /** Philippine Peso (PHP). */
  CurrencyCode["Php"] = "PHP";
  /** Pakistani Rupee (PKR). */
  CurrencyCode["Pkr"] = "PKR";
  /** Polish Zlotych (PLN). */
  CurrencyCode["Pln"] = "PLN";
  /** Paraguayan Guarani (PYG). */
  CurrencyCode["Pyg"] = "PYG";
  /** Qatari Rial (QAR). */
  CurrencyCode["Qar"] = "QAR";
  /** Romanian Lei (RON). */
  CurrencyCode["Ron"] = "RON";
  /** Serbian dinar (RSD). */
  CurrencyCode["Rsd"] = "RSD";
  /** Russian Rubles (RUB). */
  CurrencyCode["Rub"] = "RUB";
  /** Rwandan Franc (RWF). */
  CurrencyCode["Rwf"] = "RWF";
  /** Saudi Riyal (SAR). */
  CurrencyCode["Sar"] = "SAR";
  /** Solomon Islands Dollar (SBD). */
  CurrencyCode["Sbd"] = "SBD";
  /** Seychellois Rupee (SCR). */
  CurrencyCode["Scr"] = "SCR";
  /** Sudanese Pound (SDG). */
  CurrencyCode["Sdg"] = "SDG";
  /** Swedish Kronor (SEK). */
  CurrencyCode["Sek"] = "SEK";
  /** Singapore Dollars (SGD). */
  CurrencyCode["Sgd"] = "SGD";
  /** Saint Helena Pounds (SHP). */
  CurrencyCode["Shp"] = "SHP";
  /** Sierra Leonean Leone (SLL). */
  CurrencyCode["Sll"] = "SLL";
  /** Somali Shilling (SOS). */
  CurrencyCode["Sos"] = "SOS";
  /** Surinamese Dollar (SRD). */
  CurrencyCode["Srd"] = "SRD";
  /** South Sudanese Pound (SSP). */
  CurrencyCode["Ssp"] = "SSP";
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  CurrencyCode["Std"] = "STD";
  /** Sao Tome And Principe Dobra (STN). */
  CurrencyCode["Stn"] = "STN";
  /** Syrian Pound (SYP). */
  CurrencyCode["Syp"] = "SYP";
  /** Swazi Lilangeni (SZL). */
  CurrencyCode["Szl"] = "SZL";
  /** Thai baht (THB). */
  CurrencyCode["Thb"] = "THB";
  /** Tajikistani Somoni (TJS). */
  CurrencyCode["Tjs"] = "TJS";
  /** Turkmenistani Manat (TMT). */
  CurrencyCode["Tmt"] = "TMT";
  /** Tunisian Dinar (TND). */
  CurrencyCode["Tnd"] = "TND";
  /** Tongan Pa'anga (TOP). */
  CurrencyCode["Top"] = "TOP";
  /** Turkish Lira (TRY). */
  CurrencyCode["Try"] = "TRY";
  /** Trinidad and Tobago Dollars (TTD). */
  CurrencyCode["Ttd"] = "TTD";
  /** Taiwan Dollars (TWD). */
  CurrencyCode["Twd"] = "TWD";
  /** Tanzanian Shilling (TZS). */
  CurrencyCode["Tzs"] = "TZS";
  /** Ukrainian Hryvnia (UAH). */
  CurrencyCode["Uah"] = "UAH";
  /** Ugandan Shilling (UGX). */
  CurrencyCode["Ugx"] = "UGX";
  /** United States Dollars (USD). */
  CurrencyCode["Usd"] = "USD";
  /** Uruguayan Pesos (UYU). */
  CurrencyCode["Uyu"] = "UYU";
  /** Uzbekistan som (UZS). */
  CurrencyCode["Uzs"] = "UZS";
  /** Venezuelan Bolivares (VED). */
  CurrencyCode["Ved"] = "VED";
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  CurrencyCode["Vef"] = "VEF";
  /** Venezuelan Bolivares Soberanos (VES). */
  CurrencyCode["Ves"] = "VES";
  /** Vietnamese đồng (VND). */
  CurrencyCode["Vnd"] = "VND";
  /** Vanuatu Vatu (VUV). */
  CurrencyCode["Vuv"] = "VUV";
  /** Samoan Tala (WST). */
  CurrencyCode["Wst"] = "WST";
  /** Central African CFA Franc (XAF). */
  CurrencyCode["Xaf"] = "XAF";
  /** East Caribbean Dollar (XCD). */
  CurrencyCode["Xcd"] = "XCD";
  /** West African CFA franc (XOF). */
  CurrencyCode["Xof"] = "XOF";
  /** CFP Franc (XPF). */
  CurrencyCode["Xpf"] = "XPF";
  /** Unrecognized currency. */
  CurrencyCode["Xxx"] = "XXX";
  /** Yemeni Rial (YER). */
  CurrencyCode["Yer"] = "YER";
  /** South African Rand (ZAR). */
  CurrencyCode["Zar"] = "ZAR";
  /** Zambian Kwacha (ZMW). */
  CurrencyCode["Zmw"] = "ZMW";
})(CurrencyCode || (CurrencyCode = {}));
/** Possible error codes that can be returned by `CustomerUserError`. */
var CustomerErrorCode;
(function (CustomerErrorCode) {
  /** Customer already enabled. */
  CustomerErrorCode["AlreadyEnabled"] = "ALREADY_ENABLED";
  /** Input email contains an invalid domain name. */
  CustomerErrorCode["BadDomain"] = "BAD_DOMAIN";
  /** The input value is blank. */
  CustomerErrorCode["Blank"] = "BLANK";
  /** Input contains HTML tags. */
  CustomerErrorCode["ContainsHtmlTags"] = "CONTAINS_HTML_TAGS";
  /** Input contains URL. */
  CustomerErrorCode["ContainsUrl"] = "CONTAINS_URL";
  /** Customer is disabled. */
  CustomerErrorCode["CustomerDisabled"] = "CUSTOMER_DISABLED";
  /** The input value is invalid. */
  CustomerErrorCode["Invalid"] = "INVALID";
  /** Multipass token is not valid. */
  CustomerErrorCode["InvalidMultipassRequest"] = "INVALID_MULTIPASS_REQUEST";
  /** Address does not exist. */
  CustomerErrorCode["NotFound"] = "NOT_FOUND";
  /** Input password starts or ends with whitespace. */
  CustomerErrorCode["PasswordStartsOrEndsWithWhitespace"] = "PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE";
  /** The input value is already taken. */
  CustomerErrorCode["Taken"] = "TAKEN";
  /** Invalid activation token. */
  CustomerErrorCode["TokenInvalid"] = "TOKEN_INVALID";
  /** The input value is too long. */
  CustomerErrorCode["TooLong"] = "TOO_LONG";
  /** The input value is too short. */
  CustomerErrorCode["TooShort"] = "TOO_SHORT";
  /** Unidentified customer. */
  CustomerErrorCode["UnidentifiedCustomer"] = "UNIDENTIFIED_CUSTOMER";
})(CustomerErrorCode || (CustomerErrorCode = {}));
/**
 * Defines the types of available validation strategies for delivery addresses.
 *
 */
var DeliveryAddressValidationStrategy;
(function (DeliveryAddressValidationStrategy) {
  /** Only the country code is validated. */
  DeliveryAddressValidationStrategy["CountryCodeOnly"] = "COUNTRY_CODE_ONLY";
  /**
   * Strict validation is performed, i.e. all fields in the address are validated
   * according to Shopify's checkout rules. If the address fails validation, the cart will not be updated.
   *
   */
  DeliveryAddressValidationStrategy["Strict"] = "STRICT";
})(DeliveryAddressValidationStrategy || (DeliveryAddressValidationStrategy = {}));
/** List of different delivery method types. */
var DeliveryMethodType;
(function (DeliveryMethodType) {
  /** Local Delivery. */
  DeliveryMethodType["Local"] = "LOCAL";
  /** None. */
  DeliveryMethodType["None"] = "NONE";
  /** Shipping to a Pickup Point. */
  DeliveryMethodType["PickupPoint"] = "PICKUP_POINT";
  /** Local Pickup. */
  DeliveryMethodType["PickUp"] = "PICK_UP";
  /** Retail. */
  DeliveryMethodType["Retail"] = "RETAIL";
  /** Shipping. */
  DeliveryMethodType["Shipping"] = "SHIPPING";
})(DeliveryMethodType || (DeliveryMethodType = {}));
/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
var DigitalWallet;
(function (DigitalWallet) {
  /** Android Pay. */
  DigitalWallet["AndroidPay"] = "ANDROID_PAY";
  /** Apple Pay. */
  DigitalWallet["ApplePay"] = "APPLE_PAY";
  /** Google Pay. */
  DigitalWallet["GooglePay"] = "GOOGLE_PAY";
  /** Shopify Pay. */
  DigitalWallet["ShopifyPay"] = "SHOPIFY_PAY";
})(DigitalWallet || (DigitalWallet = {}));
/** The method by which the discount's value is allocated onto its entitled lines. */
var DiscountApplicationAllocationMethod;
(function (DiscountApplicationAllocationMethod) {
  /** The value is spread across all entitled lines. */
  DiscountApplicationAllocationMethod["Across"] = "ACROSS";
  /** The value is applied onto every entitled line. */
  DiscountApplicationAllocationMethod["Each"] = "EACH";
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  DiscountApplicationAllocationMethod["One"] = "ONE";
})(DiscountApplicationAllocationMethod || (DiscountApplicationAllocationMethod = {}));
/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
var DiscountApplicationTargetSelection;
(function (DiscountApplicationTargetSelection) {
  /** The discount is allocated onto all the lines. */
  DiscountApplicationTargetSelection["All"] = "ALL";
  /** The discount is allocated onto only the lines that it's entitled for. */
  DiscountApplicationTargetSelection["Entitled"] = "ENTITLED";
  /** The discount is allocated onto explicitly chosen lines. */
  DiscountApplicationTargetSelection["Explicit"] = "EXPLICIT";
})(DiscountApplicationTargetSelection || (DiscountApplicationTargetSelection = {}));
/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
var DiscountApplicationTargetType;
(function (DiscountApplicationTargetType) {
  /** The discount applies onto line items. */
  DiscountApplicationTargetType["LineItem"] = "LINE_ITEM";
  /** The discount applies onto shipping lines. */
  DiscountApplicationTargetType["ShippingLine"] = "SHIPPING_LINE";
})(DiscountApplicationTargetType || (DiscountApplicationTargetType = {}));
/**
 * Defines how to present the filter values, specifies the presentation of the filter.
 *
 */
var FilterPresentation;
(function (FilterPresentation) {
  /** Image presentation, filter values display an image. */
  FilterPresentation["Image"] = "IMAGE";
  /** Swatch presentation, filter values display color or image patterns. */
  FilterPresentation["Swatch"] = "SWATCH";
  /** Text presentation, no additional visual display for filter values. */
  FilterPresentation["Text"] = "TEXT";
})(FilterPresentation || (FilterPresentation = {}));
/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
var FilterType;
(function (FilterType) {
  /** A boolean value. */
  FilterType["Boolean"] = "BOOLEAN";
  /** A list of selectable values. */
  FilterType["List"] = "LIST";
  /** A range of prices. */
  FilterType["PriceRange"] = "PRICE_RANGE";
})(FilterType || (FilterType = {}));
/** List of supported image content types. */
var ImageContentType;
(function (ImageContentType) {
  /** A JPG image. */
  ImageContentType["Jpg"] = "JPG";
  /** A PNG image. */
  ImageContentType["Png"] = "PNG";
  /** A WEBP image. */
  ImageContentType["Webp"] = "WEBP";
})(ImageContentType || (ImageContentType = {}));
/** Language codes supported by Shopify. */
var LanguageCode;
(function (LanguageCode) {
  /** Afrikaans. */
  LanguageCode["Af"] = "AF";
  /** Akan. */
  LanguageCode["Ak"] = "AK";
  /** Amharic. */
  LanguageCode["Am"] = "AM";
  /** Arabic. */
  LanguageCode["Ar"] = "AR";
  /** Assamese. */
  LanguageCode["As"] = "AS";
  /** Azerbaijani. */
  LanguageCode["Az"] = "AZ";
  /** Belarusian. */
  LanguageCode["Be"] = "BE";
  /** Bulgarian. */
  LanguageCode["Bg"] = "BG";
  /** Bambara. */
  LanguageCode["Bm"] = "BM";
  /** Bangla. */
  LanguageCode["Bn"] = "BN";
  /** Tibetan. */
  LanguageCode["Bo"] = "BO";
  /** Breton. */
  LanguageCode["Br"] = "BR";
  /** Bosnian. */
  LanguageCode["Bs"] = "BS";
  /** Catalan. */
  LanguageCode["Ca"] = "CA";
  /** Chechen. */
  LanguageCode["Ce"] = "CE";
  /** Central Kurdish. */
  LanguageCode["Ckb"] = "CKB";
  /** Czech. */
  LanguageCode["Cs"] = "CS";
  /** Church Slavic. */
  LanguageCode["Cu"] = "CU";
  /** Welsh. */
  LanguageCode["Cy"] = "CY";
  /** Danish. */
  LanguageCode["Da"] = "DA";
  /** German. */
  LanguageCode["De"] = "DE";
  /** Dzongkha. */
  LanguageCode["Dz"] = "DZ";
  /** Ewe. */
  LanguageCode["Ee"] = "EE";
  /** Greek. */
  LanguageCode["El"] = "EL";
  /** English. */
  LanguageCode["En"] = "EN";
  /** Esperanto. */
  LanguageCode["Eo"] = "EO";
  /** Spanish. */
  LanguageCode["Es"] = "ES";
  /** Estonian. */
  LanguageCode["Et"] = "ET";
  /** Basque. */
  LanguageCode["Eu"] = "EU";
  /** Persian. */
  LanguageCode["Fa"] = "FA";
  /** Fulah. */
  LanguageCode["Ff"] = "FF";
  /** Finnish. */
  LanguageCode["Fi"] = "FI";
  /** Filipino. */
  LanguageCode["Fil"] = "FIL";
  /** Faroese. */
  LanguageCode["Fo"] = "FO";
  /** French. */
  LanguageCode["Fr"] = "FR";
  /** Western Frisian. */
  LanguageCode["Fy"] = "FY";
  /** Irish. */
  LanguageCode["Ga"] = "GA";
  /** Scottish Gaelic. */
  LanguageCode["Gd"] = "GD";
  /** Galician. */
  LanguageCode["Gl"] = "GL";
  /** Gujarati. */
  LanguageCode["Gu"] = "GU";
  /** Manx. */
  LanguageCode["Gv"] = "GV";
  /** Hausa. */
  LanguageCode["Ha"] = "HA";
  /** Hebrew. */
  LanguageCode["He"] = "HE";
  /** Hindi. */
  LanguageCode["Hi"] = "HI";
  /** Croatian. */
  LanguageCode["Hr"] = "HR";
  /** Hungarian. */
  LanguageCode["Hu"] = "HU";
  /** Armenian. */
  LanguageCode["Hy"] = "HY";
  /** Interlingua. */
  LanguageCode["Ia"] = "IA";
  /** Indonesian. */
  LanguageCode["Id"] = "ID";
  /** Igbo. */
  LanguageCode["Ig"] = "IG";
  /** Sichuan Yi. */
  LanguageCode["Ii"] = "II";
  /** Icelandic. */
  LanguageCode["Is"] = "IS";
  /** Italian. */
  LanguageCode["It"] = "IT";
  /** Japanese. */
  LanguageCode["Ja"] = "JA";
  /** Javanese. */
  LanguageCode["Jv"] = "JV";
  /** Georgian. */
  LanguageCode["Ka"] = "KA";
  /** Kikuyu. */
  LanguageCode["Ki"] = "KI";
  /** Kazakh. */
  LanguageCode["Kk"] = "KK";
  /** Kalaallisut. */
  LanguageCode["Kl"] = "KL";
  /** Khmer. */
  LanguageCode["Km"] = "KM";
  /** Kannada. */
  LanguageCode["Kn"] = "KN";
  /** Korean. */
  LanguageCode["Ko"] = "KO";
  /** Kashmiri. */
  LanguageCode["Ks"] = "KS";
  /** Kurdish. */
  LanguageCode["Ku"] = "KU";
  /** Cornish. */
  LanguageCode["Kw"] = "KW";
  /** Kyrgyz. */
  LanguageCode["Ky"] = "KY";
  /** Latin. */
  LanguageCode["La"] = "LA";
  /** Luxembourgish. */
  LanguageCode["Lb"] = "LB";
  /** Ganda. */
  LanguageCode["Lg"] = "LG";
  /** Lingala. */
  LanguageCode["Ln"] = "LN";
  /** Lao. */
  LanguageCode["Lo"] = "LO";
  /** Lithuanian. */
  LanguageCode["Lt"] = "LT";
  /** Luba-Katanga. */
  LanguageCode["Lu"] = "LU";
  /** Latvian. */
  LanguageCode["Lv"] = "LV";
  /** Malagasy. */
  LanguageCode["Mg"] = "MG";
  /** Māori. */
  LanguageCode["Mi"] = "MI";
  /** Macedonian. */
  LanguageCode["Mk"] = "MK";
  /** Malayalam. */
  LanguageCode["Ml"] = "ML";
  /** Mongolian. */
  LanguageCode["Mn"] = "MN";
  /** Moldavian. */
  LanguageCode["Mo"] = "MO";
  /** Marathi. */
  LanguageCode["Mr"] = "MR";
  /** Malay. */
  LanguageCode["Ms"] = "MS";
  /** Maltese. */
  LanguageCode["Mt"] = "MT";
  /** Burmese. */
  LanguageCode["My"] = "MY";
  /** Norwegian (Bokmål). */
  LanguageCode["Nb"] = "NB";
  /** North Ndebele. */
  LanguageCode["Nd"] = "ND";
  /** Nepali. */
  LanguageCode["Ne"] = "NE";
  /** Dutch. */
  LanguageCode["Nl"] = "NL";
  /** Norwegian Nynorsk. */
  LanguageCode["Nn"] = "NN";
  /** Norwegian. */
  LanguageCode["No"] = "NO";
  /** Oromo. */
  LanguageCode["Om"] = "OM";
  /** Odia. */
  LanguageCode["Or"] = "OR";
  /** Ossetic. */
  LanguageCode["Os"] = "OS";
  /** Punjabi. */
  LanguageCode["Pa"] = "PA";
  /** Polish. */
  LanguageCode["Pl"] = "PL";
  /** Pashto. */
  LanguageCode["Ps"] = "PS";
  /** Portuguese. */
  LanguageCode["Pt"] = "PT";
  /** Portuguese (Brazil). */
  LanguageCode["PtBr"] = "PT_BR";
  /** Portuguese (Portugal). */
  LanguageCode["PtPt"] = "PT_PT";
  /** Quechua. */
  LanguageCode["Qu"] = "QU";
  /** Romansh. */
  LanguageCode["Rm"] = "RM";
  /** Rundi. */
  LanguageCode["Rn"] = "RN";
  /** Romanian. */
  LanguageCode["Ro"] = "RO";
  /** Russian. */
  LanguageCode["Ru"] = "RU";
  /** Kinyarwanda. */
  LanguageCode["Rw"] = "RW";
  /** Sanskrit. */
  LanguageCode["Sa"] = "SA";
  /** Sardinian. */
  LanguageCode["Sc"] = "SC";
  /** Sindhi. */
  LanguageCode["Sd"] = "SD";
  /** Northern Sami. */
  LanguageCode["Se"] = "SE";
  /** Sango. */
  LanguageCode["Sg"] = "SG";
  /** Serbo-Croatian. */
  LanguageCode["Sh"] = "SH";
  /** Sinhala. */
  LanguageCode["Si"] = "SI";
  /** Slovak. */
  LanguageCode["Sk"] = "SK";
  /** Slovenian. */
  LanguageCode["Sl"] = "SL";
  /** Shona. */
  LanguageCode["Sn"] = "SN";
  /** Somali. */
  LanguageCode["So"] = "SO";
  /** Albanian. */
  LanguageCode["Sq"] = "SQ";
  /** Serbian. */
  LanguageCode["Sr"] = "SR";
  /** Sundanese. */
  LanguageCode["Su"] = "SU";
  /** Swedish. */
  LanguageCode["Sv"] = "SV";
  /** Swahili. */
  LanguageCode["Sw"] = "SW";
  /** Tamil. */
  LanguageCode["Ta"] = "TA";
  /** Telugu. */
  LanguageCode["Te"] = "TE";
  /** Tajik. */
  LanguageCode["Tg"] = "TG";
  /** Thai. */
  LanguageCode["Th"] = "TH";
  /** Tigrinya. */
  LanguageCode["Ti"] = "TI";
  /** Turkmen. */
  LanguageCode["Tk"] = "TK";
  /** Tongan. */
  LanguageCode["To"] = "TO";
  /** Turkish. */
  LanguageCode["Tr"] = "TR";
  /** Tatar. */
  LanguageCode["Tt"] = "TT";
  /** Uyghur. */
  LanguageCode["Ug"] = "UG";
  /** Ukrainian. */
  LanguageCode["Uk"] = "UK";
  /** Urdu. */
  LanguageCode["Ur"] = "UR";
  /** Uzbek. */
  LanguageCode["Uz"] = "UZ";
  /** Vietnamese. */
  LanguageCode["Vi"] = "VI";
  /** Volapük. */
  LanguageCode["Vo"] = "VO";
  /** Wolof. */
  LanguageCode["Wo"] = "WO";
  /** Xhosa. */
  LanguageCode["Xh"] = "XH";
  /** Yiddish. */
  LanguageCode["Yi"] = "YI";
  /** Yoruba. */
  LanguageCode["Yo"] = "YO";
  /** Chinese. */
  LanguageCode["Zh"] = "ZH";
  /** Chinese (Simplified). */
  LanguageCode["ZhCn"] = "ZH_CN";
  /** Chinese (Traditional). */
  LanguageCode["ZhTw"] = "ZH_TW";
  /** Zulu. */
  LanguageCode["Zu"] = "ZU";
})(LanguageCode || (LanguageCode = {}));
/** The set of valid sort keys for the Location query. */
var LocationSortKeys;
(function (LocationSortKeys) {
  /** Sort by the `city` value. */
  LocationSortKeys["City"] = "CITY";
  /** Sort by the `distance` value. */
  LocationSortKeys["Distance"] = "DISTANCE";
  /** Sort by the `id` value. */
  LocationSortKeys["Id"] = "ID";
  /** Sort by the `name` value. */
  LocationSortKeys["Name"] = "NAME";
})(LocationSortKeys || (LocationSortKeys = {}));
/** The possible content types for a media object. */
var MediaContentType;
(function (MediaContentType) {
  /** An externally hosted video. */
  MediaContentType["ExternalVideo"] = "EXTERNAL_VIDEO";
  /** A Shopify hosted image. */
  MediaContentType["Image"] = "IMAGE";
  /** A 3d model. */
  MediaContentType["Model_3D"] = "MODEL_3D";
  /** A Shopify hosted video. */
  MediaContentType["Video"] = "VIDEO";
})(MediaContentType || (MediaContentType = {}));
/** Host for a Media Resource. */
var MediaHost;
(function (MediaHost) {
  /** Host for Vimeo embedded videos. */
  MediaHost["Vimeo"] = "VIMEO";
  /** Host for YouTube embedded videos. */
  MediaHost["Youtube"] = "YOUTUBE";
})(MediaHost || (MediaHost = {}));
/** The possible formats for a media presentation. */
var MediaPresentationFormat;
(function (MediaPresentationFormat) {
  /** A media image presentation. */
  MediaPresentationFormat["Image"] = "IMAGE";
  /** A model viewer presentation. */
  MediaPresentationFormat["ModelViewer"] = "MODEL_VIEWER";
})(MediaPresentationFormat || (MediaPresentationFormat = {}));
/** A menu item type. */
var MenuItemType;
(function (MenuItemType) {
  /** An article link. */
  MenuItemType["Article"] = "ARTICLE";
  /** A blog link. */
  MenuItemType["Blog"] = "BLOG";
  /** A catalog link. */
  MenuItemType["Catalog"] = "CATALOG";
  /** A collection link. */
  MenuItemType["Collection"] = "COLLECTION";
  /** A collection link. */
  MenuItemType["Collections"] = "COLLECTIONS";
  /** A customer account page link. */
  MenuItemType["CustomerAccountPage"] = "CUSTOMER_ACCOUNT_PAGE";
  /** A frontpage link. */
  MenuItemType["Frontpage"] = "FRONTPAGE";
  /** An http link. */
  MenuItemType["Http"] = "HTTP";
  /** A metaobject page link. */
  MenuItemType["Metaobject"] = "METAOBJECT";
  /** A page link. */
  MenuItemType["Page"] = "PAGE";
  /** A product link. */
  MenuItemType["Product"] = "PRODUCT";
  /** A search link. */
  MenuItemType["Search"] = "SEARCH";
  /** A shop policy link. */
  MenuItemType["ShopPolicy"] = "SHOP_POLICY";
})(MenuItemType || (MenuItemType = {}));
/** Possible error codes that can be returned by `MetafieldDeleteUserError`. */
var MetafieldDeleteErrorCode;
(function (MetafieldDeleteErrorCode) {
  /** The owner ID is invalid. */
  MetafieldDeleteErrorCode["InvalidOwner"] = "INVALID_OWNER";
  /** Metafield not found. */
  MetafieldDeleteErrorCode["MetafieldDoesNotExist"] = "METAFIELD_DOES_NOT_EXIST";
})(MetafieldDeleteErrorCode || (MetafieldDeleteErrorCode = {}));
/** Possible error codes that can be returned by `MetafieldsSetUserError`. */
var MetafieldsSetUserErrorCode;
(function (MetafieldsSetUserErrorCode) {
  /** The input value is blank. */
  MetafieldsSetUserErrorCode["Blank"] = "BLANK";
  /** The input value isn't included in the list. */
  MetafieldsSetUserErrorCode["Inclusion"] = "INCLUSION";
  /** The owner ID is invalid. */
  MetafieldsSetUserErrorCode["InvalidOwner"] = "INVALID_OWNER";
  /** The type is invalid. */
  MetafieldsSetUserErrorCode["InvalidType"] = "INVALID_TYPE";
  /** The value is invalid for metafield type or for definition options. */
  MetafieldsSetUserErrorCode["InvalidValue"] = "INVALID_VALUE";
  /** The input value should be less than or equal to the maximum value allowed. */
  MetafieldsSetUserErrorCode["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
  /** The input value needs to be blank. */
  MetafieldsSetUserErrorCode["Present"] = "PRESENT";
  /** The input value is too long. */
  MetafieldsSetUserErrorCode["TooLong"] = "TOO_LONG";
  /** The input value is too short. */
  MetafieldsSetUserErrorCode["TooShort"] = "TOO_SHORT";
})(MetafieldsSetUserErrorCode || (MetafieldsSetUserErrorCode = {}));
/** Represents the reason for the order's cancellation. */
var OrderCancelReason;
(function (OrderCancelReason) {
  /** The customer wanted to cancel the order. */
  OrderCancelReason["Customer"] = "CUSTOMER";
  /** Payment was declined. */
  OrderCancelReason["Declined"] = "DECLINED";
  /** The order was fraudulent. */
  OrderCancelReason["Fraud"] = "FRAUD";
  /** There was insufficient inventory. */
  OrderCancelReason["Inventory"] = "INVENTORY";
  /** The order was canceled for an unlisted reason. */
  OrderCancelReason["Other"] = "OTHER";
  /** Staff made an error. */
  OrderCancelReason["Staff"] = "STAFF";
})(OrderCancelReason || (OrderCancelReason = {}));
/** Represents the order's current financial status. */
var OrderFinancialStatus;
(function (OrderFinancialStatus) {
  /** Displayed as **Authorized**. */
  OrderFinancialStatus["Authorized"] = "AUTHORIZED";
  /** Displayed as **Paid**. */
  OrderFinancialStatus["Paid"] = "PAID";
  /** Displayed as **Partially paid**. */
  OrderFinancialStatus["PartiallyPaid"] = "PARTIALLY_PAID";
  /** Displayed as **Partially refunded**. */
  OrderFinancialStatus["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
  /** Displayed as **Pending**. */
  OrderFinancialStatus["Pending"] = "PENDING";
  /** Displayed as **Refunded**. */
  OrderFinancialStatus["Refunded"] = "REFUNDED";
  /** Displayed as **Voided**. */
  OrderFinancialStatus["Voided"] = "VOIDED";
})(OrderFinancialStatus || (OrderFinancialStatus = {}));
/** Represents the order's aggregated fulfillment status for display purposes. */
var OrderFulfillmentStatus;
(function (OrderFulfillmentStatus) {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  OrderFulfillmentStatus["Fulfilled"] = "FULFILLED";
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  OrderFulfillmentStatus["InProgress"] = "IN_PROGRESS";
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OrderFulfillmentStatus["OnHold"] = "ON_HOLD";
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  OrderFulfillmentStatus["Open"] = "OPEN";
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  OrderFulfillmentStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  OrderFulfillmentStatus["PendingFulfillment"] = "PENDING_FULFILLMENT";
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  OrderFulfillmentStatus["Restocked"] = "RESTOCKED";
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  OrderFulfillmentStatus["Scheduled"] = "SCHEDULED";
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  OrderFulfillmentStatus["Unfulfilled"] = "UNFULFILLED";
})(OrderFulfillmentStatus || (OrderFulfillmentStatus = {}));
/** The set of valid sort keys for the Order query. */
var OrderSortKeys;
(function (OrderSortKeys) {
  /** Sort by the `id` value. */
  OrderSortKeys["Id"] = "ID";
  /** Sort by the `processed_at` value. */
  OrderSortKeys["ProcessedAt"] = "PROCESSED_AT";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  OrderSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `total_price` value. */
  OrderSortKeys["TotalPrice"] = "TOTAL_PRICE";
})(OrderSortKeys || (OrderSortKeys = {}));
/** The set of valid sort keys for the Page query. */
var PageSortKeys;
(function (PageSortKeys) {
  /** Sort by the `id` value. */
  PageSortKeys["Id"] = "ID";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  PageSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  PageSortKeys["Title"] = "TITLE";
  /** Sort by the `updated_at` value. */
  PageSortKeys["UpdatedAt"] = "UPDATED_AT";
})(PageSortKeys || (PageSortKeys = {}));
/** Decides the distribution of results. */
var PredictiveSearchLimitScope;
(function (PredictiveSearchLimitScope) {
  /** Return results up to limit across all types. */
  PredictiveSearchLimitScope["All"] = "ALL";
  /** Return results up to limit per type. */
  PredictiveSearchLimitScope["Each"] = "EACH";
})(PredictiveSearchLimitScope || (PredictiveSearchLimitScope = {}));
/** The types of search items to perform predictive search on. */
var PredictiveSearchType;
(function (PredictiveSearchType) {
  /** Returns matching articles. */
  PredictiveSearchType["Article"] = "ARTICLE";
  /** Returns matching collections. */
  PredictiveSearchType["Collection"] = "COLLECTION";
  /** Returns matching pages. */
  PredictiveSearchType["Page"] = "PAGE";
  /** Returns matching products. */
  PredictiveSearchType["Product"] = "PRODUCT";
  /** Returns matching query strings. */
  PredictiveSearchType["Query"] = "QUERY";
})(PredictiveSearchType || (PredictiveSearchType = {}));
/** The preferred delivery methods such as shipping, local pickup or through pickup points. */
var PreferenceDeliveryMethodType;
(function (PreferenceDeliveryMethodType) {
  /** A delivery method used to let buyers collect purchases at designated locations like parcel lockers. */
  PreferenceDeliveryMethodType["PickupPoint"] = "PICKUP_POINT";
  /** A delivery method used to let buyers receive items directly from a specific location within an area. */
  PreferenceDeliveryMethodType["PickUp"] = "PICK_UP";
  /** A delivery method used to send items directly to a buyer’s specified address. */
  PreferenceDeliveryMethodType["Shipping"] = "SHIPPING";
})(PreferenceDeliveryMethodType || (PreferenceDeliveryMethodType = {}));
/** The set of valid sort keys for the ProductCollection query. */
var ProductCollectionSortKeys;
(function (ProductCollectionSortKeys) {
  /** Sort by the `best-selling` value. */
  ProductCollectionSortKeys["BestSelling"] = "BEST_SELLING";
  /** Sort by the `collection-default` value. */
  ProductCollectionSortKeys["CollectionDefault"] = "COLLECTION_DEFAULT";
  /** Sort by the `created` value. */
  ProductCollectionSortKeys["Created"] = "CREATED";
  /** Sort by the `id` value. */
  ProductCollectionSortKeys["Id"] = "ID";
  /** Sort by the `manual` value. */
  ProductCollectionSortKeys["Manual"] = "MANUAL";
  /** Sort by the `price` value. */
  ProductCollectionSortKeys["Price"] = "PRICE";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ProductCollectionSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  ProductCollectionSortKeys["Title"] = "TITLE";
})(ProductCollectionSortKeys || (ProductCollectionSortKeys = {}));
/** The set of valid sort keys for the ProductImage query. */
var ProductImageSortKeys;
(function (ProductImageSortKeys) {
  /** Sort by the `created_at` value. */
  ProductImageSortKeys["CreatedAt"] = "CREATED_AT";
  /** Sort by the `id` value. */
  ProductImageSortKeys["Id"] = "ID";
  /** Sort by the `position` value. */
  ProductImageSortKeys["Position"] = "POSITION";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ProductImageSortKeys["Relevance"] = "RELEVANCE";
})(ProductImageSortKeys || (ProductImageSortKeys = {}));
/** The set of valid sort keys for the ProductMedia query. */
var ProductMediaSortKeys;
(function (ProductMediaSortKeys) {
  /** Sort by the `id` value. */
  ProductMediaSortKeys["Id"] = "ID";
  /** Sort by the `position` value. */
  ProductMediaSortKeys["Position"] = "POSITION";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ProductMediaSortKeys["Relevance"] = "RELEVANCE";
})(ProductMediaSortKeys || (ProductMediaSortKeys = {}));
/**
 * The recommendation intent that is used to generate product recommendations.
 * You can use intent to generate product recommendations according to different strategies.
 *
 */
var ProductRecommendationIntent;
(function (ProductRecommendationIntent) {
  /** Offer customers products that are complementary to a product for which recommendations are to be fetched. An example is add-on products that display in a Pair it with section. */
  ProductRecommendationIntent["Complementary"] = "COMPLEMENTARY";
  /** Offer customers a mix of products that are similar or complementary to a product for which recommendations are to be fetched. An example is substitutable products that display in a You may also like section. */
  ProductRecommendationIntent["Related"] = "RELATED";
})(ProductRecommendationIntent || (ProductRecommendationIntent = {}));
/** The set of valid sort keys for the Product query. */
var ProductSortKeys;
(function (ProductSortKeys) {
  /** Sort by the `best_selling` value. */
  ProductSortKeys["BestSelling"] = "BEST_SELLING";
  /** Sort by the `created_at` value. */
  ProductSortKeys["CreatedAt"] = "CREATED_AT";
  /** Sort by the `id` value. */
  ProductSortKeys["Id"] = "ID";
  /** Sort by the `price` value. */
  ProductSortKeys["Price"] = "PRICE";
  /** Sort by the `product_type` value. */
  ProductSortKeys["ProductType"] = "PRODUCT_TYPE";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ProductSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `title` value. */
  ProductSortKeys["Title"] = "TITLE";
  /** Sort by the `updated_at` value. */
  ProductSortKeys["UpdatedAt"] = "UPDATED_AT";
  /** Sort by the `vendor` value. */
  ProductSortKeys["Vendor"] = "VENDOR";
})(ProductSortKeys || (ProductSortKeys = {}));
/** The set of valid sort keys for the ProductVariant query. */
var ProductVariantSortKeys;
(function (ProductVariantSortKeys) {
  /** Sort by the `id` value. */
  ProductVariantSortKeys["Id"] = "ID";
  /** Sort by the `position` value. */
  ProductVariantSortKeys["Position"] = "POSITION";
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  ProductVariantSortKeys["Relevance"] = "RELEVANCE";
  /** Sort by the `sku` value. */
  ProductVariantSortKeys["Sku"] = "SKU";
  /** Sort by the `title` value. */
  ProductVariantSortKeys["Title"] = "TITLE";
})(ProductVariantSortKeys || (ProductVariantSortKeys = {}));
/** Specifies whether to perform a partial word match on the last search term. */
var SearchPrefixQueryType;
(function (SearchPrefixQueryType) {
  /** Perform a partial word match on the last search term. */
  SearchPrefixQueryType["Last"] = "LAST";
  /** Don't perform a partial word match on the last search term. */
  SearchPrefixQueryType["None"] = "NONE";
})(SearchPrefixQueryType || (SearchPrefixQueryType = {}));
/** The set of valid sort keys for the search query. */
var SearchSortKeys;
(function (SearchSortKeys) {
  /** Sort by the `price` value. */
  SearchSortKeys["Price"] = "PRICE";
  /** Sort by relevance to the search terms. */
  SearchSortKeys["Relevance"] = "RELEVANCE";
})(SearchSortKeys || (SearchSortKeys = {}));
/** The types of search items to perform search within. */
var SearchType;
(function (SearchType) {
  /** Returns matching articles. */
  SearchType["Article"] = "ARTICLE";
  /** Returns matching pages. */
  SearchType["Page"] = "PAGE";
  /** Returns matching products. */
  SearchType["Product"] = "PRODUCT";
})(SearchType || (SearchType = {}));
/** Specifies whether to display results for unavailable products. */
var SearchUnavailableProductsType;
(function (SearchUnavailableProductsType) {
  /** Exclude unavailable products. */
  SearchUnavailableProductsType["Hide"] = "HIDE";
  /** Show unavailable products after all other matching results. This is the default. */
  SearchUnavailableProductsType["Last"] = "LAST";
  /** Show unavailable products in the order that they're found. */
  SearchUnavailableProductsType["Show"] = "SHOW";
})(SearchUnavailableProductsType || (SearchUnavailableProductsType = {}));
/** Specifies the list of resource fields to search. */
var SearchableField;
(function (SearchableField) {
  /** Author of the page or article. */
  SearchableField["Author"] = "AUTHOR";
  /** Body of the page or article or product description or collection description. */
  SearchableField["Body"] = "BODY";
  /** Product type. */
  SearchableField["ProductType"] = "PRODUCT_TYPE";
  /** Tag associated with the product or article. */
  SearchableField["Tag"] = "TAG";
  /** Title of the page or article or product title or collection title. */
  SearchableField["Title"] = "TITLE";
  /** Variant barcode. */
  SearchableField["VariantsBarcode"] = "VARIANTS_BARCODE";
  /** Variant SKU. */
  SearchableField["VariantsSku"] = "VARIANTS_SKU";
  /** Variant title. */
  SearchableField["VariantsTitle"] = "VARIANTS_TITLE";
  /** Product vendor. */
  SearchableField["Vendor"] = "VENDOR";
})(SearchableField || (SearchableField = {}));
/** The checkout charge when the full amount isn't charged at checkout. */
var SellingPlanCheckoutChargeType;
(function (SellingPlanCheckoutChargeType) {
  /** The checkout charge is a percentage of the product or variant price. */
  SellingPlanCheckoutChargeType["Percentage"] = "PERCENTAGE";
  /** The checkout charge is a fixed price amount. */
  SellingPlanCheckoutChargeType["Price"] = "PRICE";
})(SellingPlanCheckoutChargeType || (SellingPlanCheckoutChargeType = {}));
/** Represents a valid selling plan interval. */
var SellingPlanInterval;
(function (SellingPlanInterval) {
  /** Day interval. */
  SellingPlanInterval["Day"] = "DAY";
  /** Month interval. */
  SellingPlanInterval["Month"] = "MONTH";
  /** Week interval. */
  SellingPlanInterval["Week"] = "WEEK";
  /** Year interval. */
  SellingPlanInterval["Year"] = "YEAR";
})(SellingPlanInterval || (SellingPlanInterval = {}));
/** The payment frequency for a Shop Pay Installments Financing Plan. */
var ShopPayInstallmentsFinancingPlanFrequency;
(function (ShopPayInstallmentsFinancingPlanFrequency) {
  /** Monthly payment frequency. */
  ShopPayInstallmentsFinancingPlanFrequency["Monthly"] = "MONTHLY";
  /** Weekly payment frequency. */
  ShopPayInstallmentsFinancingPlanFrequency["Weekly"] = "WEEKLY";
})(ShopPayInstallmentsFinancingPlanFrequency || (ShopPayInstallmentsFinancingPlanFrequency = {}));
/** The loan type for a Shop Pay Installments Financing Plan Term. */
var ShopPayInstallmentsLoan;
(function (ShopPayInstallmentsLoan) {
  /** An interest-bearing loan type. */
  ShopPayInstallmentsLoan["Interest"] = "INTEREST";
  /** A split-pay loan type. */
  ShopPayInstallmentsLoan["SplitPay"] = "SPLIT_PAY";
  /** A zero-percent loan type. */
  ShopPayInstallmentsLoan["ZeroPercent"] = "ZERO_PERCENT";
})(ShopPayInstallmentsLoan || (ShopPayInstallmentsLoan = {}));
/** Represents the delivery method type for a Shop Pay payment request. */
var ShopPayPaymentRequestDeliveryMethodType;
(function (ShopPayPaymentRequestDeliveryMethodType) {
  /** The delivery method type is pickup. */
  ShopPayPaymentRequestDeliveryMethodType["Pickup"] = "PICKUP";
  /** The delivery method type is shipping. */
  ShopPayPaymentRequestDeliveryMethodType["Shipping"] = "SHIPPING";
})(ShopPayPaymentRequestDeliveryMethodType || (ShopPayPaymentRequestDeliveryMethodType = {}));
/** The types of resources potentially present in a sitemap. */
var SitemapType;
(function (SitemapType) {
  /** Articles present in the sitemap. */
  SitemapType["Article"] = "ARTICLE";
  /** Blogs present in the sitemap. */
  SitemapType["Blog"] = "BLOG";
  /** Collections present in the sitemap. */
  SitemapType["Collection"] = "COLLECTION";
  /**
   * Metaobjects present in the sitemap. Only metaobject types with the
   * [`renderable` capability](https://shopify.dev/docs/apps/build/custom-data/metaobjects/use-metaobject-capabilities#render-metaobjects-as-web-pages)
   * are included in sitemap.
   *
   */
  SitemapType["Metaobject"] = "METAOBJECT";
  /** Pages present in the sitemap. */
  SitemapType["Page"] = "PAGE";
  /** Products present in the sitemap. */
  SitemapType["Product"] = "PRODUCT";
})(SitemapType || (SitemapType = {}));
/** The code of the error that occurred during cart submit for completion. */
var SubmissionErrorCode;
(function (SubmissionErrorCode) {
  SubmissionErrorCode["BuyerIdentityEmailIsInvalid"] = "BUYER_IDENTITY_EMAIL_IS_INVALID";
  SubmissionErrorCode["BuyerIdentityEmailRequired"] = "BUYER_IDENTITY_EMAIL_REQUIRED";
  SubmissionErrorCode["BuyerIdentityPhoneIsInvalid"] = "BUYER_IDENTITY_PHONE_IS_INVALID";
  SubmissionErrorCode["DeliveryAddress1Invalid"] = "DELIVERY_ADDRESS1_INVALID";
  SubmissionErrorCode["DeliveryAddress1Required"] = "DELIVERY_ADDRESS1_REQUIRED";
  SubmissionErrorCode["DeliveryAddress1TooLong"] = "DELIVERY_ADDRESS1_TOO_LONG";
  SubmissionErrorCode["DeliveryAddress2Invalid"] = "DELIVERY_ADDRESS2_INVALID";
  SubmissionErrorCode["DeliveryAddress2Required"] = "DELIVERY_ADDRESS2_REQUIRED";
  SubmissionErrorCode["DeliveryAddress2TooLong"] = "DELIVERY_ADDRESS2_TOO_LONG";
  SubmissionErrorCode["DeliveryAddressRequired"] = "DELIVERY_ADDRESS_REQUIRED";
  SubmissionErrorCode["DeliveryCityInvalid"] = "DELIVERY_CITY_INVALID";
  SubmissionErrorCode["DeliveryCityRequired"] = "DELIVERY_CITY_REQUIRED";
  SubmissionErrorCode["DeliveryCityTooLong"] = "DELIVERY_CITY_TOO_LONG";
  SubmissionErrorCode["DeliveryCompanyInvalid"] = "DELIVERY_COMPANY_INVALID";
  SubmissionErrorCode["DeliveryCompanyRequired"] = "DELIVERY_COMPANY_REQUIRED";
  SubmissionErrorCode["DeliveryCompanyTooLong"] = "DELIVERY_COMPANY_TOO_LONG";
  SubmissionErrorCode["DeliveryCountryRequired"] = "DELIVERY_COUNTRY_REQUIRED";
  SubmissionErrorCode["DeliveryFirstNameInvalid"] = "DELIVERY_FIRST_NAME_INVALID";
  SubmissionErrorCode["DeliveryFirstNameRequired"] = "DELIVERY_FIRST_NAME_REQUIRED";
  SubmissionErrorCode["DeliveryFirstNameTooLong"] = "DELIVERY_FIRST_NAME_TOO_LONG";
  SubmissionErrorCode["DeliveryInvalidPostalCodeForCountry"] = "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY";
  SubmissionErrorCode["DeliveryInvalidPostalCodeForZone"] = "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE";
  SubmissionErrorCode["DeliveryLastNameInvalid"] = "DELIVERY_LAST_NAME_INVALID";
  SubmissionErrorCode["DeliveryLastNameRequired"] = "DELIVERY_LAST_NAME_REQUIRED";
  SubmissionErrorCode["DeliveryLastNameTooLong"] = "DELIVERY_LAST_NAME_TOO_LONG";
  SubmissionErrorCode["DeliveryNoDeliveryAvailable"] = "DELIVERY_NO_DELIVERY_AVAILABLE";
  SubmissionErrorCode["DeliveryNoDeliveryAvailableForMerchandiseLine"] = "DELIVERY_NO_DELIVERY_AVAILABLE_FOR_MERCHANDISE_LINE";
  SubmissionErrorCode["DeliveryOptionsPhoneNumberInvalid"] = "DELIVERY_OPTIONS_PHONE_NUMBER_INVALID";
  SubmissionErrorCode["DeliveryOptionsPhoneNumberRequired"] = "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED";
  SubmissionErrorCode["DeliveryPhoneNumberInvalid"] = "DELIVERY_PHONE_NUMBER_INVALID";
  SubmissionErrorCode["DeliveryPhoneNumberRequired"] = "DELIVERY_PHONE_NUMBER_REQUIRED";
  SubmissionErrorCode["DeliveryPostalCodeInvalid"] = "DELIVERY_POSTAL_CODE_INVALID";
  SubmissionErrorCode["DeliveryPostalCodeRequired"] = "DELIVERY_POSTAL_CODE_REQUIRED";
  SubmissionErrorCode["DeliveryZoneNotFound"] = "DELIVERY_ZONE_NOT_FOUND";
  SubmissionErrorCode["DeliveryZoneRequiredForCountry"] = "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY";
  SubmissionErrorCode["Error"] = "ERROR";
  SubmissionErrorCode["MerchandiseLineLimitReached"] = "MERCHANDISE_LINE_LIMIT_REACHED";
  SubmissionErrorCode["MerchandiseNotApplicable"] = "MERCHANDISE_NOT_APPLICABLE";
  SubmissionErrorCode["MerchandiseNotEnoughStockAvailable"] = "MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE";
  SubmissionErrorCode["MerchandiseOutOfStock"] = "MERCHANDISE_OUT_OF_STOCK";
  SubmissionErrorCode["MerchandiseProductNotPublished"] = "MERCHANDISE_PRODUCT_NOT_PUBLISHED";
  SubmissionErrorCode["NoDeliveryGroupSelected"] = "NO_DELIVERY_GROUP_SELECTED";
  SubmissionErrorCode["PaymentsAddress1Invalid"] = "PAYMENTS_ADDRESS1_INVALID";
  SubmissionErrorCode["PaymentsAddress1Required"] = "PAYMENTS_ADDRESS1_REQUIRED";
  SubmissionErrorCode["PaymentsAddress1TooLong"] = "PAYMENTS_ADDRESS1_TOO_LONG";
  SubmissionErrorCode["PaymentsAddress2Invalid"] = "PAYMENTS_ADDRESS2_INVALID";
  SubmissionErrorCode["PaymentsAddress2Required"] = "PAYMENTS_ADDRESS2_REQUIRED";
  SubmissionErrorCode["PaymentsAddress2TooLong"] = "PAYMENTS_ADDRESS2_TOO_LONG";
  SubmissionErrorCode["PaymentsBillingAddressZoneNotFound"] = "PAYMENTS_BILLING_ADDRESS_ZONE_NOT_FOUND";
  SubmissionErrorCode["PaymentsBillingAddressZoneRequiredForCountry"] = "PAYMENTS_BILLING_ADDRESS_ZONE_REQUIRED_FOR_COUNTRY";
  SubmissionErrorCode["PaymentsCityInvalid"] = "PAYMENTS_CITY_INVALID";
  SubmissionErrorCode["PaymentsCityRequired"] = "PAYMENTS_CITY_REQUIRED";
  SubmissionErrorCode["PaymentsCityTooLong"] = "PAYMENTS_CITY_TOO_LONG";
  SubmissionErrorCode["PaymentsCompanyInvalid"] = "PAYMENTS_COMPANY_INVALID";
  SubmissionErrorCode["PaymentsCompanyRequired"] = "PAYMENTS_COMPANY_REQUIRED";
  SubmissionErrorCode["PaymentsCompanyTooLong"] = "PAYMENTS_COMPANY_TOO_LONG";
  SubmissionErrorCode["PaymentsCountryRequired"] = "PAYMENTS_COUNTRY_REQUIRED";
  SubmissionErrorCode["PaymentsCreditCardBaseExpired"] = "PAYMENTS_CREDIT_CARD_BASE_EXPIRED";
  SubmissionErrorCode["PaymentsCreditCardBaseGatewayNotSupported"] = "PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED";
  SubmissionErrorCode["PaymentsCreditCardBaseInvalidStartDateOrIssueNumberForDebit"] = "PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT";
  SubmissionErrorCode["PaymentsCreditCardBrandNotSupported"] = "PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED";
  SubmissionErrorCode["PaymentsCreditCardFirstNameBlank"] = "PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK";
  SubmissionErrorCode["PaymentsCreditCardGeneric"] = "PAYMENTS_CREDIT_CARD_GENERIC";
  SubmissionErrorCode["PaymentsCreditCardLastNameBlank"] = "PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK";
  SubmissionErrorCode["PaymentsCreditCardMonthInclusion"] = "PAYMENTS_CREDIT_CARD_MONTH_INCLUSION";
  SubmissionErrorCode["PaymentsCreditCardNameInvalid"] = "PAYMENTS_CREDIT_CARD_NAME_INVALID";
  SubmissionErrorCode["PaymentsCreditCardNumberInvalid"] = "PAYMENTS_CREDIT_CARD_NUMBER_INVALID";
  SubmissionErrorCode["PaymentsCreditCardNumberInvalidFormat"] = "PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT";
  SubmissionErrorCode["PaymentsCreditCardSessionId"] = "PAYMENTS_CREDIT_CARD_SESSION_ID";
  SubmissionErrorCode["PaymentsCreditCardVerificationValueBlank"] = "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK";
  SubmissionErrorCode["PaymentsCreditCardVerificationValueInvalidForCardType"] = "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE";
  SubmissionErrorCode["PaymentsCreditCardYearExpired"] = "PAYMENTS_CREDIT_CARD_YEAR_EXPIRED";
  SubmissionErrorCode["PaymentsCreditCardYearInvalidExpiryYear"] = "PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR";
  SubmissionErrorCode["PaymentsFirstNameInvalid"] = "PAYMENTS_FIRST_NAME_INVALID";
  SubmissionErrorCode["PaymentsFirstNameRequired"] = "PAYMENTS_FIRST_NAME_REQUIRED";
  SubmissionErrorCode["PaymentsFirstNameTooLong"] = "PAYMENTS_FIRST_NAME_TOO_LONG";
  SubmissionErrorCode["PaymentsInvalidPostalCodeForCountry"] = "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY";
  SubmissionErrorCode["PaymentsInvalidPostalCodeForZone"] = "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE";
  SubmissionErrorCode["PaymentsLastNameInvalid"] = "PAYMENTS_LAST_NAME_INVALID";
  SubmissionErrorCode["PaymentsLastNameRequired"] = "PAYMENTS_LAST_NAME_REQUIRED";
  SubmissionErrorCode["PaymentsLastNameTooLong"] = "PAYMENTS_LAST_NAME_TOO_LONG";
  SubmissionErrorCode["PaymentsMethodRequired"] = "PAYMENTS_METHOD_REQUIRED";
  SubmissionErrorCode["PaymentsMethodUnavailable"] = "PAYMENTS_METHOD_UNAVAILABLE";
  SubmissionErrorCode["PaymentsPhoneNumberInvalid"] = "PAYMENTS_PHONE_NUMBER_INVALID";
  SubmissionErrorCode["PaymentsPhoneNumberRequired"] = "PAYMENTS_PHONE_NUMBER_REQUIRED";
  SubmissionErrorCode["PaymentsPostalCodeInvalid"] = "PAYMENTS_POSTAL_CODE_INVALID";
  SubmissionErrorCode["PaymentsPostalCodeRequired"] = "PAYMENTS_POSTAL_CODE_REQUIRED";
  SubmissionErrorCode["PaymentsShopifyPaymentsRequired"] = "PAYMENTS_SHOPIFY_PAYMENTS_REQUIRED";
  SubmissionErrorCode["PaymentsUnacceptablePaymentAmount"] = "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT";
  SubmissionErrorCode["PaymentsWalletContentMissing"] = "PAYMENTS_WALLET_CONTENT_MISSING";
  SubmissionErrorCode["TaxesDeliveryGroupIdNotFound"] = "TAXES_DELIVERY_GROUP_ID_NOT_FOUND";
  SubmissionErrorCode["TaxesLineIdNotFound"] = "TAXES_LINE_ID_NOT_FOUND";
  SubmissionErrorCode["TaxesMustBeDefined"] = "TAXES_MUST_BE_DEFINED";
})(SubmissionErrorCode || (SubmissionErrorCode = {}));
/** The accepted types of unit of measurement. */
var UnitPriceMeasurementMeasuredType;
(function (UnitPriceMeasurementMeasuredType) {
  /** Unit of measurements representing areas. */
  UnitPriceMeasurementMeasuredType["Area"] = "AREA";
  /** Unit of measurements representing lengths. */
  UnitPriceMeasurementMeasuredType["Length"] = "LENGTH";
  /** Unit of measurements representing volumes. */
  UnitPriceMeasurementMeasuredType["Volume"] = "VOLUME";
  /** Unit of measurements representing weights. */
  UnitPriceMeasurementMeasuredType["Weight"] = "WEIGHT";
})(UnitPriceMeasurementMeasuredType || (UnitPriceMeasurementMeasuredType = {}));
/** The valid units of measurement for a unit price measurement. */
var UnitPriceMeasurementMeasuredUnit;
(function (UnitPriceMeasurementMeasuredUnit) {
  /** 100 centiliters equals 1 liter. */
  UnitPriceMeasurementMeasuredUnit["Cl"] = "CL";
  /** 100 centimeters equals 1 meter. */
  UnitPriceMeasurementMeasuredUnit["Cm"] = "CM";
  /** Metric system unit of weight. */
  UnitPriceMeasurementMeasuredUnit["G"] = "G";
  /** 1 kilogram equals 1000 grams. */
  UnitPriceMeasurementMeasuredUnit["Kg"] = "KG";
  /** Metric system unit of volume. */
  UnitPriceMeasurementMeasuredUnit["L"] = "L";
  /** Metric system unit of length. */
  UnitPriceMeasurementMeasuredUnit["M"] = "M";
  /** Metric system unit of area. */
  UnitPriceMeasurementMeasuredUnit["M2"] = "M2";
  /** 1 cubic meter equals 1000 liters. */
  UnitPriceMeasurementMeasuredUnit["M3"] = "M3";
  /** 1000 milligrams equals 1 gram. */
  UnitPriceMeasurementMeasuredUnit["Mg"] = "MG";
  /** 1000 milliliters equals 1 liter. */
  UnitPriceMeasurementMeasuredUnit["Ml"] = "ML";
  /** 1000 millimeters equals 1 meter. */
  UnitPriceMeasurementMeasuredUnit["Mm"] = "MM";
})(UnitPriceMeasurementMeasuredUnit || (UnitPriceMeasurementMeasuredUnit = {}));
/** Systems of weights and measures. */
var UnitSystem;
(function (UnitSystem) {
  /** Imperial system of weights and measures. */
  UnitSystem["ImperialSystem"] = "IMPERIAL_SYSTEM";
  /** Metric system of weights and measures. */
  UnitSystem["MetricSystem"] = "METRIC_SYSTEM";
})(UnitSystem || (UnitSystem = {}));
/** Possible error codes that can be returned by `ShopPayPaymentRequestSessionUserErrors`. */
var UserErrorsShopPayPaymentRequestSessionUserErrorsCode;
(function (UserErrorsShopPayPaymentRequestSessionUserErrorsCode) {
  /** Idempotency key has already been used. */
  UserErrorsShopPayPaymentRequestSessionUserErrorsCode["IdempotencyKeyAlreadyUsed"] = "IDEMPOTENCY_KEY_ALREADY_USED";
  /** Payment request input is invalid. */
  UserErrorsShopPayPaymentRequestSessionUserErrorsCode["PaymentRequestInvalidInput"] = "PAYMENT_REQUEST_INVALID_INPUT";
  /** Payment request not found. */
  UserErrorsShopPayPaymentRequestSessionUserErrorsCode["PaymentRequestNotFound"] = "PAYMENT_REQUEST_NOT_FOUND";
})(UserErrorsShopPayPaymentRequestSessionUserErrorsCode || (UserErrorsShopPayPaymentRequestSessionUserErrorsCode = {}));
/** Units of measurement for weight. */
var WeightUnit;
(function (WeightUnit) {
  /** Metric system unit of mass. */
  WeightUnit["Grams"] = "GRAMS";
  /** 1 kilogram equals 1000 grams. */
  WeightUnit["Kilograms"] = "KILOGRAMS";
  /** Imperial system unit of mass. */
  WeightUnit["Ounces"] = "OUNCES";
  /** 1 pound equals 16 ounces. */
  WeightUnit["Pounds"] = "POUNDS";
})(WeightUnit || (WeightUnit = {}));
var TypedDocumentString = /*#__PURE__*/function (_String) {
  _inheritsLoose(TypedDocumentString, _String);
  function TypedDocumentString(value, __meta__) {
    var _this;
    _this = _String.call(this, value) || this;
    _this.value = value;
    _this.__meta__ = __meta__;
    return _this;
  }
  var _proto = TypedDocumentString.prototype;
  _proto.toString = function toString() {
    return this.value;
  };
  return TypedDocumentString;
}(/*#__PURE__*/_wrapNativeSuper(String));
var ImageFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\n    ", {
  fragmentName: "image"
});
var ProductVariantFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}", {
  fragmentName: "productVariant"
});
var SeoFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment seo on SEO {\n  description\n  title\n}\n    ", {
  fragmentName: "seo"
});
var ProductFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment seo on SEO {\n  description\n  title\n}", {
  fragmentName: "product"
});
var CartFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}", {
  fragmentName: "cart"
});
var CollectionFragmentDoc = /*#__PURE__*/new TypedDocumentString("\n    fragment collection on Collection {\n  id\n  title\n  handle\n  image {\n    ...image\n  }\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}", {
  fragmentName: "collection"
});
var AddToCartDocument = /*#__PURE__*/new TypedDocumentString("\n    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      ...cart\n    }\n  }\n}\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var CreateCartDocument = /*#__PURE__*/new TypedDocumentString("\n    mutation createCart($lines: [CartLineInput!]) {\n  cartCreate(input: {lines: $lines}) {\n    cart {\n      ...cart\n    }\n  }\n}\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var EditCartItemsDocument = /*#__PURE__*/new TypedDocumentString("\n    mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n  cartLinesUpdate(cartId: $cartId, lines: $lines) {\n    cart {\n      ...cart\n    }\n  }\n}\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var RemoveFromCartDocument = /*#__PURE__*/new TypedDocumentString("\n    mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n    cart {\n      ...cart\n    }\n  }\n}\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var CustomerActivateByUrlDocument = /*#__PURE__*/new TypedDocumentString("\n    mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {\n  customerActivateByUrl(activationUrl: $activationUrl, password: $password) {\n    customer {\n      id\n    }\n    customerAccessToken {\n      accessToken\n      expiresAt\n    }\n    customerUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n    ");
var GetSiteCollectionsDocument = /*#__PURE__*/new TypedDocumentString("\n    query getSiteCollections($first: Int!) {\n  collections(first: $first) {\n    edges {\n      node {\n        ...collection\n        products(first: $first) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    fragment collection on Collection {\n  id\n  title\n  handle\n  image {\n    ...image\n  }\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}");
var GetAllProductVendorsDocument = /*#__PURE__*/new TypedDocumentString("\n    query getAllProductVendors($first: Int = 250, $cursor: String) {\n  products(first: $first, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        vendor\n      }\n      cursor\n    }\n  }\n}\n    ");
var GetAllProductsDocument = /*#__PURE__*/new TypedDocumentString("\n    query getAllProducts($first: Int = 250, $query: String = \"\", $sortKey: ProductSortKeys = RELEVANCE, $reverse: Boolean = false) {\n  products(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ...product\n      }\n    }\n  }\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var GetCartDocument = /*#__PURE__*/new TypedDocumentString("\n    query getCart($cartId: ID!) {\n  cart(id: $cartId) {\n    ...cart\n  }\n}\n    fragment cart on Cart {\n  id\n  createdAt\n  checkoutUrl\n  cost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n  }\n  lines(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n        merchandise {\n          ... on ProductVariant {\n            ...productVariant\n            product {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var GetProductsFromCollectionDocument = /*#__PURE__*/new TypedDocumentString("\n    query getProductsFromCollection($categoryId: ID!, $first: Int = 250, $sortKey: ProductCollectionSortKeys = RELEVANCE, $reverse: Boolean = false) {\n  node(id: $categoryId) {\n    id\n    ... on Collection {\n      ...collection\n      products(first: $first, sortKey: $sortKey, reverse: $reverse) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n}\n    fragment collection on Collection {\n  id\n  title\n  handle\n  image {\n    ...image\n  }\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var GetSiteCollectionDocument = /*#__PURE__*/new TypedDocumentString("\n    query getSiteCollection($id: ID, $handle: String, $first: Int = 1) {\n  collection(id: $id, handle: $handle) {\n    ...collection\n    products(first: $first) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n}\n    fragment collection on Collection {\n  id\n  title\n  handle\n  image {\n    ...image\n  }\n}\nfragment image on Image {\n  url\n  altText\n  width\n  height\n}");
var GetProductBySlugDocument = /*#__PURE__*/new TypedDocumentString("\n    query getProductBySlug($slug: String!) {\n  productByHandle(handle: $slug) {\n    ...product\n  }\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");
var GetProductByIdDocument = /*#__PURE__*/new TypedDocumentString("\n    query getProductById($id: ID!) {\n  product(id: $id) {\n    ...product\n  }\n}\n    fragment image on Image {\n  url\n  altText\n  width\n  height\n}\nfragment productVariant on ProductVariant {\n  id\n  sku\n  title\n  availableForSale\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  image {\n    ...image\n  }\n  price {\n    amount\n    currencyCode\n  }\n  compareAtPrice {\n    amount\n    currencyCode\n  }\n}\nfragment product on Product {\n  id\n  handle\n  availableForSale\n  title\n  productType\n  description\n  descriptionHtml\n  options {\n    id\n    name\n    values\n  }\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  variants(first: 250) {\n    edges {\n      node {\n        ...productVariant\n      }\n    }\n  }\n  featuredImage {\n    ...image\n  }\n  images(first: 20) {\n    edges {\n      node {\n        ...image\n      }\n    }\n  }\n  seo {\n    ...seo\n  }\n  tags\n  updatedAt\n  vendor\n}\nfragment seo on SEO {\n  description\n  title\n}");

/* eslint-disable */
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
var documents = {
  "\n  fragment cart on Cart {\n    id\n    createdAt\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              ...productVariant\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n": CartFragmentDoc,
  "\n  fragment collection on Collection {\n    id\n    title\n    handle\n    image {\n      ...image\n    }\n  }\n": CollectionFragmentDoc,
  "\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n": ImageFragmentDoc,
  "\n  fragment productVariant on ProductVariant {\n    id\n    sku\n    title\n    availableForSale\n    requiresShipping\n    selectedOptions {\n      name\n      value\n    }\n    image {\n      ...image\n    }\n    price {\n      amount\n      currencyCode\n    }\n    compareAtPrice {\n      amount\n      currencyCode\n    }\n  }\n": ProductVariantFragmentDoc,
  "\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    productType\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          ...productVariant\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n    vendor\n  }\n": ProductFragmentDoc,
  "\n  fragment seo on SEO {\n    description\n    title\n  }\n": SeoFragmentDoc,
  "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n": AddToCartDocument,
  "\n  mutation createCart($lines: [CartLineInput!]) {\n    cartCreate(input: { lines: $lines }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n": CreateCartDocument,
  "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n": EditCartItemsDocument,
  "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n": RemoveFromCartDocument,
  "\n  mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {\n    customerActivateByUrl(activationUrl: $activationUrl, password: $password) {\n      customer {\n        id\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n": CustomerActivateByUrlDocument,
  "\n  query getSiteCollections($first: Int!) {\n    collections(first: $first) {\n      edges {\n        node {\n          ...collection\n          products(first: $first) {\n            edges {\n              node {\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": GetSiteCollectionsDocument,
  "\n  query getAllProductVendors($first: Int = 250, $cursor: String) {\n    products(first: $first, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          vendor\n        }\n        cursor\n      }\n    }\n  }\n": GetAllProductVendorsDocument,
  '\n  query getAllProducts(\n    $first: Int = 250\n    $query: String = ""\n    $sortKey: ProductSortKeys = RELEVANCE\n    $reverse: Boolean = false\n  ) {\n    products(\n      first: $first\n      sortKey: $sortKey\n      reverse: $reverse\n      query: $query\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n': GetAllProductsDocument,
  "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n": GetCartDocument,
  "\n  query getProductsFromCollection(\n    $categoryId: ID!\n    $first: Int = 250\n    $sortKey: ProductCollectionSortKeys = RELEVANCE\n    $reverse: Boolean = false\n  ) {\n    node(id: $categoryId) {\n      id\n      ... on Collection {\n        ...collection\n        products(first: $first, sortKey: $sortKey, reverse: $reverse) {\n          edges {\n            node {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n": GetProductsFromCollectionDocument,
  "\n  query getSiteCollection($id: ID, $handle: String, $first: Int = 1) {\n    collection(id: $id, handle: $handle) {\n      ...collection\n      products(first: $first) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n": GetSiteCollectionDocument,
  "\n  query getProductBySlug($slug: String!) {\n    productByHandle(handle: $slug) {\n      ...product\n    }\n  }\n": GetProductBySlugDocument,
  "\n  query getProductById($id: ID!) {\n    product(id: $id) {\n      ...product\n    }\n  }\n": GetProductByIdDocument
};
function graphql(source) {
  var _documents$source;
  return (_documents$source = documents[source]) != null ? _documents$source : {};
}

var addToCartMutation = /*#__PURE__*/graphql("\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n");
var createCartMutation = /*#__PURE__*/graphql("\n  mutation createCart($lines: [CartLineInput!]) {\n    cartCreate(input: { lines: $lines }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n");
var editCartItemsMutation = /*#__PURE__*/graphql("\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n");
var removeFromCartMutation = /*#__PURE__*/graphql("\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n");

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/shopify/src
  Changes: None
*/
var colorMap = {
  aliceblue: '#F0F8FF',
  antiquewhite: '#FAEBD7',
  aqua: '#00FFFF',
  aquamarine: '#7FFFD4',
  azure: '#F0FFFF',
  beige: '#F5F5DC',
  bisque: '#FFE4C4',
  black: '#000000',
  blanchedalmond: '#FFEBCD',
  blue: '#0000FF',
  blueviolet: '#8A2BE2',
  brown: '#A52A2A',
  burlywood: '#DEB887',
  burgandy: '#800020',
  burgundy: '#800020',
  cadetblue: '#5F9EA0',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  coral: '#FF7F50',
  cornflowerblue: '#6495ED',
  cornsilk: '#FFF8DC',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  darkblue: '#00008B',
  darkcyan: '#008B8B',
  darkgoldenrod: '#B8860B',
  darkgray: '#A9A9A9',
  darkgreen: '#006400',
  darkgrey: '#A9A9A9',
  darkkhaki: '#BDB76B',
  darkmagenta: '#8B008B',
  darkolivegreen: '#556B2F',
  darkorange: '#FF8C00',
  darkorchid: '#9932CC',
  darkred: '#8B0000',
  darksalmon: '#E9967A',
  darkseagreen: '#8FBC8F',
  darkslateblue: '#483D8B',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  darkturquoise: '#00CED1',
  darkviolet: '#9400D3',
  deeppink: '#FF1493',
  deepskyblue: '#00BFFF',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1E90FF',
  firebrick: '#B22222',
  floralwhite: '#FFFAF0',
  forestgreen: '#228B22',
  fuchsia: '#FF00FF',
  gainsboro: '#DCDCDC',
  ghostwhite: '#F8F8FF',
  gold: '#FFD700',
  goldenrod: '#DAA520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#ADFF2F',
  grey: '#808080',
  honeydew: '#F0FFF0',
  hotpink: '#FF69B4',
  indianred: '#CD5C5C',
  indigo: '#4B0082',
  ivory: '#FFFFF0',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lavenderblush: '#FFF0F5',
  lawngreen: '#7CFC00',
  lemonchiffon: '#FFFACD',
  lightblue: '#ADD8E6',
  lightcoral: '#F08080',
  lightcyan: '#E0FFFF',
  lightgoldenrodyellow: '#FAFAD2',
  lightgray: '#D3D3D3',
  lightgreen: '#90EE90',
  lightgrey: '#D3D3D3',
  lightpink: '#FFB6C1',
  lightsalmon: '#FFA07A',
  lightseagreen: '#20B2AA',
  lightskyblue: '#87CEFA',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#B0C4DE',
  lightyellow: '#FFFFE0',
  lime: '#00FF00',
  limegreen: '#32CD32',
  linen: '#FAF0E6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumaquamarine: '#66CDAA',
  mediumblue: '#0000CD',
  mediumorchid: '#BA55D3',
  mediumpurple: '#9370DB',
  mediumseagreen: '#3CB371',
  mediumslateblue: '#7B68EE',
  mediumspringgreen: '#00FA9A',
  mediumturquoise: '#48D1CC',
  mediumvioletred: '#C71585',
  midnightblue: '#191970',
  mintcream: '#F5FFFA',
  mistyrose: '#FFE4E1',
  moccasin: '#FFE4B5',
  navajowhite: '#FFDEAD',
  navy: '#000080',
  oldlace: '#FDF5E6',
  olive: '#808000',
  olivedrab: '#6B8E23',
  orange: '#FFA500',
  orangered: '#FF4500',
  orchid: '#DA70D6',
  palegoldenrod: '#EEE8AA',
  palegreen: '#98FB98',
  paleturquoise: '#AFEEEE',
  palevioletred: '#DB7093',
  papayawhip: '#FFEFD5',
  peachpuff: '#FFDAB9',
  peru: '#CD853F',
  pink: '#FFC0CB',
  plum: '#DDA0DD',
  powderblue: '#B0E0E6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#FF0000',
  rosybrown: '#BC8F8F',
  royalblue: '#4169E1',
  saddlebrown: '#8B4513',
  salmon: '#FA8072',
  sandybrown: '#F4A460',
  seagreen: '#2E8B57',
  seashell: '#FFF5EE',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  skyblue: '#87CEEB',
  slateblue: '#6A5ACD',
  slategray: '#708090',
  slategrey: '#708090',
  spacegrey: '#65737e',
  spacegray: '#65737e',
  snow: '#FFFAFA',
  springgreen: '#00FF7F',
  steelblue: '#4682B4',
  tan: '#D2B48C',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  violet: '#EE82EE',
  wheat: '#F5DEB3',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
  yellow: '#FFFF00',
  yellowgreen: '#9ACD32'
};

var _excluded = ["id", "title", "vendor", "images", "variants", "description", "handle", "priceRange", "options"];
var money = function money(_ref) {
  var amount = _ref.amount,
    currencyCode = _ref.currencyCode;
  return {
    value: +amount,
    currencyCode: currencyCode
  };
};
var isDefaultOption = function isDefaultOption(selectedOption) {
  return selectedOption.name === "Title";
};
var normalizeProductOption = function normalizeProductOption(_ref2) {
  var id = _ref2.id,
    displayName = _ref2.name,
    values = _ref2.values;
  return {
    __typename: "MultipleChoiceOption",
    id: id,
    displayName: displayName.toLowerCase(),
    values: values.map(function (value) {
      var output = {
        label: value
      };
      if (displayName.match(/colou?r/gi)) {
        var mapedColor = colorMap[value.toLowerCase().replace(/ /g, "")];
        if (mapedColor) {
          output = _extends({}, output, {
            hexColors: [mapedColor]
          });
        }
      }
      return output;
    })
  };
};
function normalizeProduct(_ref3) {
  var id = _ref3.id,
    name = _ref3.title,
    images = _ref3.images,
    variants = _ref3.variants,
    description = _ref3.description,
    handle = _ref3.handle,
    priceRange = _ref3.priceRange,
    options = _ref3.options,
    rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
  return _extends({
    id: id,
    name: name,
    description: description || "",
    path: "/" + handle,
    slug: handle == null ? void 0 : handle.replace(/^\/+|\/+$/g, ""),
    price: money(priceRange == null ? void 0 : priceRange.minVariantPrice),
    images: images.edges.map(function (edge) {
      return normalizeImage(edge.node);
    }),
    variants: variants.edges.map(function (_ref4) {
      var _ref4$node = _ref4.node,
        id = _ref4$node.id,
        selectedOptions = _ref4$node.selectedOptions,
        sku = _ref4$node.sku,
        title = _ref4$node.title,
        price = _ref4$node.price,
        compareAtPrice = _ref4$node.compareAtPrice,
        requiresShipping = _ref4$node.requiresShipping,
        availableForSale = _ref4$node.availableForSale;
      return {
        id: id,
        name: selectedOptions.some(function (o) {
          return !isDefaultOption(o);
        }) ? title : "Default variant",
        sku: sku != null ? sku : id,
        price: +price.amount,
        listPrice: +(compareAtPrice == null ? void 0 : compareAtPrice.amount),
        requiresShipping: requiresShipping,
        availableForSale: availableForSale,
        options: selectedOptions.map(function (_ref5) {
          var name = _ref5.name,
            value = _ref5.value;
          var options = normalizeProductOption({
            id: id,
            name: name,
            optionValues: [{
              id: id,
              name: name
            }],
            values: [value]
          });
          return options;
        })
      };
    }),
    options: options ? options.filter(function (o) {
      return !isDefaultOption(o);
    }) // By default Shopify adds a 'Title' name when there's only one option. We don't need it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
    .map(function (o) {
      return normalizeProductOption(o);
    }) : []
  }, rest);
}
function normalizeCart(cart) {
  var _cart$cost$totalAmoun;
  if (!cart) {
    return undefined;
  }
  return {
    id: cart.id,
    url: cart.checkoutUrl,
    customerId: "",
    email: "",
    createdAt: cart.createdAt,
    currency: {
      code: (_cart$cost$totalAmoun = cart.cost.totalAmount) == null ? void 0 : _cart$cost$totalAmoun.currencyCode
    },
    taxesIncluded: false,
    lineItems: cart.lines.edges.map(function (_ref6) {
      var _merchandise$id, _merchandise$compareA;
      var _ref6$node = _ref6.node,
        id = _ref6$node.id,
        quantity = _ref6$node.quantity,
        merchandise = _ref6$node.merchandise;
      return {
        id: id,
        variantId: merchandise.id,
        productId: merchandise.product.id,
        name: merchandise.product.title,
        quantity: quantity,
        variant: {
          id: merchandise.id,
          sku: (_merchandise$id = merchandise.id) != null ? _merchandise$id : "",
          name: merchandise.title,
          image: normalizeImage(merchandise.image),
          requiresShipping: merchandise.requiresShipping,
          price: merchandise.price.amount,
          listPrice: (_merchandise$compareA = merchandise.compareAtPrice) == null ? void 0 : _merchandise$compareA.amount
        },
        path: merchandise.product.handle,
        discounts: [],
        options: merchandise.title === "Default Title" ? [] : merchandise.selectedOptions
      };
    }),
    lineItemsSubtotalPrice: +cart.cost.subtotalAmount.amount,
    subtotalPrice: +cart.cost.subtotalAmount.amount,
    totalPrice: +cart.cost.totalAmount.amount,
    discounts: []
  };
}
function normalizeCategory(_ref7) {
  var name = _ref7.title,
    handle = _ref7.handle,
    id = _ref7.id,
    products = _ref7.products,
    image = _ref7.image;
  return {
    id: id,
    name: name,
    slug: handle,
    path: "/" + handle,
    isEmpty: products.edges.length === 0,
    images: image ? [normalizeImage(image)] : undefined
  };
}
function normalizeImage(image) {
  if (!image) {
    return {
      url: "/product-img-placeholder.svg"
    };
  }
  var url = image.url,
    altText = image.altText,
    height = image.height,
    width = image.width;
  return {
    url: url,
    alt: altText || undefined,
    height: height || undefined,
    width: width || undefined
  };
}

var cartCreate = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fetch, lines) {
    var _yield$fetch, cartCreate, cart, options;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch({
            query: createCartMutation.toString(),
            variables: {
              lines: lines
            }
          });
        case 2:
          _yield$fetch = _context.sent;
          cartCreate = _yield$fetch.cartCreate;
          cart = cartCreate == null ? void 0 : cartCreate.cart;
          if (!cart) {
            _context.next = 12;
            break;
          }
          options = {
            expires: SHOPIFY_COOKIE_EXPIRE,
            sameSite: "none",
            secure: true
          };
          Cookies.set(SHOPIFY_CART_ID_COOKIE, cart.id, options);
          Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, cart.checkoutUrl, options);
          return _context.abrupt("return", normalizeCart(cart));
        case 12:
          return _context.abrupt("return", undefined);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function cartCreate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/shopify/src
  Changes: None
*/
var getCartId = function getCartId(id) {
  return id != null ? id : Cookies.get(SHOPIFY_CART_ID_COOKIE);
};

var getCartQuery = /*#__PURE__*/graphql("\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n");

var handler = {
  fetchOptions: {
    query: /*#__PURE__*/getCartQuery.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var cartId, options, fetch, _yield$fetch, cart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cartId = _ref.input.cartId, options = _ref.options, fetch = _ref.fetch;
            if (!cartId) {
              _context.next = 13;
              break;
            }
            _context.next = 4;
            return fetch(_extends({}, options, {
              variables: {
                cartId: cartId
              }
            }));
          case 4:
            _yield$fetch = _context.sent;
            cart = _yield$fetch.cart;
            if (cart) {
              _context.next = 12;
              break;
            }
            Cookies.remove(SHOPIFY_CART_ID_COOKIE);
            Cookies.remove(SHOPIFY_CHECKOUT_URL_COOKIE);
            return _context.abrupt("return", null);
          case 12:
            return _context.abrupt("return", normalizeCart(cart));
          case 13:
            return _context.abrupt("return", null);
          case 14:
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
    query: /*#__PURE__*/addToCartMutation.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item$quantity;
      var item, options, fetch, lines, cartId, _yield$fetch, cartLinesAdd;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            item = _ref.input, options = _ref.options, fetch = _ref.fetch;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1))) {
              _context.next = 3;
              break;
            }
            throw new CommerceError({
              message: "The item quantity has to be a valid integer greater than 0"
            });
          case 3:
            lines = [{
              merchandiseId: item.variantId,
              quantity: (_item$quantity = item.quantity) != null ? _item$quantity : 1
            }];
            cartId = getCartId();
            if (cartId) {
              _context.next = 11;
              break;
            }
            _context.next = 8;
            return cartCreate(fetch, lines);
          case 8:
            return _context.abrupt("return", _context.sent);
          case 11:
            _context.next = 13;
            return fetch(_extends({}, options, {
              variables: {
                cartId: cartId,
                lines: lines
              }
            }));
          case 13:
            _yield$fetch = _context.sent;
            cartLinesAdd = _yield$fetch.cartLinesAdd;
            return _context.abrupt("return", normalizeCart(cartLinesAdd == null ? void 0 : cartLinesAdd.cart));
          case 16:
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
    query: /*#__PURE__*/removeFromCartMutation.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var itemId, options, fetch, _yield$fetch, cartLinesRemove;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            itemId = _ref.input.itemId, options = _ref.options, fetch = _ref.fetch;
            _context.next = 3;
            return fetch(_extends({}, options, {
              variables: {
                cartId: getCartId(),
                lineIds: [itemId]
              }
            }));
          case 3:
            _yield$fetch = _context.sent;
            cartLinesRemove = _yield$fetch.cartLinesRemove;
            return _context.abrupt("return", normalizeCart(cartLinesRemove == null ? void 0 : cartLinesRemove.cart));
          case 6:
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
    query: /*#__PURE__*/editCartItemsMutation.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _ref$input, itemId, item, options, fetch, _yield$fetch, cartLinesUpdate;
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
            throw new ValidationError({
              message: "The item quantity has to be a valid integer"
            });
          case 8:
            _context.next = 10;
            return fetch(_extends({}, options, {
              variables: {
                cartId: getCartId(),
                lines: [{
                  id: itemId,
                  quantity: item.quantity
                }]
              }
            }));
          case 10:
            _yield$fetch = _context.sent;
            cartLinesUpdate = _yield$fetch.cartLinesUpdate;
            return _context.abrupt("return", normalizeCart(cartLinesUpdate == null ? void 0 : cartLinesUpdate.cart));
          case 13:
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

var _excluded$1 = ["locale"];
var getFetcher = function getFetcher(storeDomain, accessToken) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _ref$url, url, _ref$method, method, variables, query, _ref3, locale, vars, res, _yield$res$json, data, errors, _yield$res$json2, _errors;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _ref$url = _ref.url, url = _ref$url === void 0 ? "https://" + storeDomain + "/api/" + shopifyApiVersion + "/graphql.json" : _ref$url, _ref$method = _ref.method, method = _ref$method === void 0 ? "POST" : _ref$method, variables = _ref.variables, query = _ref.query;
            _ref3 = variables != null ? variables : {}, locale = _ref3.locale, vars = _objectWithoutPropertiesLoose(_ref3, _excluded$1);
            _context.next = 4;
            return fetch(url, {
              method: method,
              body: JSON.stringify({
                query: query,
                variables: vars
              }),
              headers: _extends({
                "X-Shopify-Storefront-Access-Token": accessToken,
                "Content-Type": "application/json"
              }, locale && {
                "Accept-Language": locale
              })
            });
          case 4:
            res = _context.sent;
            if (!res.ok) {
              _context.next = 16;
              break;
            }
            _context.next = 8;
            return res.json();
          case 8:
            _yield$res$json = _context.sent;
            data = _yield$res$json.data;
            errors = _yield$res$json.errors;
            if (!(errors && errors.length)) {
              _context.next = 13;
              break;
            }
            throw getError(errors, res.status);
          case 13:
            return _context.abrupt("return", data);
          case 16:
            _context.next = 18;
            return res.json();
          case 18:
            _yield$res$json2 = _context.sent;
            _errors = _yield$res$json2.errors;
            throw getError(_errors, res.status);
          case 21:
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
function getError(errors, status) {
  var _errors2;
  errors = (_errors2 = errors) != null ? _errors2 : [{
    message: "Failed to fetch Shopify API"
  }];
  return new FetcherError({
    errors: errors,
    status: status
  });
}

var getProductQueryBySlug = /*#__PURE__*/graphql("\n  query getProductBySlug($slug: String!) {\n    productByHandle(handle: $slug) {\n      ...product\n    }\n  }\n");
var getProductQueryById = /*#__PURE__*/graphql("\n  query getProductById($id: ID!) {\n    product(id: $id) {\n      ...product\n    }\n  }\n");

var handler$4 = {
  fetchOptions: {
    query: /*#__PURE__*/getProductQueryBySlug.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, id, product, data, _data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            id = input.id;
            if (id) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", null);
          case 4:
            product = null;
            if (!id.startsWith("gid://shopify")) {
              _context.next = 12;
              break;
            }
            _context.next = 8;
            return fetch({
              query: getProductQueryById.toString(),
              variables: {
                id: id
              }
            });
          case 8:
            data = _context.sent;
            product = data.product;
            _context.next = 16;
            break;
          case 12:
            _context.next = 14;
            return fetch({
              query: options.query,
              variables: {
                slug: id
              }
            });
          case 14:
            _data = _context.sent;
            if (_data.productByHandle) {
              product = _data.productByHandle;
            }
          case 16:
            return _context.abrupt("return", product ? normalizeProduct(product) : null);
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

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/shopify/src
  Changes: None
*/
var getSortVariables = function getSortVariables(sort, isCategory) {
  if (isCategory === void 0) {
    isCategory = false;
  }
  var output = {};
  switch (sort) {
    case 'price-asc':
      output = {
        sortKey: 'PRICE',
        reverse: false
      };
      break;
    case 'price-desc':
      output = {
        sortKey: 'PRICE',
        reverse: true
      };
      break;
    case 'trending-desc':
      output = {
        sortKey: 'BEST_SELLING',
        reverse: false
      };
      break;
    case 'latest-desc':
      output = {
        sortKey: isCategory ? 'CREATED' : 'CREATED_AT',
        reverse: true
      };
      break;
  }
  return output;
};

var getSearchVariables = function getSearchVariables(_ref) {
  var brandId = _ref.brandId,
    search = _ref.search,
    categoryId = _ref.categoryId,
    sort = _ref.sort,
    locale = _ref.locale,
    count = _ref.count;
  var query = "";
  var searchQuery = search + "*";
  if (search) {
    query += "product_type:" + searchQuery + " OR title:" + searchQuery + " OR tag:" + searchQuery;
  }
  if (brandId) {
    query += (search ? "AND " : "") + "vendor:" + brandId;
  }
  return _extends({
    categoryId: categoryId,
    query: query
  }, getSortVariables(sort, !!categoryId), locale && {
    locale: locale
  }, {
    first: count
  });
};

var getAllProductsQuery = /*#__PURE__*/graphql("\n  query getAllProducts(\n    $first: Int = 250\n    $query: String = \"\"\n    $sortKey: ProductSortKeys = RELEVANCE\n    $reverse: Boolean = false\n  ) {\n    products(\n      first: $first\n      sortKey: $sortKey\n      reverse: $reverse\n      query: $query\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n");

var getCollectionProductsQuery = /*#__PURE__*/graphql("\n  query getProductsFromCollection(\n    $categoryId: ID!\n    $first: Int = 250\n    $sortKey: ProductCollectionSortKeys = RELEVANCE\n    $reverse: Boolean = false\n  ) {\n    node(id: $categoryId) {\n      id\n      ... on Collection {\n        ...collection\n        products(first: $first, sortKey: $sortKey, reverse: $reverse) {\n          edges {\n            node {\n              ...product\n            }\n          }\n        }\n      }\n    }\n  }\n");

var handler$5 = {
  fetchOptions: {
    query: /*#__PURE__*/getAllProductsQuery.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _products, _products2;
      var input, options, fetch, categoryId, brandId, method, variables, products, _data$node, _data$node2, data, _data$products, _data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            categoryId = input.categoryId, brandId = input.brandId;
            method = options == null ? void 0 : options.method;
            variables = getSearchVariables(input);
            if (!categoryId) {
              _context.next = 11;
              break;
            }
            _context.next = 7;
            return fetch({
              query: getCollectionProductsQuery.toString(),
              method: method,
              variables: _extends({}, variables, {
                first: undefined
              })
            });
          case 7:
            data = _context.sent;
            // filter on client when brandId & categoryId are set since is not available on collection product query
            products = brandId ? (_data$node = data.node) == null || (_data$node = _data$node.products) == null || (_data$node = _data$node.edges) == null ? void 0 : _data$node.filter(function (_ref2) {
              var vendor = _ref2.node.vendor;
              return vendor.replace(/\s+/g, "-").toLowerCase() === ("" + brandId).toLowerCase();
            }).slice(0, input.count) : (_data$node2 = data.node) == null || (_data$node2 = _data$node2.products) == null ? void 0 : _data$node2.edges.slice(0, input.count);
            _context.next = 15;
            break;
          case 11:
            _context.next = 13;
            return fetch({
              query: options.query,
              method: method,
              variables: variables
            });
          case 13:
            _data = _context.sent;
            products = (_data$products = _data.products) == null ? void 0 : _data$products.edges;
          case 15:
            return _context.abrupt("return", {
              products: (_products = products) == null ? void 0 : _products.map(function (_ref3) {
                var node = _ref3.node;
                return normalizeProduct(node);
              }),
              found: !!((_products2 = products) != null && _products2.length)
            });
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref4) {
    var useData = _ref4.useData;
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

var getAllProductVendors = /*#__PURE__*/graphql("\n  query getAllProductVendors($first: Int = 250, $cursor: String) {\n    products(first: $first, after: $cursor) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          vendor\n        }\n        cursor\n      }\n    }\n  }\n");

var handler$6 = {
  fetchOptions: {
    query: /*#__PURE__*/getAllProductVendors.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var fetch, data, vendorsStrings;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch;
            _context.next = 3;
            return fetch({
              query: getAllProductVendors.toString(),
              variables: {
                first: 250
              }
            });
          case 3:
            data = _context.sent;
            vendorsStrings = data.products.edges.map(function (_ref2) {
              var vendor = _ref2.node.vendor;
              return vendor;
            });
            return _context.abrupt("return", Array.from(new Set(vendorsStrings).values()).map(function (v) {
              var id = v.replace(/\s+/g, "-").toLowerCase();
              return {
                entityId: id,
                name: v,
                path: "brands/" + id
              };
            }));
          case 6:
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

var getSiteCollectionsQuery = /*#__PURE__*/graphql("\n  query getSiteCollections($first: Int!) {\n    collections(first: $first) {\n      edges {\n        node {\n          ...collection\n          products(first: $first) {\n            edges {\n              node {\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n");

var getCollectionQueryById = /*#__PURE__*/graphql("\n  query getSiteCollection($id: ID, $handle: String, $first: Int = 1) {\n    collection(id: $id, handle: $handle) {\n      ...collection\n      products(first: $first) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n");

var handler$7 = {
  fetchOptions: {
    query: /*#__PURE__*/getSiteCollectionsQuery.toString()
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, options, fetch, categoryId, _data$collections$edg, _data$collections, data, _data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, options = _ref.options, fetch = _ref.fetch;
            categoryId = input.categoryId;
            if (categoryId) {
              _context.next = 9;
              break;
            }
            _context.next = 5;
            return fetch({
              query: options.query,
              variables: {
                first: 250
              }
            });
          case 5:
            data = _context.sent;
            return _context.abrupt("return", (_data$collections$edg = data == null || (_data$collections = data.collections) == null || (_data$collections = _data$collections.edges) == null ? void 0 : _data$collections.map(function (_ref2) {
              var node = _ref2.node;
              return normalizeCategory(node);
            })) != null ? _data$collections$edg : []);
          case 9:
            _context.next = 11;
            return fetch({
              query: getCollectionQueryById.toString(),
              variables: _extends({}, categoryId.startsWith("gid://") ? {
                id: categoryId
              } : {
                handle: categoryId
              })
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

var getShopifyProvider = function getShopifyProvider(storeDomain, accessToken) {
  return {
    locale: "en-us",
    cartCookie: SHOPIFY_CART_ID_COOKIE,
    cart: {
      useCart: handler,
      useAddItem: handler$1,
      useUpdateItem: handler$3,
      useRemoveItem: handler$2
    },
    fetcher: getFetcher(storeDomain, accessToken),
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

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/shopify/src
  Changes:
    - Added storeDomain and accessToken parameters.
*/
var useCommerce = function useCommerce() {
  return useCommerce$1();
};
var getCommerceProvider = function getCommerceProvider(storeDomain, accessToken) {
  return getCommerceProvider$1(getShopifyProvider(storeDomain, accessToken));
};

var globalContextName = "plasmic-commerce-shopify-provider";
var commerceProviderMeta = /*#__PURE__*/_extends({
  name: globalContextName,
  displayName: "Shopify Provider",
  props: {
    storeDomain: {
      type: "string",
      defaultValue: defaultStoreDomain
    },
    accessToken: {
      type: "string",
      defaultValue: defaultAccessToken
    }
  }
}, {
  globalActions: globalActionsRegistrations
}, {
  description: "Your store domain usually looks like **storename.myshopify.com**.\n\nFor your access token, get it by following [this video](https://www.youtube.com/watch?v=wB_6cM7tdv4).\n\nSee also the [getting started video](https://www.youtube.com/watch?v=1OJ_gXmta2Q).",
  importPath: "@plasmicpkgs/commerce-shopify",
  importName: "CommerceProviderComponent"
});
function CommerceProviderComponent(props) {
  var storeDomain = props.storeDomain,
    accessToken = props.accessToken,
    children = props.children;
  var CommerceProvider = React.useMemo(function () {
    return getCommerceProvider(storeDomain, accessToken);
  }, [storeDomain, accessToken]);
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
//# sourceMappingURL=commerce-shopify.esm.js.map
