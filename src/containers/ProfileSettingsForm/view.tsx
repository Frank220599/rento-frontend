import React from 'react';
import {FormikProps, Form, Field, FieldProps} from "formik";

import {Fields, FormValues, PLACEHOLDERS} from "./types";
import Input from "components/Input";
import Circles from "../../assets/icons/Circles";

interface CustomInputProps {
    name: string,
    label: string,
    placeholder: string;
}

const CustomInput = ({name, label, placeholder}: CustomInputProps) => (
    <Field name={name}>
        {({field}: FieldProps) => (
            <Input
                label={label}
                name={field.name}
                onBlur={field.onBlur}
                onChange={field.onChange}
                value={field.value}
                placeholder={placeholder}
            />
        )}
    </Field>
);

const ProfileSettingFormView = ({}: FormikProps<FormValues>) => {
    return (
        <Form className={"settingsForm"}>
            <Circles/>
            <div className={"changeAvatar"}>
                <img src="" alt=""/>
                <button>Именить аватар</button>
            </div>
            <CustomInput
                name={Fields.USERNAME}
                label={'Имя пользователя'}
                placeholder={PLACEHOLDERS.USERNAME}
            />
            <CustomInput
                name={Fields.EMAIL}
                label={'Email'}
                placeholder={PLACEHOLDERS.EMAIL}
            />
            <CustomInput
                name={Fields.PHONE}
                label={'Телефонный номер'}
                placeholder={PLACEHOLDERS.PASSWORD}
            />
            <CustomInput
                name={Fields.PASSWORD}
                label={'Пароль'}
                placeholder={PLACEHOLDERS.PASSWORD}
            />
            <button type={"submit"}>Сохранить</button>
        </Form>
    );
};

export default ProfileSettingFormView;
