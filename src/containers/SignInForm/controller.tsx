import React from "react";
import {FormikBag, withFormik} from "formik";

import SignInFormView from "./view";
import {FormValues} from "./types";


const SignInFormController = withFormik<{}, FormValues>({
    mapPropsToValues: props => ({
        username: '',
        password: '',
    }),
    handleSubmit: (values: FormValues, formikBag: FormikBag<{}, FormValues>) => {

    },
})(SignInFormView);

export default SignInFormController;
