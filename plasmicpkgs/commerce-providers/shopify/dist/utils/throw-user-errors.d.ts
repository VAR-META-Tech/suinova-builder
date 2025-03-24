import { CheckoutErrorCode, CheckoutUserError, CustomerErrorCode, CustomerUserError } from "./graphql/gen/graphql";
export declare type UserErrors = Array<CheckoutUserError | CustomerUserError>;
export declare type UserErrorCode = CustomerErrorCode | CheckoutErrorCode | null | undefined;
export declare const throwUserErrors: (errors?: UserErrors | undefined) => void;
