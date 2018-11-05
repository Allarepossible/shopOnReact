import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuItem from '../navigation/MenuItem';
import Socials from '../navigation/Socials';

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
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <img src="images/logo/logo_footer.png" alt="" className="footer__logo" />
                        <div className="footer__right">
                            <Socials className="footer_socials" />
                            <div className="footer_nav">
                                <ul className="footer_nav__list">
                                    {
                                        catalogsName.map(catalog => (
                                            <MenuItem
                                                key={catalog.name}
                                                name={catalog.name}
                                                id={catalog.id}
                                                className="footer_nav"
                                                changeCatalog={this.changeCatalog}
                                            />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">All rights reserved. 2015. no copy alowed</div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => ({
    catalogs: state.catalogs,
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
