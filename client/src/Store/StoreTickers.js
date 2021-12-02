import { configureStore, combineReducers} from '@reduxjs/toolkit';
import {tickersReducer, filterReducer} from './ReducerTickers';

export const store = configureStore({
    reducer: combineReducers({
        tickers: tickersReducer,
        filter: filterReducer,
    }),
});