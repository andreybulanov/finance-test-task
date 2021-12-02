import io from 'socket.io-client';

const socket = io('http://localhost:4000');
// const socket = io.connect('http://localhost:4000'); - так тоже не работает

export { socket };