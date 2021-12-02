import { socket } from './EntranceTickers';
import * as operationTickers from './ActionTickers';

export const getTickers = () => async dispatch => {
    dispatch(operationTickers.getTickersRequest());
    try {
        socket.on('ticker', function (response) {
            dispatch(operationTickers.getTickersSuccess(response));
        });
    } catch (err) {
        dispatch(operationTickers.getTickersError(err.massege));
    }
}

export const deleteTickers = ticker => async dispatch => {
    dispatch(operationTickers.deleteTickersRequest());
    try {
        socket.emit('deleteTickers', ticker);
        socket.on('tickersToRecomend', function (response) {
            dispatch(operationTickers.deleteTickersSuccess(response));
        })
    } catch (error) {
        dispatch(operationTickers.deleteTickersError(error.massege));
    }
};

export const addTickers = ticker => async dispatch => {
    dispatch(operationTickers.addTickersRequest());
    try {
        socket.emit('addTickers', ticker);
        socket.on('tickersToRecomend', function (response) {
            dispatch(operationTickers.addTickersSuccess(response));
        })
    } catch (error) {
        dispatch(operationTickers.addTickersError(error.massege));
    }
};
