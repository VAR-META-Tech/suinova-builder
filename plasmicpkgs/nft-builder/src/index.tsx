import { Registerable } from "./reg-util";
import { registerGlobalContextProvider } from "./globalContextProvider";
import { registerUserInfoCard } from "./components/userInfoCard";
import { registerLeftArrowIcon } from "./icons/leftArrowIcon";
import { registerConnectWalletButton } from "./components/connectWalletButton";
import {
  registerUserAvatar,
  registerUserAvatarGroup,
} from "./components/userAvatar";
import { registerNFTCard } from "./components/nftCard";
import { registerBackIcon } from "./icons/backIcon";
import { registerForwardIcon } from "./icons/forwardIcon";
import { registerPlayIcon } from "./icons/playIcon";
import { registerStopIcon } from "./icons/stopIcon";
import { registerRightArrowIcon } from "./icons/rightArrowIcon";
import { registerVideoPlayer } from "./components/videoPlayer";
import { registerNFTCarousel } from "./components/nftCarousel";
import { registerCarouselBtnGroup } from "./components/carouselBtnGroup";
import { registerWalletIcon } from "./icons/walletIcon";
import { registerNFTCarouselItem } from "./components/nftCarouselItem";

export function registerAll(loader?: Registerable) {
  // global provider
  registerGlobalContextProvider();
  // icons
  registerLeftArrowIcon(loader);
  registerRightArrowIcon(loader);
  registerBackIcon(loader);
  registerForwardIcon(loader);
  registerPlayIcon(loader);
  registerStopIcon(loader);
  registerWalletIcon(loader);
  // components
  registerVideoPlayer(loader);
  registerConnectWalletButton(loader);
  registerUserAvatar(loader);
  registerUserAvatarGroup(loader);
  registerNFTCard(loader);
  registerUserInfoCard(loader);
  registerNFTCarousel(loader);
  registerCarouselBtnGroup(loader);
  registerNFTCarouselItem(loader);
}

export * from "./components/userAvatar";
export * from "./components/nftCard";
export * from "./globalContextProvider";
export * from "./components/userInfoCard";
export * from "./icons/leftArrowIcon";
export * from "./icons/rightArrowIcon";
export * from "./icons/backIcon";
export * from "./icons/forwardIcon";
export * from "./icons/playIcon";
export * from "./icons/stopIcon";
export * from "./components/connectWalletButton";
export * from "./components/videoPlayer";
export * from "./components/nftCarousel";
export * from "./components/carouselBtnGroup";
export * from "./icons/walletIcon";
export * from  "./components/nftCarouselItem";
export { popoverProps } from "./util";
export { PopoverExtraProps } from "./util";
