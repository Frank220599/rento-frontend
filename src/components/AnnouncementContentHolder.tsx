import * as React from "react";
import ContentLoader from "react-content-loader"

// @ts-ignore
const AnnouncementContentHolder = (props) => (
    <ContentLoader
        height={300}
        speed={2}
        className={'news_main_top_item'}
    >
        <rect x="1" y="2" rx="0" ry="0" width="100%" height="123"/>
        <rect x="15" y="139" rx="0" ry="0" width="205" height="10"/>
        <rect x="15" y="154" rx="0" ry="0" width="241" height="10"/>
        <rect x="15" y="265" rx="0" ry="0" width="92" height="12"/>
    </ContentLoader>

);

export default AnnouncementContentHolder
