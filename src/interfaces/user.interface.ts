import { IHashtag } from './feeds.interface';

export interface IAccount {
    jwt: string;
    user: IUser;
    isAuth: boolean;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    coverImage: string;
    isEmailVerified: boolean;
    isActive: boolean;
    isBanned: boolean;
    hideWallet: boolean;
    wallet: string;
    roles: string[];
    isVerified: boolean;
    isSCC: boolean
    verifyStatus?: string;
    isBlocked: boolean;
    facebook: string;
    instagram: string;
    reddit: string;
    twitter: string;
    discord: string;
    youtube: string;
    tiktok: string;
    web: string;
    bio: string;
    followers: string[];
    followersCount: number;
    following: string[] & IUser[];
    followingCount: number;
    followingHashtags: IHashtag[];
    blockedUsers?: string[];
    blockedBy?: string[];
    wallets: string[];
    source: string;
    points?: number;
    deletedAt?: Date;
    isDeleted?: boolean;
    country: object;
    key: string;
    referral: string;
    boughtCount: number;
    soldCount: number;
    mintedNFTs: number;
    boughtNFTs: number;
    soldNFTs: number;
    listedNFTs: number;
    settings: {
        alerts: {
            messenger: boolean;
            bids: boolean;
            sell: boolean;
            buy: boolean;
            like: boolean;
            mint: boolean;
            comment: boolean;
            follow: boolean;
        };
        email: {
            messenger: boolean;
            bids: boolean;
            sell: boolean;
            buy: boolean;
            like: boolean;
            mint: boolean;
            comment: boolean;
            follow: boolean;
        };
        twoFa?: boolean;
        messagePrivacy: string;
        isTwitterEnabled: boolean;
        isLinkedInEnabled: boolean;
    };
    twitterId: string;
    isLinkedInConnected: boolean;
    backgroundTheme: string;
    affiliatedUser: boolean
}

export interface ISettings {
    alerts: {
        messenger: boolean;
        bids: boolean;
        sell: boolean;
        buy: boolean;
        like: boolean;
        mint: boolean;
        comment: boolean;
        follow: boolean;
    };
    email: {
        messenger: boolean;
        bids: boolean;
        sell: boolean;
        buy: boolean;
        like: boolean;
        mint: boolean;
        comment: boolean;
        follow: boolean;
    };
    twoFa: boolean;
    messagePrivacy: string;
}
