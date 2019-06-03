import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

import {fetchCatalog} from '../actions';

class CatalogPage extends Component {
    componentDidMount() {
        this.props.fetchCatalog(this.props.path);
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.catalog.name} - shop`}</title>
                <meta property='og:title' content='Users app' />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
            </div>
        );
    }
}

const mapStateToProps = ({catalog}, {route}) => ({catalog, path: route.path});

export default {
    loadData: ({dispatch}, {path}) => dispatch(fetchCatalog(path)),
    component: connect(mapStateToProps, {fetchCatalog})(CatalogPage),
};
