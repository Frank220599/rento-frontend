import React, {useEffect} from 'react';
import AnnouncementListView from './view';
import IAction from "../../store/types/IAction";
import {useRouteMatch} from "react-router-dom";

interface IProps {
    GetAnnouncements: IAction;
    announcements: [];
    back?: boolean;
    params?: string;
}

const AnnouncementListController = (
    {
        GetAnnouncements,
        announcements,
        back,
        params
    }: IProps) => {

    const {params: {categoryId}} = useRouteMatch();

    useEffect(() => {
        GetAnnouncements({
            params: {
                filter: {
                    category_id: categoryId
                }
            }
        })
    }, []);

    return (
        <AnnouncementListView
            back={back}
            announcements={announcements}
        />
    );
};

export default AnnouncementListController;
