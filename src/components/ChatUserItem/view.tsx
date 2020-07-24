import React from 'react';
import ClockIcon from "../../assets/icons/ClockIcon";

const ChatUserItem = () => {
    return (
        <div className={"chatUserItem"}>
            <img src="" alt=""/>
            <div>
                <div className={"chatUserInfo"}>
                    <p>Elena Barisovna</p>
                    <div className={"lastMessageTime"}>
                        <ClockIcon/>
                        <p>12:23</p>
                    </div>
                </div>
                <span>Ока может договоримся</span>
            </div>
        </div>
    );
};

export default ChatUserItem;
