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

function ToolbarItalic(props) {
  const { editor } = react.useCurrentEditor();
  const { italic } = registerTiptap.useTiptapContext();
  const { className, children, toolbarItalicScopeClassName } = props;
  if (!editor || !italic)
    return null;
  return /* @__PURE__ */ React__default.default.createElement(
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
  registerTiptap.registerComponentHelper(loader, ToolbarItalic, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-toolbar-italic`,
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
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.ToolbarItalic = ToolbarItalic;
exports.registerToolbarItalic = registerToolbarItalic;
//# sourceMappingURL=registerToolbarItalic.cjs.js.map
