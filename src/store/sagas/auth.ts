import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../services/api";

import * as Auth from "../constants/auth";

function* Login(action) {
    try {
        const {data} = yield call(api.request.post, '/user/auth', action.payload);

        console.log(data);

        yield put({
            type: Auth.Login.SUCCESS,
            payload: data,
        });

        localStorage.setItem('rentoToken', data.token);

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Auth.Login.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}

function* GetMe(action) {
    try {
        const {data} = yield call(api.request.post, '/user/auth', action.payload);

        console.log(data);

        yield put({
            type: Auth.Login.SUCCESS,
            payload: data,
        });

        localStorage.setItem('rentoToken', data.token);

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Auth.Login.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}



export default function* root() {
    yield all([
        takeLatest(Auth.Login.REQUEST, Login),
    ]);
}
