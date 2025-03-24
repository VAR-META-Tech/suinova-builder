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

export { ToolbarMention, registerToolbarMention };
//# sourceMappingURL=registerToolbarMention.esm.js.map
