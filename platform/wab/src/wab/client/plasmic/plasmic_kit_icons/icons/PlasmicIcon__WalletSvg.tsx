// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import { classNames } from "@plasmicapp/react-web";
import React from "react";

export type WalletSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WalletSvgIcon(props: WalletSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("plasmic-default__svg", className)}
    >
      <path
        d="M14.25 1.99023H9.75C6.56802 1.99023 4.97703 1.99023 3.98851 2.99444C3 3.99865 3 5.61489 3 8.84738V11.1331C3 14.3656 3 15.9818 3.98851 16.986C4.97703 17.9902 6.56802 17.9902 9.75 17.9902H14.25C17.432 17.9902 19.023 17.9902 20.0115 16.986C21 15.9818 21 14.3656 21 11.1331V8.84738C21 5.61489 21 3.99865 20.0115 2.99444C19.023 1.99023 17.432 1.99023 14.25 1.99023Z"
        stroke="#27273A"
      />
      <path d="M7 5.99023H10" stroke="#27273A" stroke-linecap="round" />
      <path
        d="M19 13.9902H17C16.0572 13.9902 15.5858 13.9902 15.2929 13.6973C15 13.4044 15 12.933 15 11.9902C15 11.0474 15 10.576 15.2929 10.2831C15.5858 9.99023 16.0572 9.99023 17 9.99023H19C19.9428 9.99023 20.4142 9.99023 20.7071 10.2831C21 10.576 21 11.0474 21 11.9902C21 12.933 21 13.4044 20.7071 13.6973C20.4142 13.9902 19.9428 13.9902 19 13.9902Z"
        stroke="#27273A"
      />
    </svg>
  );
}

export default WalletSvgIcon;
/* prettier-ignore-end */
