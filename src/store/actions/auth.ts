import {createAction} from "../utils";
import * as Auth from "../constants/auth";

const Login = createAction(Auth.Login.REQUEST);

export {
    Login,
}
