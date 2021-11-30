import { socket } from './EntranceTickers';
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';

export const GET_TICKERS_DATA = 'GET_TICKERS_DATA';

export const getTickersData = tickersData => ({
    type: GET_TICKERS_DATA,
    payload: {
        tickersData,
    }
});

export const getTickers = () =>
function (dispatch) {
    socket.on('ticker', response => dispatch(getTickersData(response)));
};


// export const getTickersData = createAction('tickers/GET_DATA', ({ ticker }) => ({
//   payload: {
//     ticker,
//   },
// }));

// export const getTickers = createAction('tickers/GET', (dispatch) => {
//     socket.on('ticker', response => dispatch(getTickersData(response)))
// });