import registerComponent, { ComponentMeta } from "@plasmicapp/host/registerComponent";
import registerGlobalContext, { GlobalContextMeta } from "@plasmicapp/host/registerGlobalContext";
import React from "react";
import { ParallaxProviderProps } from "react-scroll-parallax/dist/components/ParallaxProvider/types";
export declare function ParallaxProviderWrapper({ children, ...props }: React.PropsWithChildren<ParallaxProviderProps>): React.JSX.Element;
/**
 * @deprecated use `globalParallaxProviderMeta` instead.
 */
export declare const parallaxProviderMeta: ComponentMeta<ParallaxProviderProps>;
/**
 * @deprecated use `registerGlobalParallaxProvider` instead.
 */
export declare function registerParallaxProvider(loader?: {
    registerComponent: typeof registerComponent;
}, customParallaxProviderMeta?: ComponentMeta<ParallaxProviderProps>): void;
export declare const globalParallaxProviderMeta: GlobalContextMeta<ParallaxProviderProps>;
export declare function registerGlobalParallaxProvider(loader?: {
    registerGlobalContext: typeof registerGlobalContext;
}, customParallaxProviderMeta?: GlobalContextMeta<ParallaxProviderProps>): void;
