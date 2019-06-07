import React from 'react';
import {connect} from 'react-redux';

import Flex from '../../../common/Flex';

const Menu = ({catalogs}) => (
    <Flex background='white' mb={15}>
        Menu
    </Flex>
);

const mapStateToProps = ({categories}) => ({
    catalogs: categories,
});

export default connect(mapStateToProps)(Menu);
