import {FormikBag, withFormik} from "formik";
import {connect} from "react-redux";

import ProfileSettingFormView from "./view";
import {FormValues} from "./types";
import {bindActionCreators} from "redux";
import {UpdateProfile} from "../../store/actions/user";

const ProfileSettingFormController = withFormik<any, FormValues>({
    mapPropsToValues: props => ({
        phone: props.user.phone,
        password: '',
        username: props.user.username,
        email: props.user.email,
    }),
    handleSubmit: function (values: FormValues, formikBag: FormikBag<{}, FormValues>) {

    }

})(ProfileSettingFormView);

const mapStateToProps = ({user}) => ({
    user: user.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    UpdateProfile
}, dispatch);

export default connect(
    mapStateToProps
)(ProfileSettingFormController);
