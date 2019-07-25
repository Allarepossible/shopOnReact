import {
    FETCH_CART,
    FETCH_PRODUCT,
    CHANGE_FILTER,
    FETCH_CATALOG,
    CHANGE_SORT,
} from '../actions';
import {FETCH_PRODUCT_DONE} from '../actions/product';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_CATALOG:
            return payload.products;
        case FETCH_PRODUCT_DONE:
            console.log('===============', payload)
            return [...state, payload];
        case FETCH_CART:
            return [...state, ...payload.data];
        case CHANGE_FILTER:
            return state;
        case CHANGE_SORT:
            return [...state.sort((a, b) => a[payload] - b[payload])];
        default:
            return state;
    }
};
