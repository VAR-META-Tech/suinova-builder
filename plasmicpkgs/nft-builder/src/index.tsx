import { Registerable } from "./reg-util";
import { registerPopover } from "./popover";
import { registerDialog } from "./dialog";
import { registerTooltip } from "./tooltip";
import { registerConnectWalletButton } from "./connectWalletButton";
import { registerGlobalContextProvider } from "./globalContextProvider";
import { registerUserAvatar, registerUserAvatarGroup } from "./userAvatar";
import { registerNFTCard } from "./nftCard";
import { registerCollectionCard } from "./collectionCard";

export function registerAll(loader?: Registerable) {
  registerGlobalContextProvider()
  registerPopover(loader);
  registerDialog(loader);
  registerTooltip(loader);
  registerConnectWalletButton(loader);
  registerUserAvatar(loader)
  registerUserAvatarGroup(loader)
  registerNFTCard(loader)
  registerCollectionCard(loader)
}

export * from "./dialog";
export * from "./popover";
export * from "./tooltip";
export * from "./userAvatar";
export * from "./nftCard";
export * from "./collectionCard";
export * from "./globalContextProvider";
export { popoverProps } from "./util";
export { PopoverExtraProps } from "./util";
