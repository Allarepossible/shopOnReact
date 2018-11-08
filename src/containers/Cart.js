import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {find, reduce, map} from 'lodash';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const normalizePrice = price => String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

const CartItem = ({
    image, name, articul, nalichie, catalog, price, count, deleteProduct, changeCountOfProductInCart,
}) => {
    const deleteProductFromCart = () => {
        deleteProduct(articul);
    };

    const decreaseCount = () => {
        if (count > 1) {
            changeCountOfProductInCart(articul);
        }
    };

    const changeCount = () => {
    };

    const increaseCount = () => {
        changeCountOfProductInCart(articul, '+');
    };

    const disabledClass = count === 1 ? ' disabled' : '';

    return (
        <li className="cart__item">
            <Link className="cart__link" to={`/catalog/${catalog}/${articul}`}>
                <div className="photo">
                    <img className="big-photo" src={image} alt={name} />
                </div>
            </Link>
            <div className="cart__articul articul">
                <span className="text text_color_grey text_weight_bold text_size_s"> Артикул </span>
                <span className="text text_weight_bold">{articul}</span>
            </div>
            <div className="cart__title">{name}</div>
            <div className="cart__nalichie text_size_s text_weight_bold text_color_grey">{nalichie}</div>
            <div className="counter">
                <i className={`counter__button counter__button_type_minus${disabledClass}`} onClick={decreaseCount} />
                <input type="text" className="counter__input" value={count} onChange={changeCount} />
                <i className="counter__button counter__button_type_plus" onClick={increaseCount} />
                <i className="counter__delete" onClick={deleteProductFromCart} />
            </div>
            <div className="cart__price text text_weight_semibold text_size_l">
                {normalizePrice(price)}
                {' '}
P
            </div>
        </li>
    );
};

const Cart = ({cart, deleteProduct, changeCountOfProductInCart}) => {
    const products = map(cart, 'product');
    const commonPrice = reduce(cart, (result, {product, count}) => result + product.price * count, 0);

    return (
        <div>
            <div className="wrapper">
                <Header />
                <Menu />
                <div className="layout">
                    <div className="container">
                        <Breadcrumbs catalog={[{name: 'Корзина', link: '/cart'}]} />
                        <h1 className="h1 text text_color_grey text_weight_bold">Корзина</h1>
                        <div className="container cart">
                            <ul className="cart__list">
                                {
                                    cart.length > 0
                                    && products.map((el, index) => {
                                        const count = find(cart, ['articul', el.articul]).count;

                                        return (
                                            <CartItem
                                                key={index}
                                                image={el.images[0].image}
                                                name={el.name}
                                                price={el.price}
                                                count={count}
                                                articul={el.articul}
                                                info={el.info}
                                                nalichie={el.nalichie}
                                                catalog={el.catalog}
                                                cart={cart}
                                                deleteProduct={deleteProduct}
                                                changeCountOfProductInCart={changeCountOfProductInCart}
                                            />
                                        );
                                    })
                                }
                                {
                                    cart.length === 0
                                    && <div className="empty-cart">Корзина пуста!</div>
                                }
                            </ul>
                            {
                                cart.length > 0
                                && (
                                    <div className="common-price">
                                        Итоговая цена:
                                        {normalizePrice(commonPrice)}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default connect(
    state => ({
        cart: state.cart,
    }),
    dispatch => ({
        deleteProduct: articul => {
            const payload = articul;

            dispatch({type: 'DELETE_PRODUCT', payload});
        },
        changeCountOfProductInCart: (articul, type) => {
            const payload = articul;
            if (type === '+') {
                dispatch({type: 'INCREASE_COUNT_PRODUCT', payload});
            } else {
                dispatch({type: 'DECREASE_COUNT_PRODUCT', payload});
            }
        },
    })
)(Cart);
