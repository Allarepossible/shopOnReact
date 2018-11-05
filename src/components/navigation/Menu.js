import React from 'react';
import {connect} from 'react-redux';
import {find, sortBy} from 'lodash';

import MenuItem from './MenuItem';

const Menu = ({
    catalogs, ownProps, changeView, sort,
}) => {
    const changeCatalog = e => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = find(catalogs, {id: activeCategoryId});
        const sortProducts = sortBy(activeCatalog.products, [sort.name]);

        changeView(sortProducts, activeCatalog.filters);
    };

    return (
        <nav className="menu">
            <div className="container">
                <ul className="menu__list">
                    {
                        catalogs.map((catalog, i) => (
                            <MenuItem
                                key={i}
                                name={catalog.name}
                                id={catalog.id}
                                active={ownProps.active}
                                className="menu"
                                changeCatalog={changeCatalog}
                            />
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default connect(
    (state, ownProps) => ({
        sort: find(state.sort, 'active'),
        catalogs: state.catalogs,
        ownProps,
    }),
    dispatch => ({
        changeView: (products, filters) => {
            const payload = products;
            const payload2 = filters;
            dispatch({type: 'CHANGE_CATEGORY', payload});
            dispatch({type: 'SET_FILTERS', payload2});
        },
    })
)(Menu);
