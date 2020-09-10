import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import AppRouter from "router/AppRouter";
import {GetCategories} from "store/actions/categories";
import {GetProfile} from "./store/actions/user";

function App({GetCategories, GetProfile, user}) {
    useEffect(() => {
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
