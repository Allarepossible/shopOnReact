import {ADD_PRODUCT_TO_CART} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return payload.data;
        default:
            return state;
    }
};
