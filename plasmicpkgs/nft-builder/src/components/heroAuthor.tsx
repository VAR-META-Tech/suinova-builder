import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  cardAuthor: "nft-hero-card-author",
  authorName: "nft-hero-author-name",
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

interface IHeroAuthor {
  className?: string;
  authorAvatar?: ReactNode;
  authorName?: string;
}

const HeroAuthor = ({ className, authorAvatar, authorName }: IHeroAuthor) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        
          .${CSSClasses.cardAuthor} {
            display: flex;
            align-items: center;
            gap: 8px;
          }
    
          .${CSSClasses.authorName} {
            color: #adb5bd;
            font-weight: 400;
            line-height: 140%;
            font-size: 16px;
          }

        `),
    []
  );

  return (
    <div className={clsx(className, CSSClasses.cardAuthor)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      {authorAvatar}
      <span className={CSSClasses.authorName}>{authorName}</span>
    </div>
  );
};

export default HeroAuthor;

export function registerHeroAuthor(loader?: Registerable) {
  registerComponentHelper(loader, HeroAuthor, {
    name: "hostless-hero-author",
    displayName: "Hero Author",
    props: {
      authorAvatar: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-hero-author-avatar",
          },
        ],
      },
      authorName: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Ranjan",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "HeroAuthor",
  });
}
