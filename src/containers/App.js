import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Cart from './Cart';
import Shop from './Shop';
import Search from './Search';
import Catalog from './Catalog';
import StaticPage from './StaticPage';
import ProductPage from './ProductPage';


const App = () => (
    <Router history={browserHistory}>
        <div>
            <Route path='/' component={Shop} />
            <Route path='/search' component={Search} />
            <Route path='/cart' component={Cart} />
            <Route path='/catalog' component={StaticPage} />
            <Route path='/catalog/:catalogId' component={Catalog} />
            <Route path='/catalog/:catalogId/:productId' component={ProductPage} />
        </div>
    </Router>
);

export default App;
