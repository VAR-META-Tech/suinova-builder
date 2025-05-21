import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderRightArrowIcon {
  className?: string;
  iconColor?: string;
}

function NFTBuilderRightArrowIcon({
  className,
  iconColor,
}: INFTBuilderRightArrowIcon) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2929 6.29289C17.6834 5.90237 18.3166 5.90237 18.7071 6.29289L27.7071 15.2929C28.0976 15.6834 28.0976 16.3166 27.7071 16.7071L18.7071 25.7071C18.3166 26.0976 17.6834 26.0976 17.2929 25.7071C16.9024 25.3166 16.9024 24.6834 17.2929 24.2929L25.5858 16L17.2929 7.70711C16.9024 7.31658 16.9024 6.68342 17.2929 6.29289Z"
        fill={iconColor}
      />
    </svg>
  );
}

export const RightArrowIcon = NFTBuilderRightArrowIcon;
export const RightArrowIconMeta = {
  name: "NFTBuilderRightArrowIcon",
  displayName: "Right Arrow Icon",
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
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "RightArrowIcon",
};

export function registerRightArrowIcon(loader?: Registerable) {
  registerComponentHelper(loader, RightArrowIcon, RightArrowIconMeta);
}
