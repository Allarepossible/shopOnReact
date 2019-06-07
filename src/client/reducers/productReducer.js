import {FETCH_CART, FETCH_PRODUCT} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT:
            return [...state, payload.data];
        case FETCH_CART:
            return [...state, ...payload.data];
        default:
            return state;
    }
};
