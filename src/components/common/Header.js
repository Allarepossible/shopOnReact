import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Socials from '../navigation/Socials'

const NavItems = ({ name, link, cart }) => {
    const counter = name === 'Корзина' ? ' (' + cart.length + ')' : '';

    return (
        <li className='navigation__item'>
            <Link to={link} className='navigation__link'>{name + counter}</Link>
        </li>
    );
};

const Header = ({ cart }) => {
    const nav = [{
        name: 'Контакты',
        link: '/contacts'
    }, {
        name: 'Каталог',
        link: '/catalog'
    }, {
        name: 'Корзина',
        link: '/cart'
    }];

    return (
        <header className='header'>
            <div className='header__top'>
                <div className='header__container container'>
                    <Socials className={'socials'} />
                    <div className="header__contacts">
                        <div className='header__address'>ул. Маяковская 6, офис 17</div>
                        <a href='tel://+7(921)123-12-13' className='header__phone'>+7 (921) 123-12-12</a>
                    </div>
                </div>
            </div>
            <div className='header__bottom'>
                <div className='header__container container'>
                    <Link to='/'>
                        <img src='images/logo/logo.png' alt='Cooltech' className='header__logo'/>
                    </Link>
                    <form action='' className='header__search search'>
                        <input type='text' className='search__input' placeholder='Что будем искать'/>
                        <button type='submit' className='search__submit' href="/search">Найти</button>
                    </form>
                    <div className='navigation'>
                        <ul className='navigation__list'>
                            {
                                nav.map((el, i) => {
                                    return <NavItems
                                        key={i}
                                        name={el.name}
                                        link={el.link}
                                        cart={cart}
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

export default connect(
    (state) => ({
        cart: state.cart
    })
)(Header);
