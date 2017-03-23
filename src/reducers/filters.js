const initialState = [
    {
        name: 'Наличие в магазинах',
        open: 'yes',
        id: 'shop',
        type: 'select',
        values: ['Во всех магазинах', 'В ближайшем ко мне магазине'],
        reset: false
    }, {
        name: 'Бренды',
        open: 'yes',
        id: 'brands',
        type: 'checkbox',
        values: ['Lenovo', 'Apple', 'Samsung', 'Asus', 'Motorola'],
        reset: true
    }, {
        name: 'Цена',
        open: 'yes',
        id: 'price',
        type: 'range-box',
        values: {
            'от': '0',
            'до': '10 000'
        },
        reset: false
    }, {
        name: 'Цвет',
        open: 'yes',
        id: 'color',
        type: 'color',
        values: ['white', 'gray', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'skyblue', 'violet', 'pink', 'brown'],
        reset: true
    }, {
        name: 'Операционная система',
        open: 'yes',
        id: 'oc',
        type: 'checkbox',
        values: ['Android', 'iOS', 'Windows Mobile', 'Symbian', 'Custom'],
        reset: true
    }
];

export default function filters(state = initialState, action) {
    if (action.type === 'CHANGE_FILTER') {
        state['id' === action.payload.id] = action.payload;

        return [
            ...state
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}
