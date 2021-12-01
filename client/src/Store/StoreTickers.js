import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './ReducerTickers';

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;



// ..............РАБОТАЛО.............

// import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
// import tickersReducer from './ReducerTickers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reduser = combineReducers({
//     tickers: tickersReducer,
// });

// const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));

// export default store;