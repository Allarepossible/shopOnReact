import React from 'react';
import {Link} from 'react-router';
import {find} from 'lodash';
import styled, {withTheme} from 'styled-components';

import Flex from '../Flex';
import Button from '../Button';
import SlideShow from '../products/SlideShow';
import Features from '../products/Features';
import Raiting from '../products/Raiting';

const ProductSnippetStyle = styled(Flex)`
    border: 1px solid #dee1e4;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, .6);

    &:hover {
        z-index: 3;
        box-shadow: 0 1px 5px 1px rgba(118, 118, 118, .75);
    }
`;

const ColumnProductSnippet = styled(ProductSnippetStyle)`
    width: 235px;
    margin-bottom: 15px;
    padding: 20px;
    align-items: center;
    flex-direction: column;
`;

const LineProductSnippet = styled(ProductSnippetStyle)`
    align-items: flex-start;
    flex-direction: row;

    width: 100%;
    margin-bottom: 0;
    padding: 20px;

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

const TileProductSnippet = styled(LineProductSnippet)`
    align-items: center;
    padding: 10px;
    .list {
        margin-bottom: 0;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 80px;
    }

`;

const Title = styled.span`
    text-decoration: none;
    margin-bottom: 15px;
    font-weight: bold;
`;

const Price = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
`;

const About = styled(Flex)` 
    width: 90%;
    margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 12px;
    color: #7f7f7f;
`;

const Articul = styled.span`
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
            <ColumnProductSnippet>
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
                <Title>{name}</Title>
                <Features features={feature} />
                <Raiting count={ratio} />
                <Price>{NewPrice} ₽</Price>
                <About>
                    <Stock>{nalichie}</Stock>
                    <StyledLink to={`/catalog/${catalogId}/${articul}`}>Подробнее</StyledLink>
                </About>
                <Button type="primary" onClick={addProductToCart}>В корзину</Button>
            </ColumnProductSnippet>
        );
    } if (view === 'column') {
        return (
            <LineProductSnippet justifyContent='space-between'>
                <Flex flexDirection='column'>
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
                    <Articul>Артикул {articul}</Articul>
                </Flex>
                <Content flexDirection='column'>
                    <Title>{name}</Title>
                    <div className="product__info">{info}</div>
                    <Raiting count={ratio} />
                    <About>
                        <Stock>{nalichie}</Stock>
                        <StyledLink to={`/catalog/${catalogId}/${articul}`}>Подробнее</StyledLink>
                    </About>
                </Content>
                <Flex flexDirection='column'>
                    <Price>{NewPrice} ₽</Price>
                    <Button type="primary" onClick={addProductToCart}>В корзину</Button>
                </Flex>
            </LineProductSnippet>
        );
    }

    return (
        <TileProductSnippet justifyContent='space-between'>
            <Articul>Артикул {articul}</Articul>
            <Title className="list">{name}</Title>
            <div className="product__info text_size_s">{info}</div>
            <Stock>{nalichie}</Stock>
            <Price className="list">{NewPrice} ₽</Price>
            <Button type="primary" onClick={addProductToCart}>В корзину</Button>
        </TileProductSnippet>
    );
};

export default withTheme(ProductSnippet);
