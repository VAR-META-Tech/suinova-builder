import { CheckoutError, CheckoutErrorCode, AppError, AccountError, AccountErrorCode } from '../schema';
export declare type UserErrors = Array<CheckoutError | AccountError | AppError>;
export declare type UserErrorCode = CheckoutErrorCode | AccountErrorCode | null | undefined;
export declare const throwUserErrors: (errors?: UserErrors | undefined) => void;
export default throwUserErrors;
