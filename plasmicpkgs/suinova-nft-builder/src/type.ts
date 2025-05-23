export interface NFTAttribute {
  value: string;
  trait_type: string;
}

export interface NFTItem {
  id: string;
  launchpadId: string;
  name: string;
  description: string;
  imageUrl: string;
  attributes: NFTAttribute[];
  creator: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vision {
  id: string;
  launchpadId: string;
  description: string;
  visionTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  launchpadId: string;
  memberName: string;
  memberTitle: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMintingInfo {
  id: string;
  projectId: string;
  collectionId: string | null;
  admin: string;
  name: string;
  description: string;
  imageUrl: string;
  royaltyFee: string;
  hasPresale: boolean;
  whitelistStartTime: string | null;
  whitelistEndTime: string | null;
  presaleStartTime: string | null;
  presaleEndTime: string | null;
  presaleNftPrice: string | null;
  presaleWhitelistedUsers: string[] | null;
  presaleTotalNft: number | null;
  presaleNftPerUser: number | null;
  publicSaleStartTime: string | null;
  publicSaleEndTime: string | null;
  publicNftPrice: string | null;
  nftPerUser: number | null;
  totalSupply: number | null;
  mintedSupply: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ENDED';
  createdAt: string;
  updatedAt: string;
  items: NFTItem[];
  visions: Vision[];
  teams: TeamMember[];
}