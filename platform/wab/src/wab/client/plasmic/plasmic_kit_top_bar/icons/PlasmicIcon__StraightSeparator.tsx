
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StraightSeparatorProps = React.ComponentProps<"svg"> & {};

export function StraightSeparator(props: StraightSeparatorProps) {
  const { style, ...restProps } = props;
  return (
    <svg width="2" height="50" viewBox="0 0 2 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}> 
      <path d="M1 0.275879L1.5 49.7241" stroke="#AEAEB2"/>
    </svg>
  );
}

export default StraightSeparator;
/* prettier-ignore-end */
