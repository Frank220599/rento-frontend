import {GetAnnouncements, GetAnnouncement} from "../constants/announcements";

const initialState = {
    all: {
        data: []
    },
    one: {
        data: {}
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
                    data: action.payload[0]
                }
            };
        default:
            return state
    }
}
