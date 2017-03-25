import React from 'react';

const MenuItem = ({ name, id, active, changeCatalog, className }) => {
    const activeMenu = id === active ? ' ' + className + '__item-active' : '';
    return (
        <li className={className + '__item' + activeMenu}>
            <a href={'/#/catalog/' + id} className={className + '__link'} onClick={changeCatalog} data={id}>{name}</a>
        </li>
    );
};

export default MenuItem;
