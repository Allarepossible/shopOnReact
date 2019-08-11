import {Observable} from 'rxjs';
import {ofType} from 'redux-observable';
import {mergeMap, ignoreElements} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchProductDone} from '../actions/product';

export const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    mergeMap(({payload}) => {
        const {api, path} = payload;

        return api.get(path)
            .then(({data}) => Observable.of(fetchProductDone(data)))
            .catch(error => {
                console.log('caught', error.message);
            });
    }),
    ignoreElements()
);
