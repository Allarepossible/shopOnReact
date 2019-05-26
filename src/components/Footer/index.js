import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Text from '../Text';
import Flex from '../Flex';
import Box from '../Box';
import Socials from '../Socials';
import MenuItem from '../MenuItem';

const FooterContainer = styled(Box)`
    padding: 30px 0 5px;
    background-image: url('/images/footer.png');
    min-width: 1256px;
`;

const Container = styled(Box)`
    margin: 0 auto;
    width: ${({theme}) => theme.maxWidths.main};
`;

const Copyright = styled(Text)`
    padding-top: 10px;
    border-top: 1px solid #494949;
`;

const Logo = styled.img`
    height: 40px;
`;

class Footer extends Component {
    constructor(props) {
        super(props);

        this.changeView = props.changeView;
        this.changeCatalog = this.changeCatalog.bind(this);
    }

    changeCatalog(e) {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = this.props.catalogs.filter(catalog => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products;

        this.changeView(sortProducts);
    }

    render() {
        const {catalogsName} = this.props;

        return (
            <FooterContainer>
                <Container>
                    <Flex justifyContent='space-between' mb={30}>
                        <Logo src="images/logo/logo_footer.png" alt="" />
                        <Flex justifyContent='space-between' alignItems='flex-end' flexDirection='column'>
                            <Socials type='footer' />
                            <Flex justifyContent='flex-end'>
                                <Flex flexWrap='wrap' justifyContent='flex-end'>
                                    {
                                        catalogsName.map(catalog => (
                                            <MenuItem
                                                key={catalog.name}
                                                name={catalog.name}
                                                id={catalog.id}
                                                type="footer"
                                                changeCatalog={this.changeCatalog}
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
    }
}

const mapStateToProps = state => ({
    catalogs: [],
    catalogsName: state.catalogs.map(catalog => ({
        name: catalog.name,
        id: catalog.id,
    })),
});

const mapDispatchToProps = dispatch => ({
    changeView: products => {
        const payload = products;

        dispatch({type: 'CHANGE_CATEGORY', payload});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
