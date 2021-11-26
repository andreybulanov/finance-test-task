import { configureStore } from '@reduxjs/toolkit';
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import tickersReducer from './ReducerTickers';
// import authReduser from './Auth/auth-slice';

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

const store = configureStore({
    reducer: {
        // auth: persistReducer(authPersistConfig, authReduser),
        ticker: tickersReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;



// import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
// import tickersReducer from './ReducerTickers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reduser = combineReducers({
//     ticker: tickersReducer,
// });

// const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));

// export default store;