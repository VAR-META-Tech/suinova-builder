import TiptapUnderline from '@tiptap/extension-underline';
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

function Underline(props) {
  const { setUnderline } = useTiptapContext();
  useEffect(() => {
    setUnderline(
      TiptapUnderline.configure({
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
  registerComponentHelper(loader, Underline, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-underline`,
    displayName: "Tiptap Underline",
    props: {},
    importName: "Underline",
    importPath: "@plasmicpkgs/tiptap/skinny/registerUnderline",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Underline, registerUnderline };
//# sourceMappingURL=registerUnderline.esm.js.map
