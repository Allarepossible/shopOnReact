import {pluck, merge} from 'ramda';

import {
    FETCH_DATA_SUCCESS,
} from '../actionTypes';

const initialState = {
    ids: [],
};

export default function page(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_DATA_SUCCESS:
            return merge(state, {
                ids: pluck('id', payload),
            });
        default:
            return state;
    }
};
