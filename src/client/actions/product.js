import {createAction} from 'redux-actions';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_DONE = 'FETCH_PRODUCT_DONE';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const INCREASE_COUNT_OF_PRODUCT_IN_CART = 'INCREASE_COUNT_OF_PRODUCT_IN_CART';
export const DECREASE_COUNT_OF_PRODUCT_IN_CART = 'DECREASE_COUNT_OF_PRODUCT_IN_CART';

export const fetchProduct = id => ({type: FETCH_PRODUCT, payload: id});
export const fetchProductDone = product => ({type: FETCH_PRODUCT_DONE, payload: product});

// export const fetchProduct = path => async (dispatch, getState, api) => {
//     const result = await api.get(path);
//
//     dispatch({
//         type: FETCH_PRODUCT,
//         payload: result,
//     });
// };

export const addProductToCart = product => async dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
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
