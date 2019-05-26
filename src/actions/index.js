import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    FETCH_CATALOGS_START,
    FETCH_CATALOGS_SUCCESS,
    FETCH_CATALOGS_FAIL,
} from '../actionTypes';
import {fetchProducts, fetchCatalogs} from '../api';

export const fetchData = id => dispatch => {
    dispatch({type: FETCH_DATA_START});

    try {
        fetchProducts(id).then(data => dispatch({
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

export const fetchCatalog = () => dispatch => {
    dispatch({type: FETCH_CATALOGS_START});

    try {
        fetchCatalogs().then(data => dispatch({
            type: FETCH_CATALOGS_SUCCESS,
            payload: data,
        }));
    } catch (err) {
        dispatch({
            type: FETCH_CATALOGS_FAIL,
            payload: err,
            error: true,
        });
    }
};
