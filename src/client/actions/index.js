export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_ADMINS = 'FETCH_ADMINS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const INCREASE_COUNT_PRODUCT = 'INCREASE_COUNT_PRODUCT';
export const DECREASE_COUNT_PRODUCT = 'DECREASE_COUNT_PRODUCT';

export const fetchCatalog = path => async (dispatch, getState, api) => {
    const result = await api.get(path);

    dispatch({
        type: FETCH_CATALOG,
        payload: result,
    });
};

export const fetchProduct = path => async (dispatch, getState, api) => {
    const result = await api.get(path);

    dispatch({
        type: FETCH_PRODUCT,
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

export const addProductToCart = articul => async dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: articul,
    });
};

export const deleteProduct = articul => async dispatch => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: articul,
    });
};

export const changeCountOfProductInCart = (articul, type) => async dispatch => {
    if (type === '+') {
        dispatch({
            type: INCREASE_COUNT_PRODUCT,
            payload: articul,
        });
    } else {
        dispatch({
            type: DECREASE_COUNT_PRODUCT,
            payload: articul,
        });
    }
};
