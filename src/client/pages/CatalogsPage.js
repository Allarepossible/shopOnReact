import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {fetchCatalog} from '../actions';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';
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

const CatalogsPage = ({catalogs, fetchCatalog: fetch}) => (
    <Page title='Каталог' breadcrumbs={[{name: 'Каталог', link: '/catalogs/'}]}>
        <Flex mb='100px' justifyContent='space-between' flexWrap='wrap'>
            {
                catalogs && catalogs.map((item, i) => (
                    <Box mb={3} key={i}>
                        <CatalogLink
                            to={`/catalog/${item.id}`}
                            data={item.name}
                            onClick={fetch.bind(this, `/catalog/${item.id}`)}
                        >
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

const mapStateToProps = ({categories}) => ({catalogs: categories});

export default {
    component: connect(mapStateToProps, {fetchCatalog})(CatalogsPage),
};
