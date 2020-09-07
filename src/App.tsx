import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import AppRouter from "router/AppRouter";
import {GetCategories} from "store/actions/categories";

function App({GetCategories}) {
    useEffect(() => {
        GetCategories()
    }, []);
    return (
        <AppRouter/>
    );
}


const mapStateToProps = ({categories}) => ({
    categories: categories.all
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetCategories
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
