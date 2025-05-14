import { PageFooter } from "@/wab/client/components/pages/PageFooter";
import { Icon } from "@/wab/client/components/widgets/Icon";
import MarkFullColorIcon from "@/wab/client/plasmic/plasmic_kit_design_system/PlasmicIcon__MarkFullColor";
import { Tooltip } from "antd";
import * as React from "react";
import { ReactNode } from "react";
import AppLogo from "@/wab/client/assets/suinova-logo.svg";

export function IntakeFlowForm(props: { children: ReactNode }) {
  return (
    <div className={"LoginForm__Container"}>
      <div className={"LoginForm__Content"}>
        <div className={"LoginForm__Logo"}>
          <Tooltip title="SuiNova">
            {/* <Icon icon={MarkFullColorIcon} style={{ width: 128, height: 64 }} /> */}
            <img src={AppLogo} width={117} />
          </Tooltip>
        </div>
        {props.children}
        <PageFooter />
      </div>
    </div>
  );
}
