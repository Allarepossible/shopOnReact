import 'idempotent-babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import theme from '../theme';
import reducers from './reducers';
import Routes from './Routes';

const axiosInstance = axios.create({
    baseURL: '/api',
});

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

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
