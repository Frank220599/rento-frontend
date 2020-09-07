import React, {useState} from 'react';
import CategoryItem from "../../components/CategoryItem";

const CategoriesSectionView = ({categories}) => {
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
                    isVisible && categories.data.map(category => (
                        <CategoryItem
                            key={category.id}
                            id={category.id}
                            name={category.title}
                            image={category.image_url}
                            backgroundColor={category.color}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesSectionView;
