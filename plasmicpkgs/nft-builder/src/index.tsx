import { Registerable } from "./reg-util";
import { registerGlobalContextProvider } from "./globalContextProvider";
import { registerUserInfoCard } from "./components/userInfoCard";
import { registerHeader } from "./homePageSections/header";
import { registerMagnifyingIcon } from "./icons/magnifyingIcon";
import { registerHero } from "./homePageSections/hero";
import { registerSectionOne } from "./homePageSections/sectionOne";
import { registerHeroRightIllustration } from "./components/heroRightIllustration";
import { registerRocketIcon } from "./icons/rocketIcon";
import { registerGetStartedButton } from "./components/getStartedButton";
import { registerHeroIllusImage } from "./components/heroIllusImage";
import { registerHeroAuthor } from "./components/heroAuthor";
import { registerRightArrowIcon } from "./icons/rightArrowIcon";
import { registerLeftArrowIcon } from "./icons/leftArrowIcon";
import { registerConnectWalletButton } from "./components/connectWalletButton";
import { registerUserAvatar, registerUserAvatarGroup } from "./components/userAvatar";
import { registerNFTCard } from "./components/nftCard";
import { registerCollectionCard } from "./components/collectionCard";
import { registerSearchNftInput } from "./components/searchNftInput";
import { registerHeroAuthorAvatar } from "./components/heroAuthorAvatar";
import { registerCarouselLeftButton } from "./homePageSections/sectionOne/components/carouselLeftBtn";
import { registerCarouselRightButton } from "./homePageSections/sectionOne/components/carouselRightBtn";
import { registerNFTCarousel } from "./homePageSections/sectionOne/components/nftCarousel";
import { registerSectionTwo } from "./homePageSections/sectionTwo";
import { registerHomeIcon } from "./icons/homeIcon";
import { registerBrushIcon } from "./icons/brushIcon";
import { registerCollectionIcon } from "./icons/collectionIcon";

export function registerAll(loader?: Registerable) {
  // global provider
  registerGlobalContextProvider();
  // icons
  registerMagnifyingIcon(loader);
  registerRightArrowIcon(loader)
  registerLeftArrowIcon(loader)
  registerRocketIcon(loader);
  registerHomeIcon(loader)
  registerBrushIcon(loader)
  registerCollectionIcon(loader)
  // components
  registerConnectWalletButton(loader);
  registerUserAvatar(loader);
  registerUserAvatarGroup(loader);
  registerNFTCard(loader);
  registerCollectionCard(loader);
  registerUserInfoCard(loader);
  registerSearchNftInput(loader);
  registerHeroRightIllustration(loader);
  registerGetStartedButton(loader);
  registerHeroIllusImage(loader);
  registerHeroAuthor(loader)
  registerHeroAuthorAvatar(loader)
  registerCarouselLeftButton(loader)
  registerCarouselRightButton(loader)
  registerNFTCarousel(loader)
  // homePage sections
  registerHeader(loader);
  registerHero(loader);
  registerSectionOne(loader);
  registerSectionTwo(loader)
}

export * from "./components/userAvatar";
export * from "./components/nftCard";
export * from "./components/collectionCard";
export * from "./globalContextProvider";
export * from "./components/userInfoCard";
export * from "./components/searchNftInput";
export * from "./icons/magnifyingIcon";
export * from "./homePageSections/hero";
export * from "./homePageSections/header";
export * from "./homePageSections/sectionOne";
export * from "./components/heroRightIllustration";
export * from "./icons/rocketIcon";
export * from "./icons/rightArrowIcon";
export * from "./icons/leftArrowIcon";
export * from "./components/getStartedButton";
export * from "./components/heroIllusImage";
export * from "./components/heroAuthor";
export * from "./components/heroAuthorAvatar";
export * from "./homePageSections/sectionOne/components/carouselLeftBtn";
export * from "./homePageSections/sectionOne/components/carouselRightBtn"
export * from "./homePageSections/sectionOne/components/nftCarousel"
export * from  "./homePageSections/sectionTwo"
export * from "./icons/homeIcon"
export * from "./icons/brushIcon"
export * from "./icons/collectionIcon"
export { popoverProps } from "./util";
export { PopoverExtraProps } from "./util";
