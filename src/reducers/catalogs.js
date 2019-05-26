import {
    FETCH_CATALOGS_SUCCESS,
} from '../actionTypes';

const initialState = [];

export default function catalogs(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_CATALOGS_SUCCESS:
            return payload;
        default:
            return state;
    }
};
