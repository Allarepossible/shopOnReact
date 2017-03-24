import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import catalogs from './catalogs';
import products from './products';
import images from './images';
import activeFilters from './activeFilters';
import filters from './filters';
import views from './views';

export default combineReducers({
    routing: routerReducer,
    images,
    products,
    catalogs,
    filters,
    views,
    activeFilters
})
