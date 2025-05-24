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
export { ArrowDownIcon } from "./icons/arrowDownIcon";
export { NFTInput } from "./components/nftInput";
export { CopyIcon } from "./icons/copyIcon";
export { LogoutIcon } from "./icons/logoutIcon";
export { UserIcon } from "./icons/userIcon";
export { LeftArrowIcon } from "./icons/leftArrowIcon";
export { ConnectWalletButton } from "./components/connectWalletButton";
export { UserAvatar, UserAvatarGroup } from "./components/userAvatar";
export { NFTCard } from "./components/nftCard";
export { BackIcon } from "./icons/backIcon";
export { ForwardIcon } from "./icons/forwardIcon";
export { PlayIcon } from "./icons/playIcon";
export { StopIcon } from "./icons/stopIcon";
export { RightArrowIcon } from "./icons/rightArrowIcon";
export { VideoPlayer } from "./components/videoPlayer";
export { NFTCarousel } from "./components/nftCarousel";
export { NFTCarouselBtnGroup } from "./components/carouselBtnGroup";
export { WalletIcon } from "./icons/walletIcon";
export { NFTCarouselItem } from "./components/nftCarouselItem";
export { NFTSelect } from "./components/nftSelect";
export {
  NFTSelectOptGroup,
  NFTSelectOption,
} from "./components/nftSelectOption";
