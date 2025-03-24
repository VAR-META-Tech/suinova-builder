'use strict';

var host = require('@plasmicapp/host');
var Document = require('@tiptap/extension-document');
var Paragraph = require('@tiptap/extension-paragraph');
var Text = require('@tiptap/extension-text');
var react = require('@tiptap/react');
var antd = require('antd');
var React = require('react');
var registerComponent = require('@plasmicapp/host/registerComponent');
require('@plasmicapp/host/registerGlobalContext');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Document__default = /*#__PURE__*/_interopDefault(Document);
var Paragraph__default = /*#__PURE__*/_interopDefault(Paragraph);
var Text__default = /*#__PURE__*/_interopDefault(Text);
var React__default = /*#__PURE__*/_interopDefault(React);
var registerComponent__default = /*#__PURE__*/_interopDefault(registerComponent);

const RESET_TIMEOUT_MS = 500;
const allExtensions = [
  "bold",
  "italic",
  "underline",
  "strike",
  "code",
  "link",
  "mention"
];
const TiptapContext = React__default.default.createContext(void 0);
const useTiptapContext = () => {
  const context = React__default.default.useContext(TiptapContext);
  if (!context) {
    throw new Error(
      "useTiptapContext must be used within a TiptapContextProvider"
    );
  }
  return context;
};
const TiptapContextProvider = ({ children }) => {
  const [bold, setBold] = React.useState(void 0);
  const [code, setCode] = React.useState(void 0);
  const [italic, setItalic] = React.useState(
    void 0
  );
  const [link, setLink] = React.useState(void 0);
  const [mention, setMention] = React.useState(
    void 0
  );
  const [strike, setStrike] = React.useState(
    void 0
  );
  const [underline, setUnderline] = React.useState(void 0);
  return /* @__PURE__ */ React__default.default.createElement(
    TiptapContext.Provider,
    {
      value: {
        bold,
        setBold,
        code,
        setCode,
        italic,
        setItalic,
        link,
        setLink,
        mention,
        /**
         * In situations where I want to remove an extension and add it again with new options (e.g. within a useEffect - see registerMention)
         * the options are not updated.
         * So after removing the extension, I want to wait a few seconds before I add it again,
         * so the Tiptap editor acknowledges the removal before it adds the extension back with new updated options.
         * @param mentionOptions
         * @returns
         */
        setMention: (mentionOptions) => {
          if (!mentionOptions) {
            setMention(mentionOptions);
            return;
          }
          setTimeout(() => {
            setMention(mentionOptions);
          }, RESET_TIMEOUT_MS);
        },
        strike,
        setStrike,
        underline,
        setUnderline
      }
    },
    children
  );
};

function useIsClient() {
  const [loaded, setLoaded] = React__default.default.useState(false);
  useIsomorphicLayoutEffect(() => {
    setLoaded(true);
  });
  return loaded;
}
const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? React__default.default.useLayoutEffect : React__default.default.useEffect;

function registerComponentHelper(loader, component, meta) {
  if (loader) {
    loader.registerComponent(component, meta);
  } else {
    registerComponent__default.default(component, meta);
  }
}
function traverseReactEltTree(children, callback) {
  const rec = (elts) => {
    (Array.isArray(elts) ? elts : [elts]).forEach((elt) => {
      var _a;
      if (elt) {
        callback(elt);
        if (elt.children) {
          rec(elt.children);
        }
        if (((_a = elt.props) == null ? void 0 : _a.children) && elt.props.children !== elt.children) {
          rec(elt.props.children);
        }
      }
    });
  };
  rec(children);
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TIPTAP_COMPONENT_NAME = "hostless-tiptap";
function Tiptap(props) {
  const isClient = useIsClient();
  const [active, setActive] = React.useState(false);
  const [refreshKey, setRefreshKey] = React.useState(0);
  const activeRef = React.useRef();
  activeRef.current = active;
  const {
    extensions,
    contentHtml,
    defaultContentJson,
    className,
    onChange,
    toolbar,
    useJson
  } = props;
  const tiptapContext = __objRest(useTiptapContext(), []);
  const usedExtensions = allExtensions.reduce(
    (acc, ext) => {
      if (tiptapContext[ext] !== void 0) {
        acc[ext] = tiptapContext[ext];
      }
      return acc;
    },
    {}
  );
  const extensionsProp = [
    Document__default.default,
    Paragraph__default.default,
    Text__default.default,
    ...Object.values(usedExtensions)
  ];
  const isCanvas = host.usePlasmicCanvasContext();
  const defaultContent = useJson ? defaultContentJson : contentHtml;
  React.useEffect(() => {
    if (activeRef.current)
      return;
    setRefreshKey(Math.random() * 1e6);
  }, [...isCanvas ? [defaultContent] : []]);
  if (!isClient) {
    return null;
  }
  const css = `
    .tiptap {
      padding: 0;
      outline: none;
    }
  `;
  const toolbarProp = toolbar ? /* @__PURE__ */ React__default.default.createElement("div", { style: { display: "flex", alignItems: "center" } }, toolbar) : null;
  return /* @__PURE__ */ React__default.default.createElement("div", { className, style: { position: "relative" } }, /* @__PURE__ */ React__default.default.createElement(
    react.EditorProvider,
    {
      extensions: extensionsProp,
      key: `${extensionsProp.length}${refreshKey}`,
      content: defaultContent,
      onCreate: ({ editor }) => {
        onChange(editor.getJSON());
      },
      onUpdate: ({ editor }) => {
        onChange(editor.getJSON());
      },
      onFocus: () => setActive(true),
      onBlur: () => setActive(false),
      slotBefore: toolbarProp,
      children: void 0,
      editorProps: {
        attributes: {
          className
        }
      }
    }
  ), extensions, /* @__PURE__ */ React__default.default.createElement("style", { dangerouslySetInnerHTML: { __html: css } }));
}
function TiptapWrapper(props) {
  return /* @__PURE__ */ React__default.default.createElement(TiptapContextProvider, null, /* @__PURE__ */ React__default.default.createElement(Tiptap, __spreadValues({}, props)));
}
function AddExtension({
  studioOps,
  componentProps
}) {
  const usedExtensions = React.useMemo(() => {
    const list = [];
    traverseReactEltTree(componentProps == null ? void 0 : componentProps.extensions, (elt) => {
      var _a, _b, _c;
      const ext = (_c = (_b = (_a = elt == null ? void 0 : elt.type) == null ? void 0 : _a.displayName) == null ? void 0 : _b.toLowerCase) == null ? void 0 : _c.call(_b);
      if (ext) {
        list.push(ext);
      }
    });
    return list;
  }, [componentProps == null ? void 0 : componentProps.extensions]);
  const usedExtensionTools = React.useMemo(() => {
    const list = [];
    traverseReactEltTree(componentProps == null ? void 0 : componentProps.toolbar, (elt) => {
      var _a, _b, _c;
      const ext = (_c = (_b = (_a = elt == null ? void 0 : elt.type) == null ? void 0 : _a.displayName) == null ? void 0 : _b.toLowerCase) == null ? void 0 : _c.call(_b);
      if (ext && ext.includes("toolbar")) {
        list.push(ext.replace("toolbar", ""));
      }
    });
    return list;
  }, [componentProps == null ? void 0 : componentProps.toolbar]);
  const handleChange = (extName, add) => {
    if (add) {
      studioOps.appendToSlot(
        {
          type: "component",
          name: `${TIPTAP_COMPONENT_NAME}-extension-${extName}`,
          props: {}
        },
        "extensions"
      );
      studioOps.appendToSlot(
        {
          type: "component",
          name: `${TIPTAP_COMPONENT_NAME}-toolbar-${extName}`,
          props: {}
        },
        "toolbar"
      );
    } else {
      const extIndices = usedExtensions.flatMap(
        (ext, i) => ext === extName ? i : []
      );
      extIndices.reverse().forEach(
        (i) => i !== -1 && studioOps.removeFromSlotAt(i, "extensions")
      );
      const toolIndices = usedExtensionTools.flatMap(
        (ext, i) => ext === extName ? i : []
      );
      toolIndices.reverse().forEach((i) => i !== -1 && studioOps.removeFromSlotAt(i, "toolbar"));
    }
  };
  return /* @__PURE__ */ React__default.default.createElement(
    "div",
    {
      style: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: "1px dashed #ccc"
      }
    },
    /* @__PURE__ */ React__default.default.createElement("p", null, "You can add capabilities to Tiptap Rich Text Editor using the tools below."),
    /* @__PURE__ */ React__default.default.createElement("p", null, `To further customize the extensions, find them under the Editor's "extensions" and "toolbar" slots`),
    allExtensions.map((ext) => /* @__PURE__ */ React__default.default.createElement(
      "label",
      {
        key: ext,
        "data-test-id": `custom-action-${ext}`,
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
          color: "#1b1b18"
        }
      },
      /* @__PURE__ */ React__default.default.createElement("span", null, ext),
      /* @__PURE__ */ React__default.default.createElement(
        antd.Switch,
        {
          size: "small",
          checked: usedExtensions.includes(ext) || usedExtensionTools.includes(ext),
          onChange: (checked) => handleChange(ext, checked)
        }
      )
    ))
  );
}
function registerTiptap(loader) {
  registerComponentHelper(loader, TiptapWrapper, {
    name: TIPTAP_COMPONENT_NAME,
    displayName: "Tiptap Rich Text Editor",
    defaultStyles: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgb(204,204,204)",
      borderRadius: "4px",
      padding: "10px",
      width: "300px"
    },
    actions: [
      {
        type: "custom-action",
        control: AddExtension
      }
    ],
    props: {
      useJson: {
        displayName: "Use JSON default content",
        type: "boolean",
        defaultValue: false
      },
      // a better naming for this would be defaultContentHtml, but we can't change the name anymore for backwards compatibility reasons (can't change the name of an existing prop)
      contentHtml: {
        type: "string",
        displayName: "HTML Content",
        description: "Provide default content as HTML",
        hidden: (ps) => ps.useJson
      },
      defaultContentJson: {
        type: "object",
        displayName: "JSON Content",
        description: "Provide default content as JSON",
        hidden: (ps) => !ps.useJson
      },
      // contentJson is exposed as state, and its not combined with defaultContentJson via "editOnly/uncontrolledProp" fields because
      // that pattern is for controlled components, while the wrapped component (EditorProvider) is an uncontrolled component.
      contentJson: {
        type: "object",
        hidden: () => true
      },
      extensions: {
        type: "slot",
        hidePlaceholder: true,
        allowedComponents: allExtensions.map(
          (ext) => `${TIPTAP_COMPONENT_NAME}-extension-${ext}`
        )
      },
      toolbar: {
        type: "slot",
        hidePlaceholder: true,
        allowedComponents: allExtensions.map(
          (ext) => `${TIPTAP_COMPONENT_NAME}-toolbar-${ext}`
        )
      },
      onChange: {
        type: "eventHandler",
        argTypes: [{ name: "content", type: "object" }]
      }
    },
    states: {
      content: {
        type: "writable",
        variableType: "object",
        valueProp: "contentJson",
        onChangeProp: "onChange"
      }
    },
    importName: "TiptapWrapper",
    importPath: "@plasmicpkgs/tiptap/skinny/registerTiptap"
  });
}

exports.AddExtension = AddExtension;
exports.TIPTAP_COMPONENT_NAME = TIPTAP_COMPONENT_NAME;
exports.Tiptap = Tiptap;
exports.TiptapWrapper = TiptapWrapper;
exports.registerComponentHelper = registerComponentHelper;
exports.registerTiptap = registerTiptap;
exports.useTiptapContext = useTiptapContext;
//# sourceMappingURL=registerTiptap-004bd7c8.cjs.js.map
