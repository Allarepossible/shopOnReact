import {combineReducers} from 'redux';

import catalog from './catalog';
import catalogs from './catalogs';
import products from './products';
import activeSlide from './activeSlide';
import activeFilters from './activeFilters';
import filters from './filters';
import cart from './cart';
import page from './page';

export default combineReducers({
    products,
    activeSlide,
    catalog,
    catalogs,
    filters,
    cart,
    page,
    activeFilters,
});
