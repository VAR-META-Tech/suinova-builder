import { Select as AntdSelect } from "antd";
import React from "react";
import {
  Registerable,
  registerComponentHelper,
  traverseReactEltTree,
} from "../reg-util";

const { Option } = AntdSelect;

type SelectProps = React.ComponentProps<typeof AntdSelect>;

interface INFTSelect extends SelectProps {
  className?: string;
  suffixIcon?: string;
}

const CSSClasses = {
  selectPlaceholder: "nft-select-placeholder",
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

const NFTSelect = ({ className, suffixIcon, ...props }: INFTSelect) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.selectPlaceholder} {
            color: #27273A !important;
          }
        `),
    []
  );

  return (
    <AntdSelect
      className={className}
      {...props}
      suffixIcon={
        <>
          <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
          {suffixIcon}
        </>
      }
    />
  );
};

export default NFTSelect;

export function registerNFTSelect(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelect, {
    name: "nft-builder-select",
    displayName: "NFT Select",
    props: {
      suffixIcon: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-arrow-down-icon",
          },
        ],
      },
      allowClear: {
        type: "boolean",
        description: "Show clear button",
        defaultValueHint: false,
      },
      autoClearSearchValue: {
        type: "boolean",
        description:
          "Whether the current search will be cleared on selecting an item",
        defaultValueHint: true,
        hidden: (props: { mode?: string }) =>
          props.mode !== "multiple" && props.mode !== "tags",
      },
      autoFocus: {
        type: "boolean",
        description: "Get focus by default",
        defaultValueHint: false,
      },
      bordered: {
        type: "boolean",
        description: "Whether has border style",
        defaultValueHint: true,
      },
      disabled: {
        type: "boolean",
        description: "Whether disabled select",
        defaultValueHint: false,
      },
      listHeight: {
        type: "number",
        description: "Config popup height",
        defaultValueHint: 256,
      },
      loading: {
        type: "boolean",
        description: "Indicate loading state",
        defaultValueHint: false,
      },
      mode: {
        type: "choice",
        options: ["multiple", "tags"],
        description: "Set mode of Select",
      },
      open: {
        type: "boolean",
        editOnly: true,
        description: "Initial open state of dropdown",
        defaultValueHint: false,
      },
      onDropdownVisibleChange: {
        type: "eventHandler",
        argTypes: [
          {
            name: "open",
            type: "boolean",
          },
        ],
      },
      placeholder: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Select",
            attrs: {
              className: CSSClasses.selectPlaceholder,
            },
          },
        ],
      },
      showArrow: {
        type: "boolean",
        description: "Whether to show the drop-down arrow",
        defaultValueHint: true,
      },
      showSearch: {
        type: "boolean",
        description: "Whether show search input in single mode",
        defaultValueHint: false,
      },
      size: {
        type: "choice",
        options: ["large", "middle", "small"],
        description: "Set mode of Select",
        defaultValueHint: "middle",
      },
      value: {
        type: "choice",
        description: "Initial selected option",
        options: (componentProps: { children?: React.ReactNode }) => {
          const options = new Set<string>();
          traverseReactEltTree(componentProps.children, (elt) => {
            if (elt?.type === Option && typeof elt?.props?.value === "string") {
              options.add(elt.props.value);
            }
          });
          return Array.from(options.keys());
        },
      },
      virtual: {
        type: "boolean",
        description: "Disable virtual scroll when set to false",
        defaultValueHint: true,
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-select-option",
            props: {
              value: "Option",
              children: {
                type: "text",
                value: "Option",
              },
            },
          },
        ],
      },
      onChange: {
        type: "eventHandler",
        argTypes: [
          {
            name: "value",
            type: "string",
          },
          {
            name: "option",
            type: "object",
          },
        ],
      },
    },
    states: {
      value: {
        type: "writable",
        variableType: "text",
        onChangeProp: "onChange",
        valueProp: "value",
      },
      open: {
        type: "writable",
        variableType: "boolean",
        onChangeProp: "onDropdownVisibleChange",
        valueProp: "open",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTSelect",
  });
}
