export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_ADMINS = 'FETCH_ADMINS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const fetchCatalog = path => async (dispatch, getState, api) => {
    const result = await api.get(path);

    dispatch({
        type: FETCH_CATALOG,
        payload: result,
    });
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
