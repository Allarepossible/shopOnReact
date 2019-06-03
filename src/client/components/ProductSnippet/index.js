import {connect} from 'react-redux';

import ProductSnippet from './view';

const mapStateToProps = ({catalog}) => ({catalog});

const mapDispatchToProps = dispatch => ({
    addToCart: product => {
        const payload = product;

        dispatch({type: 'ADD_TO_CART', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSnippet);
