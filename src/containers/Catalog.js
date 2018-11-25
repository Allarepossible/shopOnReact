import React from 'react';
import {connect} from 'react-redux';

import CategoryList from '../components/CategoryList';
import Filters from '../components/Filters';
import Flex from '../components/Flex';

import Page from './Page';

const Catalog = ({catalog}) => {
    const catalogLink = `/catalog/${catalog.id}`;

    return (
        <Page
            withInformation={true}
            title={catalog.name}
            breadcrumbs={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
        >
            <Flex justifyContent='space-between'>
                <Flex flexDirection='column' width='30%'>
                    <Filters
                        filters={catalog.filters}
                    />
                </Flex>
                <Flex flexDirection='column' width='67%'>
                    <CategoryList
                        products={catalog.products}
                    />
                </Flex>
            </Flex>
        </Page>
    );
};

const mapStateToProps = (state, {params}) => ({
    catalog: state.catalogs.find(catalog => catalog.id === params.catalogId),
});

export default connect(mapStateToProps)(Catalog);
