
import {map, mergeMap} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {ajax} from 'rxjs/observable/dom/ajax';

import {FETCH_PRODUCT, fetchproductDone} from '../actions/product';

const fetchProductEpic = action$ => action$.pipe(
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
