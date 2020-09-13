import React, {useEffect, useState} from 'react';
import AnnouncementInfoPageView from './view';
import {useRouteMatch} from "react-router-dom";

const AnnouncementInfoPageController = ({GetAnnouncement, GetComments, AddComment, announcement, SetFavorite, user}) => {

    const {params: {id}} = useRouteMatch();
    const [comment, setComment] = useState();

    useEffect(() => {
        GetAnnouncement({id});
        GetComments({params: {filter: {announcement_id: id}}})
    }, []);

    const setFavorite = () => {
        SetFavorite({id})
    };

    const addComment = () => {
        if (comment) {
            AddComment({comment, id, user}, () => {
                setComment('')
            })
        }
    };

    return (
        <AnnouncementInfoPageView
            comment={comment}
            setComment={setComment}
            announcement={announcement.data}
            comments={announcement.comments}
            setFavorite={setFavorite}
            addComment={addComment}
        />
    );
};

export default AnnouncementInfoPageController;
