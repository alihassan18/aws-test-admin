import { IReaction } from './chat.interface';
import { Collection } from './collection.interface';
import { Token } from './token.interface';
import { IUser } from './user.interface';

export interface IHashtag {
    _id: string;
    name: string;
    followersCount: number;
}

export interface PollOption {
    text: string;
    votes?: number;
    voters?: [IUser];
}

export interface Poll {
    expiresAt: Date | string;
    question: string;
    options: [PollOption];
}
export interface Post {
    inReplyToPost: any;
    _id: string;
    text: string;
    linkPreview: string;
    media: [string];
    author: IUser;
    mentions: [IUser];
    hashtags: [IHashtag];
    videoViews: number;
    postViews: number;
    viewedBy: [string];
    reactionCount: number;
    commentsCount: number;
    isRepost: Boolean;
    originalPost: Post;
    retweetedBy: IUser;
    repostedBy: Array<IUser>;
    _collection: {
        name: string;
        contract: string;
        image: string;
        chain: string;
    };
    poll: Poll;
    token: Token;
    repostCount: number;
    quoteCount: number;
    scheduledAt: string;
    createdAt: Date;
    updatedAt: Date;
    voters: IUser;
    post: Post;
    expiresAt: Date;
    reactions:IReaction[]
}

export interface Feed {
    _id: string;
    type: string;
    owner: IUser;
    post: Post;
    _collection: Collection;
}

export interface Comment {
    _id: string;
    createdAt: string;
    commentCount: number;
    text: string;
    reactionCount: number;
    author: {
        firstName: string;
        lastName: string;
        userName: string;
        avatar: string;
    };
    replies: Comment[];
}

export interface PageInfo {
    hasNextPage: boolean;
    endCursor?: string | null;
}

export interface FeedConnection {
    records: Feed[];
    pageInfo: PageInfo;
}

export interface PostConnection {
    records: Post[];
    pageInfo: PageInfo;
    totalPostsCount: Number;
}
