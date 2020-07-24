import React from 'react';
import MessageIcon from "assets/icons/MessageIcon";
import SendIcon from "assets/icons/SendIcon";

const SendMessage = () => {
    return (
        <div className={"sendMessage"}>
            <MessageIcon/>
            <input
                placeholder={"Оставить комментарии"}
            />
            <SendIcon/>
        </div>
    );
};

export default SendMessage;
