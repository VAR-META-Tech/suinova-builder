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

function ToolbarBold(props) {
  const { editor } = react.useCurrentEditor();
  const { bold } = registerTiptap.useTiptapContext();
  const { className, children, toolbarBoldScopeClassName } = props;
  if (!editor || !bold)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarBold, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-bold`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarBold = ToolbarBold;
exports.registerToolbarBold = registerToolbarBold;
//# sourceMappingURL=registerToolbarBold.cjs.js.map
