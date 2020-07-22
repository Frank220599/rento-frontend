import React from 'react';

import MainLayout from "layout/MainLayout";
import Header from "components/Header";
import DownloadAppSection from "sections/DownloadAppSection";
import Footer from "components/Footer";
import Filter from "components/Filter";
import CategoriesSection from "sections/CategoriesSection";
import AnnouncementList from "./containers/AnnouncemetnList";

function App() {
    return (
        <MainLayout>
            <Header/>
            <Filter/>
            <CategoriesSection/>
            <AnnouncementList/>
            <DownloadAppSection/>
            <Footer/>
        </MainLayout>
    );
}

export default App;
