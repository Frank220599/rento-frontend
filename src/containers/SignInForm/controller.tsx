import React from "react";
import {FormikBag, withFormik} from "formik";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import SignInFormView from "./view";
import {FormValues} from "./types";

import {Login} from "../../store/actions/auth";
import IAction from "../../store/types/IAction";

interface IProps {
    Login: IAction
}


const SignInFormController = withFormik<IProps, FormValues>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
    }),
    handleSubmit: (values: FormValues, {props}: FormikBag<IProps, FormValues>) => {
        props.Login(values)
    },
})(SignInFormView);

export default connect(
    null,
    dispatch => bindActionCreators({
        Login
    }, dispatch)
)(SignInFormController);

