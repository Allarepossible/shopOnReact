import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Sort from '../components/Sort';
import Breadcrumbs from '../components/Breadcrumbs';
import PathProducts from '../components/PathProducts';
import Information from '../components/Information';
import Products from '../components/Products';
import Filters from '../components/Filters';

const Shop = ({products, filters}) => {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='main_content'>
                    <div className='container'>
                        <Breadcrumbs />
                        <h1 className='main_head_text'>Мобильные телефоны</h1>
                        <div className='layout'>
                            <aside className='sidebar'>
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className='right_content'>
                                <Sort />
                                <div className='content'>
                                    <div className='content'>
                                        <Products
                                            products={products}
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
        filters: state.filters,
        ownProps
    }),
    dispatch => ({})
)(Shop);
