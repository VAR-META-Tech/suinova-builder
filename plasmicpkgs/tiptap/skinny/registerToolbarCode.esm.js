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

export { ToolbarCode, registerToolbarCode };
//# sourceMappingURL=registerToolbarCode.esm.js.map
