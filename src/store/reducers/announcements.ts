import {GetAnnouncements, GetAnnouncement, GetComments} from "../constants/announcements";

const initialState = {
    all: {
        data: []
    },
    one: {
        data: {},
        comments: []
    }
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  GetAnnouncements.REQUEST:
            return {
                ...state,
                all: {
                    data: []
                }
            };
        case  GetAnnouncements.SUCCESS:
            return {
                ...state,
                all: {
                    data: action.payload
                }
            };
        case  GetAnnouncement.SUCCESS:
            return {
                ...state,
                one: {
                    ...state.one,
                    data: action.payload[0]
                }
            };
        case  GetComments.REQUEST:
            return {
                ...state,
                one: {
                    ...state.one,
                    comments: []
                }
            };
        case  GetComments.SUCCESS:
            return {
                ...state,
                one: {
                    ...state.one,
                    comments: [...action.payload]
                }
            };
        default:
            return state
    }
}
