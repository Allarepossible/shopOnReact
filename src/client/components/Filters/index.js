import React from 'react';

import Filter from '../Filter';
import Box from '../Box';

const Filters = ({filters}) => (
    <Box background='white' width='100%' borderRadius='5px' mb={6}>
        {
            filters && filters.map((filter, i) => (
                <Filter
                    key={i}
                    filter={filter}
                />
            ))
        }
    </Box>
);

export default Filters;
