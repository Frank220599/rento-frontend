import React, {useState} from 'react';
import categories from "data/categories";
import CategoryItem from "../../components/CategoryItem";

const CategoriesSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggle = () => {
        setIsVisible(!isVisible)
    };

    return (
        <div className={"container"}>
            <div className="toggleCategories">
                <p onClick={toggle}>
                    {
                        isVisible
                            ? "закрыт категории"
                            : "смотреть объявление по категориям"
                    }
                </p>
            </div>
            <div className="mainCategoriesList">
                {
                    categories.map(category => (
                        <CategoryItem
                            name={category.name}
                            image={category.image}
                            backgroundColor={category.backgroundColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesSection;
