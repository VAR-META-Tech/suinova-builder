import registerComponent, { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
export interface ParallaxWrapperProps {
    speed?: number;
    disabled?: boolean;
    previewInEditor?: boolean;
    children: React.ReactNode;
    className?: string;
}
export default function ParallaxWrapper({ speed, disabled, previewInEditor, children, className, }: ParallaxWrapperProps): React.JSX.Element;
/**
 * We're keeping the old registration without attachments to avoid confusion
 * due to the parallax custom behavior not working in old projects that didn't
 * make use of global contexts (so simply adding the custom behavior would
 * break it and it wouldn't be clear that the user should also add a
 * `ParallaxProvider`).
 */
export declare const deprecated_parallaxWrapperMeta: ComponentMeta<ParallaxWrapperProps>;
export declare function deprecated_registerParallaxWrapper(loader?: {
    registerComponent: typeof registerComponent;
}, customParallaxWrapperMeta?: ComponentMeta<ParallaxWrapperProps>): void;
/**
 * The new registration is only setting `isAttachment: true`.
 */
export declare const parallaxWrapperMeta: ComponentMeta<ParallaxWrapperProps>;
export declare function registerParallaxWrapper(loader?: {
    registerComponent: typeof registerComponent;
}, customParallaxWrapperMeta?: ComponentMeta<ParallaxWrapperProps>): void;
