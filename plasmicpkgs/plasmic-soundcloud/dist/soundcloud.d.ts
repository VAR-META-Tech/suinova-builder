import { ComponentMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface SoundCloudProps {
    url: string;
    visual: boolean;
    autoPlay: boolean;
    color: string;
    showComments: boolean;
    showUser: boolean;
    showRelated: boolean;
    showTeaser: boolean;
    className: string;
}
export declare const SoundCloudMeta: ComponentMeta<SoundCloudProps>;
export declare function SoundCloud({ className, url, autoPlay, color, showComments, showRelated, showTeaser, showUser, visual, }: SoundCloudProps): React.JSX.Element;
export {};
