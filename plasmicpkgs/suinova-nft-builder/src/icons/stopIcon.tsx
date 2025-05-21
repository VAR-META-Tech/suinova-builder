import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

interface INFTBuilderStopIcon {
  className?: string;
}

const CSSClasses = {
  stopIcon: "stop-icon",
};

function NFTBuilderStopIcon({ className }: INFTBuilderStopIcon) {
  const cssStyles = React.useMemo(
    () => `
       .${CSSClasses.stopIcon} {
          width: 32px;
          height: 32px;
        }
      `,
    []
  );

  return (
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      style={{ width: "32px", height: "32px" }}
      className={clsx(className, CSSClasses.stopIcon)}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>stop</title> <desc>Created with Sketch Beta.</desc>
        <defs> </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-520.000000, -571.000000)"
            fill="#ffffff"
          >
            <path
              d="M546,571 L522,571 C520.896,571 520,571.896 520,573 L520,597 C520,598.104 520.896,599 522,599 L546,599 C547.104,599 548,598.104 548,597 L548,573 C548,571.896 547.104,571 546,571"
              id="stop"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export const StopIcon = NFTBuilderStopIcon;
export const StopIconMeta = {
  name: "NFTBuilderStopIcon",
  displayName: "Stop Icon",
  props: {
    className: {
      type: "string" as const,
      defaultValue: "",
    },
  },
  importPath: "/dist/index.js",
  importName: "StopIcon",
};

export function registerStopIcon(loader?: Registerable) {
  registerComponentHelper(loader, StopIcon, StopIconMeta);
}
