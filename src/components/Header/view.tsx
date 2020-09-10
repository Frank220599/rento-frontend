import React, {useState} from 'react';
import {Link, NavLink, useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";

import Logo from "assets/images/Logo";
import LocationIcon from "assets/icons/LocationIcon"
import FavoriteIcon from "assets/icons/FavoriteIcon";
import LanguageIcon from "assets/icons/LanguageIcon";
import UserIcon from "assets/icons/UserIcon";
import ROUTES from "router/ROUTES";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

const Header = () => {

    const [visible, setVisible] = useState(false);

    const {params: {categoryId}} = useRouteMatch();
    const category = useSelector(state => state.categories.all.data.find(category => category.id == categoryId));
    const user = useSelector(state => state.user);
    const toggleDropDown = () => {
        setVisible(!visible)
    };
    return (
        <div className={"header"}>
            <div className={"headerTop"}>
                <div className={'container d-flex'}>
                    {/*<div className={'d-flex'}>*/}
                    {/*    <p>Местоположение:</p>*/}
                    {/*    <div className={"location"}>*/}
                    {/*        <LocationIcon className={"icon"}/>*/}
                    {/*        <p>Ташкент</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"headerTopLeft"}>
                        {/*<div className={"leftItem"}>*/}
                        {/*    <FavoriteIcon/>*/}
                        {/*    <p>Избранный</p>*/}
                        {/*</div>*/}
                        <div className={"leftItem"}>
                            <LanguageIcon/>
                            <p>Язык <span>Русский</span></p>
                        </div>
                        {
                            user.isAuthenticated
                                ? (
                                    <div className={"headerProfile"} onClick={toggleDropDown}>
                                        <img src={user.data.avatar_url} alt=""/>
                                        <p style={{marginRight: 10, marginLeft: 10}}>Мой профиль</p>
                                        <ChevronDownIcon/>
                                        {visible && <div className={"dropdownMenu"}>
                                            <div className={"balanceInfo"}>
                                                <div>
                                                    <p>Баланс:</p>
                                                    <p>ID: 12908172</p>
                                                </div>
                                                <div>
                                                    <p>15 000 uzs</p>
                                                </div>
                                            </div>
                                            <NavLink
                                                to={ROUTES.PROFILE_PAYMENT}
                                                className={"paymentLink"}
                                            >
                                                Пополнить
                                            </NavLink>
                                            <div className={"dropDownLinks"}>
                                                <NavLink to={ROUTES.PROFILE}>Моя страница</NavLink>
                                                <NavLink to={ROUTES.CHAT}>Сообщение</NavLink>
                                                <NavLink to={ROUTES.PROFILE_SETTINGS}>Настройки</NavLink>
                                            </div>
                                        </div>}
                                    </div>
                                )
                                : (
                                    <div className={"leftItem"}>
                                        <UserIcon/>
                                        <Link to={ROUTES.AUTH_SIGN_IN}>Войти</Link>/
                                        <Link to={ROUTES.AUTH_SIGN_UP}>Регистрация</Link>
                                    </div>
                                )
                        }

                    </div>
                </div>
            </div>
            <div className={"headerBottom"}>
                <div className={"container"}>
                    <Link to={ROUTES.MAIN}>
                        <Logo/>
                    </Link>
                    {
                        categoryId &&
                        <div className={"d-flex a-center categoryInfo"}>
                            <div className={"imgContainer"}>
                                <img src={category && category.image_url} alt=""/>
                            </div>
                            <p>{category && category.title}</p>
                        </div>
                    }
                    {/* <div className={"filter"}>*/}
                    {/*     <p className={"active"}>Аренда</p>*/}
                    {/*     <p>С выкупом</p>*/}
                    {/*     <p>Продаётся</p>*/}
                    {/*     <p>Отдам даром</p>*/}
                    {/* </div>*/}
                    <NavLink
                        to={user.isAuthenticated ? ROUTES.ANNOUNCEMENT_ADD : ROUTES.AUTH_SIGN_IN}
                        className={"button"}
                    >
                        <p>+ Подать объявления</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
