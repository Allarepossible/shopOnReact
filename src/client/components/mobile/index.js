import React from 'react';

import Flex from '../common/Flex';
import Menu from './components/Menu';
import Header from './components/Header';

const TouchLayout = () => (
    <Flex background='white' mb={15}>
        <Header />
        <Menu />
    </Flex>
);

export default TouchLayout;
