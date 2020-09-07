import React from 'react';

const ParameterItem = ({name, value}) => {
    return (
        <div className={"parameterItem"}>
            <span>{name}:</span>
            <p>{value}</p>
        </div>
    );
};

export default ParameterItem;
