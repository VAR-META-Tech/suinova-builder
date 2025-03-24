import React from "react";
import { Registerable } from "../utils";
export interface ToolbarBoldProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarBoldScopeClassName: string;
}
export declare function ToolbarBold(props: ToolbarBoldProps): React.JSX.Element | null;
export declare namespace ToolbarBold {
    var displayName: string;
}
export declare function registerToolbarBold(loader?: Registerable): void;
