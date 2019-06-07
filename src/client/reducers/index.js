import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import catalogReducer from './catalogReducer';
import productReducer from './productReducer';
import adminsReducer from './adminsReducer';
import categoriesReducer from './categoriesReducer';
import userAgentReducer from './userAgentReducer';

export default combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    products: productReducer,
    admins: adminsReducer,
    isMobile: userAgentReducer,
    categories: categoriesReducer,
});
