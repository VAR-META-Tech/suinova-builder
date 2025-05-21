import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderInput extends InputProps {
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

const NFTBuilderInput = ({
  className,
  placeholderColor,
  inputBackgroundColor,
  ...props
}: INFTBuilderInput) => {
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

export const NFTInput = NFTBuilderInput;
export const NFTInputMeta = {
  name: "NFTBuilderInput",
  displayName: "NFT Input",
  props: {
    className: {
      type: "string" as const,
    },
    size: {
      type: "choice" as const,
      options: [
        { label: "Small", value: "small" },
        { label: "Middle", value: "middle" },
        { label: "Large", value: "large" },
      ],
      description: "The size of the input box",
      defaultValueHint: "middle",
      multiSelect: false as const,
    },
    placeholder: {
      type: "string" as const,
      description: "Placeholder for the input",
    },
    allowClear: {
      type: "boolean" as const,
      description: "Allow to remove input content with clear icon",
      defaultValueHint: false,
    },
    bordered: {
      type: "boolean" as const,
      description: "Whether has border style",
      defaultValueHint: true,
    },
    disabled: {
      type: "boolean" as const,
      description: "Whether the input is disabled",
      defaultValueHint: false,
    },
    maxLength: {
      type: "number" as const,
      description: "The maximum length of the input content",
    },
    status: {
      type: "choice" as const,
      options: [
        { label: "Error", value: "error" },
        { label: "Warning", value: "warning" },
      ],
      description: "Set validation status",
      multiSelect: false as const,
    },
    readOnly: {
      type: "boolean" as const,
      description: "Whether the input is read-only",
      defaultValueHint: false,
    },
    required: {
      type: "boolean" as const,
      description: "Whether the input is required",
      defaultValueHint: false,
    },
    autoFocus: {
      type: "boolean" as const,
      description: "Whether to focus on the input when it is mounted",
      defaultValueHint: false,
    },
    placeholderColor: {
      type: "color" as const,
      defaultValue: "black",
    },
    inputBackgroundColor: {
      type: "color" as const,
      defaultValue: "white",
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "NFTInput",
};

export function registerNFTInput(loader?: Registerable) {
  registerComponentHelper(loader, NFTInput, NFTInputMeta);
}
