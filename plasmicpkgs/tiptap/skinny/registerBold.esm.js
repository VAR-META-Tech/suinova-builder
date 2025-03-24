import TiptapBold from '@tiptap/extension-bold';
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

function Bold(props) {
  const { setBold } = useTiptapContext();
  useEffect(() => {
    setBold(
      TiptapBold.configure({
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
  registerComponentHelper(loader, Bold, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-bold`,
    displayName: "Tiptap Bold",
    props: {},
    importName: "Bold",
    importPath: "@plasmicpkgs/tiptap/skinny/registerBold",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Bold, registerBold };
//# sourceMappingURL=registerBold.esm.js.map
