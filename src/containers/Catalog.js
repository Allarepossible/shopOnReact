import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Path from 'components/Path';
import SortBar from 'components/SortBar';
import Breadcrumbs from 'components/Breadcrumbs';
import Information from 'components/Information';
import CategoryList from 'components/CategoryList';
import Filters from 'components/Filters';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Text from 'components/Text';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Catalog = ({
    products, catalog, filters, setState,
}) => {
    const catalogLink = `/catalog/${catalog.id}`;
    if (products === 0) {
        setState(catalog.products, catalog.filters);
    }

    return (
        <Flex flexDirection='column'>
            <Header />
            <Menu active={catalog.id} />
            <Flex>
                <Container>
                    <Breadcrumbs
                        catalog={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
                    />
                    <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{catalog.name}</Text>
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
                </Container>
            </Flex>
            <Information />
            <Footer />
        </Flex>
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
