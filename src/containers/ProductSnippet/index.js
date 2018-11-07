import {connect} from 'react-redux';

import ProductSnippet from '../../components/ProductSnippet';

const mapStateToProps = state => ({
    catalogs: state.catalogs,
});

const mapDispatchToProps = dispatch => ({
    addToCart: product => {
        const payload = product;

        dispatch({type: 'ADD_TO_CART', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSnippet);
