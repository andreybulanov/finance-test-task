import { createSelector } from '@reduxjs/toolkit';

export const getTickers = ({ tickers }) =>
    tickers.length > 0 ? tickers[tickers.length - 1] : [];
  
export const getFilter = state => state.filter;

export const tickersToRecomendSelector = state => state.tickersToRecomend;

export const getFilteredTickers = createSelector([getTickers, getFilter], (tickers, filter) => {
    const normolizedFilter = filter.toLowerCase();
    return tickers.filter(ticker => ticker.toLowerCase().includes(normolizedFilter));
});
