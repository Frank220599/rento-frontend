import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FormikBag, withFormik} from "formik";

import SignUpFormView from "./view";
import {FormValues} from "./types";

import {Login} from "../../store/actions/auth";
import IAction from "../../store/types/IAction";

interface IProps {
    Login: IAction
}

const SignUpFormController = withFormik<IProps, FormValues>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
        phone: '',
        name: '',
        surname: ''
    }),
    handleSubmit: (values: FormValues, {props}: FormikBag<IProps, FormValues>) => {
        props.Login(values)
    },
})(SignUpFormView);

export default connect(
    null,
    dispatch => bindActionCreators({
        Login
    }, dispatch)
)(SignUpFormController);
