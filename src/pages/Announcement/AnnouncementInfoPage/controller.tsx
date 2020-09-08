import React, {useEffect} from 'react';
import AnnouncementInfoPageView from './view';
import {useRouteMatch} from "react-router-dom";

const AnnouncementInfoPageController = ({GetAnnouncement, GetComments, AddComment, announcement}) => {

    const {params: {id}} = useRouteMatch();

    useEffect(() => {
        GetAnnouncement({id});
        GetComments({params: {filter: {announcement_id: id}}})
    }, []);

    return (
        <AnnouncementInfoPageView
            announcement={announcement.data}
        />
    );
};

export default AnnouncementInfoPageController;
