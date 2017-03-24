import React from 'react';

const NavItems = ({ name }) => {
    return (
        <li className="footer_nav__item">
            <a href="#" className="footer_nav__link">{name}</a>
        </li>
    );
};

const SocialItems = ({ name }) => {
    return (
        <li className="footer_socials__item">
            <a href="#" className={"footer_socials__link footer_socials__link_" + name} />
        </li>
    );
};

const Footer = () => {
    const socials = ['fb', 'vk', 'tw'];
    const navigation = ['Планшеты', 'Мобильные телефоны', 'Mp3 плееры', 'Персональные компьютеры', 'Ноутбуки', 'Аксессуары', 'Бытовая техника'];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_content">
                    <img src="images/logo/logo_footer.png" alt="" className="footer_logo"/>
                    <div className="footer_socials">
                        <ul className="footer_socials__list">
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
                    <div className="footer_nav">
                        <ul className="footer_nav__list">
                            {
                                navigation.map((el, i) => {
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
            <div className="container">
                <div className="copyright">All rights reserved. 2015. no copy alowed</div>
            </div>
        </footer>
    );
};

export default Footer;
