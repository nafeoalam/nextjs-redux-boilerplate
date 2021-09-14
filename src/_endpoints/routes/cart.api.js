import { API_URL } from "../config/config.axios";
import { GET_CART_ITEMS } from "../api.constant";

export const createCart = () => API_URL.post(GET_CART_ITEMS);
export const getCart = () => API_URL.get(GET_CART_ITEMS);
export const updateCart = () => API_URL.put(GET_CART_ITEMS);
export const deleteCart = () => API_URL.delete(GET_CART_ITEMS)
export const fetchCart = () => API_URL.get(GET_CART_ITEMS)


