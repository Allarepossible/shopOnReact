import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import tag from 'clean-tag';

import Flex from '../Flex';
import Box from '../Box';
import Text from '../Text';

const normalizePrice = price => String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

const Tr = styled(tag.tr)`
    background-color: #fff;
`;

const Td = styled(tag.td)`
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #d4d4d4;
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

const CartItem = ({
    image,
    name,
    articul,
    nalichie,
    catalog,
    price,
    count,
    deleteProduct,
    change,
}) => (
    <Tr>
        <Td>
            <Link to={`/catalog/${catalog}/${articul}`}>
                <CartItemImage>
                    <img src={image} alt={name} />
                </CartItemImage>
            </Link>
        </Td>
        <Td>
            <Box>
                <Text fontWeight='bold' color='grey' fontSize='s'>Артикул</Text>
                <Text fontWeight='bold'>{articul}</Text>
            </Box>
        </Td>
        <Td>
            <Text>{name}</Text>
        </Td>
        <Td>
            <Text fontWeight='bold' color='grey' fontSize='s'>{nalichie}</Text>
        </Td>
        <Td>
            <Flex justifyContent='space-around'>
                <Button onClick={change.bind(this, {articul}, '+')} disabled={count === 1}>-</Button>
                <Input type='text' value={count} onChange={() => {}}/>
                <Button onClick={change.bind(this, {articul})}>+</Button>
                <Delete onClick={deleteProduct} />
            </Flex>
        </Td>
        <Td>
            <Text size='l'>{normalizePrice(price)} ₽</Text>
        </Td>
    </Tr>
);

export default CartItem;
