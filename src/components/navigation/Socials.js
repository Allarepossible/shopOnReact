import React from 'react';

const SocialItem = ({name, link, className}) => (
    <li className={`${className}__item`}>
        <a href={link} className={`${className}__link`}>
            <i className={`${className}__icon ${className}__icon_type_${name}`} />
        </a>
    </li>
);

const Socials = ({className}) => {
    const socials = [{
        name: 'fb',
        link: 'facebook.com',
    }, {
        name: 'vk',
        link: 'vk.com',
    }, {
        name: 'tw',
        link: 'twitter.com',
    }];

    return (
        <div className={className}>
            <ul className={`${className}__list`}>
                {
                    socials.map((social, i) => (
                        <SocialItem
                            key={i}
                            name={social.name}
                            link={social.link}
                            className={className}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Socials;
