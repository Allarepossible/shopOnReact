import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
} from '../actionTypes';
import {fetchProducts as fetchDataApi} from '../api';

export const fetchData = id => dispatch => {
    dispatch({type: FETCH_DATA_START});

    try {
        fetchDataApi(id).then(data => dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data,
        }));
    } catch (err) {
        dispatch({
            type: FETCH_DATA_FAIL,
            payload: err,
            error: true,
        });
    }
};
