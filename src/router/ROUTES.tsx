enum ROUTES {
    MAIN = '/',
    AUTH_SIGN_UP = '/auth/signup',
    AUTH_SIGN_IN = '/auth/signin',
    PROFILE = '/user/profile',
    PROFILE_USER = '/user/profile/:id',
    PROFILE_PAYMENT = '/user/profile/payment',
    PROFILE_SETTINGS = '/user/profile/settings',
    CHAT = '/user/chat',
    ANNOUNCEMENT_SINGLE = '/announcement/:id',
    CATEGORY_ANNOUNCEMENTS = '/announcements/:categoryId',
    ANNOUNCEMENT_ADD = '/announcement/add',
};

export default ROUTES;
