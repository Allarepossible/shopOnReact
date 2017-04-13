const initialState = [];

export default function activeFilters(state = initialState, action) {
    if (action.type === 'ADD_TO_ACTIVE_FILTERS') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'REMOVE_FROM_ACTIVE_FILTERS') {
        return action.payload;
    }
    return state;
}
