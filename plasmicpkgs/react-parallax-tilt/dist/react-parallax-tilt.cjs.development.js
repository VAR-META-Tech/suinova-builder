'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = _interopDefault(require('react'));
var ReactParallaxTilt = _interopDefault(require('react-parallax-tilt'));

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function Tilt(props) {
  var _props$style;
  return React.createElement(ReactParallaxTilt, Object.assign({}, props, {
    style: _extends({
      transformStyle: "preserve-3d"
    }, (_props$style = props.style) != null ? _props$style : {})
  }));
}
var parallaxTiltMeta = {
  name: "hostless-parallax-tilt",
  displayName: "Tilt",
  importName: "Tilt",
  importPath: "@plasmicpkgs/react-parallax-tilt",
  isAttachment: true,
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
    tiltEnable: {
      type: "boolean",
      defaultValueHint: true,
      description: "Enable tilt effect",
      displayName: "Enable"
    },
    tiltReverse: {
      type: "boolean",
      defaultValueHint: false,
      description: "Reverse tilt direction",
      displayName: "Reverse"
    },
    tiltAngleXInitial: {
      type: "number",
      defaultValueHint: 0,
      description: "Initial tilt angle in degrees on X axis",
      displayName: "Angle X Initial"
    },
    tiltAngleYInitial: {
      type: "number",
      defaultValueHint: 0,
      description: "Initial tilt angle in degrees on Y axis",
      displayName: "Angle Y Initial"
    },
    tiltMaxAngleX: {
      type: "number",
      defaultValueHint: 20,
      description: "Maximum tilt angle in degrees on X axis",
      displayName: "Max Angle X"
    },
    tiltMaxAngleY: {
      type: "number",
      defaultValueHint: 20,
      description: "Maximum tilt angle in degrees on Y axis",
      displayName: "Max Angle Y"
    },
    tiltAxis: {
      type: "choice",
      options: ["x", "y"],
      description: "Which axis should be enabled",
      defaultValueHint: "both",
      displayName: "Axis"
    },
    glareEnable: {
      type: "boolean",
      defaultValueHint: false,
      description: "Enable glare effect",
      displayName: "Glare Enable"
    },
    glareMaxOpacity: {
      type: "number",
      defaultValueHint: 0.7,
      description: "Maximum opacity of glare effect",
      displayName: "Glare Max Opacity",
      hidden: function hidden(props) {
        return !props.glareEnable;
      }
    },
    glareColor: {
      // TODO replace with color picker
      type: "string",
      defaultValueHint: "#ffffff",
      description: "Color of glare effect",
      displayName: "Glare Color",
      hidden: function hidden(props) {
        return !props.glareEnable;
      }
    },
    glareBorderRadius: {
      type: "string",
      defaultValueHint: "0",
      description: "Border radius of glare effect",
      displayName: "Glare Border Radius",
      hidden: function hidden(props) {
        return !props.glareEnable;
      }
    },
    glarePosition: {
      type: "choice",
      options: ["top", "bottom", "left", "right", "all"],
      defaultValueHint: "bottom",
      description: "Position of the glare effect",
      displayName: "Glare Position",
      hidden: function hidden(props) {
        return !props.glareEnable;
      }
    },
    glareReverse: {
      type: "boolean",
      defaultValueHint: false,
      description: "Reverse glare direction",
      displayName: "Glare Reverse",
      hidden: function hidden(props) {
        return !props.glareEnable;
      }
    },
    scale: {
      type: "number",
      defaultValueHint: 1,
      description: "Scale of the element",
      displayName: "Scale"
    },
    perspective: {
      type: "number",
      defaultValueHint: 1000,
      description: "The perspective property defines how far the object (wrapped/child component) is away from the user. The lower the more extreme the tilt gets.",
      displayName: "Perspective"
    },
    flipVertically: {
      type: "boolean",
      defaultValueHint: false,
      description: "Flip the element vertically",
      displayName: "Flip Vertically"
    },
    flipHorizontally: {
      type: "boolean",
      defaultValueHint: false,
      description: "Flip the element horizontally",
      displayName: "Flip Horizontally"
    },
    reset: {
      type: "boolean",
      defaultValueHint: false,
      description: "Reset the element to its original state",
      displayName: "Reset"
    },
    transitionEasing: {
      type: "string",
      defaultValueHint: "cubic-bezier(.03,.98,.52,.99)",
      description: "Easing function for the transition",
      displayName: "Transition Easing"
    },
    transitionSpeed: {
      type: "number",
      defaultValueHint: 400,
      description: "Transition speed in milliseconds",
      displayName: "Transition Speed"
    },
    trackOnWindow: {
      type: "boolean",
      defaultValueHint: false,
      description: "Track the mouse position on the whole window, not just on the element",
      displayName: "Track On Window"
    },
    gyroscope: {
      type: "boolean",
      defaultValueHint: false,
      description: "Enable device orientation detection",
      displayName: "Gyroscope"
    }
  },
  isDefaultExport: true,
  defaultStyles: {
    maxWidth: "100%"
  }
};
function registerTilt(loader, customTiltMeta) {
  if (loader) {
    loader.registerComponent(Tilt, customTiltMeta != null ? customTiltMeta : parallaxTiltMeta);
  } else {
    registerComponent(Tilt, customTiltMeta != null ? customTiltMeta : parallaxTiltMeta);
  }
}

exports.default = Tilt;
exports.registerTilt = registerTilt;
//# sourceMappingURL=react-parallax-tilt.cjs.development.js.map
