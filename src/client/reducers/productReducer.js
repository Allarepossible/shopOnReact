import {FETCH_CART, FETCH_PRODUCT, CHANGE_FILTER} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT:
            return [...state, payload.data];
        case FETCH_CART:
            return [...state, ...payload.data];
        case CHANGE_FILTER:
            console.log(state, payload)
            return [...state, ...payload.data];
        default:
            return state;
    }
};
