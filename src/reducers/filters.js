const initialState = 0;

export default function filters(state = initialState, action) {
    if (action.type === 'CHANGE_FILTER') {
        const newState = {};
        newState[action.payload.id === 'id'] = action.payload;

        return [
            ...state,
        ];
    } if (action.type === 'SET_FILTERS') {
        return action.payload2;
    } if (action.type === 'ADD_ACTIVE_FILTER') {
        return action.payload;
    }
    return state;
}
