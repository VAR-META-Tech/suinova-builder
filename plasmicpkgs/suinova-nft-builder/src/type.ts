interface IAttribute {
  type: string;
  value: string;
}

interface ITeamMember {
  name: string;
  role: string;
  avatar?: string;
}

interface IWhitelistInfo {
  price: string;
  startTime: Date;
  endTime: Date | null;
  totalNFTs: number;
  maxNFTsPerWallet: number;
}

interface IPresaleConfig {
  startTime: Date;
  endTime: Date | null;
  totalSlots: number;
  whitelistInfo: IWhitelistInfo;
}

interface IPublicSaleConfig {
  price: string;
  startTime: Date;
  endTime: Date | null;
  totalNFTs: number;
  maxNFTsPerWallet: number;
}

interface IMintingInfo {
  name: string;
  description: string;
  royalty: string;
  milestones: string[];
  itemName: string;
  itemDescription: string;
  attributes: IAttribute[];
  teamMembers: ITeamMember[];
  hasPresale: boolean;
  presale: IPresaleConfig;
  hasPublicSale: boolean;
  publicSale: IPublicSaleConfig;
}

export type {
  IMintingInfo,
  IAttribute,
  ITeamMember,
  IWhitelistInfo,
  IPresaleConfig,
  IPublicSaleConfig,
};
