import React from 'react';

import ProfileSettingForm from "containers/ProfileSettingsForm";
import ProfileHeader from "components/ProfileHeader";

const ProfileSettingsPage = () => {
    return (
        <div className={"settings"}>
            <ProfileHeader/>
            <ProfileSettingForm/>
        </div>
    );
};

export default ProfileSettingsPage;
