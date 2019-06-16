import {FETCH_CART, FETCH_PRODUCT_DONE} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT_DONE:
            return [...state, payload];
        case FETCH_CART:
            return [...state, ...payload.data];
        default:
            return state;
    }
};
