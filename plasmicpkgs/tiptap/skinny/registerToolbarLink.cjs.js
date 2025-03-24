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

function ToolbarLink(props) {
  const { editor } = react.useCurrentEditor();
  const { link } = registerTiptap.useTiptapContext();
  const { className, children, toolbarLinkScopeClassName } = props;
  if (!editor || !link)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarLink, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-link`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarLink = ToolbarLink;
exports.registerToolbarLink = registerToolbarLink;
//# sourceMappingURL=registerToolbarLink.cjs.js.map
