import {createActionTypes} from "../utils";

const GetAnnouncements = createActionTypes('GET_ANNOUNCEMENTS');
const GetAnnouncement = createActionTypes('GET_ANNOUNCEMENT');
const GetComments = createActionTypes('GET_COMMENTS');
const AddComment = createActionTypes('ADD_COMMENT');

export {
    GetAnnouncements,
    GetAnnouncement,
    GetComments,
    AddComment,
}
