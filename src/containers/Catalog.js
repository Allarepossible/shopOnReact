import React from 'react';
import {connect} from 'react-redux';
import Path from 'components/Path';
import SortBar from 'components/SortBar';
import CategoryList from 'components/CategoryList';
import Filters from 'components/Filters';
import Flex from 'components/Flex';

import Page from './Page';

const Catalog = ({
    products, catalog, filters, setState,
}) => {
    const catalogLink = `/catalog/${catalog.id}`;
    if (products === 0) {
        setState(catalog.products, catalog.filters);
    }

    return (
        <Page
            withInformation={true}
            title={catalog.name}
            breadcrumbs={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
        >
            <Flex justifyContent='space-between'>
                <Flex flexDirection='column' width='30%'>
                    <Filters
                        filters={filters}
                    />
                </Flex>
                <Flex flexDirection='column' width='67%'>
                    <SortBar />
                    <CategoryList
                        catalogId={catalog.id}
                        countOfProducts={products.length}
                    />
                    {
                        products.length > 9
                        && <Path />
                    }
                </Flex>
            </Flex>
        </Page>
    );
};
const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    catalog: state.catalogs.find(catalog => catalog.id === ownProps.params.catalogId),
    filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
    setState: (products, filters) => {
        const payload = products;
        const payload2 = filters;

        dispatch({type: 'SET_STATE', payload});
        dispatch({type: 'SET_FILTERS', payload2});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
