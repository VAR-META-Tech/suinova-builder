import { useCurrentEditor } from '@tiptap/react';
import React from 'react';
import { u as useTiptapContext, r as registerComponentHelper, T as TIPTAP_COMPONENT_NAME } from './registerTiptap-3c71865b.esm.js';
import '@plasmicapp/host';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import 'antd';
import '@plasmicapp/host/registerComponent';
import '@plasmicapp/host/registerGlobalContext';

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

export { ToolbarStrike, registerToolbarStrike };
//# sourceMappingURL=registerToolbarStrike.esm.js.map
