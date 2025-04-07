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
    image:
      "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
    floorPrice: "50 SUI",
  },
  {
    id: 2,
    name: "Magic Mushrooms",
    image:
      "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
    floorPrice: "50 SUI",
  },
  {
    id: 3,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
    floorPrice: "50 SUI",
  },
  {
    id: 4,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
    floorPrice: "50 SUI",
  },
  {
    id: 5,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/d125/0dcf/43d2a28cf3971315cbc5d8f588f7d3da?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VbtI7~AQ5TVPsaCPRDkCKbZKu0u-M-tXIzqoA3hNt0-wQmSBT8L9g5Hvi3IRzreKALm5OkeOHHL1J1~ftQNGp4wrbjH5iaOJUmwFv9aKDzn1uT37qCZttZMqM7oc1~TQb3nTrkAc-x1fJD3R4WI0HkZWEY-C2nbzHpoJaVmL1K-7xgDau-i02Kydj-bzzX0h0wzbWVUDu9vRhUT-AnmEuUJgBvHTTEH-woFBOx402wnb~5I3~FdE59E6RaP4YO6rC-BTtaK4~-k7QfEkWMJ3sgXbuzdeoRB0KJYJvquGTIcwdYAgN9~3Ch4Dk8U4~egxbiX1auvMPt2dVuSycVQPjQ__",
    floorPrice: "50 SUI",
  },
];

interface INFTCarousel extends CarouselProps {
  className?: string;
  slidesToShow?: number;
  leftBtnChildren?: ReactNode;
  rightBtnChildren?: ReactNode;
  carouselBtnGroup?: ReactNode;
  children?: ReactNode;
}
const NFTCarousel = ({
  className,
  slidesToShow,
  carouselBtnGroup,
  children,
  ...props
}: INFTCarousel) => {
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
export default NFTCarousel;

export function registerNFTCarousel(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarousel, {
    name: "nft-builder-carousel",
    displayName: "NFT Carousel",
    props: {
      autoplay: {
        type: "boolean",
        description: "Whether to scroll automatically",
        defaultValueHint: false,
      },
      dotPosition: {
        type: "choice",
        options: ["top", "bottom", "left", "right"],
        description: "The position of the dots",
        defaultValueHint: "bottom",
      },
      dots: {
        type: "boolean",
        description: "Whether to show the dots at the bottom of the gallery",
        defaultValueHint: true,
      },
      effect: {
        type: "choice",
        options: ["scrollx", "fade"],
        defaultValueHint: "scrollx",
      },
      slidesToShow: {
        type: "number",
        defaultValue: 4,
      },
      carouselBtnGroup: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: [
          {
            type: "component",
            name: "nft-builder-carousel-btn-group",
          },
        ],
      },
      children: {
        type: "slot",
        defaultValue: collections.map((collection) => ({
          type: "component",
          name: "nft-builder-carousel-item",
          props: {
            id: collection.id,
            name: collection.name,
            image: collection.image,
            floorPrice: collection.floorPrice,
          },
        })),
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTCarousel",
  });
}
