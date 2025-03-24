import TiptapLink from '@tiptap/extension-link';
import { useEffect } from 'react';
import { u as useTiptapContext, r as registerComponentHelper, T as TIPTAP_COMPONENT_NAME } from './registerTiptap-3c71865b.esm.js';
import '@plasmicapp/host';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import '@tiptap/react';
import 'antd';
import '@plasmicapp/host/registerComponent';
import '@plasmicapp/host/registerGlobalContext';

function Link(props) {
  const { setLink } = useTiptapContext();
  useEffect(() => {
    setLink(
      TiptapLink.configure({
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
  registerComponentHelper(loader, Link, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-link`,
    displayName: "Tiptap Link",
    props: {},
    importName: "Link",
    importPath: "@plasmicpkgs/tiptap/skinny/registerLink",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Link, registerLink };
//# sourceMappingURL=registerLink.esm.js.map
