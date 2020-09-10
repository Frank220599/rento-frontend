import React from 'react';

import ProfileHeader from "components/ProfileHeader";
import UserAnnouncementList from "containers/UserAnnouncemetnList";

const ProfilePage = () => {
    return (
        <>
            <ProfileHeader/>
            <UserAnnouncementList/>
        </>
    );
};

export default ProfilePage;
