import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {mergeMap, ignoreElements} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchProductDone} from '../actions/product';

export const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    mergeMap(({payload}) => {
        const {api, path} = payload;

        return api.get(path)
            .mergeMap(({data}) => of(fetchProductDone(data)))
            .catch(error => {
                console.log('caught', error.message);
            });
    }),
    ignoreElements()
);
