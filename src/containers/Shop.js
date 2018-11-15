import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Information from 'components/Information';
import Menu from 'components/Menu';
import styled from 'styled-components';
import Text from 'components/Text';
import Box from 'components/Box';
import Flex from 'components/Flex';

import Page from './Page';

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Shop = () => (
    <Page>
        <Flex>
            <Container>
                <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>Главная</Text>
                <Flex>
                    <Information />
                </Flex>
            </Container>
        </Flex>
    </Page>
);

export default Shop;
