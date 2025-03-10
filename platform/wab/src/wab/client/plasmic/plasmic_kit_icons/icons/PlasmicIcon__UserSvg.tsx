// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import { classNames } from "@plasmicapp/react-web";
import React from "react";

export type UserSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserSvgIcon(props: UserSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      className={classNames("plasmic-default__svg", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6515 20.3956C20.2043 20.2804 20.5336 19.7019 20.2589 19.2086C19.6533 18.1209 18.6993 17.1651 17.4788 16.4368C15.907 15.4987 13.9812 14.9902 12 14.9902C10.0188 14.9902 8.09292 15.4987 6.52112 16.4368C5.30069 17.1651 4.34666 18.1209 3.74108 19.2086C3.46638 19.7019 3.79562 20.2804 4.34843 20.3956C9.39524 21.4474 14.6047 21.4474 19.6515 20.3956Z"
        fill="#27273A"
      />
      <circle cx="12" cy="7.99023" r="5" fill="#27273A" />
    </svg>
  );
}

export default UserSvgIcon;
/* prettier-ignore-end */
