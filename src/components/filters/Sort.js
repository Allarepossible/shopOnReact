import React from 'react';
import { connect } from 'react-redux';

const ViewItem = ({ id, name, active, changeViewProducts }) => {
    const activeClass = active ? ' active' : '';

    return (
        <li className='views__item'>
            <a className='views__link' onClick={changeViewProducts} data={id}>
                <span className={'views__view views__view_type_' + name + activeClass} />
            </a>
        </li>
    );
};

const Sort = ({ products, views, sorts, changeView, changeSort, sortProduct }) => {
    const changeViewProducts = (e) => {
        const newActiveId = Number(e.currentTarget.getAttribute('data'));
        const newViews = views.map((view, id) => {
            view.active = id === newActiveId;

            return view;
        });

        changeView(newViews);
    };

    const changeSortProducts = (e) => {
        const activeSort = e.target.value;
        const newSort = sorts.map((sort) => {
            sort.active = sort.name === activeSort;

            return sort;
        });
        const sortedProducts = products.sort((a,b) => {
            return a[activeSort] - b[activeSort];
        });

        changeSort(newSort);
        sortProduct(sortedProducts)
    };

    return (
        <div className='sort'>
            <div className='sort__item'>
                <div className='sort__item-title'>Сортировать по</div>
                <div className='sort__item-select'>
                    <select name='sort' onChange={changeSortProducts}>
                        <option value='date'>по новизне</option>
                        <option value='ratio'>по рейтингу</option>
                        <option value='price'>по цене</option>
                    </select>
                </div>
            </div>
            <div className='sort__item'>
                <div className='sort__item-title'>Вид каталога</div>
                <ul className='sort__item-view views'>
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
        products: state.products,
        views: state.views,
        sorts: state.sort
    }),
    dispatch => ({
        changeView: (newViews) => {
            const payload = newViews;
            dispatch({ type: 'CHANGE_VIEW', payload });
        },
        changeSort: (newSort) => {
            const payload = newSort;
            dispatch({ type: 'CHANGE_SORT', payload });
        },
        sortProduct: (sortProducts) => {
            const payload = sortProducts;
            dispatch({ type: 'SORT_PRODUCTS', payload });
        }
    })
)(Sort);
