import React, {useEffect} from 'react';
import {useRouteMatch, useHistory} from "react-router-dom";
import qs from "qs";

import AnnouncementListView from './view';
import IAction from "../../store/types/IAction";

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
    }: IProps) => {

    const history = useHistory();
    const {params: {categoryId}} = useRouteMatch();


    useEffect(() => {
        let filter = {};
        if (categoryId !== 'undefined') {
            filter = {
                category_id: categoryId,
            }
        }
        GetAnnouncements({
            params: {
                filter: {
                    ...filter,
                    title: qs.parse(history.location.search, {ignoreQueryPrefix: true}).title
                }
            }
        })
    }, [history.location.search]);

    return (
        <AnnouncementListView
            back={back}
            announcements={announcements}
        />
    );
};

export default AnnouncementListController;
