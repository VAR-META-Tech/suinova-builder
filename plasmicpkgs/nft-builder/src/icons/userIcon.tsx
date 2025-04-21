import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";

interface IUserIcon {
  className?: string;
}

const UserIcon = ({ className }: IUserIcon) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.6535 20.4054C20.2063 20.2902 20.5355 19.7117 20.2608 19.2183C19.6552 18.1307 18.7012 17.1749 17.4808 16.4465C15.909 15.5085 13.9831 15 12.0019 15C10.0207 15 8.09487 15.5085 6.52308 16.4465C5.30264 17.1749 4.34862 18.1307 3.74303 19.2183C3.46834 19.7117 3.79757 20.2902 4.35039 20.4054C9.3972 21.4572 14.6067 21.4572 19.6535 20.4054Z"
        fill="#27273A"
      />
      <path
        d="M19.6535 20.4054C20.2063 20.2902 20.5355 19.7117 20.2608 19.2183C19.6552 18.1307 18.7012 17.1749 17.4808 16.4465C15.909 15.5085 13.9831 15 12.0019 15C10.0207 15 8.09487 15.5085 6.52308 16.4465C5.30264 17.1749 4.34862 18.1307 3.74303 19.2183C3.46834 19.7117 3.79757 20.2902 4.35039 20.4054C9.3972 21.4572 14.6067 21.4572 19.6535 20.4054Z"
        fill="black"
        fillOpacity="0.2"
      />
      <circle cx="12" cy="8" r="5" fill="#27273A" />
      <circle cx="12" cy="8" r="5" fill="black" fillOpacity="0.2" />
    </svg>
  );
};

export default UserIcon;

export function registerUserIcon(loader?: Registerable) {
  registerComponentHelper(loader, UserIcon, {
    name: "nft-builder-user-icon",
    displayName: "User Icon",
    props: {
      iconColor: {
        type: "color",
        defaultValue: "#27273A",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "UserIcon",
  });
}
