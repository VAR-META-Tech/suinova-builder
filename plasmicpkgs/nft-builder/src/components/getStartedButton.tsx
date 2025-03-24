import { Button } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";
import React, { ReactNode } from "react";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  getStartedBtn: "nft-get-started-button",
  getStartedText: "nft-get-started-button-text",
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

interface IGetStartedButton extends React.ComponentProps<typeof Button> {
  className?: string;
  icon?: ReactNode;
  buttonContent?: string;
}

export const GetStartedButton = ({
  className,
  icon,
  buttonContent,
  ...props
}: IGetStartedButton) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.getStartedBtn} {
            width: 200px;
            height: 55px;
            background-color: #2978D1;
            display: flex;
            align-items: center;
            gap: 8px;
            color: white;
            font-weight: 600;
            font-size: 16px;
            border: 0;
            justify-content: center;
        }

        .${CSSClasses.getStartedBtn}:hover {
            color: white !important;
        }

        .${CSSClasses.getStartedText} {
            width: fit-content;
        }

        @media (max-width: 930px) {
          .${CSSClasses.getStartedBtn} {
            margin: 0px auto;
          }
        }
      `),
    []
  );
  return (
    <Button
      className={clsx(className, CSSClasses.getStartedBtn)}
      icon={icon}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      {buttonContent}
    </Button>
  );
};

export function registerGetStartedButton(loader?: Registerable) {
  registerComponentHelper(loader, GetStartedButton, {
    name: "hostless-get-started-button",
    displayName: "Get Started Button",
    props: {
      icon: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-rocket-icon",
          },
        ],
      },
      buttonContent: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Get Started",
            attrs: {
              className: CSSClasses.getStartedText,
            },
          },
        ],
      },
      type: {
        type: "choice",
        options: ["default", "primary", "ghost", "dashed", "link", "text"],
        description:
          "Can be set to primary, ghost, dashed, link, text, default",
        defaultValueHint: "default",
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
        description: "Set the size of button",
        defaultValueHint: "medium",
      },
      shape: {
        type: "choice",
        options: ["default", "circle", "round"],
        description: "Can be set button shape",
        defaultValueHint: "default",
      },
      disabled: {
        type: "boolean",
        description: "Disabled state of button",
        defaultValueHint: false,
      },
      ghost: {
        type: "boolean",
        description:
          "Make background transparent and invert text and border colors",
        defaultValueHint: false,
      },
      danger: {
        type: "boolean",
        description: "Set the danger status of button",
        defaultValueHint: false,
      },
      block: {
        type: "boolean",
        description: "Option to fit button width to its parent width",
        defaultValueHint: false,
      },
      loading: {
        type: "boolean",
        description: "Set the loading status of button",
        defaultValueHint: false,
      },
      href: {
        type: "string",
        description: "Redirect url of link button",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "GetStartedButton",
  });
}
