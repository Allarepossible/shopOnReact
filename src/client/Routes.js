import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
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
        ...ProductPage,
        path: '/product/:id',
    }, {
        ...AdminsListPage,
        path: '/admins',
    }, {
        ...NotFoundPage,
    }],
}];
