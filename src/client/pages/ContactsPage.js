import React from 'react';

import Flex from '../components/Flex';
import Page from './Page';

const ContactsPage = () => (
    <Page
        title='Контакты'
    >
        <Flex justifyContent='space-between'>
            Здесь сокро будет карта
        </Flex>
    </Page>
);

export default {
    component: ContactsPage,
};
