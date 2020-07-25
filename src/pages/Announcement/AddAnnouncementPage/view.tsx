import React from 'react';

const AddAnnouncementPage = () => {
    return (
        <div>
            <div className="addTop">
                <div className="container">
                    <p>Создайте объявление</p>
                    <span>Достигайте своих целей</span>
                </div>
            </div>
            <div className="container">
                <div className="annForm">
                    <div className="annType">
                        <div className={"selected"}>
                            <p>Аренда</p>
                        </div>
                        <div>
                            <p>С выкупом</p>
                        </div>
                        <div>
                            <p>Продаётся</p>
                        </div>
                        <div>
                            <p>Отдам даром</p>
                        </div>
                    </div>
                    <div className="topForm">
                        <div>
                            <p>Заголовок</p>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAnnouncementPage;
