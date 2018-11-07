import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';

const Text = styled.p`
    margin: 0;
    font-size: 1em;
`;

const FeatureItem = styled(Flex)`
    padding: 1px 3px;
    
    background-color: #e6e6e6;
    
    &:nth-child(2n) {
        background-color: #fff;
    }
`;

const FeatureList = styled.div`
    width: 95%;
    border: 1px solid #eee;
    margin-bottom: 15px;
`;

const Feature = ({name, value}) => (
    <FeatureItem justifyContent='space-between'>
        <Text>{name}</Text>
        <Text>{value}</Text>
    </FeatureItem>
);

const Features = ({features}) => (
    <FeatureList>
        {
            features.map(feature => (
                <Feature
                    key={feature.name}
                    name={feature.name}
                    value={feature.value}
                />
            ))
        }
    </FeatureList>
);

export default Features;
