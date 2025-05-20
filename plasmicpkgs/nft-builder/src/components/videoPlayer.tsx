import React, { ReactNode, useCallback, useRef, useState } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";

const CSSClasses = {
  videoWrapper: "video-wrapper",
  video: "video-player",
  overlay: "video-overlay",
  overlayNone: "video-overlay-none",
  playButton: "play-button",
  skipBtn: "skip-button",
  playIcon: "play-icon",
  progressContainer: "progress-container",
  time: "time-display",
  progressBar: "progress-bar",
  progress: "progress-fill",
};

interface INFTBuilderVideoPlayer {
  className?: string;
  backwardIcon?: ReactNode;
  forwardIcon?: ReactNode;
  playIcon?: ReactNode;
  stopIcon?: ReactNode;
  thumbnail?: string
  videoSrc?: string
}

const NFTBuilderVideoPlayer = ({
  forwardIcon,
  backwardIcon,
  className,
  playIcon,
  stopIcon,
  thumbnail,
  videoSrc
}: INFTBuilderVideoPlayer) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeInfo, setTimeInfo] = useState({
    currentTime: "00:00",
    duration: "00:00",
    progress: 0,
  });

  const { currentTime, duration, progress } = timeInfo;

  const cssStyles = React.useMemo(
    () => `
     .${CSSClasses.videoWrapper} {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        width: 100%;
        height: auto;
      }

      .${CSSClasses.video} {
        width: 100%;
        height: auto;
        display: block;
        background: #1a202c;
      }

      .${CSSClasses.overlay} {
         position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .${CSSClasses.overlayNone} {
        display: none;
      }

      .${CSSClasses.videoWrapper}:hover>.${CSSClasses.overlay} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      } 

      .${CSSClasses.playButton} {
        background: rgba(43, 43, 43, 0.2);
        border: 1px solid #968497;
        border-radius: 50%; 
        width: 100%;
        height: 100%;
        max-width: 90px;
        max-height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.3s;
        backdrop-filter: blur(10px);
        margin: 0px 10px;
      }

      .${CSSClasses.playButton}:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      .${CSSClasses.skipBtn} {
        width: 100%;
        height: 100%;
        max-width: 60px;
        max-height: 60px;
        font-size: 0.8rem;
        color: white;
      }

      .${CSSClasses.playIcon} {
        width: 24px;
        height: 24px;
        color: white;
      }

      .${CSSClasses.progressContainer} {
         position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
      }

      .${CSSClasses.time} {
        position: absolute;
        bottom: 5px;
        right: 10px;
        font-size: 14px;
        color: white;
      }

      .${CSSClasses.progressBar} {
        height: 5px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2.5px;
        overflow: hidden;
      }

      .${CSSClasses.progress} {
        height: 100%;
        background: white;
        transition: width 0.3s;
      }
    `,
    []
  );

  const handlePlayPause = useCallback(() => {
    const overlay = overlayRef.current;

    if (isPlaying) {
      videoRef.current?.pause();
      overlay?.classList?.remove(CSSClasses.overlayNone);
    } else {
      overlay?.classList?.add(CSSClasses.overlayNone);
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    const videoDuration = video?.duration ?? 0;
    const videoCurrentTime = video?.currentTime ?? 0;
    const minutes = Math.floor(videoCurrentTime / 60);
    const seconds = Math.floor(videoCurrentTime % 60);
    const videoProgress = (videoCurrentTime / videoDuration) * 100;
    const currentTimeString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    setTimeInfo((prev) => ({
      ...prev,
      currentTime: currentTimeString,
      progress: videoProgress,
    }));
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    const videoDuration = video?.duration ?? 0;
    const minutes = Math.floor(videoDuration / 60);
    const seconds = Math.floor(videoDuration % 60);
    const durationString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    setTimeInfo((prev) => ({
      ...prev,
      duration: durationString,
    }));
  }, []);

  const onBack = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = video.currentTime - 15;
    }
  }, []);

  const onForward = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = video.currentTime + 15;
    }
  }, []);

  return (
    <div className={clsx(className, CSSClasses.videoWrapper)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <video
        ref={videoRef}
        className={CSSClasses.video}
        poster={thumbnail}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={CSSClasses.overlay} ref={overlayRef}>
        <button
          className={`${CSSClasses.playButton} ${CSSClasses.skipBtn}`}
          onClick={onBack}
        >
          {backwardIcon}
        </button>
        <button
          className={CSSClasses.playButton}
          onClick={handlePlayPause}
          aria-label="Play video"
        >
          {!isPlaying ? playIcon : stopIcon}
        </button>
        <button
          className={`${CSSClasses.playButton} ${CSSClasses.skipBtn}`}
          onClick={onForward}
        >
          {forwardIcon}
        </button>
      </div>

      <div className={CSSClasses.progressContainer}>
        <span
          className={CSSClasses.time}
        >{`${currentTime} / ${duration}`}</span>
        <div className={CSSClasses.progressBar}>
          <div
            className={CSSClasses.progress}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export const VideoPlayer = NFTBuilderVideoPlayer;
export const VideoPlayerMeta: ComponentMeta<INFTBuilderVideoPlayer> = {
  name: "NFTBuilderVideoPlayer",
  displayName: "NFT Video Player",
  props: {
    className: {
      type: "string" as const,
    },
    backwardIcon: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "nft-builder-back-icon",
        },
      ],
    },
    forwardIcon: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "nft-builder-forward-icon",
        },
      ],
    },
    playIcon: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "nft-builder-play-icon",
        },
      ],
    },
    stopIcon: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "nft-builder-stop-icon",
        },
      ],
    },
    thumbnail: {
      type: "imageUrl" as const,
      defaultValue: "https://s3-alpha-sig.figma.com/img/307e/78e9/1542c6bc2e88ac8d5bd1190edf7f182f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YC9Nb-81NWbkKhQ9Qpkn55~KXZQkInPijbohqwT5FprPXZEaJAoJFR61Gs4KcO3cPFLXBIC4jWPYaRUYYYuFN30H4QqHDZE5BOKP4LgkXgwp7TCRTDrpQtIf4ESdfSQrm-9XaoMetypW8O0ZV59yGabl3b67dCu9rPn7VEB~97QLneBt1OJS6Drh5yq98BtOtFjoTGu2a9aYUA1YblTeggFXP5e00j9MzL~kMdQf0KOH8-hBjoEeYENT6beZ1ecmGcYr0Y3OCI5BL3U6mIX7e6BbqrMG-4qMno60AImR6TNuU9hB55wJxJ4oMbtZeT4~BovB-RUvW-oRWMfq9rS-pQ__"
    },
    videoSrc: {
      type: "href" as const,
      defaultValue: "https://www.youtube.com/embed/NNQLJcJEzv0?si=PfX5rnN-HxvOUuQh"
    }
  },
  importPath: "@plasmicpkgs/nft-builder/dist/index.js",
  importName: "VideoPlayer",
};

export function registerVideoPlayer(loader?: Registerable) {
  registerComponentHelper(loader, VideoPlayer, VideoPlayerMeta);
}
