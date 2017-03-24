import React from 'react';

const Sort = () => {
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
                    <li className="views__item">
                        <a href="#" className="views__link">
                            <span className="views__view views__view_type_column" />
                        </a>
                    </li>
                    <li className="views__item">
                        <a href="#" className="views__link">
                            <span className="views__view views__view_type_tile" />
                        </a>
                    </li>
                    <li className="views__item">
                        <a href="#" className="views__link">
                            <span className="views__view views__view_type_line" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sort;
