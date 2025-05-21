import { IMintingInfo } from "../type";

export const transformApiResponseToMintingInfo = (data: any): IMintingInfo => {
  const item = data.items?.[0] || {};
  
  return {
    name: data.name || "",
    description: data.description || "",
    royalty: data.royaltyFee || "0",
    milestones: data.visions?.map((v: any) => v.description) || [],
    itemName: item.name || "",
    itemDescription: item.description || "",
    attributes: item.attributes?.map((attr: any) => ({
      type: attr.trait_type || "",
      value: attr.value || ""
    })) || [{ type: "", value: "" }],
    teamMembers: data.teams?.map((member: any) => ({
      name: member.name || "",
      role: member.role || "",
      avatar: member.avatar || undefined
    })) || [],
    hasPresale: data.hasPresale || false,
    presale: {
      startTime: data.presaleStartTime ? new Date(data.presaleStartTime) : new Date(),
      endTime: data.presaleEndTime ? new Date(data.presaleEndTime) : null,
      totalSlots: data.presaleTotalNft || 0,
      whitelistInfo: {
        price: data.presaleNftPrice || "0",
        startTime: data.whitelistStartTime ? new Date(data.whitelistStartTime) : new Date(),
        endTime: data.whitelistEndTime ? new Date(data.whitelistEndTime) : null,
        totalNFTs: data.presaleTotalNft || 0,
        maxNFTsPerWallet: data.presaleNftPerUser || 0
      }
    },
    hasPublicSale: Boolean(data.publicNftPrice),
    publicSale: {
      price: data.publicNftPrice || "0",
      startTime: data.publicSaleStartTime ? new Date(data.publicSaleStartTime) : new Date(),
      endTime: data.publicSaleEndTime ? new Date(data.publicSaleEndTime) : null,
      totalNFTs: data.totalSupply || 0,
      maxNFTsPerWallet: data.nftPerUser || 0
    }
  };
}; 