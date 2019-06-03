import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {fetchCatalog} from '../actions';
import Flex from '../components/Flex';
import Page from './Page';

class CatalogPage extends Component {
    componentDidMount() {
        this.props.fetchCatalog(this.props.path);
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.catalog.name} - shop`}</title>
                <meta property='og:title' content='Users app' />
            </Helmet>
        );
    }

    render() {
        const {catalog} = this.props;

        const catalogLink = `/catalog/${catalog.id}`;

        return (
            <Page
                withInformation={true}
                title={catalog.name}
                breadcrumbs={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
            >
                <Flex justifyContent='space-between'>
                    <Flex flexDirection='column' width='30%'>
                        {/*<Filters*/}
                        {/*    filters={filters}*/}
                        {/*/>*/}
                    </Flex>
                    <Flex flexDirection='column' width='67%'>
                        {/*<CategoryList />*/}
                    </Flex>
                </Flex>
            </Page>
        );
    }
}

const mapStateToProps = ({catalog}, {match}) => ({catalog, path: match.url});

export default {
    loadData: ({dispatch}, {url}) => dispatch(fetchCatalog(url)),
    component: connect(mapStateToProps, {fetchCatalog})(CatalogPage),
};
