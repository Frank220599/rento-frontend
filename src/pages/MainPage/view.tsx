import React from 'react';
import AnnouncementList from "containers/AnnouncemetnList";
import Filter from "components/Filter";
import CategoriesSection from "sections/CategoriesSection";

const MainPage = () => {
    return (
        <>
            <Filter/>
            <CategoriesSection/>
            <AnnouncementList/>
        </>
    );
};

export default MainPage;
