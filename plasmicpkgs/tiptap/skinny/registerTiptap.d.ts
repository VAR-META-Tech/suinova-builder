import { ActionProps } from "@plasmicapp/host/registerComponent";
import type { JSONContent } from "@tiptap/react";
import React from "react";
import { Registerable } from "./utils";
export declare const TIPTAP_COMPONENT_NAME = "hostless-tiptap";
export type TiptapProps = {
    contentHtml?: string;
    contentJson?: JSONContent;
    defaultContentJson?: JSONContent;
    useJson: boolean;
    extensions?: React.ReactElement;
    toolbar?: React.ReactElement;
    className: string;
    onChange: (content: JSONContent) => void;
};
export declare function Tiptap(props: TiptapProps): React.JSX.Element | null;
export declare function TiptapWrapper(props: TiptapProps): React.JSX.Element;
export declare function AddExtension({ studioOps, componentProps, }: ActionProps<TiptapProps>): React.JSX.Element;
export declare function registerTiptap(loader?: Registerable): void;
