import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

interface ICarouselBtnGroup {
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

export default function CarouselBtnGroup({
  className,
  leftBtnChildren,
  rightBtnChildren,
  nextSlide,
  prevSlide,
}: ICarouselBtnGroup) {
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

export function registerCarouselBtnGroup(loader?: Registerable) {
  registerComponentHelper(loader, CarouselBtnGroup, {
    name: "nft-builder-carousel-btn-group",
    displayName: "Carousel Button Group",
    props: {
      leftBtnChildren: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-left-arrow-icon",
          },
        ],
      },
      rightBtnChildren: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-right-arrow-icon",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "CarouselBtnGroup",
  });
}
