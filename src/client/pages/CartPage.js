import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {find, reduce, map} from 'lodash';
import styled from 'styled-components';

import {deleteProduct, changeCountOfProductInCart} from '../actions';
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

const Button = styled.i`
    position: relative;

    width: 25px;
    height: 25px;

    cursor: pointer;

    border: 1px solid #dee1e4;
    background-color: #fff;
    
    .plus:after {
        width: 13px;
        height: 13px;
        position: absolute;
        top: 5px;
        left: 6px;
    
        content: '';
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTExIDExVjIuOTkxYzAtLjUzNi40NDctLjk5MSAxLS45OTEuNTU2IDAgMSAuNDQ0IDEgLjk5MVYxMWg4LjAwOGMuNTM2IDAgLjk5Mi40NDcuOTkyIDEgMCAuNTU2LS40NDUgMS0uOTkyIDFIMTN2OC4wMDhjMCAuNTM2LS40NDguOTkyLTEgLjk5Mi0uNTU3IDAtMS0uNDQ1LTEtLjk5MlYxM0gyLjk5MUMyLjQ1NSAxMyAyIDEyLjU1MiAyIDEyYzAtLjU1Ny40NDQtMSAuOTkxLTFIMTF6Ii8+PC9zdmc+);
    
        color: #a8abad;
    }
    .minus.disabled {
        border-color: #f0f4f7;
        
        &:after {
            width: 10px;
            height: 1px;
            position: absolute;
            top: 11px;
            left: 6px;
            content: '';
        
            background-color: #ccd4da;
        }
    }
    .minus:after {

        width: 10px;
        height: 1px;
        position: absolute;
        top: 11px;
        left: 6px;
        content: '';
    
        background-color: black;
    }
`;


const Delete = styled.i`
    width: 19px;
    height: 22px;

    cursor: pointer;

    background: url('/api/images/trash.png') center center no-repeat;
    background-size: 100%;
`;


const CartItem = ({image, name, articul, nalichie, catalog, price, count, deleteP, change}) => {
    const deleteProductFromCart = () => {
        deleteP(articul);
    };

    const decreaseCount = () => {
        if (count > 1) {
            change(articul);
        }
    };

    const changeCount = () => {
    };

    const increaseCount = () => {
        change(articul, '+');
    };

    const disabledClass = count === 1 ? ' disabled' : '';

    return (
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
                <Button className={`minus${disabledClass}`} onClick={decreaseCount} />
                <Input type='text' value={count} onChange={changeCount} />
                <Button className='plus' onClick={increaseCount} />
                <Delete onClick={deleteProductFromCart} />
            </Flex>
            <Text size='l'>{normalizePrice(price)} ₽</Text>
        </CartItemStyle>
    );
};


const CartPage = ({cart, deleteProduct: del, changeCountOfProductInCart: change}) => {
    const products = map(cart, 'product');
    const commonPrice = reduce(cart, (result, {product, count}) => result + product.price * count, 0);

    return (
        <Page title='Корзина' breadcrumbs={[{name: 'Корзина', link: '/cart'}]}>
            <Box mb='150px'>
                <Flex flexDirection='column'>
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
                                    deleteP={del}
                                    change={change}
                                />
                            );
                        })
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
    component: connect(mapStateToProps, {deleteProduct, changeCountOfProductInCart})(CartPage),
};
