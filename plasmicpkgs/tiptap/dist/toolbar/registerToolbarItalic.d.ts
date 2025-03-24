import React from "react";
import { Registerable } from "../utils";
export interface ToolbarItalicProps {
    className: string;
    children: React.ReactNode;
    selectedClassName: string;
    toolbarItalicScopeClassName: string;
}
export declare function ToolbarItalic(props: ToolbarItalicProps): React.JSX.Element | null;
export declare namespace ToolbarItalic {
    var displayName: string;
}
export declare function registerToolbarItalic(loader?: Registerable): void;
