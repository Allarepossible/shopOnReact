import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Box from '../common/Box';
import Flex from '../common/Flex';

const Item = styled(Flex)`
    & + &:before {
        margin: 0 8px 1px 8px;
        content: '>';
    }
`;

const StyledLink = styled(Link)`
    font-size: 13px;

    text-decoration: none;

    color: #333;
`;

const Breadcrumb = ({name, link}) => (
    <Item>
        <StyledLink to={link}>{name}</StyledLink>
    </Item>
);

const Breadcrumbs = ({catalog}) => {
    const breadcrumbs = catalog ? [{name: 'Главная', link: '/'}].concat(catalog) : [{name: 'Главная', link: '/'}];

    return (
        <Box mb={20}>
            <Flex>
                {
                    breadcrumbs.map(el => (
                        <Breadcrumb
                            key={el.name}
                            name={el.name}
                            link={el.link}
                        />
                    ))
                }
            </Flex>
        </Box>
    );
};

export default Breadcrumbs;
