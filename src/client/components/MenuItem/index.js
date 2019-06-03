import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Box from '../Box';

const MenuLink = styled(Link)`
    padding: 15px;
    font-size: 16px;
    display: block;

    text-decoration: none;

    color: #484848;
    cursor: pointer;
    
    &.active {
        background-color: #ff6e35;
        color: #fff;
    }
    &:hover {
        background-color: #e4e2e2;
    }
`;

const FooterLink = styled(Link)`
    color: #fff;
    
    &:hover {
        text-decoration: none;
    }
`;


const MenuItem = ({
    name, id, active = false, type,
}) => {
    const ml = type === 'footer' ? 20 : 0;

    return (
        <Box ml={ml}>
            {
                type === 'menu' ? (
                    <MenuLink
                        to={`/catalog/${id}`}
                        className={active && 'active'}
                        data={id}
                    >
                        {name}
                    </MenuLink>
                ) : (
                    <FooterLink
                        to={`/catalog/${id}`}
                        className={active && 'active'}
                        data={id}
                    >
                        {name}
                    </FooterLink>
                )

            }
        </Box>
    );
};

export default MenuItem;

