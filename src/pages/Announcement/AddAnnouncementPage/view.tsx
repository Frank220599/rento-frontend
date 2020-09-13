import React, {useState} from 'react';
import {connect} from "react-redux";
import {Form, Formik, Field} from "formik"
import {Modal} from 'antd';
import * as Yup from "yup";
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';

import Input from "components/Input";
import MountainsIcon from "assets/icons/MountainsIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import DocumentItem from "../../../components/DocumentItem";
import {AddAnnouncement} from "../../../store/actions/announcements";
import slugify from "slugify";

let AddAnnouncementPage = ({errors, categories, user, AddAnnouncement, history}) => {
    const [visible, setVisible] = useState(false);
    const [subCategory, setSubCategory] = useState<any>({});
    const [subCategoryModal, setSubCategoryModal] = useState(false);
    const [optionsModal, setOptionsModal] = useState(false);
    const [options, setOptions] = useState([]);
    const [modalContent, setModalContent] = useState<any>({});
    const [selectedCategory, setSelectedCategory] = useState(categories[0] || {});

    const openCategoryModal = () => {
        setVisible(true);
    };

    const [imgUrls, setImgUrls] = useState<any>([]);
    const [images, setImages] = useState<any>([]);

    const handleImgUpdate = (files) => {
        Object.keys(files).forEach(key => {
            setImgUrls(prevState => [[URL.createObjectURL(new Blob([files[key]]))], ...prevState])
            setImages(prevState => [files[key], ...prevState])
        })
    };

    let formData = (rawData) => {
        let form = new FormData();
        Object.keys(rawData).forEach((key) => {
            if (Array.isArray(rawData[key])) {
                let obj = rawData[key];
                for (let index in obj) {
                    if (key === "images") {
                        form.append(`${key}[]`, obj[index]);
                    } else {
                        form.append(`${key}[${index}]`, obj[index]);

                    }
                }
                return;
            }
            if (typeof rawData[key] === "object") {
                let obj = rawData[key];

                Object.keys(obj).forEach((id, index) => {
                    if (obj[id]) form.append(`${key}[${id}]`, obj[id]);
                });
                return;
            }
            form.append(key, rawData[key]);
        });
        return form;
    };

    return (
        <>
            <Modal
                width={"90%"}
                visible={visible}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setVisible(false)}
            >
                <div className={"filterOptions"}>
                    {
                        categories.map(item => (
                            <p className={"optionItem"} onClick={() => {
                                setSelectedCategory(item);
                                setVisible(false);
                                setSubCategory({})
                            }}>{item.title}</p>
                        ))
                    }
                </div>
            </Modal>
            <Modal
                width={"90%"}
                visible={subCategoryModal}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setSubCategoryModal(false)}
            >
                <div className={"filterOptions"}>

                    {
                        selectedCategory.children && selectedCategory.children.map(item => (
                            <p className={"optionItem"} onClick={() => {
                                setSubCategory(item);
                                setSubCategoryModal(false)
                            }}>{item.title}</p>
                        ))
                    }
                </div>
            </Modal>
            <Modal
                width={"90%"}
                visible={optionsModal}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setOptionsModal(false)}
            >
                <div className={"filterOptions"}>

                    {
                        modalContent.options && modalContent.options.map(item => (
                            <p className={"optionItem"} onClick={() => {
                                setOptionsModal(false);
                                setOptions(prevState => ({
                                    ...prevState,
                                    [modalContent.property_id]: item.value
                                }))
                            }}>{item.value}</p>
                        ))
                    }
                </div>
            </Modal>
            <Formik
                initialValues={{}}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required().min(2).max(42),
                    description: Yup.string().required().min(2).max(42),
                    price: Yup.string().required(),
                })}
                onSubmit={(values: any) => {
                    AddAnnouncement(
                        formData({
                            ...values,
                            images,
                            slug: slugify(values.title),
                            category_id: subCategory.id ? subCategory.id : selectedCategory.id,
                            properties: options || []
                        })
                    )
                }}
            >
                {props => (
                    <Form>
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
                                        <Field name={"title"}>
                                            {({field, form, meta}) => <textarea
                                                placeholder={'Заголовок объявление'} {...field}/>}
                                        </Field>
                                        <span>максимум 42 символ</span>
                                    </div>
                                    <div>
                                        <p>Под заголовок</p>
                                        <Field name={"description"}>
                                            {({field, form, meta}) => <textarea
                                                placeholder={'Под заголовок объявление'} {...field}/>}
                                        </Field>
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
                                        onClick={openCategoryModal}
                                        value={selectedCategory && selectedCategory.title}
                                        disabled
                                        icon
                                    />
                                    {
                                        selectedCategory.children && <Input
                                            onClick={() => setSubCategoryModal(true)}
                                            value={subCategory.title}
                                            label={'Под категория'}
                                            disabled
                                            icon
                                        />
                                    }
                                    <Input
                                        label={'Регион'}
                                        value={'Узбекистан, Ташкент.'}
                                        disabled
                                        icon
                                    />
                                    {
                                        subCategory.id &&
                                        subCategory.properties.map((item) => {
                                            if (item.type === "integer" || item.type === "float") {
                                                return <Input
                                                    onClick={() => {
                                                    }}
                                                    label={item.name}
                                                />
                                            } else {
                                                return <Input
                                                    onClick={() => {
                                                        setOptionsModal(true);
                                                        setModalContent(item);
                                                    }}
                                                    value={options[item.property_id]}
                                                    label={item.name}
                                                    disabled
                                                    icon
                                                />
                                            }
                                        })
                                    }
                                    <div className="annPrice">
                                        <Field name={"price"}>
                                            {({field, form, meta}) => <Input
                                                {...field}
                                                label={'Цена'}
                                                placeholder={'От (у.е)'}
                                            />}
                                        </Field>
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
                                            <label>
                                                <input
                                                    id="cover"
                                                    name="cover"
                                                    type="file"
                                                    hidden
                                                    multiple
                                                    maxLength={8}
                                                    onChange={(event) => {
                                                        handleImgUpdate(event.target.files);
                                                    }}
                                                    accept=".png, .jpg, .jpeg"
                                                />
                                                <UploadIcon/>
                                                <p>Загрузить фото</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="itemList">
                                        {imgUrls.map(imgUrl => (
                                            <img className={"previewImg"} src={imgUrl} alt=""/>
                                        ))}
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
                                            <label>
                                                <UploadIcon/>
                                                <p>Загрузить фото</p>
                                            </label>
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
                                    <button onClick={() => history.push('/')}>Отмена</button>
                                    <button type={"submit"}>Сохранить</button>
                                </div>
                                <div className="tip">
                                    <p>
                                        Уважаемый пользователь, после нажатия кнопки «Сохранить» введенное вами
                                        объявление
                                        появится
                                        на
                                        странице «Мои объявления». Перейдите на мою страницу объявлений для публикации.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

const mapStateToProps = ({categories, user}) => ({
    categories: categories.all.data,
    user: user.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    AddAnnouncement
}, dispatch);

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddAnnouncementPage));
