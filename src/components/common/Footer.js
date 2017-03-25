import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../navigation/MenuItem';
import SocialItem from '../navigation/SocialItem';

const Footer = ({ catalogs, catalogsName, changeView}) => {
    const socials = [{
        name: 'fb',
        link: 'facebook.com'
    }, {
        name: 'vk',
        link: 'vk.com'
    }, {
        name: 'tw',
        link: 'twitter.com'
    }];

    const changeCatalog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalogs.filter((catalog) => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products;

        changeView(sortProducts)
    };

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_content'>
                    <img src='images/logo/logo_footer.png' alt='' className='footer_logo'/>
                    <div className='footer_socials'>
                        <ul className='footer_socials__list'>
                            {
                                socials.map((social, i) => {
                                    return <SocialItem
                                        key={i}
                                        name={social.name}
                                        link={social.link}
                                        className={'footer_socials'}
                                    />;
                                })
                            }
                        </ul>
                    </div>
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
            <div className='container'>
                <div className='copyright'>All rights reserved. 2015. no copy alowed</div>
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
