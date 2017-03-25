import React from 'react';
import { connect } from 'react-redux';

const MenuItems = ({ name, id, active, changeCatalog }) => {
    const activeMenu = id === active ? ' nav__item-active' : '';
    return (
        <li className={'nav__item' + activeMenu}>
            <a href={'/#/catalog/' + id} className='nav__link' onClick={changeCatalog} data={id}>{name}</a>
        </li>
    );
};

const Menu = ({ catalogsName, catalogs, ownProps, changeView, sort }) => {
    const changeCatalog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalogs.filter((catalog) => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products.sort((a,b) => a[sort.name] - b[sort.name])

        changeView(sortProducts)
    };

    return (
        <nav className='nav'>
            <div className='container'>
                <ul className='nav__list'>
                    {
                        catalogsName.map((catalog, i) => {
                            return <MenuItems
                                key={i}
                                name={catalog.name}
                                id={catalog.id}
                                active={ownProps.active}
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
        catalogsName: state.catalogs.map((catalog) => {return {name: catalog.name, id: catalog.id}}),
        ownProps
    }),
    dispatch => ({
        changeView: (products) => {
            const payload = products;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
        },
        sortProduct: (sortProducts) => {
            const payload = sortProducts;
            dispatch({ type: 'SORT_PRODUCTS', payload });
        }
    })
)(Menu);
