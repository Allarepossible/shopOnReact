import {connect} from 'react-redux';

import ProductSnippet from './view';
import {addProductToCart} from '../../actions';

const mapStateToProps = ({catalog}) => ({catalog});

export default connect(mapStateToProps, {addProductToCart})(ProductSnippet);
