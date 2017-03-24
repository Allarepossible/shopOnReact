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
        <div className="products__slideshow">
            <div className="slideshow">
                <img className="big-photo" src={bigImage} alt={product.name} />
            </div>
            <ul className="mini__list">
                {
                    product.images.map((image, i) => {
                        const active = i === Number(product.activeIndex) ? ' mini__item-active' : '';
                        return <li className={"mini__item" + active} key={i}>
                            <a className="slideshow_pic" onClick={selectMiniImage} data={i} >
                                <img className="mini__img" src={image.image} alt="" />
                            </a>
                        </li>
                    })
                }
            </ul>
            <div className="products__articul">
                <span className="art"> Артикул </span>
                <span className="art_number">{product.articul}</span>
            </div>
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
