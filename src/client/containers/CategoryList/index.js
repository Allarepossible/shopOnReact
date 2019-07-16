import {connect} from 'react-redux';

import CategoryList from '../../components/CategoryList';
import {changeSort} from '../../actions';

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps, {changeSort})(CategoryList);
