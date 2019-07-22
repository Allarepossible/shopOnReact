import {isNil} from 'ramda';

export const FETCH_CART = 'FETCH_CART';
export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_ADMINS = 'FETCH_ADMINS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_SORT = 'CHANGE_SORT';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const INCREASE_COUNT_OF_PRODUCT_IN_CART = 'INCREASE_COUNT_OF_PRODUCT_IN_CART';
export const DECREASE_COUNT_OF_PRODUCT_IN_CART = 'DECREASE_COUNT_OF_PRODUCT_IN_CART';

export const fetchCatalog = path => async (dispatch, getState, api) => {
    const {data} = await api.get(path);

    dispatch({
        type: FETCH_CATALOG,
        payload: data,
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

export const addProductToCart = product => async dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
    });
};

export const changeFilter = filter => async dispatch => {
    dispatch({
        type: CHANGE_FILTER,
        payload: filter,
    });
};

export const changeSort = ({target}) => async dispatch => {
    dispatch({
        type: CHANGE_SORT,
        payload: target.value,
    });
};

export const deleteProductFromCart = product => async dispatch => {
    dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: product,
    });
};

export const changeCountOfProductInCart = (product, type) => async dispatch => {
    if (type === '+') {
        dispatch({
            type: INCREASE_COUNT_OF_PRODUCT_IN_CART,
            payload: product,
        });
    } else {
        dispatch({
            type: DECREASE_COUNT_OF_PRODUCT_IN_CART,
            payload: product,
        });
    }
};
