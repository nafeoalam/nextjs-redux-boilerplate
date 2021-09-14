import { FETCH_COURSES, FETCH_COURSE_CATEGORIES } from '../store-constants';
import * as api from '../../_endpoints/routes/courses.api';

export const getCourses = () => async (dispatch) => {
    try {
        let { data } = await api.fetchCourses();

        dispatch({ type: FETCH_COURSES, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getCourseCategories = () => async (dispatch) => {
    try {
        let { data } = await api.fetchAllCourseCategories()

        dispatch({ type: FETCH_COURSE_CATEGORIES, payload: data })
    } catch (error) {
        console.log(error.message);
    }
};


