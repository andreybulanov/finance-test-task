import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './ActionTickers';
import { fetchTickersAction, addTickersAction, deleteTickersAction } from './OperationTickers';

const entities = createReducer([], {
    [fetchTickersAction.fulfilled]: (_state, action) => action.payload,
    [addTickersAction.fulfilled]: (state, { payload }) => {
        if (state.find(ticker => ticker.toLowerCase() === payload.toLowerCase())) {
            alert(`${payload} is alreeady in quotes`);
            return state;
        } return [payload, ...state];
    },
    [deleteTickersAction.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ entities, filter });



// .......РАБОТАЛО...........
// import { GET_TICKERS_DATA } from './ActionTickers';


// const initialState = {
//   tickersData: [],
// };

// const tickersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_TICKERS_DATA:
//       return {
//         ...state,
//         tickersData: action.payload.tickersData,
//       };
//     default:
//       return state;
//   }
// };

// export default tickersReducer;