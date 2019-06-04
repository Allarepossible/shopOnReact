import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {fetchProduct} from '../actions';
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
        const {product, catalog} = this.props;
        const catalogLink = `/catalog/${catalog.id}`;
        const NewPrice = String(product.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

        return (
            <Page
                title={product.name}
                breadcrumbs={[
                    {name: 'Каталог', link: '/catalog'},
                    {name: catalog.name, link: catalogLink},
                    {name: product.name, link: catalogLink + product.articul},
                ]}
            >
                {this.head()}
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
                            <Rating count={product.ratio} />
                        </Flex>
                        <Flex flexDirection='column' width='30%' justifyContent='flex-start' alignItems='flex-end'>
                            <Text fontWeight='bold' mb={15} fontSize='l'>{NewPrice} ₽</Text>
                            <Button type='primary' onClick={() => console.log('add')}>В корзину</Button>
                        </Flex>
                    </Flex>
                    <Box>{product.info}</Box>
                </Flex>
            </Page>
        );
    }
}

const mapStateToProps = ({product, catalog}, {match}) => ({product, catalog,  path: match.url});

export default {
    loadData: ({dispatch}, {url}) => dispatch(fetchProduct(url)),
    component: connect(mapStateToProps, {fetchProduct})(ProductPage),
};
