import {combineReducers} from 'redux';

import usersReducer from './usersReducer';
import adminsReducer from './adminsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    users: usersReducer,
    admins: adminsReducer,
    categories: categoriesReducer,
});
