import { FETCH_ALL_SAVED_COURSES, FETCH_WATCH_HISTORY } from '../store-constants'
import * as api from '../../_endpoints/routes/mycourses.api'

export const getAllSavedCourses = (userId) => async (dispatch) => {
    try {

        let { data: { data } } = await api.fetchAllSavedCourses({ userId })

        dispatch({ type: FETCH_ALL_SAVED_COURSES, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getwatchHistory = (userId) => async (dispatch) => {
    try {

        let { data: { data } } = await api.fetchWatchHistory({ userId })

        dispatch({ type: FETCH_WATCH_HISTORY, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}