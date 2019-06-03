import React from 'react';
import {connect} from 'react-redux';

import Filter from '../Filter';
import Box from '../Box';

const Filters = ({filters}) => (
    <Box background='white' width='100%' borderRadius='5px' mb={6}>
        {
            filters.map((filter, i) => (
                <Filter
                    key={i}
                    filter={filter}
                />
            ))
        }
    </Box>
);

const mapStateToProps = ({catalog}) => ({filters: catalog.filters});

export default connect(mapStateToProps)(Filters);
