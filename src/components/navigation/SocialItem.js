import React from 'react';

const SocialItem = ({ name, link, className }) => {
    return (
        <li className={className + '__item'}>
            <a href={link} className={className + '__link ' + className + '__link_' + name} />
        </li>
    );
};

export default SocialItem;
