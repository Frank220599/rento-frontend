import React from 'react';

interface IProps {
    name: string;
    image: string;
    backgroundColor: string;
}

const CategoryItem = ({image, name, backgroundColor}: IProps) => {
    return (
        <div className={"categoryItem"} style={{backgroundColor}}>
            <p>{name}</p>
            <span>314</span>
            <div className={"categoryImage"}>
                <img src={image} alt={name}/>
            </div>
        </div>
    );
};

export default CategoryItem;
