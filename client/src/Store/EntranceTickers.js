import {io} from 'socket.io-client';

export const socket = io('http://localhost:4000', {
    transports: ['polling','websocket'],
});

socket.emit('start');