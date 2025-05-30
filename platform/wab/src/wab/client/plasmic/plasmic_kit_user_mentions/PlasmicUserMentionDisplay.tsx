// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kTSMroKPFv65RRTb44SCtk
// Component: HSPuw3LccxMD

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../user_mentions/plasmic.module.css"; // plasmic-import: kTSMroKPFv65RRTb44SCtk/projectcss
import sty from "./PlasmicUserMentionDisplay.module.css"; // plasmic-import: HSPuw3LccxMD/css

createPlasmicElementProxy;

export type PlasmicUserMentionDisplay__VariantMembers = {};
export type PlasmicUserMentionDisplay__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserMentionDisplay__VariantsArgs;
export const PlasmicUserMentionDisplay__VariantProps =
  new Array<VariantPropType>();

export type PlasmicUserMentionDisplay__ArgsType = {};
type ArgPropType = keyof PlasmicUserMentionDisplay__ArgsType;
export const PlasmicUserMentionDisplay__ArgProps = new Array<ArgPropType>();

export type PlasmicUserMentionDisplay__OverridesType = {
  root?: Flex__<"span">;
  text?: Flex__<"div">;
};

export interface DefaultUserMentionDisplayProps {
  className?: string;
}

const $$ = {};

function PlasmicUserMentionDisplay__RenderFunc(props: {
  variants: PlasmicUserMentionDisplay__VariantsArgs;
  args: PlasmicUserMentionDisplay__ArgsType;
  overrides: PlasmicUserMentionDisplay__OverridesType;
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

  return (
    <span
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.span,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"User name"}
      </div>
    </span>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "span";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserMentionDisplay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserMentionDisplay__VariantsArgs;
    args?: PlasmicUserMentionDisplay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserMentionDisplay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUserMentionDisplay__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUserMentionDisplay__ArgProps,
          internalVariantPropNames: PlasmicUserMentionDisplay__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicUserMentionDisplay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserMentionDisplay";
  } else {
    func.displayName = `PlasmicUserMentionDisplay.${nodeName}`;
  }
  return func;
}

export const PlasmicUserMentionDisplay = Object.assign(
  // Top-level PlasmicUserMentionDisplay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicUserMentionDisplay
    internalVariantProps: PlasmicUserMentionDisplay__VariantProps,
    internalArgProps: PlasmicUserMentionDisplay__ArgProps,
  }
);

export default PlasmicUserMentionDisplay;
/* prettier-ignore-end */
