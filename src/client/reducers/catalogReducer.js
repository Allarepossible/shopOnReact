import {CHANGE_SORT, FETCH_CATALOG} from '../actions';

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_CATALOG:
            return payload.data;
        case CHANGE_SORT:
            return {
                ...state,
                products: state.products.sort((a, b) => a[payload] - b[payload]),
            };
        default:
            return state;
    }
};
