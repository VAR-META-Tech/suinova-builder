import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface IArrowDown {
  className?: string;
}

const ArrowDown = ({ className }: IArrowDown) => {
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

export default ArrowDown;

export function registerArrowDown(loader?: Registerable) {
  registerComponentHelper(loader, ArrowDown, {
    name: "nft-builder-arrow-down-icon",
    displayName: "Arrow Down Icon",
    props: {
      iconColor: {
        type: "color",
        defaultValue: "#27273A",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "ArrowDownIcon",
  });
}
