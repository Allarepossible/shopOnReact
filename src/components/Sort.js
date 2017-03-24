import React from 'react';
import { connect } from 'react-redux';

const ViewItem = ({ id, name, active, changeViewProducts }) => {
    const activeClass = active ? ' active' : '';

    return (
        <li className="views__item">
            <a className="views__link" onClick={changeViewProducts} data={id}>
                <span className={"views__view views__view_type_" + name + activeClass} />
            </a>
        </li>
    );
};

const Sort = ({ views, changeView }) => {

    const changeViewProducts = (e) => {
        const newActiveId = Number(e.currentTarget.getAttribute('data'));
        const newViews = views.map((view, id) => {
            view.active = id === newActiveId;

            return view;
        });

        changeView(newViews);
    };

    return (
        <div className="sort">
            <div className="sort__item">
                <div className="sort__item-title">Сортировать по</div>
                <div className="sort__item-select">
                    <select name="sort">
                        <option value="price">по цене</option>
                        <option value="popular">по популярности</option>
                    </select>
                </div>
            </div>
            <div className="sort__item">
                <div className="sort__item-title">Вид каталога</div>
                <ul className="sort__item-view views">
                    {
                        views.map((view, index) => {
                            return <ViewItem
                                key={index}
                                id={index}
                                name={view.name}
                                active={view.active}
                                changeViewProducts={changeViewProducts}
                            />;
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        views: state.views
    }),
    dispatch => ({
        changeView: (newViews) => {
            const payload = newViews;
            dispatch({ type: 'CHANGE_VIEW', payload });
        }
    })
)(Sort);
