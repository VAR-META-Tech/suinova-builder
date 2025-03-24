declare const getCheckoutId: (id?: string | undefined) => {
    checkoutId: string;
    checkoutToken: string;
};
export default getCheckoutId;
