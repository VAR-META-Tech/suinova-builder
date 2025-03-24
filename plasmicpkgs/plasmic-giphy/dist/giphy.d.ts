import { ComponentMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface GiphyProps {
    searchTerm: string;
    className: string;
    noLayout?: boolean;
}
export declare const GiphyMeta: ComponentMeta<GiphyProps>;
export declare function Giphy({ searchTerm, className }: GiphyProps): React.JSX.Element;
export {};
