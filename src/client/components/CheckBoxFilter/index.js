import React from 'react';
import styled from 'styled-components';

import Box from '../common/Box';

const LabelCheckBox = styled.label` 
    position: relative;
    cursor: pointer;
`;


const FilterItem = styled(Box)`
    display: flex;

    margin-top: 16px;
    
    input {
        display: none;
    }
    
    input:checked + label:before {
        width: 19px;
        height: 19px;
    
        background: #ff6e35;
        box-shadow: none;
    }
    
    input:checked + label:after {
        font-size: 13px;
        
        position: absolute;
        top: 2px;
        left: 5px;
    
        content: '✔';
    
        color: #fff;
    }
    
    label:before {
        left: 0;

        display: inline-block;
    
        width: 19px;
        height: 19px;
        margin-right: 10px;
        margin-bottom: -4px;
    
        content: '';
    
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .3);
    }
`;

const CheckboxFilter = ({name}) => (
    <FilterItem>
        <input type='checkbox' id={name} />
        <LabelCheckBox htmlFor={name}>
            {name}
        </LabelCheckBox>
    </FilterItem>
);

export default CheckboxFilter;
