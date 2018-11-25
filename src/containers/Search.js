import React from 'react';
import {connect} from 'react-redux';

import Products from '../components/CategoryList';
import Path from '../components/Path';
import SortBar from '../components/SortBar';
import Filters from '../components/Filters';
import Flex from '../components/Flex';

import Page from './Page';

const Search = ({
    products, catalog, filters, setState,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }

    return (
        <Page
            withInformation='true'
            title={catalog.name}
            breadcrumbs={[{name: 'Поиск', link: '/search'}]}
        >
            <Flex flexDirection='column' width='30%'>
                <Filters
                    filters={filters}
                />
            </Flex>
            <Flex flexDirection='column' width='67%'>
                <SortBar />
                <Products
                    catalogId={catalog.id}
                />
                <Path />
            </Flex>
        </Page>
    );
};

export default connect(
    (state, ownProps) => ({
        products: state.products,
        catalog: state.catalogs.find(catalog => catalog.id === ownProps.params.catalogId),
        filters: state.filters,
    }),
    dispatch => ({
        setState: products => {
            const payload = products;
            dispatch({type: 'SET_STATE', payload});
        },
    })
)(Search);
