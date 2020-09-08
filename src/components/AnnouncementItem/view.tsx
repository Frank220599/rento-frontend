import React from 'react';
import {NavLink} from "react-router-dom";

import CalendarIcon from "assets/icons/CalendarIcon";
import moment from "moment";

interface IProps {
    image: string;
    title: string;
    price: string;
    date: string;
    id: number;
}

const AnnouncementItem = ({image, id, title, date, price}: IProps) => {
    return (
        <NavLink to={`/announcement/${id}`} className={"announcementItem"}>
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
