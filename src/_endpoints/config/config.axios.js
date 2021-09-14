import axios from 'axios';
import config from "./config.json";

export const API_URL = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || config.API_URL });
export const STATIC_URL = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || config.STATIC_URL });
export const NEXT_URL =  axios.create({ baseURL: process.env.NEXT_PUBLIC_FRONTEND_URL || config.FRONTEND_URL });
export const STORAGE_URL = axios.create({ baseURL: process.env.NEXT_PUBLIC_STORAGE_URL || config.STORAGE_URL });


