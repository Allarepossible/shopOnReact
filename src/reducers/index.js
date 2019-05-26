import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import catalog from './catalog';
import products from './products';
import activeSlide from './activeSlide';
import activeFilters from './activeFilters';
import filters from './filters';
import cart from './cart';
import page from './page';

export default combineReducers({
    routing: routerReducer,
    products,
    activeSlide,
    catalog,
    filters,
    cart,
    page,
    activeFilters,
});
