// @flow
import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
} from './actionTypes';
import type {Saga} from 'redux-saga';

const fetchWrapper = (character: string): Promise<fetch> => fetch(`https://swapi.co/api/${character}/`);

function* fetchSaga(action): Saga {
    try {
        const responseRaw = yield call(fetchWrapper, action.data);
        const {results} = yield call(() => responseRaw.json());

        yield put({type: FETCH_SUCCESS, data: results});
    } catch (error) {
        yield put({type: FETCH_ERROR, data: error});
    }
}

function* mySaga(): Saga {
    yield takeLatest(FETCH_REQUEST, fetchSaga);
}

export default mySaga;
