import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './App';
import * as serviceWorker from './serviceWorker';

import createStore from "./store/createStore";

// import 'antd/dist/antd.css';
import "normalize.css"
import "assets/styles/styles.scss"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const store = createStore();


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
