import {combineReducers} from 'redux';
import {
    INCREMENT,
    DECREMENT,
    FETCH_SUCCESS,
    FETCH_ERROR,
} from './actionTypes';

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
};

const apiCall = (state = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return state.concat(action.data);
        case FETCH_ERROR:
        default:
            return state;
    }
};

export default combineReducers({
    counter,
    apiCall,
});
