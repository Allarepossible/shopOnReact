import { some, find, reject, assign } from 'lodash';

const initialState = [];

export default function cart(state = initialState, action) {
    if (action.type === 'DELETE_PRODUCT') {
        state = reject(state, {'articul': action.payload});
    } else if (action.type === 'INCREASE_COUNT_PRODUCT') {
        const articul = {'articul': action.payload};

        find(state, articul).count++;

        return [
            ...state
        ];
    } else if (action.type === 'DECREASE_COUNT_PRODUCT') {
        const articul = {'articul': action.payload};

        find(state, articul).count--;

        return [
            ...state
        ];
    } else if (action.type === 'ADD_TO_CART') {
        const product = action.payload;
        const articul = {'articul': product.articul};
        const productToCart = assign({
            'count': 1,
            product
        }, articul);

        if (some(state, articul)) {
            productToCart.count = find(state, articul).count +1;
            state = reject(state, articul);
        }

        return [
            ...state,
            productToCart
        ];
    }
    return state;
}
