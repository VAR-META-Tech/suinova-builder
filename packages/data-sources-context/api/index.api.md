## API Report File for "@plasmicapp/data-sources-context"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { default as React_2 } from 'react';

// @public (undocumented)
export const PlasmicDataSourceContextProvider: React_2.Provider<PlasmicDataSourceContextValue | undefined>;

// @public (undocumented)
export interface PlasmicDataSourceContextValue {
    // (undocumented)
    authRedirectUri?: string;
    // (undocumented)
    isUserLoading?: boolean;
    // (undocumented)
    user?: {
        email: string;
        properties: Record<string, unknown> | null;
        roleId: string;
        roleName: string;
        roleIds: string[];
        roleNames: string[];
        walletAddress?: string;
    } | null;
    // (undocumented)
    userAuthToken?: string | null;
}

// @public (undocumented)
export function useCurrentUser(): {
    email: string;
    properties: Record<string, unknown> | null;
    roleId: string;
    roleName: string;
    roleIds: string[];
    roleNames: string[];
    walletAddress?: string | undefined;
} | {
    isLoggedIn: boolean;
};

// @public (undocumented)
export function usePlasmicDataSourceContext(): PlasmicDataSourceContextValue | undefined;

// (No @packageDocumentation comment for this package)

```
