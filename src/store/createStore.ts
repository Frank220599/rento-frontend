import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import ReactotronConfig from './ReactotronConfig'
import rootReducer from './reducers';
import rootSaga from "./sagas";

export default (initialState = {}) => {

    const sagaMonitor = ReactotronConfig.createSagaMonitor();
    const sagaMiddleware = createSagaMiddleware({sagaMonitor});

    let store;


    store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware), ReactotronConfig.createEnhancer())
    );

    sagaMiddleware.run(rootSaga);

    return store;

};
