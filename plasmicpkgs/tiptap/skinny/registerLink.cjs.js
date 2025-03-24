'use strict';

var TiptapLink = require('@tiptap/extension-link');
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

var TiptapLink__default = /*#__PURE__*/_interopDefault(TiptapLink);

function Link(props) {
  const { setLink } = registerTiptap.useTiptapContext();
  React.useEffect(() => {
    setLink(
      TiptapLink__default.default.configure({
        HTMLAttributes: {
          class: props.className
        }
      })
    );
    return () => {
      setLink(void 0);
    };
  }, []);
  return null;
}
Link.displayName = "Link";
function registerLink(loader) {
  registerTiptap.registerComponentHelper(loader, Link, {
    name: `${registerTiptap.TIPTAP_COMPONENT_NAME}-extension-link`,
    displayName: "Tiptap Link",
    props: {},
    importName: "Link",
    importPath: "@plasmicpkgs/tiptap/skinny/registerLink",
    parentComponentName: registerTiptap.TIPTAP_COMPONENT_NAME
  });
}

exports.Link = Link;
exports.registerLink = registerLink;
//# sourceMappingURL=registerLink.cjs.js.map
