import { CodeComponentMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface PigeonMapsProps {
    provider?: string;
    latitude?: number;
    longitude?: number;
    zoomLevel?: number;
    width?: number;
    height?: number;
    animate?: boolean;
    zoomSnap?: boolean;
    metaWheelZoom?: boolean;
    twoFingerDrag?: boolean;
    className?: string;
}
export declare const PigeonMapsMeta: CodeComponentMeta<PigeonMapsProps>;
export declare function PigeonMaps({ latitude, longitude, zoomLevel, animate, zoomSnap, metaWheelZoom, twoFingerDrag, className, }: PigeonMapsProps): React.JSX.Element;
export {};
