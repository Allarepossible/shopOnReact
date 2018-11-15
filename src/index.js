import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import {ThemeProvider} from 'styled-components';

import Cart from './containers/Cart';
import Shop from './containers/Shop';
import Search from './containers/Search';
import Catalog from './containers/Catalog';
import StaticPage from './containers/StaticPage';
import ProductPage from './containers/ProductPage';
import reducer from './reducers';
import theme from './theme';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={Shop} />
                <Route path='/search' component={Search} />
                <Route path='/cart' component={Cart} />
                <Route path='/catalog' component={StaticPage} />
                <Route path='/catalog/:catalogId' component={Catalog} />
                <Route path='/catalog/:catalogId/:productId' component={ProductPage} />
            </Router>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
