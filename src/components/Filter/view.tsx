import React, {useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {useSelector} from "react-redux";
import qs from "qs";

import SearchIcon from "assets/icons/SearchIcon";
import CategoryIcon from "assets/icons/CategoryIcon";
import ChevronDownIcon from "assets/icons/ChevronDownIcon";
import LocationIcon from "assets/icons/LocationIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";

const Filter = () => {

    const history = useHistory();
    const [title, setTitle] = useState(qs.parse(history.location.search, {ignoreQueryPrefix: true}).title);
    const [options, setOptions] = useState({});
    const [categoryItem, setCategoryItem] = useState<any>({});

    const {params: {categoryId}} = useRouteMatch();
    const category = useSelector(state => state.categories.all.data.find(category => category.id == categoryId));
    const categories = useSelector(state => state.categories.all.data);

    const submit = () => {
        const search = {
            title,
            category_id: categoryItem.id,
        };

        history.push({
            pathname: `/announcements/${categoryItem.id}`,
            search: qs.stringify({
                ...qs.parse(history.location.search, {ignoreQueryPrefix: true}),
                ...search
            })
        })

    };

    const setCategory = (categoryItem) => {
        console.log(categoryItem);
        setCategoryItem(categoryItem);
        setOptions({})
    };


    return (
        <div className={"container"}>
            <form className={"mainFilter"}>
                <div className={"mainFilterField searchField"}>
                    <SearchIcon/>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder={"Поиск"}
                    />
                </div>
                <div className={"mainFilterField"}>
                    <CategoryIcon/>
                    <div
                        onClick={() => setOptions({0: !options[0]})}
                    >
                        <input
                            disabled
                            value={Object.keys(categoryItem).length ? categoryItem.title : category && category.title}
                            type="text"
                            placeholder={"Категория"}
                        />
                    </div>
                    <ChevronDownIcon/>
                </div>
                <div className={"mainFilterField"}>
                    <LocationIcon
                        fill={'#BECBD8'}
                    />
                    <input
                        disabled
                        onClick={() => setOptions({1: true})}
                        type="text"
                        placeholder={"г.Ташкент"}
                    />
                    <ChevronDownIcon/>
                </div>
                {/*<div className={"mainFilterField"}>*/}
                {/*    <CalendarIcon/>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        placeholder={"20/06/2020"}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className={"mainFilterField"}>*/}
                {/*    <CalendarIcon/>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        placeholder={"20/06/2020"}*/}
                {/*    />*/}
                {/*</div>*/}
                <button type={"submit"} className="searchButton" onClick={submit}>
                    <p>Показать</p>
                </button>
            </form>
            <div className="filterOptions">
                {
                    options[0] && categories.map(category => (
                        <p onClick={() => setCategory(category)}>{category.title}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;
