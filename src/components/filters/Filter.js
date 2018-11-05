import React from 'react';
import {connect} from 'react-redux';

import CheckboxFilter from './CheckboxFilter';

const Select = ({id, name}) => (
    <li className="filter__item filter__item_type_radio">
        <label className="label label_type_radio" htmlFor={id}>
            <input className="input input_type_radio" type="radio" id={id} name="availible" />
            {name}
        </label>
    </li>
);

const Color = ({name}) => (
    <li className="color__item">
        <div className={`color__link ${name}`} key={name} />
        <span className="color__text">{name}</span>
    </li>
);

const RangeBox = () => {
    const value = {
        minValue: 700,
        maxValue: 7000,
    };

    const changeValue = () => {

    };

    return (
        <div className="filter filter_type_price">
            <div className="price-range">
                <div className="price-range__box">
                    <span className="price-range__text">от</span>
                    <input
                        type="text"
                        className="price-range__input"
                        id="price-range1"
                        value={value.minValue}
                        onChange={changeValue}
                    />
                    <span className="price-range__text">до</span>
                    <input
                        type="text"
                        className="price-range__input"
                        id="price-range2"
                        value={value.maxValue}
                        onChange={changeValue}
                    />
                </div>
            </div>
        </div>
    );
};

const Filter = ({filter, changeFilter}) => {
    const active = filter.open === 'yes' ? 'active' : '';

    const onTitleClick = () => {
        filter.open = filter.open === 'yes' ? 'no' : 'yes';

        changeFilter(filter);
    };

    return (
        <li className="filters__item">
            <div className={`filter__title ${active}`} onClick={onTitleClick}>
                {filter.name}
                <i className="manage-filter" key={filter.id} />
            </div>
            {
                filter.open === 'yes'
                && (
                    <div className={`filter filter_type_${filter.id}`}>
                        <ul className="filter__list">
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
                            && filter.values.map((el, i) => (
                                <Select
                                    key={i}
                                    id={i}
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
                            && <a href="#" className="reset-filter" key={filter.id}>Сбросить фильтр</a>
                            }
                        </ul>
                    </div>
                )
            }
        </li>
    );
};

export default connect(
    (state, ownProps) => ({
        filter: state.filters.filter(item => item.id === ownProps.id)[0],
    }),
    dispatch => ({
        changeFilter: filter => {
            const payload = filter;
            dispatch({type: 'CHANGE_FILTER', payload});
        },
    })
)(Filter);
