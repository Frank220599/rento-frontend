import React from "react";
import {FormikBag, withFormik} from "formik";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import SignInFormView from "./view";
import {FormValues} from "./types";

import {Login} from "../../store/actions/auth";
import {withRouter} from "react-router-dom";


const SignInFormController = withFormik<any, FormValues>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
    }),
    handleSubmit: (values: FormValues, {props}: FormikBag<any, FormValues>) => {
        props.Login(values, () => {
            props.history.push('/')
        })
    },
})(SignInFormView);

export default connect(
    null,
    dispatch => bindActionCreators({
        Login
    }, dispatch)
)(withRouter(SignInFormController));

