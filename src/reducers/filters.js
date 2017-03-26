const initialState = 0;

export default function filters(state = initialState, action) {
    if (action.type === 'CHANGE_FILTER') {
        state['id' === action.payload.id] = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'SET_FILTERS') {

        return action.payload2;
    } else if (action.type === 'ADD_ACTIVE_FILTER') {
        return action.payload;
    }
    return state;
}
