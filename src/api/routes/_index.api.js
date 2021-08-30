import { API_URL } from "../config/config.axios";

//Middleware for AUTH
// API_URL.interceptors.request.use(
//     (req) => {
//         if (localStorage.getItem('profile')) {
//             req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//         }

//         return req;
//     },
//     error => {
//         Promise.reject(error)
//     });
