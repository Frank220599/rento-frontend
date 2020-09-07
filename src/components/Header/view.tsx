import React, {useState} from 'react';
import {Link, NavLink, useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";

import Logo from "assets/images/Logo";
import LocationIcon from "assets/icons/LocationIcon"
import FavoriteIcon from "assets/icons/FavoriteIcon";
import LanguageIcon from "assets/icons/LanguageIcon";
import UserIcon from "assets/icons/UserIcon";
import ROUTES from "router/ROUTES";

const Header = () => {
    const {params: {categoryId}} = useRouteMatch();
    const category = useSelector(state => state.categories.all.data.find(category => category.id == categoryId));
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
                            <Link to={ROUTES.AUTH_SIGN_IN}>Войти</Link>/
                            <Link to={ROUTES.AUTH_SIGN_UP}>Регистрация</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"headerBottom"}>
                <div className={"container"}>
                    <Link to={ROUTES.MAIN}>
                        <Logo/>
                    </Link>
                    {
                        categoryId
                            ? <div className={"d-flex a-center categoryInfo"}>
                                <img src={category && category.image_url} alt=""/>
                                <p>{category && category.title}</p>
                            </div>
                            : <div className={"filter"}>
                                <p className={"active"}>Аренда</p>
                                <p>С выкупом</p>
                                <p>Продаётся</p>
                                <p>Отдам даром</p>
                            </div>
                    }
                    <NavLink to={ROUTES.ANNOUNCEMENT_ADD} className={"button"}>
                        <p>+ Подать объявления</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
