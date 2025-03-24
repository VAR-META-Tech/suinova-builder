import React from "react";
import { ReactQuillProps } from "react-quill";
import { Registerable } from "./utils";
declare type ToolbarOptionsType = "textStyle" | "script" | "fontFamily" | "heading" | "fontSizes" | "colors" | "formatting" | "inputTypes";
export declare function Quill(props: ReactQuillProps & {
    containerClassName: string;
    customToolbar: any[];
    toolbar: Record<ToolbarOptionsType, any>;
}): React.JSX.Element | null;
export declare const quillHelpers: {
    states: {
        value: {
            onChangeArgsToValue: ((value: string, delta: import("quill").DeltaStatic, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void) | undefined;
        };
    };
};
export declare function registerQuill(loader?: Registerable): void;
export {};
