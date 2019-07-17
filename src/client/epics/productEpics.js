import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';

import {FETCH_PRODUCT, fetchproductDone} from '../actions/product';

export const fetchProductEpic = action$ => action$.pipe(
    ofType(FETCH_PRODUCT),
    mergeMap(action =>
        {
            console.lof('-----------------', action)
        }
        // ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
        //     map(response => fetchproductDone(response))
        // )
    )
);
