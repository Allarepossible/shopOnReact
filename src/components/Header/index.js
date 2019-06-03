import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {map, reduce} from 'lodash';
import styled from 'styled-components';

import Flex from '../Flex';
import Socials from '../Socials';
import Box from '../Box';

const Top = styled(Flex)`
    border-bottom: 2px solid #ebedef;
    background-color: #fff;
`;

const Container = styled(Flex)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Address = styled(Box)`
    line-height: 2.2;
    position: relative;
    
    &:before {
        position: absolute;
        top: 7px;
        left: -20px;
    
        width: 12px;
        height: 16px;
    
        content: '';
    
        background-image: url('/images/map-pin.png');
    }
`;

const Phone = styled.a`
    font-size: 18px;
    position: relative;
    display: block;
    text-decoration: none;
    color: black;
    
    &:before {
        position: absolute;
        top: 5px;
        left: -20px;
    
        width: 12px;
        height: 16px;
    
        content: '';
    
        background-image: url('/images/telephone.png');
    }
`;

const Logo = styled.img`
    width: 221px;
    height: 31px;
`;

const Form = styled.form`
   position: relative;
`;

const Input = styled.input`
    overflow: hidden;

    width: 334px;
    padding: 6px 16px;

    border: 1px solid #dee1e4;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, .6);
`;

const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    padding: 7px 15px;

    cursor: pointer;

    color: #fff;
    border-radius: 0 3px 3px 0;
    background-color: #ff6e35;
    
    &:hover {
        background-color: #e84100;
    }
`;

const StyledLink = styled(Link)`
    font-size: 16px;
    line-height: 2.3;

    color: #333;
    
     &:hover {
        color: #ff6e35;
     }
`;

const NavItems = ({name, link, cartSize}) => {
    const counter = name === 'Корзина' ? ` (${cartSize})` : '';

    return (
        <StyledLink to={link}>{name + counter}</StyledLink>
    );
};

const Header = ({cart}) => {
    const cartSize = reduce(map(cart, 'count'), (sum, i) => i + sum, 0);
    const nav = [{
        name: 'Контакты',
        link: '/contacts',
    }, {
        name: 'Каталог',
        link: '/catalog',
    }, {
        name: 'Корзина',
        link: '/cart',
    }];

    return (
        <Flex justifyContent='space-between' flexDirection='column'>
            <Top>
                <Container justifyContent='space-between' pt={30} pb={30}>
                    <Socials />
                    <Flex width='40%' justifyContent='space-between'>
                        <Address>ул. Маяковская 6, офис 17</Address>
                        <Phone href='tel://+7(921)123-12-13'>+7 (921) 123-12-12</Phone>
                    </Flex>
                </Container>
            </Top>
            <Flex justifyContent='space-between'>
                <Container justifyContent='space-between' pt={30} pb={30}>
                    <Link to='/'>
                        <Logo src='/api/images/logo/logo.png' alt='Cooltech' />
                    </Link>
                    <Form action="">
                        <Input type='text' placeholder='Что будем искать' />
                        <Button type='submit' href='/search'>Найти</Button>
                    </Form>
                    <Box width='30%'>
                        <Flex justifyContent='space-between'>
                            {
                                nav.map(el => (
                                    <NavItems
                                        key={el.name}
                                        name={el.name}
                                        link={el.link}
                                        cartSize={cartSize}
                                    />
                                ))
                            }
                        </Flex>
                    </Box>
                </Container>
            </Flex>
        </Flex>
    );
};

const mapStateToProps = state => ({cart: state.cart});

export default connect(mapStateToProps)(Header);
