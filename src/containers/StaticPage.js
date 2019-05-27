import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import styled from 'styled-components';

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

const StaticPage = ({catalogs}) => (
    <Page title='Каталог' breadcrumbs={[{name: 'Каталог', link: '/catalog/'}]}>
        <Flex mb='100px' justifyContent='space-between' flexWrap='wrap'>
            {
                catalogs.map((item, i) => (
                    <Box mb={3} key={i}>
                        <CatalogLink to={`/catalog/${item.link}`} data={item.link}>
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

const mapStateToProps = (state, ownProps) => ({
    catalogs: state.catalogs,
    ownProps,
});

export default connect(mapStateToProps)(StaticPage);
