import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderPlayIcon {
  className?: string;
}

const NFTBuilderPlayIcon = ({ className }: INFTBuilderPlayIcon) => {
  return (
    <svg
      width="32"
      height="36"
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.496 20.5942C32.4975 19.4398 32.4975 16.5513 30.496 15.3968L4.49892 0.401746C2.49892 -0.75185 0 0.691597 0 3.00044V32.9906C0 35.2995 2.49893 36.7429 4.49893 35.5893L30.496 20.5942Z"
        fill="white"
      />
    </svg>
  );
};

export const PlayIcon = NFTBuilderPlayIcon;
export const PlayIconMeta = {
  name: "NFTBuilderPlayIcon",
  displayName: "Play Icon",
  props: {
    className: {
      type: "string" as const,
      defaultValue: "",
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "PlayIcon",
};

export function registerPlayIcon(loader?: Registerable) {
  registerComponentHelper(loader, PlayIcon, PlayIconMeta);
}
