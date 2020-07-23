import React from 'react';
import Logo from "assets/images/Logo";
import FacebookIcon from "assets/icons/FacebookIcon";
import InstagramIcon from "assets/icons/IntagramIcon";
import TelegramIcon from "assets/icons/TelegramIcon";

const SocialWebSitesSection = () => {
    return (
        <div className={"socialsWrapper"}>
            <div className={"container "}>
                <div className="socials">
                    <Logo/>
                    <div className={"socialLinks"}>
                        <div className={"socialLink"}>
                            <FacebookIcon/>
                            <p>Facebook</p>
                        </div>
                        <div className={"socialLink"}>
                            <InstagramIcon/>
                            <p>Instagram</p>
                        </div>
                        <div className={"socialLink"}>
                            <TelegramIcon/>
                            <p>Telegram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialWebSitesSection;
