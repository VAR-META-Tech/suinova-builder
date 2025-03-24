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

function ToolbarStrike(props) {
  const { editor } = react.useCurrentEditor();
  const { strike } = registerTiptap.useTiptapContext();
  const { className, children, toolbarStrikeScopeClassName } = props;
  if (!editor || !strike)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
    "div",
    {
      "data-active": editor.isActive("strike") ? true : false,
      className: `${className} ${toolbarStrikeScopeClassName}`,
      style: { cursor: "pointer" },
      role: "button",
      onClick: () => editor.chain().focus().toggleMark("strike").run()
    },
    children
  );
}
ToolbarStrike.displayName = "ToolbarStrike";
function registerToolbarStrike(loader) {
  registerTiptap.registerComponentHelper(loader, ToolbarStrike, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-strike`,
    displayName: "Tiptap Strike Toolbar Option",
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
            src: "https://static1.plasmic.app/strikethrough.svg"
          }
        ]
      },
      toolbarStrikeScopeClassName: {
        type: "styleScopeClass",
        scopeName: "toolbarStrike"
      },
      selectedClassName: {
        type: "class",
        displayName: "Tool Selected",
        selectors: [
          {
            selector: ":toolbarStrike[data-active=true]",
            label: "Base"
          }
        ]
      }
    },
    importName: "ToolbarStrike",
    importPath: "@plasmicpkgs/tiptap/skinny/registerToolbarStrike",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarStrike = ToolbarStrike;
exports.registerToolbarStrike = registerToolbarStrike;
//# sourceMappingURL=registerToolbarStrike.cjs.js.map
