import React from 'react';
import {NavLink} from "react-router-dom";

import CalendarIcon from "assets/icons/CalendarIcon";

interface IProps {
    image: string;
    title: string;
    price: string;
    data: string;
}

const AnnouncementItem = ({image, title, data, price}: IProps) => {
    return (
        <NavLink to={'/announcement/noviya-mashina'} className={"announcementItem"}>
            <img src={image} alt=""/>
            <div className={"announcementItemContent"}>
                <p className={"announcementItemTitle"}>{title}</p>
                <div>
                    <p>{price}</p>
                    <CalendarIcon
                        width={10}
                        height={10}
                    />
                    <p>{data}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default AnnouncementItem;
