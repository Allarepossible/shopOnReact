import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import Shop from './containers/Shop';
import Catalog from './containers/Catalog';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Shop} />
        <Route path='/catalog/:id' component={Catalog} />
      </Router>
    </Provider>,
    document.getElementById('root')
);
