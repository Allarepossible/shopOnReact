import React from 'react';
import { connect } from 'react-redux';

import Filter from './Filter';

const FiltersItem = ({ filters}) => {
    return (
        <div className='filters'>
            <ul className='filters__list'>
                {
                    filters.map((el, i) => {
                        return <Filter
                            key={i}
                            name={el.name}
                            id={el.id}
                            type={el.type}
                            values={el.values}
                            open={el.open}
                            reset={el.reset}
                        />;
                    })
                }
            </ul>
        </div>
    );
};

const Filters = ({ filters}) => {
    return (
        <FiltersItem key='filters' filters={filters}/>
    );
};

export default connect(
    (state) => ({
        filters: state.filters
    })
)(Filters);
