import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Breadcrumbs from 'components/Breadcrumbs';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Text from 'components/Text';

import Page from './Page';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const CatalogLink = styled(Link)`
    font-size: 16px;

    display: flex;
    flex-direction: column;

    text-decoration: none;

    color: #484848;

    align-items: center;
`;

const Image = styled.img`
    max-width: 95%;
    max-height: 95%;
`;

const Wrap = styled(Flex)`
    width: 250px;
    height: 250px;
    margin-bottom: 10px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;

    align-items: center;
    justify-content: center;
`;

const StaticPage = ({catalog, catalogs, changeView}) => {
    const changeCatalog = e => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalog.filter(item => item.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products;

        changeView(sortProducts, activeCatalog.filters);
    };

    return (
        <Page>
            <Container>
                <Breadcrumbs catalog={[{name: 'Каталог', link: '/catalog/'}]} />
                <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>Каталог</Text>
                <Flex marginBottom='100px' justifyContent='space-between' flexWrap='wrap'>
                    {
                        catalogs.map((item, i) => (
                            <Box mb={3} key={i}>
                                <CatalogLink to={`/catalog/${item.link}`} onClick={changeCatalog} data={item.link}>
                                    <Wrap>
                                        <Image src={item.img} alt={item.name} />
                                    </Wrap>
                                    <Text>{item.name}</Text>
                                </CatalogLink>
                            </Box>
                        ))
                    }
                </Flex>
            </Container>
        </Page>
    );
};

const mapStateToProps = (state, ownProps) => ({
    catalog: state.catalogs,
    products: state.products,
    catalogs: state.catalogs.map(catalog => ({
        name: catalog.name,
        link: catalog.id,
        img: catalog.img,
    })),
    ownProps,
});

const mapDispatchToProps = dispatch => ({
    changeView: (products, filters) => {
        const payload = products;
        const payload2 = filters;

        dispatch({type: 'SET_FILTERS', payload2});
        dispatch({type: 'CHANGE_CATEGORY', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
