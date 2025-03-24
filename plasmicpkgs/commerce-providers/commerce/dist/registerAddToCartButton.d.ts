import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
interface AddToCartButtonProps {
    children?: React.ReactNode;
}
export declare const addToCartButtonMeta: ComponentMeta<AddToCartButtonProps>;
export declare function AddToCartButton(props: AddToCartButtonProps): React.ReactElement<unknown, string | ((props: any, deprecatedLegacyContext?: any) => React.ReactElement<any, any> | null) | (new (props: any, deprecatedLegacyContext?: any) => React.Component<any, any, any>)> | null;
export declare function registerAddToCartButton(loader?: Registerable, customAddToCartButtonMeta?: ComponentMeta<AddToCartButtonProps>): void;
export {};
