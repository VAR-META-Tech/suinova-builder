export function formatWalletAddress(address: string): string {
  if (!address || address.length < 10) {
    return address; // Return original if too short
  }

  const prefix = address.slice(0, 6);
  const suffix = address.slice(-4);
  return `${prefix}...${suffix}`;
}
