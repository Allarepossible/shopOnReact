import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return (
        <div>
            <h3>Ooops,</h3>
            <p>route not found.</p>
        </div>
    );
};

export default {
    component: NotFoundPage,
};
