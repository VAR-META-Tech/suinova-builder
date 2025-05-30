// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { APP_AUTH_TRACKING_EVENT } from "@/wab/client/app-auth/constants";
import { AppCtx } from "@/wab/client/app-ctx";
import {
  useAppCurrentUserOpConfig,
  useAppRoles,
  useAppUsers,
} from "@/wab/client/components/app-auth/app-auth-contexts";
import { useDataSourceOpExprBottomModal } from "@/wab/client/components/sidebar-tabs/DataSource/DataSourceOpPicker";
import {
  ClickStopper,
  IFrameAwareDropdownMenu,
} from "@/wab/client/components/widgets";
import { Textbox } from "@/wab/client/components/widgets/Textbox";
import { useTopFrameApi } from "@/wab/client/contexts/AppContexts";
import {
  DefaultViewAsButtonProps,
  PlasmicViewAsButton,
} from "@/wab/client/plasmic/plasmic_kit_top_bar/PlasmicViewAsButton";
import {
  StudioAppUser,
  isUserProjectEditor,
  useStudioCtx,
} from "@/wab/client/studio-ctx/StudioCtx";
import { trackEvent } from "@/wab/client/tracking";
import { ApiAppUser } from "@/wab/shared/ApiSchema";
import { DATA_SOURCE_OPERATION_LOWER } from "@/wab/shared/Labels";
import { Bundle, FastBundler } from "@/wab/shared/bundler";
import { ifEmpty, spawn } from "@/wab/shared/common";
import { isValidCurrentUserPropsExpr } from "@/wab/shared/core/exprs";
import { DataSourceOpExpr } from "@/wab/shared/model/classes";
import { shortenSuiEmail } from "@/wab/shared/utils/email-utils";
import { Menu, notification } from "antd";
import { observer } from "mobx-react";
import * as React from "react";
import { useState } from "react";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ViewAsButtonProps extends Omit<DefaultViewAsButtonProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultViewAsButtonProps altogether and have
// total control over the props for your component.
export type ViewAsButtonProps = DefaultViewAsButtonProps;

const maxListedUsers = 30;

function _ViewAsButton(props: ViewAsButtonProps) {
  const studioCtx = useStudioCtx();
  const topFrameApi = useTopFrameApi();
  const currentAppUserCtx = studioCtx.currentAppUserCtx;
  const appCtx = studioCtx.appCtx;
  const appId = studioCtx.siteInfo.id;
  const { appUsers } = useAppUsers(appCtx, appId);

  const isEditor = isUserProjectEditor(
    appCtx.selfInfo,
    studioCtx.siteInfo,
    studioCtx.siteInfo.perms
  );

  const [search, setSearch] = useState("");

  // Only show it for projects with auth enabled
  if (!studioCtx.siteInfo.hasAppAuth || !appUsers) {
    return null;
  }

  async function logAsAppUser(user: ApiAppUser) {
    trackEvent(APP_AUTH_TRACKING_EVENT, {
      action: "logAsAppUser",
    });

    const studioAppUser: StudioAppUser = {
      isLoggedIn: true,
      email: user.email,
      customProperties: user.customProperties,
      properties: user.properties,
      roleName: user.roleName,
      roleIds: user.roleIds,
      roleId: user.roleId,
      walletAddress: user.walletAddress,
    };

    await studioCtx.logAsAppUser(studioAppUser);
  }

  async function logoutAppUser() {
    trackEvent(APP_AUTH_TRACKING_EVENT, {
      action: "logAsAppUser",
    });

    await studioCtx.resetAppUser();
  }

  function getViewAsLabel() {
    if (currentAppUserCtx.appUser.email) {
      return `Viewing as ${shortenSuiEmail(currentAppUserCtx.appUser.email)}`;
    } else if (currentAppUserCtx.appUser.externalId) {
      return `Viewing as ${currentAppUserCtx.appUser.externalId}`;
    } else {
      return "Viewing as anonymous";
    }
  }

  return (
    <IFrameAwareDropdownMenu
      onVisibleChange={(visible) => {
        if (!visible) {
          setSearch("");
        }
      }}
      menu={
        <Menu>
          {appUsers.appUsers.length > 0 && (
            <Menu.Item className="ant-dropdown-menu-item--not-selectable">
              <ClickStopper>
                <Textbox
                  placeholder="Search emails"
                  className={"mb-sm"}
                  style={{ border: "none", boxShadow: "none" }}
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div />
              </ClickStopper>
            </Menu.Item>
          )}
          {appUsers.appUsers.length === 0 && (
            <Menu.ItemGroup title="View as user">
              <Menu.Item disabled>(No users defined!)</Menu.Item>
            </Menu.ItemGroup>
          )}
          {appUsers.appUsers.length > 0 && (
            <Menu.ItemGroup title="View as user">
              {ifEmpty(
                appUsers.appUsers
                  .filter((u) =>
                    (u.email ?? u.externalId ?? "").includes(
                      search.trim().toLowerCase()
                    )
                  )
                  .slice(0, maxListedUsers)
                  .map((user) => {
                    return (
                      <Menu.Item
                        key={user.email}
                        onClick={async () => {
                          await logAsAppUser(user);
                        }}
                      >
                        {shortenSuiEmail(user.email || "")}{" "}
                        <span className="dimfg">{`- ${user.roleName}`}</span>
                      </Menu.Item>
                    );
                  }),
                () => (
                  <Menu.Item disabled>User not found</Menu.Item>
                )
              )}
            </Menu.ItemGroup>
          )}
          <Menu.Divider />
          <Menu.Item
            key="logout"
            onClick={async () => {
              await logoutAppUser();
            }}
          >
            View as anonymous user
          </Menu.Item>
          {isEditor && (
            <>
              <Menu.Item
                key="manage"
                onClick={async () => {
                  await topFrameApi.setShowAppAuthModal(true);
                }}
              >
                Manage users & settings
              </Menu.Item>
              <Menu.Divider />
              {!studioCtx.isLiveMode && <AdvancedAppAuthMenuItems />}
            </>
          )}
        </Menu>
      }
    >
      <PlasmicViewAsButton {...props}>{getViewAsLabel()}</PlasmicViewAsButton>
    </IFrameAwareDropdownMenu>
  );
}

export function AdvancedAppAuthMenuItems() {
  const studioCtx = useStudioCtx();
  const appCtx = studioCtx.appCtx;
  const appId = studioCtx.siteInfo.id;
  const { roles } = useAppRoles(appCtx, appId);
  const dataSourceModal = useDataSourceOpExprBottomModal(
    "current-user-properties"
  );
  const {
    config: appCurrentUserOpConfig,
    mutate: mutateAppCurrentUserOpConfig,
  } = useAppCurrentUserOpConfig(appCtx, appId);

  async function handleSave(expr: DataSourceOpExpr) {
    if (
      !isValidCurrentUserPropsExpr(expr, {
        projectFlags: studioCtx.projectFlags(),
        component: null,
        inStudio: true,
      })
    ) {
      notification.error({
        message:
          "The current user properties expression is invalid. You can only use direct properties from the current user without any manipulation.",
      });
      return;
    }

    // This opId shouldn't be possible to leak as it's only used internally
    // but even so, it should have a better way to ensure the safety even if it's leaked
    const opId = expr.opId;
    const bundledOp = getBundledFromDataSourceOpExpr(expr, appCtx);

    await mutateAppCurrentUserOpConfig(async () => {
      const newAppCurrentUserOpConfig =
        await appCtx.api.upsertAppCurrentUserOpConfig(appId, {
          userPropsOpId: opId,
          userPropsBundledOp: bundledOp,
          userPropsDataSourceId: expr.sourceId,
        });

      return newAppCurrentUserOpConfig;
    });

    await studioCtx.refreshAppUserProperties();

    dataSourceModal.close();
  }

  return (
    <>
      <Menu.ItemGroup title="User properties">
        {appCurrentUserOpConfig && roles.length > 0 && (
          <Menu.Item
            key="configure-up"
            onClick={() => {
              dataSourceModal.open({
                title: `Configure user properties ${DATA_SOURCE_OPERATION_LOWER}`,
                value: getDataSourceOpExprFromBundle(
                  appCurrentUserOpConfig.userPropsBundledOp
                ),
                onSave: (newExpr) => {
                  spawn(handleSave(newExpr));
                },
                onCancel: () => dataSourceModal.close(),
                env: {
                  currentUser: {
                    email: studioCtx.currentAppUser.email,
                    externalId: studioCtx.currentAppUser.externalId,
                  },
                },
                readOnly: false,
                readOpsOnly: true,
                userPropsMode: true,
                exprCtx: {
                  projectFlags: studioCtx.projectFlags(),
                  component: null,
                  inStudio: true,
                },
              });
            }}
          >
            Configure
          </Menu.Item>
        )}
        {appCurrentUserOpConfig?.userPropsBundledOp && (
          <Menu.Item
            key="unset-up"
            onClick={async () => {
              await mutateAppCurrentUserOpConfig(
                async () => {
                  const newUserOpConfig =
                    await appCtx.api.upsertAppCurrentUserOpConfig(appId, {
                      userPropsOpId: null,
                      userPropsBundledOp: null,
                      userPropsDataSourceId: null,
                    });

                  await studioCtx.refreshAppUserProperties();

                  return newUserOpConfig;
                },
                {
                  optimisticData: {
                    userPropsOpId: null,
                    userPropsBundledOp: null,
                    userPropsDataSourceId: null,
                  },
                }
              );
            }}
          >
            Remove
          </Menu.Item>
        )}
      </Menu.ItemGroup>
    </>
  );
}

function getBundledFromDataSourceOpExpr(
  expr: DataSourceOpExpr,
  appCtx: AppCtx
) {
  return JSON.stringify(
    appCtx.bundler.bundle(expr, "currentUserOpExpr", appCtx.lastBundleVersion)
  );
}

function getDataSourceOpExprFromBundle(bundled?: string | null) {
  if (!bundled) {
    return undefined;
  }
  const bundle = JSON.parse(bundled) as Bundle;
  const bundler = new FastBundler();
  return bundler.unbundle(bundle, "currentUserOpExpr") as DataSourceOpExpr;
}

const ViewAsButton = observer(_ViewAsButton);

export default ViewAsButton;
