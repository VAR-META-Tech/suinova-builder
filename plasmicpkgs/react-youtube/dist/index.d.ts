import registerComponent, { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import YouTubeImpl, { YouTubeProps as YouTubeImplProps } from "react-youtube";
import type { Options } from "youtube-player/dist/types";
declare type PlayerVars = Exclude<Options["playerVars"], undefined>;
export declare type YouTubeProps = YouTubeImplProps & {
    [prop in keyof PlayerVars]: PlayerVars[prop] | (prop extends typeof booleanParams[number] ? boolean : never);
} & {
    mute?: boolean;
};
declare const booleanParams: readonly ["autoplay", "cc_load_policy", "controls", "disablekb", "fs", "loop", "modestbranding", "playsinline", "rel"];
declare const YouTube: React.ForwardRefExoticComponent<YouTubeImplProps & {
    autoplay?: boolean | 0 | 1 | undefined;
    cc_lang_pref?: string | undefined;
    cc_load_policy?: boolean | 1 | undefined;
    color?: "red" | "white" | undefined;
    controls?: boolean | 0 | 1 | undefined;
    disablekb?: boolean | 0 | 1 | undefined;
    enablejsapi?: 0 | 1 | undefined;
    end?: number | undefined;
    fs?: boolean | 0 | 1 | undefined;
    hl?: string | undefined;
    iv_load_policy?: 1 | 3 | undefined;
    list?: string | undefined;
    listType?: "playlist" | "search" | "user_uploads" | undefined;
    loop?: boolean | 0 | 1 | undefined;
    modestbranding?: boolean | 1 | undefined;
    origin?: string | undefined;
    playlist?: string | undefined;
    playsinline?: boolean | 0 | 1 | undefined;
    rel?: boolean | 0 | 1 | undefined;
    start?: number | undefined;
    widget_referrer?: string | undefined;
} & {
    mute?: boolean | undefined;
} & React.RefAttributes<YouTubeImpl>>;
export declare const youtubeMeta: ComponentMeta<YouTubeProps>;
export declare function registerYouTube(loader?: {
    registerComponent: typeof registerComponent;
}, customYouTubeMeta?: ComponentMeta<YouTubeProps>): void;
export default YouTube;
