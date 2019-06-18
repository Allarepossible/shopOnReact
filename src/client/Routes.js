import App from './App';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CatalogsPage from './pages/CatalogsPage';
import ContactsPage from './pages/ContactsPage';
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
        ...CatalogsPage,
        path: '/catalogs',
    }, {
        ...CartPage,
        path: '/cart',
    }, {
        ...ContactsPage,
        path: '/contacts',
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
