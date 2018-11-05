import React from 'react';
import {Link} from 'react-router';

const Breadcrumb = ({name, link}) => (
    <li className="breadcrumbs__item">
        <Link to={link} className="breadcrumbs__link">{name}</Link>
    </li>
);

const Breadcrumbs = ({catalog}) => {
    const breadcrumbs = catalog ? [{name: 'Главная', link: '/'}].concat(catalog) : [{name: 'Главная', link: '/'}];

    return (
        <div className="breadcrumbs">
            <div className="container">
                <ul className="breadcrumbs__list">
                    {
                        breadcrumbs.map((el, i) => (
                            <Breadcrumb
                                key={i}
                                name={el.name}
                                link={el.link}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
