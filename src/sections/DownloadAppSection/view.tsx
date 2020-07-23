import React from 'react';
import MobileApp from "assets/images/MobileApp.png";
import CirclesIcon from "assets/icons/CirclesIcon";
import PlayMarketIcon from "assets/icons/PlayMarketIcon";
import AppStoreIcon from "assets/icons/AppStoreIcon";

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
        </div>
    );
};

export default DownloadAppSection;
