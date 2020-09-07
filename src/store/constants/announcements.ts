import {createActionTypes} from "../utils";

const GetAnnouncements = createActionTypes('GET_ANNOUNCEMENTS');
const GetAnnouncement = createActionTypes('GET_ANNOUNCEMENT');

export {
    GetAnnouncements,
    GetAnnouncement,
}
