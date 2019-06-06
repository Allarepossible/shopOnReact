import {find, propEq} from 'ramda';

import {ADD_PRODUCT_TO_CART} from '../actions';

export default (state = [], {type, payload: articul}) => {
    const productAlreadyInCart = find(propEq('articul', articul), state);

    switch (type) {
        case ADD_PRODUCT_TO_CART:
            if (productAlreadyInCart) {
                productAlreadyInCart.count++;

                return [...state];
            }

            return [...state, {articul, count: 1}];
        default:
            return state;
    }
};
