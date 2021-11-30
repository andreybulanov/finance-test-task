import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import tickersReducer from './ReducerTickers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduser = combineReducers({
    tickers: tickersReducer,
});

const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));

export default store;