import React, { ReactNode, useState } from "react";
import { AutoCompleteProps, Input } from "antd";
import { Registerable, registerComponentHelper } from "../reg-util";
import clsx from "clsx";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface ISearchNftInput extends AutoCompleteProps {
  size?: SizeType;
  width?: number;
  popupMatchSelectWidth?: number;
  searchIcon?: ReactNode;
}

const CSSClasses = {
  searchContainer: "nft-search-container",
  searchInputWrapper: "nft-search-input-wrapper",
  searchIcon: "nft-search-icon",
  resultsDropdown: "nft-results-dropdown",
  resultItem: "nft-result-item",
  itemContainer: "nft-item-container",
  noResults: "nft-no-results",
  resultsDropdownContainer: "nft-result-dropdown-container",
  resultLabel: "nft-result-label",
  searchInput: "nft-search-input",
};

function minifyCss(input: string) {
  return input
    .replace(/\s{2,}|\n/g, "") //  Remove spaces
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/g, ""); // Remove comments.
}

export default function SerchNftInput({
  className,
  searchIcon,
}: ISearchNftInput) {
  const [searchTerm, setSearchTerm] = useState("");

  const collections = [
    "Space collection 1",
    "Space collection 2",
    "Space collection 3",
    "Space collection 4",
  ];

  const nfts = ["Spaceman 1", "Spaceman 2", "Spaceman 3", "Spaceman 4"];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter collections based on search term
  const filteredCollections = collections.filter((collection) =>
    collection.toLowerCase().includes(searchTerm)
  );

  // Filter NFTs based on search term
  const filteredNfts = nfts.filter((nft) =>
    nft.toLowerCase().includes(searchTerm)
  );

  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
    .${CSSClasses.searchContainer} {
      width: 250px;
      max-width: 28rem;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      background-color: transparent;
    }

    .${CSSClasses.searchInputWrapper} {
      position: relative;
      display: flex;
      border-radius: 12px;
      border: 1px solid white;
    }

    .${CSSClasses.searchInput} {
      color: white;
      background-color: transparent;
      border: 0;
    }

    .${CSSClasses.searchIcon} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 8px;
      padding-bottom: 3px;
    }

    .${CSSClasses.resultsDropdownContainer} {
       position: absolute;
       border: 1px solid #021325;
       background-color: #233140;
       border-radius: 10px;
       top: 120%;
       width: 100%;
    }

    .${CSSClasses.resultsDropdown} {
      max-height: 15rem;
      overflow: auto;
    }

    .${CSSClasses.itemContainer} {
      padding: 0;
      margin: 0px;
    }

    .${CSSClasses.resultLabel} {
        color: white;
        font-weight: 600;
        line-height: 140%;
        font-size: 20px;
        padding: 10px 16px;
    }

    .${CSSClasses.resultItem} {
      padding: 0.5rem 1rem;
      cursor: pointer;
      list-style: none;
      color: white;
      line-height: 20px;
    }

    .${CSSClasses.resultItem}:hover {
      background-color: #606d7b;
    }

    .${CSSClasses.noResults} {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      color: #6B7280;
      line-height: 20px;
    }

    @media (prefers-color-scheme: dark) {
      .${CSSClasses.resultsDropdown} {
        background-color: #1F2937;
       
      }

      .${CSSClasses.resultItem}:hover {
        background-color: #606d7b;
      }
    }
  `),
    []
  );

  return (
    <div className={clsx(className, CSSClasses.searchContainer)}>
      <div className={CSSClasses.searchInputWrapper}>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
          className={CSSClasses.searchInput}
        />
        <div className={CSSClasses.searchIcon}>{searchIcon}</div>
      </div>

      {searchTerm.length > 0 && (
        <div className={CSSClasses.resultsDropdownContainer}>
          <div className={CSSClasses.resultsDropdown}>
            {filteredCollections.length > 0 && (
              <ul className={CSSClasses.itemContainer}>
                <div className={CSSClasses.resultLabel}>Collections</div>
                {filteredCollections.map((result, index) => (
                  <li
                    key={index}
                    className={CSSClasses.resultItem}
                    onClick={() => {
                      setSearchTerm(result);
                    }}
                  >
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={CSSClasses.resultsDropdown}>
            {filteredNfts.length > 0 && (
              <ul className={CSSClasses.itemContainer}>
                <div className={CSSClasses.resultLabel}>NFTs</div>
                {filteredNfts.map((result, index) => (
                  <li
                    key={index}
                    className={CSSClasses.resultItem}
                    onClick={() => {
                      setSearchTerm(result);
                    }}
                  >
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {(filteredCollections.length === 0 && filteredNfts.length === 0) && <div className={CSSClasses.noResults}>No results found</div>}
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
    </div>
  );
}

export function registerSearchNftInput(loader?: Registerable) {
  registerComponentHelper(loader, SerchNftInput, {
    name: "hostless-search-nft-input",
    displayName: "Search NFT Input",
    props: {
      size: {
        type: "choice",
        options: ["small", "middle", "large"],
        defaultValue: "middle",
      },
      width: {
        type: "string",
        defaultValue: "250px",
      },
      popupMatchSelectWidth: {
        type: "string",
        defaultValue: "250px",
      },
      searchIcon: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "hostless-magnifying-icon",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "SerchNftInput",
  });
}
