import { Post } from './feeds.interface';
import { IUser } from './user.interface';

export interface Collection {
    post: Post | undefined;
    _id: string;
    name: string;
    token_count: number;
    // role: number;
    auction_duration: number;
    currency: string;
    chain: string;
    chainId: number;
    supply: number;
    listing_price: number;
    contract: string;
    address: string;
    contract_name: string;
    image: string;
    banner: string;
    items_total: number;
    owners_total: number;
    sales_1d: number;
    sales_7d: number;
    sales_30d: number;
    sales_total: number;
    volume_1d: number;
    volume_7d: number;
    volume_30d: number;
    volume_total: number;
    floor_price: number;
    average_price_1d: number;
    average_price_7d: number;
    average_price_30d: number;
    average_price_total: number;
    average_price_change_1d: number;
    average_price_change_7d: number;
    average_price_change_30d: number;
    volume_change_1d: number;
    volume_change_7d: number;
    market_cap: number;
    symbol: string;
    highest_price: number;
    description: string;
    website: string;
    email: string;
    twitter: string;
    discord: string;
    telegram: string;
    github: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    tiktok: string;
    youtube: string;
    web: string;
    twitch: string;
    medium: string;
    featured_url: string;
    large_image_url: string;
    attributes: any[];
    erc_type: string;
    deploy_block_number: number;
    owner: string;
    deployer_address: string;
    verified: boolean;
    opensea_verified: boolean;
    royalty: number;
    amounts_total: number;
    collections_with_same_name: any[];
    price_symbol: string;
    followers: IUser[];
    followersCount: number;
    favourites: string[];
    likes: string[];
    views: string[];
    is_auto_mint: boolean;
    is_auto_auction: boolean;
    is_content_creator: boolean;
    autoMint: string;
    listing_type: string;
    collectionViews: number;
}

export interface PageInfo {
    nextPage: number;
    hasNextPage: boolean;
    endCursor?: string | null;
}

export interface CollectionsResponse {
    records: Collection[];
    pageInfo: PageInfo;
}

interface Metadata {
    imageUrl: string;
    bannerImageUrl: string;
    discordUrl: string;
    externalUrl: string;
    twitterUsername: string;
    description: string;
}

interface TopBid {
    id: string;
    value: number;
    maker: string;
    validFrom: number;
    validUntil: number;
    source: {
        id: string;
        domain: string;
        name: string;
        icon: string;
    };
}

interface Royalties {
    bps: number;
    recipient: string;
}

interface Rank {
    '1day': number;
    '7day': number;
    '30day': number;
    allTime: number;
}

interface Volume {
    '1day': number;
    '7day': number;
    '30day': number;
    allTime: number;
}

interface VolumeChange {
    '1day': number;
    '7day': number;
    '30day': number;
}

interface FloorSale {
    '1day': number;
    '7day': number;
    '30day': number;
}

interface FloorSaleChange {
    '1day': number;
    '7day': number;
    '30day': number;
}

interface FloorAsk {
    id: string;
    price: number;
    maker: string;
    validFrom: number;
    validUntil: number;
    source: {
        id: string;
        domain: string;
        name: string;
        icon: string;
    };
}

export interface CollectionEventData {
    id: string;
    slug: string;
    name: string;
    metadata: Metadata;
    tokenCount: string;
    primaryContract: string;
    tokenSetId: string;
    contractKind: string;
    openseaVerificationStatus: string;
    royalties: Royalties;
    topBid: TopBid;
    rank: Rank;
    volume: Volume;
    volumeChange: VolumeChange;
    floorSale: FloorSale;
    floorSaleChange: FloorSaleChange;
    ownerCount: number;
    floorAsk: FloorAsk;
    floorAskNormalized: FloorAsk;
    floorAskNonFlagged: FloorAsk;
    createdAt: string;
    updatedAt: string;
}
