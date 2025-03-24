'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var host = require('@plasmicapp/host');
var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = require('react');
var React__default = _interopDefault(React);
var reactScrollParallax = require('react-scroll-parallax');
var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var ResizeObserver = _interopDefault(require('resize-observer-polyfill'));

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

function ParallaxWrapper(_ref) {
  var speed = _ref.speed,
    disabled = _ref.disabled,
    previewInEditor = _ref.previewInEditor,
    children = _ref.children,
    className = _ref.className;
  var inEditor = React.useContext(host.PlasmicCanvasContext);
  var hasContext = React.useContext(reactScrollParallax.ParallaxContext) != null;
  var isServer = typeof window === "undefined";
  if (!hasContext && !isServer) {
    throw new Error("Scroll Parallax can only be instantiated somewhere inside the Parallax Provider");
  }
  return React__default.createElement(reactScrollParallax.Parallax, {
    disabled: disabled || inEditor && !previewInEditor,
    speed: speed,
    className: className
  }, children);
}
/**
 * We're keeping the old registration without attachments to avoid confusion
 * due to the parallax custom behavior not working in old projects that didn't
 * make use of global contexts (so simply adding the custom behavior would
 * break it and it wouldn't be clear that the user should also add a
 * `ParallaxProvider`).
 */
var deprecated_parallaxWrapperMeta = {
  name: "hostless-scroll-parallax",
  displayName: "Scroll Parallax",
  importName: "ParallaxWrapper",
  importPath: "@plasmicpkgs/react-scroll-parallax",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "img",
        src: "https://placekitten.com/300/200",
        styles: {
          maxWidth: "100%"
        }
      }
    },
    speed: {
      type: "number",
      description: "How much to speed up or slow down this element while scrolling. Try -20 for slower, 20 for faster.",
      defaultValue: 20
    },
    disabled: {
      type: "boolean",
      description: "Disables the parallax effect."
    },
    previewInEditor: {
      type: "boolean",
      description: "Enable the parallax effect in the editor."
    }
  },
  defaultStyles: {
    maxWidth: "100%"
  }
};
function deprecated_registerParallaxWrapper(loader, customParallaxWrapperMeta) {
  if (loader) {
    loader.registerComponent(ParallaxWrapper, customParallaxWrapperMeta != null ? customParallaxWrapperMeta : deprecated_parallaxWrapperMeta);
  } else {
    registerComponent(ParallaxWrapper, customParallaxWrapperMeta != null ? customParallaxWrapperMeta : deprecated_parallaxWrapperMeta);
  }
}
/**
 * The new registration is only setting `isAttachment: true`.
 */
var parallaxWrapperMeta = /*#__PURE__*/_extends({}, deprecated_parallaxWrapperMeta, {
  isAttachment: true
});
function registerParallaxWrapper(loader, customParallaxWrapperMeta) {
  if (loader) {
    loader.registerComponent(ParallaxWrapper, customParallaxWrapperMeta != null ? customParallaxWrapperMeta : parallaxWrapperMeta);
  } else {
    registerComponent(ParallaxWrapper, customParallaxWrapperMeta != null ? customParallaxWrapperMeta : parallaxWrapperMeta);
  }
}

var _excluded = ["children"];
/**
 * A safe wrapper around `useController()` to prevent errors when
 * `ParallaxProvider` is missing. If the context is unavailable,
 * `useController()` will throw an error, which we catch and handle
 * gracefully by returning `null` instead of crashing the component.
 */
function useSafeController() {
  try {
    return reactScrollParallax.useController();
  } catch (_unused) {
    return null; // Return null instead of throwing an error
  }
}
/**
 * This is required to ensure the parallax scrolling works correctly, since if
 * (for instance) images load after the parallax wrapper has calculated the
 * dimensions of the space, it will result in incorrect parallax scrolling
 * amounts.
 *
 * This is not great since we need to mutation-observe the whole section of the
 * document (which may be large), but we can probably optimize this in the
 * future.
 */
function ParallaxCacheUpdate(_ref) {
  var children = _ref.children;
  var parallaxController = useSafeController();
  var ref = React.useRef(null);
  React.useEffect(function () {
    var _ref$current;
    if ((_ref$current = ref.current) != null && _ref$current.parentElement) {
      var targetNode = ref.current.parentElement;
      var observer = new ResizeObserver(function () {
        if (parallaxController) {
          parallaxController.update();
        }
      });
      observer.observe(targetNode);
      return function () {
        observer.disconnect();
      };
    }
    return function () {};
  }, [ref.current]);
  return React__default.createElement("div", {
    style: {
      display: "contents"
    },
    ref: ref
  }, children);
}
function ParallaxProviderWrapper(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  return React__default.createElement(reactScrollParallax.ParallaxProvider, Object.assign({}, props), React__default.createElement(ParallaxCacheUpdate, null, children));
}
/**
 * @deprecated use `globalParallaxProviderMeta` instead.
 */
var parallaxProviderMeta = {
  name: "hostless-parallax-provider",
  displayName: "Parallax Provider",
  importName: "ParallaxProviderWrapper",
  importPath: "@plasmicpkgs/react-scroll-parallax",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: [{
          type: "text",
          value: "Wrap any element in a Scroll Parallax component. Ensure they're all inside this Parallax Provider. Example:",
          styles: {
            marginBottom: "20px"
          }
        }, {
          type: "component",
          name: "hostless-scroll-parallax"
        }]
      }
    },
    scrollAxis: {
      type: "choice",
      description: "Scroll axis for setting horizontal/vertical scrolling",
      options: ["vertical", "horizontal"],
      displayName: "Scroll Axis"
    }
  }
};
/**
 * @deprecated use `registerGlobalParallaxProvider` instead.
 */
function registerParallaxProvider(loader, customParallaxProviderMeta) {
  if (loader) {
    loader.registerComponent(ParallaxProviderWrapper, customParallaxProviderMeta != null ? customParallaxProviderMeta : parallaxProviderMeta);
  } else {
    registerComponent(ParallaxProviderWrapper, customParallaxProviderMeta != null ? customParallaxProviderMeta : parallaxProviderMeta);
  }
}
var globalParallaxProviderMeta = {
  name: "global-parallax-provider",
  displayName: "Parallax Provider",
  importName: "ParallaxProviderWrapper",
  importPath: "@plasmicpkgs/react-scroll-parallax",
  props: {
    scrollAxis: {
      type: "choice",
      description: "Scroll axis for setting horizontal/vertical scrolling",
      options: ["vertical", "horizontal"],
      displayName: "Scroll Axis"
    }
  }
};
function registerGlobalParallaxProvider(loader, customParallaxProviderMeta) {
  if (loader) {
    loader.registerGlobalContext(ParallaxProviderWrapper, customParallaxProviderMeta != null ? customParallaxProviderMeta : globalParallaxProviderMeta);
  } else {
    registerGlobalContext(ParallaxProviderWrapper, customParallaxProviderMeta != null ? customParallaxProviderMeta : globalParallaxProviderMeta);
  }
}

exports.ParallaxProviderWrapper = ParallaxProviderWrapper;
exports.ParallaxWrapper = ParallaxWrapper;
exports.deprecated_parallaxWrapperMeta = deprecated_parallaxWrapperMeta;
exports.deprecated_registerParallaxWrapper = deprecated_registerParallaxWrapper;
exports.globalParallaxProviderMeta = globalParallaxProviderMeta;
exports.parallaxProviderMeta = parallaxProviderMeta;
exports.parallaxWrapperMeta = parallaxWrapperMeta;
exports.registerGlobalParallaxProvider = registerGlobalParallaxProvider;
exports.registerParallaxProvider = registerParallaxProvider;
exports.registerParallaxWrapper = registerParallaxWrapper;
//# sourceMappingURL=react-scroll-parallax.cjs.development.js.map
