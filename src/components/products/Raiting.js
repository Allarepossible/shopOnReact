import React from 'react';

const Raiting = ({ count }) => {
    const stars = ['star', 'star', 'star', 'star', 'star'];

    return (
        <div className='product__raiting raiting layout'>
            <ul className='raiting__list layout'>
                {
                    stars.map((item, i) => {
                        const full = i < count ? '' : '-full';
                        return <li key={i} className={'raiting__star ' + item + full} />
                    })
                }
            </ul>
            <div className='raiting__value text text_size_s text_weight_semibold'>{count}</div>
        </div>
    );
};

export default Raiting;
