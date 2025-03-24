import { SuggestionProps } from "@tiptap/suggestion";
import React from "react";
declare const _default: React.ForwardRefExoticComponent<SuggestionProps<any> & {
    suggestionItem: React.ReactNode;
    searchField: string;
    popupClassName: string;
    itemClassName: string;
    selectedItemClassName: string;
} & React.RefAttributes<{
    onKeyDown: (e: KeyboardEvent) => boolean;
}>>;
export default _default;
