import React from 'react';

const Feature = ({name, value}) => (
    <li className="features__item layout">
        <div className="text">{name}</div>
        <div className="text">{value}</div>
    </li>
);

const Features = ({features}) => (
    <div className="product__features features">
        <ul className="features__list">
            {
                features.map((el, i) => (
                    <Feature
                        key={i}
                        name={el.name}
                        value={el.value}
                    />
                ))
            }
        </ul>
    </div>
);

export default Features;
