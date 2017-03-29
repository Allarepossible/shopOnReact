import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Feature from '../components/products/Features';

const ProductPage = ({ activeSlide, catalog, ownProps, changeActiveSlide }) => {
    const product = catalog.products.find((product) => product.articul === Number(ownProps.params.productId));
    const catalogLink = '/catalog/' + catalog.id;
    const NewPrice = String(product.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

    const selectMiniImage = (e) => {
        const active = e.currentTarget.getAttribute('data');

        changeActiveSlide(active);
    };

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: 'Каталог', link: '/catalog'}, {name: catalog.name, link: catalogLink}, {name: product.name, link: catalogLink + product.articul}]} />
                        <h1 className='h1 text text_color_grey text_weight_bold'>{product.name}</h1>
                        <div className='layout'>
                            <div className='product__container'>
                                <div className='product__slideshow'>
                                    <div className='slideshow'>
                                        <img className='slideshow__big' src={product.images[activeSlide].image} alt={product.name} />

                                    </div>
                                    <ul className='slideshow__mini'>
                                        {
                                            product.images.map((image, i) => {
                                                const active = i === Number(activeSlide) ? ' mini__item-active' : '';
                                                return <li className={'mini__item' + active} key={i}>
                                                    <a className='slideshow_pic' onClick={selectMiniImage} data={i} >
                                                        <img className='mini__img' src={image.image} alt='' />
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <div className='products__articul'>
                                        <span className='art'> Артикул </span>
                                        <span className='art_number'>{product.articul}</span>
                                    </div>
                                </div>
                                <div className='products_center_content'>
                                    <div className='products__info'>{product.info}</div>
                                    <div className='products__feature'>
                                        <ul className='features__list'>
                                            {
                                                product.feature.map((el, i) => {
                                                    return <Feature
                                                        key={i}
                                                        name={el.name}
                                                        value={el.value}
                                                    />;
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className='products__reiting'>
                                        <div className={'reiting__stars stars-' + product.ratio}>
                                            <ul className='stars'>
                                                <li className='star'></li>
                                                <li className='star'></li>
                                                <li className='star'></li>
                                                <li className='star'></li>
                                                <li className='star'></li>
                                            </ul>
                                        </div>
                                        <div className='reiting__value'>{product.ratio}</div>
                                    </div>

                                </div>
                                <div className='products_right_content'>
                                    <div className='products__price'>{NewPrice} P</div>
                                    <div className='products_nallichie'>{product.nalichie}</div>
                                    <button className='products__buy'>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="product__information">
                            {product.info}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        catalog: state.catalogs.find((catalog) => catalog.id === ownProps.params.catalogId),
        activeSlide: state.activeSlide,
        ownProps
    }),
    dispatch => ({
        changeActiveSlide: (activeSlide) => {
            const payload = activeSlide;
            dispatch({ type: 'CHANGE_PRODUCT_SLIDE', payload });
        }
    })
)(ProductPage);
