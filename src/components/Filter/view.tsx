import React from 'react';

import SearchIcon from "assets/icons/SearchIcon";
import CategoryIcon from "assets/icons/CategoryIcon";
import ChevronDownIcon from "assets/icons/ChevronDownIcon";
import LocationIcon from "assets/icons/LocationIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";

const Filter = () => {
    return (
        <div className={"container"}>
            <div className={"mainFilter"}>
                <div className={"mainFilterField searchField"}>
                    <SearchIcon/>
                    <input
                        type="text"
                        placeholder={"Поиск"}
                    />
                </div>
                <div className={"mainFilterField"}>
                    <CategoryIcon/>
                    <input
                        type="text"
                        placeholder={"Категория"}
                    />
                    <ChevronDownIcon/>
                </div>
                <div className={"mainFilterField"}>
                    <LocationIcon
                        fill={'#BECBD8'}
                    />
                    <input
                        type="text"
                        placeholder={"г.Ташкент"}
                    />
                    <ChevronDownIcon/>
                </div>
                <div className={"mainFilterField"}>
                    <CalendarIcon/>
                    <input
                        type="text"
                        placeholder={"20/06/2020"}
                    />
                </div>
                <div className={"mainFilterField"}>
                    <CalendarIcon/>
                    <input
                        type="text"
                        placeholder={"20/06/2020"}
                    />
                </div>
                <div className="searchButton">
                    <p>Показать</p>
                </div>
            </div>
        </div>
    );
};

export default Filter;
