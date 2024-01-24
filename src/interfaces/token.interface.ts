import { Post } from './feeds.interface';

type Metadata = {
    imageOriginal: string;
};

type TokenCollection = {
    id: string;
    name: string;
    image: string;
    slug: string;
};

export interface Token {
    contract: string;
    chain: string;
    tokenId: string;
    name: string;
    description: string;
    image: string;
    imageSmall: string;
    imageLarge: string;
    metadata: Metadata;
    media: string;
    kind: string;
    isFlagged: Boolean;
    lastFlagUpdate: string;
    lastFlagChange: string;
    supply: string;
    remainingSupply: string;
    rarity: number;
    rarityRank: number;
    collection: TokenCollection;
    owner: string;
    contractAddress: string;
    contractName: string;
    contractTokenId: string;
    ercType: string;
    amount: string;
    minter: string;
    ownTimestamp: number;
    mintTimestamp: number;
    mintTransactionHash: string;
    mintPrice: number;
    tokenUri: string;
    metadataJson: string;
    contentType: string;
    contentUri: string;
    imageUri: string;
    externalLink: string;
    latestTradePrice: number;
    latestTradeSymbol: string;
    latestTradeToken: string;
    latestTradeTimestamp: number;
    nftscanId: string;
    nftscanUri: string;
    smallNftscanUri: string;
    attributes: [string];
    rarityScore: number;
    post: Post;
    market?: any;
}
