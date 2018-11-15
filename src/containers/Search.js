import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Products from 'components/CategoryList';
import Information from 'components/Information';
import Menu from 'components/Menu';
import Path from 'components/Path';
import Breadcrumbs from 'components/Breadcrumbs';
import SortBar from 'components/SortBar';
import Filters from 'components/Filters';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Text from 'components/Text';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Search = ({
    products, catalog, filters, setState,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }

    return (
        <Flex flexDirection='column'>
            <Header />
            <Menu />
            <Flex>
                <Container>
                    <Breadcrumbs catalog={[{name: 'Поиск', link: '/search'}]} />
                    <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{catalog.name}</Text>
                    <Flex>
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
                    </Flex>
                </Container>
            </Flex>
            <Information />
            <Footer />
        </Flex>
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
