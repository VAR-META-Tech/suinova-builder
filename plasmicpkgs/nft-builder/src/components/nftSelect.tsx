import { Select as AntdSelect } from "antd";
import React from "react";
import {
  Registerable,
  registerComponentHelper,
  traverseReactEltTree,
} from "../reg-util";

const { Option } = AntdSelect;

type SelectProps = React.ComponentProps<typeof AntdSelect>;

interface INFTBuilderSelect extends SelectProps {
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

const NFTBuilderSelect = ({ className, suffixIcon, ...props }: INFTBuilderSelect) => {
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

export const NFTSelect = NFTBuilderSelect;
export const NFTSelectMeta = {
  name: "NFTBuilderSelect",
  displayName: "NFT Select",
  props: {
    suffixIcon: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderArrowDownIcon",
        },
      ],
    },
    allowClear: {
      type: "boolean" as const,
      description: "Show clear button",
      defaultValueHint: false,
    },
    autoClearSearchValue: {
      type: "boolean" as const,
      description:
        "Whether the current search will be cleared on selecting an item",
      defaultValueHint: true,
      hidden: (props: { mode?: string }) =>
        props.mode !== "multiple" && props.mode !== "tags",
    },
    autoFocus: {
      type: "boolean" as const,
      description: "Get focus by default",
      defaultValueHint: false,
    },
    bordered: {
      type: "boolean" as const,
      description: "Whether has border style",
      defaultValueHint: true,
    },
    disabled: {
      type: "boolean" as const,
      description: "Whether disabled select",
      defaultValueHint: false,
    },
    listHeight: {
      type: "number" as const,
      description: "Config popup height",
      defaultValueHint: 256,
    },
    loading: {
      type: "boolean" as const,
      description: "Indicate loading state",
      defaultValueHint: false,
    },
    mode: {
      type: "choice" as const,
      options: ["multiple", "tags"],
      description: "Set mode of Select",
    },
    open: {
      type: "boolean" as const,
      editOnly: true,
      description: "Initial open state of dropdown",
      defaultValueHint: false,
    },
    onDropdownVisibleChange: {
      type: "eventHandler" as const,
      argTypes: [
        {
          name: "open",
          type: "boolean" as const,
        },
      ],
    },
    placeholder: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "text" as const,
          value: "Select",
          attrs: {
            className: CSSClasses.selectPlaceholder,
          },
        },
      ],
    },
    showArrow: {
      type: "boolean" as const,
      description: "Whether to show the drop-down arrow",
      defaultValueHint: true,
    },
    showSearch: {
      type: "boolean" as const,
      description: "Whether show search input in single mode",
      defaultValueHint: false,
    },
    size: {
      type: "choice" as const,
      options: ["large", "middle", "small"],
      description: "Set mode of Select",
      defaultValueHint: "middle",
    },
    value: {
      type: "choice" as const,
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
      type: "boolean" as const,
      description: "Disable virtual scroll when set to false",
      defaultValueHint: true,
    },
    children: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderSelectOption",
          props: {
            value: "Option",
            children: {
              type: "text" as const,
              value: "Option",
            },
          },
        },
      ],
    },
    onChange: {
      type: "eventHandler" as const,
      argTypes: [
        {
          name: "value",
          type: "string" as const,
        },
        {
          name: "option",
          type: "object" as const,
        },
      ],
    },
  },
  states: {
    value: {
      type: "writable" as const,
      variableType: "text" as const,
      onChangeProp: "onChange",
      valueProp: "value",
    },
    open: {
      type: "writable" as const,
      variableType: "boolean" as const,
      onChangeProp: "onDropdownVisibleChange",
      valueProp: "open",
    },
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "NFTSelect",
};

export function registerNFTSelect(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelect, NFTSelectMeta);
}
