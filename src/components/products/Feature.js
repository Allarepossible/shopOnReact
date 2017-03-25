import React from 'react';

const Feature = ({ name, value }) => {
    return (
        <li className='features__item'>
            <div className='features_name'>{name}</div>
            <div className='features_value'>{value}</div>
        </li>
    );
};

export default Feature;
