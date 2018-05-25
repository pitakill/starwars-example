// @flow
import type {ApiCallShape} from '../App/types';

export type WrapperProps = {
    actions: {
        increment: Function,
        decrement: Function,
        fetch: Function,
    },
    apiCall: Array<ApiCallShape>,
    counter: number,
};
