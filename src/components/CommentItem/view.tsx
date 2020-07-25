import React from 'react';

const CommentItem = () => {
    return (
        <div className={"commentItem"}>
            <div className="commentUser">
                <img src={require('assets/images/placeholderUser.png')} alt=""/>
                <div>
                    <p>Алекса</p>
                    <span>ID:1290481-024</span>
                </div>
            </div>
            <p className="commentText">
                Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из
            </p>
        </div>
    );
};

export default CommentItem;
