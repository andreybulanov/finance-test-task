import { createAsyncThunk } from '@reduxjs/toolkit';
import * as tickerAPI from './EntranceTickers';

export const fetchTickersAction = createAsyncThunk('tickers/fetchTickers', async () => {
    const tickers = await tickerAPI.fetchTickers();
    return tickers;
});

export const addTickersAction = createAsyncThunk('tickers/addTickers', async ticker => {
    const data = await tickerAPI.addTickers(ticker);
    return data;
});

export const deleteTickersAction = createAsyncThunk('tickers/deleteTickers', async id => {
    await tickerAPI.deleteTickers(id);
    return id;
});