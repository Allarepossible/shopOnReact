import {isNil} from 'ramda';

export const FETCH_CART = 'FETCH_CART';
export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchCatalog = path => async (dispatch, getState, api) => {
    const result = await api.get(path);

    dispatch({
        type: FETCH_CATALOG,
        payload: result,
    });
};

export const fetchCart = ids => async (dispatch, getState, api) => {
    const result = await api.get(`products?ids=${ids}`);

    if (!isNil(result)) {
        dispatch({
            type: FETCH_CART,
            payload: result,
        });
    }
};

export const fetchCategories = () => async (dispatch, getState, api) => {
    const result = await api.get('/catalogs');
    dispatch({
        type: FETCH_CATEGORIES,
        payload: result,
    });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
    const result = await api.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: result,
    });
};
