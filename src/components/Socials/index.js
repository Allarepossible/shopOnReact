import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';

const Link = styled(Flex)`
    justify-content: center;
    align-items: center;

    width: ${({type}) => (type === 'footer' ? 44 : 26)}px;
    height: ${({type}) => (type === 'footer' ? 44 : 26)}px;

    border-radius: 50%;
    background-color: ${({type}) => (type === 'footer' ? '#fff' : '#282828')};
    
    & + & {
        margin-left: 20px;
    }
`;

const IconFooter = styled.i`
    background: url('/images/social-se3b75604dd.png') no-repeat;
    
    &.vk {
        width: 16px;
        height: 21px;
    
        background-position: 0 -105px;
    }
    &.vk:hover {
        background-position: 0 -84px;
    }

    &.fb {
        width: 11px;
        height: 21px;
    
        background-position: 0 -21px;
    }
    &.fb:hover {
        background-position: 0 0;
    }
    
    &.tw {
        width: 25px;
        height: 21px;
    
        background-position: 0 -63px;
    }
    &.tw:hover {
        background-position: 0 -42px;
    }
`;

const Icon = styled.i`
    background: url('/images/socials-sb8bffdc494.png') no-repeat;
    
    &.vk {
        width: 10px;
        height: 12px;
    
        background-position: -404px 0;
    }
    &.vk:hover {
        background-position: -324px 0;
    }

    &.fb {
        width: 6px;
        height: 12px;
        
        background-position: -76px 0;
    }
    &.fb:hover {
        background-position: 0 0;
    }
    
    &.tw {
        width: 16px;
        height: 12px;
    
        background-position: -238px 0;
    }
    &.tw:hover {
        background-position: -152px 0;
    }
`;

const SocialItem = ({name, link, type}) => (
    <Link href={link} type={type}>
        {type === 'footer' ? <IconFooter className={name} /> : <Icon className={name} />}
    </Link>
);

const Socials = ({type}) => {
    const mb = type === 'footer' ? 20 : 0;
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
        <Flex justifyContent='space-between' mb={mb}>
            {
                socials.map((social, i) => (
                    <SocialItem
                        key={i}
                        name={social.name}
                        link={social.link}
                        type={type}
                    />
                ))
            }
        </Flex>
    );
};

export default Socials;
