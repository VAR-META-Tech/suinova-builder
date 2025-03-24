import { GlobalActionRegistration } from "@plasmicapp/host/registerGlobalContext";
import React from "react";
import { Product } from "./types/product";
import { Category } from "./types/site";
export declare function ProductProvider({ product, children, }: {
    product: Product;
    children: React.ReactNode;
}): React.JSX.Element;
export declare const useProduct: () => Product;
export declare const PrimaryCategoryContext: React.Context<Category | undefined>;
export declare function CategoryProvider({ category, children, }: {
    category: Category;
    children: React.ReactNode;
}): React.JSX.Element;
export declare const useCategoryContext: () => Category | undefined;
export declare const usePrimaryCategory: () => Category | undefined;
export declare function ProductMediaProvider({ mediaIndex, onClick, children, }: {
    mediaIndex: number;
    children: React.ReactNode;
    onClick?: () => void;
}): React.JSX.Element;
export declare const useProductMediaContext: () => number | undefined;
export declare function CartActionsProvider(props: React.PropsWithChildren<{
    globalContextName: string;
}>): React.JSX.Element;
export declare const globalActionsRegistrations: Record<string, GlobalActionRegistration<any>>;
