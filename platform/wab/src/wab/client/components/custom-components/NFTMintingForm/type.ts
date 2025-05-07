export interface ILaunchpadData {
  projectId: string;
  name: string;
  description: string;
  imageUrl: string;
  admin: string;
  items: ILaunchpadItem[];
  visions: ILaunchpadVision[];
  teams: ILaunchpadTeam[];
}

export interface ILaunchpadTeam {
  memberName: string;
  memberTitle: string;
}

export interface ILaunchpadVision {
  description: string;
  visionTime: string;
}

export interface ILaunchpadItem {
  name: string;
  description: string;
  imageUrl: string;
  attributes: any;
  creator: string;
}

export interface ILaunchpadResponse {
  id: string;
  projectId: string;
  collectionId: string | null;
  admin: string;
  name: string;
  description: string;
  imageUrl: string;
  royaltyFee: string;
  hasPresale: boolean;
  whitelistStartTime: Date | null;
  whitelistEndTime: Date | null;
  presaleStartTime: Date | null;
  presaleEndTime: Date | null;
  presaleNftPrice: string | number;
  presaleWhitelistedUsers: string | number;
  presaleTotalNft: string | number;
  presaleNftPerUser: string | number;
  publicSaleStartTime: Date | null;
  publicSaleEndTime: Date | null;
  publicNftPrice: string | number;
  nftPerUser: string | number;
  totalSupply: string | number;
  mintedSupply: string | number;
  status: string;
  createdAt: string;
  updatedAt: string;
  items: ILaunchpadItemRes[];
  visions: ILaunchpadVisionRes[];
  teams: ILaunchpadTeamRes[];
}

export interface ILaunchpadTeamRes {
  id: string;
  launchpadId: string;
  memberName: string;
  memberTitle: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILaunchpadVisionRes {
  id: string;
  launchpadId: string;
  description: string;
  visionTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILaunchpadItemRes {
  id: string;
  launchpadId: string;
  name: string;
  description: string;
  imageUrl: string;
  attributes: ILaunchpadAttributesRes[];
  creator: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILaunchpadAttributesRes {
  type: string;
  value: string;
}
