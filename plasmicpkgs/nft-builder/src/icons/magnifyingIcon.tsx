import React from "react";
import { CardProps } from "antd/es/card";
import clsx from "clsx";
import { Registerable, registerComponentHelper } from "../reg-util";

interface IMagnifyingIcon extends CardProps {
  className?: string;
}

const CSSClasses = {
  magnifyingIcon: "magnifying-icon",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

export default function MagnifyingIcon({ className }: IMagnifyingIcon) {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.magnifyingIcon} {
          }
        `),
    []
  );

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, CSSClasses.magnifyingIcon)}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.913 15.9133C16.2059 15.6204 16.6808 15.6204 16.9737 15.9133L21.5299 20.4695C21.8228 20.7624 21.8228 21.2373 21.5299 21.5302C21.237 21.8231 20.7622 21.8231 20.4693 21.5302L15.913 16.9739C15.6201 16.681 15.6201 16.2062 15.913 15.9133Z"
        fill="white"
      />
    </svg>
  );
}

export function registerMagnifyingIcon(loader?: Registerable) {
  registerComponentHelper(loader, MagnifyingIcon, {
    name: "hostless-magnifying-icon",
    displayName: "Magnifying Icon",
    props: {},
    importPath: "@plasmicpkgs/nft-builder",
    importName: "MagnifyingIcon",
  });
}
