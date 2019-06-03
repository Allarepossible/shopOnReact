import {combineReducers} from 'redux';

import catalogReducer from './catalogReducer';
import adminsReducer from './adminsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    catalog: catalogReducer,
    admins: adminsReducer,
    categories: categoriesReducer,
});
