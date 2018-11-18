import React from 'react';
import {connect} from 'react-redux';
import {find} from 'lodash';
import Features from 'components/Features';
import Raiting from 'components/Raiting';
import SlideShow from 'components/SlideShow';
import Button from 'components/Button';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Text from 'components/Text';

import Page from './Page';

const ProductPage = ({
    catalog, ownProps, products, setState, addToCart,
}) => {
    if (products === 0) {
        setState(catalog.products);
    }
    const product = find(catalog.products, {articul: Number(ownProps.params.productId)});
    const catalogLink = `/catalog/${catalog.id}`;
    const NewPrice = String(product.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

    const addProductToCart = () => {
        addToCart(product);
    };

    return (
        <Page
            title={product.name}
            breadcrumbs={[
                {name: 'Каталог', link: '/catalog'},
                {name: catalog.name, link: catalogLink},
                {name: product.name, link: catalogLink + product.articul},
            ]}
        >
            <Flex flexDirection='column' mb='50px'>
                <Flex justifyContent='space-between'>
                    <SlideShow
                        images={product.images}
                        name={product.name}
                    />
                    <Flex
                        flexDirection='column'
                        width='30%'
                        justifyContent='flex-start'
                        alignItems='flex-start'
                    >
                        <Features features={product.feature} />
                        <Text fontWeight='bold' color='grey' fontSize='s'>Артикул {product.articul}</Text>
                        <Raiting count={product.ratio} />
                    </Flex>
                    <Flex flexDirection='column' width='30%' justifyContent='flex-start' alignItems='flex-end'>
                        <Text fontWeight='bold' mb={15} fontSize='l'>{NewPrice} ₽</Text>
                        <Button type='primary' onClick={addProductToCart}>В корзину</Button>
                    </Flex>
                </Flex>
                <Box>{product.info}</Box>
            </Flex>
        </Page>
    );
};
const mapStateToProps = (state, ownProps) => ({
    catalog: find(state.catalogs, {id: ownProps.params.catalogId}),
    products: state.products,
    activeSlide: state.activeSlide,
    ownProps,
});

const mapDispatchToProps = dispatch => ({
    setState: products => {
        const payload = products;
        dispatch({type: 'SET_STATE', payload});
    },
    addToCart: product => {
        const payload = product;

        dispatch({type: 'ADD_TO_CART', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
