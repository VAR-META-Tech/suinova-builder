import TiptapBold from '@tiptap/extension-bold';
import React, { useState, useMemo, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { usePlasmicCanvasContext, DataProvider, repeatedElement } from '@plasmicapp/host';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorProvider, ReactRenderer, useCurrentEditor } from '@tiptap/react';
import { Switch } from 'antd';
import registerComponent from '@plasmicapp/host/registerComponent';
import '@plasmicapp/host/registerGlobalContext';
import TiptapCode from '@tiptap/extension-code';
import TiptapItalic from '@tiptap/extension-italic';
import TiptapLink from '@tiptap/extension-link';
import TiptapMention from '@tiptap/extension-mention';
import tippy from 'tippy.js';
import TiptapStrike from '@tiptap/extension-strike';
import TiptapUnderline from '@tiptap/extension-underline';

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
const TiptapContext = React.createContext(void 0);
const useTiptapContext = () => {
  const context = React.useContext(TiptapContext);
  if (!context) {
    throw new Error(
      "useTiptapContext must be used within a TiptapContextProvider"
    );
  }
  return context;
};
const TiptapContextProvider = ({ children }) => {
  const [bold, setBold] = useState(void 0);
  const [code, setCode] = useState(void 0);
  const [italic, setItalic] = useState(
    void 0
  );
  const [link, setLink] = useState(void 0);
  const [mention, setMention] = useState(
    void 0
  );
  const [strike, setStrike] = useState(
    void 0
  );
  const [underline, setUnderline] = useState(void 0);
  return /* @__PURE__ */ React.createElement(
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
  const [loaded, setLoaded] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    setLoaded(true);
  });
  return loaded;
}
const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

function registerComponentHelper(loader, component, meta) {
  if (loader) {
    loader.registerComponent(component, meta);
  } else {
    registerComponent(component, meta);
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

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TIPTAP_COMPONENT_NAME = "hostless-tiptap";
function Tiptap(props) {
  const isClient = useIsClient();
  const [active, setActive] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const activeRef = useRef();
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
    Document,
    Paragraph,
    Text,
    ...Object.values(usedExtensions)
  ];
  const isCanvas = usePlasmicCanvasContext();
  const defaultContent = useJson ? defaultContentJson : contentHtml;
  useEffect(() => {
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
  const toolbarProp = toolbar ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center" } }, toolbar) : null;
  return /* @__PURE__ */ React.createElement("div", { className, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    EditorProvider,
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
  ), extensions, /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: css } }));
}
function TiptapWrapper(props) {
  return /* @__PURE__ */ React.createElement(TiptapContextProvider, null, /* @__PURE__ */ React.createElement(Tiptap, __spreadValues$1({}, props)));
}
function AddExtension({
  studioOps,
  componentProps
}) {
  const usedExtensions = useMemo(() => {
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
  const usedExtensionTools = useMemo(() => {
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: "1px dashed #ccc"
      }
    },
    /* @__PURE__ */ React.createElement("p", null, "You can add capabilities to Tiptap Rich Text Editor using the tools below."),
    /* @__PURE__ */ React.createElement("p", null, `To further customize the extensions, find them under the Editor's "extensions" and "toolbar" slots`),
    allExtensions.map((ext) => /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement("span", null, ext),
      /* @__PURE__ */ React.createElement(
        Switch,
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

function Bold(props) {
  const { setBold } = useTiptapContext();
  useEffect(() => {
    setBold(
      TiptapBold.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setBold(void 0);
    };
  }, []);
  return null;
}
Bold.displayName = "Bold";
function registerBold(loader) {
  registerComponentHelper(loader, Bold, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-bold`,
    displayName: "Tiptap Bold",
    props: {},
    importName: "Bold",
    importPath: "@plasmicpkgs/tiptap/skinny/registerBold",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function Code(props) {
  const { setCode } = useTiptapContext();
  useEffect(() => {
    setCode(
      TiptapCode.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setCode(void 0);
    };
  }, []);
  return null;
}
Code.displayName = "Code";
function registerCode(loader) {
  registerComponentHelper(loader, Code, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-code`,
    displayName: "Tiptap Code",
    props: {},
    importName: "Code",
    importPath: "@plasmicpkgs/tiptap/skinny/registerCode",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function Italic(props) {
  const { setItalic } = useTiptapContext();
  useEffect(() => {
    setItalic(
      TiptapItalic.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setItalic(void 0);
    };
  }, []);
  return null;
}
Italic.displayName = "Italic";
function registerItalic(loader) {
  registerComponentHelper(loader, Italic, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-italic`,
    displayName: "Tiptap Italic",
    props: {},
    importName: "Italic",
    importPath: "@plasmicpkgs/tiptap/skinny/registerItalic",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function Link(props) {
  const { setLink } = useTiptapContext();
  useEffect(() => {
    setLink(
      TiptapLink.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setLink(void 0);
    };
  }, []);
  return null;
}
Link.displayName = "Link";
function registerLink(loader) {
  registerComponentHelper(loader, Link, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-link`,
    displayName: "Tiptap Link",
    props: {},
    importName: "Link",
    importPath: "@plasmicpkgs/tiptap/skinny/registerLink",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

var MentionList = forwardRef(
  (props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const {
      items = [],
      suggestionItem,
      searchField,
      popupClassName,
      itemClassName,
      selectedItemClassName
    } = props;
    const selectItem = (index) => {
      var _a;
      const item = items[index];
      if (item) {
        (_a = props.command) == null ? void 0 : _a.call(props, { id: item[searchField] });
      }
    };
    const upHandler = () => {
      setSelectedIndex((selectedIndex + (items == null ? void 0 : items.length) - 1) % items.length);
    };
    const downHandler = () => {
      setSelectedIndex((selectedIndex + 1) % items.length);
    };
    const enterHandler = () => {
      selectItem(selectedIndex);
    };
    useEffect(() => setSelectedIndex(0), [items]);
    useImperativeHandle(ref, () => ({
      onKeyDown: (event) => {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }
        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }
        if (event.key === "Enter") {
          enterHandler();
          return true;
        }
        return false;
      }
    }));
    const css = `
    .SuggestionsList {
        background: #eee;
        position: relative;
        border-radius: 0.5rem;

      & .item {
        display: block;
        width: 100%;

        & .is-selected {
          color: purple;
        }
      }
    }

    `;
    const hasSuggestionItemSlot = suggestionItem == null ? void 0 : suggestionItem.props.children;
    return /* @__PURE__ */ React.createElement("div", { className: `SuggestionsList` }, /* @__PURE__ */ React.createElement("div", { className: popupClassName }, props.items.length ? props.items.map((item, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        role: "button",
        className: `item`,
        key: index,
        onClick: () => selectItem(index)
      },
      /* @__PURE__ */ React.createElement(
        DataProvider,
        {
          key: item[searchField],
          name: "suggestionItem",
          data: item
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `${itemClassName} ${index === selectedIndex ? "is-selected" : ""}`
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: index === selectedIndex ? selectedItemClassName : ""
            },
            hasSuggestionItemSlot ? repeatedElement(index === 0, suggestionItem) : item[searchField]
          )
        )
      )
    )) : /* @__PURE__ */ React.createElement("div", { className: "item" }, "No result")), /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: css } }));
  }
);

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
function Mention(props) {
  const {
    dataStatic = [],
    dataDynamic,
    hasDataDynamic,
    suggestionItem,
    searchField = "id",
    popupClassName,
    itemClassName,
    selectedItemClassName,
    mentionClassName,
    maxSuggestionCount = 5
  } = props;
  const dataDynamicRef = useRef(dataDynamic);
  const hasDataDynamicRef = useRef(hasDataDynamic);
  const maxSuggestionCountRef = useRef(maxSuggestionCount);
  dataDynamicRef.current = dataDynamic;
  hasDataDynamicRef.current = hasDataDynamic;
  maxSuggestionCountRef.current = maxSuggestionCount;
  const { setMention } = useTiptapContext();
  useEffect(() => {
    setMention(
      TiptapMention.configure({
        HTMLAttributes: {
          class: mentionClassName
        },
        renderLabel: ({ options, node }) => {
          return `${options.suggestion.char}${node.attrs.id}`;
        },
        suggestion: {
          /**
           * This function below only does static filtering. It can't give query parameters to the Plasmic query for filtering at the server side to avoid some complexities.
           *
           * Before we move on to the issues, lets first explain how it could have supported server-side filtering via query params:
           * - The user creates a plasmic query to fetch the suggestions. These suggestions are filtered by some query parameter. The value of the query parameter is bound to the currentMention state.
           *
           * - When the user types `@abc` for example, the following async function `items` is triggered. It knows the query and returns the new set of suggestions. The returned array is rendered in the suggestions popup
           *
           * Issues:
           * 1. Stale Query issue:
           * The same async function is responsible for setting the currentMention state, and also return the new suggestion results. We can't await the Plasmic query after it is triggered by the currentMention state change. So query results it has are stale.
           *
           * Solution: We poll the Plasmic query's isLoading field (indefinitely)
           *
           * For simplicity, therefore, we are just supporting static filtering for now, and may consider the approach highlighted above for filtering via query params.
           *
           * 2. The async function is provided at the time of extension initialization. That async function only knows the state/props in its render cycle, so these props are outdated at the time the async function is triggered.
           *
           * We can't put all of them in the useEffect dependencies array, because change in any of them will cause the Mention extension to be removed/re-added, resulting in a flicker on every keystroke + lost input focus (which causes the suggestion popup to never show)
           *
           * Solution: Use refs
           *
           * @param param0
           * @returns
           */
          items: ({ query }) => {
            var _a, _b;
            if (!query)
              return [];
            if (!hasDataDynamicRef.current) {
              const res = (dataStatic == null ? void 0 : dataStatic.filter(
                (item) => {
                  var _a2, _b2, _c;
                  return (_c = (_b2 = (_a2 = item[searchField]).toLowerCase) == null ? void 0 : _b2.call(_a2)) == null ? void 0 : _c.includes(query.toLowerCase());
                }
              ).slice(0, maxSuggestionCountRef.current)) || [];
              return res;
            }
            if (!dataDynamicRef.current)
              return [];
            if (((_a = dataDynamicRef.current) == null ? void 0 : _a.isLoading) === false) {
              const data = (_b = dataDynamicRef.current.data) == null ? void 0 : _b.response;
              if (!Array.isArray(data))
                return [];
              return (data == null ? void 0 : data.filter(
                (item) => {
                  var _a2, _b2, _c;
                  return (_c = (_b2 = (_a2 = item[searchField]).toLowerCase) == null ? void 0 : _b2.call(_a2)) == null ? void 0 : _c.includes(query.toLowerCase());
                }
              ).slice(0, maxSuggestionCountRef.current)) || [];
            }
            return [];
          },
          render: () => {
            let component;
            let popup;
            const otherProps = {
              suggestionItem,
              searchField,
              popupClassName,
              itemClassName,
              selectedItemClassName
            };
            return {
              // eslint-disable-next-line no-shadow
              onStart: (props2) => {
                component = new ReactRenderer(MentionList, {
                  props: __spreadValues(__spreadValues({}, props2), otherProps),
                  editor: props2.editor
                });
                if (!props2.clientRect) {
                  return;
                }
                popup = tippy("body", {
                  getReferenceClientRect: props2.clientRect,
                  appendTo: () => document.body,
                  content: component.element,
                  showOnCreate: true,
                  interactive: true,
                  trigger: "manual",
                  placement: "bottom-start"
                });
              },
              // eslint-disable-next-line no-shadow
              onUpdate(props2) {
                var _a;
                component.updateProps(__spreadValues(__spreadValues({}, props2), otherProps));
                if (!props2.clientRect) {
                  return;
                }
                (_a = popup == null ? void 0 : popup[0]) == null ? void 0 : _a.setProps({
                  getReferenceClientRect: props2.clientRect
                });
              },
              // eslint-disable-next-line no-shadow
              onKeyDown(props2) {
                var _a, _b;
                if (props2.event.key === "Escape") {
                  (_a = popup == null ? void 0 : popup[0]) == null ? void 0 : _a.hide();
                  return true;
                }
                return ((_b = component.ref) == null ? void 0 : _b.onKeyDown(props2.event)) || false;
              },
              onExit() {
                var _a;
                (_a = popup == null ? void 0 : popup[0]) == null ? void 0 : _a.destroy();
                component.destroy();
              }
            };
          }
        }
      })
    );
    return () => {
      setMention(void 0);
    };
  }, [
    searchField,
    mentionClassName,
    popupClassName,
    itemClassName,
    selectedItemClassName
  ]);
  const inCanvas = !!usePlasmicCanvasContext();
  const providerData = useMemo(() => {
    var _a, _b;
    const noData = [{ [searchField]: "No data" }];
    let data = inCanvas ? noData : [];
    if (!hasDataDynamic) {
      if ((dataStatic == null ? void 0 : dataStatic.length) && Array.isArray(dataStatic)) {
        data = [...dataStatic];
      }
      return data;
    }
    if (!dataDynamic || dataDynamic.isLoading)
      return noData;
    data = (_b = (_a = dataDynamic.data) == null ? void 0 : _a.response) != null ? _b : noData;
    if (!Array.isArray(data))
      return noData;
    return data.slice(0, maxSuggestionCount);
  }, [
    dataDynamic,
    searchField,
    hasDataDynamic,
    maxSuggestionCount,
    dataStatic
  ]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: __spreadValues({}, {
        // bare minimum styles (that need not be overridden)
        // We just want to make the dataProvider data available to the MentionList component (<DataProvider> is needed to be returned from the returned JSX). It should not be shown in the UI, hence the display: none
        display: "none",
        position: "absolute",
        top: 0,
        background: "white"
      })
    },
    providerData == null ? void 0 : providerData.slice(0, maxSuggestionCount).map((item, index) => {
      var _a;
      return (
        // Data provider needs to be in the returned JSX (the actual use of the "suggestionItem" data is in the MentionList component.)
        /* @__PURE__ */ React.createElement(DataProvider, { key: item.id, name: "suggestionItem", data: item }, (_a = repeatedElement(index === 0, suggestionItem)) != null ? _a : item[searchField])
      );
    })
  );
}
Mention.displayName = "Mention";
function registerMention(loader) {
  registerComponentHelper(loader, Mention, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-mention`,
    displayName: "Tiptap Mention",
    providesData: true,
    props: {
      dataDynamic: {
        type: "dataSourceOpData",
        description: "Filtered suggestions",
        disableDynamicValue: true,
        // we don't want the users to temper with the Plasmic's default query type.
        hidden: (ps) => !ps.hasDataDynamic
      },
      searchField: {
        type: "string",
        defaultValueHint: "id"
      },
      maxSuggestionCount: {
        type: "number",
        defaultValueHint: 5,
        description: "Limits the number of suggestions that appear in the suggestions popup"
      },
      dataStatic: {
        type: "array",
        hidden: (ps) => Boolean(ps.hasDataDynamic),
        itemType: {
          type: "object",
          nameFunc: (item) => item.label,
          fields: {
            id: "string",
            label: "string"
          }
        },
        defaultValue: [
          {
            id: "thomasEd1",
            label: "Thomas Edison"
          },
          {
            id: "sherlock221b",
            label: "Sherlock Holmes"
          },
          {
            id: "eliot_thomas",
            label: "T.S Eliot"
          },
          {
            id: "shakespeare74",
            label: "William Shakespeare"
          }
        ]
      },
      hasDataDynamic: {
        type: "boolean"
      },
      mentionClassName: {
        type: "class",
        displayName: "Mention label"
      },
      popupClassName: {
        type: "class",
        displayName: "Suggestion Popup"
      },
      itemClassName: {
        type: "class",
        displayName: "Suggestion Item"
      },
      selectedItemClassName: {
        type: "class",
        displayName: "Selected Item"
      },
      suggestionItem: {
        type: "slot"
      },
      currentMention: {
        type: "string",
        hidden: () => true
      }
    },
    importName: "Mention",
    importPath: "@plasmicpkgs/tiptap/skinny/registerMention",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function Strike(props) {
  const { setStrike } = useTiptapContext();
  useEffect(() => {
    setStrike(
      TiptapStrike.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setStrike(void 0);
    };
  }, []);
  return null;
}
Strike.displayName = "Strike";
function registerStrike(loader) {
  registerComponentHelper(loader, Strike, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-strike`,
    displayName: "Tiptap Strike",
    props: {},
    importName: "Strike",
    importPath: "@plasmicpkgs/tiptap/skinny/registerStrike",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function Underline(props) {
  const { setUnderline } = useTiptapContext();
  useEffect(() => {
    setUnderline(
      TiptapUnderline.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setUnderline(void 0);
    };
  }, []);
  return null;
}
Underline.displayName = "Underline";
function registerUnderline(loader) {
  registerComponentHelper(loader, Underline, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-underline`,
    displayName: "Tiptap Underline",
    props: {},
    importName: "Underline",
    importPath: "@plasmicpkgs/tiptap/skinny/registerUnderline",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarBold(props) {
  const { editor } = useCurrentEditor();
  const { bold } = useTiptapContext();
  const { className, children, toolbarBoldScopeClassName } = props;
  if (!editor || !bold)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("bold") ? true : false,
      className: `${className} ${toolbarBoldScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("bold").run()
    },
    children
  );
}
ToolbarBold.displayName = "ToolbarBold";
function registerToolbarBold(loader) {
  registerComponentHelper(loader, ToolbarBold, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-bold`,
    displayName: "Tiptap Bold Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/bold.svg"
          }
        ]
      },
      toolbarBoldScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarBold"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarBold[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarBold",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarBold",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarCode(props) {
  const { editor } = useCurrentEditor();
  const { code } = useTiptapContext();
  const { className, children, toolbarCodeScopeClassName } = props;
  if (!editor || !code)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("code") ? true : false,
      className: `${className} ${toolbarCodeScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("code").run()
    },
    children
  );
}
ToolbarCode.displayName = "ToolbarCode";
function registerToolbarCode(loader) {
  registerComponentHelper(loader, ToolbarCode, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-code`,
    displayName: "Tiptap Code Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/code.svg"
          }
        ]
      },
      toolbarCodeScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarCode"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarCode[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarCode",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarCode",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarItalic(props) {
  const { editor } = useCurrentEditor();
  const { italic } = useTiptapContext();
  const { className, children, toolbarItalicScopeClassName } = props;
  if (!editor || !italic)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("italic") ? true : false,
      className: `${className} ${toolbarItalicScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("italic").run()
    },
    children
  );
}
ToolbarItalic.displayName = "ToolbarItalic";
function registerToolbarItalic(loader) {
  registerComponentHelper(loader, ToolbarItalic, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-italic`,
    displayName: "Tiptap Italic Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/italic.svg",
            styles: {
              width: "hug"
            }
          }
        ]
      },
      toolbarItalicScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarItalic"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarItalic[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarItalic",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarItalic",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarLink(props) {
  const { editor } = useCurrentEditor();
  const { link } = useTiptapContext();
  const { className, children, toolbarLinkScopeClassName } = props;
  if (!editor || !link)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("link") ? true : false,
      className: `${className} ${toolbarLinkScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("link").run()
    },
    children
  );
}
ToolbarLink.displayName = "ToolbarLink";
function registerToolbarLink(loader) {
  registerComponentHelper(loader, ToolbarLink, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-link`,
    displayName: "Tiptap Link Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/link.svg"
          }
        ]
      },
      toolbarLinkScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarLink"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarLink[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarLink",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarLink",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarMention(props) {
  const { editor } = useCurrentEditor();
  const { mention } = useTiptapContext();
  const { className, children, toolbarMentionScopeClassName } = props;
  if (!editor || !mention)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("mention") ? true : false,
      className: `${className} ${toolbarMentionScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().insertContent(" @").run()
    },
    children
  );
}
ToolbarMention.displayName = "ToolbarMention";
function registerToolbarMention(loader) {
  registerComponentHelper(loader, ToolbarMention, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-mention`,
    displayName: "Tiptap Mention Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/mention.svg"
          }
        ]
      },
      toolbarMentionScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarMention"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarMention[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarMention",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarMention",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarStrike(props) {
  const { editor } = useCurrentEditor();
  const { strike } = useTiptapContext();
  const { className, children, toolbarStrikeScopeClassName } = props;
  if (!editor || !strike)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("strike") ? true : false,
      className: `${className} ${toolbarStrikeScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("strike").run()
    },
    children
  );
}
ToolbarStrike.displayName = "ToolbarStrike";
function registerToolbarStrike(loader) {
  registerComponentHelper(loader, ToolbarStrike, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-strike`,
    displayName: "Tiptap Strike Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/strikethrough.svg"
          }
        ]
      },
      toolbarStrikeScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarStrike"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarStrike[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarStrike",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarStrike",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function ToolbarUnderline(props) {
  const { editor } = useCurrentEditor();
  const { underline } = useTiptapContext();
  const { className, children, toolbarUnderlineScopeClassName } = props;
  if (!editor || !underline)
    return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "data-active": editor.isActive("underline") ? true : false,
      className: `${className} ${toolbarUnderlineScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("underline").run()
    },
    children
  );
}
ToolbarUnderline.displayName = "ToolbarUnderline";
function registerToolbarUnderline(loader) {
  registerComponentHelper(loader, ToolbarUnderline, {
    name: `${TIPTAP_COMPONENT_NAME}-toolbar-underline`,
    displayName: "Tiptap Underline Toolbar Option",
    defaultStyles: {
      width: "hug",
      padding: "5px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "img",
            src: "https://static1.plasmic.app/underline.svg"
          }
        ]
      },
      toolbarUnderlineScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarUnderline"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarUnderline[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarUnderline",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarUnderline",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

function registerAll(loader) {
  registerBold(loader);
  registerCode(loader);
  registerItalic(loader);
  registerLink(loader);
  registerMention(loader);
  registerStrike(loader);
  registerTiptap(loader);
  registerUnderline(loader);
  registerToolbarBold(loader);
  registerToolbarCode(loader);
  registerToolbarItalic(loader);
  registerToolbarLink(loader);
  registerToolbarMention(loader);
  registerToolbarStrike(loader);
  registerToolbarUnderline(loader);
}

export { registerAll };
//# sourceMappingURL=tiptap.esm.js.map
