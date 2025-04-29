import StarterProject from "@/wab/client/components/StarterProject";
import { useAppCtx } from "@/wab/client/contexts/AppContexts";
import {
  DefaultStarterGroupProps,
  PlasmicStarterGroup,
} from "@/wab/client/plasmic/plasmic_kit/PlasmicStarterGroup";
import ClockIcon from "@/wab/client/plasmic/plasmic_kit_dashboard/icons/PlasmicIcon__Clock";
import HatchIcon from "@/wab/client/plasmic/plasmic_kit_dashboard/icons/PlasmicIcon__Hatch";
import JoystickIcon from "@/wab/client/plasmic/plasmic_kit_dashboard/icons/PlasmicIcon__Joystick";
import { WorkspaceId } from "@/wab/shared/ApiSchema";
import { isAdminTeamEmail } from "@/wab/shared/devflag-utils";
import {
  StarterProjectConfig,
  StarterSectionConfig,
} from "@/wab/shared/devflags";
import { Tooltip } from "antd";
import * as React from "react";
import { Modal } from "@/wab/client/components/widgets/Modal";
import CollectionForm from "@/wab/client/components/custom-components/CollectionForm/CollectionForm";
import {
  ConnectButton,
  useCurrentAccount,
  useDisconnectWallet,
  useCurrentWallet,
} from "@mysten/dapp-kit";
import Button from "@/wab/client/components/widgets/Button";
import { U } from "@/wab/client/cli-routes";
import NFTMintingForm from "@/wab/client/components/custom-components/NFTMintingForm/NFTMintingForm";

const iconMap = {
  JoystickIcon: <JoystickIcon style={{ width: 20, height: 20 }} />,
  ClockIcon: <ClockIcon />,
  HatchIcon: <HatchIcon />,
};

export interface StarterGroupProps
  extends DefaultStarterGroupProps,
    StarterSectionConfig {
  projects: StarterProjectConfig[];
  workspaceId?: WorkspaceId;
}

function StarterGroup(props: StarterGroupProps) {
  const [selectedProject, setSelectedProject] = React.useState<{
    projectId: string;
    parentProjectId: string;
  }>({
    projectId: "",
    parentProjectId: "",
  });
  const appCtx = useAppCtx();
  const showPlasmicOnlyProjects = isAdminTeamEmail(
    appCtx.selfInfo?.email,
    appCtx.appConfig
  );

  const projects = props.projects
    .filter((p) => !p.isPlasmicOnly || showPlasmicOnlyProjects)
    .map((proj) => (
      <StarterProject
        key={proj.tag}
        name={proj.name}
        projectId={proj.projectId}
        baseProjectId={proj.baseProjectId}
        tag={proj.tag}
        descrip={proj.description}
        icon={proj.iconName ? iconMap[proj.iconName] : undefined}
        imageUrl={proj.imageUrl}
        type={proj.highlightType}
        href={proj.href}
        author={proj.author}
        authorLink={proj.authorLink}
        showPreview={proj.showPreview}
        workspaceId={props.workspaceId}
        withDropShadow={proj.withDropShadow}
        cloneWithoutName={proj.cloneWithoutName}
        onSelect={(projectId: string, parentProjectId: string) => {
          setSelectedProject({ projectId, parentProjectId });
        }}
      />
    ));

  const currentWalletAccount = useCurrentAccount();
  const currentWallet = useCurrentWallet();
  const { mutate } = useDisconnectWallet();

  return (
    <>
      <Modal
        destroyOnClose
        centered
        className={"ImportCollectionModal__Wrapper"}
        title="Collection Import"
        open={
          !!selectedProject?.projectId &&
          selectedProject?.parentProjectId ===
            process.env.TEMPLATE_PROJECT_ID_NFT_BUILDER
        }
        onCancel={() =>
          setSelectedProject({
            projectId: "",
            parentProjectId: "",
          })
        }
        footer={null}
      >
        <div className={"ImportCollectionModal__InstructionText"}>
          Connect your wallet to verify ownership and set up collection details
          for importing and customizing your collection in SuiNova.
        </div>
        {!currentWalletAccount ? (
          <ConnectButton
            className="ImportCollectionModal__ConnectButton"
            connectText="Connect Wallet"
          />
        ) : (
          <Button
            className="ImportCollectionModal__ConnectButton"
            onClick={() => mutate()}
          >
            Disconnect Wallet
          </Button>
        )}
        {currentWallet.isConnected && (
          <CollectionForm
            onImportSuccess={() => {
              location.href = U.project({
                projectId: selectedProject.projectId,
              });
            }}
            projectId={selectedProject.projectId}
            appCtx={appCtx}
            onCancel={() =>
              setSelectedProject({
                projectId: "",
                parentProjectId: "",
              })
            }
            importedCollection={null}
          />
        )}
      </Modal>
      <Modal
        destroyOnClose
        centered
        className={"ImportCollectionModal__Wrapper"}
        title="Set up NFT Minting website"
        open={
          !!selectedProject?.projectId &&
          selectedProject?.parentProjectId ===
            process.env.TEMPLATE_PROJECT_ID_NFT_MINTING
        }
        onCancel={() =>
          setSelectedProject({
            projectId: "",
            parentProjectId: "",
          })
        }
        footer={null}
      >
        <div className={"ImportCollectionModal__InstructionText"}>
          Connect your wallet to verify ownership and set up collection details
          for importing and customizing your collection in SuiNova.
        </div>
        {!currentWalletAccount ? (
          <ConnectButton
            className="ImportCollectionModal__ConnectButton"
            connectText="Connect Wallet"
          />
        ) : (
          <Button
            className="ImportCollectionModal__ConnectButton"
            onClick={() => mutate()}
          >
            Disconnect Wallet
          </Button>
        )}
        {currentWallet.isConnected && (
          <NFTMintingForm
            onCreateCollectionSuccess={() => {
              document.location.href = U.project({
                projectId: selectedProject.projectId,
              });
            }}
            projectId={selectedProject.projectId}
          />
        )}
      </Modal>
      <PlasmicStarterGroup
        root={{
          // className prop needs to be piped to the root element of this
          // component
          className: props.className,
        }}
        heading={props.title}
        // Only display if there's a tooltip
        infoIcon={{
          wrap: (node) =>
            !props.infoTooltip ? null : (
              <Tooltip title={props.infoTooltip}>
                {node as React.ReactElement}
              </Tooltip>
            ),
        }}
        // Only display if there's a URL
        viewDocs={{
          props: {
            href: props.docsUrl ?? "#",
            text: "Docs",
            hide: !props.docsUrl,
          },
        }}
        // Only display if there's a URL
        more={{
          props: {
            href: props.moreUrl ?? "#",
            text: "See all...",
            hide: !props.moreUrl,
          },
        }}
        twoColumnGrid={props.twoColumnGrid}
        container={projects}
      />
    </>
  );
}

export default StarterGroup;
