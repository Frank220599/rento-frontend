import React from 'react';
import {Form, Field, FormikProps} from "formik";
import {FormValues, Fields, PLACEHOLDERS} from "./types";
import {Link} from 'react-router-dom';
import ROUTES from "router/ROUTES";
import GoogleIcon from "assets/icons/GoogleIcon";
import FacebookOriginalIcon from "assets/icons/FacebookOrginalIcon";
import Circles from "assets/icons/Circles";

const SignInFormView = ({}: FormikProps<FormValues>) => {
    return (
        <div className={"signup"}>
            <Circles/>
            <p className={"signupHeading"}>Войти в аккаунт</p>
            <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum
                generator.</p>
            <div className={"socialAuth"}>
                <div>
                    <GoogleIcon/>
                    <span>Google</span>
                </div>
                <div>
                    <FacebookOriginalIcon/>
                    <span>Google</span>
                </div>
            </div>
            <Form className={"signupForm"}>
                <Field name={Fields.USERNAME} placeholder={PLACEHOLDERS.USERNAME}/>
                <Field name={Fields.PASSWORD} placeholder={PLACEHOLDERS.PASSWORD}/>
                <br/>
                <button type={"submit"}>Утверждать</button>
            </Form>
            <div className={"haveAnnAccount"}>
                <p>Вы еще не зарегистрировались?</p>
                <Link to={ROUTES.AUTH_SIGN_UP}>Завести аккаунт</Link>
            </div>
        </div>
    );
};

export default SignInFormView;
