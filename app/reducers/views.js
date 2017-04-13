const initialState = [
    {
        name: 'tile',
        active: true,
    }, {
        name: 'column',
        active: false,
    }, {
        name: 'line',
        active: false,
    },
];

export default function views(state = initialState, action) {
    if (action.type === 'CHANGE_VIEW') {
        return action.payload;
    }
    return state;
}
