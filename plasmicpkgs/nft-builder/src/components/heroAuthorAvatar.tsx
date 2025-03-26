import React from "react";
import { Avatar } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";

interface IHeroAuthorAvatar extends React.ComponentProps<typeof Avatar> {
  className?: string;
  authorAvatar?: string;
}

const HeroAuthorAvatar = ({ authorAvatar, className, ...props }: IHeroAuthorAvatar) => {
  return (
    <Avatar
      className={className}
      size="small"
      icon={<img src={authorAvatar} />}
      {...props}
    />
  );
};

export default HeroAuthorAvatar;

export function registerHeroAuthorAvatar(loader?: Registerable) {
  registerComponentHelper(loader, HeroAuthorAvatar, {
    name: "hostless-hero-author-avatar",
    displayName: "Hero Author Avatar",
    props: {
      authorAvatar: {
        type: "imageUrl",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xp6yKpimoicAZfFpVAD4Qk39aTBJ7by6QxcoD2eWyeqM9uyNi378e6OwcunC3keLpAR4Vez-3mjSuld7MJB280pEFweZCtN4K9GHWrmv2XmzK2WQCKJ3Hfv2FRBQpbj5MfolIoSb6L2peMlF-9CsiU2XthN11A4fCT5PINwAPW~S5vCY8PyD2gwhb39fh870a-tLm-j8vcX6S~Ihb8a1Q9Q-cuXpQ0vbgtMaWYT2JmxOMoPLp1vUhIgT-3AJ4tHQVDy-ZZxxIQ-2NliJnJBYiiijTYiYXLNeKDcQOqpOWjkDdiiYbjYZf4Bp0HqWNGV3ddB6iBCVEibB0s4KzvgI3g__",
      },
      letters: {
        type: "string",
        description: "Letters to show",
        defaultValue: "AB",
      },
      src: {
        type: "imageUrl",
        description: "Image to display",
      },
      size: {
        type: "choice",
        options: ["small", "default", "large"],
        description: "Set the size of avatar",
        defaultValueHint: "default",
      },
      shape: {
        type: "choice",
        options: ["circle", "round"],
        description: "Set the avatar shape",
        defaultValueHint: "circle",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "HeroAuthorAvatar",
  });
}
