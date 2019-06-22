import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    find, isEmpty, map, prop, propEq, reduce, filter,
} from 'ramda';
import styled from 'styled-components';

import {deleteProductFromCart, changeCountOfProductInCart, fetchCart} from '../actions';
import Box from '../components/Box';
import Flex from '../components/Flex';
import CartItem from '../components/CartItem';
import Page from './Page';

const normalizePrice = price => String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

const Price = styled(Flex)`
    font-size: 22px;
    justify-content: flex-end;
`;


const Empty = styled(Flex)`
    font-size: 30px;
    margin: 50px 0 250px;
    justify-content: center;
`;

class CartPage extends Component {
    componentDidMount() {
        const {cart ,products} = this.props;

        if (!isEmpty(cart) && cart.length !== products.length) {
            const ids = map(prop('articul'))(cart);

            this.props.fetchCart(ids);
        }
    }

    render() {
        const {
            deleteProductFromCart: deleteProduct, changeCountOfProductInCart: change, products, cart,
        } = this.props;

        return (
            <Page title='Корзина' breadcrumbs={[{name: 'Корзина', link: '/cart'}]}>
                <Box mb='150px'>
                    <Flex flexDirection='column'>
                        {
                            !isEmpty(products)
                            && cart.map(({articul, count}, index) => {
                                const product = find(propEq('articul', Number(articul)), products);

                                return (
                                    <CartItem
                                        key={index}
                                        image={product.images[0].image}
                                        name={product.name}
                                        price={product.price}
                                        count={count}
                                        articul={product.articul}
                                        info={product.info}
                                        nalichie={product.nalichie}
                                        catalog={product.catalog}
                                        cart={cart}
                                        deleteProduct={deleteProduct.bind(this, product)}
                                        change={change}
                                    />
                                );
                            })
                        }
                        {
                            isEmpty(products)
                            && <Empty>Корзина пуста!</Empty>
                        }
                    </Flex>
                    {
                        !isEmpty(products)
                        && (
                            <Price>
                                Итоговая цена:
                                {normalizePrice(reduce((result, {articul, count}) => {
                                    const product = find(propEq('articul', Number(articul)), products);

                                    return result + product.price * count;
                                }, 0, cart))}
                            </Price>
                        )
                    }
                </Box>
            </Page>
        );
    }
}

const mapStateToProps = ({cart = [], products = []}) => {
    const articuls = map(item => item.articul, cart);
    const productsInCart = filter(({articul}) => articuls.indexOf(articul) > -1, products);

    return {cart, products: productsInCart};
};

export default {
    component: connect(mapStateToProps, {deleteProductFromCart, changeCountOfProductInCart, fetchCart})(CartPage),
};
