import React from 'react';
import ClockIcon from "assets/icons/ClockIcon";

interface IProps {
    isSender: boolean;
    message: string;
    time: string;
}

const MessagesItem = ({time, isSender, message}: IProps) => {
    return (
        <div className={`messageItem ${!isSender && "alignRight"}`}>
            <div className={"lastMessageTime"}>
                <ClockIcon/>
                <p>{time}</p>
            </div>
            <p className={`messageItemText ${!isSender && "rightBorder"}`}>{message}</p>
        </div>
    );
};

export default MessagesItem;
