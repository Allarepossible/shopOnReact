import React from 'react';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import universal from 'react-universal-component';

import {fetchCategories} from './actions';
import GlobalStyle from '../helpers/global-styles';
import Footer from './components/Footer';
import Flex from './components/common/Flex';

const App = ({isMobile, route}) => {
    const folder = isMobile ? 'mobile' : 'desktop';

    const Layout = universal(import(`./components/${folder}/index`), {
        minDelay: 200,
    });

    return (
        <Flex flexDirection='column'>
            <GlobalStyle />
            <Layout/>
            {renderRoutes(route.routes)}
            <Footer />
        </Flex>
    );
};

const mapStateToProps = ({isMobile}, ownProps) => ({isMobile, ...ownProps});

export default {
    loadData: ({dispatch}) => dispatch(fetchCategories()),
    component: connect(mapStateToProps)(App),
};
