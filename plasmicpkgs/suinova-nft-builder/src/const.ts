export const DEFAULT_API_URL = "https://market.suinova.var-meta.com/api/v1";
export const ENV = {
    MARKETPLACE_MODULE: process.env.MARKETPLACE_MODULE || 'marketplace',
    IMPORT_COLLECTION: process.env.IMPORT_COLLECTION || 'import_collection',
    CONTRACT_PACKAGE_ID: process.env.CONTRACT_PACKAGE_ID || '0x2d99da054514ff31c7e7da82751d11bb16b53c66290c435a409e17c8992e35ed',
    MARKETPLACE_CAP_ID: process.env.MARKETPLACE_CAP_ID || '0xc4a3970aafc40dbe7e60577a0748632d898ba84ec74526bd4ed36e9ed41320b9',
    CHAIN: process.env.CHAIN || 'sui:testnet',
}

export const CONTRACT_METHOD = {
    LIST: 'list',
    DELIST: 'delist',
    BUY: 'buy',
}