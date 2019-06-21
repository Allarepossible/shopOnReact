import React from 'react';
import {connect} from 'react-redux';

import CategoryList from '../../components/CategoryList';

const mapStateToProps = ({catalog}) => ({
    products: catalog.products,
});

export default connect(mapStateToProps)(CategoryList);
