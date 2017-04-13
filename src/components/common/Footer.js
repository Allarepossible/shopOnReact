import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../navigation/MenuItem';
import Socials from '../navigation/Socials';

const Footer = ({ catalogs, catalogsName, changeView}) => {
    const changeCatalog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalogs.filter((catalog) => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products;

        changeView(sortProducts)
    };

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <img src='/images/logo/logo_footer.png' alt='' className='footer__logo'/>
                    <div className="footer__right">
                        <Socials className={'footer_socials'} />
                        <div className='footer_nav'>
                            <ul className='footer_nav__list'>
                                {
                                    catalogsName.map((catalog, i) => {
                                        return <MenuItem
                                            key={i}
                                            name={catalog.name}
                                            id={catalog.id}
                                            className={'footer_nav'}
                                            changeCatalog={changeCatalog}
                                        />;
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__copyright'>All rights reserved. 2015. no copy alowed</div>
            </div>
        </footer>
    );
};

export default connect(
    (state, ownProps) => ({
        catalogs: state.catalogs,
        catalogsName: state.catalogs.map((catalog) => {
            return {
                name: catalog.name,
                id: catalog.id
            }
        })
    }),
    dispatch => ({
        changeView: (products) => {
            const payload = products;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
        }
    })
)(Footer);
