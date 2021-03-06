import {fork, all} from "redux-saga/effects";

import auth from "./auth";
import user from "./user";
import categories from "./categories";
import announcements from "./announcements";

export default function* rootSaga() {
    yield all([
        fork(auth),
        fork(user),
        fork(categories),
        fork(announcements),
    ])
}
