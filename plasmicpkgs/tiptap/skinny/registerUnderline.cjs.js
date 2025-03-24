'use strict';

var TiptapUnderline = require('@tiptap/extension-underline');
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

var TiptapUnderline__default = /*#__PURE__*/_interopDefault(TiptapUnderline);

function Underline(props) {
  const { setUnderline } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setUnderline(
      TiptapUnderline__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setUnderline(void 0);
    };
  }, []);
  return null;
}
Underline.displayName = "Underline";
function registerUnderline(loader) {
  registerTiptap.registerComponentHelper(loader, Underline, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-underline`,
    displayName: "Tiptap Underline",
    props: {},
    importName: "Underline",
    importPath: "@plasmicpkgs/tiptap/skinny/registerUnderline",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Underline = Underline;
exports.registerUnderline = registerUnderline;
//# sourceMappingURL=registerUnderline.cjs.js.map
