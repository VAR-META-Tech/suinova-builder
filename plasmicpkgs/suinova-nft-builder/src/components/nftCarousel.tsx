import Carousel, { CarouselProps, CarouselRef } from "antd/es/carousel";
import React, { cloneElement, ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  nftCarouselContainer: "nft-carousel-container",
  carousel: "nft-carousel",
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
const collections = [
  {
    id: 1,
    name: "Happy Robots",
    image: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    price: "50 SUI",
  },
  {
    id: 2,
    name: "Magic Mushrooms",
    image: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    price: "50 SUI",
  },
  {
    id: 3,
    name: "Disco Machines",
    image: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    price: "50 SUI",
  },
  {
    id: 4,
    name: "Disco Machines",
    image: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    price: "50 SUI",
  },
  {
    id: 5,
    name: "Disco Machines",
    image: "https://suinova.var-meta.com/static/img/astronaut.jpeg",
    price: "50 SUI",
  },
];

interface INFTBuilderCarousel extends CarouselProps {
  className?: string;
  slidesToShow?: number;
  leftBtnChildren?: ReactNode;
  rightBtnChildren?: ReactNode;
  carouselBtnGroup?: ReactNode;
  children?: ReactNode;
}
const NFTBuilderCarousel = ({
  className,
  slidesToShow,
  carouselBtnGroup,
  children,
  ...props
}: INFTBuilderCarousel) => {
  const carouselRef = React.useRef<CarouselRef | null>(null);

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
          .${CSSClasses.nftCarouselContainer} {
            width: 1050px;
          }
        `),
    []
  );

  const clonedBtnGroup = React.isValidElement(carouselBtnGroup)
    ? cloneElement(carouselBtnGroup, {
        ...carouselBtnGroup.props,
        prevSlide,
        nextSlide,
      })
    : null;

  return (
    <div className={clsx(className, CSSClasses.nftCarouselContainer)}>
      {clonedBtnGroup}

      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow}
        arrows={false}
        responsive={[
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        slidesToScroll={1}
        dots={false}
        className={clsx(CSSClasses.carousel)}
        {...props}
      >
        {children}
      </Carousel>
    </div>
  );
};

export const NFTCarousel = NFTBuilderCarousel;
export const NFTCarouselMeta = {
  name: "NFTBuilderCarousel",
  displayName: "NFT Carousel",
  props: {
    autoplay: {
      type: "boolean" as const,
      description: "Whether to scroll automatically",
      defaultValueHint: false,
    },
    dotPosition: {
      type: "choice" as const,
      options: ["top", "bottom", "left", "right"],
      description: "The position of the dots",
      defaultValueHint: "bottom",
    },
    dots: {
      type: "boolean" as const,
      description: "Whether to show the dots at the bottom of the gallery",
      defaultValueHint: true,
    },
    effect: {
      type: "choice" as const,
      options: ["scrollx", "fade"],
      defaultValueHint: "scrollx",
    },
    slidesToShow: {
      type: "number" as const,
      defaultValue: 4,
    },
    carouselBtnGroup: {
      type: "slot" as const,
      hidePlaceholder: true,
      defaultValue: [
        {
          type: "component" as const,
          name: "NftBuilderCarouselBtnGroup",
        },
      ],
    },
    children: {
      type: "slot" as const,
      defaultValue: collections.map((collection) => ({
        type: "component" as const,
        name: "NFTBuilderCarouselItem",
        props: {
          id: collection.id,
          name: collection.name,
          image: collection.image,
          price: collection.price,
        },
      })),
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "NFTCarousel",
};

export function registerNFTCarousel(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarousel, NFTCarouselMeta);
}
