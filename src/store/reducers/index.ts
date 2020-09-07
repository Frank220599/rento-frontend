import {combineReducers} from "redux";
import user from "./user";
import categories from "./categories";
import announcements from "./announcements";


const appReducer = combineReducers({
    user,
    categories,
    announcements,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = {}
    }

    return appReducer(state, action)
};


export default rootReducer;
