import React from 'react';
import { connect } from 'react-redux';

const MenuItems = ({ name, id, active, changeCatelog }) => {
    const activeMenu = id === active ? ' nav__item-active' : '';
    return (
        <li className={"nav__item" + activeMenu}>
            <a href={"/#/catalog/" + id} className="nav__link" onClick={changeCatelog} data={id}>{name}</a>
        </li>
    );
};

const Menu = ({ catalogsName, catalogs, ownProps, changeView }) => {
    const changeCatelog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalogs.filter((catalog) => catalog.id === activeCategoryId)[0];

        changeView(activeCatalog.products)
    };

    return (
        <nav className="nav">
            <div className="container">
                <ul className="nav__list">
                    {
                        catalogsName.map((catalog, i) => {
                            return <MenuItems
                                key={i}
                                name={catalog.name}
                                id={catalog.id}
                                active={ownProps.active}
                                changeCatelog={changeCatelog}
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
        catalogs: state.catalogs,
        catalogsName: state.catalogs.map((catalog) => {return {name: catalog.name, id: catalog.id}}),
        ownProps
    }),
    dispatch => ({
        changeView: (products) => {
            const payload = products;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
        }
    })
)(Menu);
