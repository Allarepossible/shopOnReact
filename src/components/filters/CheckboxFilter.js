import React from 'react';
import {connect} from 'react-redux';

const CheckboxFilter = ({ownProps}) => (
    <li className="filter__item">
        <label htmlFor={ownProps.name} className="label label_type_checkbox">
            <input className="input input_type_checkbox" type="checkbox" id={ownProps.name} />
            {ownProps.name}
        </label>
    </li>
);

export default connect(
    (state, ownProps) => ({
        activeFilters: state.activeFilters,
        products: state.products,
        ownProps,
    })
)(CheckboxFilter);
