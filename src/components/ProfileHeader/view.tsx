import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import SettingsIcon from "../../assets/icons/SettingsIcon";
import ROUTES from "../../router/ROUTES";

const ProfileHeader = () => {
    const user = useSelector(state => state.user.data);
    return (
        <div className={"container"}>
            <div className="profileHeader">
                <div className={"profileHeaderLeft"}>
                    <img src={user.image_url} alt=""/>
                    <div className={"profileInfo"}>
                        <p>{user.username}</p>
                        <Link to={ROUTES.PROFILE_SETTINGS}><SettingsIcon/>Изменить профил</Link>
                    </div>
                </div>
                <div className={"profileHeaderRight"}>
                    <div className={"balance"}>
                        <p>ID: {user.id}</p>
                        <p>{user.balance | 0} uzs</p>
                    </div>
                    <Link to={ROUTES.PROFILE_PAYMENT}>Попольнить</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
