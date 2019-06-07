import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/reducers';

export default req => {
    const axiosInstance = axios.create({
        baseURL: 'http://redux-react-shop.herokuapp.com',
        headers: {
            cookie: req.get('cookie') || '',
        },
    });
    const store = createStore(
        reducers,
        {isMobile: req.useragent.isMobile},
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
    );

    return store;
};
