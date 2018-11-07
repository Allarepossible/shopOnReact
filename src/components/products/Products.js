import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Flex from '../Flex';
import ProductSnippet from '../../containers/ProductSnippet';

const CategoryList = styled(Flex)`
    margin-bottom: 30px;
`;

const ProductsList = ({products, views, catalogId}) => {
    const activeView = views.filter(view => view.active)[0].name;
    const justifyContent = activeView === 'tile' && 'space-between';
    const flexWrap = activeView === 'tile' && 'wrap';
    const flexDirection = activeView !== 'tile' && 'column';

    return (
        <CategoryList flexWrap={flexWrap} flexDirection={flexDirection} justifyContent={justifyContent}>
            {
                products.filter(product => product.name).map((el, index) => {
                    if (index < 9) {
                        return (
                            <ProductSnippet
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
                                view={activeView}
                                catalogId={catalogId}
                            />
                        );
                    }
                    return '';
                })
            }
        </CategoryList>
    );
};

const Products = ({
    products, views, catalogId, countOfProducts,
}) => (
    <ProductsList
        products={products}
        views={views}
        catalogId={catalogId}
        countOfProducts={countOfProducts}
    />
);

const mapStateToProps = (state, {catalogId, countOfProducts}) => ({
    catalogId,
    countOfProducts,
    views: state.views,
    products: state.products,
});

export default connect(mapStateToProps)(Products);
