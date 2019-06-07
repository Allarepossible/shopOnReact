import React, {Component} from 'react';
import {isEmpty, map} from 'ramda';
import {connect} from 'react-redux';

import {fetchCart} from '../actions';
import {loadState} from '../../helpers/localStorage';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Text from '../components/Text';
import Information from '../components/Information';

class Page extends Component {
    componentDidMount() {
        // const {cart} = loadState() || this.props;
        //
        // if (!isEmpty(this.props.cart)) {
        //     const ids = map(i => i.articul, cart);
        //
        //     this.props.fetchCart(ids);
        // }
    }

    render() {
        const {children, title, breadcrumbs, withInformation} = this.props;

        return (
            <Container>
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

const mapStateToProps = ({cart}, ownProps) => ({cart, ...ownProps})


export default connect(mapStateToProps, {fetchCart})(Page);
