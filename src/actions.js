// @flow
import {
    INCREMENT,
    DECREMENT,
    FETCH_REQUEST,
} from './actionTypes';

type CounterType = {
    type: string,
    data: number,
}

type FetchType = {
    type: string,
};

export const increment = (number: number): CounterType => ({type: INCREMENT, data: number});
export const decrement = (number: number): CounterType => ({type: DECREMENT, data: number});

export const fetch = (data: string): FetchType => ({type: FETCH_REQUEST, data});
