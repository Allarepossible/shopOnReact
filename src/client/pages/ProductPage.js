import React, {Component} from 'react';
import {find, propEq} from 'ramda';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {fetchProduct, addProductToCart} from '../actions';
import Features from '../components/Features';
import Rating from '../components/Rating';
import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';
import Page from './Page';

class ProductPage extends Component {
    componentDidMount() {
        this.props.fetchProduct(this.props.path);
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.product.name} - Покупайте у нас`}</title>
                <meta property='og:title' content='Users app' />
            </Helmet>
        );
    }

    render() {
        const {product, addProductToCart: addToCart, categories} = this.props;
        if (!product) {
            return null;
        }
        const {catalog, articul, name, images, feature, ratio, info} = product;
        const catalogLink = `/catalog/${catalog}`;
        const catalogName = find(propEq('id', catalog), categories).name;
        const NewPrice = String(product.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

        return (
            <Page
                title={name}
                breadcrumbs={[
                    {name: 'Каталог', link: '/catalog'},
                    {name: catalogName, link: catalogLink},
                    {name, link: catalogLink + articul},
                ]}
            >
                {this.head()}
                <Flex flexDirection='column' mb='50px'>
                    <Flex justifyContent='space-between'>
                        <SlideShow
                            images={images}
                            name={name}
                        />
                        <Flex
                            flexDirection='column'
                            width='30%'
                            justifyContent='flex-start'
                            alignItems='flex-start'
                        >
                            <Features features={feature} />
                            <Text fontWeight='bold' color='grey' fontSize='s'>Артикул {articul}</Text>
                            <Rating count={ratio} />
                        </Flex>
                        <Flex flexDirection='column' width='30%' justifyContent='flex-start' alignItems='flex-end'>
                            <Text fontWeight='bold' mb={15} fontSize='l'>{NewPrice} ₽</Text>
                            <Button type='primary' onClick={addToCart.bind(this, product)}>В корзину</Button>
                        </Flex>
                    </Flex>
                    <Box>{info}</Box>
                </Flex>
            </Page>
        );
    }
}

const mapStateToProps = ({products, categories}, {match}) => ({
    product: find(propEq('articul', Number(match.params.id)), products),
    categories,
    path: match.url,
});

export default {
    loadData: ({dispatch}, {url}) => dispatch(fetchProduct(url)),
    component: connect(mapStateToProps, {fetchProduct, addProductToCart})(ProductPage),
};
