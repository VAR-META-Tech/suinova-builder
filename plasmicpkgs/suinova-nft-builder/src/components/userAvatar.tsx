import React from "react";
import { Avatar } from "antd";
import { usePlasmicLink } from "@plasmicapp/host";
import { Registerable, registerComponentHelper } from "../reg-util";

function NFTBuilderUserAvatar({
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

function NFTBuilderUserAvatarGroup(
  props: React.ComponentProps<typeof Avatar.Group>
) {
  return <Avatar.Group {...props} />;
}

export const UserAvatar = NFTBuilderUserAvatar;
export const UserAvatarGroup = NFTBuilderUserAvatarGroup;

export const UserAvatarMeta = {
  name: "NFTBuilderUserAvatar",
  displayName: "User Avatar",
  props: {
    href: {
      type: "href" as const,
      displayName: "Link to",
      description: "Destination to link to",
    },
    target: {
      type: "boolean" as const,
      displayName: "Open in new tab",
      hidden: (ps: { href?: string }) => !ps.href,
    },
    letters: {
      type: "string" as const,
      description: "Letters to show",
      defaultValue: "AB",
    },
    src: {
      type: "imageUrl" as const,
      description: "Image to display",
      defaultValue: "https://suinova.var-meta.com/static/img/avatar.png",
    },
    size: {
      type: "choice" as const,
      options: [
        { label: "Small", value: "small" },
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
      ],
      description: "Set the size of avatar",
      defaultValueHint: "default",
      multiSelect: false as const,
    },
    shape: {
      type: "choice" as const,
      options: [
        { label: "Circle", value: "circle" },
        { label: "Square", value: "square" },
      ],
      description: "Set the avatar shape",
      defaultValue: "square",
      defaultValueHint: "square",
      multiSelect: false as const,
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "UserAvatar",
};

export const UserAvatarGroupMeta = {
  name: "NFTBuilderUserAvatarGroup",
  displayName: "User Avatar Group",
  props: {
    children: {
      type: "slot" as const,
      defaultValue: [1, 2, 3, 4].map((user) => ({
        type: "component" as const,
        name: "NFTBuilderUserAvatar",
        props: {
          letters: `U${user}`,
        },
      })),
    },
    maxCount: {
      type: "number" as const,
      description: "Max avatars to show",
      defaultValue: 2,
    },
    size: {
      type: "choice" as const,
      options: [
        { label: "Small", value: "small" },
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
      ],
      description: "Default size of avatars",
      defaultValueHint: "default",
      multiSelect: false as const,
    },
    maxPopoverPlacement: {
      type: "choice" as const,
      options: [
        { label: "Top", value: "top" },
        { label: "Bottom", value: "bottom" },
      ],
      advanced: true,
      defaultValueHint: "top",
      multiSelect: false as const,
    },
  },
  importPath: "suinova-nft-builder/dist/index.js",
  importName: "UserAvatarGroup",
};

export function registerUserAvatar(loader?: Registerable) {
  registerComponentHelper(loader, UserAvatar, UserAvatarMeta);
}

export function registerUserAvatarGroup(loader?: Registerable) {
  registerComponentHelper(loader, UserAvatarGroup, UserAvatarGroupMeta);
}
