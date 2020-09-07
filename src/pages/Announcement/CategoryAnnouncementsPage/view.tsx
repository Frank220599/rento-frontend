import React from 'react';
import {useRouteMatch} from "react-router-dom";

import AnnouncementList from "../../../containers/AnnouncemetnList";

const CategoryAnnouncementsPageView = () => {

    const {params: {categoryId}} = useRouteMatch();
    return (
        <div>
            <AnnouncementList
                back
                params={{
                    categoryId
                }}
            />
        </div>
    );
};

export default CategoryAnnouncementsPageView;
