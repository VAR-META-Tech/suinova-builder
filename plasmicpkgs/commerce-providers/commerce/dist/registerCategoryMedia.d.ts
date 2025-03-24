import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface CategoryMediaProps {
    className: string;
    mediaIndex?: number;
}
export declare const categoryMediaMeta: ComponentMeta<CategoryMediaProps>;
export declare const CategoryMedia: React.ForwardRefExoticComponent<CategoryMediaProps & React.RefAttributes<HTMLImageElement>>;
export declare function registerCategoryMedia(loader?: Registerable, customCategoryMediaMeta?: ComponentMeta<CategoryMediaProps>): void;
export {};
