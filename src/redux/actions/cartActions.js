import { ADD_TO_CART, ADD_TO_NEW_CART, FETCH_CART } from '../store-constants';
import * as api from '../../api/routes/cart.api';


export const addToNewCart = (data) => async (dispatch) => {
    try {
        const newCart = await api.createCart(data);
        dispatch({ type: ADD_TO_NEW_CART, payload: newCart });
    } catch (error) {
        console.log(error.message);
    }
};

export const addToCart = (data, customer_id) => async (dispatch) => {
    try {
        const updatedCart = await api.updateCart(customer_id, data)

        dispatch({ type: ADD_TO_CART, payload: updatedCart });
    } catch (error) {
        console.log(error.message);
    }
};

export const getCart = (customer_id) => async (dispatch) => {
    try {
        const cart = await api.fetchCart(customer_id)
        dispatch({ type: FETCH_CART, payload: cart });
    } catch (error) {
        console.log(error.message);
    }
};
