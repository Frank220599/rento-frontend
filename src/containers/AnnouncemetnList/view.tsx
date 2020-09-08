import React from 'react';
import {useHistory} from "react-router-dom";
import AnnouncementItem from "components/AnnouncementItem";
import SortIcon from "assets/icons/SortIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ListViewIcon from "../../assets/icons/ListViewIcon";
import GridViewIcon from "../../assets/icons/GridViewIcon";
import BackIcon from "../../assets/icons/BackIcon";

const AnnouncementListView = ({announcements, back}) => {
    const history = useHistory();
    return (
        <div>
            <div className="listHeader">
                <div className="container">
                    {
                        back
                            ? <div className={"a-center cp"} onClick={() => history.goBack()}>
                                <BackIcon/>
                                <p style={{marginLeft: 10}}>Назад</p>
                            </div>
                            : <p>Последние добавленные + 1053</p>

                    }
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
                        announcements.data.map((announcement) => (
                            <AnnouncementItem
                                key={announcement.id}
                                id={announcement.id}
                                image={announcement.images[0]}
                                title={announcement.title}
                                price={`${announcement.price} у.е/месяц`}
                                date={announcement.created_at}
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

export default AnnouncementListView;
