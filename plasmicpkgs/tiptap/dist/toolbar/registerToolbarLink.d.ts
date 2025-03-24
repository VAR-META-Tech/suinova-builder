import React from "react";
import { Registerable } from "../utils";
export interface ToolbarLinkProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarLinkScopeClassName: string;
}
export declare function ToolbarLink(props: ToolbarLinkProps): React.JSX.Element | null;
export declare namespace ToolbarLink {
    var displayName: string;
}
export declare function registerToolbarLink(loader?: Registerable): void;
