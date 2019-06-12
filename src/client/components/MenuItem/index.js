import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {fetchCatalog} from '../../actions';
import Flex from '../Flex';
import {media} from '../../../helpers/global-styles';

const StyledMenuItem = styled(Flex)`
    &.active {
        background-color: #ff6e35;
        color: #fff;
    }
    &:hover {
        background-color: #e4e2e2;
    }
`;

const MenuLink = styled(Link)`
    padding: 15px 0;
    font-size: 16px;
    display: block;
    
    text-align: center;
    text-decoration: none;

    color: #484848;
    cursor: pointer;
    
    ${media.desktop`font-size: 15px;padding: 10px;`}
    ${media.phone`font-size: 14px;`}
    
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
    name, id, active = false, type, fetchCatalog: fetch,
}) => {
    const ml = type === 'footer' ? 20 : 0;

    return (
        <StyledMenuItem ml={ml} alignItems='center' flex={1} justifyContent='center'>
            {
                type === 'menu' ? (
                    <MenuLink
                        to={`/catalog/${id}`}
                        className={active && 'active'}
                        data={id}
                        onClick={fetch.bind(this, `/catalog/${id}`)}
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
        </StyledMenuItem>
    );
};

export default connect(null, {fetchCatalog})(MenuItem);
