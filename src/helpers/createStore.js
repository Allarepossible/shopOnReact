import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootEpic from '../client/epics';

import reducers from '../client/reducers';

const epicMiddleware = createEpicMiddleware();

export default req => {
    const axiosInstance = axios.create({
        baseURL: 'http://redux-react-shop.herokuapp.com',
        headers: {
            cookie: req.get('cookie') || '',
        },
    });
    const store = createStore(
        reducers,
        {},
        composeWithDevTools(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
};
