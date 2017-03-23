import React from 'react';

const MenuItems = ({ name }) => {
    return (
        <li className="nav__item "> {/*nav__item-active*/}
            <a href="#" className="nav__link">{name}</a>
        </li>
    );
};

const Menu = () => {
    const navigation = ['Планшеты', 'Мобильные телефоны', 'Mp3 плееры', 'Персональные компьютеры', 'Ноутбуки', 'Аксессуары', 'Бытовая техника'];

    return (
        <nav className="nav">
            <div className="container">
                <ul className="nav__list">
                    {
                        navigation.map((el, i) => {
                            return <MenuItems
                                key={i}
                                name={el}
                            />;
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
