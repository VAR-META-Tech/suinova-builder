import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface ICollectionIcon {
  className?: string;
}

export default function CollectionIcon({ className }: ICollectionIcon) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.5855 67.5778L24.0387 14.0231C24.1047 13.6189 24.2506 13.2319 24.4678 12.8846C24.6849 12.5374 24.969 12.2368 25.3035 12.0005C25.638 11.7642 26.0162 11.5968 26.416 11.5081C26.8159 11.4195 27.2294 11.4113 27.6324 11.484L49.1949 15.2731C50.0096 15.4254 50.732 15.8913 51.2068 16.5707C51.6816 17.25 51.8709 18.0885 51.734 18.9059L42.2418 72.7731C41.5917 76.4002 39.5477 79.6289 36.5472 81.7679C33.5466 83.907 29.828 84.7866 26.1871 84.2184C18.4137 82.9684 13.2184 75.3512 14.5855 67.5778Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.46 48.75L74.9365 38.3984C75.3237 38.2555 75.7353 38.1906 76.1477 38.2076C76.56 38.2246 76.9649 38.3231 77.339 38.4974C77.7131 38.6718 78.0489 38.9185 78.3271 39.2233C78.6053 39.5281 78.8204 39.885 78.96 40.2734L86.46 60.8203C86.7366 61.5974 86.6947 62.4524 86.3435 63.1988C85.9922 63.9452 85.3601 64.5225 84.585 64.8047L33.1787 83.5156"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86.1875 63.4766V81.25C86.1875 82.0788 85.8583 82.8737 85.2722 83.4597C84.6862 84.0458 83.8913 84.375 83.0625 84.375H28.375"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.375 75C30.9638 75 33.0625 72.9013 33.0625 70.3125C33.0625 67.7237 30.9638 65.625 28.375 65.625C25.7862 65.625 23.6875 67.7237 23.6875 70.3125C23.6875 72.9013 25.7862 75 28.375 75Z"
        fill="white"
      />
    </svg>
  );
}

export function registerCollectionIcon(loader?: Registerable) {
  registerComponentHelper(loader, CollectionIcon, {
    name: "hostless-collection-icon",
    displayName: "Collection Icon",
    props: {},
    importPath: "@plasmicpkgs/nft-builder",
    importName: "CollectionIcon",
  });
}
