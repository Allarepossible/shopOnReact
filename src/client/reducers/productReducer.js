import {FETCH_PRODUCT} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT:
            return payload.data;
        default:
            return state;
    }
};
