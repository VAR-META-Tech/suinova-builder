import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
import { Category } from "./types/site";
interface CategoryCollectionProps {
    className?: string;
    children?: React.ReactNode;
    emptyMessage?: React.ReactNode;
    loadingMessage?: React.ReactNode;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    category?: string;
    setControlContextData?: (data: {
        categories: Category[];
    }) => void;
}
export declare const categoryCollectionMeta: ComponentMeta<CategoryCollectionProps>;
export declare function CategoryCollection(props: CategoryCollectionProps): React.JSX.Element | null;
export declare function registerCategoryCollection(loader?: Registerable, customCategoryCollectionMeta?: ComponentMeta<CategoryCollectionProps>): void;
export {};
