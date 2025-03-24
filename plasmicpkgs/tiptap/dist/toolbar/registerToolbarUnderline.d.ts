import React from "react";
import { Registerable } from "../utils";
export interface ToolbarUnderlineProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarUnderlineScopeClassName: string;
}
export declare function ToolbarUnderline(props: ToolbarUnderlineProps): React.JSX.Element | null;
export declare namespace ToolbarUnderline {
    var displayName: string;
}
export declare function registerToolbarUnderline(loader?: Registerable): void;
