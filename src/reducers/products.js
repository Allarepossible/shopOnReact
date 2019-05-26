import {FETCH_DATA_SUCCESS} from '../actionTypes';

const initialState = 0;

export default function products(state = initialState, {type, payload}) {
    switch (type) {
        case 'CHANGE_CATEGORY':
            return [
                ...payload,
            ];
        case 'CHANGE_SLIDE':
            return [
                ...payload,
            ];
        case 'SORT_PRODUCTS':
            return [
                ...payload,
            ];
        case 'SET_STATE':
            return [
                ...payload,
            ];
        case FETCH_DATA_SUCCESS:
            return payload.products;
        default:
            return state;
    }
}
