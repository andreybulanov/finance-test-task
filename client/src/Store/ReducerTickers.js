import { GET_TICKERS_DATA } from './ActionTickers';

const initialState = {
  tickersData: [],
};

const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKERS_DATA:
      return {
        ...state,
        tickersData: action.payload.tickersData,
      };
    default:
      return state;
  }
};

export default tickersReducer;