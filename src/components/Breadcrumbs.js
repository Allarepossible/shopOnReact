import React from 'react';

const Breadcrumb = ({ name }) => {
    return (
        <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">{name}</a>
        </li>
    );
};

const Breadcrumbs = () => {
    const breadcrumbs = ['Главная', "Каталог"];

    return (
        <div className="breadcrumbs">
            <div className="container">
                <ul className="breadcrumbs__list">
                    {
                        breadcrumbs.map((el, i) => {
                            return <Breadcrumb
                                key={i}
                                name={el}
                            />;
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
