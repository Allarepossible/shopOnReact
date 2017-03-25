const initialState = 0;

export default function activeSlide(state = initialState, action) {
    if (action.type === 'CHANGE_PRODUCT_SLIDE') {
        return action.payload;
    }
    return state;
}
