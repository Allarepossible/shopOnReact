import {ofType} from 'redux-observable';
import {map, mergeMap} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchproductDone} from '../actions/product';

const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchproductDone(response))
        )
    )
);
