import React from 'react';

import ProfileHeader from "components/ProfileHeader";
import ChatUserItem from "components/ChatUserItem";
import MessagesItem from "components/MessageItem";
import SendMessage from "components/SendMessage";

const ChatPage = () => {
    return (
        <div>
            <ProfileHeader/>
            <div className="container">
                <div className="chatContainer">
                    <div className="chatUsersWrapper">
                        <div className="chatUsers">
                            {
                                [...new Array(20)].map(() => (
                                    <ChatUserItem/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="linerGradient"/>
                    <div className="chatMessages">
                        <div className="messagesHeader">
                            <img src="" alt=""/>
                            <div className="headerInfo">
                                <p>Violeta</p>
                                <span>Был(а) в сети 09:41</span>
                            </div>
                        </div>
                        <div className="receivedMessages">
                            <MessagesItem
                                time={'12:23'}
                                message={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator"}
                                isSender={true}
                            />
                            <MessagesItem
                                time={'12:23'}
                                message={"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator"}
                                isSender={false}
                            />
                        </div>
                        <div className={"sendMsg"}>
                            <SendMessage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
