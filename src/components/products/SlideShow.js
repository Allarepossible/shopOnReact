import React from 'react';
import { connect } from 'react-redux';

const SlideShow = ({ product, products, changeSlide}) => {
    let bigImage = product.images[product.activeIndex].image;

    const selectMiniImage = (e) => {
        const active = e.currentTarget.getAttribute('data');
        product.activeIndex = active;
        changeSlide(product, products);
    };

    return (
        <div className='product__slideshow slideshow'>
            <div className="slideshow__wrap-img">
                <img className='slideshow__img' src={bigImage} alt={product.name} />
            </div>
            <ul className='slideshow__list layout'>
                {
                    product.images.map((image, i) => {
                        const active = i === Number(product.activeIndex) ? ' active' : '';
                        return <li className={'slideshow__item' + active} key={i}>
                            <a className='slideshow__link' onClick={selectMiniImage} data={i} >
                                <img className='slideshow__preview' src={image.image} alt='' />
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        products: state.products,
        product: state.products[ownProps.id] || state.catalogs.find(catalog => catalog.id === ownProps.catalogId).products[ownProps.id]
    }),
    dispatch => ({
        changeSlide: (product, products) => {
            const payload = product;
            const payload2 = products;

            dispatch({ type: 'CHANGE_SLIDE', payload, payload2 });
        }
    })
)(SlideShow);
