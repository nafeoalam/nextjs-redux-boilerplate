import { API_URL } from "src/api/config/config.axios"

export const fetchCourses = () => API_URL.get('/courses')
export const fetchAllCourses = () => API_URL.get('/courses')
export const fetchAllCourseCategories = () => API_URL.get('/course-categories')
export const fetchCategoryCourses = ({ categoryName, page = 1, count = 12 }) => API_URL.get(`/category-slug-courses/${categoryName}?page=${page}&count=${count}`)
export const fetchPopularCourses = () => API_URL.get('/popular-courses?count=8')
export const fetchTestimonial = () => API_URL.get('/testimonials')
export const fetchFeaturedPost = () => API_URL.get('/featured-posts')
export const fetchRecentPost = (count) => API_URL.get(`/blogs?count=${count}`)
export const getCourse = (slugValue) => API_URL.get('/course', {
    params: {
        slug: slugValue
    }
})
export const fetchMegaMenu = ({ cat_count, course_count }) => API_URL.get(`/top-categories?post_count=${course_count}&cat_count=${cat_count}`)


export const getPublicCourse = (slugValue) => API_URL.get(`/public-course?slug=${slugValue}`)

export const getRecommendedCourses = (userId) => API_URL.get(`/recommended-courses/${userId}`)
export const getFeaturedCourses = () => API_URL.get(`/featured-courses/`)
