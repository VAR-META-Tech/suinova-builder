'use strict';

var TiptapStrike = require('@tiptap/extension-strike');
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

var TiptapStrike__default = /*#__PURE__*/_interopDefault(TiptapStrike);

function Strike(props) {
  const { setStrike } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setStrike(
      TiptapStrike__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setStrike(void 0);
    };
  }, []);
  return null;
}
Strike.displayName = "Strike";
function registerStrike(loader) {
  registerTiptap.registerComponentHelper(loader, Strike, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-strike`,
    displayName: "Tiptap Strike",
    props: {},
    importName: "Strike",
    importPath: "@plasmicpkgs/tiptap/skinny/registerStrike",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Strike = Strike;
exports.registerStrike = registerStrike;
//# sourceMappingURL=registerStrike.cjs.js.map
