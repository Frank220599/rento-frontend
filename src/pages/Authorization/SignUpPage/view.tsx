import React from 'react';
import SignUpForm from "containers/SignUpForm";
import Header from "components/Header";
import Footer from "components/Footer";
import SocialWebSitesSection from "sections/SocialWebSitesSection";

const SignUpPage = () => {
    return (
        <>
            <Header/>
            <SignUpForm/>
            <SocialWebSitesSection/>
            <Footer/>
        </>
    );
};

export default SignUpPage;

