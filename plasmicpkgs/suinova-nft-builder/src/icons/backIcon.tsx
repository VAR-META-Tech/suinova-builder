import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface INFTBuilderBackIcon {
  className?: string;
}

function NFTBuilderBackIcon({ className }: INFTBuilderBackIcon) {
  return (
    <svg
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 24V14L11 15.875"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 23.3752C17.5223 23.7675 18.1715 24 18.875 24C20.6009 24 22 22.6009 22 20.875C22 19.1491 20.6009 17.75 18.875 17.75C18.1715 17.75 17.5223 17.9825 17 18.3748L17.625 14H22"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.45206 8.42028C0.797264 13.6588 0.487905 22.4595 5.76109 28.0771C11.0343 33.6948 19.8931 34.0021 25.5479 28.7636C31.2027 23.525 31.5121 14.7244 26.2389 9.10671C23.2395 5.91139 19.08 4.43414 15.0099 4.71831M17 1.5L13.4342 4.87773L17 8.5"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const BackIcon = NFTBuilderBackIcon;
export const BackIconMeta = {
  name: "NFTBuilderBackIcon",
  displayName: "Back Icon",
  props: {},
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "BackIcon",
};

export function registerBackIcon(loader?: Registerable) {
  registerComponentHelper(loader, BackIcon, BackIconMeta);
}
