import { createSelector } from '@reduxjs/toolkit';

export const getTickers = state => state.quotes.entities;
export const getFilter = state => state.quotes.filter;

export const getFilteredTickers = createSelector([getTickers, getFilter], (tickers, filter) => {
    const normolizedFilter = filter.toLowerCase();
    return tickers.filter(ticker => ticker.toLowerCase().includes(normolizedFilter));
});


// ......РАБОТАЛО......
// export const tickersSelector = state => state.tickers.tickersData;