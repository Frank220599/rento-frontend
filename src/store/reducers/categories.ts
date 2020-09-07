import {GetCategories} from "../constants/categories";

const initialState = {
    all: {
        data: []
    }
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  GetCategories.SUCCESS:
            return {
                ...state,
                all: {
                    data: action.payload
                }
            };
        default:
            return state
    }
}
