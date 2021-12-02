import { createAction } from '@reduxjs/toolkit';

export const tickerFilter = createAction('tickers/changeFilter');

export const getTickersRequest = createAction('tickers/getTickersRequest');
export const getTickersSuccess = createAction('tickers/getTickersSuccess');
export const getTickersError = createAction('tickers/getTickersError');

export const deleteTickersRequest = createAction('tickers/deleteTickersRequest');
export const deleteTickersSuccess = createAction('tickers/deleteTickersSuccess');
export const deleteTickersError = createAction('tickers/deleteTickersError');

export const addTickersRequest = createAction('tickers/addTickersRequest');
export const addTickersSuccess = createAction('tickers/addTickersSuccess');
export const addTickersError = createAction('tickers/addTickersError');




