import React from 'react';
import {renderRoutes} from 'react-router-config';

import Header from './components/Header';
import {fetchCurrentUser} from './actions';

const App = ({route}) => (
    <div>
        <Header/>
        {renderRoutes(route.routes)}
    </div>
);

function loadData({dispatch}) {
    return dispatch(fetchCurrentUser());
}

export default {
    loadData,
    component: App,
};
