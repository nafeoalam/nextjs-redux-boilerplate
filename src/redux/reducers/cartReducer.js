import { ADD_TO_CART, ADD_TO_NEW_CART, FETCH_CART } from '../store-constants';


const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_NEW_CART:
        case ADD_TO_CART:
        case FETCH_CART:
            return { ...state, cartData: action.payload };
        default:
            return state;
    }
};

export default cartReducer;