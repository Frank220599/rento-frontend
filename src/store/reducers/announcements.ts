import {GetAnnouncements, GetAnnouncement, GetComments, AddComment} from "../constants/announcements";

const initialState = {
    all: {
        data: [],
        isFetched: false,
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
                    isFetched: false,
                    data: []
                }
            };
        case  GetAnnouncements.SUCCESS:
            return {
                ...state,
                all: {
                    isFetched: true,
                    data: action.payload
                }
            };
        case  GetAnnouncement.REQUEST:
            return {
                ...state,
                one: {
                    ...state.one,
                    data: {}
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
                    comments: [...action.payload.reverse()]
                }
            };
        case  AddComment.SUCCESS:
            return {
                ...state,
                one: {
                    ...state.one,
                    comments: [
                        {
                            id: Math.random(),
                            text: action.payload.comment,
                            created_at: Date.now(),
                            user: action.payload.user
                        },
                        ...state.one.comments
                    ]
                }
            };
        default:
            return state
    }
}
