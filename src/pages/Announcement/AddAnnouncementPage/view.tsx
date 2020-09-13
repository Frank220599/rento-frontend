import React, {useState} from 'react';
import {connect} from "react-redux";
import {Form, Formik, FormikBag, withFormik, Field} from "formik"
import {Modal} from 'antd';
import * as Yup from "yup";
import {bindActionCreators} from "redux";
import 'antd/dist/antd.css';

import Input from "components/Input";
import MountainsIcon from "assets/icons/MountainsIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import DocumentItem from "../../../components/DocumentItem";
import {AddAnnouncement} from "../../../store/actions/announcements";
import slugify from "slugify";

let AddAnnouncementPage = ({errors, categories, user, AddAnnouncement}) => {
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

    let formData = (rawData) => {
        let form = new FormData();
        Object.keys(rawData).forEach((key) => {
            if (Array.isArray(rawData[key])) {
                let obj = rawData[key];
                for (let index in obj) {
                    form.append(`${key}[${index}]`, obj[index]);
                }
                return;
            }
            if (typeof rawData[key] === "object") {
                let obj = rawData[key];
                let i = 0;
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
                visible={visible}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setVisible(false)}
            >
                {
                    categories.map(item => (
                        <p onClick={() => {
                            setSelectedCategory(item);
                            setVisible(false);
                            setSubCategory({})
                        }}>{item.title}</p>
                    ))
                }
            </Modal>
            <Modal
                visible={subCategoryModal}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setSubCategoryModal(false)}
            >
                {
                    selectedCategory.children && selectedCategory.children.map(item => (
                        <p onClick={() => {
                            setSubCategory(item);
                            setSubCategoryModal(false)
                        }}>{item.title}</p>
                    ))
                }
            </Modal>
            <Modal
                visible={optionsModal}
                cancelButtonProps={{style: {display: "none"}}}
                okButtonProps={{style: {display: "none"}}}
                onCancel={() => setOptionsModal(false)}
            >
                {
                    modalContent.options && modalContent.options.map(item => (
                        <p onClick={() => {
                            setOptionsModal(false);
                            setOptions(prevState => ({
                                ...prevState,
                                [modalContent.property_id]: item.value
                            }))
                        }}>{item.value}</p>
                    ))
                }
            </Modal>
            <Formik
                initialValues={{}}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required().min(2).max(42),
                    description: Yup.string().required().min(2).max(42),
                    price: Yup.string().required(),
                })}
                onSubmit={(values: any) => {
                    console.log(options);
                    AddAnnouncement(formData({
                        ...values,
                        slug: slugify(values.title),
                        category_id: subCategory.id ? subCategory.id : selectedCategory.id,
                        user_id: user.id,
                        properties: options || []
                    }))
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAnnouncementPage);
