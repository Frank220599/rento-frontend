import React from 'react';
import {NavLink} from "react-router-dom";

import CalendarIcon from "assets/icons/CalendarIcon";
import moment from "moment";

interface IProps {
    image: string;
    title: string;
    price: string;
    slug: string;
    date: string;
}

const AnnouncementItem = ({image, title, date, price, slug}: IProps) => {
    return (
        <NavLink to={`/announcement/${slug}`} className={"announcementItem"}>
            <img src={image} alt=""/>
            <div className={"announcementItemContent"}>
                <p className={"announcementItemTitle"}>{title}</p>
                <div>
                    <p>{price}</p>
                    <CalendarIcon
                        width={10}
                        height={10}
                    />
                    <p>{moment(date).locale('ru').format('DD/MM/YYYY')}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default AnnouncementItem;
