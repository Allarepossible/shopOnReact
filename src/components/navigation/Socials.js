import React from 'react';

const SocialItem = ({ name, link, className }) => {
    return (
        <li className={className + '__item'}>
            <a href={link} className={className + '__link ' + className + '__link_' + name} />
        </li>
    );
};

const Socials = ({ className }) => {
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
        <div className={className}>
            <ul className={className + '__list'}>
                {
                    socials.map((social, i) => {
                        return <SocialItem
                            key={i}
                            name={social.name}
                            link={social.link}
                            className={className}
                        />;
                    })
                }
            </ul>
        </div>
    );
};

export default Socials;
