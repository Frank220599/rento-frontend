import React from 'react';
import {Link, useHistory} from "react-router-dom"

import BackArrowIcon from "assets/icons/BackArrowIcon";
import ShareIcon from "assets/icons/ShareIcon";
import Favorite2Icon from "assets/icons/Favorite2Icon";
import ROUTES from "router/ROUTES";
import AnnouncementItem from "components/AnnouncementItem";
import SendMessage from "components/SendMessage";

const AnnouncementInfoPage = () => {
    const history = useHistory();
    return (
        <div className={"container"}>
            <div className={"breadcrumb"}>
                <BackArrowIcon onClick={history.goBack}/>
                <p>Назад/Главная/Транспорт/Легковыемашины/Camaro</p>
            </div>
            <div className="announcementInfo">
                <div className="announcementInfoTop">
                    <div className="announcementGallery">
                        ads
                    </div>
                    <div className="announcementInfoBlock">
                        <div className="announcementTitle">
                            <p>Сдаётся на аренду Chevrolet Camaro GT36</p>
                        </div>
                        <div className={"descWrapper"}>
                            <div className="descTop">
                                <p>Описание</p>
                                <div className={"itemFunc"}>
                                    <Favorite2Icon/>
                                    <div>
                                        <ShareIcon/>
                                        Поделится
                                    </div>
                                </div>
                            </div>
                            <div className="announcementInfoDesc">
                                <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                </p>
                            </div>
                        </div>
                        <div className="priceWrapper">
                            <p>Цена</p>
                            <span>500 y.e/месяц</span>
                        </div>
                        <div className="author">
                            <p className={"borderLabel"}>Автор</p>
                            <div className={"profileHeaderLeft"}>
                                <img src="" alt=""/>
                                <div className={"profileInfo"}>
                                    <p>Анастасия Цой</p>
                                    <Link to={ROUTES.PROFILE_PAYMENT}>Все обновлении автора</Link>
                                </div>
                            </div>
                        </div>
                        <div className="infoButtons">
                            <Link to={'/'}>Написать</Link>
                            <div>Позвонить</div>
                        </div>
                    </div>
                </div>
                <div className="announcementInfoBottom">
                    <div className="announcementReviews">
                        <p className={"borderLabel"}>Коментарии</p>
                        <SendMessage/>
                    </div>
                    <div className="announcementLocation">
                        <p className={"borderLabel"}>Местонахождение на карте</p>
                        <div className="map">

                        </div>
                    </div>
                </div>
            </div>
            <div className="relatedAnnouncements">
                <p className={"borderLabel"}>Вам может понравиться</p>
                <div className={"a-center"}>
                    <AnnouncementItem
                        image={require('assets/images/img.png')}
                        title={'53 кв/м оффис сдаётся в аренду в'}
                        price={'500 у.е/месяц'}
                        data={'20/06/2020'}
                    />
                    <AnnouncementItem
                        image={require('assets/images/img.png')}
                        title={'53 кв/м оффис сдаётся в аренду в'}
                        price={'500 у.е/месяц'}
                        data={'20/06/2020'}
                    />
                    <AnnouncementItem
                        image={require('assets/images/img.png')}
                        title={'53 кв/м оффис сдаётся в аренду в'}
                        price={'500 у.е/месяц'}
                        data={'20/06/2020'}
                    />
                    <AnnouncementItem
                        image={require('assets/images/img.png')}
                        title={'53 кв/м оффис сдаётся в аренду в'}
                        price={'500 у.е/месяц'}
                        data={'20/06/2020'}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnnouncementInfoPage;
