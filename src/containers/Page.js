import React from 'react';
import Flex from 'components/Flex';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import GlobalStyle from '../global-styles.js';

const Page = ({children}) => (
    <Flex flexDirection='column'>
        <GlobalStyle />
        <Header />
        <Menu />
        {children}
        <Footer />
    </Flex>
);

export default Page;
