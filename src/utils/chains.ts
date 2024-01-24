import { arbitrum, /*  polygon, */ /*  goerli, */ Chain } from "wagmi/chains";

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

type ReservoirChain = Chain & {
    lightIconUrl: string;
    darkIconUrl: string;
    reservoirBaseUrl: string;
    reservoirSocketUrl: string;
    proxyApi: string;
    routePrefix: string;
    apiKey?: string;
    coingeckoId?: string;
    collectionSetId?: string;
    community?: string;
};

export const DefaultChain: ReservoirChain = {
    ...arbitrum,
    name: "Arbitrum",
    lightIconUrl: "/icons/arbitrum-icon-dark.svg",
    darkIconUrl: "/icons/arbitrum-icon-light.svg",
    reservoirBaseUrl: "https://api-arbitrum.reservoir.tools",
    proxyApi: "/api/reservoir/arbitrum",
    routePrefix: "arbitrum",
    apiKey: process.env.NEXT_PUBLIC_RESERVOIR_API_KEY,
    coingeckoId: "arbitrum-iou",
    reservoirSocketUrl: "wss://ws-arbitrum.reservoir.tools",
    collectionSetId: process.env.NEXT_PUBLIC_ETH_COLLECTION_SET_ID,
    community: process.env.NEXT_PUBLIC_ETH_COMMUNITY,
};

export default [DefaultChain] as ReservoirChain[];
