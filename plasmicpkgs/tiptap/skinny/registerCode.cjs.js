'use strict';

var TiptapCode = require('@tiptap/extension-code');
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

var TiptapCode__default = /*#__PURE__*/_interopDefault(TiptapCode);

function Code(props) {
  const { setCode } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setCode(
      TiptapCode__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setCode(void 0);
    };
  }, []);
  return null;
}
Code.displayName = "Code";
function registerCode(loader) {
  registerTiptap.registerComponentHelper(loader, Code, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-code`,
    displayName: "Tiptap Code",
    props: {},
    importName: "Code",
    importPath: "@plasmicpkgs/tiptap/skinny/registerCode",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Code = Code;
exports.registerCode = registerCode;
//# sourceMappingURL=registerCode.cjs.js.map
