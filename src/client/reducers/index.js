import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import productReducer from './productReducer';
import adminsReducer from './adminsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    product: productReducer,
    admins: adminsReducer,
    categories: categoriesReducer,
});
