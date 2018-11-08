import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {find} from 'lodash';
import Box from 'components/Box';
import Flex from 'components/Flex';

const SlideShowStyle = styled.div`
    width: ${({type}) => type === 'small' ? 138 : 250}px;
    margin-bottom: 15px;
`;

const WrapImg = styled(Flex)`
    width: ${({type}) => type === 'small' ? 138 : 250}px;
    height: ${({type}) => type === 'small' ? 138 : 250}px;
    margin-bottom: 15px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;
`;

const Img = styled.img`
    max-width: 95%;
    max-height: 95%;
`;

const Item = styled(Box)`
    position: relative;
    cursor: pointer;

    width: ${({type}) => type === 'small' ? 33 : 60}px;
    height: ${({type}) => type === 'small' ? 33 : 60}px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;
    
    &:hover {
        border-color: #333;
    }
    
    &.active, &.active:hover {
        border-color: #ff6e35;
    }
`;

const SlideShow = ({product, products, changeSlide, type}) => {
    const bigImage = product.images[product.activeIndex].image;

    const selectMiniImage = e => {
        const active = e.currentTarget.getAttribute('data');
        product.activeIndex = active;
        changeSlide(product, products);
    };

    return (
        <SlideShowStyle type={type}>
            <WrapImg justifyContent='center' alignItems='center' type={type}>
                <Img src={bigImage} alt={product.name} type={type} />
            </WrapImg>
            <Flex justifyContent='space-around'>
                {
                    product.images.map((image, i) => {
                        const active = i === Number(product.activeIndex) ? ' active' : '';

                        return (
                            <Item className={active} key={i} type={type}>
                                <Flex
                                    justifyContent='center'
                                    alignItems='center'
                                    height='100%'
                                    onClick={selectMiniImage}
                                    data={i}
                                >
                                    <Img src={image.image} alt="" type={type} />
                                </Flex>
                            </Item>
                        );
                    })
                }
            </Flex>
        </SlideShowStyle>
    );
};

const findInCatalog = ({catalogId, articul}, {catalogs}) => find(find(catalogs, {id: catalogId}).products, {articul});

const mapStateToProps = (state, {articul, catalogId, type}) => ({
    type,
    products: state.products,
    product: find(state.products, {articul}) || findInCatalog({articul, catalogId}, state),
});

const mapDispatchToProps = dispatch => ({
    changeSlide: (product, products) => {
        const payload = product;
        const payload2 = products;

        dispatch({type: 'CHANGE_SLIDE', payload, payload2});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);
