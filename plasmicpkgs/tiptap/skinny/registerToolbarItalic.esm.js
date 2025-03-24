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

export { ToolbarItalic, registerToolbarItalic };
//# sourceMappingURL=registerToolbarItalic.esm.js.map
