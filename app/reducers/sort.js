const initialState = [
    {
        name: 'date',
        active: true,
    }, {
        name: 'ratio',
        active: false,
    }, {
        name: 'price',
        active: false,
    },
];

export default function sort(state = initialState, action) {
    if (action.type === 'CHANGE_SORT') {
        return action.payload;
    }
    return state;
}
