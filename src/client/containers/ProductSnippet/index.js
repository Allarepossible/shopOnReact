import {connect} from 'react-redux';

import ProductSnippet from '../../components/ProductSnippet';
import {addProductToCart} from '../../actions';

const mapStateToProps = ({catalog}) => ({catalog});

export default connect(mapStateToProps, {addProductToCart})(ProductSnippet);
