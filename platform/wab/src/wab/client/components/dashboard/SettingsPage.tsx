import { AppCtx } from "@/wab/client/app-ctx";
import { AddTrustedHostModal } from "@/wab/client/components/AddTrustedHostModal";
import { documentTitle } from "@/wab/client/components/dashboard/page-utils";
import SettingsContainer from "@/wab/client/components/pages/plasmic/SettingsContainer";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import { useAsyncStrict } from "@/wab/client/hooks/useAsyncStrict";
import {
  DefaultSettingsPageProps,
  PlasmicSettingsPage,
} from "@/wab/client/plasmic/plasmic_kit_dashboard/PlasmicSettingsPage";
import { ApiTrustedHost } from "@/wab/shared/ApiSchema";
import { ensure } from "@/wab/shared/common";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import copy from "copy-to-clipboard";
import { observer } from "mobx-react";
import * as React from "react";
import { Avatar } from "@/wab/client/components/studio/Avatar";

interface SettingsPageProps extends DefaultSettingsPageProps {
  appCtx: AppCtx;
}

function SettingsPage_(props: SettingsPageProps, ref: HTMLElementRefOf<"div">) {
  const { appCtx, ...rest } = props;
  const user = ensure(appCtx.selfInfo, "Unexpected null selfInfo");
  const profile = ensure(appCtx.profileInfo, "Unexpected null selfInfo");
  const tokensState = usePersonalApiTokens();
  const ops = ensure(appCtx.ops, "Unexpected null AppOps");
  const [copiedToken, setCopiedToken] = React.useState("");
  const [hostsState, setHostsState] = React.useState<
    "loading" | "error" | ApiTrustedHost[]
  >();
  const [showHostModal, setShowHostModal] = React.useState(false);
  const updateHostList = React.useCallback(() => {
    setHostsState("loading");
    appCtx.api
      .getTrustedHostsList()
      .then((data) => setHostsState(data.trustedHosts))
      .catch(() => setHostsState("error"));
  }, [appCtx, setHostsState]);

  const refetchProfile = async () => {
    try {
      const res = await appCtx.api.getUserProfile();
      appCtx.profileInfo = res;
    } catch (e) {
      console.log("updateProfile ~ e:", e);
    }
  };

  React.useEffect(() => {
    updateHostList();
  }, [updateHostList]);
  return (
    <>
      {documentTitle("Settings")}
      <PlasmicSettingsPage
        root={{ ref }}
        {...rest}
        defaultLayout={{
          children: (
            <>
              {showHostModal && (
                <AddTrustedHostModal
                  appCtx={appCtx}
                  onCancel={() => setShowHostModal(false)}
                  onUpdate={() => {
                    updateHostList();
                    setShowHostModal(false);
                  }}
                />
              )}
              <SettingsContainer
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                avatarImgUrl={user.avatarUrl || undefined}
                walletAddress={profile.walletAddress}
                username={profile.username}
                tokensState={tokensState}
                hostsState={hostsState}
                hideChangePassword={appCtx.selfInfo?.usesOauth}
                onNewToken={() => ops.createPersonalApiToken()}
                onDeleteToken={(token: string) =>
                  ops.revokePersonalApiToken(token)
                }
                onCopyToken={(e: React.MouseEvent, token: string) => {
                  setCopiedToken(token);
                  copy(token);
                }}
                copiedToken={copiedToken}
                onDeleteTrustedHost={(host) =>
                  appCtx.api
                    .deleteTrustedHost(host.id)
                    .then(() => updateHostList())
                }
                onNewTrustedHost={() => setShowHostModal(true)}
                updateProfileFunc={async (data) =>
                  await appCtx.api.updateUserProfile(data)
                }
                uploadImage={(file) => appCtx.api.uploadImageFile(file)}
                refetchProfile={() => {
                  return refetchProfile();
                }}
                avatar={
                  <Avatar
                    size="extraLarge"
                    hideTooltip
                    user={user}
                    url={profile.avatarUrl}
                  />
                }
              ></SettingsContainer>
            </>
          ),
        }}
      />
    </>
  );
}

function usePersonalApiTokens() {
  const appCtx = useAppCtx();
  const tokens = appCtx.personalApiTokens;
  const api = appCtx.api;

  return useAsyncStrict(async () => {
    if (tokens === null) {
      const fetched = await api.listPersonalApiTokens();
      appCtx.personalApiTokens = fetched;
      return fetched;
    } else {
      return tokens;
    }
  }, [api, tokens, appCtx]);
}

const SettingsPage = observer(React.forwardRef(SettingsPage_));
export default SettingsPage;
