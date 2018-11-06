import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {find} from 'lodash';
import styled from 'styled-components';

import {Layout, LayoutColumn} from '../layout/Layout';
import SlideShow from './SlideShow';
import Features from './Features';
import Raiting from './Raiting';

const Button = styled.button`
    padding: 6px 15px;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    
    cursor: pointer;

    border-radius: 5px;
    background-color: #ff6e35;

    &:hover {
        background-color: #e84100;
    }
`;

const ProductSnippet = styled(Layout)`
    border: 1px solid #dee1e4;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, .6);

    &:hover {
        z-index: 3;
        box-shadow: 0 1px 5px 1px rgba(118, 118, 118, .75);
    }
`;

const ColumnProductSnippet = styled(ProductSnippet)`
    width: 235px;
    margin-bottom: 15px;
    padding: 20px;
    align-items: center;
    flex-direction: column;
`;

const LineProductSnippet = styled(ProductSnippet)`
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

const About = styled(Layout)`
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

const Content = styled(LayoutColumn)`
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
                <Button onClick={addProductToCart}>В корзину</Button>
            </ColumnProductSnippet>
        );
    } if (view === 'column') {
        return (
            <LineProductSnippet>
                <LayoutColumn>
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
                </LayoutColumn>
                <Content>
                    <Title>{name}</Title>
                    <div className="product__info">{info}</div>
                    <Raiting count={ratio} />
                    <About>
                        <Stock>{nalichie}</Stock>
                        <StyledLink to={`/catalog/${catalogId}/${articul}`}>Подробнее</StyledLink>
                    </About>
                </Content>
                <LayoutColumn>
                    <Price>{NewPrice} ₽</Price>
                    <Button onClick={addProductToCart}>В корзину</Button>
                </LayoutColumn>
            </LineProductSnippet>
        );
    }

    return (
        <TileProductSnippet>
            <Articul>Артикул {articul}</Articul>
            <Title className="list">{name}</Title>
            <div className="product__info text_size_s">{info}</div>
            <Stock>{nalichie}</Stock>
            <Price className="list">{NewPrice} ₽</Price>
            <Button onClick={addProductToCart}>В корзину</Button>
        </TileProductSnippet>
    );
};

const mapStateToProps = state => ({
    catalogs: state.catalogs,
});

const mapDispatchToProps = dispatch => ({
    addToCart: product => {
        const payload = product;

        dispatch({type: 'ADD_TO_CART', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
