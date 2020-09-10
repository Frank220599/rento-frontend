import React, {useEffect} from 'react';
import AnnouncementInfoPageView from './view';
import {useRouteMatch} from "react-router-dom";

const AnnouncementInfoPageController = ({GetAnnouncement, GetComments, AddComment, announcement, SetFavorite}) => {

    const {params: {id}} = useRouteMatch();

    useEffect(() => {
        GetAnnouncement({id});
        GetComments({params: {filter: {announcement_id: id}}})
    }, []);

    const setFavorite = () => {
        SetFavorite({id})
    };

    return (
        <AnnouncementInfoPageView
            announcement={announcement.data}
            comments={announcement.comments}
            setFavorite={setFavorite}
        />
    );
};

export default AnnouncementInfoPageController;
