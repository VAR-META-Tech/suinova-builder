import { Select } from "antd";
import type { OptGroupProps } from "rc-select/es/OptGroup";
import type { OptionProps } from "rc-select/es/Option";
import { Registerable, registerComponentHelper } from "../reg-util";

const NFTBuilderSelectOption = Select.Option as unknown as React.ComponentType<OptionProps>;
const NFTBuilderOptionGroup = Select.OptGroup as unknown as React.ComponentType<OptGroupProps>;
export const NFTSelectOption: React.ComponentType<OptionProps> = NFTBuilderSelectOption;
export const NFTSelectOptGroup: React.ComponentType<OptGroupProps> = NFTBuilderOptionGroup;

export const NFTSelectOptionMeta = {
  name: "NFTBuilderSelectOption",
  displayName: "NFT Select Option",
  props: {
    disabled: {
      type: "boolean" as const,
      description: "Disable this option",
      defaultValueHint: false,
    },
    title: {
      type: "string" as const,
      description: "title of Select after select this Option",
    },
    value: {
      type: "string" as const,
      description: "Default to filter with this property",
    },
    key: {
      type: "string" as const,
      description: "Option key",
    },
    children: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "text" as const,
          value: "Option",
        },
      ],
    },
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "NFTSelectOption",
}

export const NFTSelectOptGroupMeta = {
  name: "NFTBuilderOptionGroup",
  displayName: "NFT Option Group",
  props: {
    key: {
      type: "string" as const,
      description: "Group key",
    },
    label: {
      type: "string" as const,
      description: "Group label",
    },
    children: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderSelectOption",
        },
      ],
    },
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "NFTSelectOptGroup",
}


export function registerNFTSelectOption(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelectOption, NFTSelectOptionMeta);
}

export function registerNFTSelectOptGroup(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelectOptGroup, NFTSelectOptGroupMeta);
}
