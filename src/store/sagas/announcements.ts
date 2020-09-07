import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../services/api";

import * as Announcements from "../constants/announcements";

function* GetAnnouncements(action) {
    try {
        const {data} = yield call(api.request.get, api.queryBuilder('/announcement', action.payload.params));

        if (data.status === 'error') {
            throw new Error(data.message);
        }

        yield put({
            type: Announcements.GetAnnouncements.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.GetAnnouncements.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}

function* GetAnnouncement(action) {
    try {
        const {data} = yield call(api.request.get, `/announcement/${action.payload.slug}`);


        yield put({
            type: Announcements.GetAnnouncement.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.GetAnnouncement.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}


export default function* root() {
    yield all([
        takeLatest(Announcements.GetAnnouncements.REQUEST, GetAnnouncements),
        takeLatest(Announcements.GetAnnouncement.REQUEST, GetAnnouncement),
    ]);
}
