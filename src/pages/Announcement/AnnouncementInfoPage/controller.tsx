import React, {useEffect} from 'react';
import AnnouncementInfoPageView from './view';
import {useRouteMatch} from "react-router-dom";

const AnnouncementInfoPageController = ({GetAnnouncement, announcement}) => {

    const {params: {slug}} = useRouteMatch();

    useEffect(() => {
        GetAnnouncement({
            slug
        })
    }, []);

    return (
        <AnnouncementInfoPageView
            announcement={announcement.data}
        />
    );
};

export default AnnouncementInfoPageController;
