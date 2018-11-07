import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {find} from 'lodash';

import Box from '../Box';
import Flex from '../Flex';

const SlideShowStyle = styled.div`
    width: 138px;
    margin-bottom: 15px;
`;

const WrapImg = styled(Flex)`
    width: 138px;
    height: 138px;
    margin-bottom: 15px;

    border: 1px solid #dee1e4;
    border-radius: 2px;
    background-color: #fff;
`;
:
const SlideShow = ({product, products, changeSlide}) => {
    const bigImage = product.images[product.activeIndex].image;

    const selectMiniImage = e => {
        const active = e.currentTarget.getAttribute('data');
        product.activeIndex = active;
        changeSlide(product, products);
    };

    return (
        <SlideShowStyle>
            <WrapImg justifyContent='center' alignItems='center'>
                <Box maxWidth='95%' maxHeight='95%' src={bigImage} alt={product.name} />
            </WrapImg>
            <Flex justifyContent='space-around'>
                {
                    product.images.map((image, i) => {
                        const active = i === Number(product.activeIndex) ? ' active' : '';
                        return (
                            <div className={`slideshow__item${active}`} key={i}>
                                <a className='slideshow__link' onClick={selectMiniImage} data={i}>
                                    <img className='slideshow__preview' src={image.image} alt="" />
                                </a>
                            </div>
                        );
                    })
                }
            </Flex>
        </SlideShowStyle>
    );
};

const findInCatalog = ({catalogId, articul}, {catalogs}) => find(find(catalogs, {id: catalogId}).products, {articul});

const mapStateToProps = (state, {articul, catalogId}) => ({
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
