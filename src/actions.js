import {
    INCREMENT,
    DECREMENT,
} from './actionTypes';

export const increment = (number) => ({type: INCREMENT, data: number});
export const decrement = (number) => ({type: DECREMENT, data: number});
