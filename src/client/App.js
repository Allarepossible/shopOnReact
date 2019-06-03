import React from 'react';
import {renderRoutes} from 'react-router-config';

import Header from './components/Header';
import {fetchCategories} from './actions';
import GlobalStyle from '../global-styles.js';
import Menu from './components/Menu';
import Flex from './components/Flex';

const App = ({route}) => (
    <Flex flexDirection='column'>
        <GlobalStyle />
        <Header/>
        <Menu />
        {renderRoutes(route.routes)}
    </Flex>
);

export default {
    loadData: ({dispatch}) => dispatch(fetchCategories()),
    component: App,
};
