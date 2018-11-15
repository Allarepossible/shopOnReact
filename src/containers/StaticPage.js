import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styled from 'styled-components';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Text from 'components/Text';

import Page from './Page';

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
        <Page title='Каталог' breadcrumbs={[{name: 'Каталог', link: '/catalog/'}]}>
            <Flex mb='100px' justifyContent='space-between' flexWrap='wrap'>
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
