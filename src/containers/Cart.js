import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { groupBy, reduce, partition, forIn, assign, uniqBy, find, drop, concat } from 'lodash';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const normalizePrice = (price) => {
    return String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
};

const CartItem = ({ image, name, articul, nalichie, catalog, price, count, deleteProduct, cart, changeCountOfProductInCart }) => {
    const deleteProductFromCart = () => {
        const newCart = partition(cart, ['articul', articul])[1];

        deleteProduct(newCart);
    };

    const decreaseCount = () => {
        if (count < 2) {
            deleteProductFromCart();
        } else {
            const newCart = concat(drop(partition(cart, ['articul', articul])[0]), partition(cart, ['articul', articul])[1])

            deleteProduct(newCart);
        }
    };

    const changeCount = () => {

    };

    const increaseCount = () => {
        const product = find(cart, ['articul', articul]);

        changeCountOfProductInCart(product);
    };

    return (
        <li className='cart__item'>
            <Link className='products__link' to={'/catalog/' + catalog + '/' + articul}>
                <div className='photo'>
                    <img className='big-photo' src={image} alt={name} />
                </div>
            </Link>
                <div className='articul'>
                    <span className='art'> Артикул </span>
                    <span className='art_number'>{articul}</span>
                </div>
                <div className='products__title'>{name}</div>
                <div className='products_nallichie'>{nalichie}</div>
                <div className="counter">
                    <i className="counter__button counter__button_type_minus" onClick={decreaseCount} />
                    <input type='text' className='counter__input' value={count} onChange={changeCount} />
                    <i className="counter__button counter__button_type_plus" onClick={increaseCount} />
                    <i className='counter__delete' onClick={deleteProductFromCart} />
                </div>
                <div className='products__price'>{normalizePrice(price)} P</div>
        </li>
    )
};

const Cart = ({ cart, deleteProduct, changeCountOfProductInCart }) => {
    forIn(groupBy(cart, 'articul'), (value) => {
        return assign(value[0], {count: value.length});
    });
    const products = uniqBy(cart, 'articul');

    const commonPrice = reduce(cart, (result, product) => {
        return result + product.price;
    }, 0);

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: "Корзина", link: '/cart'}]}/>
                        <h1 className='h1 text text_color_grey text_weight_bold'>Корзина</h1>
                        <div className='container cart'>
                            <ul className='cart__list'>
                                {
                                    cart.length > 0 &&
                                    products.map((el, index) => {
                                        return <CartItem
                                            key={index}
                                            image={el.images[0].image}
                                            name={el.name}
                                            price={el.price}
                                            count={el.count}
                                            articul={el.articul}
                                            info={el.info}
                                            nalichie={el.nalichie}
                                            catalog={el.catalog}
                                            cart={cart}
                                            deleteProduct={deleteProduct}
                                            changeCountOfProductInCart={changeCountOfProductInCart}
                                        />;
                                    })
                                }
                                {
                                    cart.length === 0 &&
                                    <div className='empty-cart'>Корзина пуста!</div>
                                }
                            </ul>
                            {
                                cart.length > 0 &&
                                <div className="common-price">Итоговая цена: {normalizePrice(commonPrice)}</div>
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
    (state) => ({
        cart: state.cart
    }),
    dispatch => ({
        deleteProduct: (newCart) => {
            const payload = newCart;

            dispatch({ type: 'DELETE_PRODUCT', payload });
        },
        changeCountOfProductInCart: (product) => {
            const payload = product;

            dispatch({ type: 'CHANGE_COUNT_PRODUCT', payload });
        }
    })
)(Cart);
