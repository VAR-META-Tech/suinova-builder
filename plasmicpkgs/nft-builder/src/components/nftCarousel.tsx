import Carousel, { CarouselProps, CarouselRef } from "antd/es/carousel";
import React, { cloneElement, ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  nftCarouselContainer: "nft-carousel-container",
  carousel: "nft-carousel",
  carouselItem: "nft-carousel-item",
  collectionCard: "nft-carousel-collection-card",
  cardImageWrapper: "nft-carousel-card-image-wrapper",
  cardImage: "nft-carousel-card-image",
  cardContent: "nft-carousel-card-content",
  cardTitle: "nft-carousel-card-title",
  statsContainer: "nft-carousel-stats-container",
  statLabel: "nft-carousel-stat-label",
  statValue: "nft-carousel-stat-value",
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
      "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 2,
    name: "Magic Mushrooms",
    image:
      "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 3,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 4,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 5,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/95d7/4adf/5e22f84c9cd16dedd040bb5691acd5ec?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZiU6y5iJZ03xClz-XxUUhvYiaBn9RBcEKqhGU6RG4AgmxFvrlxOLrn4Kgg3KHh~x0A7iyQcZa55Lz~mKxJ4jBiMf3sGQGgENAP7-Gom3GNgCr7GFPkYnpc3VSTDVIgdCxq3LqxDXo5qlxDS7UafhIrGK8eZEHpupbJYCqRB2gShQSuawYBOjz-a5rl1Aac3zzMHgpUud7t1AHwhAB21f0QZNdiUiulyZRk0bZnmcuD4XjsI3Og07YLlg2Fj3s3dBGgqe8o9wurToR9RHDKL4sCKhkXNS2qvNX2T04uZgxPXlMq82H8rQKvY~MVamkQEBHeWWFhHq~xoKsK~VDba1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
];

interface INFTCarousel extends CarouselProps {
  className?: string;
  slidesToShow?: number;
  leftBtnChildren?: ReactNode;
  rightBtnChildren?: ReactNode;
  carouselBtnGroup?: ReactNode;
}
const NFTCarousel = ({
  className,
  slidesToShow,
  carouselBtnGroup,
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
    
          .${CSSClasses.carouselItem} {
            padding: 0 10px;
            max-width: 240px;
            width: 100%;
          }
    
          .${CSSClasses.collectionCard} {
            background-color: transparent;
            border: none;
            border-radius: 16px;
            overflow: hidden;
          }
    
          .${CSSClasses.cardImageWrapper} {
            border-top-right-radius: 24px;
            border-top-left-radius: 24px;
            overflow: hidden;
            height: 240px;
          }
    
          .${CSSClasses.cardImage} {
            max-width: 240px;
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
    
          .${CSSClasses.cardContent} {
            background-color: #1A2938;
            border-bottom-right-radius: 24px;
            border-bottom-left-radius: 24px;
            padding: 12px 20px;
          }
    
          .${CSSClasses.cardTitle} {
            color: white;
            text-align: start;
            margin: 0 0 8px 0;
            font-size: 16px;
            font-weight: 500;
            line-height: 140%;
          }
    
          .${CSSClasses.statsContainer} {
            display: flex;
            justify-content: space-between;
          }
    
          .${CSSClasses.statValue} {
            color: white;
            font-weight: bold;
            font-size: 20px;
            font-weight: 600;
            line-height: 140%;
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
        {collections.map((collection) => {
          return (
            <div key={collection.id} className={CSSClasses.carouselItem}>
              <div className={CSSClasses.cardImageWrapper}>
                <img
                  alt={collection.name}
                  src={collection.image}
                  className={CSSClasses.cardImage}
                />
              </div>
              <div className={CSSClasses.cardContent}>
                <div className={CSSClasses.cardTitle}>{collection.name}</div>
                <div className={CSSClasses.statsContainer}>
                  <div className={CSSClasses.statValue}>
                    {collection.floorPrice}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default NFTCarousel;

export function registerNFTCarousel(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarousel, {
    name: "hostless-nft-carousel",
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
        defaultValue: [
          {
            type: "component",
            name: "hostless-carousel-btn-group",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTCarousel",
  });
}
