import * as api from '../../_endpoints/routes/courses.api'
import { FETCH_MEGA_MENU } from '../store-constants'

export const getMegaMenu = (cat_count = 12, course_count = 6) => async (dispatch) => {
    try {
        const { data } = await api.fetchMegaMenu({ cat_count, course_count })
        dispatch({ type: FETCH_MEGA_MENU, payload: data })

    } catch (error) {
        console.log(error?.response?.data?.message || error.message)

    }
}

