import React from 'react';

import Flex from '../components/Flex';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Information from '../components/Information';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';
import GlobalStyle from '../global-styles.js';

const Page = ({children, withInformation, title, breadcrumbs}) => (
    <Flex flexDirection='column'>
        <GlobalStyle />
        <Header />
        <Menu />
        <Container>
            {
                breadcrumbs && <Breadcrumbs catalog={breadcrumbs}/>
            }
            <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{title}</Text>
            {children}
        </Container>
        {
            withInformation && <Information />
        }
        <Footer />
    </Flex>
);

export default Page;
