import React from 'react';
import {connect} from 'react-redux';
import {find} from 'lodash';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Features from '../components/products/Features';
import Raiting from '../components/products/Raiting';
import SlideShow from '../components/products/SlideShow';

const ProductPage = ({
    catalog, ownProps, products, setState, addToCart,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }
    const product = find(catalog.products, {articul: Number(ownProps.params.productId)});
    const catalogLink = `/catalog/${catalog.id}`;
    const NewPrice = String(product.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

    const addProductToCart = () => {
        addToCart(product);
    };

    return (
        <div>
            <div className="wrapper">
                <Header />
                <Menu />
                <div className="layout product-page">
                    <div className="container">
                        <Breadcrumbs
                            catalog={[
                                {name: 'Каталог', link: '/catalog'},
                                {name: catalog.name, link: catalogLink},
                                {name: product.name, link: catalogLink + product.articul},
                            ]}
                        />
                        <h1 className="h1 text text_color_grey text_weight_bold text_size_l">{product.name}</h1>
                        <div className="layout layout_direction_column">
                            <div className="layout">
                                <div className="layout layout_direction_column">
                                    <SlideShow
                                        images={product.images}
                                        bigImage={product.images[product.activeIndex]}
                                        articul={product.articul}
                                        name={product.name}
                                        activeIndex={product.activeIndex}
                                        catalogId={product.catalogId}
                                    />
                                </div>
                                <div className="layout layout_direction_column product-page__center">
                                    <Features features={product.feature} />
                                    <div className="product__articul articul">
                                        <span className="text_color_grey text_weight_bold text_size_s">Артикул</span>
                                        <span className="text text_weight_bold">{product.articul}</span>
                                    </div>
                                    <Raiting count={product.ratio} />
                                </div>
                                <div className="layout layout_direction_column product-page__right">
                                    <div className="product__price text text_size_l text_weight_bold ">
                                        {NewPrice}
                                        {' '}
P
                                    </div>
                                    <button
                                        className="product__buy text text_weight_semibold text_color_white text_size_s"
                                        onClick={addProductToCart}
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                            <div className="product__info">{product.info}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        catalog: find(state.catalogs, {id: ownProps.params.catalogId}),
        products: state.products,
        activeSlide: state.activeSlide,
        ownProps,
    }),
    dispatch => ({
        setState: products => {
            const payload = products;
            dispatch({type: 'SET_STATE', payload});
        },
        addToCart: product => {
            const payload = product;

            dispatch({type: 'ADD_TO_CART', payload});
        },
    })
)(ProductPage);