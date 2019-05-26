import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'ramda';

import CategoryList from '../components/CategoryList';
import Filters from '../components/Filters';
import Flex from '../components/Flex';
import Page from './Page';
import {fetchData} from '../actions';

class Catalog extends Component {
    componentDidMount() {
        const {id} = this.props;

        this.props.fetchData(id);
    }

    render() {
        const {catalog, products, filters} = this.props;
        if (isEmpty(catalog)) {
            return (
                <div>Loading...</div>
            )
        }
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
                            filters={filters}
                        />
                    </Flex>
                    <Flex flexDirection='column' width='67%'>
                        <CategoryList
                            products={products}
                        />
                    </Flex>
                </Flex>
            </Page>
        );
    }
}

const mapStateToProps = (state, {params}) => ({
    id: params.catalogId,
    catalog: state.catalog,
    products: state.products,
    filters: state.filters,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
