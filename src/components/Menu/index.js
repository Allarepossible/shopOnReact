import React from 'react';
import {connect} from 'react-redux';
import {find, sortBy} from 'lodash';
import styled from 'styled-components';

import Flex from '../Flex';
import Box from '../Box';
import MenuItem from '../MenuItem';
import {fetchData} from '../../actions';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Menu = ({catalogs, ownProps}) => (
    <Flex background='white' mb={15}>
        <Container>
            <Flex justifyContent='space-between'>
                {
                    catalogs.map((catalog, i) => (
                        <MenuItem
                            key={i}
                            name={catalog.name}
                            id={catalog.id}
                            active={ownProps.active === catalog.id}
                            type="menu"
                        />
                    ))
                }
            </Flex>
        </Container>
    </Flex>
);

const mapStateToProps = (state, ownProps) => ({
    sort: find(state.sort, 'active'),
    catalogs: state.catalogs,
    ownProps,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
