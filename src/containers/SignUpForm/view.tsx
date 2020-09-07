import React from 'react';
import {Form, Field, FormikProps} from "formik";
import {FormValues, Fields, PLACEHOLDERS} from "./types";
import {Link} from 'react-router-dom';
import ROUTES from "router/ROUTES";
import GoogleIcon from "assets/icons/GoogleIcon";
import FacebookOriginalIcon from "assets/icons/FacebookOrginalIcon";
import Circles from "assets/icons/Circles";

const SignUpFormView = ({}: FormikProps<FormValues>) => {
    return (
        <div className={"signup"}>
            <Circles/>
            <p className={"signupHeading"}>Завести аккаунт</p>
            <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum
                generator.</p>
            <div className={"socialAuth"}>
                {/*<div>*/}
                {/*    <GoogleIcon/>*/}
                {/*    <span>Google</span>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <FacebookOriginalIcon/>*/}
                {/*    <span>Google</span>*/}
                {/*</div>*/}
            </div>
            <Form className={"signupForm"}>
                <Field name={Fields.PHONE} placeholder={PLACEHOLDERS.PHONE}/>
                <Field name={Fields.USERNAME} placeholder={PLACEHOLDERS.USERNAME}/>
                <Field name={Fields.PASSWORD} placeholder={PLACEHOLDERS.PASSWORD}/>
                <p>Регистрируясь вы принимаете <Link to={''}>Условия<br/>использования</Link> сайта</p>
                <button type={"submit"}>Утверждать</button>
            </Form>
            <div className={"haveAnnAccount"}>
                <p>Уже есть аккаунт?</p>
                <Link to={ROUTES.AUTH_SIGN_IN}>Авторизоваться</Link>
            </div>
        </div>
    );
};

export default SignUpFormView;
