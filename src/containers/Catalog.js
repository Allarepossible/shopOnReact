import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Path from 'components/Path';
import SortBar from 'components/SortBar';
import Breadcrumbs from 'components/Breadcrumbs';
import Information from 'components/Information';
import CategoryList from 'components/CategoryList';
import Filters from 'components/Filters';

const Catalog = ({
    products, catalog, filters, setState,
}) => {
    const catalogLink = `/catalog/${catalog.id}`;
    if (products === 0) {
        setState(catalog.products, catalog.filters);
    }

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu active={catalog.id} />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs
                            catalog={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
                        />
                        <h1 className='h1 text text_color_grey text_weight_bold'>{catalog.name}</h1>
                        <div className='layout'>
                            <aside className='layout sidebar'>
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className='right_content'>
                                <SortBar />
                                <div className='content'>
                                    <CategoryList
                                        catalogId={catalog.id}
                                        countOfProducts={products.length}
                                    />
                                    {
                                        products.length > 9
                                        && <Path />
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
        catalog: state.catalogs.find(catalog => catalog.id === ownProps.params.catalogId),
        filters: state.filters,
    }),
    dispatch => ({
        setState: (products, filters) => {
            const payload = products;
            const payload2 = filters;

            dispatch({type: 'SET_STATE', payload});
            dispatch({type: 'SET_FILTERS', payload2});
        },
    })
)(Catalog);
