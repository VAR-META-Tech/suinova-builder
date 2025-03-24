import TiptapItalic from '@tiptap/extension-italic';
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

function Italic(props) {
  const { setItalic } = useTiptapContext();
  useEffect(() => {
    setItalic(
      TiptapItalic.configure({
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
  registerComponentHelper(loader, Italic, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-italic`,
    displayName: "Tiptap Italic",
    props: {},
    importName: "Italic",
    importPath: "@plasmicpkgs/tiptap/skinny/registerItalic",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Italic, registerItalic };
//# sourceMappingURL=registerItalic.esm.js.map
