import React from 'react';

const Feature = ({ name, value }) => {
    return (
        <li className='features__item layout'>
            <div className='text'>{name}</div>
            <div className='text'>{value}</div>
        </li>
    );
};

const Features = ({ features }) => {
    return (
        <div className='product__features features'>
            <ul className='features__list'>
                {
                    features.map((el, i) => {
                        return <Feature
                            key={i}
                            name={el.name}
                            value={el.value}
                        />;
                    })
                }
            </ul>
        </div>
    );
};

export default Features;
