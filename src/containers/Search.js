import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Sort from '../components/filters/Sort';
import PathProducts from '../components/navigation/PathProducts';
import Information from '../components/Information';
import Products from '../components/products/Products';
import Filters from '../components/filters/Filters';

const Search = ({
    products, catalog, filters, setState,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }

    return (
        <div>
            <div className="wrapper">
                <Header />
                <Menu />
                <div className="layout">
                    <div className="container">
                        <Breadcrumbs catalog={[{name: 'Поиск', link: '/search'}]} />
                        <h1 className="h1 text text_color_grey text_weight_bold">{catalog.name}</h1>
                        <div className="layout">
                            <aside className="sidebar">
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className="right_content">
                                <Sort />
                                <div className="content">
                                    <div className="content">
                                        <Products
                                            catalogId={catalog.id}
                                        />
                                    </div>
                                    <PathProducts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Information />
            </div>
            <Footer />
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        products: state.products,
        catalog: state.catalogs.find(catalog => catalog.id === ownProps.params.catalogId),
        filters: state.filters,
    }),
    dispatch => ({
        setState: products => {
            const payload = products;
            dispatch({type: 'SET_STATE', payload});
        },
    })
)(Search);
