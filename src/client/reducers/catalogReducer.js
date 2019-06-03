import {FETCH_CATALOG} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_CATALOG:
            return payload.data;
        default:
            return state;
    }
};
