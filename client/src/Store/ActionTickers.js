import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('tickers/changeFilter');

// .......РАБОТАЛО, НО НЕКОТОРЫЕ ФУНКЦИИ НЕ ПОНИМАЮ, РЕШЕНИЕ НАЙДЕНО В ИНЕТЕ..........

// import { socket } from './EntranceTickers';0

// export const GET_TICKERS_DATA = 'GET_TICKERS_DATA';

// export const getTickersData = tickersData => ({
//     type: GET_TICKERS_DATA,
//     payload: {
//         tickersData,
//     }
// });

// export const getTickers = () =>
// function (dispatch) {
//     socket.on('ticker', response => dispatch(getTickersData(response)));
// };

