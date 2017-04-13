import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cart from './containers/Cart';
import Shop from './containers/Shop';
import Search from './containers/Search';
import Catalog from './containers/Catalog';
import StaticPage from './containers/StaticPage';
import ProductPage from './containers/ProductPage';


export default () => {
    return (
        <Route path="/" component={Shop}>
            <IndexRoute component={Shop} />
            <Route path='/search' component={Search}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/catalog' component={StaticPage}/>
            <Route path='/catalog/:catalogId' component={Catalog}/>
            <Route path='/catalog/:catalogId/:productId' component={ProductPage}/>
        </Route>
    );
};
