import React from 'react';

interface IProps {
    children: any
}

const MainLayout = ({children}: IProps) => {
    return (
        <div className={"layout"}>
            {children}
        </div>
    );
};

export default MainLayout;
