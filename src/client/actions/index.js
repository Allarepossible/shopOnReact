export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const result = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
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
