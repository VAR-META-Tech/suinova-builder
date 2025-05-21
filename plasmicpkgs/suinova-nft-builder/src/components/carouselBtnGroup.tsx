import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

interface INftBuilderCarouselBtnGroup {
  className?: string;
  leftBtnChildren?: ReactNode;
  rightBtnChildren?: ReactNode;
  nextSlide?: () => void;
  prevSlide?: () => void;
}

const CSSClasses = {
  btnGroup: "nft-carousel-btn-group",
  leftBtn: "nft-carousel-left-btn",
  rightBtn: "nft-carousel-right-btn",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

function NftBuilderCarouselBtnGroup({
  className,
  leftBtnChildren,
  rightBtnChildren,
  nextSlide,
  prevSlide,
}: INftBuilderCarouselBtnGroup) {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.btnGroup} {
            margin-left: auto;
            display: flex;
            gap: 8px;
            width: 95px;
            margin-bottom: 10px;
        }

        .${CSSClasses.leftBtn} {
            background-color: transparent;
            border: 1px solid transparent;
            outline: 0;
            border-radius: 8px;
        }

        .${CSSClasses.leftBtn}:hover {
            border: 1px solid white;
        }

        .${CSSClasses.rightBtn} {
            background-color: transparent;
            border: 1px solid transparent;
            border: 0;
            outline: 0;
            border-radius: 8px;
        }

        .${CSSClasses.rightBtn}:hover {
            border: 1px solid white;
        }
        `),
    []
  );

  return (
    <div className={clsx(className, CSSClasses.btnGroup)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <button className={CSSClasses.leftBtn} onClick={prevSlide}>
        {leftBtnChildren}
      </button>
      <button className={CSSClasses.rightBtn} onClick={nextSlide}>
        {rightBtnChildren}
      </button>
    </div>
  );
}

export const NFTCarouselBtnGroup = NftBuilderCarouselBtnGroup;

export const NFTCarouselBtnGroupMeta = {
  name: "NftBuilderCarouselBtnGroup",
  displayName: "Carousel Button Group",
  props: {
    leftBtnChildren: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderLeftArrowIcon",
        },
      ],
    },
    rightBtnChildren: {
      type: "slot" as const,
      defaultValue: [
        {
          type: "component" as const,
          name: "NFTBuilderRightArrowIcon",
        },
      ],
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "NFTCarouselBtnGroup",
};

export function registerCarouselBtnGroup(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarouselBtnGroup, NFTCarouselBtnGroupMeta);
}
