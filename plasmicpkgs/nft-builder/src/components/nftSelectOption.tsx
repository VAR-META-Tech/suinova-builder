import { Select } from "antd";
import type { OptGroupProps } from "rc-select/es/OptGroup";
import type { OptionProps } from "rc-select/es/Option";
import { Registerable, registerComponentHelper } from "../reg-util";

export const NFTSelectOption: React.ComponentType<OptionProps> = Select.Option as unknown as React.ComponentType<OptionProps>;
export const NFTSelectOptGroup: React.ComponentType<OptGroupProps> =
  Select.OptGroup as unknown as React.ComponentType<OptGroupProps>;

export function registerNFTSelectOption(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelectOption, {
    name: "nft-builder-select-option",
    displayName: "NFT Select Option",
    props: {
      disabled: {
        type: "boolean",
        description: "Disable this option",
        defaultValueHint: false,
      },
      title: {
        type: "string",
        description: "title of Select after select this Option",
      },
      value: {
        type: "string",
        description: "Default to filter with this property",
      },
      key: {
        type: "string",
        description: "Option key",
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Option",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTSelectOption",
  });
}

export function registerNFTSelectOptGroup(loader?: Registerable) {
  registerComponentHelper(loader, NFTSelectOptGroup, {
    name: "nft-builder-option-group",
    displayName: "NFT Option Group",
    props: {
      key: {
        type: "string",
        description: "Group key",
      },
      label: {
        type: "string",
        description: "Group label",
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-select-option",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTOptionGroup",
  });
}
