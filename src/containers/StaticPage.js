import React from 'react';
import { connect } from 'react-redux';

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
                <div className='main_content'>
                    <div className='container'>
                        <Breadcrumbs catalog={[{name: 'Каталог', link: '/#/catalog/'}]}/>
                        <h1 className='main_head_text'>Каталог</h1>
                        <div className='layout'>
                            <ul className='catalog__list'>
                                {
                                    catalogs.map((item, i) => {
                                        return<li className='catalog__item' key={i}>
                                            <a className='catalog__link' href={'/#/catalog/' + item.link} onClick={changeCatalog} data={item.link}>
                                                <div className="catalog__wrap">
                                                    <img className='catalog__img' src={item.img} alt={item.name} />
                                                </div>
                                                <span className='catalog__name'>{item.name}</span>
                                            </a>
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
    (state) => ({
        catalog: state.catalogs,
        products: state.products,
        catalogs: state.catalogs.map((catalog) => {
            return {
                name: catalog.name,
                link: catalog.id,
                img: catalog.img
            };
        })
    }),
    dispatch => ({
        changeView: (products) => {
            const payload = products;
            dispatch({ type: 'CHANGE_CATEGORY', payload });
        }
    })
)(StaticPage);
