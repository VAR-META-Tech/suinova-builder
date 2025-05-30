// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: h69wHrrKtL

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicMenuButton.module.css"; // plasmic-import: h69wHrrKtL/css

import ChevronDownSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon
import DotsVerticalSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__DotsVerticalSvg"; // plasmic-import: joYBQwH-P/icon
import MenuIcon from "../plasmic_kit/PlasmicIcon__MenuIcon";

createPlasmicElementProxy;

export type PlasmicMenuButton__VariantMembers = {
  stepUp: "stepUp";
  withBackgroundHover: "withBackgroundHover";
  type: "seamless";
  size: "small";
};
export type PlasmicMenuButton__VariantsArgs = {
  stepUp?: SingleBooleanChoiceArg<"stepUp">;
  withBackgroundHover?: SingleBooleanChoiceArg<"withBackgroundHover">;
  type?: SingleChoiceArg<"seamless">;
  size?: SingleChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicMenuButton__VariantsArgs;
export const PlasmicMenuButton__VariantProps = new Array<VariantPropType>(
  "stepUp",
  "withBackgroundHover",
  "type",
  "size"
);

export type PlasmicMenuButton__ArgsType = {
  hoverText?: string;
};
type ArgPropType = keyof PlasmicMenuButton__ArgsType;
export const PlasmicMenuButton__ArgProps = new Array<ArgPropType>("hoverText");

export type PlasmicMenuButton__OverridesType = {
  root?: Flex__<typeof IconButton>;
};

export interface DefaultMenuButtonProps {
  hoverText?: string;
  stepUp?: SingleBooleanChoiceArg<"stepUp">;
  withBackgroundHover?: SingleBooleanChoiceArg<"withBackgroundHover">;
  type?: SingleChoiceArg<"seamless">;
  size?: SingleChoiceArg<"small">;
  className?: string;
}

const $$ = {};

function PlasmicMenuButton__RenderFunc(props: {
  variants: PlasmicMenuButton__VariantsArgs;
  args: PlasmicMenuButton__ArgsType;
  overrides: PlasmicMenuButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "stepUp",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.stepUp,
      },
      {
        path: "withBackgroundHover",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.withBackgroundHover,
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <IconButton
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      children2={
        <ChevronDownSvgIcon
          className={classNames(projectcss.all, sty.svg___5FElZ)}
          role={"img"}
        />
      }
      className={classNames("__wab_instance", sty.root, {
        [sty.rootsize_small]: hasVariant($state, "size", "small"),
        [sty.rootstepUp]: hasVariant($state, "stepUp", "stepUp"),
        [sty.roottype_seamless]: hasVariant($state, "type", "seamless"),
        [sty.rootwithBackgroundHover]: hasVariant(
          $state,
          "withBackgroundHover",
          "withBackgroundHover"
        ),
      })}
      hoverText={args.hoverText}
      size={hasVariant($state, "size", "small") ? "small" : "vertical"}
      type={
        hasVariant($state, "type", "seamless")
          ? ["seamless"]
          : hasVariant($state, "stepUp", "stepUp")
          ? ["stepUp"]
          : []
      }
      withBackgroundHover={
        hasVariant($state, "withBackgroundHover", "withBackgroundHover")
          ? true
          : undefined
      }
    >
      <MenuIcon style={{ height: "12px" }} />
      {/* <DotsVerticalSvgIcon
        className={classNames(projectcss.all, sty.svg__jeWc1, {
          [sty.svgtype_seamless__jeWc1Z4VSy]: hasVariant(
            $state,
            "type",
            "seamless"
          ),
          [sty.svgwithBackgroundHover__jeWc1Jm7Jz]: hasVariant(
            $state,
            "withBackgroundHover",
            "withBackgroundHover"
          ),
        })}
        role={"img"}
      /> */}
    </IconButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuButton__VariantsArgs;
    args?: PlasmicMenuButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuButton__ArgProps,
          internalVariantPropNames: PlasmicMenuButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuButton";
  } else {
    func.displayName = `PlasmicMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuButton = Object.assign(
  // Top-level PlasmicMenuButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMenuButton
    internalVariantProps: PlasmicMenuButton__VariantProps,
    internalArgProps: PlasmicMenuButton__ArgProps,
  }
);

export default PlasmicMenuButton;
/* prettier-ignore-end */
