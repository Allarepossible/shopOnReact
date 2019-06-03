import React from 'react';
import {renderRoutes} from 'react-router-config';

import Header from './components/Header';
import {fetchCategories} from './actions';
import GlobalStyle from '../global-styles.js';

const App = ({route}) => (
    <div>
        <GlobalStyle />
        <Header/>
        {renderRoutes(route.routes)}
    </div>
);

export default {
    loadData: ({dispatch}) => dispatch(fetchCategories()),
    component: App,
};
