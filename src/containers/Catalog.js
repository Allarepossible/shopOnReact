import React, {Component} from 'react';
import {connect} from 'react-redux';

import CategoryList from '../components/CategoryList';
import Filters from '../components/Filters';
import Flex from '../components/Flex';
import Page from './Page';
import {fetchData} from '../actions';

class Catalog extends Component {
    constructor(props) {
        super(props);
        const {params} = props;

        this.state = {
            id: params.catalogId,
        };
    }

    componentDidMount() {
        const {id} = this.state;
        console.log('======', this.state)
        this.props.fetchData(id);
    }

    render() {
        console.log(this.state, this.props)
        const {catalog} = this.props;
        //const catalogLink = `/catalog/${catalog.id}`;

        return (
            <Page
                withInformation={true}
                //title={catalog.name}
                // breadcrumbs={[{name: 'Каталог', link: '/catalog/'}, {name: catalog.name, link: catalogLink}]}
            >
                <Flex justifyContent='space-between'>
                    <Flex flexDirection='column' width='30%'>
                        {/*<Filters*/}
                        {/*    filters={catalog.filters}*/}
                        {/*/>*/}
                    </Flex>
                    <Flex flexDirection='column' width='67%'>
                        {/*<CategoryList*/}
                        {/*    products={catalog.products}*/}
                        {/*/>*/}
                    </Flex>
                </Flex>
            </Page>
        );
    }
}

const mapStateToProps = (state, {params}) => ({
    id: params.id,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
