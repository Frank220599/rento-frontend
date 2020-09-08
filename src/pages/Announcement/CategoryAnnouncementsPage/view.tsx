import React from 'react';
import {useRouteMatch} from "react-router-dom";

import AnnouncementList from "../../../containers/AnnouncemetnList";
import Filter from "../../../components/Filter";

const CategoryAnnouncementsPageView = () => {

    const {params: {categoryId}} = useRouteMatch();
    return (
        <div>
            <div className={'categoryFilter'}>
                <Filter/>
            </div>
            <AnnouncementList
                back
                params={{
                }}
            />
        </div>
    );
};

export default CategoryAnnouncementsPageView;
