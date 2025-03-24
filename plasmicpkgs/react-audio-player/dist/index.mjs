// src/index.tsx
import registerComponent from "@plasmicapp/host/registerComponent";

// src/react-audio-player.tsx
import { usePlasmicCanvasContext } from "@plasmicapp/host";
import ReactAudioPlayer from "react-audio-player";
import React from "react";
function ensure(x) {
  if (x === null || x === void 0) {
    debugger;
    throw new Error(`Value must not be undefined or null`);
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/react-audio-player";
var AudioPlayerMeta = {
  name: "hostless-react-audio-player",
  displayName: "AudioPlayer",
  importName: "AudioPlayer",
  importPath: modulePath,
  providesData: true,
  description: "React Audio Player to embed audio",
  defaultStyles: {
    width: "600px",
    height: "700px"
  },
  props: {
    src: {
      type: "string",
      displayName: "URL",
      description: "The URL of the audio to embed",
      defaultValue: "https://on.soundcloud.com/hS668"
    },
    autoPlay: {
      type: "boolean",
      displayName: "AutoPlay",
      description: "If true, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.",
      defaultValue: false
    },
    controls: {
      type: "boolean",
      displayName: "Controls",
      description: "The browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback",
      defaultValue: false
    },
    loop: {
      type: "boolean",
      displayName: "Loop",
      description: "If true, the audio player will automatically seek back to the start upon reaching the end of the audio.",
      defaultValue: false
    },
    muted: {
      type: "boolean",
      displayName: "Muted",
      description: "A Boolean attribute that indicates whether the audio will be initially silenced",
      defaultValue: false
    },
    volume: {
      type: "number",
      displayName: "Volume",
      description: "Volume of the audio",
      defaultValue: 1
    }
  }
};
function AudioPlayer({
  className,
  src,
  autoPlay,
  controls,
  loop,
  muted,
  volume
}) {
  if (!src) {
    return /* @__PURE__ */ React.createElement("div", null, "Please specify the URL of the audio to embed");
  }
  const inEditor = !!usePlasmicCanvasContext();
  const isAutoPlay = inEditor ? false : autoPlay;
  return /* @__PURE__ */ React.createElement(
    ReactAudioPlayer,
    {
      src,
      autoPlay: isAutoPlay,
      controls,
      loop,
      muted,
      volume,
      className
    }
  );
}

// src/index.tsx
function registerAll(loader) {
  const _registerComponent = (Component, defaultMeta) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  if (loader) {
    _registerComponent(AudioPlayer, AudioPlayerMeta);
  }
}
export {
  AudioPlayer,
  AudioPlayerMeta,
  ensure,
  registerAll
};
