import React from 'react';
import {connect} from 'react-redux';
import {find, sortBy} from 'lodash';
import styled from 'styled-components';
import Flex from 'components/Flex';
import Box from 'components/Box';
import MenuItem from 'components/MenuItem';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Menu = ({
    catalogs, ownProps, changeView, sort,
}) => {
    const changeCatalog = e => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = find(catalogs, {id: activeCategoryId});
        const sortProducts = sortBy(activeCatalog.products, [sort.name]);

        changeView(sortProducts, activeCatalog.filters);
    };

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
                                active={ownProps.active === catalog.id}
                                type="menu"
                                changeCatalog={changeCatalog}
                            />
                        ))
                    }
                </Flex>
            </Container>
        </Flex>
    );
};

const mapStateToProps = (state, ownProps) => ({
    sort: find(state.sort, 'active'),
    catalogs: state.catalogs,
    ownProps,
});

const mapDispatchToProps = dispatch => ({
    changeView: (products, filters) => {
        const payload = products;
        const payload2 = filters;

        dispatch({type: 'CHANGE_CATEGORY', payload});
        dispatch({type: 'SET_FILTERS', payload2});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
