import { CommercetoolsCredentials } from './provider';
declare const initCommercetoolsSDKClient: (creds: CommercetoolsCredentials) => import("@commercetools/sdk-client-v2").Client;
export default initCommercetoolsSDKClient;
