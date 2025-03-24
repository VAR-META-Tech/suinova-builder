"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AudioPlayer: () => AudioPlayer,
  AudioPlayerMeta: () => AudioPlayerMeta,
  ensure: () => ensure,
  registerAll: () => registerAll
});
module.exports = __toCommonJS(src_exports);
var import_registerComponent = __toESM(require("@plasmicapp/host/registerComponent"));

// src/react-audio-player.tsx
var import_host = require("@plasmicapp/host");
var import_react_audio_player = __toESM(require("react-audio-player"));
var import_react = __toESM(require("react"));
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
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please specify the URL of the audio to embed");
  }
  const inEditor = !!(0, import_host.usePlasmicCanvasContext)();
  const isAutoPlay = inEditor ? false : autoPlay;
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_audio_player.default,
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
      (0, import_registerComponent.default)(Component, defaultMeta);
    }
  };
  if (loader) {
    _registerComponent(AudioPlayer, AudioPlayerMeta);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioPlayer,
  AudioPlayerMeta,
  ensure,
  registerAll
});
