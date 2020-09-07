import {createAction} from "../utils";
import * as Announcements from "../constants/announcements";

const GetAnnouncements = createAction(Announcements.GetAnnouncements.REQUEST);
const GetAnnouncement = createAction(Announcements.GetAnnouncement.REQUEST);

export {
    GetAnnouncements,
    GetAnnouncement,
}
