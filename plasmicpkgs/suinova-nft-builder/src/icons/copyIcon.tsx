import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderCopyIcon {
  className?: string;
}

const NFTBuilderCopyIcon = ({ className }: INFTBuilderCopyIcon) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 3.125C6.25 2.77982 6.52982 2.5 6.875 2.5H16.875C17.2202 2.5 17.5 2.77982 17.5 3.125V13.125C17.5 13.4702 17.2202 13.75 16.875 13.75H13.125C12.7798 13.75 12.5 13.4702 12.5 13.125C12.5 12.7798 12.7798 12.5 13.125 12.5H16.25V3.75H7.5V6.875C7.5 7.22018 7.22018 7.5 6.875 7.5C6.52982 7.5 6.25 7.22018 6.25 6.875V3.125Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 6.875C2.5 6.52982 2.77982 6.25 3.125 6.25H13.125C13.4702 6.25 13.75 6.52982 13.75 6.875V16.875C13.75 17.2202 13.4702 17.5 13.125 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875V6.875ZM3.75 7.5V16.25H12.5V7.5H3.75Z"
        fill="white"
      />
    </svg>
  );
};

export const CopyIcon = NFTBuilderCopyIcon;
export const CopyIconMeta = {
  name: "NFTBuilderCopyIcon",
  displayName: "Copy Icon",
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
  importName: "CopyIcon",
};

export function registerCopyIcon(loader?: Registerable) {
  registerComponentHelper(loader, CopyIcon, CopyIconMeta);
}
