import React from 'react';
import { connect } from 'react-redux';

const CheckboxFilter = ({ ownProps }) => {
    return (
        <li className='filter__item'>
            <input className='input input_type_checkbox' type='checkbox' id={ownProps.name} />
            <label htmlFor={ownProps.name} className='label label_type_checkbox'>{ownProps.name}</label>
        </li>
    )
};

export default connect(
    (state, ownProps) => ({
        activeFilters: state.activeFilters,
        products: state.products,
        ownProps
    }),
    dispatch => ({
    })
)(CheckboxFilter);
