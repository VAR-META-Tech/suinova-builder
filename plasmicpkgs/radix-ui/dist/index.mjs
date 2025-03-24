// src/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React2 from "react";
import clsx from "clsx";

// src/reg-util.ts
import {
  default as registerComponent
} from "@plasmicapp/host/registerComponent";
import {
  default as registerGlobalContext
} from "@plasmicapp/host/registerGlobalContext";
function registerComponentHelper(loader, component, meta) {
  if (loader) {
    loader.registerComponent(component, meta);
  } else {
    registerComponent(component, meta);
  }
}

// src/util.tsx
import * as React from "react";
import { useState } from "react";
import { omit, pick } from "remeda";
var DEBUG_SLOWDOWN = 1;
var enterAnims = [
  "fade-in",
  "zoom-enter",
  "slide-in-from-top",
  "slide-in-from-right",
  "slide-in-from-bottom",
  "slide-in-from-left"
];
var exitAnims = [
  "fade-out",
  "zoom-exit",
  "slide-out-to-top",
  "slide-out-to-right",
  "slide-out-to-bottom",
  "slide-out-to-left"
];
var id = 0;
var _a;
var useId2 = (_a = React.useId) != null ? _a : () => useState(() => "" + id++);
var StyleWrapper = ({
  children,
  cssStr
}) => {
  const dynClass = "pd__" + useId2().replace(/:/g, "");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children(dynClass), /* @__PURE__ */ React.createElement("style", null, dynClass ? cssStr.replace(/&/g, `.${dynClass}`) : ""));
};
var Animated = ({
  children,
  enterAnimations = ["fade-in"],
  exitAnimations = ["fade-out"],
  enterDuration = 0.15 * DEBUG_SLOWDOWN,
  exitDuration = 0.15 * DEBUG_SLOWDOWN,
  enterOpacity = 0,
  exitOpacity = 0,
  enterScale = 0.95,
  exitScale = 0.95,
  enterTranslateX = "100%",
  exitTranslateX = "100%",
  enterTranslateY = "100%",
  exitTranslateY = "100%",
  enterTiming = "ease",
  exitTiming = "ease",
  enterDelay = 0,
  exitDelay = 0
}) => {
  const pct = (x) => typeof x === "number" || (x == null ? void 0 : x.match(/.*\d$/)) ? x + "%" : x;
  const neg = (x) => x.startsWith("-") ? x : "-" + x;
  const animations = {
    "fade-in": `--tw-enter-opacity: ${enterOpacity};`,
    "fade-out": `--tw-exit-opacity: ${exitOpacity};`,
    "slide-in-from-top": `--tw-enter-translate-y: ${neg(
      pct(enterTranslateY)
    )};`,
    "slide-out-to-top": `--tw-exit-translate-y: ${neg(pct(exitTranslateY))};`,
    "slide-in-from-right": `--tw-enter-translate-x: ${pct(enterTranslateX)};`,
    "slide-out-to-right": `--tw-exit-translate-x: ${pct(exitTranslateX)};`,
    "slide-in-from-bottom": `--tw-enter-translate-y: ${pct(enterTranslateY)};`,
    "slide-out-to-bottom": `--tw-exit-translate-y: ${pct(exitTranslateY)};`,
    "slide-in-from-left": `--tw-enter-translate-x: ${neg(
      pct(enterTranslateX)
    )};`,
    "slide-out-to-left": `--tw-exit-translate-x: ${neg(pct(exitTranslateX))};`,
    "zoom-enter": `--tw-enter-scale: ${enterScale};`,
    "zoom-exit": `--tw-exit-scale: ${exitScale};`
  };
  return /* @__PURE__ */ React.createElement(
    StyleWrapper,
    {
      cssStr: `
        &&[data-state=closed] {
          animation-duration: ${exitDuration}s;
          animation-timing-function: ${exitTiming};
          animation-delay: ${exitDelay};
          ${exitAnimations.map((exitAnimation) => {
        var _a2;
        return (_a2 = animations[exitAnimation]) != null ? _a2 : "";
      }).join(" ")}
        }
        &&,
        &&[data-state=open] {
          animation-duration: ${enterDuration}s;
          animation-timing-function: ${enterTiming};
          animation-delay: ${enterDelay};
          ${enterAnimations.map((enterAnimation) => {
        var _a2;
        return (_a2 = animations[enterAnimation]) != null ? _a2 : "";
      }).join(" ")}
        }
      `
    },
    children
  );
};
function splitAnimProps(props) {
  const keys = [
    "enterAnimations",
    "exitAnimations",
    "enterDuration",
    "exitDuration",
    "enterTranslateX",
    "exitTranslateX",
    "enterTranslateY",
    "exitTranslateY",
    "enterTiming",
    "exitTiming",
    "enterDelay",
    "exitDelay",
    "enterScale",
    "exitScale",
    "enterOpacity",
    "exitOpacity"
  ];
  const a = pick(props, keys);
  const b = omit(props, keys);
  return [a, b];
}
function mungeNames(names) {
  return names.map((name) => ({
    label: name.replace(/-/g, " "),
    value: name
  }));
}
var animPropTypes = ({
  defaultEnterAnimations,
  defaultExitAnimations
}) => {
  const getEnterAnimations = (ps) => {
    var _a2;
    return (_a2 = ps.enterAnimations) != null ? _a2 : defaultEnterAnimations == null ? void 0 : defaultEnterAnimations(ps);
  };
  const getExitAnimations = (ps) => {
    var _a2;
    return (_a2 = ps.exitAnimations) != null ? _a2 : defaultExitAnimations == null ? void 0 : defaultExitAnimations(ps);
  };
  return {
    enterAnimations: {
      type: "choice",
      options: mungeNames(enterAnims),
      multiSelect: true,
      defaultValueHint: defaultEnterAnimations != null ? defaultEnterAnimations : ["fade-in"]
    },
    exitAnimations: {
      type: "choice",
      options: mungeNames(exitAnims),
      multiSelect: true,
      defaultValueHint: defaultExitAnimations != null ? defaultExitAnimations : ["fade-out"]
    },
    enterDuration: { type: "number", defaultValueHint: 0.15 },
    exitDuration: { type: "number", defaultValueHint: 0.15 },
    enterTranslateX: {
      type: "string",
      defaultValueHint: "100%",
      hidden: (ps) => {
        var _a2, _b;
        return !((_a2 = getEnterAnimations(ps)) == null ? void 0 : _a2.includes("slide-in-from-right")) && !((_b = getEnterAnimations(ps)) == null ? void 0 : _b.includes("slide-in-from-left"));
      }
    },
    exitTranslateX: {
      type: "string",
      advanced: true,
      defaultValueHint: "100%",
      hidden: (ps) => {
        var _a2, _b;
        return !((_a2 = getExitAnimations(ps)) == null ? void 0 : _a2.includes("slide-out-to-right")) && !((_b = getExitAnimations(ps)) == null ? void 0 : _b.includes("slide-out-to-left"));
      }
    },
    enterTranslateY: {
      type: "string",
      advanced: true,
      defaultValueHint: "100%",
      hidden: (ps) => {
        var _a2, _b;
        return !((_a2 = getEnterAnimations(ps)) == null ? void 0 : _a2.includes("slide-in-from-bottom")) && !((_b = getEnterAnimations(ps)) == null ? void 0 : _b.includes("slide-in-from-top"));
      }
    },
    exitTranslateY: {
      type: "string",
      advanced: true,
      defaultValueHint: "100%",
      hidden: (ps) => {
        var _a2, _b;
        return !((_a2 = getExitAnimations(ps)) == null ? void 0 : _a2.includes("slide-out-to-bottom")) && !((_b = getExitAnimations(ps)) == null ? void 0 : _b.includes("slide-out-to-top"));
      }
    },
    enterOpacity: {
      type: "number",
      advanced: true,
      defaultValueHint: 0,
      hidden: (ps) => {
        var _a2;
        return !((_a2 = getEnterAnimations(ps)) == null ? void 0 : _a2.includes("fade-in"));
      }
    },
    exitOpacity: {
      type: "number",
      advanced: true,
      defaultValueHint: 0,
      hidden: (ps) => {
        var _a2;
        return !((_a2 = getExitAnimations(ps)) == null ? void 0 : _a2.includes("fade-out"));
      }
    },
    enterScale: {
      type: "number",
      advanced: true,
      defaultValueHint: 0.95,
      hidden: (ps) => {
        var _a2;
        return !((_a2 = getEnterAnimations(ps)) == null ? void 0 : _a2.includes("zoom-enter"));
      }
    },
    exitScale: {
      type: "number",
      advanced: true,
      defaultValueHint: 0.95,
      hidden: (ps) => {
        var _a2;
        return !((_a2 = getExitAnimations(ps)) == null ? void 0 : _a2.includes("zoom-exit"));
      }
    },
    enterDelay: { type: "number", advanced: true, defaultValueHint: 0 },
    exitDelay: { type: "number", advanced: true, defaultValueHint: 0 },
    enterTiming: {
      type: "string",
      advanced: true,
      defaultValueHint: "ease",
      ...{
        suggestions: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"]
      }
    },
    exitTiming: {
      type: "string",
      advanced: true,
      defaultValueHint: "ease",
      ...{
        suggestions: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"]
      }
    }
  };
};
var overlayStates = {
  open: {
    type: "writable",
    valueProp: "open",
    onChangeProp: "onOpenChange",
    variableType: "boolean"
  }
};
var overlayProps = ({
  defaultSlotContent,
  triggerSlotName,
  openDisplay
}) => ({
  open: {
    type: "boolean",
    displayName: openDisplay,
    editOnly: true,
    uncontrolledProp: "defaultOpen"
  },
  modal: {
    type: "boolean",
    advanced: true,
    description: "Disable interaction with outside elements. Only popover content will be visible to screen readers.",
    defaultValueHint: true
  },
  onOpenChange: {
    type: "eventHandler",
    argTypes: [
      {
        type: "boolean",
        name: "open"
      }
    ]
  },
  [triggerSlotName]: {
    type: "slot",
    defaultValue: [defaultSlotContent],
    ...{
      mergeWithParent: true
    }
  },
  themeResetClass: { type: "themeResetClass" }
});
function prefixClasses(x) {
  return x.trim().split(/\s+/g).map((part) => `pl__${part}`).join(" ");
}
var prefixedBaseStyles = `
.box-border {
  box-sizing: border-box;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.absolute {
    position: absolute;
}
.relative {
    position: relative;
}
.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
}
.h-full {
    height: 100%;
}
.z-50 { z-index: 50;  }
.fixed { position: fixed; }
.inset-0 { top: 0; left: 0; right: 0; bottom: 0; }
.bottom-0 {
    bottom: 0px;
}
.left-0 {
    left: 0px;
}
.right-0 {
    right: 0px;
}
.top-0 {
    top: 0px;
}
.right-4 {
    right: 1rem;
}
.top-4 {
    top: 1rem;
}
.h-4 { height: 1rem; }
.w-4 { width: 1rem; }
.outline-none { outline: none; }

@keyframes plsmc-enter {

    from {
        opacity: var(--tw-enter-opacity, 1);
        transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
    }
}

@keyframes plsmc-exit {

    to {
        opacity: var(--tw-exit-opacity, 1);
        transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
    }
}
.animate-in,
.data-\\[state\\=open\\]\\:animate-in[data-state=open] {
  animation-name: plsmc-enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.animate-out,
.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {
  animation-name: plsmc-exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {
    --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {
    --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {
    --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {
    --tw-enter-translate-y: 0.5rem;
}

`.replace(/\n\./g, ".pl__");
function BaseStyles() {
  return /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: prefixedBaseStyles } });
}
var popoverProps = {
  side: {
    type: "choice",
    options: ["top", "bottom", "left", "right"],
    defaultValueHint: "bottom"
  },
  sideOffset: {
    type: "number",
    defaultValueHint: 0,
    advanced: true
  },
  align: {
    type: "choice",
    options: ["center", "start", "end"],
    defaultValueHint: "center"
  },
  alignOffset: {
    type: "number",
    defaultValueHint: 0,
    advanced: true
  },
  ...animPropTypes({
    defaultEnterAnimations: () => ["fade-in", "zoom-enter"],
    defaultExitAnimations: () => ["fade-out", "zoom-exit"]
  }),
  slideIn: {
    type: "boolean",
    defaultValueHint: true,
    description: "Add additional subtle slide-in animation on reveal, which can depend on where the tooltip is dynamically placed."
  }
};
function wrapFragmentInDiv(node, className) {
  if (React.isValidElement(node) && node.type === React.Fragment) {
    const props = {
      ...omit(node.props, ["children"]),
      key: node.key
    };
    props["className"] = props["className"] ? props["className"] + className : className;
    return /* @__PURE__ */ React.createElement("div", { ...props }, node.props.children);
  }
  return node;
}

// src/popover.tsx
function Popover({
  // root
  open,
  onOpenChange,
  defaultOpen,
  modal,
  // content
  className,
  sideOffset = 4,
  themeResetClass,
  overlay,
  slideIn = true,
  // trigger/anchor
  trigger = true,
  children,
  ...props
}) {
  const [animProps, rest] = splitAnimProps(props);
  return /* @__PURE__ */ React2.createElement(
    Animated,
    {
      enterAnimations: ["fade-in", "zoom-enter"],
      exitAnimations: ["fade-out", "zoom-exit"],
      ...animProps
    },
    (dynClass) => /* @__PURE__ */ React2.createElement(
      PopoverPrimitive.Root,
      {
        open,
        onOpenChange,
        defaultOpen,
        modal
      },
      trigger ? /* @__PURE__ */ React2.createElement(PopoverPrimitive.Trigger, { asChild: true }, wrapFragmentInDiv(children, className)) : /* @__PURE__ */ React2.createElement(PopoverPrimitive.Anchor, { asChild: true }, wrapFragmentInDiv(children, className)),
      /* @__PURE__ */ React2.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React2.createElement(
        PopoverPrimitive.Content,
        {
          className: clsx(
            prefixClasses(
              "outline-none z-50 data-[state=open]:animate-in data-[state=closed]:animate-out"
            ),
            slideIn ? prefixClasses(
              "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            ) : "",
            dynClass ? dynClass : "",
            themeResetClass
          ),
          sideOffset,
          ...rest
        },
        overlay
      )),
      /* @__PURE__ */ React2.createElement(BaseStyles, null)
    )
  );
}
Popover.displayName = "PlasmicRadixPopover";
function registerPopover(PLASMIC) {
  registerComponentHelper(PLASMIC, Popover, {
    name: "hostless-radix-popover",
    displayName: "Popover Core",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "Popover",
    states: overlayStates,
    props: {
      ...overlayProps({
        triggerSlotName: "children",
        defaultSlotContent: {
          type: "default-component",
          kind: "button",
          props: {
            children: { type: "text", value: `Show popover` }
          }
        }
      }),
      trigger: {
        type: "boolean",
        displayName: "Trigger on click",
        defaultValueHint: true,
        description: `Instead of automatically showing the popover on click, you can toggle the popover's "open" state from any interaction. This enables more custom control over when it is shown.`,
        advanced: true
      },
      ...popoverProps,
      overlay: {
        type: "slot",
        defaultValue: {
          type: "vbox",
          styles: {
            padding: "16px",
            width: "300px",
            maxWidth: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#E2E8F0",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 16px 0px #00000033",
            alignItems: "stretch"
          },
          children: ["Here is the popover content."]
        },
        ...{
          mergeWithParent: true
        }
      }
    }
  });
}

// src/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React3 from "react";
import clsx2 from "clsx";
var DialogClose = React3.forwardRef((props, _ref) => {
  var _a2;
  return /* @__PURE__ */ React3.createElement(DialogPrimitive.Close, { ...props, asChild: true }, /* @__PURE__ */ React3.createElement("div", { className: props.className }, (_a2 = props.children) != null ? _a2 : /* @__PURE__ */ React3.createElement(X, { className: prefixClasses("h-4 w-4") }), /* @__PURE__ */ React3.createElement("span", { className: prefixClasses("sr-only") }, "Close")));
});
DialogClose.displayName = "PlasmicRadixDialogClose";
var DialogOverlay = React3.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ React3.createElement(Animated, { ...props }, (dynClass) => /* @__PURE__ */ React3.createElement(
    DialogPrimitive.Overlay,
    {
      className: clsx2(
        [
          "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out"
        ].map(prefixClasses),
        dynClass ? dynClass : "",
        className
      ),
      ...props,
      ref
    }
  ));
});
DialogOverlay.displayName = "PlasmicOverlay";
var DialogContent = React3.forwardRef(({ className, themeResetClass, ...props }, ref) => {
  var _a2, _b;
  const [animProps, rest] = splitAnimProps(props);
  return /* @__PURE__ */ React3.createElement(
    Animated,
    {
      ...animProps,
      enterAnimations: (_a2 = animProps.enterAnimations) != null ? _a2 : ["zoom-enter", "fade-in"],
      exitAnimations: (_b = animProps.exitAnimations) != null ? _b : ["zoom-exit", "fade-out"]
    },
    (dynClass) => /* @__PURE__ */ React3.createElement(
      DialogPrimitive.Content,
      {
        ...rest,
        className: clsx2(
          prefixClasses(
            "fixed z-50 outline-none relative box-border data-[state=open]:animate-in data-[state=closed]:animate-out"
          ),
          dynClass ? dynClass : "",
          themeResetClass,
          className
        ),
        ref
      }
    )
  );
});
DialogContent.displayName = "PlasmicRadixDialogContent";
function getDefaultSheetAnims(side = "right") {
  return {
    right: ["slide-in-from-right", "slide-out-to-right"],
    bottom: ["slide-in-from-bottom", "slide-out-to-bottom"],
    left: ["slide-in-from-left", "slide-out-to-left"],
    top: ["slide-in-from-top", "slide-out-to-top"]
  }[side];
}
var SheetContent = React3.forwardRef(({ className, themeResetClass, side = "right", ...props }, ref) => {
  var _a2, _b;
  const [defaultEnterAnimation, defaultExitAnimation] = getDefaultSheetAnims(
    side != null ? side : "right"
  );
  return /* @__PURE__ */ React3.createElement(
    Animated,
    {
      ...props,
      enterAnimations: (_a2 = props.enterAnimations) != null ? _a2 : [defaultEnterAnimation],
      exitAnimations: (_b = props.exitAnimations) != null ? _b : [defaultExitAnimation]
    },
    (dynClass) => /* @__PURE__ */ React3.createElement(
      DialogPrimitive.Content,
      {
        className: clsx2(
          sheetVariants({ side }),
          dynClass ? dynClass : "",
          themeResetClass,
          className
        ),
        ...props,
        ref
      }
    )
  );
});
SheetContent.displayName = "PlasmicRadixSheetContent";
var sheetVariants = cva(
  prefixClasses(
    "fixed z-50 outline-none relative data-[state=open]:animate-in data-[state=closed]:animate-out"
  ),
  {
    variants: {
      side: {
        top: prefixClasses("inset-x-0 top-0"),
        bottom: prefixClasses("inset-x-0 bottom-0"),
        left: prefixClasses("inset-y-0 left-0 h-full"),
        right: prefixClasses("inset-y-0 right-0 h-full")
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var Dialog = React3.forwardRef(
  ({
    className,
    open,
    onOpenChange,
    modal,
    themeResetClass,
    children,
    noContain,
    defaultOpen,
    triggerSlot,
    overlayClassName,
    ...props
  }, ref) => /* @__PURE__ */ React3.createElement(
    DialogPrimitive.Root,
    {
      open,
      modal,
      onOpenChange,
      defaultOpen
    },
    /* @__PURE__ */ React3.createElement(DialogPrimitive.Trigger, { asChild: true }, wrapFragmentInDiv(triggerSlot, className)),
    noContain ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(DialogPrimitive.Portal, null, /* @__PURE__ */ React3.createElement(
      DialogOverlay,
      {
        ref,
        ...props,
        className: clsx2(overlayClassName, themeResetClass)
      }
    ), children)) : /* @__PURE__ */ React3.createElement(DialogPrimitive.Portal, null, /* @__PURE__ */ React3.createElement(
      DialogOverlay,
      {
        ref,
        ...props,
        className: clsx2(overlayClassName, themeResetClass)
      },
      children
    )),
    /* @__PURE__ */ React3.createElement(BaseStyles, null)
  )
);
Dialog.displayName = "PlasmicRadixDialog";
var DialogTitle = DialogPrimitive.Title;
var DialogDescription = DialogPrimitive.Description;
function registerDialog(PLASMIC) {
  registerComponentHelper(PLASMIC, Dialog, {
    name: "hostless-radix-dialog",
    displayName: "Dialog Core",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "Dialog",
    styleSections: ["visibility"],
    defaultStyles: {
      // Note: unable to set position styles since Plasmic coerces to auto layout
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.8)"
    },
    props: {
      ...overlayProps({
        defaultSlotContent: {
          type: "default-component",
          kind: "button",
          props: {
            children: { type: "text", value: `Show dialog` }
          }
        },
        triggerSlotName: "triggerSlot"
      }),
      overlayClassName: {
        type: "class"
      },
      noContain: {
        type: "boolean",
        advanced: true,
        description: "Place the dialog content over the overlay instead of inside the overlay. Useful for separating their animations, but you also won't be able to conveniently set layout on the overlay as a parent."
      },
      children: {
        type: "slot",
        allowedComponents: [
          "hostless-radix-sheet-content",
          "hostless-radix-dialog-content"
        ],
        defaultValue: {
          type: "component",
          name: "hostless-radix-dialog-content"
        }
      }
    },
    states: overlayStates
  });
  registerComponentHelper(PLASMIC, DialogClose, {
    name: "hostless-radix-dialog-close",
    displayName: "Dialog Close",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "DialogClose",
    parentComponentName: "hostless-radix-dialog",
    defaultStyles: {
      position: "absolute",
      top: "16px",
      right: "16px",
      opacity: "0.7",
      borderRadius: "999px"
    },
    props: {
      children: {
        type: "slot",
        hidePlaceholder: true
      }
    }
  });
  const dialogStyles = {
    width: "400px",
    maxWidth: "100%",
    background: "rgb(255,255,255)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#E2E8F0",
    boxShadow: "0px 4px 16px 0px #00000033"
  };
  registerComponentHelper(PLASMIC, SheetContent, {
    name: "hostless-radix-sheet-content",
    displayName: "Drawer Content",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "SheetContent",
    parentComponentName: "hostless-radix-dialog",
    defaultStyles: {
      // Positions can sometimes take effect since these can be implicitly inserted as children of other default content, thus escaping Plasmic's layout coersion.
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      padding: "16px",
      ...dialogStyles
    },
    props: {
      side: {
        type: "choice",
        options: ["right", "bottom", "left", "top"],
        defaultValueHint: "right"
      },
      themeResetClass: { type: "themeResetClass" },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              alignItems: "stretch",
              gap: "8px"
            },
            children: [
              {
                type: "component",
                name: "hostless-radix-dialog-title"
              },
              {
                type: "component",
                name: "hostless-radix-dialog-description"
              }
            ]
          },
          {
            type: "component",
            name: "hostless-radix-dialog-close"
          }
        ]
      },
      ...animPropTypes({
        defaultEnterAnimations: (ps) => [getDefaultSheetAnims(ps.side)[0]],
        defaultExitAnimations: (ps) => [getDefaultSheetAnims(ps.side)[1]]
      })
    }
  });
  registerComponentHelper(PLASMIC, DialogContent, {
    name: "hostless-radix-dialog-content",
    displayName: "Dialog Content",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "DialogContent",
    parentComponentName: "hostless-radix-dialog",
    defaultStyles: {
      // No need for position here, just relying on layout container parent.
      position: "relative",
      margin: "10% auto",
      // for horizontally centered dialog
      padding: "24px",
      borderRadius: "8px",
      ...dialogStyles
    },
    props: {
      themeResetClass: { type: "themeResetClass" },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "vbox",
            styles: {
              alignItems: "stretch",
              gap: "8px"
            },
            children: [
              {
                type: "component",
                name: "hostless-radix-dialog-title"
              },
              {
                type: "component",
                name: "hostless-radix-dialog-description"
              }
            ]
          },
          {
            type: "component",
            name: "hostless-radix-dialog-close"
          }
        ]
      },
      ...animPropTypes({
        defaultEnterAnimations: () => ["zoom-enter", "fade-in"],
        defaultExitAnimations: () => ["zoom-exit", "fade-out"]
      })
    }
  });
  registerComponentHelper(PLASMIC, DialogTitle, {
    name: "hostless-radix-dialog-title",
    displayName: "Dialog Title",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "DialogTitle",
    parentComponentName: "hostless-radix-dialog",
    props: {
      children: {
        type: "slot",
        defaultValue: "Sheet title"
      }
    }
  });
  registerComponentHelper(PLASMIC, DialogDescription, {
    name: "hostless-radix-dialog-description",
    displayName: "Dialog Description",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "DialogDescription",
    parentComponentName: "hostless-radix-dialog",
    props: {
      children: {
        type: "slot",
        defaultValue: "Sheet description"
      }
    }
  });
}

// src/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx3 from "clsx";
import * as React4 from "react";
var Tooltip = React4.forwardRef(
  ({
    // content & custom
    className,
    sideOffset = 4,
    themeResetClass,
    slideIn = true,
    overlay,
    // root
    delayDuration,
    disableHoverableContent,
    open,
    onOpenChange,
    defaultOpen,
    // trigger/anchor
    children,
    ...props
  }, ref) => {
    const [animProps, rest] = splitAnimProps(props);
    return /* @__PURE__ */ React4.createElement(
      Animated,
      {
        enterAnimations: ["fade-in", "zoom-enter"],
        exitAnimations: ["fade-out", "zoom-exit"],
        ...animProps
      },
      (dynClass) => /* @__PURE__ */ React4.createElement(TooltipPrimitive.Provider, null, /* @__PURE__ */ React4.createElement(
        TooltipPrimitive.Root,
        {
          ...{
            delayDuration,
            disableHoverableContent,
            open,
            onOpenChange,
            defaultOpen
          }
        },
        /* @__PURE__ */ React4.createElement(TooltipPrimitive.Trigger, { asChild: true }, wrapFragmentInDiv(children, className)),
        /* @__PURE__ */ React4.createElement(
          TooltipPrimitive.Content,
          {
            ref,
            sideOffset,
            className: clsx3(
              prefixClasses(
                "z-50 animate-in data-[state=closed]:animate-out"
              ),
              slideIn ? prefixClasses(
                "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              ) : "",
              dynClass ? dynClass : "",
              themeResetClass
            ),
            ...rest
          },
          overlay
        ),
        /* @__PURE__ */ React4.createElement(BaseStyles, null)
      ))
    );
  }
);
Tooltip.displayName = "PlasmicRadixTooltip";
function registerTooltip(PLASMIC) {
  registerComponentHelper(PLASMIC, Tooltip, {
    name: "hostless-radix-tooltip",
    displayName: "Tooltip Core",
    importPath: "@plasmicpkgs/radix-ui",
    importName: "Tooltip",
    props: {
      ...overlayProps({
        triggerSlotName: "children",
        defaultSlotContent: { type: "text", value: "I have a tooltip." },
        openDisplay: "Preview open"
      }),
      ...{
        ...popoverProps,
        side: {
          ...popoverProps.side,
          defaultValueHint: "top"
        },
        delayDuration: {
          type: "number",
          defaultValueHint: 700
        }
      },
      overlay: {
        type: "slot",
        defaultValue: {
          type: "vbox",
          styles: {
            padding: "16px",
            width: "300px",
            maxWidth: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#E2E8F0",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 4px 16px 0px #00000033",
            alignItems: "stretch"
          },
          children: ["Here is the tooltip content."]
        },
        ...{
          mergeWithParent: true
        }
      }
    }
  });
}

// src/index.tsx
function registerAll(PLASMIC) {
  registerPopover(PLASMIC);
  registerDialog(PLASMIC);
  registerTooltip(PLASMIC);
}
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Popover,
  SheetContent,
  Tooltip,
  popoverProps,
  registerAll,
  registerDialog,
  registerPopover,
  registerTooltip,
  sheetVariants
};
