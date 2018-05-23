import {
    INCREMENT,
    DECREMENT,
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

export default counter;
