import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Footer = () => {
    const categories = useSelector(state => state.categories.all.data);

    return (
        categories.length && <div className={"footer"}>
            <div className={"bordered"}>
                <div className={"container"}>
                    <div className="footerCategories">
                        <div className="footerCategory">
                            <p className={"footerCategoryTitle"}>{categories[0].title}</p>
                            <div className="footerCategoryLists">
                                <div className="footerCategoryList">
                                    {
                                        categories[0].children && categories[0].children.map(item => (
                                            <Link to={`/announcements/${item.id}`}>{item.title}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className="footerCategories">
                    <div className="footerCategory">
                        <p className={"footerCategoryTitle"}>{categories[1].title}</p>
                        <div className={"footerCategoryLists"}>
                            <div className="footerCategoryList">
                                {
                                    categories[1].children && categories[1].children.map(item => (
                                        <Link to={`/announcements/${item.id}`}>{item.title}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="footerCategory">
                        <p className={"footerCategoryTitle"}>Электроника</p>
                        <div className={"footerCategoryLists"}>
                            <div className="footerCategoryList">
                                <p>Аудиотехника</p>
                                <p>Компьютеры</p>
                                <p>Встраиваемая техника</p>
                                <p>Гаджеты, планшеты и аксессуары</p>
                                <p>Игры и игровые приставки</p>
                                <p>Климатическое оборудование</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
