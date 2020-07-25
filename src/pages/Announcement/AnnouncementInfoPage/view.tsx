import React from 'react';
import {Link, useHistory} from "react-router-dom"

import BackArrowIcon from "assets/icons/BackArrowIcon";
import ShareIcon from "assets/icons/ShareIcon";
import Favorite2Icon from "assets/icons/Favorite2Icon";
import ROUTES from "router/ROUTES";
import AnnouncementItem from "components/AnnouncementItem";
import SendMessage from "components/SendMessage";
import ParameterItem from "components/ParameterItem";
import CommentItem from "components/CommentItem";
import DocumentItem from "components/DocumentItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carousel = require('react-responsive-carousel').Carousel;


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
                        <Carousel
                            showStatus={false}
                            showArrows={false}
                            showThumbs={true}
                            swipeable={true}
                        >
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>
                            <div className={"slide"}>
                                <img src={require('assets/images/img.png')} alt=""/>
                            </div>


                        </Carousel>
                        <div className={"viewInfo"}>
                            <div>
                                <span>Опубликована</span>
                                <p>10 июня, 23:56</p>
                            </div>
                            <div>
                                <span>Просмотры:</span>
                                <p>880 пользователь</p>
                            </div>
                        </div>
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
                                <img src={require('assets/images/placeholderUser.png')} alt=""/>
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
                <div className="announcementMiddle">
                    <div className="announcementRentTime">
                        <p className={"middleTitle"}>Дата выдача аренду</p>
                        <div>
                            <div>
                                <span>От</span>
                                <p>10 июня, 2020</p>
                            </div>
                            <div>
                                <span>До</span>
                                <p>+ ∞</p>
                            </div>
                        </div>
                    </div>
                    <div className="announcementDocuments">
                        <p className={"middleTitle"}>Документы</p>
                        <div className="documentsList">
                            <DocumentItem/>
                            <DocumentItem/>
                            <DocumentItem/>
                        </div>
                    </div>
                </div>
                <div className="parametersWrapper">
                    <p className={"borderLabel"}>Параметры</p>
                    <div className="parameters">
                        {
                            [...new Array(20)].map(() => (
                                <ParameterItem/>
                            ))
                        }
                    </div>
                </div>
                <div className="announcementInfoBottom">
                    <div className="announcementComments">
                        <p className={"borderLabel"}>Коментарии</p>
                        <SendMessage/>
                        <div className="commentsList">
                            <CommentItem/>
                            <CommentItem/>
                            <CommentItem/>
                            <CommentItem/>
                            <CommentItem/>
                        </div>
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
