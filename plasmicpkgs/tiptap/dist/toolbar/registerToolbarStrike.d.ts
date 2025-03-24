import React from "react";
import { Registerable } from "../utils";
export interface ToolbarStrikeProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarStrikeScopeClassName: string;
}
export declare function ToolbarStrike(props: ToolbarStrikeProps): React.JSX.Element | null;
export declare namespace ToolbarStrike {
    var displayName: string;
}
export declare function registerToolbarStrike(loader?: Registerable): void;
