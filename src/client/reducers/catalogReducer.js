import {FETCH_CATALOG} from '../actions';

export default (state = {}, {type, payload}) => {
    switch (type) {
        case FETCH_CATALOG:
            return {id: payload.id, name: payload.name};
        default:
            return state;
    }
};
