import Cookies from 'js-cookie';
export declare const getCustomerToken: () => string | undefined;
export declare const setCustomerToken: (token: string | null, options?: Cookies.CookieAttributes | undefined) => void;
