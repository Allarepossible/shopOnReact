import {ofType} from 'redux-observable';
import {mergeMap, map} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchProductDone} from '../actions/product';

export const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    mergeMap(({payload}) => {
        const {api, path} = payload;

        return api.get(path);
    }),
    map(({data}) => fetchProductDone(data))
);
