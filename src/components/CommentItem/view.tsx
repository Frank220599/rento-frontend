import React from 'react';

const CommentItem = ({time, text, user}) => {
    return (
        <div className={"commentItem"}>
            <div className="commentUser">
                <img src={require('assets/images/placeholderUser.png')} alt=""/>
                <div>
                    <p>{user && user.username}</p>
                    <span>{time}</span>
                </div>
            </div>
            <p className="commentText">{text}</p>
        </div>
    );
};

export default CommentItem;
