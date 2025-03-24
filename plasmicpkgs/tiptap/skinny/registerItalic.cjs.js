'use strict';

var TiptapItalic = require('@tiptap/extension-italic');
var React = require('react');
var registerTiptap = require('./registerTiptap-004bd7c8.cjs.js');
require('@plasmicapp/host');
require('@tiptap/extension-document');
require('@tiptap/extension-paragraph');
require('@tiptap/extension-text');
require('@tiptap/react');
require('antd');
require('@plasmicapp/host/registerComponent');
require('@plasmicapp/host/registerGlobalContext');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var TiptapItalic__default = /*#__PURE__*/_interopDefault(TiptapItalic);

function Italic(props) {
  const { setItalic } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setItalic(
      TiptapItalic__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setItalic(void 0);
    };
  }, []);
  return null;
}
Italic.displayName = "Italic";
function registerItalic(loader) {
  registerTiptap.registerComponentHelper(loader, Italic, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-italic`,
    displayName: "Tiptap Italic",
    props: {},
    importName: "Italic",
    importPath: "@plasmicpkgs/tiptap/skinny/registerItalic",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Italic = Italic;
exports.registerItalic = registerItalic;
//# sourceMappingURL=registerItalic.cjs.js.map
