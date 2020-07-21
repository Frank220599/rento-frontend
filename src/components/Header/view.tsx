import React from 'react';

import Logo from "assets/images/Logo";
import LocationIcon from "assets/icons/LocationIcon"
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import LanguageIcon from "../../assets/icons/LanguageIcon";
import UserIcon from "../../assets/icons/UserIcon";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"headerTop"}>
                <div className={'container d-flex'}>
                    <div className={'d-flex'}>
                        <p>Местоположение:</p>
                        <div className={"location"}>
                            <LocationIcon className={"icon"}/>
                            <p>Ташкент</p>
                        </div>
                    </div>
                    <div className={"headerTopLeft"}>
                        <div className={"leftItem"}>
                            <FavoriteIcon/>
                            <p>Избранный</p>
                        </div>
                        <div className={"leftItem"}>
                            <LanguageIcon/>
                            <p>Язык <span>Русский</span></p>
                        </div>
                        <div className={"leftItem"}>
                            <UserIcon/>
                            <p>Войти/Регистрация</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"headerBottom"}>
                <div className={"container"}>
                    <Logo/>
                    <div className={"filter"}>
                        <p className={"active"}>Аренда</p>
                        <p>С выкупом</p>
                        <p>Продаётся</p>
                        <p>Отдам даром</p>
                    </div>
                    <div className={"button"}>
                        <p>+ Подать объявления</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
