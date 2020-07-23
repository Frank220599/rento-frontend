import {FormikBag, withFormik} from "formik";

import ProfileSettingFormView from "./view";
import {FormValues} from "./types";

const ProfileSettingFormController = withFormik<{}, FormValues>({
    mapPropsToValues: props => ({
        phone: '',
        password: '',
        username: '',
        email: '',
    }),
    handleSubmit: function (values: FormValues, formikBag: FormikBag<{}, FormValues>) {

    }

})(ProfileSettingFormView);

export default ProfileSettingFormController;
