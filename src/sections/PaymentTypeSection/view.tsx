import React from 'react';
import PaymentItem from "components/PaymentItem";
import Circles from "../../assets/icons/Circles";

const PaymentTypeSection = () => {
    return (
        <div className={"container paymentTypesWrapper"}>
            <Circles/>
            <p>Пополнение баланса:</p>
            <p className={"subTextPayment"}>Выберите вам удобнее формы оплаты</p>
            <div className={"paymentTypes"}>
                <PaymentItem
                    image={require('assets/images/click.png')}
                />
                <PaymentItem
                    image={require('assets/images/payme.png')}
                />
                <PaymentItem
                    image={require('assets/images/upay.png')}
                />
            </div>
        </div>
    );
};

export default PaymentTypeSection;
