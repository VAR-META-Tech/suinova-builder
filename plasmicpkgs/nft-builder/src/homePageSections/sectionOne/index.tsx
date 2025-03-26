import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../../reg-util";
import clsx from "clsx";
import { CarouselRef } from "antd/es/carousel";

// CSS class names
const CSSClasses = {
  sectionContainer: "nft-section-one-section-container",
  contentWrapper: "nft-section-one-content-wrapper",
  headerSection: "nft-section-one-header-section",
  sectionTitle: "nft-section-one-section-title",
  sectionSubtitle: "nft-section-one-section-subtitle",
  navButtons: "nft-section-one-nav-buttons",
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

interface ISectionOne {
  className?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  carousel?: ReactNode;
  carouselPrevBtn?: ReactNode;
  carouselNextBtn?: ReactNode;
}

const SectionOne = ({
  className,
  sectionTitle,
  sectionDescription,
  carousel,
  carouselNextBtn,
  carouselPrevBtn,
}: ISectionOne) => {
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
          .${CSSClasses.sectionContainer} {
            background-color: #0a0e17;
            padding: 40px 20px;
            color: white;
            width: 100%;
          }
    
          .${CSSClasses.contentWrapper} {
            max-width: 1050px;
            margin: 0 auto;
          }
    
          .${CSSClasses.headerSection} {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          }
    
          .${CSSClasses.sectionTitle} {
            color: white;
            margin: 0px 0px 8px 0px;
            font-size: 36px;
            line-height: 120%;
            font-weight: 600;
          }
    
          .${CSSClasses.sectionSubtitle} {
            color: white;
            font-size: 20px;
            font-weight: 400;
            line-height: 160%;
          }
    
          .${CSSClasses.navButtons} {
            display: flex;
          }
    
          @media (max-width: 930px) {
            .${CSSClasses.contentWrapper} {
              max-width: 100%;
            }
          }

          @media (max-width: 900px) {
            .${CSSClasses.contentWrapper} {
              max-width: 600px;
            }
          }
        `),
    []
  );
  const CloneCarousel = React.cloneElement(carousel as React.ReactElement, {
    ref: carouselRef,
  });

  const ClonePrevBtn = React.cloneElement(
    carouselPrevBtn as React.ReactElement,
    {
      prevSlide,
    }
  );
  
  const CloneNextBtn = React.cloneElement(
    carouselNextBtn as React.ReactElement,
    {
      nextSlide,
    }
  );
  return (
    <div className={clsx(CSSClasses.sectionContainer, className)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className={CSSClasses.contentWrapper}>
        <div className={CSSClasses.headerSection}>
          <div>
            <div className={CSSClasses.sectionTitle}>{sectionTitle}</div>
            <div className={CSSClasses.sectionSubtitle}>
              {sectionDescription}
            </div>
          </div>

          <div className={CSSClasses.navButtons}>
            {ClonePrevBtn}
            {CloneNextBtn}
          </div>
        </div>

        {CloneCarousel}
      </div>
    </div>
  );
};

export default SectionOne;

export function registerSectionOne(loader?: Registerable) {
  registerComponentHelper(loader, SectionOne, {
    name: "hostless-section-one",
    displayName: "SectionOne",
    props: {
      sectionTitle: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Trending Collection",
          },
        ],
      },
      sectionDescription: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Checkout our weekly updated trending collection.",
          },
        ],
      },
      leftArrowIcon: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-left-arrow-icon",
          },
        ],
      },
      rightArrowIcon: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-right-arrow-icon",
          },
        ],
      },
      carousel: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "hostless-nft-carousel",
        },
      },
      carouselPrevBtn: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "hostless-carousel-left-button",
        },
      },
      carouselNextBtn: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "hostless-carousel-right-button",
        },
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "SectionOne",
  });
}
