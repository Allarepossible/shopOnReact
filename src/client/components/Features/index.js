import React from 'react';
import styled, {withTheme} from 'styled-components';

import Flex from '../Flex';
import Text from '../Text';

const FeatureItem = styled(Flex)`
    padding: ${({size}) => (size === 'big' ? '5px 3px' : '1px 3px')};;
    
    background-color: #e6e6e6;
    
    &:nth-child(2n) {
        background-color: #fff;
    }
`;

const FeatureList = styled.div`
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: 15px;
`;

const Feature = ({name, value, size}) => (
    <FeatureItem justifyContent='space-between' size={size}>
        <Text>{name}</Text>
        <Text>{value}</Text>
    </FeatureItem>
);

const Features = ({features, size}) => (
    <FeatureList>
        {
            features.map(feature => (
                <Feature
                    key={feature.name}
                    name={feature.name}
                    value={feature.value}
                    size={size}
                />
            ))
        }
    </FeatureList>
);

export default withTheme(Features);
