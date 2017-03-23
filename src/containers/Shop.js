import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Breadcrumbs from '../components/Breadcrumbs';
import Products from '../components/Products';
import Filters from '../components/Filters';

const Shop = ({products, filters}) => {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <Menu />
                <div className="main_content">
                    <div className="container">
                        <Breadcrumbs />
                        <h1 className="main_head_text">Мобильные телефоны</h1>
                        <div className="layout">
                            <aside className="sidebar">
                                <Filters
                                    filters={filters}
                                />
                            </aside>
                            <div className="right_content">
                                <div className="content">
                                    <div className="content">
                                        <Products
                                            products={products}
                                        />
                                    </div>
                                    <div className="path_products">
                                        <ul className="path__list">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_information">
                    <div className="container">
                        <div className="info_container">
                            <div className="main_head_text">Важная информация</div>
                            <div className="text_info">
                                <p>Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Таким образом консультация с широким активом представляет собой интересный эксперимент проверки модели развития.</p>
                                <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Равным образом консультация с широким активом влечет за собой процесс внедрения и модернизации соответствующий условий активизации.</p>
                                <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации. С другой стороны сложившаяся структура организации позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.</p>
                                <p>Повседневная практика показывает, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Таким образом консультация с широким активом представляет собой интересный эксперимент проверки модели развития.</p>
                                <p>Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Равным образом консультация с широким активом влечет за собой процесс внедрения и модернизации соответствующий условий активизации.</p>
                                <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение соответствующий условий активизации. С другой стороны сложившаяся</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state, ownProps) => ({
        products: state.products,
        filters: state.filters,
        ownProps
    }),
    dispatch => ({})
)(Shop);
