const initialState = [];

export default function images(state = initialState, action) {
    if (action.type === 'CHANGE_SLiIDE') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
