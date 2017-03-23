import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './products';
import images from './images';
import activeFilters from './activeFilters';
import filters from './filters';

export default combineReducers({
    routing: routerReducer,
    images,
    products,
    filters,
    activeFilters
})
