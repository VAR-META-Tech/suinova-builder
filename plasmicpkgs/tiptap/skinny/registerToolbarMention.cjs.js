'use strict';

var react = require('@tiptap/react');
var React = require('react');
var registerTiptap = require('./registerTiptap-004bd7c8.cjs.js');
require('@plasmicapp/host');
require('@tiptap/extension-document');
require('@tiptap/extension-paragraph');
require('@tiptap/extension-text');
require('antd');
require('@plasmicapp/host/registerComponent');
require('@plasmicapp/host/registerGlobalContext');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function ToolbarMention(props) {
  const { editor } = react.useCurrentEditor();
  const { mention } = registerTiptap.useTiptapContext();
  const { className, children, toolbarMentionScopeClassName } = props;
  if (!editor || !mention)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarMention, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-mention`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarMention = ToolbarMention;
exports.registerToolbarMention = registerToolbarMention;
//# sourceMappingURL=registerToolbarMention.cjs.js.map
