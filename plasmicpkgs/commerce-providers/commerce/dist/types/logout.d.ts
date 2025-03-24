export declare type LogoutTypes = {
    body: {
        redirectTo?: string;
    };
};
export declare type LogoutHook<T extends LogoutTypes = LogoutTypes> = {
    data: null;
    body: T['body'];
};
export declare type LogoutSchema<T extends LogoutTypes = LogoutTypes> = {
    endpoint: {
        options: {};
        handlers: {
            logout: LogoutHook<T>;
        };
    };
};
