import React from 'react';
import { connect } from 'react-redux';

import SlideShow from './SlideShow';

const Feature = ({ name, value }) => {
    return (
        <li className="features__item">
            <div className="features_name">{name}</div>
            <div className="features_value">{value}</div>
        </li>
    );
};

const Product = ({ images, feature, image, articul, name, info, ratio, price, nalichie, id, activeIndex }) => {
    return (
        <li className="products" key={id}>
            <SlideShow
                key={id}
                id={id}
                images={images}
                bigImage={image}
                articul={articul}
                name={name}
                activeIndex={activeIndex}
            />
            <div className="products_center_content">
                <div className="products__title">{name}</div>
                <div className="products__info">{info}</div>
                <div className="products__feature">
                    <ul className="features__list">
                        {
                            feature.map((el, i) => {
                                return <Feature
                                    key={i}
                                    name={el.name}
                                    value={el.value}
                                />;
                            })
                        }
                    </ul>
                </div>
                <div className="products__reiting">
                    <div className={"reiting__stars stars-" + ratio}>
                        <ul className="stars">
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                            <li className="star"></li>
                        </ul>
                    </div>
                    <div className="reiting__value">{ratio}</div>
                </div>

            </div>
            <div className="products_right_content">
                <div className="products__price">{price} P</div>
                <div className="products_nallichie">{nalichie}</div>
                <button className="products__buy">В корзину</button>
            </div>
        </li>
    );
};

const ProductsList = ({ products}) => {
    return (
        <div className="contacts">
            <ul className="products_list1">
                {
                    products.filter((product) => product.name).map((el, index) => {
                        return <Product
                            key={index}
                            id={index}
                            name={el.name}
                            info={el.info}
                            price={el.price}
                            nalichie={el.nalichie}
                            ratio={el.ratio}
                            articul={el.articul}
                            images={el.images}
                            feature={el.feature}
                            activeIndex={el.activeIndex}
                        />;
                    })
                }
            </ul>
        </div>
    );
};

const Products = ({ products }) => {
    return (
        <ProductsList key="products" products={products} />
    );
};

export default connect(
    (state) => ({
        products: state.products
    })
)(Products);
