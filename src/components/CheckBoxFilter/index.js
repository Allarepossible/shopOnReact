import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Box from 'components/Box';

const LabelCheckBox = styled.label`
    position: relative;

    cursor: pointer;
    
    &:before {
        left: 0;

        display: inline-block;
    
        width: 19px;
        height: 19px;
        margin-right: 10px;
        margin-bottom: -4px;
    
        content: '';
    
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .3);
        -moz-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .3);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .3);
    }
`;

const InputCheckBox = styled.input`
    display: none;
    
    &:checked .checkbox:before {
        width: 19px;
        height: 19px;
    
        background: #ff6e35;
        box-shadow: none;
    }
    
    &:checked .checkbox:after {
        font-size: 10px;

        position: absolute;
        top: 2px;
        left: 4px;
    
        width: 8px;
        height: 6px;
    
        content: '';
        transform: rotate(125deg) skew(0, 0);
    
        color: #fff;
        border-top: 3px solid #fff;
        border-right: 3px solid #fff;
    }
`;


const FilterItem = styled(Box)`
    display: block;

    margin-top: 16px;
    
    input {
        display: none;
    }
`;

const CheckboxFilter = ({ownProps}) => (
    <FilterItem>
        <InputCheckBox type='checkbox' id={ownProps.name} />
        <LabelCheckBox htmlFor={ownProps.name}>
            {ownProps.name}
        </LabelCheckBox>
    </FilterItem>
);

const mapStateToProps = (state, ownProps) => ({
    activeFilters: state.activeFilters,
    products: state.products,
    ownProps,
});

export default connect(mapStateToProps)(CheckboxFilter);
