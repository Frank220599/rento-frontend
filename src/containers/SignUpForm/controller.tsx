import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FormikBag, withFormik} from "formik";

import SignUpFormView from "./view";
import {FormValues} from "./types";

import {Login} from "../../store/actions/auth";
import {withRouter} from "react-router-dom";


const SignUpFormController = withFormik<any, any>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
        phone: '',
        name: '',
        surname: ''
    }),
    handleSubmit: (values: FormValues, {props}: FormikBag<any, any>) => {
        props.Login(values, () => {
            props.history.push('/')
        })
    },
})(SignUpFormView);

export default connect(
    ({user}) => ({
        isLoading: user.isLoading
    }),
    dispatch => bindActionCreators({
        Login
    }, dispatch)
)(withRouter(SignUpFormController));
