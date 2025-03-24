export * as Card from './card';
export * as Address from './address';
export declare type Customer = any;
export declare type CustomerTypes = {
    customer: Customer;
};
export declare type CustomerHook<T extends CustomerTypes = CustomerTypes> = {
    data: T['customer'] | null;
    fetchData: {
        customer: T['customer'];
    } | null;
};
export declare type CustomerSchema<T extends CustomerTypes = CustomerTypes> = {
    endpoint: {
        options: {};
        handlers: {
            getLoggedInCustomer: {
                data: {
                    customer: T['customer'];
                } | null;
            };
        };
    };
};
