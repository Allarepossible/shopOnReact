import {find, propEq, reject} from 'ramda';

import {
    ADD_PRODUCT_TO_CART,
    DECREASE_COUNT_OF_PRODUCT_IN_CART,
    INCREASE_COUNT_OF_PRODUCT_IN_CART,
    DELETE_PRODUCT_FROM_CART,
} from '../actions';

export default (state = [], {type, payload: product}) => {
    const {articul} = product || {};
    const productAlreadyInCart = find(propEq('articul', articul), state);

    switch (type) {
        case ADD_PRODUCT_TO_CART:
            if (productAlreadyInCart) {
                productAlreadyInCart.count++;

                return [...state];
            }

            return [...state, {articul, count: 1}];
        case DECREASE_COUNT_OF_PRODUCT_IN_CART:
            productAlreadyInCart.count++;

            return [...state];
        case INCREASE_COUNT_OF_PRODUCT_IN_CART:
            productAlreadyInCart.count--;

            return [...state];
        case DELETE_PRODUCT_FROM_CART:
            return [...reject(propEq('articul', articul), state)];
        default:
            return state;
    }
};
