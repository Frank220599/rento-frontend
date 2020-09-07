import React from 'react';

import Input from "components/Input";
import MountainsIcon from "assets/icons/MountainsIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import DocumentItem from "../../../components/DocumentItem";

const AddAnnouncementPage = () => {
    return (
        <div>
            <div className="addTop">
                <img src={require('assets/images/cc.png')} alt=""/>
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
                            <textarea placeholder={'Заголовок объявление'}></textarea>
                            <span>максимум 42 символ</span>
                        </div>
                        <div>
                            <p>Под заголовок</p>
                            <textarea placeholder={'Под заголовок объявление'}></textarea>
                        </div>
                    </div>
                    <div className="annParams">
                        <Input
                            label={'Регион'}
                            value={'Узбекистан, Ташкент.'}
                            disabled
                            icon
                        />
                        <Input
                            label={'Категория'}
                            value={'Транспорт'}
                            disabled
                            icon
                        />
                        <Input
                            label={'Под категория'}
                            placeholder={'Тип транспорта'}
                            disabled
                            icon
                        />
                        <Input
                            label={'Регион'}
                            value={'Узбекистан, Ташкент.'}
                            disabled
                            icon
                        />
                        <Input
                            label={'Модель'}
                            value={'Узбекистан, Ташкент.'}
                            disabled
                            icon
                        />
                        <div className="annPrice">
                            <Input
                                label={'Цена'}
                                placeholder={'От (у.е)'}
                            />
                            <Input
                                label={'Цена за'}
                                placeholder={'Месяц'}
                                disabled
                                icon
                            />
                        </div>
                    </div>
                    <div className="addPhoto">
                        <div className="addPhotoLeft">
                            <div>
                                <p>Добавте фотография</p>
                                <span>Прикрепите фото объявлении</span>
                            </div>
                            <div>
                                <MountainsIcon/>
                                <button>
                                    <UploadIcon/>
                                    <p>Загрузить фото</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="addPhoto">
                        <div className="addPhotoLeft">
                            <div>
                                <p>Прикрепить документ</p>
                                <span>Прикрепить документ</span>
                            </div>
                            <div>
                                <MountainsIcon/>
                                <button>
                                    <UploadIcon/>
                                    <p>Загрузить фото</p>
                                </button>
                            </div>
                        </div>
                        <div className="itemList">
                            <DocumentItem/>
                            <DocumentItem/>
                            <DocumentItem/>
                            <DocumentItem/>
                        </div>
                    </div>
                    <div className="addAnnSave">
                        <button>Отмена</button>
                        <button type={"submit"}>Сохранить</button>
                    </div>
                    <div className="tip">
                        <p>
                            Уважаемый пользователь, после нажатия кнопки «Сохранить» введенное вами объявление появится
                            на
                            странице «Мои объявления». Перейдите на мою страницу объявлений для публикации.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAnnouncementPage;
