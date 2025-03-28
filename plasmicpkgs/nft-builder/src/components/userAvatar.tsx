import React from "react";
import { Avatar } from "antd";
import { usePlasmicLink } from "@plasmicapp/host";
import { Registerable, registerComponentHelper } from "../reg-util";

export function UserAvatar({
  letters,
  href,
  target,
  ...props
}: React.ComponentProps<typeof Avatar> & {
  letters?: string;
  href?: string;
  target?: boolean;
}) {
  const avatar = <Avatar {...props} children={props.children || letters} />;
  const PlasmicLink = usePlasmicLink();
  return href ? (
    <PlasmicLink href={href} target={target ? "_blank" : undefined}>
      {avatar}
    </PlasmicLink>
  ) : (
    avatar
  );
}

export function UserAvatarGroup(
  props: React.ComponentProps<typeof Avatar.Group>
) {
  return <Avatar.Group {...props} />;
}

export function registerUserAvatar(loader?: Registerable) {
  registerComponentHelper(loader, UserAvatar, {
    name: "nft-builder-user-avatar",
    displayName: "User Avatar",
    props: {
      href: {
        type: "href",
        displayName: "Link to",
        description: "Destination to link to",
      },
      target: {
        type: "boolean",
        displayName: "Open in new tab",
        hidden: (ps: { href?: string }) => !ps.href,
      },
      letters: {
        type: "string",
        description: "Letters to show",
        defaultValue: "AB",
      },
      src: {
        type: "imageUrl",
        description: "Image to display",
        defaultValue:
          "https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xp6yKpimoicAZfFpVAD4Qk39aTBJ7by6QxcoD2eWyeqM9uyNi378e6OwcunC3keLpAR4Vez-3mjSuld7MJB280pEFweZCtN4K9GHWrmv2XmzK2WQCKJ3Hfv2FRBQpbj5MfolIoSb6L2peMlF-9CsiU2XthN11A4fCT5PINwAPW~S5vCY8PyD2gwhb39fh870a-tLm-j8vcX6S~Ihb8a1Q9Q-cuXpQ0vbgtMaWYT2JmxOMoPLp1vUhIgT-3AJ4tHQVDy-ZZxxIQ-2NliJnJBYiiijTYiYXLNeKDcQOqpOWjkDdiiYbjYZf4Bp0HqWNGV3ddB6iBCVEibB0s4KzvgI3g__",
      },
      size: {
        type: "choice",
        options: ["small", "default", "large"],
        description: "Set the size of avatar",
        defaultValueHint: "default",
      },
      shape: {
        type: "choice",
        options: ["circle", "square"],
        description: "Set the avatar shape",
        defaultValue: "square",
        defaultValueHint: "square",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "UserAvatar",
  });
}

export function registerUserAvatarGroup(loader?: Registerable) {
  registerComponentHelper(loader, UserAvatarGroup, {
    name: "nft-builder-user-avatar-group",
    displayName: "User Avatar Group",
    props: {
      children: {
        type: "slot",
        defaultValue: [1, 2, 3, 4].map((user) => ({
          type: "component",
          name: "nft-builder-user-avatar",
          props: {
            letters: `U${user}`,
          },
        })),
      },
      maxCount: {
        type: "number",
        description: "Max avatars to show",
        defaultValue: 2,
      },
      size: {
        type: "choice",
        options: ["small", "default", "large"],
        description: "Default size of avatars",
        defaultValueHint: "default",
      },
      maxPopoverPlacement: {
        type: "choice",
        advanced: true,
        options: ["top", "bottom"],
        defaultValueHint: "top",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "UserAvatarGroup",
  });
}
