import React from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

const Menu = ({ catalogsName, catalogs, ownProps, changeView, sort }) => {
    const changeCatalog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalogs.filter((catalog) => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products.sort((a,b) => a[sort.name] - b[sort.name])

        changeView(sortProducts, activeCatalog.filters);
    };

    return (
        <nav className='menu'>
            <div className='container'>
                <ul className='menu__list'>
                    {
                        catalogsName.map((catalog, i) => {
                            return <MenuItem
                                key={i}
                                name={catalog.name}
                                id={catalog.id}
                                active={ownProps.active}
                                className={'menu'}
                                changeCatalog={changeCatalog}
                            />;
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default connect(
    (state, ownProps) => ({
        sort: state.sort.find((item) => item.active),
        catalogs: state.catalogs,
        catalogsName: state.catalogs.map((catalog) => {
            return {
                name: catalog.name,
                id: catalog.id}
        }),
        ownProps
    }),
    dispatch => ({
        changeView: (products , filters) => {
            const payload = products;
            const payload2 = filters;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
            dispatch({ type: 'SET_FILTERS', payload2 });
        }
    })
)(Menu);
