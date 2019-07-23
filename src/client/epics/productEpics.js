import {ofType} from 'redux-observable';
import {mergeMap, map, ignoreElements} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchProductDone} from '../actions/product';

export const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    map(({payload}) => {
        const {api, path} = payload;

        return api.get(path);
    }),
    ignoreElements()
);
