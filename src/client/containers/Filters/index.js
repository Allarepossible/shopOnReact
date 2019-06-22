import React from 'react';
import {connect} from 'react-redux';

import Filters from '../../components/Filters';

const mapStateToProps = ({filters}) => ({filters});

export default connect(mapStateToProps)(Filters);
