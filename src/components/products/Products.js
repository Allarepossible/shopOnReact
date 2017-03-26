import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

const ProductsList = ({ products, views, catalogId }) => {
    const activeView = views.filter((view) => view.active)[0].name;

    return (
        <div className='contacts'>
            <ul className={'products_list products_list_type_' + activeView}>
                {
                    products.filter((product) => product.name).map((el, index) => {
                        if (index < 9) {
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
                                catalogId={catalogId}
                            />;
                        } else {
                            return '';
                        }
                    })
                }
            </ul>
        </div>
    );
};

const Products = ({ products, views, catalogId, ownProps }) => {
    return (
        <ProductsList key='products' products={products} views={views} catalogId={catalogId} countOfProducts={ownProps.countOfProducts}  />
    );
};

export default connect(
    (state, ownProps) => ({
        products: state.products,
        catalogId: ownProps.catalogId,
        views: state.views,
        ownProps
    })
)(Products);
