import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import Box from '../Box';

const Star = styled(Box)`
    width: 16px;
    height: 15px;
    background: url('/api/images/star1.png');
 
    &.full {
        background: url('/api/images/star2.png') -2px -1px;
    }
`;

const Rating = ({count}) => {
    const stars = [];

    for (let i = 0; i < 6; i++) {
        const full = i < count ? '' : 'full';

        stars.push(<Star key={i} className={full} mr={1} />);
    }

    return (
        <Flex mb={15}>
            {stars}
        </Flex>
    );
};

export default Rating;
