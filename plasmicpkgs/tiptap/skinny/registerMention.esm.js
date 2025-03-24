import { DataProvider, repeatedElement, usePlasmicCanvasContext } from '@plasmicapp/host';
import TiptapMention from '@tiptap/extension-mention';
import { ReactRenderer } from '@tiptap/react';
import React, { forwardRef, useState, useEffect, useImperativeHandle, useRef, useMemo } from 'react';
import tippy from 'tippy.js';
import { u as useTiptapContext, r as registerComponentHelper, T as TIPTAP_COMPONENT_NAME } from './registerTiptap-3c71865b.esm.js';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import 'antd';
import '@plasmicapp/host/registerComponent';
import '@plasmicapp/host/registerGlobalContext';

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

export { Mention, registerMention };
//# sourceMappingURL=registerMention.esm.js.map
