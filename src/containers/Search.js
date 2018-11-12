import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Products from 'components/CategoryList';
import Information from 'components/Information';
import Menu from 'components/Menu';
import Path from 'components/Path';
import Breadcrumbs from 'components/Breadcrumbs';
import SortBar from 'components/SortBar';
import Filters from 'components/Filters';

const Search = ({
    products, catalog, filters, setState,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: 'Поиск', link: '/search'}]} />
                        <h1 className='h1 text text_color_grey text_weight_bold'>{catalog.name}</h1>
                        <div className='layout'>
                            <aside className='sidebar'>
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className='right_content'>
                                <SortBar />
                                <div className='content'>
                                    <div className='content'>
                                        <Products
                                            catalogId={catalog.id}
                                        />
                                    </div>
                                    <Path />
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
