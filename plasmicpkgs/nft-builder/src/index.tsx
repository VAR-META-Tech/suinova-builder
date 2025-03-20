import { Registerable } from "./reg-util";
import { registerConnectWalletButton } from "./connectWalletButton";
import { registerGlobalContextProvider } from "./globalContextProvider";
import { registerUserAvatar, registerUserAvatarGroup } from "./userAvatar";
import { registerNFTCard } from "./nftCard";
import { registerCollectionCard } from "./collectionCard";

export function registerAll(loader?: Registerable) {
  registerGlobalContextProvider();
  registerConnectWalletButton(loader);
  registerUserAvatar(loader);
  registerUserAvatarGroup(loader);
  registerNFTCard(loader);
  registerCollectionCard(loader);
}

export * from "./userAvatar";
export * from "./nftCard";
export * from "./collectionCard";
export * from "./globalContextProvider";
export { popoverProps } from "./util";
export { PopoverExtraProps } from "./util";
