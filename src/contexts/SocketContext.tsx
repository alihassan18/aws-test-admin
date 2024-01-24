import { createContext } from 'react';
import { Sockets } from '@/hoc/withSocket';

const defaultSockets: Sockets = {
    namespace1: null,
    namespace2: null
};

const SocketContext = createContext<Sockets>(defaultSockets);

export default SocketContext;
