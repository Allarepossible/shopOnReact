import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Flex from '../Flex';
import SortBar from '../SortBar';
import ProductSnippet from '../../containers/ProductSnippet';

class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'tile',
            sort: 'date',
        };

        this.changeViewProducts = this.changeViewProducts.bind(this);
        this.changeSortProduct = this.changeSortProduct.bind(this);
    }

    changeViewProducts(e) {
        const activeView = e.currentTarget.getAttribute('data-view');

        this.setState({view: activeView});
    }

    changeSortProduct(e) {
        const activeSort = e.target.value;
        const sortedProducts = this.props.products.sort((a, b) => a[activeSort] - b[activeSort]);

        this.setState({sort: activeSort});
        this.setState({products: sortedProducts});
    }

    render() {
        const {view} = this.state;
        const {products} = this.props;
        const justifyContent = view === 'tile' && 'space-between';
        const flexWrap = view === 'tile' && 'wrap';
        const flexDirection = view !== 'tile' && 'column';

        return (
            <Fragment>
                <SortBar
                    activeView={this.state.view}
                    changeViewProducts={this.changeViewProducts}
                    changeSortProduct={this.changeSortProduct}
                />
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
                                view={view}
                            />
                        ))
                    }
                </Flex>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('----------', state)
    return ({
        products: state.products,
    });
}

export default connect(mapStateToProps)(CategoryList);
