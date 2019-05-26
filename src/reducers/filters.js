import {FETCH_DATA_SUCCESS} from '../actionTypes';

const initialState = 0;

export default function products(state = initialState, {type, payload}) {
    switch (type) {
        case 'CHANGE_FILTER':
            const newState = {};
            newState[payload.id === 'id'] = payload;

            return [
                ...state,
            ];
        case 'SET_FILTERS':
            return payload;
        case 'ADD_ACTIVE_FILTER':
            return payload;
        case FETCH_DATA_SUCCESS:
            return payload.filters;
        default:
            return state;
    }
}
