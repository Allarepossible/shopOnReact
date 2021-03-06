import 'idempotent-babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {isEmpty} from 'ramda';
import axios from 'axios';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import theme from '../theme';
import reducers from './reducers';
import {rootEpic} from './epics';
import Routes from './Routes';
import {saveStateCart, loadState} from '../helpers/localStorage';

const epicMiddleware = createEpicMiddleware();

const axiosInstance = axios.create({
    baseURL: '/api',
});
const initialState = !isEmpty(loadState()) ? {cart: loadState()} : {};
const store = createStore(
    reducers,
    {...window.INITIAL_STATE, ...initialState},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance), epicMiddleware))
);
epicMiddleware.run(rootEpic);

store.subscribe(() => {
    if (!isEmpty(store.getState().cart)) {
        saveStateCart(store.getState().cart);
    }
});

ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <div>{renderRoutes(Routes)}</div>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
    document.querySelector('#root')
);
