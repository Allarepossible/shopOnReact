import {FETCH_CATEGORIES} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORIES:
            return payload.data;
        default:
            return state;
    }
};
