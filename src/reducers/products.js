const initialState = [];

export default function products(state = initialState, action) {
    if (action.type === 'CHANGE_CATEGORY') {
        state = action.payload;

        return [
            ...state
        ];
    }
    if (action.type === 'CHANGE_SLIDE') {
        state = action.payload2;
        state['id' === action.payload.id] = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'FILTER_ACTION') {
        return action.payload;
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}
