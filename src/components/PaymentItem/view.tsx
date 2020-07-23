import React from 'react';

interface IProps {
    image: string;
}

const PaymentItem = ({image}: IProps) => {
    return (
        <div className={"paymentItem"}>
            <img src={image} alt=""/>
        </div>
    );
};

export default PaymentItem;
