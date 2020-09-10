import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../services/api";

import * as User from "../constants/user";

function* GetProfile(action: any) {
    try {
        const {data} = yield call(api.request.post, '/user/get', action.payload);

        yield put({
            type: User.GetProfile.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: User.GetProfile.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* UpdateProfile(action: any) {
    try {
        const {data} = yield call(api.request.post, '/profile/update', action.payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        yield put({
            type: User.UpdateProfile.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: User.UpdateProfile.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* GetCar(action: any) {
    try {
        const {data} = yield call(api.request.get, '/profile/car', action.payload);

        yield put({
            type: User.GetCar.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: User.GetCar.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

export default function* root() {
    yield all([
        takeLatest(User.GetProfile.REQUEST, GetProfile),
        takeLatest(User.UpdateProfile.REQUEST, UpdateProfile),
        takeLatest(User.GetCar.REQUEST, GetCar),
    ]);
}
