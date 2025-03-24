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

function ToolbarCode(props) {
  const { editor } = react.useCurrentEditor();
  const { code } = registerTiptap.useTiptapContext();
  const { className, children, toolbarCodeScopeClassName } = props;
  if (!editor || !code)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarCode, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-code`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarCode = ToolbarCode;
exports.registerToolbarCode = registerToolbarCode;
//# sourceMappingURL=registerToolbarCode.cjs.js.map
