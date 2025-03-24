import TiptapCode from '@tiptap/extension-code';
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

function Code(props) {
  const { setCode } = useTiptapContext();
  useEffect(() => {
    setCode(
      TiptapCode.configure({
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
  registerComponentHelper(loader, Code, {
    name: `${TIPTAP_COMPONENT_NAME}-extension-code`,
    displayName: "Tiptap Code",
    props: {},
    importName: "Code",
    importPath: "@plasmicpkgs/tiptap/skinny/registerCode",
    parentComponentName: TIPTAP_COMPONENT_NAME
  });
}

export { Code, registerCode };
//# sourceMappingURL=registerCode.esm.js.map
