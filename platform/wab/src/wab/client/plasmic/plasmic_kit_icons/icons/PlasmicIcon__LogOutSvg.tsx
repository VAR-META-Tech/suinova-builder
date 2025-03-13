// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import { classNames } from "@plasmicapp/react-web";
import React from "react";

export type LogOutSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogOutSvgIcon(props: LogOutSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      className={classNames("plasmic-default__svg", className)}
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 16.9902L21 11.9902M21 11.9902L16 6.99023M21 11.9902H9M12 16.9902C12 17.9202 12 18.3852 11.8978 18.7667C11.6204 19.802 10.8117 20.6106 9.77646 20.888C9.39496 20.9902 8.92997 20.9902 8 20.9902H7.5C6.10218 20.9902 5.40326 20.9902 4.85195 20.7619C4.11687 20.4574 3.53284 19.8734 3.22836 19.1383C3 18.587 3 17.8881 3 16.4902V7.49023C3 6.09241 3 5.3935 3.22836 4.84218C3.53284 4.1071 4.11687 3.52308 4.85195 3.2186C5.40326 2.99023 6.10218 2.99023 7.5 2.99023H8C8.92997 2.99023 9.39496 2.99023 9.77646 3.09246C10.8117 3.36986 11.6204 4.1785 11.8978 5.21378C12 5.59528 12 6.06026 12 6.99023"
        stroke="#27273A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LogOutSvgIcon;
/* prettier-ignore-end */
