import React, {useEffect} from 'react';
import CategoriesSectionView from './view';

const CategoriesSectionController = ({categories}) => {
    return (
        <CategoriesSectionView
            categories={categories}
        />
    );
};

export default CategoriesSectionController;
