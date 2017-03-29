import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const StaticPage = ({ catalog, catalogs, changeView}) => {
    const changeCatalog = (e) => {
        const activeCategoryId = e.currentTarget.getAttribute('data');
        const activeCatalog = catalog.filter((catalog) => catalog.id === activeCategoryId)[0];
        const sortProducts = activeCatalog.products;

        changeView(sortProducts)
    };

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: 'Каталог', link: '/catalog/'}]}/>
                        <h1 className='h1 text text_color_grey text_weight_bold'>Каталог</h1>
                        <div className='layout'>
                            <ul className='catalog__list'>
                                {
                                    catalogs.map((item, i) => {
                                        return<li className='catalog__item' key={i}>
                                            <Link className='catalog__link' to={'/catalog/' + item.link} onClick={changeCatalog} data={item.link}>
                                                <div className="catalog__wrap">
                                                    <img className='catalog__img' src={item.img} alt={item.name} />
                                                </div>
                                                <span className='catalog__name'>{item.name}</span>
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        catalog: state.catalogs,
        products: state.products,
        catalogs: state.catalogs.map((catalog) => {
            return {
                name: catalog.name,
                link: catalog.id,
                img: catalog.img
            };
        }),
        ownProps
    }),
    dispatch => ({
        changeView: (products) => {
            const payload = products;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
        }
    })
)(StaticPage);
