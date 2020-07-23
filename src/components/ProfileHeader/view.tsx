import React from 'react';
import {Link} from "react-router-dom";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import ROUTES from "../../router/ROUTES";

const ProfileHeader = () => {
    return (
        <div className={"container"}>
            <div className="profileHeader">
                <div className={"profileHeaderLeft"}>
                    <img src="" alt=""/>
                    <div className={"profileInfo"}>
                        <p>Анастасия Цой</p>
                        <Link to={ROUTES.PROFILE_PAYMENT}><SettingsIcon/>Изменить профил</Link>
                    </div>
                </div>
                <div className={"profileHeaderRight"}>
                    <div className={"balance"}>
                        <p>ID: 12908172</p>
                        <p>15 000 uzs</p>
                    </div>
                    <Link to={ROUTES.PROFILE_PAYMENT}>Попольнить</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
