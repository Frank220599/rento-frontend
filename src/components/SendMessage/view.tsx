import React from 'react';
import MessageIcon from "assets/icons/MessageIcon";
import SendIcon from "assets/icons/SendIcon";

const SendMessage = ({addComment, setValue, value}) => {
    return (
        <div className={"sendMessage"}>
            <MessageIcon/>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={"Оставить комментарии"}
            />
            <button type={"submit"} style={{backgroundColor: 'transparent'}} onClick={addComment}>
                <SendIcon/>
            </button>
        </div>
    );
};

export default SendMessage;
