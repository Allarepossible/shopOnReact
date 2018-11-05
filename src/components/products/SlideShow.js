import React from 'react';
import {connect} from 'react-redux';
import {find} from 'lodash';

const SlideShow = ({product, products, changeSlide}) => {
    const bigImage = product.images[product.activeIndex].image;

    const selectMiniImage = e => {
        const active = e.currentTarget.getAttribute('data');
        product.activeIndex = active;
        changeSlide(product, products);
    };

    return (
        <div className="product__slideshow slideshow">
            <div className="slideshow__wrap-img">
                <img className="slideshow__img" src={bigImage} alt={product.name} />
            </div>
            <ul className="slideshow__list layout">
                {
                    product.images.map((image, i) => {
                        const active = i === Number(product.activeIndex) ? ' active' : '';
                        return (
                            <li className={`slideshow__item${active}`} key={i}>
                                <a className="slideshow__link" onClick={selectMiniImage} data={i}>
                                    <img className="slideshow__preview" src={image.image} alt="" />
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

const findInCatalog = ({catalogId, articul}, {catalogs}) => find(find(catalogs, {id: catalogId}).products, {articul});

export default connect(
    (state, ownProps) => ({
        products: state.products,
        product: find(state.products, {articul: ownProps.articul}) || findInCatalog(ownProps, state),
    }),
    dispatch => ({
        changeSlide: (product, products) => {
            const payload = product;
            const payload2 = products;

            dispatch({type: 'CHANGE_SLIDE', payload, payload2});
        },
    })
)(SlideShow);
