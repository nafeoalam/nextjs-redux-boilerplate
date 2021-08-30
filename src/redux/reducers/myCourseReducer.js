import { FETCH_ALL_SAVED_COURSES, FETCH_WATCH_HISTORY } from "../store-constants"

const myCourseReducer = (data = { allSavedCourses: null, watchHistory: null }, action) => {
    switch (action.type) {
        case FETCH_ALL_SAVED_COURSES:
            return { ...data, allSavedCourses: action.payload }

        case FETCH_WATCH_HISTORY:
            return { ...data, watchHistory: action.payload }

        default:
            return data
    }
}

export default myCourseReducer