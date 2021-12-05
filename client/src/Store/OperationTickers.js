import { socket } from './EntranceTickers';
import * as actionTickers from './ActionTickers';

export const getTickers = () => async dispatch => {
    dispatch(actionTickers.getTickersRequest());
    try {
        socket.on('ticker', function (response) {
            dispatch(actionTickers.getTickersSuccess(response));
        });
    } catch (err) {
        dispatch(actionTickers.getTickersError(err.massege));
    }
}

export const deleteTickers = ticker => async dispatch => {
    dispatch(actionTickers.deleteTickersRequest());
    try {
        socket.emit('deleteTickers', ticker);
        socket.on('tickersToRecommend', function (response) {
            dispatch(actionTickers.deleteTickersSuccess(response));
        })
    } catch (error) {
        dispatch(actionTickers.deleteTickersError(error.massege));
    }
};

export const addTickers = ticker => async dispatch => {
    dispatch(actionTickers.addTickersRequest());
    try {
        socket.emit('addTickers', ticker);
        socket.on('tickersToRecommend', function (response) {
            dispatch(actionTickers.addTickersSuccess(response));
        })
    } catch (error) {
        dispatch(actionTickers.addTickersError(error.massege));
    }
};
