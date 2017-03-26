import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({ name, id, active, changeCatalog, className }) => {
    const activeMenu = id === active ? ' ' + className + '__item-active' : '';
    return (
        <li className={className + '__item' + activeMenu}>
            <Link to={'/catalog/' + id} className={className + '__link'} onClick={changeCatalog} data={id} activeClassName='active'>{name}</Link>
        </li>
    );
};

export default MenuItem;
