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
          "https://suinova.var-meta.com/static/img/avatar.png",
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
