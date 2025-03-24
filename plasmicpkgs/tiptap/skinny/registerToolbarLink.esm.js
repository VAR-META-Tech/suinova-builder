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

export { ToolbarLink, registerToolbarLink };
//# sourceMappingURL=registerToolbarLink.esm.js.map
