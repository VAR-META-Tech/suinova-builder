import registerComponent, { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React, { ComponentProps } from "react";
import ReactParallaxTilt from "react-parallax-tilt";
export declare type TiltProps = ComponentProps<typeof ReactParallaxTilt>;
export default function Tilt(props: TiltProps): React.JSX.Element;
export declare function registerTilt(loader?: {
    registerComponent: typeof registerComponent;
}, customTiltMeta?: ComponentMeta<TiltProps>): void;
