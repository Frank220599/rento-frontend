import React from 'react';

import AnnouncementItem from "components/AnnouncementItem";
import SortIcon from "assets/icons/SortIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ListViewIcon from "../../assets/icons/ListViewIcon";
import GridViewIcon from "../../assets/icons/GridViewIcon";

const AnnouncementList = () => {
    return (
        <div>
            <div className="listHeader">
                <div className="container">
                    <p>Последние добавленные + 1053</p>
                    <div className="listHeaderFunctions">
                        <div>
                            <SortIcon/>
                            <p>Сотировать</p>
                        </div>
                        <div>
                            <FilterIcon/>
                            <p>Фильтр</p>
                        </div>
                        <ListViewIcon
                            style={{marginRight: 15}}
                        />
                        <GridViewIcon/>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"announcementList"}>
                    {
                        [...new Array(19)].map(() => (
                            <AnnouncementItem
                                image={require('assets/images/img.png')}
                                title={'53 кв/м оффис сдаётся в аренду в'}
                                price={'500 у.е/месяц'}
                                data={'20/12/2020'}
                            />
                        ))
                    }
                </div>
                <div className="showMore">
                    <div>Еще</div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementList;
