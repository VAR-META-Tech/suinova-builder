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

function ToolbarUnderline(props) {
  const { editor } = react.useCurrentEditor();
  const { underline } = registerTiptap.useTiptapContext();
  const { className, children, toolbarUnderlineScopeClassName } = props;
  if (!editor || !underline)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarUnderline, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-underline`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarUnderline = ToolbarUnderline;
exports.registerToolbarUnderline = registerToolbarUnderline;
//# sourceMappingURL=registerToolbarUnderline.cjs.js.map
