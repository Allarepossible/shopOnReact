const initialState = 0;

export default function products(state = initialState, action) {
    if (action.type === 'CHANGE_CATEGORY') {
        state = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'CHANGE_SLIDE') {
        state = action.payload2;
        state['id' === action.payload.id] = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'SORT_PRODUCTS') {

        return [
            ...action.payload
        ];
    } else if (action.type === 'SET_STATE') {

        return [
            ...action.payload
        ];
    }
    return state;
}
