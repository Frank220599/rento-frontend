import React from 'react';
import {Link, useHistory} from "react-router-dom"

import BackArrowIcon from "assets/icons/BackArrowIcon";
import ShareIcon from "assets/icons/ShareIcon";
import Favorite2Icon from "assets/icons/Favorite2Icon";
import AnnouncementItem from "components/AnnouncementItem";
import SendMessage from "components/SendMessage";
import ParameterItem from "components/ParameterItem";
import CommentItem from "components/CommentItem";
import DocumentItem from "components/DocumentItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import moment from "moment";

const Carousel = require('react-responsive-carousel').Carousel;


const AnnouncementInfoPageView = ({announcement, comments, setFavorite, addComment, setComment, comment}) => {
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
                            showThumbs={true}
                        >
                            {
                                announcement.images && announcement.images.map((imageUrl, index) => (
                                    <div className={"slide"} key={index}>
                                        <img src={imageUrl} alt=""/>
                                    </div>
                                ))
                            }

                        </Carousel>
                        <div className={"viewInfo"}>
                            <div>
                                <span>Опубликована</span>
                                <p>{moment(announcement.created_at).locale('ru').format('DD MMMM, HH:MM')}</p>
                            </div>
                            <div>
                                <span>Просмотры:</span>
                                <p>{announcement.views} пользователь</p>
                            </div>
                        </div>
                    </div>
                    <div className="announcementInfoBlock">
                        <div className="announcementTitle">
                            <p>{announcement.title}</p>
                        </div>
                        <div className={"descWrapper"}>
                            <div className="descTop">
                                <p>Описание</p>
                                <div className={"itemFunc"}>
                                    <Favorite2Icon onClick={setFavorite}/>
                                    <div>
                                        <ShareIcon/>
                                        Поделится
                                    </div>
                                </div>
                            </div>
                            <div className="announcementInfoDesc">
                                <p>{announcement.description}</p>
                            </div>
                        </div>
                        <div className="priceWrapper">
                            <p>Цена</p>
                            <span>{announcement.price} y.e</span>
                        </div>
                        <div className="author">
                            <p className={"borderLabel"}>Автор</p>
                            {
                                announcement.user && <div className={"profileHeaderLeft"}>
                                    <img src={require('assets/images/placeholderUser.png')} alt=""/>
                                    <div className={"profileInfo"}>
                                        <p>{announcement.user.username}</p>
                                        <Link to={`/user/announcements/${announcement.user.id}`}>Все обновлении автора</Link>
                                    </div>
                                </div>
                            }
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
                            announcement.property_values && announcement.property_values.map((property, index) => (
                                property.name !== 'color' && <ParameterItem
                                    key={property.id}
                                    name={property.name}
                                    value={property.value}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="announcementInfoBottom">
                    <div className="announcementComments">
                        <p className={"borderLabel"}>Коментарии</p>
                        <SendMessage
                            addComment={addComment}
                            value={comment}
                            setValue={setComment}
                        />
                        <div className="commentsList">
                            {
                                comments.map(comment => (
                                    <CommentItem
                                        key={comment.id}
                                        time={comment.created_at}
                                        text={comment.text}
                                        user={comment.user}
                                    />
                                ))
                            }
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
                        id={1}
                        image={require('assets/images/img.png')}
                        title={'53 кв/м оффис сдаётся в аренду в'}
                        price={'500 у.е'}
                        date={'20/06/2020'}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnnouncementInfoPageView;
