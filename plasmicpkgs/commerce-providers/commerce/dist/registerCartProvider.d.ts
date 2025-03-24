import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { Registerable } from "./registerable";
export declare const cartProviderMeta: ComponentMeta<React.PropsWithChildren<object>>;
export declare function CartProvider(props: React.PropsWithChildren<object>): React.JSX.Element;
export declare function registerCartProvider(loader?: Registerable, customCartProviderMeta?: ComponentMeta<React.PropsWithChildren<object>>): void;
