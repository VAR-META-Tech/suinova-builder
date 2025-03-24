import React, { useMemo } from 'react';
import registerComponent from '@plasmicapp/host/registerComponent';
import '@plasmicapp/host/registerGlobalContext';

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

function registerComponentHelper(loader, component, meta) {
  if (loader) {
    loader.registerComponent(component, meta);
  } else {
    registerComponent(component, meta);
  }
}

function useIsClient() {
  var _React$useState = React.useState(false),
    loaded = _React$useState[0],
    setLoaded = _React$useState[1];
  useIsomorphicLayoutEffect(function () {
    setLoaded(true);
  });
  return loaded;
}
var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

var _excluded = ["containerClassName", "toolbar", "customToolbar"];
var ReactQuill = typeof window !== "undefined" ? /*#__PURE__*/require("react-quill") : null;
var TEXT_STYLE_DICT = {
  bold: "bold",
  italic: "italic",
  underline: "underline",
  strikethrough: "strike"
};
var HEADING_TYPES_DICT = {
  "Heading 1": 1,
  "Heading 2": 2,
  "Heading 3": 3,
  "Heading 4": 4,
  "Heading 5": 5,
  "Heading 6": 6,
  Body: "normal"
};
var FONT_SIZES = ["small", "medium", "large", "huge"];
var COLOR_TYPE_DICT = {
  "text color": "color",
  "text background": "background"
};
var FORMATTING_TYPES_DICT = {
  alignment: "align",
  list: "list",
  indentation: "indent",
  "text direction": "direction",
  "clear formatting": "clean"
};
var INPUT_TYPES = ["link", "blockquote", "image", "video", "code-block", "formula"];
function Quill(props) {
  var isClient = useIsClient();
  var containerClassName = props.containerClassName,
    toolbar = props.toolbar,
    customToolbar = props.customToolbar,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var modules = useMemo(function () {
    if (customToolbar) {
      return {
        toolbar: customToolbar
      };
    }
    var textStyle = toolbar.textStyle,
      fontFamily = toolbar.fontFamily,
      heading = toolbar.heading,
      fontSizes = toolbar.fontSizes,
      colors = toolbar.colors,
      script = toolbar.script,
      formatting = toolbar.formatting,
      inputTypes = toolbar.inputTypes;
    var textStyleControls = Object.keys(TEXT_STYLE_DICT).filter(function (key) {
      return textStyle.includes(key);
    }).map(function (key) {
      return TEXT_STYLE_DICT[key];
    });
    var colorControls = Object.keys(COLOR_TYPE_DICT).filter(function (key) {
      return colors.includes(key);
    }).map(function (key) {
      var _ref;
      return _ref = {}, _ref[COLOR_TYPE_DICT[key]] = [], _ref;
    });
    var scriptControls = script ? [{
      script: "super"
    }, {
      script: "sub"
    }] : undefined;
    var fontControls = [fontFamily ? {
      font: []
    } : undefined, heading.length ? {
      header: Object.keys(HEADING_TYPES_DICT).filter(function (key) {
        return heading.includes(key);
      }).map(function (key) {
        return HEADING_TYPES_DICT[key];
      })
    } : undefined, fontSizes.length ? {
      size: FONT_SIZES.filter(function (fs) {
        return fontSizes.includes(fs);
      })
    } : undefined].filter(function (i) {
      return i;
    });
    var listControlsGroup = [];
    var indentationControlsGroup = [];
    var otherFormattingControlsGroup = [];
    formatting == null || formatting.map(function (f) {
      var _listControlsGroup$pu, _listControlsGroup$pu2, _otherFormattingContr, _indentationControlsG, _indentationControlsG2, _otherFormattingContr2;
      switch (f) {
        case "list":
          listControlsGroup.push((_listControlsGroup$pu = {}, _listControlsGroup$pu[FORMATTING_TYPES_DICT["list"]] = "ordered", _listControlsGroup$pu));
          listControlsGroup.push((_listControlsGroup$pu2 = {}, _listControlsGroup$pu2[FORMATTING_TYPES_DICT["list"]] = "bullet", _listControlsGroup$pu2));
          break;
        case "alignment":
          otherFormattingControlsGroup.push((_otherFormattingContr = {}, _otherFormattingContr[FORMATTING_TYPES_DICT["alignment"]] = [], _otherFormattingContr));
          break;
        case "indentation":
          indentationControlsGroup.push((_indentationControlsG = {}, _indentationControlsG[FORMATTING_TYPES_DICT["indentation"]] = "-1", _indentationControlsG));
          indentationControlsGroup.push((_indentationControlsG2 = {}, _indentationControlsG2[FORMATTING_TYPES_DICT["indentation"]] = "+1", _indentationControlsG2));
          break;
        case "text direction":
          otherFormattingControlsGroup.push((_otherFormattingContr2 = {}, _otherFormattingContr2[FORMATTING_TYPES_DICT["text direction"]] = "rtl", _otherFormattingContr2));
          break;
        case "clear formatting":
          otherFormattingControlsGroup.push(FORMATTING_TYPES_DICT["clear formatting"]);
          break;
      }
    });
    var otherInputControls = inputTypes.length ? INPUT_TYPES.filter(function (inp) {
      return inputTypes.includes(inp);
    }) : undefined;
    return {
      toolbar: [textStyleControls, colorControls, scriptControls, fontControls, listControlsGroup, indentationControlsGroup, otherFormattingControlsGroup, otherInputControls].filter(function (i) {
        return i == null ? void 0 : i.length;
      })
    };
  }, [toolbar, customToolbar]);
  var key = useMemo(function () {
    return JSON.stringify(modules) + String(rest.preserveWhitespace);
  }, [rest.preserveWhitespace, modules]);
  if (!isClient) {
    return null;
  }
  return React.createElement("div", {
    className: containerClassName
  }, React.createElement(ReactQuill, Object.assign({
    key: key,
    modules: modules
  }, rest)));
}
var quillHelpers = {
  states: {
    value: {
      onChangeArgsToValue: function onChangeArgsToValue(content, _delta, _source, _editor) {
        return content;
      }
    }
  }
};
var toolbarFields = {
  textStyle: {
    type: "choice",
    multiSelect: true,
    options: /*#__PURE__*/Object.keys(TEXT_STYLE_DICT),
    defaultValue: /*#__PURE__*/Object.keys(TEXT_STYLE_DICT)
  },
  colors: {
    type: "choice",
    multiSelect: true,
    options: /*#__PURE__*/Object.keys(COLOR_TYPE_DICT),
    defaultValue: /*#__PURE__*/Object.keys(COLOR_TYPE_DICT)
  },
  script: {
    displayName: "Super/Sub Script",
    type: "boolean",
    defaultValue: true
  },
  fontFamily: {
    type: "boolean",
    defaultValue: true
  },
  heading: {
    type: "choice",
    multiSelect: true,
    options: /*#__PURE__*/Object.keys(HEADING_TYPES_DICT),
    defaultValue: /*#__PURE__*/Object.keys(HEADING_TYPES_DICT)
  },
  fontSizes: {
    type: "choice",
    multiSelect: true,
    options: FONT_SIZES,
    defaultValue: FONT_SIZES
  },
  formatting: {
    type: "choice",
    multiSelect: true,
    options: /*#__PURE__*/Object.keys(FORMATTING_TYPES_DICT),
    defaultValue: /*#__PURE__*/Object.keys(FORMATTING_TYPES_DICT)
  },
  inputTypes: {
    type: "choice",
    multiSelect: true,
    options: INPUT_TYPES,
    defaultValue: INPUT_TYPES
  }
};
function registerQuill(loader) {
  registerComponentHelper(loader, Quill, {
    name: "hostless-react-quill",
    displayName: "Rich Text Editor",
    classNameProp: "containerClassName",
    defaultStyles: {
      width: "stretch"
    },
    props: {
      value: {
        type: "string",
        displayName: "HTML Value",
        editOnly: true,
        uncontrolledProp: "defaultValue",
        description: "Contents of the editor"
      },
      toolbar: {
        type: "object",
        fields: _extends({}, toolbarFields),
        defaultValue: Object.keys(toolbarFields).reduce(function (acc, key) {
          acc[key] = toolbarFields[key].defaultValue;
          return acc;
        }, {}),
        description: "Customize the toolbar to show/hide controls"
      },
      customToolbar: {
        type: "array",
        advanced: true,
        description: "Custom toolbar configuration for Quill editor. Overrides the existing toolbar.",
        helpText: "Check toolbarOptions here: https://quilljs.com/docs/modules/toolbar"
      },
      placeholder: "string",
      preserveWhitespace: {
        type: "boolean",
        description: "Prevents Quill from collapsing continuous whitespaces on paste",
        advanced: true,
        defaultValue: true
      },
      readOnly: {
        type: "boolean",
        description: "Prevents user from changing the contents of the editor",
        defaultValue: false,
        advanced: true
      },
      onChange: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "content",
          type: "string"
        }, {
          name: "delta",
          type: "object"
        }, {
          name: "source",
          type: "string"
        }, {
          name: "editor",
          type: "object"
        }]
      },
      onChangeSelection: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "range",
          type: "object"
        }, {
          name: "source",
          type: "string"
        }, {
          name: "editor",
          type: "object"
        }]
      },
      onFocus: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "range",
          type: "object"
        }, {
          name: "source",
          type: "string"
        }, {
          name: "editor",
          type: "object"
        }]
      },
      onBlur: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "previousRange",
          type: "object"
        }, {
          name: "source",
          type: "string"
        }, {
          name: "editor",
          type: "object"
        }]
      },
      onKeyPress: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "event",
          type: "object"
        }]
      },
      onKeyDown: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "event",
          type: "object"
        }]
      },
      onKeyUp: {
        type: "eventHandler",
        advanced: true,
        argTypes: [{
          name: "event",
          type: "object"
        }]
      }
    },
    states: {
      value: _extends({
        type: "writable",
        valueProp: "value",
        onChangeProp: "onChange",
        variableType: "text"
      }, quillHelpers.states.value)
    },
    componentHelpers: {
      helpers: quillHelpers,
      importName: "quillHelpers",
      importPath: "@plasmicpkgs/react-quill"
    },
    importName: "Quill",
    importPath: "@plasmicpkgs/react-quill"
  });
}

export { Quill, quillHelpers, registerQuill };
//# sourceMappingURL=react-quill.esm.js.map
