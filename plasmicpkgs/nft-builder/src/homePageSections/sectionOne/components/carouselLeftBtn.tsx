import { Button } from "antd";
import React  from "react";
import clsx from "clsx";
import { Registerable, registerComponentHelper } from "../../../reg-util";
import LeftArrowIcon from "../../../icons/leftArrowIcon";

// CSS class names
const CSSClasses = {
  leftArrowIcon: "nft-carousel-left-arrow-icon",
  carouselLeftButton: "nft-carousel-left-btn"
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
  prevSlide: () => void;
}

export const CarouselLeftButton = ({
  className,
  prevSlide,
  ...props
}: ICarouselLeftButton) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.carouselLeftButton} {
            width: 60px;
            height: 40px;
            padding: 0px;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
        }

        .${CSSClasses.carouselLeftButton}:hover {
            border:1px solid white;
        }

        .${CSSClasses.leftArrowIcon} {
           margin: 0;
        }
      `),
    []
  );
  return (
    <Button
      className={clsx(className, CSSClasses.carouselLeftButton)}
      onClick={prevSlide}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <LeftArrowIcon className={CSSClasses.leftArrowIcon} /> 
    </Button>
  );
};

export function registerCarouselLeftButton(loader?: Registerable) {
  registerComponentHelper(loader, CarouselLeftButton, {
    name: "hostless-carousel-left-button",
    displayName: "Carousel Left Button",
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
    importName: "CarouselLeftButton",
  });
}
