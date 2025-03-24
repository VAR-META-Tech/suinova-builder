import React, { ReactNode } from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import { Layout } from "antd";

const { Header: AntdHeader } = Layout;

interface IHeader {
  className?: string;
  logoIcon?: string;
  logoText?: string;
  searchInput?: ReactNode;
  connectWalletBtn?: ReactNode;
  firstLinkText?: string;
  secondLinkText?: string;
  thirdLinkText?: string;
  firstHref?: string;
  secondHref?: string;
  thirdHref?: string;
}

// CSS class names
const CSSClasses = {
  headerContainer: "nft-header-Container",
  headerLogo: "nft-header-Logo",
  headerSearch: "nft-header-Search",
  headerNav: "nft-header-Nav",
  headerNavItem: "nft-header-NavItem",
  headerWalletBtn: "nft-header-WalletBtn",
};

// Minify CSS helper function
const minifyCss = (css: string) => {
  return css
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .trim();
};

const Header = ({
  className,
  logoIcon,
  searchInput,
  connectWalletBtn,
  firstLinkText,
  secondLinkText,
  thirdLinkText,
  firstHref,
  secondHref,
  thirdHref,
  logoText
}: IHeader) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
        .${CSSClasses.headerContainer} {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          height: 64px;
          background-color: #0f172a;
        }
        
        .${CSSClasses.headerLogo} {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .${CSSClasses.headerSearch} {
          flex: 1;
          max-width: 480px;
          margin: 0 24px;
        }
        
        .${CSSClasses.headerNav} {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .${CSSClasses.headerNavItem} {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .${CSSClasses.headerNavItem}:hover {
          color: #a78bfa;
        }
        
        .${CSSClasses.headerWalletBtn} {
          background-color: #3b82f6;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          height: 36px;
          transition: background-color 0.2s ease;
        }
        
        .${CSSClasses.headerWalletBtn}:hover {
          background-color: #2563eb;
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .${CSSClasses.headerSearch} {
            max-width: 320px;
            margin: 0 16px;
          }
          
          .${CSSClasses.headerNav} {
            gap: 16px;
          }
        }
        
        @media (max-width: 640px) {
          .${CSSClasses.headerContainer} {
            padding: 0 12px;
          }
          
          .${CSSClasses.headerSearch} {
            max-width: 200px;
            margin: 0 12px;
          }
          
          .${CSSClasses.headerNav} {
            gap: 12px;
          }
          
          .${CSSClasses.headerNavItem} {
            font-size: 13px;
          }
          
          .${CSSClasses.headerWalletBtn} {
            padding: 0 12px;
            font-size: 13px;
          }
        }
        
        @media (max-width: 480px) {
          .${CSSClasses.headerLogo} {
            font-size: 16px;
          }
          
          .${CSSClasses.headerSearch} {
            max-width: 150px;
            margin: 0 8px;
          }
          
          .${CSSClasses.headerNav} {
            gap: 8px;
          }
        }
      `),
    []
  );

  return (
    <AntdHeader className={`${CSSClasses.headerContainer} ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div className={CSSClasses.headerLogo}>
        {logoIcon} {logoText}
      </div>

      <div className={CSSClasses.headerSearch}>{searchInput}</div>

      <div className={CSSClasses.headerNav}>
        <a href={firstHref} className={CSSClasses.headerNavItem}>
          {firstLinkText}
        </a>
        <a href={secondHref} className={CSSClasses.headerNavItem}>
          {secondLinkText}
        </a>
        <a href={thirdHref} className={CSSClasses.headerNavItem}>
          {thirdLinkText}
        </a>

        {connectWalletBtn}
      </div>
    </AntdHeader>
  );
};

export default Header;

export function registerHeader(loader?: Registerable) {
  registerComponentHelper(loader, Header, {
    name: "hostless-header",
    displayName: "Header",
    props: {
      logoIcon: {
        type: "slot",
        defaultValue: [{
          type: "component",
          name: "hostless-home-icon"
        }]
      },
      logoText: {
        type: "slot",
        defaultValue: [{
          type: "text",
          value: "NFT Marketplace"
        }],
      },
      searchInput: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "hostless-search-nft-input",
        },
      },
      connectWalletBtn: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "hostless-connect-wallet-btn",
        },
      },
      firstLinkText: {
        type: "string",
        defaultValue: "Explore",
      },
      firstHref: {
        type: "string",
        defaultValue: "#",
      },
      secondLinkText: {
        type: "string",
        defaultValue: "Rankings",
      },
      secondHref: {
        type: "string",
        defaultValue: "#",
      },
      thirdLinkText: {
        type: "string",
        defaultValue: "Create",
      },
      thirdHref: {
        type: "string",
        defaultValue: "#",
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "Header",
  });
}
