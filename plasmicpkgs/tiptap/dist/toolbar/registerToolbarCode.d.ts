import React from "react";
import { Registerable } from "../utils";
export interface ToolbarCodeProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarCodeScopeClassName: string;
}
export declare function ToolbarCode(props: ToolbarCodeProps): React.JSX.Element | null;
export declare namespace ToolbarCode {
    var displayName: string;
}
export declare function registerToolbarCode(loader?: Registerable): void;
