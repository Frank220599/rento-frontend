import {Login} from "../constants/auth";
import {GetCar, GetProfile, UpdateProfile} from "../constants/user";

const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    data: {},
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  Login.REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case  Login.SUCCESS:
            const {token, user} = action.payload;
            return {
                ...state,
                token: token,
                isLoading: false,
                isAuthenticated: true,
                data: user
            };
        case  GetProfile.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                data: action.payload
            };
        case  UpdateProfile.SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}
