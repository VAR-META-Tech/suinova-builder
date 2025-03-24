export declare type SignupBody = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
export declare type SignupTypes = {
    body: SignupBody;
};
export declare type SignupHook<T extends SignupTypes = SignupTypes> = {
    data: null;
    body: T['body'];
    actionInput: T['body'];
    fetcherInput: T['body'];
};
export declare type SignupSchema<T extends SignupTypes = SignupTypes> = {
    endpoint: {
        options: {};
        handlers: {
            signup: SignupHook<T>;
        };
    };
};
