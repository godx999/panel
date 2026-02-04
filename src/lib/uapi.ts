import type { UapiClient as UapiClientType } from 'uapi-sdk-typescript';

// UapiClient 实际上有动态添加的 network 属性，但类型定义不完整
interface ExtendedUapiClient extends UapiClientType {
    network: {
        getNetworkUrlstatus: (params: { url: string }) => Promise<{ status?: number | string }>;
    };
}

let clientInstance: ExtendedUapiClient | null = null;

export const getClient = async (): Promise<ExtendedUapiClient> => {
    if (clientInstance) return clientInstance;

    const { UapiClient } = await import('uapi-sdk-typescript');
    clientInstance = new UapiClient('https://uapis.cn') as ExtendedUapiClient;
    return clientInstance;
};
