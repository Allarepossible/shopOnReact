import React from 'react';
import {connect} from 'react-redux';

import Flex from '../../../common/Flex';
import MenuItem from '../../../MenuItem';
import Container from '../../../common/Container';

const Menu = ({catalogs}) => (
    <Flex background='white' mb={15}>
        <Container>
            <Flex justifyContent='space-between' flex={1}>
                {
                    catalogs.map((catalog, i) => (
                        <MenuItem
                            key={i}
                            name={catalog.name}
                            id={catalog.id}
                            type="menu"
                        />
                    ))
                }
            </Flex>
        </Container>
    </Flex>
);

const mapStateToProps = ({categories}) => ({
    catalogs: categories,
});

export default connect(mapStateToProps)(Menu);
