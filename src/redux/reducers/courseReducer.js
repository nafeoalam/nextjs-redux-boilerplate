import { FETCH_COURSES, FETCH_COURSE_CATEGORIES } from '../store-constants'

const courseReducer = (data = { courses: null, courseCategories: null }, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return { ...data, data: action.payload }

        case FETCH_COURSE_CATEGORIES:
            return {...data, courseCategories: action.payload }
        default:
            return data
    }
}

export default courseReducer