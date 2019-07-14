import React from 'react';

import Flex from '../components/Flex';
import Page from './Page';

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return (
        <Page
            title='Такой станицы нет'
        >
            <Flex justifyContent='space-between'>
                <div>
                    <h3>Ooops,</h3>
                    <p>route not found.</p>
                </div>
            </Flex>
        </Page>
    );
};

export default {
    component: NotFoundPage,
};
