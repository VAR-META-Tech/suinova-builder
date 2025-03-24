import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
import { Brand, Category } from "./types/site";
import { CommerceExtraFeatures } from "./utils/types";
interface ProductCollectionProps {
    className?: string;
    children?: React.ReactNode;
    emptyMessage?: React.ReactNode;
    loadingMessage?: React.ReactNode;
    count?: number;
    category: string;
    includeSubCategories?: boolean;
    brand?: string;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    search?: string;
    sort?: string;
    setControlContextData?: (data: {
        categories: Category[];
        brands: Brand[];
        features?: CommerceExtraFeatures;
        categoryCtx?: Category;
    }) => void;
}
export declare const productCollectionMeta: ComponentMeta<ProductCollectionProps>;
export declare function ProductCollection(props: ProductCollectionProps): React.JSX.Element | null;
export declare function registerProductCollection(loader?: Registerable, customProductCollectionMeta?: ComponentMeta<ProductCollectionProps>): void;
export {};
