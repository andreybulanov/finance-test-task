import { socket } from './EntranceTickers';

export const GET_TICKERS_DATA = 'GET_TICKERS_DATA';
export const GET_HISTORY_DATA = 'GET_HISTORY_DATA';

export const getTickersData = tickersData => ({
  type: GET_TICKERS_DATA,
  payload: {
    tickersData,
  },
});

export const getTickers = () =>
  function (dispatch) {
    socket.on('ticker', response => dispatch(getTickersData(response)));
  };