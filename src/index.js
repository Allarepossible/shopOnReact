import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import {Cart, Shop, Search, Catalog, StaticPage, ProductPage, App} from './pages';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

function onUpdate() {

}

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} onUpdate={onUpdate}>
          <Route path="/" component={Shop} />
          <Route path="/app" component={App} />
          <Route path='/search' component={Search} />
          <Route path='/cart' component={Cart} />
          <Route path='/catalog' component={StaticPage} />
          <Route path='/catalog/:catalogId' component={Catalog} />
          <Route path='/catalog/:catalogId/:productId' component={ProductPage} />
      </Router>
    </Provider>,
    document.getElementById('root')
);


