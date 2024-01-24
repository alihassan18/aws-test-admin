import jwt, { JwtPayload } from 'jsonwebtoken';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';

export const slicedAddress = (address: string, nftHover?: boolean) => {
    if (!address) {
        return '';
    }
    if (nftHover) {
        return address?.slice(address?.length - 10, address?.length);
    } else {
        return address?.slice(address?.length - 4, address?.length);
    }
    // return address?.slice(0, 8) + '...' + address?.slice(address?.length - 4, address?.length);
};

export const getSocketWithToken = (token: string | null, namespace: string) => {
    return io(`${process.env.NEXT_PUBLIC_SOCKET_URL}${namespace}`, {
        transports: ['websocket'],
        ...(token && { query: { token } })
    });
};


export function formatCount(count: number) {
    if (count >= 1000000000) {
        return (count / 1000000000).toFixed(1) + 'B';
    } else if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    } else {
        return count.toString();
    }
}
