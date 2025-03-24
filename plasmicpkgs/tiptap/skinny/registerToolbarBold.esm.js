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

export { ToolbarBold, registerToolbarBold };
//# sourceMappingURL=registerToolbarBold.esm.js.map
