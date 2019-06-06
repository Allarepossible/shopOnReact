import React from 'react';
import {renderRoutes} from 'react-router-config';

import Header from './components/Header';
import {fetchCategories} from './actions';
import GlobalStyle from '../helpers/global-styles';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Flex from './components/Flex';

const App = ({route}) => (
    <Flex flexDirection='column'>
        <GlobalStyle />
        <Header/>
        <Menu />
        {renderRoutes(route.routes)}
        <Footer />
    </Flex>
);

export default {
    loadData: ({dispatch}) => dispatch(fetchCategories()),
    component: App,
};
