import React from 'react';
import SignInForm from "containers/SignInForm";
import Header from "components/Header";
import Footer from "components/Footer";
import SocialWebSitesSection from "sections/SocialWebSitesSection";

const SignInPage = () => {
    return (
        <>
            <Header/>
            <SignInForm/>
            <SocialWebSitesSection/>
            <Footer/>
        </>
    );
};

export default SignInPage;

