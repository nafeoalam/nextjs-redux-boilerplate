import { API_URL } from "src/api/config/config.axios"

export const fetchAllSavedCourses = ({ userId }) => API_URL.get(`/get-save-courses/${userId}`)
export const fetchWatchHistory = ({ userId }) => API_URL.get(`/user-courses/${userId}`)