import React from 'react';
import MobileApp from "assets/images/MobileApp.png";
import CirclesIcon from "assets/icons/CirclesIcon";
import PlayMarketIcon from "assets/icons/PlayMarketIcon";
import AppStoreIcon from "assets/icons/AppStoreIcon";
import Logo from "../../assets/images/Logo";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/IntagramIcon";
import TelegramIcon from "../../assets/icons/TelegramIcon";

const DownloadAppSection = () => {
    return (
        <div className={"container"}>
            <div className={"mobileApp"}>
                <div className={"mobileAppLeft"}>
                    <img src={MobileApp} alt=""/>
                    <CirclesIcon className={'circles'}/>
                </div>
                <div className={"mobileAppRight"}>
                    <p className={'mobileAppTitle'}>Download app <br/>from</p>
                    <p>Все бесплатно толька для вас )</p>
                    <div className={'downloadLinks'}>
                        <div className="downloadLink">
                            <PlayMarketIcon/>
                            <div>
                                <p>GET IT ON</p>
                                <p>Google Play</p>
                            </div>
                        </div>
                        <div className="downloadLink">
                            <AppStoreIcon/>
                            <div>
                                <p>Available on the</p>
                                <p>App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    );
};

export default DownloadAppSection;
