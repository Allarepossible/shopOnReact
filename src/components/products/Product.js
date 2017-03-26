import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { find } from 'lodash';

import SlideShow from './SlideShow';
import Feature from './Feature';

const Product = ({ images, feature, articul, name, info, ratio, price, nalichie, id, activeIndex, catalogId, addToCart, catalogs }) => {
    const NewPrice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    const addProductToCart = () => {
        const catalog = find(catalogs, ['id', catalogId])
        const product = find(catalog.products, ['articul', articul])

        addToCart(product);
    };

    return (
        <li className='products' key={id}>
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
            <div className='products_center_content'>
                <div className='products__title'>{name}</div>
                <div className='products__info'>{info}</div>
                <div className='products__feature'>
                    <ul className='features__list'>
                        {
                            feature.map((el, i) => {
                                return <Feature
                                    key={i}
                                    name={el.name}
                                    value={el.value}
                                />;
                            })
                        }
                    </ul>
                </div>
                <div className='products__reiting'>
                    <div className={'reiting__stars stars-' + ratio}>
                        <ul className='stars'>
                            <li className='star'></li>
                            <li className='star'></li>
                            <li className='star'></li>
                            <li className='star'></li>
                            <li className='star'></li>
                        </ul>
                    </div>
                    <div className='reiting__value'>{ratio}</div>
                </div>

            </div>
            <div className='products_right_content'>
                <div className='products__price'>{NewPrice} P</div>
                <div className="products__about">
                    <div className='products_nallichie'>{nalichie}</div>
                    <Link className='products__link' to={'/catalog/' + catalogId + '/' + articul}>Подробнее</Link>
                </div>
                <button className='products__buy' onClick={addProductToCart}>В корзину</button>
            </div>
        </li>
    );
};

export default connect(
    (state) => ({
        catalogs: state.catalogs
    }),
    dispatch => ({
        addToCart: (product) => {
            const payload = product;

            dispatch({ type: 'ADD_TO_CART', payload });
        }
    })
)(Product);
