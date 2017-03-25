import React from 'react';

import SocialItem from '../navigation/SocialItem'

const NavItems = ({ name }) => {
    return (
        <li className='navigation__item'>
            <a href='#' className='navigation__link'>{name}</a>
        </li>
    );
};

const Header = () => {
    const nav = ['Карта проезда', 'История заказов', 'Корзина'];
    const socials = [{
        name: 'fb',
        link: 'facebook.com'
    }, {
        name: 'vk',
        link: 'vk.com'
    }, {
        name: 'tw',
        link: 'twitter.com'
    }];


    return (
        <header className='header'>
            <div className='header__top'>
                <div className='container'>
                    <div className='socials'>
                        <ul className='socials__list'>
                            {
                                socials.map((social, i) => {
                                    return <SocialItem
                                        key={i}
                                        name={social.name}
                                        link={social.link}
                                        className={'socials'}
                                    />;
                                })
                            }
                        </ul>
                    </div>
                    <a href='tel://+7(921)123-12-13' className='header__phone'>+7 (921) 123-12-12</a>
                    <div className='adress'>ул. Маяковская 6, офис 17</div>
                </div>
            </div>
            <div className='header__bottom'>
                <div className='container'>
                    <a href='index.html'>
                        <img src='images/logo/logo.png' alt='Cooltech' className='logo'/>
                    </a>
                    <form action='' className='search'>
                        <input type='text' className='search__input' placeholder='Что будем искать'/>
                        <button type='submit' className='search__submit' href="/#/search">Найти</button>
                    </form>
                    <div className='navigation'>
                        <ul className='navigation__list'>
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
