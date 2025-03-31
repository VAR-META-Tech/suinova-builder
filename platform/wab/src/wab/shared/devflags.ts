import {
  ApiFeatureTier,
  FeatureTierId,
  ProjectId,
  StripePriceId,
  TeamId,
  WorkspaceId,
} from "@/wab/shared/ApiSchema";
import { assert, ensureType, mergeSane } from "@/wab/shared/common";
import { DEFAULT_DEVFLAG_OVERRIDES } from "@/wab/shared/devflag-overrides";
import {
  featureTiers,
  newFeatureTiers,
} from "@/wab/shared/pricing/pricing-utils";
import { InsertPanelConfig, UiConfig } from "@/wab/shared/ui-config-utils";
import { cloneDeep, pick } from "lodash";

export interface StarterSectionConfig {
  title: string; // Shown as the heading
  tag: string; // tags should be unique!
  projects: StarterProjectConfig[];
  infoTooltip?: string; // Shows up as a tooltop over the info icon
  docsUrl?: string; // Link for "View docs"
  moreUrl?: string; // Link for "More"
  isPlasmicOnly?: boolean;
}
export interface StarterGlobalContextConfig {
  name: string;
  props: {
    name: string;
    value: string | null;
  }[];
}
export interface StarterProjectConfig {
  name: string; // name of the starter
  projectId?: string; // project to clone
  baseProjectId?: string; // project whose latest published version we wish to clone
  tag: string; // tags should be unique!
  description: string; // description in card (name auto-retrieved from server)
  author?: string; // for template attribution
  authorLink?: string; // link to author
  iconName?: string; // name of icon component to display next to title - resolved in StarterGroup
  imageUrl?: string; // Preview image URL (e.g. on S3)
  highlightType?: "first" | "second" | "third"; // for coloring the cards
  href?: string; // if it's just a link (Developer Quickstart should be the only such thing)
  publishWizard?: boolean; // true if should show the publish wizard on the first open
  showPreview?: boolean; // true if this starter can be previewed in /templates/${tag}
  // show notification for users when the global context values aren't modified
  globalContextConfigs?: StarterGlobalContextConfig[];
  isPlasmicOnly?: boolean;
  withDropShadow?: boolean;
  cloneWithoutName?: boolean;
}

export type InsertableTemplateTokenResolution =
  | "inline"
  | "reuse-by-name"
  | "reuse-by-value"
  | "reuse-by-name-and-value"
  | "retain-by-name" // deprecated
  | "retain-by-value" // deprecated
  | "retain-by-name-and-value"; // deprecated

export type InsertableTemplateComponentResolution =
  | "inline"
  | "reuse"
  | "duplicate" // deprecated
  | "import"; // deprecated

/**
 * Represents a collection of related templates (e.g. Hero sections)
 */
export interface InsertableTemplatesGroup {
  sectionKey?: string;
  sectionLabel?: string;
  onlyShownIn?: "old" | "new";
  type: "insertable-templates-group";
  name: string;
  items: InsertableTemplatesSelectable[];
  imageUrl?: string;
  isPageTemplatesGroup?: boolean;
  hidden?: boolean;
}

export interface Installable {
  type: "ui-kit";
  name: string;
  sectionLabel?: string;
  isInstallOnly: true;
  isNew?: boolean;
  projectId: string;
  imageUrl?: string;
  entryPoint: {
    type: "component" | "page" | "arena";
    name: string;
  };
}

/**
 * Represents a single template (pulled from a component)
 */
export interface InsertableTemplatesItem {
  type: "insertable-templates-item";
  projectId: string; // Where to find the template
  componentName: string; // Name of component to insert
  imageUrl?: string; // A preview image
  displayName?: string;
  onlyShownIn?: "old" | "new";
  tokenResolution?: InsertableTemplateTokenResolution;
  componentResolution?: InsertableTemplateComponentResolution;
  hidden?: boolean;
}

/**
 * Represents a single template (pulled from a component)
 */
export interface InsertableTemplatesComponent {
  type: "insertable-templates-component";
  projectId: string; // Where to find the template
  componentName: string; // Name of component to insert
  /**
   * Globally unique name of the template; should match up with
   * Component.templateInfo.name of the corresponding component.
   * By convention, starts with plasmic-*
   */
  templateName: string;
  imageUrl?: string; // A preview image
  displayName?: string;
  tokenResolution?: InsertableTemplateTokenResolution;
  componentResolution?: InsertableTemplateComponentResolution;
  hidden?: boolean;
}

/**
 * Represents a collection of icons
 * Unlike templates, where we'll specify individual components,
 * here we'll just grab all icons from the project
 */
export interface InsertableIconsGroup {
  type: "insertable-icons-group";
  name: string;
  projectId: string;
  hidden?: boolean;
}

export type InsertableTemplatesSelectable =
  | InsertableTemplatesItem
  | InsertableTemplatesGroup
  | InsertableIconsGroup
  | InsertableTemplatesComponent;

export interface HostLessPackageInfo {
  syntheticPackage?: boolean;
  type: "hostless-package";
  name: string;
  /** Don't render the `name` header above the items (mainly for single item groups). */
  isHeaderLess?: boolean;
  sectionLabel: string;
  hiddenWhenInstalled?: boolean;
  codeName?: string;
  codeLink?: string;
  projectId: string | string[];
  items: HostLessComponentInfo[];
  hidden?: boolean;
  showInstall?: boolean;
  whitelistDomains?: string[];
  whitelistTeams?: string[];
  isInstallOnly?: boolean;
  imageUrl?: string;
  onlyShownIn?: "old" | "new";
}

export interface HostLessComponentInfo {
  type: "hostless-component";
  componentName: string;
  displayName: string;
  gray?: boolean;
  monospaced?: boolean; // for monospace font
  imageUrl?: string;
  videoUrl?: string;
  hidden?: boolean;
  isFake?: boolean;
  description?: string;
  hiddenOnStore?: boolean;
  onlyShownIn?: "old" | "new";
  requiredHostVersion?: number;
  args?: { [prop: string]: any };
}

type InsertableByTypeString<T extends InsertableTemplatesSelectable["type"]> =
  T extends "insertable-templates-item"
    ? InsertableTemplatesItem
    : T extends "insertable-templates-component"
    ? InsertableTemplatesComponent
    : T extends "insertable-templates-group"
    ? InsertableTemplatesGroup
    : T extends "insertable-icons-group"
    ? InsertableIconsGroup
    : never;

export function flattenInsertableTemplatesByType<
  T extends InsertableTemplatesSelectable["type"]
>(
  item: InsertableTemplatesSelectable | undefined,
  type: T
): InsertableByTypeString<T>[] {
  if (!item) {
    return [];
  } else if (item.type === type) {
    return [item as InsertableByTypeString<T>];
  } else if (item.type === "insertable-templates-group") {
    return item.items.flatMap((i) => flattenInsertableTemplatesByType(i, type));
  } else {
    return [];
  }
}

export function flattenInsertableTemplates(
  item?: InsertableTemplatesSelectable
): InsertableTemplatesItem[] {
  if (!item || item.type === "insertable-icons-group") {
    return [];
  } else if (item.type === "insertable-templates-item") {
    return [item];
  } else if (item.type === "insertable-templates-group") {
    return item.items.flatMap((i) => flattenInsertableTemplates(i));
  } else if (item.type === "insertable-templates-component") {
    return [];
  } else {
    assert(
      false,
      "Not expected insertable template type: " + typeof item === "object"
        ? JSON.stringify(item)
        : item
    );
  }
}

export function flattenInsertableIconGroups(
  item?: InsertableTemplatesSelectable
): InsertableIconsGroup[] {
  if (!item || item.type === "insertable-templates-item") {
    return [];
  } else if (item.type === "insertable-icons-group") {
    return [item];
  } else if (item.type === "insertable-templates-group") {
    return item.items.flatMap((i) => flattenInsertableIconGroups(i));
  } else if (item.type === "insertable-templates-component") {
    return [];
  } else {
    assert(
      false,
      "Not expected insertable template type: " + typeof item === "object"
        ? JSON.stringify(item)
        : item
    );
  }
}

const production = process.env.NODE_ENV === "production";

const projectIdConfig = {
  /// Add your local project id
  TEMPLATE_PROJECT_ID_NFT_BUILDER:
    process.env.TEMPLATE_PROJECT_ID_NFT_BUILDER || "pHhBGeu1NF9WPtShP6gtAM",

  HOST_LESS_PROJECT_ID_NFT:
    process.env.HOST_LESS_PROJECT_ID_NFT || "3YRsZHmU6M2Qk7WYDM9QQ4",
  HOST_LESS_PROJECT_ID_ANTD: "66MC2d9B7YecVEphuUMtqF",
  HOST_LESS_PROJECT_ID_PLASMIC_QUERY: "wvY5dZS3doGb4WJWJKhqhH",
  HOST_LESS_PROJECT_ID_REACT_SLICK: "iVuV4r27S7YWSG5evhRtXe",
  HOST_LESS_PROJECT_ID_PLASMIC_TAB: "bGGYchQJnRrBLGcc2YbKZk",
  HOST_LESS_PROJECT_ID_PLASMIC_NAV: "bfniEFpM4tZx8htC9kkukb",
  HOST_LESS_PROJECT_ID_ANTD_4: "gzny5sU7cPH2nhvEqzdB2m",
  HOST_LESS_PROJECT_ID_CHAKRA: process.env.HOST_LESS_PROJECT_ID_CHAKRA || "",
};

export const CONTRACT_PACKAGE_ID =
  "0x8372201a47f77c209c4d56bfae19fae5c1120cc723eca5670ff42f7f569a4677";
export const WEB3_GLOBAL_CONTEXT_COMP_NAME = "Web3GlobalContext";
export const CONTRACT_PACKAGE_ID_PARAM_NAME = "contractPackageId";

const DEFAULT_DEVFLAGS = {
  appContentBaseUrl: "https://docs.plasmic.app/app-content",
  artboardEval: true,
  autoSave: true,
  brands: {
    "": {
      logoHref: ensureType<string | undefined>(undefined),
      logoImgSrc: ensureType<string | undefined>(undefined),
      logoTooltip: "Back to dashboard",
    },
    SOME_TEAM_ID: {
      logoHref: "https://responsival.com",
      logoImgSrc:
        "https://assets-global.website-files.com/60a6b5ea9c13555ad76844c1/61311bbe3d92e0aafc264094_blink_1.svg",
      logoTooltip: "",
    },
  },
  content: true,
  contentEditorMode: false,
  codegenHost: process.env.CODEGEN_HOST || "https://codegen.plasmic.app",
  codegenOriginHost:
    process.env.CODEGEN_ORIGIN_HOST ||
    process.env.CODEGEN_HOST ||
    "http://codegen-origin.plasmic.app",
  adminTeamDomain: production ? "plasmic.app" : "admin.example.com",
  defaultHostUrl:
    process.env.REACT_APP_DEFAULT_HOST_URL ||
    "https://host.plasmicdev.com/static/host.html",
  defaultOpenStylePanels: true,
  dynamicPages: true,
  enablePlasmicHosting: true,
  // Used to invalidate etag cacheing mechanism altogether
  disableETagCaching: false,
  // Used to invalidate etags that use it
  eTagsVersionPrefix: "0",
  // The tiers to get dynamically retrieve from the server
  featureTierNames: featureTiers,
  useNewFeatureTiers: true,
  newFeatureTierNames: newFeatureTiers,
  freeTier: ensureType<ApiFeatureTier>({
    createdAt: "2021-08-05T23:39:21.570Z",
    updatedAt: "2023-05-22T23:39:21.570Z",
    deletedAt: null,
    createdById: null,
    updatedById: null,
    deletedById: null,
    id: "freeTier" as FeatureTierId,
    name: "Free",
    monthlySeatPrice: 0,
    monthlySeatStripePriceId: "price_1JLFtfHIopbCiFei4rR6omdz" as StripePriceId,
    monthlyBasePrice: null,
    monthlyBaseStripePriceId: null,
    annualSeatPrice: 0,
    annualSeatStripePriceId: "price_1LG1ZcHIopbCiFeigziyEF6W" as StripePriceId,
    annualBasePrice: null,
    annualBaseStripePriceId: null,
    minUsers: 0,
    maxUsers: 3,
    privateUsersIncluded: 10,
    maxPrivateUsers: 10,
    publicUsersIncluded: 10000,
    maxPublicUsers: 10000,
    versionHistoryDays: 14,
    maxWorkspaces: null,
    designerRole: false,
    contentRole: false,
    editContentCreatorMode: false,
    splitContent: false,
    localization: false,
    analytics: false,
    monthlyViews: 50000,
  }),
  freeTrial: false,
  freeTrialTierName: "Growth",
  newFreeTrialTierName: "Team",
  freeTrialDays: 15,
  productHuntPromo: false,
  freeTrialPromoDays: 60,
  createTeamPrompt: true,
  hideHelpForUsers: [".*@example.com"],
  hideStartersForUsers: [".*@example.com"],
  insertPanelContent: ensureType<InsertPanelConfig>({
    componentsLabel: "Custom components",
    aliases: {},
    builtinSections: {},
    builtinSectionsInstallables: {},
    overrideSections: {},
  }),
  insertableTemplates: ensureType<InsertableTemplatesGroup | undefined>(
    undefined
  ),
  installables: ensureType<Installable[]>([]),
  hostLessComponents: ensureType<HostLessPackageInfo[] | undefined>([
    {
      type: "hostless-package",
      name: "Plume Customizable Components",
      syntheticPackage: true,
      sectionLabel: "Design systems",
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/plasmic-logo.png",
      codeName: "plume",
      codeLink: "",
      onlyShownIn: "new",
      items: [
        {
          type: "hostless-component",
          componentName: "Plume",
          displayName: "Plume Design System",
          imageUrl: "https://static1.plasmic.app/plasmic-logo.png",
        },
      ],
      projectId: [],
    },
    {
      type: "hostless-package",
      name: "More HTML elements",
      syntheticPackage: true,
      sectionLabel: "Design systems",
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/insertables/unstyled.png",
      codeName: "unstyled",
      codeLink: "",
      onlyShownIn: "new",
      items: [
        {
          type: "hostless-component",
          componentName: "Unstyled",
          displayName: "More HTML elements",
          imageUrl: "https://static1.plasmic.app/insertables/unstyled.png",
        },
      ],
      projectId: [],
    },
    {
      type: "hostless-package",
      name: "Connect Wallet",
      sectionLabel: "NFT Marketplace",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/nft-builder",
      items: [
        {
          type: "hostless-component",
          componentName: "nft-builder-connect-wallet-btn",
          displayName: "Connect Wallet Button",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_NFT,
    },
    {
      type: "hostless-package",
      name: "NFT Marketplace",
      sectionLabel: "NFT Marketplace",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/nft-builder",
      items: [
        {
          type: "hostless-component",
          componentName: "Web3GlobalContext",
          displayName: "Web3 Global Context",
          hidden: true,
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_NFT,
    },
    {
      type: "hostless-package",
      name: "NFT Display",
      sectionLabel: "NFT Marketplace",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/nft-builder",
      items: [
        {
          type: "hostless-component",
          componentName: "nft-builder-card",
          displayName: "NFT Card",
        },
        {
          type: "hostless-component",
          componentName: "nft-builder-video-player",
          displayName: "NFT Video Player",
        },
        {
          type: "hostless-component",
          componentName: "nft-builder-carousel",
          displayName: "NFT Carousel",
        },
        {
          type: "hostless-component",
          componentName: "nft-builder-carousel-item",
          displayName: "NFT Carousel Item",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_NFT,
    },
    {
      type: "hostless-package",
      name: "User Profile",
      sectionLabel: "NFT Marketplace",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/nft-builder",
      items: [
        {
          type: "hostless-component",
          componentName: "nft-builder-user-avatar",
          displayName: "User Avatar",
        },
        {
          type: "hostless-component",
          componentName: "nft-builder-user-avatar-group",
          displayName: "User Avatar Group",
        },
        {
          type: "hostless-component",
          componentName: "nft-builder-user-info-card",
          displayName: "User Info Card",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_NFT,
    },
    {
      sectionLabel: "Design systems",
      type: "hostless-package",
      name: "Ant Design System 5",
      isHeaderLess: true,
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/antd.png",
      codeName: "antd5",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/antd5",
      onlyShownIn: "new",
      items: [
        {
          type: "hostless-component",
          componentName: "Ant Design System 5",
          displayName: "Ant Design System 5",
          imageUrl: "https://static1.plasmic.app/antd.png",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_ANTD,
    },
    {
      sectionLabel: "Design systems",
      type: "hostless-package",
      name: "Chakra UI System",
      isHeaderLess: true,
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/chakra.png",
      codeName: "plasmic-chakra-ui",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/chakra-ui",
      onlyShownIn: "new",
      items: [
        {
          type: "hostless-component",
          componentName: "Chakra-UI",
          displayName: "Chakra UI System",
          imageUrl: "https://static1.plasmic.app/chakra.png",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_CHAKRA,
    },
    {
      sectionLabel: "Ant Design",
      isInstallOnly: true,
      type: "hostless-package",
      name: "Ant Design System 5",
      imageUrl: "https://static1.plasmic.app/antd.png",
      codeName: "antd5",
      onlyShownIn: "old",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/antd5",
      items: [
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-collapse",
          displayName: "Accordion",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-avatar",
          displayName: "Avatar",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-avatar-group",
          displayName: "Avatar Group",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-breadcrumb",
          displayName: "Breadcrumb",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-button",
          displayName: "Button",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-checkbox",
          displayName: "Checkbox",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-checkbox-group",
          displayName: "Checkbox Group",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-single-collapse",
          displayName: "Collapse",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-color-picker",
          displayName: "Color Picker",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-date-picker",
          displayName: "Date/Time Picker",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-date-range-picker",
          displayName: "Date Range Picker",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-directory-tree",
          displayName: "Directory Tree",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-drawer",
          displayName: "Drawer",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-dropdown",
          displayName: "Dropdown",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-form",
          displayName: "Form",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-form-group",
          displayName: "Form Group",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-form-item",
          displayName: "Form Item",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-form-list",
          displayName: "Form List",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-input",
          displayName: "Input",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-input-number",
          displayName: "Number Input",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-input-password",
          displayName: "Password Input",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-menu",
          displayName: "Menu",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-radio",
          displayName: "Radio",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-radio-group",
          displayName: "Radio Group",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-modal",
          displayName: "Modal",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-pagination",
          displayName: "Pagination",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-popover",
          displayName: "Popover",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-progress",
          displayName: "Progress",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-rate",
          displayName: "Rate",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-range-slider",
          displayName: "Range Slider",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-segmented",
          displayName: "Segmented",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-select",
          displayName: "Select",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-steps",
          displayName: "Steps",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-slider",
          displayName: "Slider",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-switch",
          displayName: "Switch",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-tabs",
          displayName: "Tabs",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-textarea",
          displayName: "Text Area",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-tooltip",
          displayName: "Tooltip",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-tree",
          displayName: "Tree",
        },
        {
          type: "hostless-component",
          componentName: "plasmic-antd5-upload",
          displayName: "Upload",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_ANTD,
    },
    {
      hidden: false,
      sectionLabel: "Design systems",
      type: "hostless-package",
      name: "Ant Design System 4",
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/antd.png",
      codeName: "antd",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/antd",
      onlyShownIn: "old",
      items: [
        {
          type: "hostless-component",
          componentName: "AntdButton",
          displayName: "Button",
          imageUrl: "https://static1.plasmic.app/antd_button.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdSlider",
          displayName: "Slider",
          imageUrl: "https://static1.plasmic.app/antd_slider.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdSwitch",
          displayName: "Switch",
          imageUrl: "https://static1.plasmic.app/antd_switch.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdSelect",
          displayName: "Select",
          imageUrl: "https://static1.plasmic.app/antd_select.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdCollapse",
          displayName: "Collapse",
          imageUrl: "https://static1.plasmic.app/antd_collapse.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdCheckbox",
          displayName: "Checkbox",
          imageUrl: "https://static1.plasmic.app/antd_checkbox.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdMenu",
          displayName: "Menu",
          imageUrl: "https://static1.plasmic.app/antd_menu.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdCarousel",
          displayName: "Carousel",
          hidden: true,
          imageUrl: "https://static1.plasmic.app/antd_carousel.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdInput",
          displayName: "Input",
          imageUrl: "https://static1.plasmic.app/antd_input.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdTable",
          displayName: "Table",
          imageUrl: "https://static1.plasmic.app/antd_table.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdTabs",
          displayName: "Tabs",
          imageUrl: "https://static1.plasmic.app/antd_tabs.png",
        },
        {
          type: "hostless-component",
          componentName: "AntdRate",
          displayName: "Rate",
          imageUrl: "https://static1.plasmic.app/antd_rate.png",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_ANTD_4,
    },
    {
      hidden: false,
      sectionLabel: "Design systems",
      type: "hostless-package",
      name: "Ant Design System 4 (legacy)",
      isInstallOnly: true,
      imageUrl: "https://static1.plasmic.app/antd.png",
      codeName: "antd",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/antd",
      onlyShownIn: "new",
      items: [
        {
          type: "hostless-component",
          componentName: "Ant Design System 4 (legacy)",
          displayName: "Ant Design System 4 (legacy)",
          imageUrl: "https://static1.plasmic.app/antd.png",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_ANTD_4,
    },
    {
      sectionLabel: "APIs",
      type: "hostless-package",
      name: "Generic APIs",
      isHeaderLess: true,
      hiddenWhenInstalled: true,
      codeName: "plasmic-query",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/plasmic-query",
      items: [
        {
          type: "hostless-component",
          componentName: "hostless-plasmic-query-data-fetcher",
          displayName: "HTTP REST API Fetcher (browser)",
          imageUrl: "https://static1.plasmic.app/rest.png",
        },
        {
          type: "hostless-component",
          componentName: "hostless-plasmic-query-graphql-fetcher",
          displayName: "GraphQL API Fetcher",
          imageUrl: "https://static1.plasmic.app/graphql.png",
        },
      ],
      showInstall: true,
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_PLASMIC_QUERY,
    },
    {
      type: "hostless-package",
      name: "Carousel",
      sectionLabel: "Layout",
      codeName: "react-slick",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/react-slick",
      items: [
        {
          type: "hostless-component",
          componentName: "hostless-slider",
          displayName: "Slider Carousel",
          imageUrl: "https://static1.plasmic.app/slider.png",
        },
        {
          type: "hostless-component",
          componentName: "hostless-slider/marquee",
          displayName: "Marquee Carousel",
          imageUrl: "https://static1.plasmic.app/slider.png",
          args: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: "linear",
            speed: 5000,
          },
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_REACT_SLICK,
    },
    {
      type: "hostless-package",
      name: "Flexible Tabs",
      sectionLabel: "Layout",
      codeName: "plasmic-tabs",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/plasmic-tabs",
      items: [
        {
          type: "hostless-component",
          componentName: "hostless-tabs-container",
          displayName: "Flexible Tabs",
          imageUrl: "https://static1.plasmic.app/insertables/tabs.svg",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_PLASMIC_TAB,
    },
    {
      type: "hostless-package",
      name: "Navigation",
      sectionLabel: "Layout",
      codeName: "plasmic-nav",
      codeLink:
        "https://github.com/plasmicapp/plasmic/tree/master/plasmicpkgs/plasmic-nav",
      items: [
        {
          type: "hostless-component",
          componentName: "hostless-plasmic-navigation-bar",
          displayName: "Navbar",
          imageUrl: "https://static1.plasmic.app/plasmic-nav-thumbnail.svg",
        },
      ],
      projectId: projectIdConfig.HOST_LESS_PROJECT_ID_PLASMIC_NAV,
    },
  ]),
  // Turns on PlasmicImg for all
  usePlasmicImg: false,
  usePlasmicTranslation: false,
  showPlasmicImgModal: false,
  imgOptimizerHost: "https://img.plasmic.app",
  introYoutubeId: "K_YzFBd7b2I",
  noFlipTags: true,
  revisionNum: undefined,
  richtext2: true,
  secretApiTokenTeams: ["teamId"],
  selectInserted: true,
  showFullPreviewWarning: true,
  skipFreeVars: true,
  starterSections: [
    {
      title: "NFT marketplaces templates",
      tag: "general",
      projects: [
        {
          projectId: null,
          baseProjectId: projectIdConfig.TEMPLATE_PROJECT_ID_NFT_BUILDER,
          name: "All-in-one NFT marketplace",
          tag: "blank",
          imageUrl:
            "https://suinova.var-meta.com/static/img/nft-template-bg.png",
          publishWizard: true,
          hidden: true,
          description: "",
        },
      ],
    },
  ],
  versions: true,
  showMultipleAvatars: true,
  hiddenQuickstartPlatforms: ensureType<string[]>([]),
  mungeErrorMessages: {
    "AuthError: CSRF token mismatch":
      "Your login session has expired. Please reload to log in again.",
  },
  showCopilot: true,

  loaderBundler: "esbuild",
  esbuildProjectIds: [] as string[],
  hostLessWorkspaceId: null as WorkspaceId | null,
  manuallyUpdatedHostLessProjectIds: [] as string[],
  whitespaceNormalProjectIds: [] as string[],
  useWhitespaceNormal: false,
  autoUpgradeHostless: true,

  writeApiSizeLimit: 70000000, // 70MB
  writeApiExcludedProjectIds: [] as string[],

  // Disabled by default
  runningInCypress: false,
  posthog: true,
  copilotTab: false,
  copilotClaude: false,
  cleanRedundantOverrides: false,
  cms: false,
  comments: false,
  commentsTeamIds: [] as TeamId[],
  rightTabs: true,
  codePreview: false,
  demo: false,
  direct: false,
  enableReactDevTools: false, // used in studio.js
  hideBlankStarter: false,
  hideSingleSlots: false,
  hideSyncStatusIndicator: false,
  interactiveCanvas: true,
  insert2022Q4: true,
  sso: false,
  omnibar: false,
  orderVariantsByUid: false,
  paywalls: false,
  showCondVariants: false,
  showIntroSplash: false,
  skipInvariants: false,
  uncatchErrors: false,
  // Prefers loading state over expression fallback
  useLoadingState: false,
  showHiddenHostLessComponents: false,
  ccStubs: false,
  workspaces: false,
  noObserve: false,
  plexus: false,
  incrementalObservables: false,
  spacing: true,
  spacingArea: true,
  setHostLessProject: false,
  plasmicHostingSubdomainSuffix: "plasmic.run",
  splits: true,
  mutateState: false,
  refActions: false,
  multiSelect: false,
  dataTabTourForUsersBefore: "2023-02-28",
  pageLayout: false,
  mainContentSlots: false,
  insertTemplatesIntoMainContentSlots: false,
  simplifiedScreenVariants: false,
  simplifiedForms: false,
  schemaDrivenForms: false,
  hostUrl: "",
  globalTrustedHosts: ["https://example123.fake"],
  warningsInCanvas: false,
  previewSteps: false,

  // Permanently disabled, just internal tools/scripts.
  autoInitEmptyThemeStyles: false,
  allowPlasmicTeamEdits: false,

  // variant experiments
  variants: false,
  unconditionalEdits: false,
  ephemeralRecording: false,
  framerTargeting: true,

  // debugging user projects
  debug: false, // turns on other debug flags in `normalizeDevFlags`
  loadingDebug: false, // shows canvas frame loading debug UI
  logToConsole: !production,

  // github settings
  githubClientId: process.env.GITHUB_CLIENT_ID || "Iv1.8a4a47b0b0d4bf88",
  githubAppName: process.env.GITHUB_APP_NAME || "plasmic-app",

  // change simplified defaults
  simplifiedLayout: false,

  imageControls: false,

  componentThumbnails: false,

  // Enables the margin and padding spacing visualizer improvements
  spacingVisualizer202209: true,
  gapControls: false,
  contentOnly: false,
  publishWithTags: true,
  ancestorsBoxes: true,
  branching: false,
  disableBranching: false,
  branchingTeamIds: [] as TeamId[],
  commitsOnBranches: false,
  appAuth: false,
  advancedAppAuth: false,
  serverPublishProjectIds: [] as ProjectId[],
  focusable: false,
  envPanel: false,
  linting: false,

  // Number of arenas to keep in memory
  liveArenas: 6,

  analytics: false,
  analyticsPaywall: false,
  monthlyViewsPaywall: false,
  verifyMonthlyViews: false,

  debugCmsForms: false,

  hiddenDataSources: [] as string[],
  serverQueries: false,

  // Custom top frame URLs; if Studio is loaded from a custom
  // domain, then this allows us to recognize it as the top frame
  // Hard-coding this for now as db-based flag overrides are
  // not yet loaded when it is needed.
  topFrameUrls: ["https://studio.plsmc.dev"] as string[],

  defaultContentCreatorConfig: {
    styleSectionVisibilities: {
      visibility: false,
      typography: false,
      sizing: false,
      spacing: false,
      positioning: false,
      background: false,
      transform: false,
      transitions: false,
      layout: false,
      overflow: false,
      border: false,
      shadows: false,
      effects: false,
      states: false,
      interactions: false,
    },
  } as UiConfig,

  googleAuthRequiredEmailDomains: ["plasmic.app"],

  onboardingTours: false,

  newProjectModal: false,

  authUsersTab: false,

  /*
  Template tours should map projectId to tourId, this way when a user creates a new project
  by cloning a template, we can show them the tour for that template.
  */
  templateTours: {} as Record<string, string>,

  autoOpen: false,
  autoOpen2: false,
};

Object.assign(DEFAULT_DEVFLAGS, DEFAULT_DEVFLAG_OVERRIDES);

export type DevFlagsType = typeof DEFAULT_DEVFLAGS;
export const DEVFLAGS = cloneDeep(DEFAULT_DEVFLAGS);

function normalizeDevFlags(flags: DevFlagsType) {
  if (flags.variants) {
    flags.unconditionalEdits = true;
    flags.ephemeralRecording = true;
  }

  if (flags.debug) {
    flags.autoSave = false;
    flags.ccStubs = true;
    flags.logToConsole = true;
    flags.enableReactDevTools = true;
  }
}

/** Applies overrides to DEVFLAGS. */
export function applyDevFlagOverrides(overrides: Partial<DevFlagsType>): void {
  // Apply overrides to default devflags to avoid mergeSane persisting keys that
  // were present on an old override but removed in a new override (see tests).
  Object.assign(DEVFLAGS, applyDevFlagOverridesToDefaults(overrides));
}

/** Applies overrides to a copy of the default devflags and returns it. */
export function applyDevFlagOverridesToDefaults(
  overrides: Partial<DevFlagsType>
): DevFlagsType {
  const devflags = cloneDeep(DEFAULT_DEVFLAGS);
  applyDevFlagOverridesToTarget(devflags, overrides);
  return devflags;
}

/** Applies overrides to a target. */
export function applyDevFlagOverridesToTarget(
  target: DevFlagsType,
  overrides: Partial<DevFlagsType>
): void {
  mergeSane(target, overrides);
  normalizeDevFlags(target);
}

export function applyPlasmicUserDevFlagOverrides(target: DevFlagsType) {
  mergeSane(target, {
    ancestorsBoxes: true,
    multiSelect: true,
    insert2022Q4: true,
    plexus: true,
    incrementalObservables: true,
    branching: true,
    comments: true,
    pageLayout: true,
    refActions: true,
    logToConsole: true,
    rightTabs: true,
    appAuth: true,
    focusable: true,
    envPanel: true,
    interactiveCanvas: true,
    hiddenDataSources: [] as string[],
    serverQueries: true,
    mainContentSlots: true,
    insertTemplatesIntoMainContentSlots: true,
    simplifiedScreenVariants: true,
    simplifiedForms: true,
    schemaDrivenForms: true,
    onboardingTours: true,
    showInsertableTemplateComponents: true,
    advancedAppAuth: true,
    posthog: true,
    linting: true,
    componentThumbnails: false,
    authUsersTab: true,
    warningsInCanvas: true,
    previewSteps: true,
    autoOpen: true,
    autoOpen2: true,
  } as Partial<DevFlagsType>);
}

const perProjectFlags: (keyof DevFlagsType)[] = [
  "usePlasmicImg",
  "usePlasmicTranslation",
  "useLoadingState",
  "useWhitespaceNormal",
];

export function getProjectFlags(
  site: {
    flags: { [f: string]: string | number | boolean | null | undefined };
  },
  target = DEVFLAGS
): DevFlagsType {
  return Object.assign(
    JSON.parse(JSON.stringify(target)),
    pick(site.flags, perProjectFlags)
  );
}
