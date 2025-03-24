import React from "react";
import { Registerable } from "../utils";
export interface ToolbarMentionProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarMentionScopeClassName: string;
}
export declare function ToolbarMention(props: ToolbarMentionProps): React.JSX.Element | null;
export declare namespace ToolbarMention {
    var displayName: string;
}
export declare function registerToolbarMention(loader?: Registerable): void;
