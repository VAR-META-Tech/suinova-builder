export const isSuiEmail = (email: string) => email.includes("@sui.wallet");

export const shortenSuiEmail = (email: string) => {
  if (!isSuiEmail(email)) {
    return email;
  }

  const [wallet, domain] = email.split("@");

  if (!wallet || wallet.length <= 10) {
    return wallet;
  }

  const first6 = wallet.substring(0, 6);
  const last4 = wallet.substring(wallet.length - 4);

  return `${first6}...${last4}@${domain}`;
};
