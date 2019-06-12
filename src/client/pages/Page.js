import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchCart} from '../actions';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';
import Information from '../components/Information';

class Page extends Component {
    render() {
        const {
            children, title, breadcrumbs, withInformation,
        } = this.props;

        return (
            <Container flexDirection='column'>
                {
                    breadcrumbs && <Breadcrumbs catalog={breadcrumbs}/>
                }
                <Text fontWeight='bold' color='grey' is='h1' fontSize='xl' mb={3}>{title}</Text>
                {children}
                {
                    withInformation && <Information />
                }
            </Container>
        );
    }
}

const mapStateToProps = ({cart}, ownProps) => ({cart, ...ownProps});


export default connect(mapStateToProps, {fetchCart})(Page);
