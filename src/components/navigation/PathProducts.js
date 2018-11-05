import React from 'react';

const PathProducts = ({countOfProducts}) => (
    <div className="path_products">
        <ul className={`path__list ${countOfProducts}`}>
            <li className="path__item">
                <a href="" className="path__link">&lt;</a>
            </li>
            <li className="path__item">
                <a href="" className="path__link">1</a>
            </li>
            <li className="path__item">
                <a href="" className="path__link">2</a>
            </li>
            <li className="path__item">
                <a href="" className="path__link">3</a>
            </li>
            <li className="path__item">
                <a href="" className="path__link">&gt;</a>
            </li>
        </ul>
    </div>
);

export default PathProducts;
