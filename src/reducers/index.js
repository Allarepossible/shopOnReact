import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import catalogs from './catalogs';
import products from './products';
import activeSlide from './activeSlide';
import activeFilters from './activeFilters';
import filters from './filters';
import cart from './cart';

export default combineReducers({
    routing: routerReducer,
    products,
    activeSlide,
    catalogs,
    filters,
    cart,
    activeFilters,
});
