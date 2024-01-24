import { IUser } from './user.interface';

export interface IEmotion {
    user: IUser;
    emoji: string;
    messageId?: string;
    value?: number;
}
export interface IReaction {
    emoji: string;
    count: number;
}

export interface ICloudObject {
    bytes: number;
    format: string;
    resource_type: string;
    original_filename: string;
    secure_url: string;
}
export interface IMessage {
    _id?: string;
    content?: string;
    attachment?: string[];
    sent?: boolean;
    delivered?: boolean;
    emotions?: IEmotion[];
    read?: boolean;
    members?: string[] & IUser[];
    sender?: IUser;
    pinned?: boolean;
    receiverUser?: IUser | string;
    type?: string;
    createdAt?: string;
    inReplyToMessage?: IMessage | string | null;
    receiverGroup?: string;
    reactions?: IReaction[];
}
export interface IChat {
    _id: string;
    user1: IUser;
    user2: IUser;
    messagesCount: number;
    createdAt?: string;
    updatedAt?: string;
}
