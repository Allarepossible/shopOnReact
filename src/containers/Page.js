import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCatalog} from 'actions';

import Flex from '../components/Flex';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Information from '../components/Information';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';
import GlobalStyle from '../global-styles.js';

class Page extends Component {
    componentDidMount() {
        this.props.fetchCatalog();
    }

    render() {
        const {children, withInformation, title, breadcrumbs} = this.props;
        return (
            <Flex flexDirection='column'>
                <GlobalStyle />
                <Header />
                <Menu />
                <Container>
                    {
                        breadcrumbs && <Breadcrumbs catalog={breadcrumbs}/>
                    }
                    <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{title}</Text>
                    {children}
                </Container>
                {
                    withInformation && <Information />
                }
                <Footer />
            </Flex>
        );
    }
}

const mapDispatchToProps = {
    fetchCatalog,
};

export default connect(null, mapDispatchToProps)(Page);
