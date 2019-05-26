import {indexBy, prop, merge} from 'ramda';

import {
    FETCH_DATA_SUCCESS,
} from '../actionTypes';

const initialState = {};

export default function catalog(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_DATA_SUCCESS:
            console.log(payload)
            const newValues = indexBy(prop('id'), payload);

            return merge(state, newValues)
        default:
            return state;
    }
};
