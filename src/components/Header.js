import React from 'react';

const NavItems = ({ name }) => {
    return (
        <li className="navigation__item">
            <a href="#" className="navigation__link">{name}</a>
        </li>
    );
};

const SocialItems = ({ name }) => {
    return (
        <li className="socials__item">
            <a href="#" className={"socials__link socials__link_" + name} />
        </li>
    );
};

const Header = () => {
    const socials = ['fb', 'vk', 'tw'];
    const nav = ['Карта проезда', 'История заказов', 'Корзина'];

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="socials">
                        <ul className="socials__list">
                            {
                                socials.map((el, i) => {
                                    return <SocialItems
                                        key={i}
                                        name={el}
                                    />;
                                })
                            }
                        </ul>
                    </div>
                    <a href="tel://+7(921)123-12-13" className="header__phone">+7 (921) 123-12-12</a>
                    <div className="adress">ул. Маяковская 6, офис 17</div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <a href="index.html">
                        <img src="images/logo/logo.png" alt="Cooltech" className="logo"/>
                    </a>
                    <form action="" className="search">
                        <input type="text" className="search__input" placeholder="Что будем искать"/>
                        <button type="submit" className="search__submit">Найти</button>
                    </form>
                    <div className="navigation">
                        <ul className="navigation__list">
                            {
                                nav.map((el, i) => {
                                    return <NavItems
                                        key={i}
                                        name={el}
                                    />;
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
