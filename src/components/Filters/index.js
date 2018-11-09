import React from 'react';
import {connect} from 'react-redux';
import Filter from 'components/Filter';
import Box from 'components/Box';

const Filters = ({filters}) => (
    <Box background='white' width='100%' borderRadius='5px' mb={6}>
        {
            filters.map((el, i) => (
                <Filter
                    key={i}
                    name={el.name}
                    id={el.id}
                    type={el.type}
                    values={el.values}
                    open={el.open}
                    reset={el.reset}
                />
            ))
        }
    </Box>
);

const mapStateToProps = state => ({
    activeFilters: state.activeFilters,
    filters: state.filters,
});

export default connect(mapStateToProps)(Filters);
