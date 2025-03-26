import { Button } from "antd";
import React from "react";
import clsx from "clsx";
import { Registerable, registerComponentHelper } from "../../../reg-util";
import RightArrowIcon from "../../../icons/rightArrowIcon";

// CSS class names
const CSSClasses = {
  carouselRightButton: "nft-carousel-right-button",
  rightArrowIcon: "nft-carousel-right-arrow-icon",
};

// Minify CSS helper function
const minifyCss = (css: string) => {
  return css
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .trim();
};

interface ICarouselLeftButton extends React.ComponentProps<typeof Button> {
  className?: string;
  nextSlide: () => void;
}

export const CarouselRightButton = ({
  className,
  nextSlide,
  ...props
}: ICarouselLeftButton) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.carouselRightButton} {
            width: 60px;
            height: 40px;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
        }

        .${CSSClasses.carouselRightButton}:hover {
            border: solid 1px white;
        }

        .${CSSClasses.rightArrowIcon} {
            margin: 0;
        }

      `),
    []
  );
  return (
    <Button
      className={clsx(className, CSSClasses.carouselRightButton)}
      onClick={nextSlide}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <RightArrowIcon className={CSSClasses.rightArrowIcon} />
    </Button>
  );
};

export function registerCarouselRightButton(loader?: Registerable) {
  registerComponentHelper(loader, CarouselRightButton, {
    name: "hostless-carousel-right-button",
    displayName: "Carousel Right Button",
    props: {
      type: {
        type: "choice",
        options: ["default", "primary", "ghost", "dashed", "link", "text"],
        description:
          "Can be set to primary, ghost, dashed, link, text, default",
        defaultValueHint: "default",
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
        description: "Set the size of button",
        defaultValueHint: "medium",
      },
      shape: {
        type: "choice",
        options: ["default", "circle", "round"],
        description: "Can be set button shape",
        defaultValueHint: "default",
      },
      disabled: {
        type: "boolean",
        description: "Disabled state of button",
        defaultValueHint: false,
      },
      ghost: {
        type: "boolean",
        description:
          "Make background transparent and invert text and border colors",
        defaultValueHint: false,
      },
      danger: {
        type: "boolean",
        description: "Set the danger status of button",
        defaultValueHint: false,
      },
      block: {
        type: "boolean",
        description: "Option to fit button width to its parent width",
        defaultValueHint: false,
      },
      loading: {
        type: "boolean",
        description: "Set the loading status of button",
        defaultValueHint: false,
      },
      href: {
        type: "string",
        description: "Redirect url of link button",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "CarouselRightButton",
  });
}
