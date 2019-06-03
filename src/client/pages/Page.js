import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';

const Page = ({children, title, breadcrumbs}) => (
    <Container>
        {
            breadcrumbs && <Breadcrumbs catalog={breadcrumbs}/>
        }
        <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{title}</Text>
        {children}
    </Container>
);

export default Page;
