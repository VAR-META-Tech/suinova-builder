import { MentionOptions } from "@tiptap/extension-mention";
import React from "react";
import { Registerable } from "./utils";
export type QueryResult = {
    data?: {
        response: any[];
    };
    error?: Error;
    isLoading?: boolean;
};
export type MentionProps = Omit<MentionOptions, "HTMLAttributes"> & {
    className: string;
    dataStatic?: any[];
    hasDataDynamic?: boolean;
    dataDynamic?: QueryResult;
    suggestionItem: React.ReactNode;
    searchField?: string;
    popupClassName?: string;
    itemClassName?: string;
    selectedItemClassName?: string;
    mentionClassName?: string;
    maxSuggestionCount?: number;
};
export declare function Mention(props: MentionProps): React.JSX.Element;
export declare namespace Mention {
    var displayName: string;
}
export declare function registerMention(loader?: Registerable): void;
