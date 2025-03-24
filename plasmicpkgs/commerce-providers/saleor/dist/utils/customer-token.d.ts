import Cookies from 'js-cookie';
export declare const getToken: () => string | undefined;
export declare const setToken: (token?: string | undefined, options?: Cookies.CookieAttributes | undefined) => void;
export declare const getCSRFToken: () => string | undefined;
export declare const setCSRFToken: (token?: string | undefined, options?: Cookies.CookieAttributes | undefined) => void;
export declare const getCheckoutToken: () => string | undefined;
export declare const setCheckoutToken: (token?: string | undefined, options?: Cookies.CookieAttributes | undefined) => void;
