import {IRoute} from "./types";
import MainPage from "pages/MainPage";
import ROUTES from "./ROUTES";
import SignUpPage from "pages/Authorization/SignUpPage";
import SignInPage from "../pages/Authorization/SignInPage";
import ProfilePage from "../pages/Profile/ProfilePage/view";
import ProfilePaymentPage from "../pages/Profile/ProfilePaymentPage";
import ProfileSettingsPage from "../pages/Profile/ProfileSettingsPage/view";
import ChatPage from "../pages/Profile/ChatPage";
import AnnouncementInfoPage from "../pages/Announcement/AnnouncementInfoPage";
import AddAnnouncementPage from "../pages/Announcement/AddAnnouncementPage";

const MainRotes: IRoute[] = [
    {
        path: ROUTES.MAIN,
        exact: true,
        component: MainPage
    },
    {
        path: ROUTES.AUTH_SIGN_UP,
        exact: true,
        component: SignUpPage,
        layout: false
    },
    {
        path: ROUTES.AUTH_SIGN_IN,
        exact: true,
        component: SignInPage,
        layout: false
    },
    {
        path: ROUTES.PROFILE,
        exact: true,
        component: ProfilePage,
    },
    {
        path: ROUTES.PROFILE_PAYMENT,
        exact: true,
        component: ProfilePaymentPage,
    },
    {
        path: ROUTES.PROFILE_SETTINGS,
        exact: true,
        component: ProfileSettingsPage,
    },
    {
        path: ROUTES.PROFILE_SETTINGS,
        exact: true,
        component: ProfileSettingsPage,
    },
    {
        path: ROUTES.CHAT,
        exact: true,
        component: ChatPage,
    },
    {
        path: ROUTES.ANNOUNCEMENT_ADD,
        exact: true,
        component: AddAnnouncementPage,
    },
    {
        path: ROUTES.ANNOUNCEMENT_SINGLE,
        exact: true,
        component: AnnouncementInfoPage,
    },

];

export default MainRotes;
