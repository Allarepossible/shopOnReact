import React from 'react';
import {connect} from 'react-redux';
import ProductSnippet from 'containers/ProductSnippet';
import Flex from 'components/Flex';

const CategoryList = ({
    products, views, catalogId,
}) => {
    const activeView = views.filter(view => view.active)[0].name;
    const justifyContent = activeView === 'tile' && 'space-between';
    const flexWrap = activeView === 'tile' && 'wrap';
    const flexDirection = activeView !== 'tile' && 'column';

    return (
        <Flex mb={30} flexWrap={flexWrap} flexDirection={flexDirection} justifyContent={justifyContent}>
            {
                products.filter(product => product.name).map((el, index) => (
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
                ))
            }
        </Flex>
    );
};

const mapStateToProps = (state, {catalogId, countOfProducts}) => ({
    catalogId,
    countOfProducts,
    views: state.views,
    products: state.products,
});

export default connect(mapStateToProps)(CategoryList);
