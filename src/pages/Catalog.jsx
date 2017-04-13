import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Sort from '../components/filters/Sort';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import PathProducts from '../components/navigation/PathProducts';
import Information from '../components/Information';
import Products from '../components/products/Products';
import Filters from '../components/filters/Filters';

const Catalog = ({ products, catalog, filters, setState }) => {
    const catalogLink = '/catalog/' + catalog.id;
    if (products === 0) {
        setState(catalog.products, catalog.filters);
    }

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu active={catalog.id}/>
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: "Каталог", link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}/>
                        <h1 className='h1 text text_color_grey text_weight_bold'>{catalog.name}</h1>
                        <div className='layout'>
                            <aside className='layout sidebar'>
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className='right_content'>
                                <Sort />
                                <div className='content'>
                                    <Products
                                        catalogId={catalog.id}
                                        countOfProducts={products.length}
                                    />
                                    {
                                        products.length > 9 &&
                                        <PathProducts />
                                    }
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
        catalog: state.catalogs.find((catalog) => catalog.id === ownProps.params.catalogId),
        filters: state.filters
    }),
    dispatch => ({
        setState: (products, filters) => {
            const payload = products;
            const payload2 = filters;

            dispatch({ type: 'SET_STATE', payload });
            dispatch({ type: 'SET_FILTERS', payload2 });
        }
    })
)(Catalog);
