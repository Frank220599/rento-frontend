import {createAction, createActionTypes} from "../utils";
import * as Announcements from "../constants/announcements";

const GetAnnouncements = createAction(Announcements.GetAnnouncements.REQUEST);
const GetAnnouncement = createAction(Announcements.GetAnnouncement.REQUEST);
const GetComments = createAction(Announcements.GetComments.REQUEST);
const AddComment = createAction(Announcements.AddComment.REQUEST);
const SetFavorite = createAction(Announcements.SetFavorite.REQUEST);

export {
    GetAnnouncements,
    GetAnnouncement,
    GetComments,
    AddComment,
    SetFavorite,
}
