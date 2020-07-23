import React from 'react';

import AnnouncementItem from "components/AnnouncementItem";
import SortIcon from "assets/icons/SortIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ListViewIcon from "../../assets/icons/ListViewIcon";
import GridViewIcon from "../../assets/icons/GridViewIcon";
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";

const UserAnnouncementList = () => {
    return (
        <div className={"userAnnouncementList"}>
            <div className="listHeader">
                <div className="container">
                    <p>Ваше Объявление</p>
                    <div className={"userAnnouncementListActions"}>
                        <div>
                            <FavoriteIcon/>
                            <p>Избранные</p>
                        </div>
                        <div>
                            <EyeIcon/>
                            <p>Избранные</p>
                        </div>
                        <div>
                            <DeleteIcon/>
                            <p>Избранные</p>
                        </div>
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

export default UserAnnouncementList;
