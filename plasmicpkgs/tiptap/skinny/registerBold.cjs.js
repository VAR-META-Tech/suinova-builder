'use strict';

var TiptapBold = require('@tiptap/extension-bold');
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

var TiptapBold__default = /*#__PURE__*/_interopDefault(TiptapBold);

function Bold(props) {
  const { setBold } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setBold(
      TiptapBold__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setBold(void 0);
    };
  }, []);
  return null;
}
Bold.displayName = "Bold";
function registerBold(loader) {
  registerTiptap.registerComponentHelper(loader, Bold, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-bold`,
    displayName: "Tiptap Bold",
    props: {},
    importName: "Bold",
    importPath: "@plasmicpkgs/tiptap/skinny/registerBold",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Bold = Bold;
exports.registerBold = registerBold;
//# sourceMappingURL=registerBold.cjs.js.map
