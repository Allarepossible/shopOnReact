const initialState = [];

export default function cart(state = initialState, action) {
    if (action.type === 'DELETE_PRODUCT') {
        state = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'ADD_TO_CART') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'CHANGE_COUNT_PRODUCT') {

        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
