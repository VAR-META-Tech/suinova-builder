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

export { ToolbarUnderline, registerToolbarUnderline };
//# sourceMappingURL=registerToolbarUnderline.esm.js.map
