import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';
import Information from '../components/Information';

const Page = ({children, title, breadcrumbs, withInformation}) => (
    <Container>
        {
            breadcrumbs && <Breadcrumbs catalog={breadcrumbs}/>
        }
        <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{title}</Text>
        {children}
        {
            withInformation && <Information />
        }
    </Container>
);

export default Page;
