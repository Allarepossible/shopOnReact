import React from 'react';

const Breadcrumb = ({ name, link }) => {
    return (
        <li className='breadcrumbs__item'>
            <a href={link} className='breadcrumbs__link'>{name}</a>
        </li>
    );
};

const Breadcrumbs = ({ catalog }) => {
    const breadcrumbs = catalog ? [{name: 'Главная', link:'/'}].concat(catalog) : [{name: 'Главная', link:'/'}];

    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <ul className='breadcrumbs__list'>
                    {
                        breadcrumbs.map((el, i) => {
                            return <Breadcrumb
                                key={i}
                                name={el.name}
                                link={el.link}
                            />;
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
