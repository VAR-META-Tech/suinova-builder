import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTInput extends InputProps {
  className?: string;
  placeholderColor?: string;
  inputBackgroundColor?: string;
}

const CSSClasses = {
  input: "nft-builder-input",
};

// Minify CSS helper function
const minifyCss = (css: string) => {
  return css
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .trim();
};

const NFTInput = ({ className, placeholderColor, inputBackgroundColor, ...props }: INFTInput) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.input}::placeholder {
            color: ${placeholderColor};
          }
          .${CSSClasses.input} {
            background-color: ${inputBackgroundColor};
          }
        `), 
    []
  );

  return (
    <div className={className}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <Input className={CSSClasses.input} {...props} />
    </div>
  );
};

export function registerNFTInput(loader?: Registerable) {
  registerComponentHelper(loader, NFTInput, {
    name: "nft-builder-input",
    displayName: "NFT Input",
    props: {
      size: {
        type: "choice",
        options: ["small", "middle", "large"],
        description: "The size of the input box",
        defaultValueHint: "middle",
      },
      placeholder: {
        type: "string",
        description: "Placeholder for the input",
      },
      allowClear: {
        type: "boolean",
        description: "Allow to remove input content with clear icon",
        defaultValueHint: false,
      },
      bordered: {
        type: "boolean",
        description: "Whether has border style",
        defaultValueHint: true,
      },
      disabled: {
        type: "boolean",
        description: "Whether the input is disabled",
        defaultValueHint: false,
      },
      maxLength: {
        type: "number",
        description: "The maximum length of the input content",
      },
      status: {
        type: "choice",
        options: ["error", "warning"],
        description: "Set validation status",
      },
      readOnly: {
        type: "boolean",
        description: "Whether the input is read-only",
        defaultValueHint: false,
      },
      required: {
        type: "boolean",
        description: "Whether the input is required",
        defaultValueHint: false,
      },
      autoFocus: {
        type: "boolean",
        description: "Whether to focus on the input when it is mounted",
        defaultValueHint: false,
      },
      placeholderColor: {
        type: "color",
        defaultValue: "black"
      },
      inputBackgroundColor: {
        type: "color",
        defaultValue: "white"
      }
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTInput",
  });
}
