export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const result = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: result,
    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const result = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
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
