import {IRoute} from "./types";
import MainPage from "pages/MainPage";
import ROUTES from "./ROUTES";
import SignUpPage from "pages/Authorization/SignUpPage";
import SignInPage from "../pages/Authorization/SignInPage";
import ProfilePage from "../pages/Profile/ProfilePage/view";
import ProfilePaymentPage from "../pages/Profile/ProfilePaymentPage";
import ProfileSettingsPage from "../pages/Profile/ProfileSettingsPage/view";

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
];

export default MainRotes;
