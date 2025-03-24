export declare type LoginBody = {
    email: string;
    password: string;
};
export declare type LoginTypes = {
    body: LoginBody;
};
export declare type LoginHook<T extends LoginTypes = LoginTypes> = {
    data: null;
    actionInput: LoginBody;
    fetcherInput: LoginBody;
    body: T['body'];
};
export declare type LoginSchema<T extends LoginTypes = LoginTypes> = {
    endpoint: {
        options: {};
        handlers: {
            login: LoginHook<T>;
        };
    };
};
export declare type LoginOperation = {
    data: {
        result?: string;
    };
    variables: unknown;
};
