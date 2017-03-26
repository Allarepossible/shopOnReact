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
                <div className='container'>
                    <Socials className={'socials'} />
                    <a href='tel://+7(921)123-12-13' className='header__phone'>+7 (921) 123-12-12</a>
                    <div className='adress'>ул. Маяковская 6, офис 17</div>
                </div>
            </div>
            <div className='header__bottom'>
                <div className='container'>
                    <Link href='/'>
                        <img src='images/logo/logo.png' alt='Cooltech' className='logo'/>
                    </Link>
                    <form action='' className='search'>
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
