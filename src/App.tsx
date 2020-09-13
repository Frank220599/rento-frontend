import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import AppRouter from "router/AppRouter";
import {GetCategories} from "store/actions/categories";
import {GetProfile} from "./store/actions/user";
import api from 'store/services/api';
import {store} from "./index";

function App({GetCategories, GetProfile, user}) {
    useEffect(() => {
        api.setToken(store);
        GetCategories();
        if (!user.id) {
            GetProfile()
        }
    }, []);

    return (
        <AppRouter/>
    );
}


const mapStateToProps = ({categories, user}) => ({
    categories: categories.all,
    user: user.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetCategories,
    GetProfile
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
