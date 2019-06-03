import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [{
    ...App,
    routes: [{
        ...HomePage,
        path: '/',
        exact: true,
    }, {
        ...CatalogPage,
        path: '/catalog/:id',
    }, {
        ...AdminsListPage,
        path: '/admins',
    }, {
        ...NotFoundPage,
    }],
}];
