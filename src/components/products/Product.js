import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {find} from 'lodash';

import SlideShow from './SlideShow';
import Features from './Features';
import Raiting from './Raiting';

const Product = ({
    images,
    feature,
    articul,
    name,
    info,
    ratio,
    price,
    nalichie,
    id,
    activeIndex,
    catalogId,
    addToCart,
    catalogs,
    view,
}) => {
    const NewPrice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    const addProductToCart = () => {
        const catalog = find(catalogs, ['id', catalogId]);
        const product = find(catalog.products, ['articul', articul]);

        addToCart(product);
    };

    if (view === 'tile') {
        return (
            <li className="category__item product layout" key={id}>
                <SlideShow
                    key={id}
                    id={id}
                    images={images}
                    bigImage={images[activeIndex]}
                    articul={articul}
                    name={name}
                    activeIndex={activeIndex}
                    catalogId={catalogId}
                />
                <div className="product__title text text_weight_semibold">{name}</div>
                <Features features={feature} />
                <Raiting count={ratio} />
                <div className="product__price text text_size_l text_weight_bold">
                    {NewPrice}
                    {' '}
P
                </div>
                <div className="product__about layout">
                    <div className="product__nalichie text_size_s text_weight_bold text_color_grey">{nalichie}</div>
                    <Link className="product__link text text_size_s text_weight_bold text_color_grey "
                        to={`/catalog/${catalogId}/${articul}`}
                    >
                        Подробнее
                    </Link>
                </div>
                <button
                    className="product__buy text text_weight_semibold text_color_white text_size_s"
                    onClick={addProductToCart}
                >
                    В корзину
                </button>
            </li>
        );
    } if (view === 'column') {
        return (
            <li className="category__item product layout" key={id}>
                <div className="layout layout_direction_column layout_align_center">
                    <SlideShow
                        key={id}
                        id={id}
                        images={images}
                        bigImage={images[activeIndex]}
                        articul={articul}
                        name={name}
                        activeIndex={activeIndex}
                        catalogId={catalogId}
                    />
                    <div className="product__articul articul">
                        <span className="text text_color_grey text_weight_bold text_size_s"> Артикул </span>
                        <span className="text text_weight_bold">{articul}</span>
                    </div>
                </div>
                <div className="layout layout_direction_column product__center">
                    <div className="product__title text text_weight_semibold text_size_l">{name}</div>
                    <div className="product__info">{info}</div>
                    <Raiting count={ratio} />
                    <div className="product__about layout">
                        <div className="product__nalichie text_size_s text_weight_bold text_color_grey">{nalichie}</div>
                        <Link className="product__link text_size_s text_weight_bold text_color_grey "
                            to={`/catalog/${catalogId}/${articul}`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div className="layout layout_direction_column layout_align_center">
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
            </li>
        );
    }

    return (
        <li className="category__item product layout" key={id}>
            <div className="product__articul articul">
                <span className="text text_color_grey text_weight_bold text_size_s"> Артикул </span>
                <span className="text text_weight_bold">{articul}</span>
            </div>
            <div className="product__title text text_weight_semibold text_size_s">{name}</div>
            <div className="product__info text_size_s">{info}</div>
            <div className="product__nalichie text text_size_s text_weight_bold text_color_grey ">{nalichie}</div>
            <div className="product__price text text_size_m text_weight_bold ">
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
        </li>
    );
};

export default connect(
    state => ({
        catalogs: state.catalogs,
    }),
    dispatch => ({
        addToCart: product => {
            const payload = product;

            dispatch({type: 'ADD_TO_CART', payload});
        },
    })
)(Product);
