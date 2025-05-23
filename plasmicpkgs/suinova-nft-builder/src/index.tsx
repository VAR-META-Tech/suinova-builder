import { Registerable } from "./reg-util";
import { registerWeb3Provider } from "./globalContextProvider";
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
import { registerNFTSelect } from "./components/nftSelect";
import {
  registerNFTSelectOptGroup,
  registerNFTSelectOption,
} from "./components/nftSelectOption";
import { registerArrowDownIcon } from "./icons/arrowDownIcon";
import { registerNFTInput } from "./components/nftInput";
import { registerCopyIcon } from "./icons/copyIcon";
import { registerLogoutIcon } from "./icons/logoutIcon";
import { registerUserIcon } from "./icons/userIcon";

export function registerAll(loader?: Registerable) {
  // global provider
  registerWeb3Provider(loader);
  // icons
  registerLeftArrowIcon(loader);
  registerRightArrowIcon(loader);
  registerBackIcon(loader);
  registerForwardIcon(loader);
  registerPlayIcon(loader);
  registerStopIcon(loader);
  registerWalletIcon(loader);
  registerCopyIcon(loader);
  registerUserIcon(loader);
  registerLogoutIcon(loader);
  // components
  registerVideoPlayer(loader);
  registerConnectWalletButton(loader);
  registerUserAvatar(loader);
  registerUserAvatarGroup(loader);
  registerNFTCard(loader);
  registerNFTCarousel(loader);
  registerCarouselBtnGroup(loader);
  registerNFTCarouselItem(loader);
  registerNFTSelectOption(loader);
  registerNFTSelectOptGroup(loader);
  registerNFTSelect(loader);
  registerArrowDownIcon(loader);
  registerNFTInput(loader);
}

export { popoverProps } from "./util";
export { PopoverExtraProps } from "./util";
export { Web3GlobalContext } from "./globalContextProvider";
