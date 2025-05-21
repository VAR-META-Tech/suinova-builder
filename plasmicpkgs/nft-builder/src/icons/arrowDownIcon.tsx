import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface IArrowDown {
  className?: string;
}

const NFTBuilderArrowDownIcon = ({ className }: IArrowDown) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11 0.999999L6 7L1 1" stroke="#27273A" />
      <path d="M11 0.999999L6 7L1 1" stroke="black" strokeOpacity="0.2" />
    </svg>
  );
};

export const ArrowDownIcon = NFTBuilderArrowDownIcon;
export const ArrowDownIconMeta = {
  name: "NFTBuilderArrowDownIcon",
  displayName: "Arrow Down Icon",
  props: {
    className: {
      type: "string" as const,
      defaultValue: "",
    },
    iconColor: {
      type: "color" as const,
      defaultValue: "#27273A",
    },
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "ArrowDownIcon",
}

export function registerArrowDownIcon(loader?: Registerable) {
  registerComponentHelper(loader, ArrowDownIcon, ArrowDownIconMeta);
}
