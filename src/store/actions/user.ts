import {createAction} from "../utils";
import * as User from "../constants/user";

const GetProfile = createAction(User.GetProfile.REQUEST);
const UpdateProfile = createAction(User.UpdateProfile.REQUEST);
const GetUser = createAction(User.GetUser.REQUEST);

export {
    GetProfile,
    UpdateProfile,
    GetUser,
}
