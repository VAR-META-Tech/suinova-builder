'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var host = require('@plasmicapp/host');
var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var Lottie = _interopDefault(require('lottie-react'));
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

var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? React__default.useLayoutEffect : React__default.useEffect;
function useIsClient() {
  var _React$useState = React__default.useState(false),
    loaded = _React$useState[0],
    setLoaded = _React$useState[1];
  useIsomorphicLayoutEffect(function () {
    setLoaded(true);
  }, []);
  return loaded;
}
var CheckExample = {
  v: "4.10.1",
  fr: 30,
  ip: 0,
  op: 40,
  w: 80,
  h: 80,
  nm: "Success Checkmark",
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Check Mark",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [40, 40, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [-1.312, 6, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: "gr",
      it: [{
        ind: 0,
        ty: "sh",
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [0, 0], [0, 0]],
            o: [[0, 0], [0, 0], [0, 0]],
            v: [[-15.75, 8], [-8, 16], [13.125, -4]],
            c: false
          },
          ix: 2
        },
        nm: "Path 1",
        mn: "ADBE Vector Shape - Group",
        hd: false
      }, {
        ty: "tm",
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            n: ["0p667_1_0p333_0"],
            t: 25,
            s: [0],
            e: [100]
          }, {
            t: 33
          }],
          ix: 1
        },
        e: {
          a: 0,
          k: 0,
          ix: 2
        },
        o: {
          a: 0,
          k: 0,
          ix: 3
        },
        m: 1,
        ix: 2,
        nm: "Trim Paths 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }, {
        ty: "st",
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 3,
          ix: 5
        },
        lc: 2,
        lj: 2,
        nm: "Stroke 1",
        mn: "ADBE Vector Graphic - Stroke",
        hd: false
      }, {
        ty: "tr",
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: "Transform"
      }],
      nm: "Shape 1",
      np: 3,
      cix: 2,
      ix: 1,
      mn: "ADBE Vector Group",
      hd: false
    }],
    ip: 0,
    op: 40,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Circle Flash",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          n: ["0p833_0p833_0p167_0p167"],
          t: 25,
          s: [0],
          e: [98]
        }, {
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          n: ["0p833_0p833_0p167_0p167"],
          t: 30,
          s: [98],
          e: [0]
        }, {
          t: 38
        }],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [40, 40, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
          t: 25,
          s: [0, 0, 100],
          e: [100, 100, 100]
        }, {
          t: 30
        }],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      d: 1,
      ty: "el",
      s: {
        a: 0,
        k: [64, 64],
        ix: 2
      },
      p: {
        a: 0,
        k: [0, 0],
        ix: 3
      },
      nm: "Ellipse Path 1",
      mn: "ADBE Vector Shape - Ellipse",
      hd: false
    }, {
      ty: "fl",
      c: {
        a: 0,
        k: [0.529866635799, 0.961458325386, 0.448091417551, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      nm: "Fill 1",
      mn: "ADBE Vector Graphic - Fill",
      hd: false
    }],
    ip: 0,
    op: 40,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Circle Stroke",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [39.022, 39.022, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
          t: 16,
          s: [100, 100, 100],
          e: [80, 80, 100]
        }, {
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
          t: 22,
          s: [80, 80, 100],
          e: [120, 120, 100]
        }, {
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
          t: 25,
          s: [120, 120, 100],
          e: [100, 100, 100]
        }, {
          t: 29
        }],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: "gr",
      it: [{
        d: 1,
        ty: "el",
        s: {
          a: 0,
          k: [60, 60],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        nm: "Ellipse Path 1",
        mn: "ADBE Vector Shape - Ellipse",
        hd: false
      }, {
        ty: "tm",
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            n: ["0p667_1_0p333_0"],
            t: 0,
            s: [0],
            e: [100]
          }, {
            t: 16
          }],
          ix: 1
        },
        e: {
          a: 0,
          k: 0,
          ix: 2
        },
        o: {
          a: 0,
          k: 0,
          ix: 3
        },
        m: 1,
        ix: 2,
        nm: "Trim Paths 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }, {
        ty: "st",
        c: {
          a: 0,
          k: [0.427450984716, 0.800000011921, 0.35686275363, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 3,
          ix: 5
        },
        lc: 2,
        lj: 2,
        nm: "Stroke 1",
        mn: "ADBE Vector Graphic - Stroke",
        hd: false
      }, {
        ty: "tr",
        p: {
          a: 0,
          k: [0.978, 0.978],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: "Transform"
      }],
      nm: "Ellipse 1",
      np: 3,
      cix: 2,
      ix: 1,
      mn: "ADBE Vector Group",
      hd: false
    }],
    ip: 0,
    op: 40,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Circle Green Fill",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          n: ["0p833_0p833_0p167_0p167"],
          t: 21,
          s: [0],
          e: [98]
        }, {
          t: 28
        }],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [40, 40, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
          t: 21,
          s: [0, 0, 100],
          e: [100, 100, 100]
        }, {
          t: 28
        }],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      d: 1,
      ty: "el",
      s: {
        a: 0,
        k: [64, 64],
        ix: 2
      },
      p: {
        a: 0,
        k: [0, 0],
        ix: 3
      },
      nm: "Ellipse Path 1",
      mn: "ADBE Vector Shape - Ellipse",
      hd: false
    }, {
      ty: "fl",
      c: {
        a: 0,
        k: [0.427450984716, 0.800000011921, 0.35686275363, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      nm: "Fill 1",
      mn: "ADBE Vector Graphic - Fill",
      hd: false
    }],
    ip: 0,
    op: 40,
    st: 0,
    bm: 0
  }]
};
function LottieWrapper(_ref) {
  var className = _ref.className,
    animationData = _ref.animationData,
    interactivity = _ref.interactivity,
    _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? true : _ref$loop,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
    _ref$preview = _ref.preview,
    preview = _ref$preview === void 0 ? false : _ref$preview;
  var inEditor = React.useContext(host.PlasmicCanvasContext);
  var isClient = useIsClient();
  if (!isClient) {
    return null;
  }
  if (!animationData) {
    throw new Error("animationData is required");
  }
  return React__default.createElement(React__default.Suspense, {
    fallback: React__default.createElement(React__default.Fragment, null)
  }, React__default.createElement(Lottie, {
    className: className,
    animationData: animationData,
    interactivity: interactivity,
    loop: loop,
    autoplay: inEditor ? preview : autoplay
  }));
}
var PROMISE_CACHE = {};
var DATA_CACHE = {};
function fetchAnimationData(_x) {
  return _fetchAnimationData.apply(this, arguments);
}
function _fetchAnimationData() {
  _fetchAnimationData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(url in DATA_CACHE)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", DATA_CACHE[url]);
        case 4:
          if (!(url in PROMISE_CACHE)) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", PROMISE_CACHE[url]);
        case 8:
          PROMISE_CACHE[url] = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var resp, json;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(url);
                case 2:
                  resp = _context.sent;
                  if (resp.ok) {
                    _context.next = 5;
                    break;
                  }
                  throw new Error("Error downloading Lottie animation from " + url + ": " + resp.statusText);
                case 5:
                  _context.next = 7;
                  return resp.json();
                case 7:
                  json = _context.sent;
                  // Only delete from PROMISE_CACHE upon success
                  delete PROMISE_CACHE[url];
                  return _context.abrupt("return", json);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          return _context2.abrupt("return", PROMISE_CACHE[url]);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchAnimationData.apply(this, arguments);
}
function AsyncLottieWrapper(_ref2) {
  var className = _ref2.className,
    animationUrl = _ref2.animationUrl,
    interactivity = _ref2.interactivity,
    _ref2$loop = _ref2.loop,
    loop = _ref2$loop === void 0 ? true : _ref2$loop,
    _ref2$autoplay = _ref2.autoplay,
    autoplay = _ref2$autoplay === void 0 ? true : _ref2$autoplay,
    _ref2$preview = _ref2.preview,
    preview = _ref2$preview === void 0 ? false : _ref2$preview;
  var inEditor = React.useContext(host.PlasmicCanvasContext);
  var _React$useState2 = React__default.useState(animationUrl ? DATA_CACHE[animationUrl] : undefined),
    data = _React$useState2[0],
    setData = _React$useState2[1];
  var _React$useState3 = React__default.useState(undefined),
    error = _React$useState3[0],
    setError = _React$useState3[1];
  React__default.useEffect(function () {
    if (animationUrl) {
      fetchAnimationData(animationUrl).then(function (res) {
        setData(res);
      }, function (err) {
        setError(err);
      });
    }
  }, [animationUrl]);
  var isClient = useIsClient();
  if (!isClient) {
    return null;
  }
  if (!animationUrl) {
    throw new Error("animationUrl is required");
  }
  if (error) {
    throw error;
  }
  if (!data) {
    return React__default.createElement("div", {
      className: className
    });
  } else {
    return React__default.createElement(Lottie, {
      className: className,
      animationData: data,
      interactivity: interactivity,
      loop: loop,
      autoplay: inEditor ? preview : autoplay
    });
  }
}
function registerLottieWrapper(loader) {
  var commonProps = {
    interactivity: {
      type: "object",
      description: "Animation interactivity JSON data",
      helpText: "For more information on interactivity, visit the Lottie React [documentation](https://lottiereact.com/components/Lottie#interactivity-1)"
    },
    loop: {
      type: "boolean",
      description: "Whether to loop the animation",
      defaultValueHint: true
    },
    autoplay: {
      type: "boolean",
      description: "Whether to autoplay the animation",
      defaultValueHint: true
    },
    preview: {
      type: "boolean",
      description: "Whether to preview the animation in the editor",
      defaultValueHint: false
    }
  };
  var register = function register(component, meta) {
    if (loader) {
      loader.registerComponent(component, meta);
    } else {
      registerComponent(component, meta);
    }
  };
  register(LottieWrapper, {
    name: "hostless-lottie-react",
    displayName: "Lottie",
    importName: "LottieWrapper",
    importPath: "@plasmicpkgs/lottie-react",
    props: _extends({
      animationData: {
        type: "object",
        description: "The animation JSON data",
        defaultValue: CheckExample
      }
    }, commonProps)
  });
  register(AsyncLottieWrapper, {
    name: "hostless-lottie-async-react",
    displayName: "Lottie Async",
    importName: "AsyncLottieWrapper",
    importPath: "@plasmicpkgs/lottie-react",
    props: _extends({
      animationUrl: {
        displayName: "Animation URL",
        type: "string",
        description: "URL from which to download Lottie JSON data"
      }
    }, commonProps)
  });
}

exports.AsyncLottieWrapper = AsyncLottieWrapper;
exports.CheckExample = CheckExample;
exports.LottieWrapper = LottieWrapper;
exports.registerLottieWrapper = registerLottieWrapper;
//# sourceMappingURL=lottie-react.cjs.development.js.map
