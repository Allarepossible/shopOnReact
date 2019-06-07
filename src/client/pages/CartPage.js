import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reduce} from 'ramda';
import styled from 'styled-components';

import {deleteProductFromCart, changeCountOfProductInCart} from '../actions';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';
import Page from './Page';

const normalizePrice = price => String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

const CartItemStyle = styled(Flex)`
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 5px;
    padding: 5px 10px;

    border: 1px solid #dee1e4;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, .6);
`;

const CartItemImage = styled(Flex)`
    width: 70px;
    height: 70px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;

    align-items: center;
    justify-content: center;
    img {
        max-width: 95%;
        max-height: 95%;
    }
`;

const Price = styled(Flex)`
    font-size: 22px;
    justify-content: flex-end;
`;


const Empty = styled(Flex)`
    font-size: 30px;
    margin: 50px 0 250px;
    justify-content: center;
`;

const Input = styled.input`
    font-size: 15px;

    width: 25px;
    height: 25px;

    text-align: center;

    border: 1px solid #dee1e4;
    border-radius: 3px;
`;

const Button = styled.button`
    position: relative;

    width: 25px;
    height: 25px;
    margin: 0 5px;
    padding: 0;
    line-height: 18px;
    font-size: 19px;
    margin: 0 5px;
    cursor: pointer;

    border: 1px solid #dee1e4;
    background-color: #fff;
    
    [disabled] {
        opacity: 0.3;
    }
`;


const Delete = styled.i`
    width: 19px;
    height: 22px;

    cursor: pointer;

    background: url('/api/images/trash.png') center center no-repeat;
    background-size: 100%;
`;


const CartItem = ({image, name, articul, nalichie, catalog, price, count, deleteProduct, change}) => (
    <CartItemStyle>
        <Link to={`/catalog/${catalog}/${articul}`}>
            <CartItemImage>
                <img src={image} alt={name} />
            </CartItemImage>
        </Link>
        <Box>
            <Text fontWeight='bold' color='grey' fontSize='s'>Артикул</Text>
            <Text fontWeight='bold'>{articul}</Text>
        </Box>
        <Text>{name}</Text>
        <Text fontWeight='bold' color='grey' fontSize='s'>{nalichie}</Text>
        <Flex justifyContent='space-around'>
            <Button onClick={change.bind(this, {articul}, '+')} disabled={count === 1}>-</Button>
            <Input type='text' value={count} onChange={() => {console.log('i')}}/>
            <Button onClick={change.bind(this, {articul})}>+</Button>
            <Delete onClick={deleteProduct} />
        </Flex>
        <Text size='l'>{normalizePrice(price)} ₽</Text>
    </CartItemStyle>
);


const CartPage = ({cart, deleteProductFromCart: deleteProduct, changeCountOfProductInCart: change}) => {
    const commonPrice = reduce((result, {product, count}) => result + product.price * count, 0, cart);

    return (
        <Page title='Корзина' breadcrumbs={[{name: 'Корзина', link: '/cart'}]}>
            <Box mb='150px'>
                <Flex flexDirection='column'>
                    {
                        cart.length > 0
                        && cart.map(({product, count}, index) => (
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
                        ))
                    }
                    {
                        cart.length === 0
                        && <Empty>Корзина пуста!</Empty>
                    }
                </Flex>
                {
                    cart.length > 0
                    && (
                        <Price>
                            Итоговая цена:
                            {normalizePrice(commonPrice)}
                        </Price>
                    )
                }
            </Box>
        </Page>
    );
};

const mapStateToProps = ({cart}) => ({cart});

export default {
    component: connect(mapStateToProps, {deleteProductFromCart, changeCountOfProductInCart})(CartPage),
};
