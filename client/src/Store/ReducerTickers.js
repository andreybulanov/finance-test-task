import { createReducer } from '@reduxjs/toolkit';
import { tickerFilter, getTickersSuccess, deleteTickersSuccess, addTickersSuccess } from './ActionTickers';

export const tickersReducer = createReducer([], {
    [getTickersSuccess]: (state, { payload }) => [...state, payload],
});

export const filterReducer = createReducer('', {
    [tickerFilter]: (_, { payload }) => payload,
});

export const tickersToRecomendRedusers = createReducer([], {
    [addTickersSuccess]: (_, {payload}) => payload,
    [deleteTickersSuccess]: (_, { payload }) => payload,
});

