const initialState = 0;

export default function products(state = initialState, action) {
    if (action.type === 'CHANGE_CATEGORY') {
        const newState = action.payload;

        return [
            ...newState,
        ];
    } if (action.type === 'CHANGE_SLIDE') {
        const newState = action.payload2;
        newState[action.payload.id === 'id'] = action.payload;

        return [
            ...newState,
        ];
    } if (action.type === 'SORT_PRODUCTS') {
        return [
            ...action.payload,
        ];
    } if (action.type === 'SET_STATE') {
        return [
            ...action.payload,
        ];
    }
    return state;
}
