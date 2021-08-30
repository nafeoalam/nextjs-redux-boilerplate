import { API_URL } from "src/api/config/config.axios";

export const signUp = () => API_URL.post('/signup');
export const signIn = () => API_URL.post('/signin');