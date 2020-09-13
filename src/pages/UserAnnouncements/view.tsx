import React, {useEffect, useState} from 'react';
import {useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import AnnouncementItem from "../../components/AnnouncementItem";
import {GetUser} from "../../store/actions/user";
import {GetAnnouncements} from "../../store/actions/announcements";


const UserAnnouncements = () => {

    const [user, setUser] = useState<any>({});

    const {params: {id}} = useRouteMatch();
    const dispatch = useDispatch();
    const announcements = useSelector(state => state.announcements.all.data);

    useEffect(() => {
        dispatch(GetUser({id}, (data) => {
            setUser(data.data)
        }));
        dispatch(GetAnnouncements({
            params: {
                filter: {
                    user_id: id
                }
            }
        }))
    }, []);

    return (
        <>
            <div className={"container"}>
                <div className="profileHeader">
                    <div className={"profileHeaderLeft"}>
                        <img src={user.avatar_url} alt=""/>
                        <div className={"profileInfo"}>
                            <p>{user.username}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"userAnnouncementList"}>
                <div className="listHeader">
                    <div className="container">
                        <p>Все Объявление</p>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"announcementList"}>
                        {
                            announcements.map((announcement) => (
                                <AnnouncementItem
                                    id={announcement.id}
                                    image={announcement.images[0]}
                                    title={announcement.title}
                                    price={`${announcement.price} у.е`}
                                    date={announcement.created_at}
                                />
                            ))
                        }
                    </div>
                    <div className="showMore">
                        <div>Еще</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserAnnouncements;
