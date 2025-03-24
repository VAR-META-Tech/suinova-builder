import TiptapStrike from '@tiptap/extension-strike';
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

function Strike(props) {
  const { setStrike } = useTiptapContext();
  useEffect(() => {
    setStrike(
      TiptapStrike.configure({
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
  registerComponentHelper(loader, Strike, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-strike`,
    displayName: "Tiptap Strike",
    props: {},
    importName: "Strike",
    importPath: "@plasmicpkgs/tiptap/skinny/registerStrike",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Strike, registerStrike };
//# sourceMappingURL=registerStrike.esm.js.map
