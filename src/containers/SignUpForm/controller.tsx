import React from "react";
import {FormikBag, withFormik} from "formik";

import SignUpFormView from "./view";
import {FormValues} from "./types";


const SignUpFormController = withFormik<{}, FormValues>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
        phone: '',
    }),
    handleSubmit: (values: FormValues, formikBag: FormikBag<{}, FormValues>) => {

    },
})(SignUpFormView);

export default SignUpFormController;
