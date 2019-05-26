import {pick} from 'ramda';

import {
    FETCH_DATA_SUCCESS,
} from '../actionTypes';

const initialState = {};

export default function catalog(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_DATA_SUCCESS:
            return pick(['id', 'name', 'img'], payload);
        default:
            return state;
    }
}
