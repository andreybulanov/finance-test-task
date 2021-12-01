import { io } from 'socket.io-client';
import axios from 'axios';

export const socket = io('http://localhost:4000', {
  transports: ['websocket', 'polling'],
});

socket.emit('start');

//  /\...Выше исходный код.../\  \\

axios.defaults.baseURL = 'http://localhost:4000';

export async function fetchTickers() {
    const { data } = await axios.get(`tickers`);
    return data;
}

export async function addTickers(ticker) {
    const { data } = await axios.post(`tickers`, ticker);
    return data;
}

export async function deleteTickers(id) {
    await axios.delete(`tickers/${id}`);
    return id;
}