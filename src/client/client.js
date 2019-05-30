import 'idempotent-babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './reducers';
import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <div>{renderRoutes(Routes)}</div>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
