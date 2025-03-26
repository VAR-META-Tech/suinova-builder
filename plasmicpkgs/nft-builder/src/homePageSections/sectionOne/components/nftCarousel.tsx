import { Card } from "antd";
import Carousel, { CarouselRef } from "antd/es/carousel";
import React from "react";
import { Registerable, registerComponentHelper } from "../../../reg-util";

// CSS class names
const CSSClasses = {
  carousel: "nft-section-one-carousel",
  carouselItem: "nft-section-one-carousel-item",
  collectionCard: "nft-section-one-collection-card",
  cardImageWrapper: "nft-section-one-card-image-wrapper",
  cardImage: "nft-section-one-card-image",
  cardContent: "nft-section-one-card-content",
  cardTitle: "nft-section-one-card-title",
  statsContainer: "nft-section-one-stats-container",
  statLabel: "nft-section-one-stat-label",
  statValue: "nft-section-one-stat-value",
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
      "https://s3-alpha-sig.figma.com/img/a73f/8a67/1683aa5ec50a54a3bcd8d6ecd416a47c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f~pAMIOVVWdtGEFN8bhhkylMk9seMc08bHSg-qdi~6rNj1nb2c4EmZyfaxsru7ncWB1AvXzm954cTUv2VjTjnNiCfhusYeqA1fo6S~elHNkTV4dWjHilzg0z9TfZJ1MzyFJcS2cca2Qm-XQvcMPVWyH7eAr7Q2i68XRhZYvnNcpR2drRh6r1tNzXrZC~v6fi6xNvUZmV4sWvZbverO92eoloVU0-00kRa2Q92YQo6BmxUo92rKSDrLDzOPnGy35mxvDT7Pk2cpOGUtJRlxt19odXlL9OKofAfgmNkpTNsFYFva9xVVe4PDJ~JCSZiOT926SKYjzQs9YoF~sugP4yTw__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 2,
    name: "Magic Mushrooms",
    image:
      "https://s3-alpha-sig.figma.com/img/a439/14a6/dabafb424929bb1a1924940d5f7ecb27?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A0si8d4Cdx0wCGorhsZPo7qIFMakmJivXUb6x3zzpYvR~hRO4JsC-KKBCCJr9SSrRtGg4HrVTTShYRi76EhJW0cLus8SjPUdl8Lhf80v0v-tAy0iURmRF3wI4ceJYHuE8Socgr8kVUxaC0IfeyL6sgS0AsLykfLKmcoikIZxtQMTwqMc6VuHQpDkCxhSE-uBfNVjWjZjtuoh6bEz26aUSqTzfNXaNbsEt0tNnhJvT3i1ajFDXDJcrhIIlMuZdWGY0oyUOo2-tW8rRpGrPmk69ZAUjNnh9t8uuq4nJ~YrxnYj3OQgN6FORr3QFD~5jpzBsFCbMs4wnB3o2lTGlec1rw__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
  {
    id: 3,
    name: "Disco Machines",
    image:
      "https://s3-alpha-sig.figma.com/img/968d/4c6b/ffdbd0fc28e4992f2033338f7e372d61?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fK9S3YocvHXnmetFt-9U~ojK0DVytEwpOl5KD228NxuOxLFUUYOoDP~RJLnJCmRy~6p~ZQg16yEPIgtBxb~pPtZsTZtCJLw3IEwTtMmBDyB6OBd~jl94ha6JNIjOb1uAzGYJFCZkptya27nQ6c8GPkWZX4fzTIXMli~yPpxJHSo~~rgtSpVbWEEmHdLgM-EohFvo6MelKStWzE~tAbjInyZ4HRiDbvMh-PdKKjRHmDlADIIDR-6-ozBIF8UyCZoSg8GDwkSp6Or8cS~f-mPcgQv7UF5TMxADbY5ElkV8lflgX2It2kOrYHx9QeTVeHTmHJO45WolTgwVrc2WV0dE1w__",
    floorPrice: "50 SUI",
    totalVolume: "765K SUI",
  },
];

interface INFTCarousel {}

const NFTCarousel = React.forwardRef<CarouselRef | null, INFTCarousel>(
  (props, carouselRef) => {
    const cssStyles = React.useMemo(
      () =>
        minifyCss(`
          .${CSSClasses.carousel} {
            width: 100%;
          }
    
          .${CSSClasses.carouselItem} {
            padding: 0 10px;
            max-width: 330px !important;
            width: 100%;
          }
    
          .${CSSClasses.collectionCard} {
            background-color: transparent;
            border: none;
            border-radius: 16px;
            overflow: hidden;
          }
    
          .${CSSClasses.cardImageWrapper} {
            border-radius: 24px;
            overflow: hidden;
            height: 330px;
          }
    
          .${CSSClasses.cardImage} {
            max-width: 330px !important;
            width: 100%;
            height: 330px;
            object-fit: cover;
          }
    
          .${CSSClasses.cardContent} {
            padding: 16px 0;
          }
    
          .${CSSClasses.cardTitle} {
            color: white;
            margin: 0 0 16px 0;
            font-size: 20px;
            font-weight: 600;
            line-height: 140%;
          }
    
          .${CSSClasses.statsContainer} {
            display: flex;
            justify-content: space-between;
          }
    
          .${CSSClasses.statLabel} {
            color: #adb5bd;
            display: block;
            font-size: 16px;
            line-height: 140%;
            font-weight: 400;
          }
    
          .${CSSClasses.statValue} {
            color: white;
            font-weight: bold;
            font-size: 16px;
            font-weight: 700;
            line-height: 140%;
          }

          @media (max-width: 1050px) {
            .${CSSClasses.carouselItem} {
              max-width: 350px !important;
            }
      
            .${CSSClasses.cardImage} {
              max-width: 350px !important;
            }
          }

          @media (max-width: 900px) {
          }
        `),
      []
    );

    return (
      <Carousel
        ref={carouselRef}
        slidesToShow={3}
        slidesToScroll={1}
        dots={false}
        autoplay={false}
        responsive={[
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        className={CSSClasses.carousel}
      >
        <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
        {collections.map((collection) => {
          return (
            <div key={collection.id} className={CSSClasses.carouselItem}>
              <Card
                hoverable
                className={CSSClasses.collectionCard}
                bodyStyle={{ padding: 0 }}
                cover={
                  <div className={CSSClasses.cardImageWrapper}>
                    <img
                      alt={collection.name}
                      src={collection.image}
                      className={CSSClasses.cardImage}
                    />
                  </div>
                }
              >
                <div className={CSSClasses.cardContent}>
                  <div className={CSSClasses.cardTitle}>{collection.name}</div>

                  <div className={CSSClasses.statsContainer}>
                    <div>
                      <div className={CSSClasses.statLabel}></div>
                      <div className={CSSClasses.statValue}>
                        {collection.floorPrice}
                      </div>
                    </div>

                    <div>
                      <div className={CSSClasses.statLabel}>Total Volume</div>
                      <div className={CSSClasses.statValue}>
                        {collection.totalVolume}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </Carousel>
    );
  }
);

export default NFTCarousel;

export function registerNFTCarousel(loader?: Registerable) {
  registerComponentHelper(loader, NFTCarousel, {
    name: "hostless-nft-carousel",
    displayName: "NFT Carousel",
    props: {},
    importPath: "@plasmicpkgs/nft-builder",
    importName: "NFTCarousel",
  });
}
