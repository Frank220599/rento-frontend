import React from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import DownloadAppSection from "sections/DownloadAppSection";
import SocialWebSitesSection from "sections/SocialWebSitesSection";


const MainLayout = (Component: React.FunctionComponent) => {
    return () => {
        return (
            <div className={"layout"}>
                <Header/>
                <Component/>
                <DownloadAppSection/>
                <SocialWebSitesSection/>
                <Footer/>
            </div>
        );
    };
};

export default MainLayout;
