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
        const {data} = yield call(api.request.get, `/announcement/${action.payload.id}`);

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

function* GetComments(action) {
    try {
        const {data} = yield call(api.request.get, api.queryBuilder('/comments', action.payload.params));

        yield put({
            type: Announcements.GetComments.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.GetComments.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}


function* AddComment(action) {
    try {
        const {data} = yield call(api.request.post, `/comment?text=${action.payload.comment}&announcement_id=${action.payload.id}`);

        yield put({
            type: Announcements.AddComment.SUCCESS,
            payload: action.payload,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.AddComment.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}

function* AddAnnouncement(action) {
    try {
        const {data} = yield call(api.request.post, `/announcement`, action.payload);

        yield put({
            type: Announcements.AddAnnouncement.SUCCESS,
            payload: action.payload,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.AddAnnouncement.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}

function* SetFavorite(action) {
    try {
        const {data} = yield call(api.request.post, `/user/favourite?favourite=${action.payload.id}`,);

        yield put({
            type: Announcements.SetFavorite.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {

        yield put({
            type: Announcements.SetFavorite.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);

    }
}


export default function* root() {
    yield all([
        takeLatest(Announcements.GetAnnouncements.REQUEST, GetAnnouncements),
        takeLatest(Announcements.GetAnnouncement.REQUEST, GetAnnouncement),
        takeLatest(Announcements.GetComments.REQUEST, GetComments),
        takeLatest(Announcements.AddComment.REQUEST, AddComment),
        takeLatest(Announcements.SetFavorite.REQUEST, SetFavorite),
        takeLatest(Announcements.AddAnnouncement.REQUEST, AddAnnouncement),
    ]);
}
