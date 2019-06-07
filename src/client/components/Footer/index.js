import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Text from '../Text';
import Flex from '../Flex';
import Box from '../Box';
import Socials from '../Socials';
import MenuItem from '../MenuItem';
import Container from '../Container';

const FooterContainer = styled(Box)`
    padding: 30px 0 5px;
    background-image: url('/api/images/footer.png');
`;

const Copyright = styled(Text)`
    padding-top: 10px;
    border-top: 1px solid #494949;
`;

const Logo = styled.img`
    height: 40px;
`;

const Footer = ({catalogs}) => (
    <FooterContainer>
        <Container flexDirection='column'>
            <Flex justifyContent='space-between' mb={30}>
                <Logo src="/api/images/logo/logo_footer.png" alt="" />
                <Flex justifyContent='space-between' alignItems='flex-end' flexDirection='column'>
                    <Socials type='footer' />
                    <Flex justifyContent='flex-end'>
                        <Flex flexWrap='wrap' justifyContent='flex-end'>
                            {
                                catalogs && catalogs.map(catalog => (
                                    <MenuItem
                                        key={catalog.name}
                                        name={catalog.name}
                                        id={catalog.id}
                                        type="footer"
                                    />
                                ))
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Copyright fontSize='xs' textAlign='center' color='white'>
                All rights reserved. 2015. no copy alowed
            </Copyright>
        </Container>
    </FooterContainer>
);

const mapStateToProps = ({categories}) => ({
    catalogs: categories,
});

export default connect(mapStateToProps)(Footer);
