import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';

const Button = styled.button`
    font-size: 11px;

    padding: 4px 8px;

    text-decoration: none;

    color: #7f7f7f;
    border: 1px solid #dee1e4;
    border-radius: 3px;
    background-color: #fbfbfb;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .004);
    
    &:hover {
        border: 1px solid #c8c8c8;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .12), inset 0 1px 0 1px rgba(255, 255, 255, .004);
    }
`;

const Path = () => (
    <Flex justifyContent='flex-end'>
        <Flex>
            <Flex mr={1}>
                <Button>&lt;</Button>
            </Flex>
            <Flex mr={1}>
                <Button>1</Button>
            </Flex>
            <Flex mr={1}>
                <Button>2</Button>
            </Flex>
            <Flex mr={1}>
                <Button>3</Button>
            </Flex>
            <Flex>
                <Button>&gt;</Button>
            </Flex>
        </Flex>
    </Flex>
);

export default Path;
