import React from 'react';
import {connect} from 'react-redux';
import CheckboxFilter from 'components/CheckboxFilter';
import styled from 'styled-components';
import Box from 'components/Box';
import Text from 'components/Text';
import Flex from 'components/Flex';

const FiltersItem = styled(Box)`
    padding: 10px 15px;

    border-bottom: 1px solid #dee1e4;
    
    &:last-child {
        border-bottom: none;
    }
`;

const Title = styled(Text)`
    position: relative;
    display: block;
    padding: 5px;
    cursor: pointer;

    color: #333;
    
    .manage-filter {
        position: absolute;
        top: 8px;
        right: 0;
    
        display: block;
    
        width: 18px;
        height: 11px;
    
        background-image: url('/images/ar.png');
    }

    &.active .manage-filter {
        background-image: url('/images/ar^.png');
    }
`;


const FilterItem = styled(Box)`
    display: flex;
    align-items: center;

    margin-top: 16px;
    
    >input {
        display: none;
    }
    
    >input + label {
        &:before {
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 9px;
        
            display: inline-block;
        
            width: 20px;
            height: 20px;
            margin-right: 10px;
        
            content: '';
        
            background-color: #fff;
            box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .2);
        }
    }  
      
    >input:checked + label {
        &:before {
            font-size: 20px;
            line-height: 13px;
            
            position: absolute;
            padding-left: 2px;
            
            box-sizing: border-box;
            
            width: 20px;
            height: 20px;
        
            content: '●';
        
            color: #ff6e35;
            border: 2px solid #ff6e35;
            border-radius: 50%;
            box-shadow: none;
        }
    }
`;

const LabelRadio = styled.label`
    font-size: 14px;
    line-height: 20px;
    position: relative;
    padding-left: 29px;
    cursor: pointer;
`;

const Reset = styled.a`
    font-size: 14px;
    line-height: 1.2;

    display: block;

    margin-top: 14px;

    color: #5db2fc;
`;

const ColorLink = styled(Box)`
    display: block;

    width: 37px;
    height: 37px;

    border: 1px solid #dee1e4;
    
    &:hover, &.active {
        border: 2px solid #ff6e35;
    }
`;

const Input = styled.input`
    width: 80px;
    padding: 5px 6px;

    border: 1px solid #ebedef;
    border-radius: 3px;
    box-shadow: inset 0 1px 1px rgba(148, 148, 148, .43);
`;

const COLORS = {
    white: 'white',
    gray: '#ccc',
    black: 'black',
    blue: '#0a3153',
    red: '#ff1800',
    yellow: '#fff343',
    orange: '#fb914a',
    green: '#92c37c',
    skyblue: '#40a6ff',
    violet: '#9870ad',
    pink: '#dc78ad',
    brown: '#7f401d',
};

const Select = ({name}) => (
    <FilterItem>
        <input type='radio' id={name} name='available' />
        <LabelRadio htmlFor={name} className='radio'>
            {name}
        </LabelRadio>
    </FilterItem>
);

const Color = ({name}) => (
    <Flex width='20%' height='60px' justifyContent='center' alignItems='center'>
        <ColorLink background={COLORS[name]}/>
    </Flex>
);

const RangeBox = () => {
    const value = {
        minValue: 700,
        maxValue: 7000,
    };

    const changeValue = () => {

    };

    return (
        <Box mt={4}>
            <Flex justifyContent='space-between'>
                <span>от</span>
                <Input
                    type='text'
                    id='price-range1'
                    value={value.minValue}
                    onChange={changeValue}
                />
                <span>до</span>
                <Input
                    type='text'
                    id='price-range2'
                    value={value.maxValue}
                    onChange={changeValue}
                />
            </Flex>
        </Box>
    );
};

const Filter = ({filter, changeFilter}) => {
    const active = filter.open === 'yes' ? 'active' : '';

    const onTitleClick = () => {
        filter.open = filter.open === 'yes' ? 'no' : 'yes';

        changeFilter(filter);
    };
    const justifyContent = filter.id === 'color' ? 'space-between' : 'flex-start';
    const flexWrap = filter.id === 'color' ? 'wrap' : 'nowrap';
    const flexDirection = filter.id === 'color' ? 'row' : 'column';

    return (
        <FiltersItem>
            <Title className={active} onClick={onTitleClick}>
                {filter.name}
                <i className='manage-filter' key={filter.id} />
            </Title>
            {
                filter.open === 'yes'
                && (
                    <Flex justifyContent={justifyContent} flexWrap={flexWrap} flexDirection={flexDirection}>
                        {
                            filter.type === 'checkbox'
                        && filter.values.map((el, i) => (
                            <CheckboxFilter
                                id={filter.id}
                                key={i}
                                name={el}
                            />
                        ))
                        }
                        {
                            filter.type === 'select'
                        && filter.values.map(el => (
                            <Select
                                key={el}
                                name={el}
                            />
                        ))
                        }
                        {
                            filter.type === 'color'
                        && filter.values.map((el, i) => (
                            <Color
                                key={i}
                                name={el}
                            />
                        ))
                        }
                        {
                            filter.type === 'range-box'
                        && <RangeBox key={filter.id} type={filter.type} />
                        }
                        {
                            filter.reset === true
                        && <Reset href='#'>Сбросить фильтр</Reset>
                        }
                    </Flex>
                )
            }
        </FiltersItem>
    );
};

const mapStateToProps = (state, ownProps) => ({
    filter: state.filters.filter(item => item.id === ownProps.id)[0],
});

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => {
        const payload = filter;
        dispatch({type: 'CHANGE_FILTER', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
