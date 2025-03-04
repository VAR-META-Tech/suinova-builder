import { NonAuthComponent, NonAuthComponentProps } from "@/wab/client/app-ctx";
import * as widgets from "@/wab/client/components/widgets";
import MarkFullColorIcon from "@/wab/client/plasmic/plasmic_kit_design_system/PlasmicIcon__MarkFullColor";
import * as React from "react";
import { ReactNode } from "react";

interface ConnectWalletLayoutComponentProps {
  topBar?: ReactNode;
  children?: ReactNode;
}
class ConnectWalletLayoutComponent extends React.Component<
  ConnectWalletLayoutComponentProps,
  {}
> {
  render() {
    const { topBar } = this.props;
    return (
      <div className={"connect-wallet-layout"}>
        {topBar && (
          <div className={"connect-wallet__top-bar"}>
            <div
              className={
                "connect-wallet-content connect-wallet-content--top-bar"
              }
            >
              <widgets.PlainLink href={"/"} className={"home-logo"}>
                <MarkFullColorIcon className="connect-wallet__mark" />
              </widgets.PlainLink>

              {topBar}
            </div>
          </div>
        )}
        <div className={"connect-wallet-content"}>{this.props.children}</div>
      </div>
    );
  }
}
interface ConnectWalletLayoutProps extends NonAuthComponentProps {
  children?: React.ReactNode;
}
export class ConnectWalletLayout extends NonAuthComponent<
  ConnectWalletLayoutProps,
  {}
> {
  render() {
    return (
      <ConnectWalletLayoutComponent>
        {this.props.children}
      </ConnectWalletLayoutComponent>
    );
  }
}
