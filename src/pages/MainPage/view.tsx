import React from 'react';
import AnnouncementList from "../../containers/AnnouncemetnList";
import Filter from "../../components/Filter";

const MainPage = () => {
    return (
        <>
            <Filter/>
            <AnnouncementList/>
        </>
    );
};

export default MainPage;
