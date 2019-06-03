import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Flex from './Flex';
import Box from './Box';
import MenuItem from './MenuItem';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Header = ({catalogs}) => {

    return (
        <Flex background='white' mb={15}>
            <Container>
                <Flex justifyContent='space-between'>
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
};

const mapStateToProps = ({categories}) => ({
    catalogs: categories,
});

export default connect(mapStateToProps)(Header);
