import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../services/api";

import * as Categories from "../constants/categories";

function* GetCategories(action) {
    try {
        const {data} = yield call(api.request.get, '/category', action.payload);

        yield put({
            type: Categories.GetCategories.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Categories.GetCategories.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}


export default function* root() {
    yield all([
        takeLatest(Categories.GetCategories.REQUEST, GetCategories),
    ]);
}
