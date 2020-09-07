import React from 'react';
import {NavLink} from "react-router-dom";

interface IProps {
    name: string;
    image: string;
    backgroundColor: string;
    id: number;
}

const CategoryItem = ({image, name, backgroundColor, id}: IProps) => {
    return (
        <NavLink to={`/announcements/${id}`} className={"categoryItem"} style={{backgroundColor}}>
            <p>{name}</p>
            <span>314</span>
            <div className={"categoryImage"}>
                <img src={image} alt={name}/>
            </div>
        </NavLink>
    );
};

export default CategoryItem;
