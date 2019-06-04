import React from 'react';
import {Link} from 'react-router-dom';
import {find} from 'lodash';
import styled from 'styled-components';

import Text from '../Text';
import Box from '../Box';
import Flex from '../Flex';
import Button from '../Button';
import SlideShow from '../SlideShow';
import Rating from '../Rating';
import Features from '../Features';

const ProductSnippetStyle = styled(Flex)`
    border: 1px solid #dee1e4;
    border-radius: ${({theme}) => theme.borderRadius[4]}px;
    background-color: ${({theme}) => theme.colors.white};

    &:hover {
        z-index: 3;
        box-shadow: 0 1px 5px 1px rgba(118, 118, 118, .75);
    }
`;

const LineProductSnippet = styled(ProductSnippetStyle)`
    flex-direction: row;
    align-items: flex-start;
    
    border-bottom: none;
    border-radius: 0;
    
    &:first-child {
        border-radius: 6px 6px 0 0;
    }
    &:last-child {
        border-bottom: 1px solid #dee1e4;
        border-radius: 0 0 6px 6px;
    }
`;

const Title = styled(Text)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 80px;
`;

const Info = styled(Box)`
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 12px;
    color: #7f7f7f;
`;


const Content = styled(Flex)`
    width: 50%;
`;

const Stock = styled.span`
    position: relative;
    font-weight: bold;
    font-size: 12px;
    color: #7f7f7f;
    
    &:before {
        position: absolute;
        top: 5px;
        left: -10px;
    
        width: 7px;
        height: 7px;
    
        content: '';
    
        border-radius: 50%;
        background-color: #60ac49;
    }
`;

const ProductSnippet = ({
    images,
    feature,
    articul,
    name,
    info,
    ratio,
    price,
    nalichie,
    catalogId,
    addToCart,
    catalog,
    view,
}) => {
    const NewPrice = String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    const addProductToCart = () => {
        const product = find(catalog.products, ['articul', articul]);

        addToCart(product);
    };

    if (view === 'tile') {
        return (
            <ProductSnippetStyle alignItems='center' flexDirection='column' mb={16} p={20}>
                <SlideShow
                    type='small'
                    images={images}
                    name={name}
                />
                <Box maxWidth='184px' mb={15} textAlign='center'>
                    <Text fontWeight='bold' fontSize='m'>{name}</Text>
                </Box>
                <Features features={feature} />
                <Rating count={ratio} />
                <Text fontWeight='bold' mb={15} fontSize='l'>{NewPrice} ₽</Text>
                <Flex justifyContent='space-between' mb={20} width='90%'>
                    <Stock>{nalichie}</Stock>
                    <StyledLink to={`/product/${articul}`}>Подробнее</StyledLink>
                </Flex>
                <Button type='primary' onClick={addProductToCart}>В корзину</Button>
            </ProductSnippetStyle>
        );
    } if (view === 'column') {
        return (
            <LineProductSnippet justifyContent='space-between' p={20}>
                <Flex flexDirection='column'>
                    <SlideShow
                        type='small'
                        images={images}
                        name={name}
                    />
                    <Text fontWeight='bold' color='grey' fontSize='s'>Артикул {articul}</Text>
                </Flex>
                <Content flexDirection='column'>
                    <Text fontWeight='bold' mb={15} fontSize='s'>{name}</Text>
                    <Box mb={30}>{info}</Box>
                    <Rating count={ratio} />
                    <Flex justifyContent='space-between'>
                        <Stock>{nalichie}</Stock>
                        <StyledLink to={`/product/${articul}`}>Подробнее</StyledLink>
                    </Flex>
                </Content>
                <Flex flexDirection='column'>
                    <Text fontWeight='bold' mb={15} fontSize='l'>{NewPrice} ₽</Text>
                    <Button type='primary' onClick={addProductToCart}>В корзину</Button>
                </Flex>
            </LineProductSnippet>
        );
    }

    return (
        <LineProductSnippet justifyContent='space-between' alignItems='center' p={10}>
            <Text fontWeight='bold' color='grey' fontSize='s'>Артикул {articul}</Text>
            <Title fontWeight='bold' fontSize='s'>{name}</Title>
            <Info maxWidth='250px' mb={0} overflow='hidden'>{info}</Info>
            <Stock>{nalichie}</Stock>
            <Text fontWeight='bold' fontSize='l'>{NewPrice} ₽</Text>
            <Button type='primary' onClick={addProductToCart}>В корзину</Button>
        </LineProductSnippet>
    );
};

export default ProductSnippet;
